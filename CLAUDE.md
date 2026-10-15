# The Cozy Medieval Zombies wiki: how the work gets done

> **Before anything else, in every session: ask Michael "Am I Primary or Secondary, and what is my focus?"** and change nothing (no file, commit, issue, or pull request, here or in the game) until he answers; reading is fine. The roles, the two GitHub accounts, and the workflow for both repositories are the game's `github.md` (`C:/Users/micha/Dev/cozy-medieval-zombies/github.md`); wiki work is usually a Secondary's. **This repository's rule** (`github.md`, section 9): the wiki Secondary's routine syncs push to `main` directly; anyone else's change, and any larger change (a new page kind, the generator, the templates), goes through a pull request.

This repository is the wiki of the game Cozy Medieval Zombies, published at **https://cmzgame.github.io/cmz-wiki/** (GitHub Pages, built by `.github/workflows/pages.yml`). It is written and kept up by Claude, the **wiki agent**; Michael makes targeted changes and verifies pages. Everything about how the wiki is made, kept current, and connected to the game is in this file and the three it points to: `README.md` (the short version for anyone), `WRITING.md` (the voice, the page kinds, numbers, sources), and the game's `docs/37-the-wiki.md` (the plan and why).

## The two repositories

- **The game:** `C:\Users\micha\Dev\cozy-medieval-zombies` (github.com/cmzgame/cozy-medieval-zombies; the studio's organisation `cmzgame` since 2026-10-15, Michael's `michaeldippold` its owner). Its `main` is reviewed and merged by Michael's **technical lead**, a coding agent. The wiki agent never commits to the game's `main` directly and never checks anything out in the game's main checkout: it reads the game through `sync.js` (read-only, `git fetch` and `git archive`), and when it must write to the game (only `docs/bugs.md`, and docs about the wiki), it does so on its own branch or worktree **on top of the latest `main`**, for the lead to merge.
- **The wiki:** this repository, `C:\Users\micha\Dev\cmz-wiki` (github.com/cmzgame/cmz-wiki). The wiki agent commits and pushes to its `main` directly; a push publishes the site.

## The law: the code is the truth

The wiki describes the game on `main` as the code has it. Where the game's docs disagree with its code, the wiki follows the code and the disagreement goes to `census/discrepancies.md`. Where the code looks wrong, the wiki still describes it as it is, and the finding goes to the game's `docs/bugs.md` (below). A page never chooses silently.

## A sync (every time the game changes, and before any feature is called shipped)

Michael's rule (2026-10-14, its order ruled 2026-10-15): a feature, a fix, or a change to a number is not called done until the wiki is checked and updated for it, **in the same session as its push to the game's `main`**. The sync reads `origin/main`, so it follows the push; a coding agent that pushes a batch in one session syncs once, at the batch's end, and reports nothing in it done before that sync is pushed. A sync, in order:

1. **`node sync.js`**: snapshot the game's `origin/main`: its data into `snapshot/` (committed; what the build reads) and its code, tools, and docs into `.game/` (ignored; what the census and writers read). `snapshot/version.json` records the commit.
2. **Read what changed:** `git -C ../cozy-medieval-zombies log --oneline <last commit>..origin/main` (the last commit is in the previous `snapshot/version.json`, or the latest Updates entry), and read the newest entries at the top of the game's `docs/02-decisions.md`, which say what each change does.
3. **`node census/census.js`**: the automatic inventory (`census/census.md`, `census/census.json`): counts, items, recipes, loot, props, places, settings, keys, verbs, menu labels, moodles, events, checks, and the code's named constants (`census.constants`). It also reports problems the data shows by itself.
4. **Read the game's `docs/bugs.md` Fixed and Closed sections.** Every item moved to Fixed since the last sync means a wiki page may describe the old behaviour as current: find it (grep the pages for the behaviour) and correct it, with a source line naming the fixing commit.
5. **Update the pages** the changes touch: correct what changed, write pages for what is new (`WRITING.md`), replace `{{planned}}` notes for things now built (`Special:Planned notes` lists them all), and bump a page's `<!-- sources at ... -->` to the new commit when its sources are rechecked.
6. **`node build.js --check`**: it fails on a template naming something the data no longer has, and on a number typed into prose; it reports red links, planned notes, and generated-only pages. Fix what it names.
7. **Write an entry on the Updates page** (`pages/front/updates.md`): the date, the game commit, what changed on the wiki.
8. **New bugs found on the way go to the game's `docs/bugs.md`** (the habits below), never into a page as a choice.
9. **Commit and push** this repository. The site republishes in a minute or two (`gh run list -R cmzgame/cmz-wiki`).

## The bug pipeline: `docs/bugs.md` in the game

The living list of bugs the wiki work finds is the game's **`docs/bugs.md`**, on its `main`. Its head says the items come from the wiki agent's census (read in the code at a stated commit, not played), not from a coding agent; the coding agents work it, moving lines to **Fixed** (with the commit) or **Closed** (with a reason). The technical lead's three habits (2026-10-15), which the wiki agent keeps:

