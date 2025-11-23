import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { HomeView } from "@/modules/home/ui/views/home-view";


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
