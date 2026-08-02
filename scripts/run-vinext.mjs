import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

const command = process.argv[2] ?? "dev";
const localBin = join(
  process.cwd(),
  "node_modules",
  ".bin",
  process.platform === "win32" ? "vinext.cmd" : "vinext",
);
const bin = existsSync(localBin) ? localBin : "vinext";

process.env.WRANGLER_LOG_PATH = ".wrangler/wrangler.log";

const result = spawnSync(bin, [command], {
  env: process.env,
  shell: process.platform === "win32",
  stdio: "inherit",
});

process.exit(result.status ?? 1);
