export type AvatarVariant =
  | "botttsNeutral"
  | "initials"
  | "glass"
  | "lorelei"
  | "notionists"
  | "openPeeps";

interface Props {
  seed: string;
  variant: AvatarVariant;
}

/**
 * Generates an avatar URI based on the variant and seed
 */
export function generateAvatarUri({ seed, variant }: Props) {
  // Convert camelCase variant to kebab-case for the API
  const style = variant.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  return `https://api.dicebear.com/9.x/${style}/svg?seed=${encodeURIComponent(
    seed
  )}`;
}
