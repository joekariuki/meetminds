import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/ui/button";

export function CancelledState() {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-y-8 items-center justify-center">
      <EmptyState
        image="/meetings/cancelled.svg"
        title="Meeting cancelled"
        description="This meeting was cancelled by the host"
      />
      <div className="flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-2 w-full p-4">
        <Button variant="default" asChild className="w-full lg:w-auto">
          <Link href="/meetings">
            <ArrowLeftIcon />
            Back to meetings
          </Link>
        </Button>
      </div>
    </div>
  );
}
