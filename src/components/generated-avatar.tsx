import { cn } from "@/lib/utils";
import { AvatarVariant, generateAvatarUri } from "@/lib/avatar";
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
  const avatarUrl = generateAvatarUri({ seed, variant });

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={avatarUrl} alt="Avatar" />
      <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
}
