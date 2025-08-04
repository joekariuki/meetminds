"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import { authClient } from "@/lib/auth/client";
import { ErrorState } from "@/components/error-state";
import { Loader } from "@/components/loader";

export function UpgradeView() {
  const trpc = useTRPC();

  const { data: products } = useSuspenseQuery(
    trpc.premium.getProducts.queryOptions()
  );

  const { data: currentSubscription } = useSuspenseQuery(
    trpc.premium.getCurrentSubscription.queryOptions()
  );

  return (
    <div className="flex flex-1 flex-col p-4 md:px-8 gap-y-10">
      <div className="mt-4 flex-1 flex flex-col gap-y-10 items-center">
        <h5 className="font-medium text-2xl md:text-3xl">
          You are on the{" "}
          <span className="font-semibold text-primary capitalize">
            {currentSubscription?.name ?? "free"}
          </span>{" "}
          plan
        </h5>
      </div>
    </div>
  );
}

export function UpgradeViewLoading() {
  return <Loader title="Loading" description="This may take a few seconds" />;
}

export function UpgradeViewError() {
  return (
    <ErrorState
      title="Error"
      description="Something went wrong. Please try again later"
    />
  );
}
