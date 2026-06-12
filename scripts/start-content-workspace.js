import { spawn } from "node:child_process";

const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";

const processes = [
  spawn(process.execPath, ["scripts/content-server.js"], {
    stdio: "inherit",
    env: process.env
  }),
  spawn(npmCommand, ["run", "dev"], {
    stdio: "inherit",
    env: process.env
  })
];

function shutdown(signal) {
  for (const child of processes) {
    if (!child.killed) {
      child.kill(signal);
    }
  }
}

process.on("SIGINT", () => {
  shutdown("SIGINT");
  process.exit(130);
});

process.on("SIGTERM", () => {
  shutdown("SIGTERM");
  process.exit(143);
});

for (const child of processes) {
  child.on("exit", (code, signal) => {
    if (signal || code) {
      shutdown(signal || "SIGTERM");
      process.exit(code || 1);
    }
  });
}
