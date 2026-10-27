---
title: Bandage
categories: [Items, Medicine]
aliases: [Bandages, Apply]
summary: A strip of linen that stops all bleeding at once; woven at the loom from linen cloth.
---

{{infobox-item bandage}}

A **bandage** stops [[Bleeding]]. The [[Loom]] makes them from [[Linen cloth]], two to a cloth. It stacks to {{n items.bandage.stack}} in one bag cell.

## Effects

Choose "Apply" on a bandage in your bag while bleeding. It stops all bleeding at once, however many stacks, and uses one bandage. The game says "The bleeding stops." While you are not bleeding, the entry reads "Apply (not bleeding)" and cannot be chosen.

A bandage is not cloth: no recipe that wants cloth takes one.

{{item-sections bandage}}

{{devonly note="The dev chest by the spawn holds a stack of bandages."}}

## With friends

A guest applies a bandage through the same menu entry; the host performs it.

## Sources

<!-- sources at 3c0a243 -->
- `data/items.json:15`: the bandage, its stack, its `bandage` flag, and no `cloth` tag
- `data/recipes.json:140-154`: two bandages from a linen cloth at the loom (game #216)
- `src/interact.js:1235-1243`: "Apply" only while bleeding, "Apply (not bleeding)" otherwise; it clears every stack, says "The bleeding stops.", and uses one
- `src/bleed.js:31-36`: applying a bandage clears the wound
- `data/loot.json:20`: the dev chest's bandages
- `src/ui/inventory-actions.js:270`, `src/ui/inventory-actions.js:421-432`: a guest's menu choice is sent by label and run by the host

{{navbox items}}
