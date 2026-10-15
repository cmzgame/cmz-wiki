// The snapshot: the game's data (committed, what the build reads) and its code
// (not committed, what the census reads) at one commit of the game's main.
// Read-only on the game's repository: it fetches and archives, never checks out.
//
//   node sync.js [path-to-game-repo] [ref]
//
// Defaults: ../cozy-medieval-zombies, origin/main. Writes snapshot/ (data and
// version.json) and .game/ (src, tools, docs; ignored by git).

import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync, writeFileSync, existsSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const game = resolve(process.argv[2] || join(here, "..", "cozy-medieval-zombies"));
const ref = process.argv[3] || "origin/main";

function git(...args) {
  return execFileSync("git", ["-C", game, ...args], { encoding: "utf8", maxBuffer: 1 << 30 });
}

if (!existsSync(join(game, ".git"))) throw new Error(`not a git repository: ${game}`);
if (ref.startsWith("origin/")) git("fetch", "-q", "origin");
const commit = git("rev-parse", ref).trim();
const date = git("show", "-s", "--format=%cI", commit).trim();
const subject = git("show", "-s", "--format=%s", commit).trim();

function extract(paths, into) {
  rmSync(into, { recursive: true, force: true });
  mkdirSync(into, { recursive: true });
  const tar = execFileSync("git", ["-C", game, "archive", "--format=tar", commit, ...paths], { maxBuffer: 1 << 30 });
  execFileSync("tar", ["-x", "-C", into], { input: tar, maxBuffer: 1 << 30 });
}

extract(["data"], join(here, "snapshot"));
extract(["src", "tools", "docs", "server", "index.html", "style.css", "CLAUDE.md", "TODO.md"], join(here, ".game"));
writeFileSync(join(here, "snapshot", "version.json"), JSON.stringify({ commit, short: commit.slice(0, 7), date, subject, ref }, null, 2) + "\n");
console.log(`snapshot of ${ref} @ ${commit.slice(0, 7)} (${date.slice(0, 10)})`);
