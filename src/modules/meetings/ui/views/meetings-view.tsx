"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

import { Loader } from "@/components/loader";
import { ErrorState } from "@/components/error-state";
import { DataTable } from "@/components/data-table";

import { columns } from "../components/columns";

export function MeetingsView() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));

  return (
    // Data placeholder
    <div className="flex-1 flex-col pb-4 px-4 md:px-8 ">
      <DataTable data={data.items} columns={columns} />
    </div>
  );
}

export function MeetingsViewLoading() {
  return (
    <Loader
      title="Loading Meetings"
      description="This may take a few seconds..."
    />
  );
}

export function MeetingsViewError() {
  return (
    <ErrorState
      title="Error Loading Meetings"
      description="Something went wrong"
    />
  );
}
