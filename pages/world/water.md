---
title: Water
categories: [Mechanics, The world]
aliases: [Drinking, Shallow water, The river, The ford, Wells]
summary: Deep water stops every body, shallow water is slow, and any water can be drunk from.
---

The valley's river and ponds are deep water: nobody can walk into them. The ford is shallow water that everyone wades at a slower pace. You can drink your fill and fill your [[Waterskin|waterskins]] beside any water, and at a well, a trough, or the chapel's font.

## How it works

### Deep water

A tile that is wholly water stops every body: you, [[The dead]], and villagers. Paths go round it. The river can be crossed by the stone bridge on the high street or by the ford.

### Shallow water

Shallow water can be walked by everyone at {{n sprites.floor_water_shallow.walk}} of their usual speed. The valley's ford, where the drove crosses the river, is shallow. Paths treat it as ordinary ground and do not avoid it.

### Drinking and filling

Standing beside any water tile, deep or shallow, the menu offers two actions. E does the first when you are thirsty.

- **Drink from the water:** takes {{n census.constants.interact.DRINK_TIME}} seconds and fills your thirst to the top. "You drink your fill."
- **Fill waterskins:** takes {{n census.constants.interact.FILL_TIME}} seconds and fills every [[Waterskin]] in your bag to its {{n items.waterskin.capacity}}%. Waterskins on the belt are not filled.

You must be within {{n census.constants.interact.INTERACT_RANGE}} tiles of the water. Water never runs out and never makes you ill.

### Wells, troughs, and the font

A well, a trough, and the chapel's font give the same two actions. The well also lowers its bucket and winds it back up when you drink from it or click it. The valley has wells in the square, at [[Your cottage]], and in [[The inn]]'s yard; troughs in the square, the inn's yard, and [[The manor]]'s garden; and the font in [[The chapel]].

## Numbers

- Shallow water: {{n sprites.floor_water_shallow.walk}} speed.
- Drinking: {{n census.constants.interact.DRINK_TIME}} seconds.
- Filling: {{n census.constants.interact.FILL_TIME}} seconds.
- Reach: {{n census.constants.interact.INTERACT_RANGE}} tiles.
- Thirst after a drink: {{n tuning.player.thirstMax}}.

## With friends

A guest's drink or fill is sent to the host by the tile it names and run there as the guest's own action, so the guest's thirst and waterskins change on the host and come back in the next frame.

## See also

- [[Waterskin]]
- [[The valley]]
- [[Player]]

## Sources

<!-- sources at 9205ad7 -->
- `data/sprites/floor_water.json`, `src/map.js:1114-1117`, `src/map.js:1164-1171`: wholly water is walked by nobody
- `tools/mapgen/valley.py:154-158`: the river, the stone bridge on the high street, the ford where the drove crosses
- `data/sprites/floor_water_shallow.json`, `src/map.js:1120-1123`, `src/entities/player.js:250`, `src/entities/movement.js:51`, `src/entities/zombie.js:329`: shallow water walked by everyone at its speed factor
- `src/map.js:1131-1141`: paths treat shallow water as ordinary ground
- `src/interact.js:537-572`, `src/interact.js:579-581`, `src/interact.js:729-734`: drinking and filling beside any water tile; E drinks when thirst is under 90
- `src/interact.js:47-48`: the drink's and the fill's times
- `src/interact.js:538`, `src/interact.js:564-568`, `data/items.json:19`: every waterskin in the bag (not the belt) filled to 100
- `src/interact.js:42`: the reach
- `data/sprites/well.json`, `data/sprites/trough.json`, `data/sprites/font.json`, `src/interact.js:574-576`, `src/interact.js:614`: wells, troughs, and the font give the same actions; the well's bucket
- `tools/mapgen/valley.py:186`, `tools/mapgen/valley.py:193`, `tools/mapgen/valley.py:197`, `tools/mapgen/valley.py:238`, `tools/mapgen/valley.py:242`, `tools/mapgen/valley.py:253`, `tools/mapgen/valley.py:303`: where the wells, troughs, and the font stand
- `src/interact.js:550-553`, `data/tuning.json:46`: thirst set to its maximum
- `src/interact.js:61-83`: a guest's drink or fill run on the host by the tile
