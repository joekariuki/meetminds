import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { SignUpView } from "@/modules/auth/ui/views/sign-up-view";

/**
 * Server component that renders the sign-up page or redirects authenticated users to the home page.
 *
 * If a user session is detected, the user is redirected to the root path ("/"). Otherwise, the sign-up view is displayed.
 */
export default async function SignUp() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    redirect("/");
  }

  return <SignUpView />;
}
