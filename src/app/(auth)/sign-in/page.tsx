import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Metadata } from "next";

import { auth } from "@/lib/auth";
import { SignInView } from "@/modules/auth/ui/views/sign-in-view";

export const metadata: Metadata = {
  title: "Sign In | MeetMinds",
  description:
    "Access your MeetMinds account for AI-powered coaching and interactive meeting sessions",
};

export default async function SignIn() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    redirect("/");
  }

  return <SignInView />;
}
