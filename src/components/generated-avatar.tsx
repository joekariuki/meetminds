import { createAvatar } from "@dicebear/core";
import {
  botttsNeutral,
  initials,
  glass,
  lorelei,
  notionists,
  openPeeps,
} from "@dicebear/collection";

import { cn } from "@/lib/utils";
import { AvatarVariant, createAvatarInstance } from "@/lib/avatar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface GeneratedAvatarProps {
  seed: string;
  className?: string;
  variant?: AvatarVariant;
}

export function GeneratedAvatar({
  seed,
  className,
  variant = "notionists",
}: GeneratedAvatarProps) {
  const avatar = createAvatarInstance({ seed, variant });

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={avatar.toDataUri()} alt="Avatar" />
      <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
}
