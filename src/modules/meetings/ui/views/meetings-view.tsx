"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

import { Loader } from "@/components/loader";
import { ErrorState } from "@/components/error-state";

export function MeetingsView() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));

  return (
    // Data placeholder
    <div className="overflow-x-scroll">{JSON.stringify(data, null, 2)}</div>
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
