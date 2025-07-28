"use client";

import { authClient } from "@/lib/auth-client";
import { generateAvatarUri } from "@/lib/avatar";

import { Loader } from "@/components/loader";

import { CallConnect } from "./call-connect";

interface Props {
  meetingId: string;
  meetingName: string;
}

export function CallProvider({ meetingId, meetingName }: Props) {
  const { data, isPending } = authClient.useSession();

  if (!data || isPending) {
    return (
      <div className="flex h-screen items-center justify-center bg-radial from-sidebar-accent to-sidebar">
        <Loader variant="page" className="text-white" />
      </div>
    );
  }

  return (
    <CallConnect
      meetingId={meetingId}
      meetingName={meetingName}
      userId={data.user.id}
      userName={data.user.name}
      userImage={
        data.user.image ??
        generateAvatarUri({
          seed: data.user.name,
          variant: "initials",
        })
      }
    />
  );
}
