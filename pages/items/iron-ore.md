---
title: Iron ore
categories: [Items, Materials]
aliases: [Ore]
summary: Mined from the ore rocks of the iron workings with a pickaxe, and smelted into iron bars at the forge.
---

{{infobox-item iron_ore}}

**Iron ore** is smelted into [[Iron bar|iron bars]] at the [[Forge]] (the recipe is below). It is mined from the ore rocks of [[The iron workings]] with a [[Pickaxe]] in hand (see [[Mining]]): a rock gives {{n sprites.ore_rock.mine.count.0}} and is gone, and a new ore rock rises elsewhere at the iron workings or in the woods round them {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days later, so the valley keeps {{n valley.resources.ore.count}} and iron never runs out. The ore cart at the workings and the miners' hut's chest hold some from the start. It {{stack iron_ore}}.

{{item-sections iron_ore}}

## Sources

<!-- sources at 261cd7a -->
- `data/items.json:51`: iron ore, its stack
- `data/sprites/ore_rock.json`, `src/mining.js:41-55`: an ore rock mined for ore, then gone (games #210 and #453)
- `data/maps/valley.json` `resources.ore`, `data/tuning.json` `resources.days`, `src/resources.js:33-64`: the ore area's count, and a new ore rock elsewhere in it after the days (game #453, at 261cd7a)
- `data/loot.json:12`, `data/loot.json:14`: the miners' chest and the ore cart
- `data/recipes.json:489-504`: a bar at the forge from iron ore

{{navbox items}}
