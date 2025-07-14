import { createAvatar } from "@dicebear/core";
import { botttsNeutral, initials, glass } from "@dicebear/collection";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface GeneratedAvatarProps {
  seed: string;
  className?: string;
  style?: "botttsNeutral" | "initials" | "glass";
}

export function GeneratedAvatar({
  seed,
  className,
  style = "botttsNeutral",
}: GeneratedAvatarProps) {
  let avatar;

  switch (style) {
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
      });
      break;
    case "glass":
      avatar = createAvatar(glass, {
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
