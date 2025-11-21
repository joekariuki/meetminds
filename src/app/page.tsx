import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Metadata } from "next";

import { auth } from "@/lib/auth";
import { HomeView } from "@/modules/home/ui/views/home-view";

export const metadata: Metadata = {
  title: "MeetMinds | Talk to Custom AI Agents on Live Calls",
  description:
    "Create custom AI agents, talk to them over live video, and get automatic transcripts, summaries, and searchable insights for every session.",
  keywords: [
    "AI agents",
    "live video",
    "transcripts",
    "summaries",
    "searchable insights",
    "meetings",
    "coaching",
    "tutors",
    "life coaching",
    "business coaching",
    "language learning",
    "AI coaching",
    "AI tutors",
    "AI life coaching",
    "AI business coaching",
    "AI language learning",
    "AI tutoring",
    "AI life coaching",
    "AI business coaching",
    "AI language learning",
    "AI tutoring",
    "AI life coaching",
    "AI business coaching",
  ],
  openGraph: {
    title: "MeetMinds | Talk to Custom AI Agents on Live Calls",
    description:
      "Create custom AI agents, talk to them over live video, and get automatic transcripts, summaries, and searchable insights for every session.",
    images: ["/public/og.jpg"],
  },
  twitter: {
    title: "MeetMinds | Talk to Custom AI Agents on Live Calls",
    description:
      "Create custom AI agents, talk to them over live video, and get automatic transcripts, summaries, and searchable insights for every session.",
    images: ["/public/og.jpg"],
  },
};

export default async function LandingPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Redirect authenticated users to dashboard
  if (session) {
    redirect("/agents");
  }

  return <HomeView />;
}
