"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";

export function HomeView() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <Loader />;
  }

  if (session) {
    return (
      <div className="p-4 flex flex-col gap-y-4">
        <p>Logged in as {session.user.name}</p>
        <Button
          disabled={isPending}
          onClick={() => authClient.signOut()}
          className="cursor-pointer"
        >
          {isPending ? (
            <Loader variant="inline" size="sm" color="current" />
          ) : (
            "Sign out"
          )}
        </Button>
      </div>
    );
  }
}
