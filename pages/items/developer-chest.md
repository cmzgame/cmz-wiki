---
title: Developer chest
categories: [Development, Containers]
aliases: [Dev chest, Dev kit]
summary: A chest of test items placed beside the spawn of every new world while the game is in development.
---

{{devonly note="The dev chest exists for testing. It is placed by a setting, and is not part of the valley."}}

The **developer chest** stands beside the spawn of every new world while the game is in development. Unlike other [[Containers]], it holds the same things every time: weapons, ammunition, torches, bandages, the fire items, and two [[Developer Bag|Developer Bags]]. It has no food, materials, clothing, or tools. It is searched and opened like any chest, and can be picked up and carried.

## Contents

- Two [[Developer Bag|Developer Bags]]
- A [[Sword]], a [[Hatchet]], a [[Mace]], a [[Halberd]], and a [[Stick]]
- {{n loot.dev_kit.fixed.7.count}} × [[Throwing spear]]
- A [[Shield]] and a [[Bow]]
- {{n loot.dev_kit.fixed.10.count}} × [[Arrow]]
- {{n loot.dev_kit.fixed.11.count}} × [[Torch]]
- {{n loot.dev_kit.fixed.12.count}} × [[Bandage]]
- The [[Book of Fire]] and the [[Staff of Fire]]
- {{n loot.dev_kit.fixed.15.count}} × [[Throwing Knife]]
- {{n loot.dev_kit.fixed.16.count}} × [[Throwing Axe]]

## The setting

The chest is placed when a new world is made, on the nearest free tile beside the spawn, while the **devChest** setting is on (on by default). The setting is read when the game loads.

## The console

- `__game.giveKit()` puts a [[Developer Bag]] on your back, moves what you carried into it, and fills it with the weapons above.
- `__game.give(id, n)` gives any item by its id.
- `__game.giveDevBag()` gives a Developer Bag.

These change only the game they are typed into; on a guest's game they change only what the guest sees.

## See also

- [[Containers]]
- [[Settings]]

## Sources

<!-- sources at 9205ad7 -->
- `src/settings.js:31`: the devChest setting, on by default
- `data/sprites/dev_chest.json`: the dev chest rolls the dev kit
- `data/loot.json:5`: its fixed contents
- `data/loot.json`: the dev kit is the dev chest's alone; the wheelbarrow has its own empty table (game commit 2c70942)
- `src/placement.js:69-75`: a prop with no carry flag can be carried
- `src/game.js:80-83`: placed beside the spawn of a new world
- `src/dev.js:115-141`: giveKit, give, and giveDevBag, all on the local client
