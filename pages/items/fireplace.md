---
title: Fireplace
categories: [Building, Light]
aliases: [Fireplaces, Hearth, Hearths]
summary: A big stone fireplace two tiles long, built from the palette indoors against a flat wall, or found in the village's houses: a switch that lights its room and cooks, burning nothing.
---

{{infobox-prop fireplace}}

A **fireplace** is the fire of a house. The village's houses have them, and you can build your own from the build palette (`N`) for {{n build.fireplace.cost.stone}} [[Stone|stone]], two tiles long against a flat wall indoors. It is a switch: lit with a flame, put out with nothing, and it burns no fuel. Lit, it lights its whole room and you can cook at it (see [[Fire#The home lights|Fire]] and [[Cooking]]). It replaced the hearth, which the palette built before.

It is drawn as a big stone hearth on a flagstone slab: an arched firebox, a fire laid on firedogs with an iron crane and a pot, and a thick oak mantle over it with a candle, a jug, and a bowl on it, under a chimney breast. Lit, its own flames burn in the firebox. It backs onto a west wall as drawn and onto a north wall as its mirror.

## Building one

Pick **Fireplace** in the palette. Its ghost runs two tiles along the wall under the cursor, its back to the wall, and turns to face out from whichever wall it finds: against a west wall it runs north to south, against a north wall west to east. Either of its two tiles may be pointed at. It is green where it may stand and red with the reason where not:

- **Indoors only**: the tiles are outdoors.
- **Against a wall**: its back does not rest on a plain, whole wall along its full length. A door, a window, a gap, a broken wall, a fence, or a [[Round rooms|round room]]'s curved wall will not do; a round room's fire is a [[Fire pit]].
- **No room**: a tile is not open floor, something stands on it, a rug is laid there, a wall runs between its two tiles, or they are in two rooms.
- **Not on water**, and **Not beside a door**: it keeps clear of a door's two tiles, where the dead must be able to stand (see [[Openings]]).
- **Someone is in the way**: a player, a villager, one of the dead, an animal, or a body stands on one of its tiles.
- **Too far**, or a wall in the way, and **Need ...** when you are short of the stone.

A click starts a bar of {{n build.fireplace.seconds seconds}}; when it ends the stone is spent and the fireplace stands there, out. It needs no tool.

## Using it

- **Light the fireplace**, with a [[Tinderbox]] or a lit [[Torch]] on you ("You light the fireplace."); a [[Use]] of either on it lights it too. A [[Fireball]] does not light it.
- **Put out the fireplace**, with nothing needed.
- **Cook here** while it is lit, and **Boil water** for a tainted [[Waterskin]] or [[Bucket]] you carry (see [[Water#Boiling|Water]]).
- **Take apart**, for one you built, once it is out: half its stone back, rounded down, with no tool (see [[Building#Taking apart|Building]]). Lit, it says "Put it out first.". The village's own are never taken apart.

It is never picked up or carried. Lit, it lights every corner of its room, and its own pool reaches {{n sprites.fireplace.fire.radius tiles}}, cast from between its two tiles. The flame flickers, and the room's light dips with it a little, to {{n tuning.world.litRoomFlickerMin}} of full at the flicker's lowest (see [[Light]]).

{{prop-sections fireplace}}

## With friends

A guest's build is a command the host checks and carries out for that player, naming the tile it points at; the host finds the same facing there by the same order. Lighting, putting out, cooking, and taking apart are the menu's own labels, run on the host. The fireplace, its facing, and whether it is lit travel with its tiles. The room's flicker is drawn by each player's own screen and never crosses the wire.

## Sources

<!-- sources at 91bafc1 -->
- `src/setdown.js:60-63` (at da57a57): never against a round room's ring (game #536)
- `data/build.json:112-122`: the palette's Fireplace: a prop, six stone, `stand: "wall"`, its seconds, no tool; it replaced the generated hearth (game #527)
- `data/sprites/fireplace.json`: the drawn fireplace, two tiles in two facings (a west wall as drawn, a north wall as its mirror), its own flames, a switch that lights its room and cooks, its radius and flicker, `carry: false`
- `src/setdown.js:75-105`: "No room", "Not on water", "Not beside a door", "Indoors only", "Against a wall" (a plain, unbroken, solid wall along the whole back)
- `src/setdown.js:107-140`: the ghost tries the tile under the cursor, the one above, then the one to the left, each facing in turn; a guest's anchor gets the same facing
- `src/placement.js:250-277`, `src/stations.js:247-250`: the reach, the fit, "Someone is in the way", the cost
- `src/placement.js:1040-1080`: the timed build, the prop stood on its fit's tiles in its facing, out
- `src/interact.js`, `src/burn.js:197-201`, `data/interactions.json`: Light and Put out as a switch; "You light the fireplace."
- `src/placement.js:610-645`: Take apart, half the cost back, no tool; "Put it out first." while lit
- `src/light.js:50-60`, `src/light.js:333-341`, `src/render/area.js:149-172`, `data/tuning.json:190`: a lit fireplace lights its room; the room's drawn light dips with the flicker to `world.litRoomFlickerMin`, the renderer's alone
- `src/light.js:56-66` (at 91bafc1): a fire's pool cast from the middle of its footprint, between the fireplace's two tiles (game #531)

{{navbox props}}
