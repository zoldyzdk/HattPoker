import { z } from "zod";

export const schema = z.object({
  session_name: z.string().min(4, "Session name is required"),
  user_name: z.string().min(2, "User name is required"),
})

export type Schema = z.infer<typeof schema>