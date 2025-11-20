import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Metadata } from "next";

import { auth } from "@/lib/auth";
import { getQueryClient } from "@/trpc/server";
import { trpc } from "@/trpc/server";

import { CallView } from "@/modules/call/ui/views/call-view";

interface Props {
  params: Promise<{
    meetingId: string;
  }>;
}

export const metadata: Metadata = {
  title: "Call | MeetMinds",
  description: "Join a meeting with your AI agent.",
};

export default async function CallPage({ params }: Props) {
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
      <CallView meetingId={meetingId} />
    </HydrationBoundary>
  );
}
