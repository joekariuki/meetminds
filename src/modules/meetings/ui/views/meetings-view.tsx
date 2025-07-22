"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

import { Loader } from "@/components/loader";
import { ErrorState } from "@/components/error-state";

export function MeetingsView() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));

  return <div>TODO: Data table</div>;
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
