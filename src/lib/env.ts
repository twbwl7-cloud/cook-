import "server-only";
import { z } from "zod";

const serverEnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().optional(),
  TRANZILA_SUPPLIER: z.string().optional(),
  TURNSTILE_SECRET_KEY: z.string().optional(),
  ORDER_WEBHOOK_URL: z.string().url().optional().or(z.literal("")),
});

/** Soft validation — missing optional keys are OK in local mock mode. */
export function getServerEnv() {
  const parsed = serverEnvSchema.safeParse(process.env);
  if (!parsed.success) {
    console.error("Invalid server env shape");
    return {} as z.infer<typeof serverEnvSchema>;
  }
  return parsed.data;
}
