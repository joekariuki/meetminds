import { AlertCircleIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
}
/**
 * A reusable error state component that can be used across multiple pages
 */
export function ErrorState({ title, description }: Props) {
  return (
    <div className="py-4 px-8 flex flex-1 items-center justify-center flex-col ">
      <div className="flex flex-col items-center justify-center gap-y-6 bg-background rounded-lg p-10 shadow-sm">
        <AlertCircleIcon className="size-6 text-red-500" />
        <div className="flex flex-col gap-y-2 text-center">
          {title && <h6 className="text-lg font-medium">{title}</h6>}
          {description && <p className="text-sm">{description}</p>}
        </div>
      </div>
    </div>
  );
}
