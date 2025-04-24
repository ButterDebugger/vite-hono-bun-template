// Unfortunately Bun doesn't support parallel processes yet
// So we have to run them here sequentially

// Start build watcher
Bun.spawn(["bun", "run", "dev:build"], {
	stdin: "inherit",
	stdout: "inherit",
	stderr: "inherit"
});

// Start the server
Bun.spawn(["bun", "run", "dev:serve"], {
	stdin: "inherit",
	stdout: "inherit",
	stderr: "inherit"
});
