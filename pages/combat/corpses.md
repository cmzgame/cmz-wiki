---
title: Corpses
categories: [Creatures, Combat]
aliases: [Corpse, Body, Bodies, Looting the dead, The dead's pockets, Burn corpse, Burning a body]
summary: Searching a fallen body: what is on it, what its pockets may hold, the arrows lodged in it, and burning it away.
---

A **corpse** is the body of one of [[The dead]], or of a fallen player, once it has stopped moving. It can be searched like a chest, and is redrawn as it is stripped. A body of the dead can also be burned away, and everything in it with it.

## Searching a body

The first search takes {{n census.constants.interact.SEARCH_TIME seconds}} and rolls the body's pockets. Everything on it is then laid out on the body's own grid:

- the clothes it has on,
- what is in its hands,
- its pockets ({{n wardrobes.zombie.0.pockets.0}} × {{n wardrobes.zombie.0.pockets.1}}),
- any [[Arrow|arrows]], [[Throwing spear|spears]], [[Throwing knife|throwing knives]], and [[Throwing axe|throwing axes]] lodged in it.

Anything that does not fit falls at its feet. Taking the clothes off changes the body's picture. **Take All** on the body's panel takes everything that fits your bag and belt at once, and the body is redrawn without it (see [[Inventory#Take All|Inventory]]). The fallen stop thinking: a corpse no longer moves, groans, or bites.

## The pockets

Each of the dead rolls {{n loot.body.rolls.0}} to {{n loot.body.rolls.1}} times on this table when first searched:

{{loot-table body}}

## Lodged arrows

An arrow, or a thrown spear, knife, or axe, that hits one of the dead stays in the body, and arrows stack there; a thrown weapon stays as itself, and knives or axes come out stacked. A [[Fire arrow]] or a [[Poisoned arrow|poisoned arrow]] stays as a plain arrow. They come out with the loot on the first search (see [[Archery]]).

## A burning body

One of the dead that dies while [[Burning]] burns on as a corpse until its fire's timer runs out, its flames lying low along the body. Such a body loses nothing to the fire; only one set alight with Burn corpse (below) burns away.

## Burning a body

**Burn corpse**, on the right-click menu of every body of the dead, sets it alight on purpose. A fallen player's body never has it: that is left for their friends to come back to.

- It needs a flame and nothing else: a [[Tinderbox]] anywhere on you, or a lit [[Torch]] in a hand. Nothing is spent. With neither the entry is greyed: "Burn corpse (need a tinderbox or a lit torch)".
- A body already burning, set alight before or still burning from its own death (above), shows "Burn corpse (already burning)".
- It takes a bar of {{n tuning.work.burnCorpse.seconds seconds}} beside the body, within {{n census.constants.burn.BODY_REACH tiles}} and with no wall between; moving ends it. Done, the game says "The body catches. It will burn for about an hour, and nothing in it will be left."; the hours in it are the burn's own number, as the card's are.
- The entry has a hover card. Its first line, in red, is the warning "Burns the body and everything in it."; then what it needs ("Needs a tinderbox carried or a lit torch in hand; nothing is spent."), "Use a lit torch on the body to burn it too." with **Use** in gold, and how long it burns.
- [[Use|Using]] a tinderbox or a lit torch on a body does the same at once, with no bar, and spends nothing. An unlit torch is refused: "The torch is not lit."

The body burns for {{n tuning.work.burnCorpse.hours}} hour of the game's clock ({{n census.constants.map.HOUR_SECONDS seconds}} of play an hour, see [[The day]]), its flames lying low along it and giving the light of any burning body, out to {{n census.constants.fire.tunables_lightRadius tiles}} (see [[Light]]). While it burns nothing in it can be had: its entry reads "Search body (it is burning)" or "Open body (it is burning)", greyed, and a grid open on it closes. When the fire goes out the body is gone, and with it everything it held: its clothes, its hands, its pockets, and what was lodged in it. Take what you want first.

The refusals, if it is asked for another way: "It is not dead yet.", "There is no body there to burn.", "It is already burning.", "Too far from the body.", "You need a tinderbox or a lit torch to burn it.", and, for a torch Used that is out, "The torch is not lit."

## With friends

What has been taken from a body, and what is lodged in it, travels with the world, so every player sees the same corpse. A guest's Burn corpse is sent to the host by the body's id and run there for that player, with their own tinderbox or lit torch; a guest's Use of either names it by its uid. A body burning away is marked in its record, so a guest's menu greys its search too and a guest's open grid finds nothing; when it is gone, the list of bodies in the next frame takes it from every guest's world.

## See also

- [[The dead]]
- [[Inventory]]
- [[Archery]]
- [[Burning]]
- [[Tinderbox]]

## Sources

<!-- sources at d7cf736 -->
- `src/archery.js:315-326` (at 307ed34): a thrown knife or axe lodged as itself, an arrow of any kind as a plain arrow (games #494, #496)
- `src/ui/inventory-actions.js`, `takeAllFrom`, `performItemCommand`: Take All on a body, the body redrawn without what was taken (game #251)
- `src/entities/zombie.js:119-122`, `src/entities/zombie.js:169-178`, `src/entities/zombie.js:561-568`: the fall (`damageZombie` calls `kill`), then a still body
- `src/entities/character.js:147-199`: a body as a container: its clothes, hands, pockets, lodged items on its 6x6 grid, the overflow at its feet, redrawn as it is stripped
- `src/interact.js:68`, `src/interact.js:1983-2004`: the first search's time and the pockets rolled
- `data/wardrobes.json`: the dead's pockets
- `src/game.js:883-890`: corpses leave the thinking list
- `data/loot.json`: the `body` table and its rolls
- `src/archery.js:295-308`: arrows and spears lodge in a body hit
- `src/archery.js:300-306`: a fire arrow lodges as a plain arrow (game commit 3b7cb9a)
- `src/burn.js:37-54`, `src/fire.js:48-49`: a corpse burns on until its timer runs out, losing nothing; its flames low and spread (game commit 3b7cb9a)
- `src/interact.js:2220-2242`, `src/burn.js:76-87`: Burn corpse on the dead's bodies alone, not a player's; greyed "(need a tinderbox or a lit torch)" or while it burns; a tinderbox carried or a lit torch in a hand; the bar's seconds and reach (games #434, #508)
- `data/tuning.json:198`: `work.burnCorpse`: the tinderbox, the hours, the seconds; no fuel since game #508
- `src/burn.js:89-97`, `src/burn.js:104-146`: alight for `hours` times `HOUR_SECONDS`; the card's warning in red, its lines; the verb's refusals, nothing spent, its message (games #434, #454, #508)
- `data/interactions.json:17-18`, `src/interactions.js`: a tinderbox or a torch used on a body of the dead runs the same verb, an unlit torch refused (games #434, #508)
- `src/map.js:105`, `src/fire.js:26`, `src/fire.js:97-99`: an hour's seconds; a burning body's light (game #434)
- `src/interact.js:1985-2003`, `src/interact.js:175`, `src/main.js:973`: the search greyed while it burns, a grid open on it closed, a guest's address finding nothing (game #434)
- `src/burn.js:99-101`, `src/game.js:827-831`: the body and all it held gone when the fire is out (game #434)
- `src/net.js:775`, `src/net.js:957-1002`: the burning mark in the body's record; its removal by the corpses' roster (game #434)
