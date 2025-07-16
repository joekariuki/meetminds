"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import { Loader } from "@/components/loader";
import { ErrorState } from "@/components/error-state";

export function AgentsView() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

  return <div>{JSON.stringify(data, null, 2)}</div>;
}

export function AgentsViewLoading() {
  return (
    <Loader
      title="Loading Agents"
      description="This may take a few seconds..."
    />
  );
}

export function AgentsViewError() {
  return (
    <ErrorState
      title="Error loading agents"
      description="Something went wrong"
    />
  );
}
