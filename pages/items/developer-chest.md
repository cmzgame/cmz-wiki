---
title: Developer chest
categories: [Development, Containers]
aliases: [Dev chest, Dev kit]
summary: A chest of test items placed beside the spawn of every new world while the game is in development.
---

{{devonly note="The dev chest exists for testing. It is chosen when a world is made, and is not part of the valley."}}

The **developer chest** stands beside the spawn of a new world made with it, while the game is in development. Unlike other [[Containers]], it holds the same things every time: weapons, ammunition, torches and a tinderbox, bandages, the fire items, and two [[Developer Bag|Developer Bags]]. It has no food, materials, clothing, or tools. It is searched and opened like any chest, and can be picked up and carried.

## Contents

- Two [[Developer Bag|Developer Bags]]
- A [[Sword]], a [[Hatchet]], a [[Mace]], a [[Halberd]], and a [[Stick]]
- {{n loot.dev_kit.fixed.7.count}} × [[Throwing spear]]
- A [[Shield]] and a [[Bow]]
- {{n loot.dev_kit.fixed.10.count}} × [[Arrow]]
- {{n loot.dev_kit.fixed.11.count}} × [[Torch]]
- A [[Tinderbox]]
- {{n loot.dev_kit.fixed.13.count}} × [[Bandage]]
- The [[Book of Fire]] and the [[Staff of Fire]]
- {{n loot.dev_kit.fixed.16.count}} × [[Throwing Knife]]
- {{n loot.dev_kit.fixed.17.count}} × [[Throwing Axe]]

## Choosing it

**Dev chest** is a switch at the Sandbox step of New world, under "Chosen once, when the world is made" ("A chest of every item by the spawn, made with the world."), on by default and offered as you last chose it. With it on, the chest is placed when the world is made, on the nearest free tile beside the spawn. It cannot be added to a world later, and in a friend's world it is the host's choice. See [[World rules]].

Two more choices of the same step set what everyone starts with rather than what stands by the spawn: **Dev bag** starts every character wearing a [[Developer Bag]] in place of the sack, and **Extra starting items** adds a list of items to the starting kit (see [[Player#The starter kit|the starter kit]]). Unlike the chest, they are world rules.

## The console

- `__game.giveKit()` puts a [[Developer Bag]] on your back, moves what you carried into it, and fills it with the weapons above.
- `__game.give(id, n)` gives any item by its id.
- `__game.giveDevBag()` gives a Developer Bag.

These change only the game they are typed into; on a guest's game they change only what the guest sees.

## See also

- [[Containers]]
- [[World rules]]

## Sources

<!-- sources at 5baaa63 -->
- `src/settings.js:33`, `src/settings.js:70`, `src/ui/screens.js:871-899`, `src/main.js:311-319`: the Dev chest, on by default, chosen at the Sandbox step and remembered as the next one's first choice
- `src/settings.js:71-72`, `src/rules.js:21-22`: Dev bag and Extra starting items, world rules of the same step
- `data/sprites/dev_chest.json`: the dev chest rolls the dev kit
- `data/loot.json:6`: its fixed contents
- `data/loot.json`: the dev kit is the dev chest's alone; the wheelbarrow has its own empty table
- `src/placement.js:70-76`: a prop with no carry flag can be carried
- `src/game.js:85-89`: placed beside the spawn of a new world made with it
- `src/dev.js:133-150`: giveKit, give, and giveDevBag, all on the local client
