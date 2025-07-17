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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type AvatarVariant =
  | "botttsNeutral"
  | "initials"
  | "glass"
  | "lorelei"
  | "notionists"
  | "openPeeps";

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
  let avatar;

  switch (variant) {
    case "botttsNeutral":
      avatar = createAvatar(botttsNeutral, {
        seed,
      });
      break;
    case "initials":
      avatar = createAvatar(initials, {
        seed,
        fontWeight: 500,
        fontSize: 42,
        backgroundColor: ["5b21b6"],
      });
      break;
    case "glass":
      avatar = createAvatar(glass, {
        seed,
      });

      break;
    case "lorelei":
      avatar = createAvatar(lorelei, {
        seed,
      });
      break;
    case "notionists":
      avatar = createAvatar(notionists, {
        seed,
      });
      break;
    case "openPeeps":
      avatar = createAvatar(openPeeps, {
        seed,
      });
      break;
    default:
      avatar = createAvatar(notionists, {
        seed,
      });
      break;
  }

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={avatar.toDataUri()} alt="Avatar" />
      <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
}
