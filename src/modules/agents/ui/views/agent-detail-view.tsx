"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

interface Props {
  agentId: string;
}

export function AgentDetailView({ agentId }: Props) {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.agents.getOne.queryOptions({
      id: agentId,
    })
  );

  return (
    <div className="flex-1 py-4 px-4 md:px-8 flex flex-col gap-y-4">
      AgentDetailView {JSON.stringify(data, null, 2)}
    </div>
  );
}

export function AgentDetailLoading() {
  return <div>Loading...</div>;
}

export function AgentDetailError() {
  return <div>Error</div>;
}
