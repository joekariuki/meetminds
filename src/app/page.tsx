"use client";

import Image from "next/image";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { data: session } = authClient.useSession();

  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen flex-col gap-y-6">
        <div className="flex items-center gap-4">
          <Image src="/logo.svg" alt="Image" width={64} height={64} />
          <p className="text-5xl font-semibold">MeetMinds</p>
        </div>
        <Loader2 className="animate-spin text-violet-600 h-10 w-10" />
      </div>
    );
  }

  if (session) {
    return (
      <div className="p-4 flex flex-col gap-y-4">
        <p>Logged in as {session.user.name}</p>
        <Button onClick={() => authClient.signOut()}>Sign out</Button>
      </div>
    );
  }
}
