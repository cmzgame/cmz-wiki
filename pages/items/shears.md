---
title: Shears
categories: [Items, Tools]
aliases: [Shear]
summary: A tool made at the anvil from an iron bar: carried, it shears a fed sheep's wool once a day.
---

{{infobox-item shears}}

**Shears** are a tool made at the [[Anvil]] from an [[Iron bar]], with a [[Smith's hammer]] in hand. Carried anywhere, in a hand, on the belt, or in the bag, they shear a sheep that has eaten today for its [[Wool]]. Their hover card says: "Shears a fed sheep's wool."

## Using it

A sheep's menu has **Shear the sheep**, a timed entry of {{n animals.work.shear seconds}}, once a game day and only on a day the sheep has eaten from a [[Feeding trough]]. It gives {{n animals.species.sheep.produce.count.0}} to {{n animals.species.sheep.produce.count.1}} wool, and one more {{pct animals.keep.more}} of the time; the wool goes into your bag, or falls at your feet if it is full. The entry is greyed when it cannot be done: "(the sheep has not been fed today)", "(it has been shorn today)", or, with no shears carried, "(you need shears)"; chosen anyway, it says "You need shears." The valley's sheep are in the croft's sheepfold. See [[Keeping]].

Shears have drawn art: their icon in the bag, their picture in the hand and on the floor, and their portrait in a hand slot of the character screen.

{{item-sections shears}}

## With friends

A guest's **Shear the sheep** is sent to the host by the sheep's id, and the host runs it for that player, the bar included; the wool goes into the guest's bag. The day a sheep was shorn is sent to every player, so a sheep one player shore is shorn for all.

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json:65`: the shears: either hand, their verb `shear`
- `data/items.json`: the shears' icon, held picture, and portrait drawn in art round 4 (game #514, at 393acaf)
- `data/recipes.json:758-774`: shears from an iron bar at the anvil, the hammer in hand
- `data/animals.json`: the sheep's `produce`, `work.shear`, `keep.more`
- `src/entities/animal.js:513-552`, `src/interact.js:1986-1990`: shearing: fed today, once a day, the shears carried, the count and one more, the greyed reasons
- `src/inventory.js:108-112`, `src/items.js:74-80`, `data/items.json:65`: "You need shears.": the shears are a pair, so no "a" (game #466, at d625844)
- `src/item-info.js:232`: its card's line

{{navbox items}}
