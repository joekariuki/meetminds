import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Metadata } from "next";

import { auth } from "@/lib/auth";
import { SignUpView } from "@/modules/auth/ui/views/sign-up-view";

export const metadata: Metadata = {
  title: "Sign Up | MeetMinds",
  description: "Create your MeetMinds account and unlock AI-powered coaching and interactive meeting experiences",
};

export default async function SignUp() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    redirect("/");
  }

  return <SignUpView />;
}
