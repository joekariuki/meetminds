"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";

import { ErrorState } from "@/components/error-state";
import { Loader } from "@/components/loader";

interface Props {
  meetingId: string;
}

export function MeetingDetailView({ meetingId }: Props) {
  const trpc = useTRPC();

  const { data } = useSuspenseQuery(
    trpc.meetings.getOne.queryOptions({
      id: meetingId,
    })
  );
  return (
    <>
      <div className="flex flex-col flex-2 p-4 md:px-8 gap-y-4">
        {JSON.stringify(data, null, 2)}
      </div>
    </>
  );
}

export function MeetingDetailError() {
  return (
    <ErrorState
      title="Error Loading Meeting"
      description="Please try again later"
    />
  );
}

export function MeetingDetailLoading() {
  return (
    <Loader
      title="Loading Meeting"
      description="This may take a few seconds..."
    />
  );
}
