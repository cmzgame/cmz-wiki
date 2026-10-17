---
title: Openings
categories: [Building, Mechanics]
aliases: [Door, Doors, Window, Windows, Shutters, Climbing, Climb through]
summary: Doors and windows, which are walls with a kind and a state; opening them with E, what shutters do to sight, and why nobody passes a window.
---

**Openings** are the doors and windows of a building. An opening is not an object: it is a [[Walls|wall]] on a tile's edge with a different kind, door or window, and a state: open or shut, whole or broken, with or without [[Boards|boards]]. Doors and windows both start closed.

## How it works

### Doors

A closed door blocks bodies and [[Sight|sight]]. Tap E near it, or choose the entry in its right-click menu, to open or close it from either side. E reaches a door within {{n census.constants.interact.INTERACT_RANGE tiles}} of either tile of its edge.

An open door with no boards lets bodies through across the whole width of the edge. Walking into the wall right beside an open doorway slides you towards the doorway, so you do not catch on the frame.

A door is the only way through a wall. [[The dead]] never open doors. They walk through open ones and break closed ones (see [[Breaking in]]).

### A door's tiles stay clear

Nothing stands on either of the two tiles a door is between, so the dead can always stand at a door to break it:

- A carried piece of furniture cannot be put down on either tile (see [[Placement]]).
- A door cannot be built where either tile holds any piece of furniture ("No room").
- Furniture made at a station never lands on one (see [[Crafting]]).

The same holds for the gates in a [[Fences|fence]], which are doors. The valley's own furniture is laid out the same way, and every door in it can be walked to.

### Windows and shutters

Windows have wooden shutters, not glass. Tap E to open or close them. Closed shutters block sight, but let a sliver of light into the room. Open shutters let sight and light through.

**Nobody passes through a window**, open, shut, or broken: not you, not a guest, not the dead. A window is for sight and light only. There is no climb, and a long press of E does nothing more than a tap.

A window is never a safe place to stand behind. The dead who see you through one go round to a door and break it. A window whose shutters are closed, or that is boarded, the dead may batter open to see in, but they never come through it. See [[Breaking in]].

### Light through an opening

The daylight in a [[Rooms|room]] comes in through its openings. By day each open door or window, or a broken one, lights {{n tuning.world.daylightTiles}} tiles of the room fully, so one open window fills a small room with daylight and a large room needs more of them open. Closed shutters add only their sliver: a room with every door and shutter shut is dark by day, and the dead in it are hidden from you as at night (see [[Sight#Darkness|Sight]]). See [[Light]].

### Broken openings

A door or shutters the dead break are gone for good. A broken door stays open as a doorway. Broken shutters are a hole, drawn as open shutters with no leaves; still nothing passes through it. Nothing repairs them, and you cannot build a new door or window into the gap, because the edge already holds a wall. A broken opening can still be boarded. Its menu shows "A broken doorway" or "Broken shutters".

### Building openings

A door or window can be built with the palette on N. See [[Building]].

## Numbers

- E reach: {{n census.constants.interact.INTERACT_RANGE tiles}}.
- A door's health: {{n census.constants.map.DOOR_HP}}.
- Shutters' health: {{n census.constants.map.SHUTTER_HP}}.

## With friends

A guest's E is sent with its input and carried out by the host, so a door opened by anyone opens for everyone, and the change is kept in the save. A guest can no more pass a window than the host can.

## See also

- [[Boards]]
- [[Breaking in]]
- [[Fences]], whose gates are doors you can see through
- [[Sight]]
- [[Controls]]

## Sources

<!-- sources at 9d9a5b5 -->
- `src/map.js:529-539`: a wall record with its kind and state
- `src/map.js:613-622`: only a door, open or broken and unboarded, passes a body; a window never does
- `src/map.js:1133-1147`: what a door and shutters pass of light and sight
- `src/interact.js:444-474`: E and the menu open and close doors and shutters from either side
- `src/interact.js:43`: E's reach
- `src/map.js:1190-1199`: an open doorway passes across its whole width
- `src/map.js:1327-1345`, `src/map.js:1351-1354`, `src/map.js:1403-1418`: the slide towards an open doorway
- `src/entities/zombie.js:531-595`, `src/map.js:573-604`: the dead break closed doors and never open them
- `src/map.js:478-500`: a door is not built where either tile holds a prop; the two tiles beside a door
- `src/placement.js:95-115`: nothing put down on a door's tiles
- `src/stations.js:178-185`: made furniture lands off a door's tiles
- `src/map.js:1808-1816`: a fence's gates are doors
- `tools/check.js:135-205`, `tools/mapgen/valley.py:106-112`: every map's door tiles clear and reachable on foot
- `src/interact.js:821-834`, `src/interact.js:924-931`: E acts on its release however long it was held; no hold of E
- `src/map.js:607-613`, `src/map.js:638-681`: the dead batter a shut or boarded window from outside, never pass it
- `src/light.js:30`, `src/light.js:124-162`, `data/tuning.json:80`: a room's daylight from its openings: each open or broken one lights `daylightTiles` tiles of the room fully by day, shut ones only their leak (game #150)
- `src/map.js:588-593`: what a broken door and broken shutters become
- `src/placement.js:188-190`: nothing built into the gap
- `src/interact.js:460-461`: the menu's broken entries
- `data/build.json`: the door and window in the palette
- `src/map.js:460-461`: door and shutter health
- `src/interact.js:936-956`, `src/interact.js:471`: a guest's E performed by the host, the change reaching guests and the save
