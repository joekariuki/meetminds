import { Suspense } from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import type { SearchParams } from "nuqs";
import { Metadata } from "next";

import { getQueryClient, trpc } from "@/trpc/server";
import { auth } from "@/lib/auth";

import { loadSearchParams } from "@/modules/meetings/params";
import {
  MeetingsView,
  MeetingsViewError,
  MeetingsViewLoading,
} from "@/modules/meetings/ui/views/meetings-view";
import { MeetingsListHeader } from "@/modules/meetings/ui/components/meetings-list-header";

export const metadata: Metadata = {
  title: "Meetings | MeetMinds",
  description:
    "Create, schedule, and manage your meetings with your AI agents.",
};

interface Props {
  searchParams: Promise<SearchParams>;
}

export default async function MeetingsPage({ searchParams }: Props) {
  const filters = await loadSearchParams(searchParams);

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(
    trpc.meetings.getMany.queryOptions({
      ...filters,
    })
  );

  return (
    <>
      <MeetingsListHeader />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<MeetingsViewLoading />}>
          <ErrorBoundary fallback={<MeetingsViewError />}>
            <MeetingsView />
          </ErrorBoundary>
        </Suspense>
      </HydrationBoundary>
    </>
  );
}
