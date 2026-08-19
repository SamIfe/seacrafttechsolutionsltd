import { execSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";

/** Free dev ports and release .next locks before starting next dev. */
for (const port of [3000, 3001]) {
  try {
    execSync(`npx kill-port ${port}`, { stdio: "pipe" });
  } catch {
    // Port was not in use.
  }
}

// Allow Windows to release file handles on .next/trace.
await new Promise((resolve) => setTimeout(resolve, 1500));

if (!existsSync(".next")) {
  process.exit(0);
}

try {
  rmSync(".next/trace", { force: true });
} catch {
  try {
    rmSync(".next", { recursive: true, force: true });
  } catch {
    console.error(
      "\nCould not clear .next — close any other terminal running `next dev` and try again.\n",
    );
    process.exit(1);
  }
}
