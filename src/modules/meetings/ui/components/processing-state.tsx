import { EmptyState } from "@/components/empty-state";

export function ProcessingState() {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-y-8 items-center justify-center">
      <EmptyState
        image="/meetings/processing.svg"
        title="Meeting completed"
        description="This meeting was completed, a summary will appear here soon"
      />
    </div>
  );
}
