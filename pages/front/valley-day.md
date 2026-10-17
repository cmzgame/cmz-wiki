---
title: Valley day
categories: [About]
aliases: [Valley day changes, What changed on valley day]
summary: Every system added or changed since the valley became the game's focus on 2026-10-17, with the pages to read before you play it, and what comes next.
numbersOk: true
---

<!-- typed: the game's pull request numbers, which are names, not the game's numbers -->

On 2026-10-17 [[The valley]] became the game's focus. This page lists every system added or changed since then, in the game's merged pull requests from #183 on, grouped by what it touches. Each says in a sentence or two what changed and names the pages to read before you play it. [[Updates]] has the same changes sync by sync; this page keeps the whole day on one screen.

**Worth knowing before you play:** with the [[Survival]] setting off, your body counts as always full, so every food is refused with "You are full." and food never heals in that mode (see [[Food]]).

## Gathering and production

### Farming (game #206)

Till grass or dirt with a [[Hoe]] in hand, plant a seed, water it from a [[Waterskin]], and harvest it with E when it is ready, for its food and two seeds back. Crops grow on the clock only while their soil is wet; dry soil pauses them and never kills them. A wall or closed shutters stop farming, while a fence or an open window does not. Only potatoes and cabbages can be grown in play, from the plot by [[Your cottage]], until the farms bring the other seeds.

Read: [[Farming]], [[Crops]], [[Hoe]], [[Potato seed]].

### Chopping: the hatchet and the stump (game #207)

Chopping a tree needs a [[Hatchet]] in a hand; without one the menu says "Chop down (need a hatchet)". A felled tree leaves an outlined [[Stump]], which the hatchet chops up for one more log, clearing the tile. The chest in your cottage's main room and the joiner's chest each hold a hatchet from the start.

Read: [[Hatchet]], [[Trees]], [[Stump]], [[Log]].

### Apple trees and the orchard (game #192)

Pick apples from a laden apple tree's menu; the tree is then bare for {{n sprites.tree_apple.pick.days}} days of the world's clock before it bears again. [[The orchard]] has rows of them, and three cottage gardens have one each. Picking needs a clear line to the tree, like farming. A world made with Trees off has none.

Read: [[Trees]], [[Apple]], [[The orchard]].

### Fishing (game #193)

Make a [[Fishing rod]] at the [[Workbench]] from a stick and a piece of cloth, hold it, and choose "Cast the line" at the water. A catch comes after {{n fishing.cast.waitMin}} to {{n fishing.cast.waitMax seconds}}, or nothing bites; walking away ends the cast. The river gives perch and trout, the pond carp and perch. Grill the fish at a fire.

Read: [[Fishing]], [[Fishing rod]], [[Perch]], [[Trout]], [[Carp]].

## Food and the body

### Food heals a little (game #186)

Each food heals a little, more if cooked, and only for the share of its hunger your stomach has room for, so it is never a way to top up. With your hunger at {{n tuning.player.fullAt}} or more you are full, and eating is refused: "You are full." A food on the belt is eaten from its slot, by its key, its menu, or a double-click.

Read: [[Food]], [[Health]], [[Hunger]], [[Belt]].

### The starting kit as a world choice (game #183, #191)

The starting kit is the game's data. At the Sandbox step of New world, a world can add extra starting items to it, or start everyone wearing the [[Developer Bag]] in place of the sack, for testing.

Read: [[World rules]], [[Developer Bag]], [[Getting started]].

## The dead, villagers, and light

### The dead strike what they break (game #185)

Fences, gates, doors, and shutters take real strikes, on the bite's cooldown, each with a small jolt in place of the old long shake. One of the dead alone breaks a stretch of fence in about two and a half minutes; a crowd is faster. One striking a fence bites a little further across it.

Read: [[Fences]], [[Breaking in]], [[The dead]].

### Immune villagers (game #187)

A villager can be flagged immune: the dead never hunt or harm them, whatever the world rules say. The [[Innkeeper]] and the [[Priest]] are flagged; the other villagers stay at risk.

Read: [[Villagers]], [[Innkeeper]], [[Priest]].

### Lanterns and torches (game #188, #189)

Hold an unlit torch to a lantern, in a bracket or on a post, to light it. A lantern is always lit and says so to a tinderbox or a lit torch. In Use mode the label over a wall bracket names what is on it.

Read: [[Torch]], [[Torch posts and brackets]].

### The groan in the dark (game #189)

The dead you cannot see in the dark put "Something groans in the dark." in the chat log only within {{n tuning.sight.groanRadius tiles}} of you, and at most once every {{n tuning.sight.groanGap seconds}}.

Read: [[Chat log]], [[Sight]].

## Coming next

Built, and in review in the game, not merged yet; their pages come with their merge.

- **Mining and charcoal** (game #210): a pickaxe breaks rocks into stone, and ore rocks give iron ore and come back after some days; the iron workings and the quarry as new places; a charcoal clamp that turns logs into charcoal, at the charcoal burners' clearing and in the smithy's yard; iron bars in the smithy's chest, so the anvil works from the first day.
- **The bucket** (game #211): an item in the bag, filled at any water or a well and poured on a plot to water the tiles round it; made of planks at the workbench, with one in your cottage's chest.
- **The scythe** (game #213): a swing harvests the ready rye on the tiles ahead. It needs iron, so it follows mining.

## See also

- [[Updates]], [[Planned]], [[Production chains]]

## Sources

<!-- sources at 8e7538f -->
- `src/entities/player.js:85-86`: with Survival off a body is always full, so every food is refused
- `src/farming.js:1-11`, `src/farming.js:99-106`, `tools/mapgen/valley.py:190`: farming, its reach and clear line, the cottage's potatoes and cabbages (game #206)
- `src/chop.js:1-50`, `data/loot.json:6-7`: the hatchet, the stump, the two chests (game #207)
- `data/sprites/tree_apple.json`, `src/fruit.js:30-52`: apple trees (game #192)
- `data/fishing.json`, `src/fishing.js:1-81`: fishing (game #193)
- `src/entities/player.js:81-101`, `data/tuning.json:55`: food's heal and `fullAt` (game #186)
- `data/kit.json`, `src/kit.js`: the starting kit (game #183, #191)
- `src/map.js:709-735`, `docs/09-openings.md`: the dead strike fences (game #185)
- `src/entities/villager.js:32`, `src/entities/zombie.js:357`: immune villagers (game #187)
- `src/burn.js:85-190`, `src/interactions.js:58`: lanterns and torches (game #188, #189)
- `src/ui/speech.js:69-90`, `data/tuning.json:102`: the groan's radius and gap (game #189)
- The game's open pull requests #210, #211, and #213: what comes next
