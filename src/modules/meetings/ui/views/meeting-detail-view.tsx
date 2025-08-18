"use client";

import { useState } from "react";
import {
  useSuspenseQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { useTRPC } from "@/trpc/client";
import { useConfirm } from "@/hooks/use-confirm";

import { ErrorState } from "@/components/error-state";
import { Loader } from "@/components/loader";

import { MeetingDetailHeader } from "../components/meeting-detail-header";
import { UpdateMeetingDialog } from "../components/update-meeting-dialog";
import { UpcomingState } from "../components/upcoming-state";
import { ActiveState } from "../components/active-state";
import { CancelledState } from "../components/cancelled-state";
import { ProcessingState } from "../components/processing-state";
import { CompletedState } from "../components/completed-state";

interface Props {
  meetingId: string;
}

export function MeetingDetailView({ meetingId }: Props) {
  const router = useRouter();
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const [DeleteConfirmation, confirmDelete] = useConfirm(
    `Are you sure you want to delete this meeting?`,
    "This action cannot be undone."
  );

  const [updateMeetingDialogOpen, setUpdateMeetingDialogOpen] = useState(false);

  const { data } = useSuspenseQuery(
    trpc.meetings.getOne.queryOptions({
      id: meetingId,
    })
  );

  const deleteMeeting = useMutation(
    trpc.meetings.delete.mutationOptions({
      onSuccess: async () => {
        await queryClient.invalidateQueries(
          trpc.meetings.getMany.queryOptions({})
        );
        // Invalidate free tier usage
        await queryClient.invalidateQueries(
          trpc.premium.getFreeUsage.queryOptions()
        );

        router.push("/meetings");
      },
      onError: (error) => {
        toast.error(
          error.message ?? "Failed to delete meeting. Please try again later."
        );
      },
    })
  );

  const handleDeleteMeeting = async () => {
    const ok = await confirmDelete();

    if (!ok) return;

    await deleteMeeting.mutateAsync({ id: meetingId });
  };

  const isActive = data.status === "active";
  const isUpcoming = data.status === "upcoming";
  const isCancelled = data.status === "cancelled";
  const isCompleted = data.status === "completed";
  const isProcessing = data.status === "processing";

  return (
    <>
      <DeleteConfirmation />
      <UpdateMeetingDialog
        open={updateMeetingDialogOpen}
        onOpenChange={setUpdateMeetingDialogOpen}
        initialValues={data}
      />
      <div className="flex flex-col flex-2 p-4 md:px-8 gap-y-4">
        <MeetingDetailHeader
          meetingId={meetingId}
          meetingName={data.name}
          onEdit={() => setUpdateMeetingDialogOpen(true)}
          onDelete={handleDeleteMeeting}
        />
        {isCancelled && <CancelledState />}
        {isCompleted && <CompletedState data={data} />}
        {isProcessing && <ProcessingState />}
        {isUpcoming && <UpcomingState meetingId={meetingId} />}
        {isActive && <ActiveState meetingId={meetingId} />}
      </div>
    </>
  );
}

export function MeetingDetailError() {
  return (
    <ErrorState
      title="Error Loading Meeting"
      description="Please try again later"
    />
  );
}

export function MeetingDetailLoading() {
  return (
    <Loader
      title="Loading Meeting"
      description="This may take a few seconds..."
    />
  );
}
