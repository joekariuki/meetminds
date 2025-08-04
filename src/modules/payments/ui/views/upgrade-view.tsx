"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import { authClient } from "@/lib/auth/client";
import { ErrorState } from "@/components/error-state";
import { Loader } from "@/components/loader";

export function UpgradeView() {
  return <div>UpgradeView</div>;
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
