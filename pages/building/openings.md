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

A door is the only way through a wall. A shut door or closed shutters also stop your reach: nothing behind them can be opened, used, or talked to until they are open (see [[Rooms#Nothing in reach through a wall|Rooms]]). [[The dead]] never open doors. They walk through open ones and break closed ones (see [[Breaking in]]). Every door and every window can be broken, whatever its wall is made of: a door in a stone wall has the same health as one in a wooden wall, and so does one you build.

### A door's tiles stay clear

Nothing stands on either of the two tiles a door is between, so the dead can always stand at a door to break it:

- A carried piece of furniture cannot be put down on either tile (see [[Placement]]).
- A door cannot be built where either tile holds any piece of furniture ("No room").
- Furniture made at a station never lands on one (see [[Crafting]]).

The same holds for the gates in a [[Fences|fence]], which are doors. The valley's own furniture is laid out the same way, and every door in it can be walked to.

### Windows and shutters

Windows have wooden shutters, not glass. Tap E to open or close them. Closed shutters block sight, but let a sliver of light into the room. Open shutters let sight and light through.

**Nobody passes through a window**, open, shut, or broken: not you, not a guest, not the dead. A window is for sight and light only. There is no climb, and a long press of E does nothing more than a tap.

A window is never a safe place to stand behind. The dead who see you through one go round to a door and break it, and one of the dead just outside an open window bites you if you stand right at it (a step back is out of its reach). A window whose shutters are closed, or that is boarded, the dead may batter open to see in, but they never come through it. See [[Breaking in]].

### Light through an opening

The daylight in a [[Rooms|room]] comes in through its openings. By day each open door or window, or a broken one, lights {{n tuning.world.daylightTiles}} tiles of the room fully, so one open window fills a small room with daylight and a large room needs more of them open. Closed shutters add only their sliver: a room with every door and shutter shut is dark by day, and the dead in it are hidden from you as at night (see [[Sight#Darkness|Sight]]). See [[Light]].

### Broken openings

A door or shutters the dead break are gone for good. A broken door stays open as a doorway. Broken shutters are a hole, drawn as open shutters with no leaves; still nothing passes through it. Its menu shows "A broken doorway" or "Broken shutters". Nothing repairs them, but a broken opening can still be boarded, and a new one can be built over it: a new door over a broken door, a new window over broken shutters, whole, shut, and at full health. It is a new opening, not a repair, and it costs what a new one costs (see [[Building]]).

### Building openings

A door or window can be built with the palette on N, with a [[Smith's hammer]] on you, on an empty edge or **over a plain wall**: it takes the wall's place, made of the wall's material, so a door built into a stone wall is a stone door. A door can also be built over a fence, as a gate; a window cannot. In a wall of wood, a door's leaves and a window's shutters may be of another wood than the wall's, chosen with R while building (see [[Woods]]). The palette's Gate is built on an empty edge or into a fence (see [[Fences]]). A door or window you built into a wall is removed with the removal tool, which also asks for a hammer, and the wall is back, never a hole. Boarding one up and pulling a board off ask for the hammer too (see [[Boards]]). See [[Building]].

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

<!-- sources at 3c0a243 -->
- `src/woods.js:41-67`, `src/woods.js:115-170`: a door or window in another wood than its wall, drawn in that wood shut and open (game #348, #351, at 9d1681f)
- `src/map.js:733-744`: a wall record with its kind and state
- `src/map.js:817-826`: only a door, open or broken and unboarded, passes a body; a window never does
- `src/map.js:1358-1372`: what a door and shutters pass of light and sight
- `src/interact.js:479-546`: E and the menu open and close doors and shutters from either side; boarding and pulling ask for a hammer carried (game #222)
- `src/interact.js:52`: E's reach
- `src/map.js:1415-1424`: an open doorway passes across its whole width
- `src/map.js:1576-1594`, `src/map.js:1600-1603`, `src/map.js:1652-1667`: the slide towards an open doorway
- `src/entities/zombie.js:687-752`, `src/map.js:777-808`: the dead break closed doors and never open them
- `src/map.js:596-629`: a door is not built where either tile holds a prop; the two tiles beside a door
- `src/placement.js:97-117`: nothing put down on a door's tiles
- `src/stations.js:178-185`: made furniture lands off a door's tiles
- `src/map.js:2072-2080`: a fence's gates are doors
- `tools/check.js:137-139`, `tools/check.js:227-318`, `tools/mapgen/valley.py:106-113`: every map's door tiles clear and reachable on foot, and every container, station, and bed with a tile to stand on (game #227)
- `src/interact.js:1010-1023`, `src/interact.js:1113-1120`: E acts on its release however long it was held; no hold of E
- `src/map.js:811-817`, `src/map.js:842-885`: the dead batter a shut or boarded window from outside, never pass it
- `src/entities/zombie.js:607-622`, `src/visibility.js:12-48`, `data/tuning.json`: `zombie.contact`: a bite needs the contact distance and a clear line, which an open window passes (game #171)
- `src/light.js:31`, `src/light.js:130-168`, `data/tuning.json:106`: a room's daylight from its openings: each open or broken one lights `daylightTiles` tiles of the room fully by day, shut ones only their leak (game #150)
- `src/map.js:792-797`: what a broken door and broken shutters become
- `src/map.js:596-606`, `src/map.js:631-659`, `src/placement.js:199-205`: a door or window built over a plain wall, of its material, a door over a fence; a new one over a broken one of its kind, whole and shut; never over a whole one
- `src/map.js:661-676`, `src/placement.js:435`: the removal tool puts the wall back
- `src/interact.js:494-495`: the menu's broken entries
- `data/build.json:11-28`, `src/placement.js:144-161`: the door and window in the palette, each asking for `build`, a hammer, on you (game #222)
- `src/map.js:578-579`, `src/map.js:733-744`: door and shutter health, whatever the material
- `src/interact.js:1125-1145`, `src/interact.js:505`: a guest's E performed by the host, the change reaching guests and the save
