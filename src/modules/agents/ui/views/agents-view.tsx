"use client";

import { useQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import { Loader } from "@/components/loader";

export function AgentsView() {
  const trpc = useTRPC();
  const { data, isLoading } = useQuery(trpc.agents.getMany.queryOptions());

  if (isLoading) {
    return (
      <Loader
        title="Loading Agents"
        description="This may take a few seconds..."
      />
    );
  }

  return <div>{JSON.stringify(data, null, 2)}</div>;
}
