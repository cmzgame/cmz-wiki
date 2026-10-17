---
title: Water
categories: [Mechanics, The world]
aliases: [Shallow water, The river, The ford, Well, Wells, The pond, Duck pond, Waters]
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
- **Fill waterskins:** takes {{n census.constants.interact.FILL_TIME}} seconds and fills every [[Waterskin]] in your bag and on your belt to its {{n items.waterskin.capacity}}%.

You must be within {{n census.constants.interact.INTERACT_RANGE}} tiles of the water. Water never runs out and never makes you ill.

### Fishing

With a [[Fishing rod]] in hand, a water tile's menu also offers **Cast the line**. The map names its waters, and each has its own fish: **the river**, the ford included; **the pond**, which is the duck pond on the green, the manor's pool, the farm pond at [[Hollow Farm]], and the quarry's flooded pit; and **the brook** north of [[Long Acre]], which the lane to the mere crosses on a plank footbridge. See [[Fishing]].

### Wells, troughs, and the font

A well, a trough, and the chapel's font give the same two actions, named for what they are: "Drink from the well", "Drink from the trough", "Drink from the font". The well also lowers its bucket and winds it back up when you drink from it or click it. The valley has wells in the square, at [[Your cottage]], and in [[The inn]]'s yard; troughs in the square, the inn's yard, and [[The manor]]'s garden; and the font in [[The chapel]].

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

<!-- sources at 0e765f7 -->
- `data/sprites/floor_water.json`, `src/map.js:1436-1439`, `src/map.js:1510-1517`: wholly water is walked by nobody
- `tools/mapgen/valley.py:159-163`: the river, the stone bridge on the high street, the ford where the drove crosses
- `data/sprites/floor_water_shallow.json`, `src/map.js:1442-1445`, `src/entities/player.js:278`, `src/entities/movement.js:56`, `src/entities/zombie.js:405`: shallow water walked by everyone at its speed factor
- `src/map.js:1477-1487`: paths treat shallow water as ordinary ground
- `src/interact.js:678-713`, `src/interact.js:719-742`, `src/interact.js:904-909`: drinking and filling beside any water tile; E drinks when thirst is under 90
- `src/interact.js:55-56`: the drink's and the fill's times
- `src/interact.js:679`, `src/interact.js:705-709`, `src/inventory.js:85-87`, `data/items.json:20`: every waterskin in the bag and on the belt filled to 100 (the belt's game #222)
- `src/interact.js:51`: the reach
- `data/sprites/well.json`, `data/sprites/trough.json`, `data/sprites/font.json`, `src/interact.js:715-717`, `src/interact.js:777`: wells, troughs, and the font give the same actions, each named for the prop; the well's bucket (game commit 2c70942)
- `tools/mapgen/valley.py:191`, `tools/mapgen/valley.py:198`, `tools/mapgen/valley.py:202`, `tools/mapgen/valley.py:243`, `tools/mapgen/valley.py:247`, `tools/mapgen/valley.py:258`, `tools/mapgen/valley.py:311`: where the wells, troughs, and the font stand
- `src/interact.js:691-694`, `data/tuning.json:53`: thirst set to its maximum
- `src/interact.js:69-91`: a guest's drink or fill run on the host by the tile
- `src/interact.js:719-742`, `tools/mapgen/mapgen.py:80-90`, `tools/mapgen/valley.py:211`, `tools/mapgen/valley.py:310`, `src/map.js:1451-1460`: Cast the line with a rod in hand; the river and the ford named `river`, the duck pond and the manor's pool `pond` (game #193)
