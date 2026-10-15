---
title: Bandage
categories: [Items, Medicine, Player]
aliases: [Bandages]
summary: A strip of cloth that stops all bleeding at once.
---

{{infobox-item bandage}}

A **bandage** is a strip of cloth that stops [[Bleeding]]. It stacks to {{n items.bandage.stack}} in one bag cell. No chest, barrel, or body has one, and no recipe makes one.

## Effects

Choose "Apply" on a bandage in your bag while bleeding. It stops all bleeding at once, however many stacks, and uses one bandage. The game says "The bleeding stops." While you are not bleeding, the entry reads "Apply (not bleeding)" and cannot be chosen.

A bandage counts as cloth, so a recipe that takes any cloth can use one up.

{{item-sections bandage}}

{{devonly note="The dev chest by the spawn holds a stack of bandages, the only place they come from."}}

## With friends

A guest applies a bandage through the same menu entry; the host performs it.

## Sources

<!-- sources at 9205ad7 -->
- `data/items.json:15`: the bandage, its stack of 5, its `bandage` flag, and its `cloth` tag
- `data/loot.json:2-4`: no chest, barrel, or body loot table holds a bandage
- `data/recipes.json`: no recipe outputs a bandage
- `src/interact.js:1037-1045`: "Apply" only while bleeding, "Apply (not bleeding)" otherwise; it clears every stack, says "The bleeding stops.", and uses one
- `src/bleed.js:30-36`: applying a bandage clears the wound
- `data/recipes.json:17,89,201`: the torch, bow, and bed recipes take any `tag:cloth`, which a bandage satisfies
- `data/loot.json:5`, `src/settings.js:31`, `src/game.js:80-83`: the dev chest's five bandages, on by default, placed by the spawn
- `src/ui/inventory-actions.js:216,343-351`: a guest's menu choice is sent by label and run by the host

{{navbox items}}
