import { z } from "zod";

export const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(100),
  email: z.string().email(),
  createdAt: z.string().datetime(),
});

export const createUserSchema = userSchema.pick({
  name: true,
  email: true,
});

export const healthSchema = z.object({
  status: z.literal("ok"),
  timestamp: z.string().datetime(),
});

export type User = z.infer<typeof userSchema>;
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type HealthResponse = z.infer<typeof healthSchema>;
