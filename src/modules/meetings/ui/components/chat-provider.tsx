"use client";

import { authClient } from "@/lib/auth/client";

import { Loader } from "@/components/loader";
import { ChatUI } from "./chat-ui";

interface Props {
  meetingId: string;
  meetingName: string;
}

export function ChatProvider({ meetingId, meetingName }: Props) {
  const { data, isPending } = authClient.useSession();

  if (isPending || !data?.user) {
    return (
      <Loader
        title="Loading..."
        description="Please wait while we load the chat"
      />
    );
  }

  return (
    <ChatUI
      meetingId={meetingId}
      meetingName={meetingName}
      userId={data.user.id}
      userName={data.user.name}
      userImage={data.user.image!}
    />
  );
}