1. **Add findings on top of the latest `main`, as new lines under Open only.** The coding agents move lines to Fixed and Closed; never edit, move, or reword a line they have touched, and never work on the file from a stale branch (two branches editing it conflict). Sync the branch with `main` first (in a Claude Code worktree, the `sync_with_base_branch` tool).
2. **Before adding a finding, check Fixed and Closed**, so a closed item is not added again by the next census.
3. **When an item moves to Fixed, correct the wiki pages that describe the bug as current behaviour** on the next sync (step 4 above).

Each new line says what happens, where in the code (file and line at a stated commit), and marks *needs repro* if it was inferred rather than read. Behaviour that may be intended goes under "surprises for Michael to rule on", not under likely bugs. The census's original findings, as of `9205ad7`, are kept in `census/findings.md` as a record only.

## The census, and redoing it

The census is the inventory of what the game contains, done once in full (2026-10-14, at `9205ad7`) and redone by area when a large change lands:

- `census/census.js` is automatic (step 3 of a sync).
- **The six fact sheets** in `census/areas/` (world, player, combat, items, building, multiplayer-ui) were read from the code by six parallel agents, each told: code and data are the truth, docs second; one section per mechanic with **Rule**, **Numbers** (each with its data path or `src/file.js:line`), **Code**, **With friends**, **Docs differ**, **Confidence**; then candidate pages and discrepancies; read only, write one file. To redo an area, give an agent that brief with the area's scope (the scopes are in each sheet's title and sections) and the new commit, and have it rewrite that one sheet.
- `census/discrepancies.md` is compiled from the sheets' Discrepancies sections.

## Writing pages

`WRITING.md` is the standard: plain like the OSRS wiki; fixed sections per page kind; **no typed numbers** (`{{n tuning.zombie.speed}}`, `{{n items.sword.weapon.damage}}`, `{{n census.constants.combat.POINT_BLANK}}`); `[[links]]`; a **With friends** section where multiplayer changes a rule; `{{devonly}}` and `{{planned}}`; and a **Sources** section on every written page (`- \`src/file.js:12-30\`: what it proves`, under `<!-- sources at <commit> -->`). Large batches were written by parallel agents, one per folder of `pages/`, each given `WRITING.md`, `lib/templates.js`, its fact sheet, an exact list of page titles, a folder of its own, and `node build.js --out .tmp-<name>` to check its work without touching `site/`. A number the game has only as a bare literal in code may be typed if the page carries `numbersOk: true` and a `<!-- typed: why -->` comment.

## Verification (Michael's)

Every page shows **Verify** and how long since its stamp. Verify opens a GitHub issue titled `Verify: <page title>`; when Michael (his account, `michaeldippold`, and only he: the workflow's `VERIFIER`) submits it, the workflow stamps `verified.json`, closes the issue, and republishes. `Special:Verification` and the `verification.txt` a build writes list the pages most in need of a look: never verified, then edited since their stamp (from git history), then the oldest stamps. **The wiki agent never opens a Verify issue**: verifying is Michael's word that he checked a page. When asked "what is stalest", read `verification.txt` after a build.

## Sources and the game going private

Sources link to the game's repository at the exact commit they were read from (`GAME_REPO`, `LINK_SOURCES` at the top of `build.js`), so a link always shows the lines it meant. When the game's repository goes private, set `LINK_SOURCES = false` and every source becomes plain text; this repository goes private at the same time (Michael, 2026-10-14).

## The tools

- `sync.js` the snapshot; `census/census.js` the inventory; `build.js` the build (`--check`, `--out <dir>`); `serve.js` a local preview at http://localhost:8020 (the game's `.claude/launch.json` names it `wiki`, so a Claude Code session in the game's folder can open it in the browser pane).
- `lib/markdown.js` the renderer (written here; no dependencies anywhere), `lib/data.js` the data and `lookup` for `{{n}}`, `lib/templates.js` every template, `lib/mapimage.js` the valley's map drawn from the map file at the screen's angle (PNG by zlib).
- `assets/` the style and the search.

## Gotchas learned the hard way

- **Pages must be set to "GitHub Actions"** in the repository's settings (it is). A branch deploy renders the README with Jekyll instead; `.nojekyll` at the root and in `site/` stops Jekyll either way.
- **The `gh` token on Michael's machine cannot change repository settings or dispatch workflows** (403). A push triggers the workflow; a settings change is Michael's click.
- **Pushes made by the workflow's own token start no workflows**, which is why the verify job and the build run in one workflow.
- **Windows paths in Python patch scripts:** a backslash in a normal string breaks (`\U` is an escape). Use forward slashes or raw strings; write long scripts to a file (the scratchpad) rather than a heredoc.
- **Line endings:** `.gitattributes` makes everything LF; git's CRLF warnings on Windows are harmless.
- **A fact sheet's line numbers are for its commit**; when the game moves, confirm a line in `.game/` before citing it in a new Sources line.
