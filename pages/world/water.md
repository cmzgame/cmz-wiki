---
title: Water
categories: [Mechanics, The world]
aliases: [Shallow water, The river, The ford, Well, Wells, The pond, Duck pond, Waters]
summary: Deep water stops every body, shallow water is slow, and any water can be drunk from, though all of it is tainted until boiled.
---

The valley's river and ponds are deep water: nobody can walk into them. The ford is shallow water that everyone wades at a slower pace. You can drink your fill and fill your [[Waterskin|waterskins]] beside any water, and at a well, a trough, or the chapel's font. All of that water is tainted: a drink of it may make you [[Sick]], and a skin or a bucket of it can be boiled clean at a cooking fire.

## How it works

### Deep water

A tile that is wholly water stops every body: you, [[The dead]], and villagers. Paths go round it. The river can be crossed by the stone bridge on the high street or by the ford.

### Shallow water

Shallow water can be walked by everyone at {{n sprites.floor_water_shallow.walk}} of their usual speed. The valley's ford, where the drove crosses the river, is shallow. Paths treat it as ordinary ground and do not avoid it.

### Drinking and filling

Standing beside any water tile, deep or shallow, the menu offers two actions. E does the first when you are thirsty.

- **Drink from the water (tainted):** takes {{n census.constants.interact.DRINK_TIME}} seconds and fills your thirst to the top. "You drink your fill."
- **Fill waterskins:** takes {{n census.constants.interact.FILL_TIME}} seconds and fills the [[Waterskin|waterskins]] in your bag and on your belt to their {{n items.waterskin.capacity}}%, skipping any that holds clean water (below).

You must be within {{n census.constants.interact.INTERACT_RANGE}} tiles of the water. Water never runs out.

### Tainted and clean

No fixed source is clean: the river, the ponds, the brook, the wells, the troughs, and the chapel's font are all tainted, and every Drink from one says **(tainted)**. A drink of tainted water always quenches, and it may bring two things: a {{pct tuning.water.sickChance}} chance of [[Sick]] (a stack more, with no roll, if you are Sick already), and a {{pct tuning.water.infectionChance}} chance of the [[Infection]]. Both are rolled on every tainted drink, from a source or from a skin.

Water in a [[Waterskin]] or a [[Bucket]] is tainted unless it is clean. The waterskin every survivor starts with is full of clean water. **Filling taints:** a fill at a tainted source makes the whole of the skin or bucket tainted, whatever it held before. So "Fill waterskins" at a tainted source skips any skin holding clean water, full or not, and fills only the empty and the tainted ones that are not full. When every skin that could take water holds clean water, the entry reads "Fill waterskins (they hold clean water)" and says "Your waterskins hold clean water: they won't be filled from tainted water." A bucket's fill skips nothing: a bucket of clean water filled at a tainted source is tainted.

**Pouring:** a [[Bucket]] Used on a waterskin you carry pours as much as the skin can take. Clean water into a clean or an empty skin stays clean; any water into a tainted skin leaves it tainted; tainted water into a skin holding clean water is refused: "That would taint the clean water."

The hover card of a skin or a bucket holding water says which it holds: "Clean water.", or, as the card's first line in red on a faint red ground, on a skin "Tainted water: drinking it may make you Sick." and on a bucket "Tainted water.". A small brown drop in the top right corner of its icon marks tainted water at a glance. A skin's Drink says "(tainted, ...)" with its fill. The item's name never changes. An empty one says nothing about water.

A waterskin's sip by itself, once you are Thirsty, takes only clean water: a skin of tainted water is left for you to drink by hand (see [[Thirst]]). When every skin you carry that holds water holds only tainted water, the log says once at each stage of thirst from Thirsty on: "Your waterskins hold only tainted water: boil it at a lit fire." A brew at a [[Cauldron]] takes clean water too, from the skins you carry: "Potions need clean water." (see [[Potions]]).

### Boiling

A waterskin or a [[Bucket]] of tainted water comes out clean after boiling at a lit cooking fire: a [[Campfire]], a hearth, a fireplace, or the [[Oven]] (see [[Cooking]]). A fire that does not cook, such as the [[Forge]] or a [[Charcoal clamp]], will not do: "That is no cooking fire." There are three ways to start it, and all do the same thing:

