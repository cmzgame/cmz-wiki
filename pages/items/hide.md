---
title: Hide
categories: [Items, Materials]
aliases: [Hides, Animal hide]
summary: An animal's skin, taken by skinning a carcass with a dirk carried; tanned into leather at a tanning vat.
---

{{infobox-item hide}}

A **hide** is an animal's skin. Skinning a carcass with a [[Dirk]] carried gives one, as a whole yield, from a rabbit, a deer, a boar, a cow, or a sheep; a hen and a pig have no hide. Skinning comes first, before a carcass can be butchered (see [[Hunting]]). The kill's share decides whether it comes at all: a bow's kill always gives it, a melee or thrown kill {{pct animals.kills.melee}} of the time, a spell's {{pct animals.kills.spell}}, and a [[Halberd]]'s never ("The deer's hide is ruined.").

A hide is tanned into [[Leather]] at a [[Tanning vat]], which is made at the [[Workbench]]; nothing is made of leather yet.

{{item-sections hide}}

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json:61`: the hide, a material, two by two cells (game #456)
- `data/animals.json:4`, `data/animals.json:11-17`: the shares by class; each species' `skin` yield, none for the hen and the pig
- `src/entities/animal.js:737-797`: the yield at the kill's share by expected value; skinning, a dirk carried; the ruined hide's message
- `data/recipes.json:1574-1589`: a hide tanned to leather at the tanning vat (game #462, at d625844)

{{navbox items}}
