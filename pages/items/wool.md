---
title: Wool
categories: [Items, Materials]
aliases: [Fleece]
summary: A fed sheep's wool, shorn once a day with shears carried; spun into yarn at the spinning wheel.
---

{{infobox-item wool}}

**Wool** is what a sheep gives when it has eaten today: choose **Shear the sheep** on its menu with [[Shears]] carried, a timed entry of {{n animals.work.shear seconds}}, once a game day. It gives {{n animals.species.sheep.produce.count.0}} to {{n animals.species.sheep.produce.count.1}} wool, and one more {{pct animals.keep.more}} of the time. The sheep are in the croft's sheepfold past the ford; see [[Keeping]]. Its card says "Shorn from a fed sheep, shears carried."

Wool is spun into [[Woollen yarn]] at the [[Spinning wheel]] in [[The weaver]]'s workroom, and the yarn woven into [[Woollen cloth]] at the [[Loom]] beside it. Woollen cloth serves any recipe that takes any cloth. A line counts wool as one thing: "You shear the sheep: some wool."

{{item-sections wool}}

## With friends

A guest's **Shear the sheep** is sent to the host, which shears for that player; the wool goes into the guest's bag.

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json:67`: wool, a material
- `data/animals.json`: the sheep's `produce`, `work.shear`, `keep.more`
- `src/entities/animal.js:513-552`: shearing: fed today, once a day, shears carried, the count and one more
- `src/item-info.js:224-229`: where it comes from, on its card
- `data/recipes.json:1590-1605`, `data/recipes.json:215-230`: wool to yarn at the spinning wheel, yarn to woollen cloth at the loom (game #462, at d625844)
- `data/items.json:67`, `src/items.js:65-83`: wool a mass noun, counted so in the shear line (game #466, at d625844)

{{navbox items}}