- **[[Use]]** a tainted waterskin or bucket, then click a lit cooking fire.
- **Its own menu**: **Boil water**, on a skin in the bag or on the [[Belt]], or a bucket in the bag, on the belt, or in a hand, offered only when it holds tainted water. With no lit cooking fire in reach it is greyed: "Boil water (no lit fire in reach)".
- **The fire's menu**, on a lit cooking fire: **Boil water**, for the fullest tainted skin you carry, and **Boil water in the bucket**, for the fullest bucket of tainted water you carry. With no tainted skin the first is greyed "Boil water (no tainted water carried)", and left off while a bucket of tainted water is carried; with buckets carried but none tainted, the second is greyed "Boil water in the bucket (no tainted water in it)"; with no bucket carried it is not there.

A bar runs for {{n tuning.water.boilSeconds}} seconds for a skin and {{n tuning.water.bucketBoilSeconds}} for a bucket, while you stay within {{n tuning.water.boilReach}} tiles of the fire with a clear line to it; walking away or a wall between ends it. At its end the water is clean and its fill is kept: "The water boils. It is clean now." The fire must still be lit; boiling burns no extra fuel. Clean water or an empty vessel has nothing to boil. A bucket boiled once can then be poured into several skins (above).

{{planned doc=44 note="The boiling pot: large stews that restore water as well as food, and boiling about four skins of water at once, with fluid transfer between containers beyond the bucket's pour into a skin."}}

### Fishing

With a [[Fishing rod]] in hand, a water tile's menu also offers **Cast the line**. The map names its waters, and each has its own fish: **the river**, the ford included; **the pond**, which is the duck pond on the green, the manor's pool, the farm pond at [[Hollow Farm]], and the quarry's flooded pit; and **the brook** north of [[Long Acre]], which the lane to the mere crosses on a plank footbridge. See [[Fishing]].

### Wells, troughs, and the font

A well, a trough, and the chapel's font give the same two actions, named for what they are and tainted like all water: "Drink from the well (tainted)", "Drink from the trough (tainted)", "Drink from the font (tainted)". The well also lowers its bucket and winds it back up when you drink from it or click it. The valley has wells in the square, at [[Your cottage]], and in [[The inn]]'s yard; troughs in the square, the inn's yard, and [[The manor]]'s garden; and the font in [[The chapel]].

## Numbers

- Shallow water: {{n sprites.floor_water_shallow.walk}} speed.
- Drinking: {{n census.constants.interact.DRINK_TIME}} seconds.
- Filling: {{n census.constants.interact.FILL_TIME}} seconds.
- Reach: {{n census.constants.interact.INTERACT_RANGE}} tiles.
- Thirst after a drink: {{n tuning.player.thirstMax}}.
- Chance a tainted drink makes you Sick: {{pct tuning.water.sickChance}}.
- Chance a tainted drink infects: {{pct tuning.water.infectionChance}}.
- Boiling a skin: {{n tuning.water.boilSeconds}} seconds, within {{n tuning.water.boilReach}} tiles.
- Boiling a bucket: {{n tuning.water.bucketBoilSeconds}} seconds.

## With friends

A guest's drink or fill is sent to the host by the tile it names and run there as the guest's own action, so the guest's thirst and waterskins change on the host and come back in the next frame. A guest's boil is sent the same way, by the fire and the skin or bucket it names, from any of the three ways in, and a pour from a bucket by the bucket and the skin; whether each skin's water is clean travels with it in the guest's inventory and in the save. The rolls for Sick and the infection are made on the host, and so is the line about only tainted water, sent to the guest's log.

## See also

- [[Waterskin]], [[Bucket]], [[Sick]], [[Cooking]]
- [[The valley]]
- [[Player]]

## Sources

