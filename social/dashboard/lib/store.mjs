// Tiny JSON-file store in DATA_DIR. One process, low traffic: read-modify-write is enough.
import fs from "node:fs";
import path from "node:path";

export function createStore(dir) {
  fs.mkdirSync(path.join(dir, "renders"), { recursive: true });
  const file = (name) => path.join(dir, `${name}.json`);
  const read = (name, fallback) => {
    try {
      return JSON.parse(fs.readFileSync(file(name), "utf8"));
    } catch {
      return fallback;
    }
  };
  const write = (name, value) => {
    const tmp = `${file(name)}.${process.pid}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify(value, null, 2));
    fs.renameSync(tmp, file(name));
  };
  const update = (name, fallback, fn) => {
    const next = fn(read(name, fallback));
    write(name, next);
    return next;
  };
  return { dir, rendersDir: path.join(dir, "renders"), read, write, update };
}
