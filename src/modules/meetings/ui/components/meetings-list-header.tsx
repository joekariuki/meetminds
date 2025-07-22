"use client";

import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function MeetingsListHeader() {
  return (
    <>
      <div className="p-4 md:px-8 flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h5 className="text-xl font-medium">My Meetings</h5>
          <Button onClick={() => {}}>
            <PlusIcon />
            New Meeting
          </Button>
        </div>
        <div className="flex items-center gap-x-2 p-1">
          {/* TODO: Add search filters */}
        </div>
      </div>
    </>
  );
}
