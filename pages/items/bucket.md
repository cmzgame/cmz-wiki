---
title: Bucket
categories: [Items, Tools, Farming]
aliases: [Buckets, Fill the bucket, Pour the bucket, Empty the bucket first]
summary: An item that holds water: filled at any water or a well, poured on a plot to water every crop in the 3 by 3 round it; carried empty, it milks a fed cow. One waits in your cottage's chest.
numbersOk: true
---
<!-- typed: the three by three and the three tiles ahead are loop bounds in the game's code (`src/bucket.js:53-54`, `src/farming.js:272`), not named numbers a lookup can read -->

{{infobox-item bucket}}

A **bucket** carries water for the fields. It is an item you keep in the bag, on the belt, or in a hand, holding up to {{n items.bucket.vessel.capacity}} of water. One pour waters every crop in the three by three tiles round where you pour it, so a plot is watered a few pours at a time rather than a crop at a time (see [[Farming]]).

## Using it

- **Fill the bucket:** at any water tile, well, trough, or font, the menu offers it (greyed "(full)" when it is full): "You fill the bucket."
- **Pour the bucket:** at a crop or tilled soil where something in the three by three round it needs water, the menu offers it (greyed "(empty)" when it is empty). It wets the soil of every crop there and empties the bucket: "You water ... plants." One pour a fill.

- **Milk the cow:** carried empty, the bucket milks a cow that has eaten today, once a game day, for a [[Jug of milk]] (see [[Keeping]]). The milk is a jug of its own: the bucket stays empty. Any empty bucket you carry will do, in a hand, on the belt, or in the bag, before a bucket of water in your hand; only when every bucket you carry holds water is milking refused with "Empty the bucket first." Its hover card says "Milks a fed cow."

A [[Use]] of the bucket on water or a crop does the same. The first bucket that can serve is used: hands, then belt, then bag. Each needs you within reach of the tile with a clear line to it; neither is offered through a wall, and a pour never wets the far side of one.

A bucket is not a waterskin: you cannot drink from it, and "Fill waterskins" leaves it alone.

Its water is clean or tainted, as a waterskin's is (see [[Water#Tainted and clean|Water]]). Every fixed source is tainted, and a fill at one makes the whole bucket tainted. Its hover card says "Clean water." or "Tainted water.", and a small brown drop in the top right corner of its icon marks tainted water; an empty bucket says neither. A bucket cannot be boiled yet, and crops need no clean water: tainted water waters them as well.

## Where to find one

- The chest in the main room of [[Your cottage]] holds one, with a hatchet and a loaf.
- The [[Workbench]] makes one from three [[Plank|planks]], with a [[Smith's hammer]] on you.

{{item-sections bucket}}

## With friends

A guest fills and pours through the same menu entries and Use, sent to the host with the tile and the bucket; its water is the bucket's own fill, and whether it is clean, saved and sent with the guest's inventory.

## Sources

<!-- sources at 3c0a243 -->
- `data/items.json:22`: the bucket: either hand, `vessel` and its capacity (game #211), its verb `milk` (game #460; line at 6e3ab37)
- `src/entities/animal.js:513-552`, `src/item-info.js:233`: milking with the bucket carried, refused while it holds water; its card's line (game #460, at 6e3ab37)
- `src/bucket.js:1-126`: the buckets you carry, the first that can serve; Fill at water, a well, a trough, or a font; Pour on the 3 by 3 where something needs water, one pour a fill; reach and a clear line; the menu's entries and their greyed forms
- `src/bucket.js:1-16`, `src/bucket.js:83-85`, `src/water.js:38-49`, `src/item-info.js:97-98`, `src/ui/inventory-panel.js:273`: a fill at a tainted source taints the bucket; its card's line and the brown drop; no boiling a bucket (game #435, at fa2997f)
- `src/water.js:97-103`: "A bucket cannot be boiled yet." (game #435, at fa2997f)
- `src/farming.js:102-109`: a pour wets each crop as a waterskin does one
- `data/interactions.json`: the Use rows for the bucket
- `data/crops.json`: the fill's and the pour's seconds
- `data/recipes.json:373-388`: the bucket from three planks at the workbench, with `build`, a hammer, carried (game #222)
- `data/loot.json:6`: the bucket in your cottage's chest, beside a hatchet, a shovel, and a loaf
- `src/entities/animal.js:520-551`, `src/inventory.js:94-106`: milking prefers an empty bucket carried anywhere (game #466, at d625844)

{{navbox items}}
