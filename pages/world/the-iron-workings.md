---
title: The iron workings
categories: [Places]
aliases: [Iron workings, The mine]
summary: The mine in the east woods: ore rocks and salt rocks that rise again about it, a mine's mouth, an ore cart, and the miners' hut with a pickaxe.
---

{{infobox-place "the iron workings"}}

**The iron workings** are the valley's mine, in the east woods: a low cliff of stone along the north with the mine's mouth in it, spoil heaps and a winch, a plank tramway, and an ore cart. Six ore rocks stand about it, mined with a [[Pickaxe]] for [[Iron ore]]. A mined one is gone, and a new one rises out of the ground {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days later somewhere else in the ore area, the workings and the woods round them, so there are always about {{n valley.resources.ore.count}} (see [[Mining#Coming back|Mining]]). About {{n valley.resources.salt.count}} salt rocks stand in the same area, mined with a pickaxe for [[Salt]] and rising again elsewhere in it the same way. The ore cart holds iron ore from the start.

East of it is **[[The miners' hut|the miners' hut]]**, with two beds, a table, a barrel, and a chest that holds a pickaxe and some iron ore, so the mine can be worked on arriving. [[The charcoal burners]] are just to the south.

{{place-contents "the iron workings"}}

{{place-contents "the miners' hut"}}

## The dead

Some of the dead walk about the workings, and one stands by the miners' hut.

## Sources

<!-- sources at 261cd7a -->
- `tools/mapgen/valley.py:525-540`, `data/maps/valley.json:5396-5720`: the cliff (stone wall until a cliff is drawn), the mine's mouth, spoil heaps, winch, tramway, ore cart, six ore rocks; the miners' hut, its chest naming its own table (game #210)
- `data/loot.json:12`, `data/loot.json:14`: the hut's chest (a pickaxe and ore) and the ore cart's ore
- `data/sprites/ore_rock.json`: an ore rock mined for ore, then gone (game #453)
- `data/maps/valley.json` `resources.ore`, `src/map.js:2545-2568`: the ore area round the workings, the workings open to it, the miners' hut kept clear (game #453, at 261cd7a)
- `data/maps/valley.json` `resources.salt`, `data/sprites/salt_rock.json`: the salt rocks in the ore area, the workings open to them (game #457, at 6e3ab37)
- `tools/mapgen/valley.py:599`: the dead about the workings

{{navbox places}}
