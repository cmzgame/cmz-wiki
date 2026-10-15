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
- **Guide:** prose for a new player, in order of what they will meet.
- **List:** a lead and generated tables.

## Special sections

- **With friends:** only where multiplayer changes the rule (sleep needs everyone in bed; on the wire the world never pauses; a guest's dormancy). Like the OSRS wiki's Ironman notes.
- **Settings that change it:** name each setting as the Settings screen names it, with its default.
- `{{devonly note="..."}}` before anything that exists only for testing (the dev chest, Combat testing, the console).
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

The census: `census/census.md` (the automatic inventory) and `census/areas/*.md` (the fact sheets, read from the code, with file and line). **The code is the truth.** Where a game doc and the code disagree, the wiki follows the code and the disagreement goes in `census/discrepancies.md`, never into a page as a choice.
