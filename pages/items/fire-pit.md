---
title: Fire pit
categories: [Building, Light]
aliases: [Fire pits, Floor fire]
summary: A 2 by 2 stone fire pit with a pot rack, built from the palette on open ground indoors or out: a switch that cooks, lights its room indoors, and throws the brightest pool of any fire outdoors.
---

{{infobox-prop fire_pit}}

A **fire pit** is a big fire on the floor, {{n sprites.fire_pit.facingFootprint.y.0}} by {{n sprites.fire_pit.facingFootprint.y.1}} tiles, for a large room or the open air. It is built from the build palette (`N`) for {{n build.fire_pit.cost.stone}} [[Stone|stone]]. Like a [[Fireplace]] it is a switch: lit with a flame, put out with nothing, and it burns no fuel. Lit, it cooks (see [[Cooking]]); indoors it lights its whole room, and outdoors its pool of light reaches {{n sprites.fire_pit.fire.radius tiles}}, the farthest of any fire. One stands lit from the start in a small glade south of [[Your cottage]].

It is drawn as a low round base of flagstones and a short wall of squared blocks round a bed of coals and crossed logs, with a wrought-iron rack over it on two posts: two pots hang from its crossbar on S-hooks, one lidded, and a wooden ladle hangs at the bar's end. Lit, its own flames burn under the pots.

## Building one

Pick **Fire pit** in the palette. Its ghost is centred on the cursor, green where it may stand and red with the reason where not:

- **No room**: one of its four tiles is not open floor, something stands on it, a rug is laid there, a wall runs between two of them, or they are not all in one room or all outdoors.
- **Not on water**: one of its tiles is water. A road is fine.
- **Not beside a door**: it keeps clear of a door's two tiles, where the dead must be able to stand (see [[Openings]]).
- **Someone is in the way**: a player, a villager, one of the dead, or an animal stands on one of its tiles, or stands close enough beside it that it would close round them. A corpse does not count.
- **Too far**, or a wall in the way, and **Need ...** when you are short of the stone.

A click starts a bar of {{n build.fire_pit.seconds seconds}}; when it ends the stone is spent and the fire pit stands there, out. It needs no tool.

It is the fire for a [[Round rooms|round room]], where a fireplace cannot stand: it fits inside one, clear of the tiles the curve crosses ("Not against the curve"), the larger, seven across, with room to spare.

## Using it

- **Light the fire pit**, with a [[Tinderbox]] or a lit [[Torch]] on you ("You light the fire pit."); a [[Use]] of either on it lights it too. A [[Fireball]] does not light it.
- **Put out the fire pit**, with nothing needed.
- **Cook here** while it is lit, and **Boil water** for a tainted [[Waterskin]] or [[Bucket]] you carry (see [[Water#Boiling|Water]]).
- **Take apart**, for one you built, once it is out: half its stone back, rounded down, with no tool (see [[Building#Taking apart|Building]]). Lit, it says "Put it out first.". The valley's own is never taken apart.

It is never picked up or carried. Its flame flickers, and indoors the room's light dips with it a little, to {{n tuning.world.litRoomFlickerMin}} of full at the flicker's lowest (see [[Light]]).

{{prop-sections fire_pit}}

## With friends

A guest's build is a command the host checks and carries out for that player, naming its tile. Lighting, putting out, cooking, and taking apart are the menu's own labels, run on the host. The fire pit and whether it is lit travel with its tiles, so everyone sees the same fire; the room's flicker is drawn by each player's own screen and never crosses the wire.

## Sources

<!-- sources at 91bafc1 -->
- `src/stations.js:254-279`, `src/placement.js:380`, `src/placement.js:617-623` (at eba3c56): "Someone is in the way" while a living body's circle reaches into one of its tiles; a corpse never counts (game #553)
- `src/setdown.js:85-89`, `src/map.js:1317-1319` (at da57a57): no piece on a tile a ring's curve crosses (game #536)
- `data/build.json:123-133`: the palette's Fire pit: a prop, eight stone, `stand: "ground"`, its seconds, no tool (game #527)
- `data/sprites/fire_pit.json`: the drawn fire pit, 2 by 2, its rack and pots, its own flames, a switch that lights its room and cooks, radius 5, its flicker, `carry: false`
- `src/setdown.js:75-105`, `src/setdown.js:107-127`: "No room", "Not on water" (drinkable or slow floor; a road is neither), "Not beside a door", the tiles in one room or all outdoors; the ghost centred on the cursor
- `src/placement.js:250-277`, `src/stations.js:247-250`: the reach, the fit, "Someone is in the way", the cost
- `src/placement.js:1040-1080`: the timed build, out
- `src/burn.js:197-201`, `data/interactions.json`: lit as a switch, "You light the fire pit."; a tinderbox used on it lights it
- `src/placement.js:610-645`: Take apart, half the cost back, no tool; "Put it out first." while lit
- `src/light.js:50-60`, `src/light.js:333-341`, `src/render/area.js:149-172`, `data/tuning.json:190`: lit indoors it lights its room, and every lit fire with a radius casts its pool; the room's drawn light dips to `world.litRoomFlickerMin`
- `data/maps/valley.json:1883-1910`, `tools/mapgen/valley.py`: the lit fire pit in a glade south of your cottage, a place of its own with a clear ring round it
- `src/light.js:56-66` (at 91bafc1): a fire's pool cast from the middle of its footprint, the centre of the fire pit's four tiles (game #531)

{{navbox props}}
