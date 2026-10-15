---
title: Openings
categories: [Building, Mechanics]
aliases: [Door, Doors, Window, Windows, Shutters, Climbing, Climb through]
summary: Doors and windows, which are walls with a kind and a state; opening them with E, climbing through windows, and what shutters do to sight.
---

**Openings** are the doors and windows of a building. An opening is not an object: it is a [[Walls|wall]] on a tile's edge with a different kind, door or window, and a state: open or shut, whole or broken, with or without [[Boards|boards]]. Doors and windows both start closed.

## How it works

### Doors

A closed door blocks bodies and [[Sight|sight]]. Tap E near it, or choose the entry in its right-click menu, to open or close it from either side. E reaches a door within {{n census.constants.interact.INTERACT_RANGE tiles}} of either tile of its edge.

An open door with no boards lets bodies through across the whole width of the edge. Walking into the wall right beside an open doorway slides you towards the doorway, so you do not catch on the frame.

[[The dead]] never open doors. They walk through open ones and break closed ones (see [[Breaking in]]).

### Windows and shutters

Windows have wooden shutters, not glass. Tap E to open or close them. Closed shutters block sight, but let a sliver of light into the room. Open shutters let sight and light through.

Nobody walks through a window, open or not. To pass, you climb.

### Climbing through a window

Hold E next to an open window to climb through it; the right-click menu also offers "Climb through". A hold is E kept down for {{n census.constants.interact.HOLD_TIME seconds}}. The climb takes {{n tuning.player.climbTime seconds}} and carries you to the tile on the far side.

Once started, nothing stops a climb short of your death. You cannot swing, draw a bow, or do anything else during it.

You can climb through a window when:

- it has no boards on either side
- its shutters are open, or broken
- you are not [[Carrying furniture|carrying furniture]]

Holding E at closed shutters says "The shutters are closed." Holding E at any other window you cannot climb says "You cannot climb through that." A hold of E looks only at the single nearest opening in reach.

### Light through an opening

The daylight in a [[Rooms|room]] comes in through its openings. Each open door or window adds daylight; closed shutters add only their sliver. See [[Light]].

### Broken openings

A door or shutters the dead break are gone for good. A broken door stays open as a doorway. Broken shutters are a hole, drawn as open shutters with no leaves. Nothing repairs them, and you cannot build a new door or window into the gap, because the edge already holds a wall. A broken opening can still be boarded. Its menu shows "A broken doorway" or "Broken shutters".

### Building openings

A door or window can be built with the palette on N. See [[Building]].

## Numbers

- E reach: {{n census.constants.interact.INTERACT_RANGE tiles}}.
- Hold time: {{n census.constants.interact.HOLD_TIME seconds}}.
- Your climb: {{n tuning.player.climbTime seconds}}.
- A door's health: {{n census.constants.map.DOOR_HP}}.
- Shutters' health: {{n census.constants.map.SHUTTER_HP}}.

## With friends

A guest's tap and hold of E are sent with its input and carried out by the host, so a door opened by anyone opens for everyone, and the change is kept in the save.

## See also

- [[Boards]]
- [[Breaking in]]
- [[Fences]], whose gates are doors you can see through
- [[Sight]]
- [[Controls]]

## Sources

<!-- sources at 9205ad7 -->
- `src/map.js:490-500`: a wall record with its kind and state
- `src/map.js:568-573`: a closed door blocks bodies
- `src/map.js:1019-1032`: what a door and shutters pass of light and sight
- `src/interact.js:443-472`: E and the menu open and close doors and shutters from either side
- `src/interact.js:42`: E's reach
- `src/map.js:1076-1081`: an open doorway passes across its whole width
- `src/map.js:1211-1230`, `src/map.js:1260-1305`: the slide towards an open doorway
- `src/entities/zombie.js:510-575`, `src/map.js:536-565`: the dead break closed doors and never open them
- `src/map.js:568-573`: no body walks through a window
- `src/interact.js:960-965`: hold E to climb, and the two refusals
- `src/interact.js:49`: the hold time
- `data/tuning.json`: `player.climbTime`; `src/entities/player.js:81-89`: the climb to the far tile
- `src/combat.js:187`, `src/archery.js:523`, `src/game.js:274`: no swing or bow during a climb, and death ends it
- `src/map.js:576-578`: what makes a window climbable
- `src/entities/player.js:74-79`: no climbing while carrying
- `src/interact.js:846-849`: hold E looks at the single nearest opening
- `src/light.js:29`, `src/light.js:124-131`: a room's daylight from its openings
- `src/map.js:551-559`: what a broken door and broken shutters become
- `src/placement.js:186-187`: nothing built into the gap
- `src/interact.js:458-459`: the menu's broken entries
- `data/build.json`: the door and window in the palette
- `src/map.js:432-433`: door and shutter health
- `src/interact.js:934-990`, `src/interact.js:469`: a guest's E performed by the host, the change reaching guests and the save
