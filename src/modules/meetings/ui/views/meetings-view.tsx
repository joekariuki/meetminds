"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

import { Loader } from "@/components/loader";
import { ErrorState } from "@/components/error-state";
import { DataTable } from "@/components/data-table";

import { columns } from "../components/columns";
import { EmptyState } from "@/components/empty-state";

export function MeetingsView() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));

  return (
    <div className="flex-1 flex-col pb-4 px-4 md:px-8 ">
      {data.items.length === 0 ? (
        <EmptyState
          title="Create your first meeting"
          description="Schedule a meeting to connect with others. 
          Each meeting lets you collaborate, share ideas, and interact with participants in real time."
        />
      ) : (
        <DataTable data={data.items} columns={columns} />
      )}
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
