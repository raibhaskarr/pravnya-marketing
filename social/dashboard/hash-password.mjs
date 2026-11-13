// Prints the DASHBOARD_PASSWORD_HASH line for a password typed at the prompt (not echoed, not saved).
// Usage: node dashboard/hash-password.mjs
import readline from "node:readline";
import { hashPassword } from "./lib/auth.mjs";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
rl._writeToOutput = (s) => rl.output.write(s.includes("Password") ? s : "");
rl.question("Password (12+ characters): ", (pw) => {
  rl.close();
  process.stdout.write("\n");
  if (pw.length < 12) {
    console.error("Use at least 12 characters.");
    process.exit(1);
  }
  console.log(`DASHBOARD_PASSWORD_HASH=${hashPassword(pw)}`);
});
