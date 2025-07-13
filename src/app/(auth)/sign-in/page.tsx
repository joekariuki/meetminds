import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { SignInView } from "@/modules/auth/ui/views/sign-in-view";

/**
 * Server-side React component that renders the sign-in view or redirects authenticated users.
 *
 * If a user session is detected, redirects to the home page. Otherwise, displays the sign-in UI.
 */
export default async function SignIn() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    redirect("/");
  }

  return <SignInView />;
}
