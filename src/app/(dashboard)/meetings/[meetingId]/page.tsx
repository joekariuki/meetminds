import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";

import { auth } from "@/lib/auth";
import { getQueryClient } from "@/trpc/server";
import { trpc } from "@/trpc/server";

import {
  MeetingDetailView,
  MeetingDetailError,
  MeetingDetailLoading,
} from "@/modules/meetings/ui/views/meeting-detail-view";

interface Props {
  params: Promise<{ meetingId: string }>;
}

export default async function MeetingPage({ params }: Props) {
  const { meetingId } = await params;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(
    trpc.meetings.getOne.queryOptions({
      id: meetingId,
    })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<MeetingDetailLoading />}>
        <ErrorBoundary fallback={<MeetingDetailError />}>
          <MeetingDetailView meetingId={meetingId} />
        </ErrorBoundary>
      </Suspense>
    </HydrationBoundary>
  );
}
