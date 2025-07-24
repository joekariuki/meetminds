import { cn } from "@/lib/utils";

interface Props {
  size?: "sm" | "md" | "lg";
  color?: "default" | "muted" | "primary";
  className?: string;
}

const sizeClasses = {
  sm: "w-0.5 h-0.5",
  md: "w-1 h-1",
  lg: "w-1.5 h-1.5",
};

const colorClasses = {
  default: "bg-foreground",
  muted: "bg-muted-foreground",
  primary: "bg-primary",
};

export function LoadingDots({
  size = "md",
  color = "muted",
  className,
}: Props) {
  const dotClass = cn(
    sizeClasses[size],
    colorClasses[color],
    "rounded-full animate-pulse"
  );

  return (
    <div className={cn("flex items-center space-x-1", className)}>
      <div
        className={dotClass}
        style={{ animationDelay: "0ms", animationDuration: "1.4s" }}
      />
      <div
        className={dotClass}
        style={{ animationDelay: "200ms", animationDuration: "1.4s" }}
      />
      <div
        className={dotClass}
        style={{ animationDelay: "400ms", animationDuration: "1.4s" }}
      />
    </div>
  );
}
