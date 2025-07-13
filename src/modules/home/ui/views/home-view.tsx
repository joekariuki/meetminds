"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { useRouter } from "next/navigation";

/**
 * Renders the home view for authenticated users, displaying the user's name and a sign-out button.
 *
 * Shows a loading indicator while authentication status is being determined. If the user is not authenticated, renders nothing.
 */
export function HomeView() {
  const router = useRouter();
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
          onClick={() =>
            authClient.signOut({
              fetchOptions: {
                onSuccess: () => {
                  router.push("/sign-in");
                },
              },
            })
          }
          className="cursor-pointer"
        >
          Sign out
        </Button>
      </div>
    );
  }
}
