import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import {
  AgentDetailView,
  AgentDetailError,
  AgentDetailLoading,
} from "@/modules/agents/ui/views/agent-detail-view";

interface Props {
  params: Promise<{ agentId: string }>;
}

export default async function AgentPage({ params }: Props) {
  const { agentId } = await params;

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.agents.getOne.queryOptions({
      id: agentId,
    })
  );

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<AgentDetailLoading />}>
          <ErrorBoundary fallback={<AgentDetailError />}>
            <AgentDetailView agentId={agentId} />
          </ErrorBoundary>
        </Suspense>
      </HydrationBoundary>
    </>
  );
}
