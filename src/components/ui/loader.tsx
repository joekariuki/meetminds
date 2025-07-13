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

interface LoaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  /**
   * The variant of the loader
   * @default "page"
   */
  variant?: LoaderVariantProps['variant'];
  
  /**
   * The size of the spinner
   * @default "default"
   */
  size?: LoaderVariantProps['size'];
  
  /**
   * The color of the spinner
   * @default "default"
   */
  color?: LoaderVariantProps['color'];
  
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
   * Additional classes to apply to the component
   */
  className?: string;
}

/**
 * Displays a customizable loading spinner, either as a full-page loader with optional branding or as an inline indicator.
 *
 * Renders a centered loader with optional logo and app name for the "page" variant, or a standalone spinner for the "inline" variant. Spinner appearance can be adjusted via variant, size, and color props.
 *
 * @param variant - Loader style variant ("page" or "inline")
 * @param size - Spinner size
 * @param color - Spinner color
 * @param showBranding - Whether to display branding (only for "page" variant)
 * @param height - Custom height for the container (only for "page" variant)
 * @param className - Additional CSS classes for styling
 */
export function Loader({
  variant,
  size,
  color,
  showBranding = true,
  height = "h-screen",
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

  // For page variant, return the full page loader
  return (
    <div 
      className={cn("flex items-center justify-center flex-col gap-y-6", height)}
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
