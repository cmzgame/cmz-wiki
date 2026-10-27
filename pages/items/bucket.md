---
title: Bucket
categories: [Items, Tools, Farming]
aliases: [Buckets, Fill the bucket, Pour the bucket, Water with the bucket, Boil water in the bucket, Empty the bucket first]
summary: An item that holds water: filled at any water or a well, poured on a plot to water every crop in the 3 by 3 round it, boiled clean at a cooking fire and poured into waterskins; carried empty, it milks a fed cow. One waits in your cottage's chest.
numbersOk: true
---
<!-- typed: the three by three and the three tiles ahead are loop bounds in the game's code (`src/bucket.js:53-54`, `src/farming.js:272`), not named numbers a lookup can read -->

{{infobox-item bucket}}

A **bucket** carries water for the fields. It is an item you keep in the bag, on the belt, or in a hand, holding up to {{n items.bucket.vessel.capacity}} of water. One pour waters every crop in the three by three tiles round where you pour it, so a plot is watered a few pours at a time rather than a crop at a time (see [[Farming]]).

## Using it

- **Fill the bucket:** at any water tile, well, trough, or font, the menu offers it (greyed "(full)" when it is full): "You fill the bucket."
- **Water with the bucket:** on a crop's menu, or on tilled soil with a crop in the three by three round it, wet or dry (greyed "(empty)" when the bucket is empty). It wets the soil of every crop there and empties the bucket: "You water ... plants." One pour a fill, so a pour on crops that are all wet still spends it. A crop's menu lists this entry first, then "Water with the waterskin" when you carry a skin with enough water (see [[Farming]]); each uses its own vessel. With no crop near, the pour is refused: "Nothing is planted there."
- **Boil water:** a bucket of tainted water is boiled clean at a lit cooking fire, as a waterskin is (see [[Water#Boiling|Water]]), with a longer bar of {{n tuning.water.bucketBoilSeconds}} seconds. [[Use]] the bucket on the fire, choose **Boil water** on the bucket's own menu in the bag, on the belt, or in a hand (greyed "Boil water (no lit fire in reach)" with none in reach), or choose **Boil water in the bucket** on the fire's menu, which takes the fullest bucket of tainted water you carry (greyed "(no tainted water in it)" when every bucket you carry is empty or clean). The fill is kept: "The water boils. It is clean now."
- **Pour into a waterskin:** a [[Use]] of the bucket on a [[Waterskin]] you carry moves as much water as the skin can take: "You fill the waterskin from the bucket.", with "; the bucket is empty" when it runs dry. Clean water into a clean or an empty skin stays clean; any water into a tainted skin leaves it tainted; tainted water into a skin holding clean water is refused: "That would taint the clean water." A full skin is refused with "The waterskin is full.", and a skin in an open chest with "Take the waterskin out first." So one boil can fill several skins with clean water.
- **Milk the cow:** carried empty, the bucket milks a cow that has eaten today, once a game day, for a [[Jug of milk]] (see [[Keeping]]). The milk is a jug of its own: the bucket stays empty. Any empty bucket you carry will do, in a hand, on the belt, or in the bag, before a bucket of water in your hand; only when every bucket you carry holds water is milking refused with "Empty the bucket first." Its hover card says "Milks a fed cow."

A [[Use]] of the bucket on water or a crop does the same as the menu's Fill and Water; in the Use mode the crop under the pointer is outlined. The menu's Fill and Water take the first bucket that can serve: hands, then belt, then bag; a Use takes the bucket you picked. Each needs you within reach of the tile with a clear line to it; neither is offered through a wall, and a pour never wets the far side of one.

A bucket is not a waterskin: you cannot drink from it, and "Fill waterskins" leaves it alone.

Its water is clean or tainted, as a waterskin's is (see [[Water#Tainted and clean|Water]]). Every fixed source is tainted, and a fill at one makes the whole bucket tainted. Its hover card says "Clean water." or, as its first line in red, "Tainted water.", and a small brown drop in the top right corner of its icon marks tainted water; an empty bucket says neither. Crops need no clean water: tainted water waters them as well.

## Where to find one

- The chest in the main room of [[Your cottage]] holds one, with a hatchet and a loaf.
- The [[Workbench]] makes one from three [[Plank|planks]], with a [[Smith's hammer]] on you.

{{item-sections bucket}}

## With friends

A guest fills, waters, boils, and pours into a skin through the same menu entries and Use, sent to the host with the tile or the fire and the bucket's uid (and the skin's, for a pour into it); its water is the bucket's own fill, and whether it is clean, saved and sent with the guest's inventory.

## Sources

<!-- sources at d7cf736 -->
- `data/items.json:22`: the bucket: either hand, `vessel` and its capacity (game #211), its verb `milk` (game #460)
- `src/entities/animal.js:513-552`, `src/item-info.js:233`: milking with the bucket carried, refused while it holds water; its card's line (game #460, at 6e3ab37)
- `src/bucket.js:23-45`, `src/bucket.js:73-89`, `src/bucket.js:144-164`: the buckets you carry, the first that can serve or the one named; Fill at water, a well, a trough, or a font; reach and a clear line; the menu's entries and their greyed forms
- `src/bucket.js:53-63`, `src/bucket.js:91-111`, `src/interact.js:862-868`: Water with the bucket on any crop in the 3 by 3, wet or dry, one pour a fill, "Nothing is planted there."; the crop's menu, the bucket's entry before the skin's (game #507, at d7cf736)
- `src/highlight.js:61-74`, `src/main.js`: the Use mode outlines its target, a crop on its plot (game #507)
- `src/water.js:54-67`, `src/water.js:80-89`, `src/water.js:132-176`, `src/interact.js:1161`, `src/interact.js:1179-1186`, `src/interact.js:1801`, `src/interact.js:1903`, `src/interact.js:1920`, `data/interactions.json:43`, `data/tuning.json:98`: boiling a bucket by Use, its own menu in the bag, on the belt, or in a hand, and the fire's "Boil water in the bucket"; its bar (game #508)
- `src/bucket.js:113-139`, `data/interactions.json:44`, `src/water.js:41-46`: Use on a waterskin pours into it, the mixing rule, the refusals (game #508)
- `src/bucket.js:85`, `src/water.js:38-52`, `src/item-info.js:261-266`, `src/ui/inventory-panel.js:274`: a fill at a tainted source taints the bucket; its card's line, the tainted line first in red, and the brown drop (games #435, #507)
- `src/farming.js:102-109`: a pour wets each crop as a waterskin does one
- `data/interactions.json:34-44`: the Use rows for the bucket
- `data/crops.json`: the fill's and the pour's seconds
- `data/recipes.json:373-388`: the bucket from three planks at the workbench, with `build`, a hammer, carried (game #222)
- `data/loot.json:6`: the bucket in your cottage's chest, beside a hatchet, a shovel, and a loaf
- `src/entities/animal.js:520-551`, `src/inventory.js:94-106`: milking prefers an empty bucket carried anywhere (game #466, at d625844)

{{navbox items}}
