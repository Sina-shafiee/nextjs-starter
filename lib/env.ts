import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']),
    SENTRY_ORG_NAME: z.string(),
    SENTRY_PROJECT_NAME: z.string(),
    SENTRY_AUTH_TOKEN: z.string(),
    SENTRY_DSN: z.string(),
  },
  client: {
    NEXT_PUBLIC_SENTRY_DSN: z.string(),
    NEXT_PUBLIC_ANALYTICS_ID: z.string(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    SENTRY_ORG_NAME: process.env.SENTRY_ORG_NAME,
    SENTRY_PROJECT_NAME: process.env.SENTRY_PROJECT_NAME,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    SENTRY_DSN: process.env.SENTRY_DSN,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_ANALYTICS_ID: process.env.NEXT_PUBLIC_ANALYTICS_ID,
  },
});
