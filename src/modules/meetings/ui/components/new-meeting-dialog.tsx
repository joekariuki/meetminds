"use client";

import { ResponsiveDialog } from "@/components/responsive-dialog";

interface NewMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NewMeetingDialog({
  open,
  onOpenChange,
}: NewMeetingDialogProps) {
  return (
    <ResponsiveDialog
      title="New Meeting"
      description="Create a new meeting"
      open={open}
      onOpenChange={onOpenChange}
    >
      TODO: Meeting Form
    </ResponsiveDialog>
  );
}
