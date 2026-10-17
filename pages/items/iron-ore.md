---
title: Iron ore
categories: [Items, Materials]
aliases: [Ore]
summary: Mined from the ore rocks of the iron workings with a pickaxe, and smelted into iron bars at the forge.
---

{{infobox-item iron_ore}}

**Iron ore** is smelted into [[Iron bar|iron bars]] at the [[Forge]] (the recipe is below). It is mined from the ore rocks of [[The iron workings]] with a [[Pickaxe]] in hand (see [[Mining]]): a rock gives {{n sprites.ore_rock.mine.count.0}} and then stands mined out for {{n sprites.ore_rock.mine.days}} days before it bears ore again, so iron never runs out. The ore cart at the workings and the miners' hut's chest hold some from the start. It stacks to {{n items.iron_ore.stack}}.

{{item-sections iron_ore}}

## Sources

<!-- sources at 3f11fdb -->
- `data/items.json:51`: iron ore, its stack
- `data/sprites/ore_rock.json`, `src/mining.js:42-55`: an ore rock mined for ore, then spent for its days (game #210)
- `data/loot.json:12`, `data/loot.json:14`: the miners' chest and the ore cart
- `data/recipes.json:489-504`: a bar at the forge from iron ore

{{navbox items}}