<!-- sources at d7cf736 -->
- `src/interact.js:858-861`, `src/interact.js:867-906`, `src/water.js:25-43`, `data/tuning.json`: no fixed source is clean; every Drink from one labelled "(tainted)"; a tainted drink rolls Sick and the infection; a fill at a tainted source taints the whole skin, and only skins under full are filled (game #435, at fa2997f)
- `src/sick.js:56-67`: the two rolls, Sick at its chance or a stack once Sick, and the infection (game #435, at fa2997f)
- `data/kit.json`, `src/kit.js:15-16`: the starting skin full of clean water (game #435, at fa2997f)
- `src/bucket.js:83-88`: a bucket filled at a tainted source is tainted (game #435)
- `src/interact.js:1034-1090`, `src/water.js:23-26`: Fill waterskins at a tainted source skips a skin holding clean water; its two labels and the line (game #507, at d7cf736)
- `src/bucket.js:113-139`, `src/water.js:41-46`, `data/interactions.json:44`: a bucket poured into a skin, the mixing rule, the refusal (game #508, at d7cf736)
- `src/entities/player.js:159-176`: the line when only tainted water is carried (game #507, at d7cf736)
- `src/item-info.js:263-266`, `src/ui/inventory-panel.js:274`, `style.css`: the card's clean or tainted line, the tainted line first in red, and the brown drop on a tainted icon (games #435, #507, at d7cf736)
- `src/entities/player.js:131-149`: the sip by itself takes only clean water (game #435, at fa2997f)
- `src/water.js:54-176`, `src/interact.js:1161`, `src/interact.js:1170-1205`, `src/interact.js:1798-1801`, `src/interact.js:1893-1903`, `src/interact.js:1920`, `data/interactions.json:42-43`, `data/tuning.json:97-99`: boiling at a lit cooking fire, the three ways in for a skin and a bucket, their greyed labels, the two bars, the reach, the refusals, the fill kept (games #435, #508, at d7cf736)
- `data/sprites/campfire.json`, `data/sprites/hearth.json`, `data/sprites/fireplace.json`, `data/sprites/oven.json`, `data/sprites/forge.json`, `data/sprites/charcoal_clamp.json`: which fires cook (game #435, at fa2997f)
- `src/game.js:418`, `src/entities/character.js:64-74`: a skin's clean water in the sync check and the save (game #435, at fa2997f)
- `data/sprites/floor_water.json`, `src/map.js:1457-1460`, `src/map.js:1531-1538`: wholly water is walked by nobody
- `tools/mapgen/valley.py:160-164`: the river, the stone bridge on the high street, the ford where the drove crosses
- `data/sprites/floor_water_shallow.json`, `src/map.js:1463-1466`, `src/entities/player.js:280`, `src/entities/movement.js:56`, `src/entities/zombie.js:405`: shallow water walked by everyone at its speed factor
- `src/map.js:1498-1508`: paths treat shallow water as ordinary ground
- `src/interact.js:681-716`, `src/interact.js:722-745`, `src/interact.js:907-912`: drinking and filling beside any water tile; E drinks when thirst is under 90
- `src/interact.js:56-57`: the drink's and the fill's times
- `src/interact.js:682`, `src/interact.js:708-712`, `src/inventory.js:85-87`, `data/items.json:20`: every waterskin in the bag and on the belt filled to 100 (the belt's game #222)
- `src/interact.js:52`: the reach
- `data/sprites/well.json`, `data/sprites/trough.json`, `data/sprites/font.json`, `src/interact.js:718-720`, `src/interact.js:780`: wells, troughs, and the font give the same actions, each named for the prop; the well's bucket (game commit 2c70942)
- `tools/mapgen/valley.py:196`, `tools/mapgen/valley.py:207`, `tools/mapgen/valley.py:211`, `tools/mapgen/valley.py:255`, `tools/mapgen/valley.py:259`, `tools/mapgen/valley.py:270`, `tools/mapgen/valley.py:323`, `tools/mapgen/valley.py:457`, `tools/mapgen/valley.py:470`, `tools/mapgen/valley.py:515` (at 393acaf): where the wells, troughs, and the font stand
- `src/interact.js:694-697`, `data/tuning.json:53`: thirst set to its maximum
- `src/interact.js:70-92`: a guest's drink or fill run on the host by the tile
- `src/interact.js:722-745`, `tools/mapgen/mapgen.py:80-90`, `tools/mapgen/valley.py:212`, `tools/mapgen/valley.py:311`, `src/map.js:1472-1481`: Cast the line with a rod in hand; the river and the ford named `river`, the duck pond and the manor's pool `pond` (game #193)
- `src/stations.js:166-221`: a brew's draught of clean water, never tainted (game #491, at 0fa02e5)
