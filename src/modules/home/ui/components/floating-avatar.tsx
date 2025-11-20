"use client";

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
}

export function FloatingAvatar({
  seed,
  label,
  variant = "notionists",
  className,
  delay = 0,
}: FloatingAvatarProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            "absolute animate-float",
            className
          )}
          style={{
            animationDelay: `${delay}s`,
          }}
        >
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all" />
            <GeneratedAvatar
              seed={seed}
              variant={variant}
              className="size-16 border-2 border-background shadow-lg relative z-10"
            />
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
}


