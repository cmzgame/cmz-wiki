---
title: Developer chest
categories: [Development, Containers]
aliases: [Dev chest, Dev kit]
summary: A chest of test items placed beside the spawn of every new world while the game is in development.
---

{{devonly note="The dev chest exists for testing. It is chosen when a world is made, and is not part of the valley."}}

The **developer chest** stands beside the spawn of a new world made with it, while the game is in development. Unlike other [[Containers]], it holds the same things every time: weapons, ammunition, torches and a tinderbox, bandages, the fire items, two [[Developer Bag|Developer Bags]], the two [[Rugs|rugs]], and the eight [[Paintings|paintings]]. It has no food, materials, clothing, or tools. Its grid is {{n loot.dev_kit.grid.0}} by {{n loot.dev_kit.grid.1}}. It is searched and opened like any chest, and can be picked up and carried.

## Contents

- Two [[Developer Bag|Developer Bags]]
- An [[Arming sword]], a [[Hatchet]], a [[Flanged mace]], a [[Halberd]], and a [[Stick]]
- {{n loot.dev_kit.fixed.7.count}} × [[Throwing spear]]
- A [[Wooden shield]] and a [[Hunting bow]]
- {{n loot.dev_kit.fixed.10.count}} × [[Arrow]]
- {{n loot.dev_kit.fixed.11.count}} × [[Torch]]
- A [[Tinderbox]]
- {{n loot.dev_kit.fixed.13.count}} × [[Bandage]]
- The [[Book of Fire]] and the [[Staff of Fire]]
- {{n loot.dev_kit.fixed.16.count}} × [[Throwing Knife]]
- {{n loot.dev_kit.fixed.17.count}} × [[Throwing Axe]]
- A [[Bearskin rug]] and a [[Regal red rug]], to try laying them (see [[Rugs]])
- One of each of the eight paintings, to try hanging them: the [[Lone oak painting]], the [[Deer painting]], the [[Snow peak painting]], the [[Waterfall painting]], the [[Pines painting]], the [[Castle painting]], the [[Lake painting]], and the [[Sunset painting]] (see [[Paintings]])

## Choosing it

**Dev chest** is a switch at the Sandbox step of New world, under "Chosen once, when the world is made" ("A chest of every item by the spawn, made with the world."), on by default and offered as you last chose it. With it on, the chest is placed when the world is made, on the nearest free tile beside the spawn. It cannot be added to a world later, and in a friend's world it is the host's choice. See [[World rules]].

Two more choices of the same step set what everyone starts with rather than what stands by the spawn: **Dev bag** starts every character wearing a [[Developer Bag]] in place of the sack, and **Extra starting items** adds a list of items to the starting kit (see [[Player#The starter kit|the starter kit]]). Unlike the chest, they are world rules.

## The console

- `__game.giveKit()` puts a [[Developer Bag]] on your back, moves what you carried into it, and fills it with the weapons above.
- `__game.give(id, n)` gives any item by its id.
- `__game.giveDevBag()` gives a Developer Bag.

They are the host's: on a guest's console every helper that writes the world (these three, a teleport, a walk, a line said, a look set, a second player, a bleed or the infection, a shot, a world restored) refuses, saying the world is the host's, and `__game.readOnly` is true there. A guest's console still reads its copy of the world.

## See also

- [[Containers]]
- [[World rules]]

## Sources

<!-- sources at 3c0a243 -->
- `data/loot.json:19`: the eight paintings after the rugs, the grid grown to hold them (game #344, at 9ac68a2)
- `src/settings.js:33`, `src/settings.js:70`, `src/ui/screens.js:872-900`, `src/main.js:325-333`: the Dev chest, on by default, chosen at the Sandbox step and remembered as the next one's first choice
- `src/settings.js:71-72`, `src/rules.js:21-22`: Dev bag and Extra starting items, world rules of the same step
- `data/sprites/dev_chest.json`: the dev chest rolls the dev kit
- `data/loot.json:19`: its fixed contents
- `data/loot.json`: the dev kit is the dev chest's alone; the wheelbarrow has its own empty table
- `src/placement.js:72-78`: a prop with no carry flag can be carried
- `src/game.js:92-96`: placed beside the spawn of a new world made with it
- `src/dev.js:133-150`: giveKit, give, and giveDevBag, all on the local client
- `data/loot.json:19`: the two rugs last, the grid grown to hold them (game #339, at 499e344)
- `src/dev.js:1-8`, `src/dev.js:56-64`: a guest's console read-only: the writing helpers throw, `readOnly` (game #465, at d625844)
