---
title: Wool
categories: [Items, Materials]
aliases: [Fleece]
summary: A fed sheep's wool, shorn once a day with shears carried; nothing uses it yet.
---

{{infobox-item wool}}

**Wool** is what a sheep gives when it has eaten today: choose **Shear the sheep** on its menu with [[Shears]] carried, a timed entry of {{n animals.work.shear seconds}}, once a game day. It gives {{n animals.species.sheep.produce.count.0}} to {{n animals.species.sheep.produce.count.1}} wool, and one more {{pct animals.keep.more}} of the time. The sheep are in the croft's sheepfold past the ford; see [[Keeping]]. Its card says "Shorn from a fed sheep, shears carried."

Nothing uses wool yet. {{planned doc=45 step=4 note="Wool spun to yarn at the spinning wheel, and woven to woollen cloth at the loom (Crafting 6)."}}

{{item-sections wool}}

## With friends

A guest's **Shear the sheep** is sent to the host, which shears for that player; the wool goes into the guest's bag.

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json:67`: wool, a material
- `data/animals.json`: the sheep's `produce`, `work.shear`, `keep.more`
- `src/entities/animal.js:513-552`: shearing: fed today, once a day, shears carried, the count and one more
- `src/item-info.js:224-229`: where it comes from, on its card
- `docs/45-animals.md:40`: yarn and woollen cloth, not built

{{navbox items}}
