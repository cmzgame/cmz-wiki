---
title: Scythe
categories: [Items, Tools]
aliases: [Scythes]
summary: A harvesting tool made at the anvil: a swing harvests the ready grain on the three tiles ahead; it fights as a weak weapon.
numbersOk: true
---
<!-- typed: the three by three and the three tiles ahead are loop bounds in the game's code (`src/bucket.js:53-54`, `src/farming.js:270`), not named numbers a lookup can read -->

{{infobox-item scythe}}

The **scythe** harvests grain a row at a time. Held in either hand, each swing harvests every ready grain crop on the three tiles ahead of you, the tile in front and the two beside it, as a hand harvest does each: the grain and the seeds go into your bag, and the tiles stay tilled soil ("You scythe ... rows: ..."). A swing at nothing, or at a crop that is not ready, still swings. Only grain is cut: today that is rye, whose harvest is [[Grain]]; [[Flax]] and the other crops are harvested by hand (see [[Farming]]). Each crop needs the same reach and clear line as a hand harvest, so a scythe never cuts through a wall.

It is made at the [[Anvil]] from an [[Iron bar]] and [[Stick|sticks]], with a [[Smith's hammer]] in hand; the smithy's chest and the quarryman's hut give the first bar and hammer. It can also be swung as a weak weapon that breaks after about {{n items.scythe.weapon.kills}} kills.

The rye fields of [[Long Acre]] are the scythe's work, and the farms' granaries hold rye seed for more.

{{item-sections scythe}}

## With friends

A guest's swing is carried out on the host, which harvests for that player; the grain and the seeds go into the guest's bag.

## Sources

<!-- sources at cfe0203 -->
- `data/items.json:47`: the scythe: either hand, its verb `harvest`, its weapon block
- `src/farming.js:255-290`: a swing with an item listing `harvest`, in the hand that swung, harvests every ready grain crop on the three tiles ahead by the `harvest` verb; the message counts the rows and what fell (game #213)
- `data/crops.json`: rye's `grain` flag; flax has none
- `data/recipes.json:569-588`: the scythe at the anvil, the hammer in hand
- `data/loot.json:9-10`, `tools/mapgen/valley.py:495-500`: rye seed in the granaries, and Long Acre's two rye fields (game #219)

{{navbox items}}
