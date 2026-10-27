---
title: Developer chest
categories: [Development, Containers]
aliases: [Dev chest, Dev kit]
summary: A chest of test items, every weapon and tool, materials, potions, and seeds, placed beside the spawn of a new world while the game is in development.
---

{{devonly note="The dev chest exists for testing. It is chosen when a world is made, and is not part of the valley."}}

The **developer chest** stands beside the spawn of a new world made with it, while the game is in development: inside [[Your cottage]], two tiles east of where you wake. Unlike other [[Containers]], it holds the same things every time, enough to try most of the game without a walk: every weapon and its ammunition, every tool, the materials most recipes start from, the three drinkable [[Potions|potions]], seed of six crops, two [[Developer Bag|Developer Bags]], and, of the decor, the [[Bearskin rug]] and the [[Castle painting]]. It has no food or clothing. Its grid is {{n loot.dev_kit.grid.0}} by {{n loot.dev_kit.grid.1}}, and everything in it fits. It is searched and opened like any chest, and can be picked up and carried.

## Contents

- Two [[Developer Bag|Developer Bags]]
- **Weapons:** a [[Hunting bow]], a [[Wooden shield]], a [[Halberd]], two [[Throwing spear|throwing spears]], the [[Staff of Fire]], an [[Arming sword]], a [[Flanged mace]], {{n loot.dev_kit.fixed.29.count}} × [[Arrow]], {{n loot.dev_kit.fixed.30.count}} × [[Fire arrow]], the [[Book of Fire]], {{n loot.dev_kit.fixed.35.count}} × [[Throwing knife]], and {{n loot.dev_kit.fixed.36.count}} × [[Throwing axe]]
- **Tools:** a [[Bucket]], a [[Hoe]], a [[Scythe]], a [[Shovel]], a [[Fishing rod]], a [[Hatchet]], a [[Pickaxe]], a [[Smith's hammer]], [[Shears]], a [[Lead]], a [[Dirk]], and a [[Tinderbox]]
- **Light and care:** two [[Torch|torches]] and {{n loot.dev_kit.fixed.34.count}} × [[Bandage]]
- **Materials:** a [[Log]], three [[Plank|planks]], a [[Stick]], four [[Iron bar|iron bars]], four [[Stone|stones]], three [[Linen cloth]], two [[Clay]], and {{n loot.dev_kit.fixed.40.count}} × [[Clay vial]]
- **Potions:** {{n loot.dev_kit.fixed.37.count}} × [[Healing potion]], {{n loot.dev_kit.fixed.38.count}} × [[Mana potion]], and {{n loot.dev_kit.fixed.39.count}} × [[Stamina potion]]
- **Seeds:** {{n loot.dev_kit.fixed.54.count}} each of [[Potato seed]], [[Cabbage seed]], [[Flax seed]], [[Garlic seed]], [[Pumpkin seed]], and [[Rye seed]] (see [[Farming]])
- **Decor:** a [[Bearskin rug]], to try laying one (see [[Rugs]]), and the [[Castle painting]], a wide one, to try hanging one (see [[Paintings]])

The other rug and the seven other paintings are not in it; they can be added to a new world's **Extra starting items**.

## Choosing it

**Dev chest** is a switch at the Sandbox step of New world, under "Chosen once, when the world is made" ("A chest of every item by the spawn, made with the world."), on by default and offered as you last chose it. With it on, the chest is placed when the world is made, on the nearest free tile to the one two tiles east of the spawn, in your cottage's living room. It cannot be added to a world later, and in a friend's world it is the host's choice. See [[World rules]].

Two more choices of the same step set what everyone starts with rather than what stands by the spawn: **Dev bag** starts every character wearing a [[Developer Bag]] in place of the sack, and **Extra starting items** adds a list of items to the starting kit (see [[Player#The starter kit|the starter kit]]). Unlike the chest, they are world rules.

## The console

- `__game.giveKit()` puts a [[Developer Bag]] on your back, moves what you carried into it, and fills it with weapons, bandages, and the fire items (not the chest's tools, materials, potions, or seeds).
- `__game.give(id, n)` gives any item by its id.
- `__game.giveDevBag()` gives a Developer Bag.

They are the host's: on a guest's console every helper that writes the world (these three, a teleport, a walk, a line said, a look set, a second player, a bleed or the infection, a shot, a world restored) refuses, saying the world is the host's, and `__game.readOnly` is true there. A guest's console still reads its copy of the world.

## See also

- [[Containers]]
- [[World rules]]

## Sources

<!-- sources at 393acaf -->
- `data/loot.json:20`: its fixed contents in order: every weapon, every tool, the materials, the three potions, six seeds, the bearskin rug and the wide castle painting; the throwing knives and axes cut to make room (game #514, at 393acaf)
- `tools/check.js`: a row proving the whole list fits the grid (game #514)
- `src/settings.js:40`, `src/settings.js:84`, `src/ui/screens.js:488-495`, `src/main.js:357`, `src/main.js:374-394`: the Dev chest, on by default, chosen at the Sandbox step and remembered as the next one's first choice
- `src/settings.js:85-86`, `src/rules.js:22-23`: Dev bag and Extra starting items, world rules of the same step
- `data/sprites/dev_chest.json`: the dev chest rolls the dev kit
- `data/loot.json`: the dev kit is the dev chest's alone; the wheelbarrow has its own empty table
- `src/placement.js:105-118`: a prop with no carry flag can be carried
- `src/game.js:115-120`: placed on the nearest free tile to two east of the spawn, inside the cottage beside you (game #514, at 393acaf)
- `src/dev.js:153-173`: giveKit's weapons, give, and giveDevBag
- `src/dev.js:1-8`, `src/dev.js:69`: a guest's console read-only: the writing helpers throw, `readOnly` (game #465, at d625844)
