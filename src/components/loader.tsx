import * as React from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const loaderVariants = cva("animate-spin", {
  variants: {
    variant: {
      page: "",
      inline: "",
    },
    size: {
      default: "h-10 w-10",
      sm: "h-4 w-4",
      lg: "h-16 w-16",
    },
    color: {
      default: "text-violet-600",
      primary: "text-primary",
      secondary: "text-secondary",
      current: "text-current",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "page",
    size: "default",
    color: "default",
  },
});

type LoaderVariantProps = VariantProps<typeof loaderVariants>;

interface LoaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  /**
   * The variant of the loader
   * @default "page"
   */
  variant?: LoaderVariantProps["variant"];

  /**
   * The size of the spinner
   * @default "default"
   */
  size?: LoaderVariantProps["size"];

  /**
   * The color of the spinner
   * @default "default"
   */
  color?: LoaderVariantProps["color"];

  /**
   * Show the app logo and name (only applies to page variant)
   * @default true
   */
  showBranding?: boolean;

  /**
   * Custom height for the container (only applies to page variant)
   * @default "h-screen"
   */
  height?: string;

  /**
   * Title text to display below the spinner (only applies to page variant)
   */
  title?: string;

  /**
   * Description text to display below the title (only applies to page variant)
   */
  description?: string;

  /**
   * Additional classes to apply to the component
   */
  className?: string;
}

/**
 * A reusable loader component that can be used across multiple pages
 * or as an inline spinner within other components like buttons
 */
export function Loader({
  variant,
  size,
  color,
  showBranding = true,
  height = "h-screen",
  title,
  description,
  className,
  ...props
}: LoaderProps) {
  // For inline variant, just return the spinner
  if (variant === "inline") {
    return (
      <Loader2
        className={cn(loaderVariants({ variant, size, color, className }))}
      />
    );
  }

  if (title || description) {
    return (
      <div
        className={cn(
          "py-4 px-8 flex flex-1 items-center justify-center flex-col ",
          height
        )}
        {...props}
      >
        <div className="flex flex-col items-center justify-center gap-y-6 bg-background rounded-lg p-10 shadow-sm">
          <Loader2 className="size-8 text-primary animate-spin" />
          <div className="flex flex-col gap-y-2 text-center">
            {title && <h6 className="text-lg font-medium">{title}</h6>}
            {description && <p className="text-sm">{description}</p>}
          </div>
        </div>
      </div>
    );
  }

  // For page variant, return the full page loader
  return (
    <div
      className={cn(
        "flex items-center justify-center flex-col gap-y-6",
        height
      )}
      {...props}
    >
      {showBranding && (
        <div className="flex items-center gap-4">
          <Image src="/logo.svg" alt="Image" width={64} height={64} />
          <p className="text-5xl font-semibold">MeetMinds</p>
        </div>
      )}
      <Loader2
        className={cn(loaderVariants({ variant, size, color, className }))}
      />
    </div>
  );
}

export { loaderVariants };
