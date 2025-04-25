import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/bun";
import type { Serve } from "bun";

const port = process.env.PORT ?? 3000;
const isDev = process.env.NODE_ENV === "development";
const app = new Hono();

// Enable logger in development
if (isDev) app.use("*", logger());

// Serve bundled files
app.get("/*", serveStatic({ root: "dist" }));

export default {
	port,
	fetch: app.fetch,
	development: isDev
} satisfies Serve;
