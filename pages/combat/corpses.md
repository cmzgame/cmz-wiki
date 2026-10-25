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
- any [[Arrow|arrows]] and [[Throwing spear|spears]] lodged in it.

Anything that does not fit falls at its feet. Taking the clothes off changes the body's picture. **Take All** on the body's panel takes everything that fits your bag and belt at once, and the body is redrawn without it (see [[Inventory#Take All|Inventory]]). The fallen stop thinking: a corpse no longer moves, groans, or bites.

## The pockets

Each of the dead rolls {{n loot.body.rolls.0}} to {{n loot.body.rolls.1}} times on this table when first searched:

{{loot-table body}}

## Lodged arrows

An arrow or thrown spear that hits one of the dead stays in the body, and arrows stack there. A [[Fire arrow]] stays as a plain arrow. They come out with the loot on the first search (see [[Archery]]).

## A burning body

One of the dead that dies while [[Burning]] burns on as a corpse until its fire's timer runs out, its flames lying low along the body. Such a body loses nothing to the fire; only one set alight with Burn corpse (below) burns away.

## Burning a body

**Burn corpse**, on the right-click menu of every body of the dead (a villager who rose and fell again among them), sets it alight on purpose. A fallen player's body never has it: that is left for their friends to come back to.

- It needs a [[Tinderbox]] and a [[Log]], each anywhere on you; the log is spent. A lit [[Torch]] is not the flame for it. Without them the entry is greyed with what is lacking: "Burn corpse (need a tinderbox and a log)", "Burn corpse (need a log)", or "Burn corpse (need a tinderbox)".
- A body already burning, set alight before or still burning from its own death (above), shows "Burn corpse (already burning)".
- It takes a bar of {{n tuning.work.burnCorpse.seconds seconds}} beside the body, within {{n census.constants.burn.BODY_REACH tiles}} and with no wall between; moving ends it. Done, the game says "The body catches. It will burn for about an hour, and nothing in it will be left."; the hours in it are the burn's own number, as the card's are.
- The entry has a hover card. Its first line, in red, is the warning "Burns the body and everything in it."; then what it needs ("Needs a tinderbox and a log carried; the log is spent.") and how long it burns.
- [[Use|Using]] a tinderbox on a body does the same at once, with no bar, and spends the log as the menu does.

The body burns for {{n tuning.work.burnCorpse.hours}} hour of the game's clock ({{n census.constants.map.HOUR_SECONDS seconds}} of play an hour, see [[The day]]), its flames lying low along it and giving the light of any burning body, out to {{n census.constants.fire.tunables_lightRadius tiles}} (see [[Light]]). While it burns nothing in it can be had: its entry reads "Search body (it is burning)" or "Open body (it is burning)", greyed, and a grid open on it closes. When the fire goes out the body is gone, and with it everything it held: its clothes, its hands, its pockets, and what was lodged in it. Take what you want first.

The refusals, if it is asked for another way: "It is not dead yet.", "There is no body there to burn.", "It is already burning.", "Too far from the body.", and "You need a tinderbox and a log to burn it." (or the one that is missing).

## With friends

What has been taken from a body, and what is lodged in it, travels with the world, so every player sees the same corpse. A guest's Burn corpse is sent to the host by the body's id and run there for that player, from their own tinderbox and log. A body burning away is marked in its record, so a guest's menu greys its search too and a guest's open grid finds nothing; when it is gone, the list of bodies in the next frame takes it from every guest's world.

## See also

- [[The dead]]
- [[Inventory]]
- [[Archery]]
- [[Burning]]
- [[Tinderbox]]

## Sources

<!-- sources at 9205ad7 -->
- `src/ui/inventory-actions.js`, `takeAllFrom`, `performItemCommand`: Take All on a body, the body redrawn without what was taken (game #251)
- `src/entities/zombie.js:113-123`, `src/entities/zombie.js:357-364`: the fall, then a still body
- `src/entities/character.js:139-185`: a body as a container: its clothes, hands, pockets, lodged items on its 6x6 grid, the overflow at its feet, redrawn as it is stripped
- `src/interact.js:43`, `src/interact.js:1333-1355`: the first search's time and the pockets rolled
- `data/wardrobes.json`: the dead's pockets
- `src/game.js:524-535`: corpses leave the thinking list
- `data/loot.json`: the `body` table and its rolls
- `src/archery.js:244-259`: arrows and spears lodge in a body hit
- `src/archery.js:272-276`: a fire arrow lodges as a plain arrow (game commit 3b7cb9a)
- `src/burn.js:34-51`, `src/fire.js:48-49`: a corpse burns on until its timer runs out, losing nothing; its flames low and spread (game commit 3b7cb9a)
- `src/interact.js:1866-1891`, `src/burn.js:73-87`: Burn corpse on the dead's bodies alone, not a player's; greyed with what is lacking or while it burns; the bar's seconds and reach (game #434, at fa2997f)
- `data/tuning.json:187`: `work.burnCorpse`: the tinderbox, the log, the hours, the seconds (game #434, at fa2997f)
- `src/burn.js:89-97`, `src/burn.js:104-143`: alight for `hours` times `HOUR_SECONDS`; the card's warning in red, its lines; the verb's refusals, the log spent, its message (game #434, at fa2997f)
- `src/burn.js:139-142`: the done line reads `work.burnCorpse.hours`, as the card does (game #454, at 6e3ab37)
- `data/interactions.json:17`, `src/interactions.js:39`: a tinderbox used on a body of the dead runs the same verb (game #434, at fa2997f)
- `src/map.js:96`, `src/fire.js:26`, `src/fire.js:97-99`: an hour's seconds; a burning body's light (game #434, at fa2997f)
- `src/interact.js:1841-1858`, `src/interact.js:171`, `src/main.js:962`: the search greyed while it burns, a grid open on it closed, a guest's address finding nothing (game #434, at fa2997f)
- `src/burn.js:99-101`, `src/game.js:643-647`: the body and all it held gone when the fire is out (game #434, at fa2997f)
- `src/net.js:710`, `src/net.js:849-886`: the burning mark in the body's record; its removal by the corpses' roster (game #434, at fa2997f)
