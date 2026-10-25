---
title: Hearth
categories: [Building, Light]
aliases: [Hearths]
summary: A stone fireplace you build from the palette, inside a room against a wall: a switch that lights the room and cooks, burning nothing.
---

{{infobox-prop hearth}}

A **hearth** is a fire you build into a house. It is on the build palette (`N`), costs {{n build.hearth.cost.stone}} [[Stone|stone]], and stands inside a room against a wall. Like a fireplace it is a switch: lit with a flame, put out with nothing, and it burns no fuel. Lit, it lights its whole room and you can cook at it (see [[Fire#The home lights|Fire]] and [[Cooking]]).

## Building one

Pick **Hearth** in the palette. Its ghost sits on the tile under the cursor, green where it may stand and red with the reason where not:

- **Indoors only**: the tile is outdoors.
- **Against a wall**: inside a room, but with no wall on any side of the tile.
- **No room**: something stands on the tile, or a rug is laid there.

A click starts a bar of {{n build.hearth.seconds seconds}}; when it ends the stone is spent and the hearth stands there, out. It needs no tool.

## Using it

- **Light the hearth**, with a [[Tinderbox]] or a lit [[Torch]] on you ("You light the hearth."); a Use of either on it lights it too.
- **Put out the hearth**, with nothing needed.
- **Cook here** while it is lit.
- **Take apart**, for one you built: half its stone back, rounded down, with no tool (see [[Building#Taking apart|Building]]).

{{prop-sections hearth}}

## With friends

A guest's build is a command the host checks and carries out for that player; lighting, putting out, and taking apart are the menu's own labels, run on the host. The hearth and whether it is lit travel with its tile.

## Sources

<!-- sources at 0ce54cf -->
- `data/build.json:125-133`: the palette's Hearth: a prop, six stone, `stand: "wall"`, its seconds, no tool (game #428)
- `src/setdown.js:21-38`: "Indoors only", "Against a wall" (a plain solid wall on any side), "No room"
- `data/sprites/hearth.json`: a switch that lights its room and cooks
- `src/interact.js`, `src/burn.js`: Light and Put out as a switch; "You light the hearth."
- `src/placement.js:587-604`: Take apart, half the cost back

{{navbox props}}
