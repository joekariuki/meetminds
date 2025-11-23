"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CornerDownRightIcon, VideoIcon, PhoneIcon } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { AvatarVariant } from "@/lib/avatar";
import { useTRPC } from "@/trpc/client";

import { GeneratedAvatar } from "@/components/generated-avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/loader";

import { AgentsGetMany } from "../../types";

function StartCallButton({
  agentId,
  agentName,
}: {
  agentId: string;
  agentName: string;
}) {
  const router = useRouter();
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const createMeeting = useMutation(
    trpc.meetings.create.mutationOptions({
      onSuccess: async (data) => {
        await queryClient.invalidateQueries(
          trpc.meetings.getMany.queryOptions({})
        );
        await queryClient.invalidateQueries(
          trpc.premium.getFreeUsage.queryOptions()
        );
        router.push(`/call/${data.id}`);
      },
      onError: (error) => {
        toast.error(error.message);
        if (error.data?.code === "FORBIDDEN") {
          router.push("/upgrade");
        }
      },
    })
  );

  const handleStartCall = (e: React.MouseEvent) => {
    e.stopPropagation();
    createMeeting.mutate({
      name: `Call with ${agentName}`,
      agentId,
    });
  };

  return (
    <Button
      variant="default"
      size="sm"
      onClick={handleStartCall}
      disabled={createMeeting.isPending}
      className="gap-x-2"
    >
      {createMeeting.isPending ? (
        <>
          <Loader variant="inline" color="current" size="sm" />
          Starting...
        </>
      ) : (
        <>
          <PhoneIcon className="size-4" />
          Start Call
        </>
      )}
    </Button>
  );
}

export const columns: ColumnDef<AgentsGetMany[number]>[] = [
  {
    accessorKey: "name",
    header: "Agent Name",
    cell: ({ row }) => (
      <div className="flex flex-col gap-y-1">
        <div className="flex items-center gap-x-2">
          <GeneratedAvatar
            seed={row.original.name}
            variant={(row.original.avatarType as AvatarVariant) || "notionists"}
            className="border size-9"
          />
          <span className="font-semibold capitalize">{row.original.name}</span>
        </div>
        <div className="flex items-center gap-x-2">
          <CornerDownRightIcon className="size-3 text-muted-foreground" />
          <span className="text-sm text-muted-foreground max-w-[200px] truncate normal-case">
            {row.original.instructions}
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "meetingCount",
    header: "Meetings",
    cell: ({ row }) => (
      <Badge
        variant="outline"
        className="flex items-center gap-x-2 [&>svg]:size-4"
      >
        <VideoIcon className="text-blue-700" />
        {row.original.meetingCount}{" "}
        {row.original.meetingCount === 1 ? "meeting" : "meetings"}
      </Badge>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <StartCallButton
        agentId={row.original.id}
        agentName={row.original.name}
      />
    ),
  },
];
