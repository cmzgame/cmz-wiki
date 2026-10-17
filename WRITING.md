# How the wiki's pages are written

For anyone writing a page, Claude or Michael. The model is the Old School RuneScape wiki: plain, exact, and every page of a kind in the same shape.

## The voice

- **Plain, like the OSRS wiki.** Third person about the game, second person only in guides ("you"). Short sentences. No hype, no jokes in the prose (the game's own lines, quoted, may be funny).
- **Say what the game does, not what it means to do.** The wiki describes the game on `main` today. Something planned is a `{{planned}}` note, never a sentence in the present tense.
- **Deaths and harm said plainly.** "A bite does 8 damage." Not "deals a nasty chomp".
- **They and them** for people, the player included.
- **British or American spelling:** follow the game's own text (it writes "colour", "armour").

## Numbers: never typed

Every number the game has goes in as a reference, so the wiki changes when the game does:

- From the data: `{{n tuning.zombie.speed}}` (first segment names the file: `tuning`, `combat`, `build`, `items`, `looks`, `loot`, `valley`, `sprites`), items by id: `{{n items.sword.weapon.damage}}`.
- From the code's named constants, found by the census: `{{n census.constants.combat.POINT_BLANK}}` (module path with `/` as `_`, e.g. `entities_zombie`; an object called `tunables` appears as `tunables_<name>`).
- A unit can follow: `{{n tuning.zombie.speed tiles a second}}`.
- A number that is not the game's (a count of pages, "two hands", "the third hit") may be written as a word. A number the game has but that is neither in data nor a named constant: write it, and add `numbersOk: true` to the front matter with a comment line in the body `<!-- typed: why -->` so it can be found later.

## Links

- `[[Title]]` or `[[Title|shown words]]`. Link the first mention of a thing on a page, not every mention.
- Item pages are titled by the item's name (`Throwing spear`, `Loaf of bread`); stations by their name (`Workbench`, `Anvil`, `Cooking`); places by the map's name with a capital (`The inn`); villagers by name (`Innkeeper`).
- A link to a page not written yet is fine: it shows red and joins the to-write list.

## Page kinds and their sections, in this order

Use `##` for sections. Leave out a section with nothing in it.

- **Item:** `{{infobox-item id}}` · lead (one paragraph: what it is, where it comes from, what it is for) · Effects or Combat (if it has them) · `{{item-sections id}}` (Creation, Uses, Item sources, generated) · With friends · Trivia · `{{navbox items}}`.
- **Weapon:** as an item, with **Combat** after the lead: which buttons do what with it, its alternate mode, what it is good and bad at.
- **Station:** `{{infobox-station name}}` · lead · Using it · Recipes (`{{recipes name}}`) · `{{where sprite}}` · With friends · `{{navbox making}}`.
- **Mechanic** (combat, sight, fire, sleep, openings): lead · How it works (subsections as needed) · Numbers (a short list of the values, all references) · With friends · Settings that change it · See also.
- **Creature:** infobox · lead · Behaviour · Fighting them · With friends · See also.
- **Place:** `{{infobox-place "name"}}` · lead · What is there (`{{place-contents "name"}}`) · The dead · `{{navbox places}}`.
- **Prop** (furniture, a fitting, a container, a well, a station with no recipes; generated for every prop the map places or a recipe makes, unless written): `{{infobox-prop id}}` · lead · `{{prop-sections id}}` (Creation, Where found, generated) · With friends · `{{navbox props}}`.
- **Guide:** prose for a new player, in order of what they will meet.
- **List:** a lead and generated tables.

## Special sections

- **With friends:** only where multiplayer changes the rule (sleep needs everyone in bed; on the wire the world never pauses; a guest's dormancy). Like the OSRS wiki's Ironman notes.
- **Settings that change it:** name each setting as the Settings screen names it, with its default.
- `{{devonly note="..."}}` before anything that exists only for testing (the dev chest, Combat testing, the console).
- **The sound it makes** (Michael, 2026-10-17, the game's `docs/02`, The roadmap, and sound): anything in the game that makes a sound has that sound as a playable file on its page, when its license allows the wiki to host it; the sound's source and license go in the Sources section. The game has no sounds yet; the template (an `<audio>` element from the game's own sound files) is written when the first sounds land.
- `{{planned doc=30 step=4 note="..."}}` for anything not built. Every build lists them; when the thing is built, replace the note with the real section.

## Front matter

```
---
title: Combat
categories: [Combat, Mechanics]
aliases: [Fighting, Melee]
summary: One sentence for search results and link previews.
---
```

## Where the facts come from

The census: `census/census.md` (the automatic inventory) and the fact sheets read from the code, with file and line, dated under `census/history/<commit>/areas/` (the first census's at `9205ad7`; a sheet's lines are its commit's). **The code is the truth.** Where a game doc and the code disagree, the wiki follows the code and the disagreement goes in `census/discrepancies.md`, never into a page as a choice.

## Sources

Every written page ends (before its navbox) with a **Sources** section: the code and data its claims rest on, so each claim can be proved. The build turns it into a collapsed box and links each path to the game's repository at the commit named (while the game's code is public; `LINK_SOURCES` in `build.js` turns the links off).

```
## Sources

<!-- sources at 9205ad7 -->
- `src/combat.js:305-357`: the swing, its cooldown and stamina
- `data/items.json`: each weapon's numbers
```

One line per claim or group of claims, in the page's order, as `path` or `path:line` or `path:first-last`, then a colon and what it proves. The commit is the one the facts were read from (`snapshot/version.json`); when a page is rechecked against a newer game, update it. `node build.js --check` prints the Sources-drift report: the pages whose cited lines the game changed since their commit, each with the path and the range, so a line range is the form that gets a page rechecked when its lines move.

## Verifying

Michael's **Verify** button on every page opens a GitHub issue titled `Verify: <page title>`; submitting it stamps the page in `verified.json` (only the repository's owner can). `Special:Verification` lists the pages most in need of a look first: never verified, edited since their stamp, then the oldest stamps. `node build.js` also writes `verification.txt`, the same list as plain text.
