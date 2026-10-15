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
