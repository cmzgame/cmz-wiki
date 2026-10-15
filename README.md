# The Cozy Medieval Zombies wiki

Everything about [the game](https://github.com/michaeldippold/cozy-medieval-zombies), true to its code: published at **https://michaeldippold.github.io/cmz-wiki/**. The plan behind it is the game's `docs/37-the-wiki.md`.

Half of every page is generated from the game's own data (items, recipes, loot, stations, places, villagers, numbers); the other half is prose. Every number in prose is a reference to the data, so a retune in the game changes the wiki on the next sync with nobody rewriting a sentence.

## Editing a page

Press **Edit this page** on any page: it opens the page's markdown in GitHub's editor, and a commit rebuilds the site. A page that is generated from the data alone says **Write this page** instead, which starts a file of its own in `pages/`.

- `[[Title]]` links a page (red if it does not exist yet), `[[Title|shown text]]` with other words.
- `{{n tuning.zombie.speed}}` puts a number from the data in a sentence. Never type a number the game has in its data.
- `{{infobox-item hatchet}}`, `{{item-sections hatchet}}`, `{{recipes anvil}}`, `{{weapon-table}}`, `{{loot-table chest}}`, `{{moodles}}`, `{{navbox items}}` and the rest are in `lib/templates.js`.
- `{{planned doc=30 step=4 note="..."}}` marks something not built yet; every build lists them, so each is replaced when the thing lands.
- Front matter between `---` lines: `title` (required), `categories: [A, B]`, `aliases: [Other name]`, `summary`.

## Keeping it current (the rule)

A feature is not pushed to the game's `main` until the wiki is checked and updated for it (Michael, 2026-10-14). A sync:

1. `node sync.js`: snapshot the game's `origin/main` (data into `snapshot/`, committed; code into `.game/`, ignored). Read-only on the game's repository.
2. `node census/census.js`: the automatic inventory (`census/census.md`): what the game contains, and any problem the data shows by itself.
3. `node build.js --check`: build `site/`; it fails on a template naming something the data no longer has, and reports red links, planned notes, and generated-only pages.
4. Fix what the report names, write a Changes entry, commit, push. The site rebuilds itself on GitHub.

`node serve.js` previews the built site at http://localhost:8020.

## Layout

- `pages/` the written pages (markdown). `lib/` the markdown renderer, the data loader, the templates. `assets/` the style and the search. `build.js` the build, `sync.js` the snapshot, `serve.js` the preview.
- `census/` the census of what is in the game: `census.js` (the automatic inventory), `areas/` (the fact sheets by area, read from the code), `discrepancies.md` (where the game's docs and its code disagree).
- `snapshot/` the game's data at the commit in `snapshot/version.json`.

No dependencies: Node 20 or later and nothing else.
