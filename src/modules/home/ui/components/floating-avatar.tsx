"use client";

import { useState } from "react";
import { GeneratedAvatar } from "@/components/generated-avatar";
import { AvatarVariant } from "@/lib/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface FloatingAvatarProps {
  seed: string;
  label: string;
  variant?: AvatarVariant;
  className?: string;
  delay?: number;
  showByDefault?: boolean;
  isActive?: boolean;
}

export function FloatingAvatar({
  seed,
  label,
  variant = "notionists",
  className,
  delay = 0,
  isActive = false,
}: FloatingAvatarProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Show tooltip if it's active in the sequence OR if user is hovering
  const shouldShow = isActive || isHovered;

  return (
    <Tooltip open={shouldShow} onOpenChange={setIsHovered}>
      <TooltipTrigger asChild>
        <div
          className={cn("absolute animate-float z-10", className)}
          style={{
            animationDelay: `${delay}s`,
          }}
        >
          <div className="relative group cursor-pointer pointer-events-auto">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all" />
            <GeneratedAvatar
              seed={seed}
              variant={variant}
              className="size-16 border-2 border-background shadow-lg relative z-10"
            />
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent sideOffset={8}>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
}
