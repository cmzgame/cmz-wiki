---
title: Smith's hammer
aliases: [Hammer]
categories: [Items, Tools]
summary: The tool for smithing and building: held for the anvil's recipes, carried for doors, windows, boards, Remove, and most of the workbench's rows; it fights as a weak weapon.
---

{{infobox-item hammer}}

The **smith's hammer** (the hammer until the names were made specific) is the tool of two trades.

- **Smithing:** every recipe at the [[Anvil]] but the hammer's own needs it **in a hand**.
- **Building:** carried anywhere on you (a hand, the belt, or the bag), it is what building a door or a window, boarding up an opening, pulling a board off, and **Remove** ask for (see [[Building]] and [[Boards]]), and what most rows at the [[Workbench]] ask for: the furniture, the [[Wheelbarrow]], the [[Wooden shield]], the [[Hoe]], the [[Shovel]], and the [[Bucket]]. Without one, the opening's Board up and Pull a board entries read "(need a smith's hammer)", the palette greys a door and a window, the Remove ghost goes red, the workbench's rows say "needs a smith's hammer on you", and each refuses with "You need a smith's hammer." With the world rule Free building on, building and Remove do not ask for it; boarding up and pulling a board still do.

It can be held in either hand and swung as a weak weapon that breaks after about {{n items.hammer.weapon.kills}} kills.

## Where to find one

- **The chest in [[The joiner]]'s workshop** holds one, every time, with a [[Hatchet]], so the first hoe and the first furniture need no iron.
- **The chest in the quarryman's hut** at [[The quarry]] holds another, with a [[Pickaxe]].
- The [[Anvil]] makes one from an [[Iron bar]] and a [[Stick]], the one anvil recipe that needs no hammer in hand. The smithy's chest holds the first iron bars (see [[The smithy]]).

{{item-sections hammer}}

## With friends

A guest's tool is checked on the host, from that player's own hands, belt, and bag, whether they build, board, remove, or make something at a station.

## Sources

<!-- sources at 015eabc -->
- `data/items.json:50`: the hammer: either hand, its verbs `smith` and `build`, a weapon, its kills
- `data/recipes.json:525-543`: the hammer's recipe, with no tool
- `data/recipes.json:505-663`: every other anvil recipe needs the hammer in hand (`tool`)
- `src/inventory.js:88-108`: a tool carried in a hand, on the belt, or in the bag, found by its verb; "You need a smith's hammer." (game #222)
- `data/build.json:11-28`, `src/placement.js:144-161`: a door and a window ask for `build`; Free building waives it
- `data/tuning.json:104`, `src/interact.js:479-546`, `src/placement.js:403-413`, `src/placement.js:581-595`: boarding up, pulling a board, and Remove ask for the board tool, `build`; Remove waived by Free building, boards not
- `data/recipes.json:216-255`, `data/recipes.json:312-472`: the workbench rows that use `build`: the hoe, the shovel, the shield, the furniture, the bucket, the wheelbarrow
- `src/settings.js:63`: Free building's help line
- `data/loot.json:7`, `data/loot.json:13`: the joiner's chest (game #222) and the quarryman's chest each hold a hammer
- `src/items.js:27-37`: durability per hit from kills

{{navbox items}}
