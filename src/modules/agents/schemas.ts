import { z } from "zod";

// Define the avatar type enum to match GeneratedAvatar component
export const avatarTypeEnum = z.enum([
  "notionists",
  "botttsNeutral",
  "initials",
  "glass",
  "lorelei",
  "openPeeps",
]);

export const agentsInsertSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  instructions: z.string().min(1, { message: "Instructions are required" }),
  avatarType: avatarTypeEnum,
});

export const agentsUpdateSchema = agentsInsertSchema.extend({
  id: z.string().min(1, { message: "Agent ID is required" }),
});
