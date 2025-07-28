"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";

import { Loader } from "@/components/loader";
import { ErrorState } from "@/components/error-state";

interface Props {
  meetingId: string;
}

export function CallView({ meetingId }: Props) {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.meetings.getOne.queryOptions({ id: meetingId })
  );

  if (data.status === "completed") {
    return (
      <div className="flex h-screen items-center justify-center">
        <ErrorState
          title="This meeting has ended"
          description="You can no longer join this meeting"
        />
      </div>
    );
  }

  return <div>{JSON.stringify(data, null, 2)}</div>;
}

export function CallLoading() {
  return (
    <Loader title="Loading Call" description="This may take a few seconds..." />
  );
}

export function CallError() {
  return (
    <ErrorState title="Error Loading Call" description="Something went wrong" />
  );
}
