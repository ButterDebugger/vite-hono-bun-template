import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/bun";

const port = Bun.env.PORT ?? 3000;
const isDev = Bun.env.NODE_ENV === "development";
const app = new Hono();

// Enable logger in development
if (isDev) app.use("*", logger());

// Serve bundled files
app.get("/*", serveStatic({ root: "dist" }));

Bun.serve({
	port,
	fetch: app.fetch,
	development: isDev
});

console.log(`Server running at http://localhost:${port}`);
