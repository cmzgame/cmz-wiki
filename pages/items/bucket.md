---
title: Bucket
categories: [Items, Tools, Farming]
aliases: [Buckets, Fill the bucket, Pour the bucket]
summary: An item that holds water: filled at any water or a well, poured on a plot to water every crop in the 3 by 3 round it. One waits in your cottage's chest.
numbersOk: true
---
<!-- typed: the three by three and the three tiles ahead are loop bounds in the game's code (`src/bucket.js:53-54`, `src/farming.js:272`), not named numbers a lookup can read -->

{{infobox-item bucket}}

A **bucket** carries water for the fields. It is an item you keep in the bag, on the belt, or in a hand, holding up to {{n items.bucket.vessel.capacity}} of water. One pour waters every crop in the three by three tiles round where you pour it, so a plot is watered a few pours at a time rather than a crop at a time (see [[Farming]]).

## Using it

- **Fill the bucket:** at any water tile, well, trough, or font, the menu offers it (greyed "(full)" when it is full): "You fill the bucket."
- **Pour the bucket:** at a crop or tilled soil where something in the three by three round it needs water, the menu offers it (greyed "(empty)" when it is empty). It wets the soil of every crop there and empties the bucket: "You water ... plants." One pour a fill.

A [[Use]] of the bucket on water or a crop does the same. The first bucket that can serve is used: hands, then belt, then bag. Each needs you within reach of the tile with a clear line to it; neither is offered through a wall, and a pour never wets the far side of one.

A bucket is not a waterskin: you cannot drink from it, and "Fill waterskins" leaves it alone.

## Where to find one

- The chest in the main room of [[Your cottage]] holds one, with a hatchet and a loaf.
- The [[Workbench]] makes one from three [[Plank|planks]], with a [[Smith's hammer]] on you.

{{item-sections bucket}}

## With friends

A guest fills and pours through the same menu entries and Use, sent to the host with the tile and the bucket; its water is the bucket's own fill, saved and sent with the guest's inventory.

## Sources

<!-- sources at 29a9f8e -->
- `data/items.json:21`: the bucket: either hand, `vessel` and its capacity (game #211)
- `src/bucket.js:1-126`: the buckets you carry, the first that can serve; Fill at water, a well, a trough, or a font; Pour on the 3 by 3 where something needs water, one pour a fill; reach and a clear line; the menu's entries and their greyed forms
- `src/farming.js:102-109`: a pour wets each crop as a waterskin does one
- `data/interactions.json`: the Use rows for the bucket
- `data/crops.json`: the fill's and the pour's seconds
- `data/recipes.json:373-388`: the bucket from three planks at the workbench, with `build`, a hammer, carried (game #222)
- `data/loot.json:6`: the bucket in your cottage's chest, beside a hatchet, a shovel, and a loaf

{{navbox items}}
