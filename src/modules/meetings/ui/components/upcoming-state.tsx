import Link from "next/link";
import { VideoIcon, BanIcon } from "lucide-react";

import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/ui/button";

interface Props {
  meetingId: string;
  onCancelMeeting: () => void;
  isCancelling: boolean;
}

export function UpcomingState({
  meetingId,
  onCancelMeeting,
  isCancelling,
}: Props) {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-y-8 items-center justify-center">
      <EmptyState
        image="/meetings/upcoming.svg"
        title="Not started yet"
        description="Once you start this meeting, a summary will appear here"
      />
      <div className="flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-2 w-full p-4">
        <Button
          variant="secondary"
          className="w-full lg:w-auto"
          onClick={onCancelMeeting}
          disabled={isCancelling}
        >
          <BanIcon />
          Cancel Meeting
        </Button>

        <Button asChild className="w-full lg:w-auto" disabled={isCancelling}>
          <Link href={`/call/${meetingId}`}>
            <VideoIcon />
            Start Meeting
          </Link>
        </Button>
      </div>
    </div>
  );
}
