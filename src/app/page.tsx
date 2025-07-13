import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { HomeView } from "@/modules/home/ui/views/home-view";

/**
 * Server-side page component that renders the home view for authenticated users or redirects unauthenticated users to the sign-in page.
 *
 * Checks for an active user session using the current request headers. If a session is not found, the user is redirected to the sign-in route. Otherwise, the authenticated home view is rendered.
 */
export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  return <HomeView />;
}
