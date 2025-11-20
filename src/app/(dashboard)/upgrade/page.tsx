import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Metadata } from "next";

import { getQueryClient, trpc } from "@/trpc/server";
import { auth } from "@/lib/auth";
import {
  UpgradeView,
  UpgradeViewError,
  UpgradeViewLoading,
} from "@/modules/payments/ui/views/upgrade-view";

export const metadata: Metadata = {
  title: "Upgrade | MeetMinds",
  description: "Upgrade to a paid plan to access all features.",
};

export default async function UpgradePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  const queryClient = getQueryClient();
  // Prefect current user subscription
  void queryClient.prefetchQuery(
    trpc.premium.getCurrentSubscription.queryOptions()
  );

  // Prefetch premium products
  void queryClient.prefetchQuery(trpc.premium.getProducts.queryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<UpgradeViewLoading />}>
        <ErrorBoundary fallback={<UpgradeViewError />}>
          <UpgradeView />
        </ErrorBoundary>
      </Suspense>
    </HydrationBoundary>
  );
}
