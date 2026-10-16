# The Cozy Medieval Zombies wiki

Everything about [the game](https://github.com/cmzgame/cozy-medieval-zombies), true to its code: published at **https://cmzgame.github.io/cmz-wiki/**. The plan behind it is the game's `docs/history/37-the-wiki-plan.md`.

Half of every page is generated from the game's own data (items, recipes, loot, stations, places, villagers, numbers); the other half is prose. Every number in prose is a reference to the data, so a retune in the game changes the wiki on the next sync with nobody rewriting a sentence.

**For Claude sessions:** `CLAUDE.md` is the whole method (the sync, the census, writing, sources, verification, and the bug pipeline to the game's `docs/bugs.md`).

## Editing a page

Press **Edit this page** on any page: it opens the page's markdown in GitHub's editor, and a commit rebuilds the site. A page that is generated from the data alone says **Write this page** instead, which starts a file of its own in `pages/`.

- `[[Title]]` links a page (red if it does not exist yet), `[[Title|shown text]]` with other words.
- `{{n tuning.zombie.speed}}` puts a number from the data in a sentence. Never type a number the game has in its data.
- `{{infobox-item hatchet}}`, `{{item-sections hatchet}}`, `{{recipes anvil}}`, `{{weapon-table}}`, `{{loot-table chest}}`, `{{moodles}}`, `{{navbox items}}` and the rest are in `lib/templates.js`.
- `{{planned doc=30 step=4 note="..."}}` marks something not built yet; every build lists them, so each is replaced when the thing lands.
- Front matter between `---` lines: `title` (required), `categories: [A, B]`, `aliases: [Other name]`, `summary`.

## Keeping it current (the rule)

A feature is not done until the wiki is checked and updated for it, in the same session as its merge to the game's `main` (Michael, 2026-10-14; the order 2026-10-15: the sync reads `origin/main`, so it follows the merge, once for a batch). The sync's nine steps are `CLAUDE.md`, "A sync": the snapshot, the log, the census, the bug list, the pages, `node build.js --check`, an Updates entry, bugs to the game's `docs/bugs.md`, push.

`node serve.js` previews the built site at http://localhost:8020.

## Layout

- `pages/` the written pages (markdown). `lib/` the markdown renderer, the data loader, the templates. `assets/` the style and the search. `build.js` the build, `sync.js` the snapshot, `serve.js` the preview.
- `census/` the census of what is in the game: `census.js` (the automatic inventory), `discrepancies.md` (where the game's docs and its code still disagree, at the snapshot's commit), `history/<commit>/` (the dated records: the fact sheets by area, read from the code, and the lists as they stood).
- `snapshot/` the game's data at the commit in `snapshot/version.json`, without the art (the item icons the data names excepted).

No dependencies: Node 20 or later and nothing else.
