import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Metadata } from "next";

import { auth } from "@/lib/auth";
import { HomeView } from "@/modules/home/ui/views/home-view";

export const metadata: Metadata = {
  title: "MeetMinds",
  description:
    "AI-powered agents for interactive video coaching and on-demand meeting sessions",
};

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/meetings");
  }

  return <HomeView />;
}