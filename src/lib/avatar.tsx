import { createAvatar } from "@dicebear/core";
import {
  botttsNeutral,
  initials,
  glass,
  lorelei,
  notionists,
  openPeeps,
} from "@dicebear/collection";

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
 * Creates an avatar instance based on the variant and seed
 */
export function createAvatarInstance({ seed, variant }: Props) {
  switch (variant) {
    case "botttsNeutral":
      return createAvatar(botttsNeutral, {
        seed,
      });
    case "initials":
      return createAvatar(initials, {
        seed,
        fontWeight: 500,
        fontSize: 42,
        backgroundColor: ["5b21b6"],
      });
    case "glass":
      return createAvatar(glass, {
        seed,
      });
    case "lorelei":
      return createAvatar(lorelei, {
        seed,
      });
    case "notionists":
      return createAvatar(notionists, {
        seed,
      });
    case "openPeeps":
      return createAvatar(openPeeps, {
        seed,
      });
    default:
      return createAvatar(notionists, {
        seed,
      });
  }
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
