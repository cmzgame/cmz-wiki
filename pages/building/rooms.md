---
title: Rooms
categories: [Building, Mechanics]
aliases: [Room, Indoors, Outdoors, Sealed, Flood fill]
summary: How the game finds rooms by flood fill, what counts as indoors, and what rooms change.
---

**Rooms** are found by the game, never laid out by hand. Any area of floor closed in by walls, doors, and windows is a room. Everything else is outdoors.

## How it works

### Finding rooms

The game fills outwards from each tile until it meets [[Walls|walls]], doors, and windows. An area closed in on every side is a room, whatever state its openings are in: an open or broken door still closes a room.

An area is outdoors when:

- it is larger than {{n census.constants.map.ROOM_MAX tiles}}
- it reaches ground that has not been grown yet
- it is closed in only by see-through walls, such as [[Fences|fences]] and [[Battlements|battlements]]

So a fenced field or yard is outdoors.

Each floor's rooms are found on that floor alone: an [[Upper floors|upper floor]]'s room is a room of its own, the open stairwell inside its walls part of it, and an open edge of an upper floor with nothing beyond it is outdoors, as a balcony would be. The inside of a [[Round rooms|round room]] is one room, its curved wall being walls on the edges of its tiles.

When a wall is built or removed, only the rooms on either side of it are worked out again. Closing the last gap in a ring of walls you [[Building|built]] makes a new room at once.

### What rooms change

- **[[Sleep]]**: a bed must be in a room. Outdoors it says "Not out here." Indoors, a siege held on you stops it too.
- **[[Light]]**: a lit [[Fireplace|fireplace]] or [[Fire pit|fire pit]] lights its whole room, and a room's daylight comes in through its openings: each one open lights {{n tuning.world.daylightTiles}} tiles of the room fully, so a larger room needs more open, and a room shut tight is dark by day.
- **[[Breaking in]]**: the dead choose a room to break into or out of, and at night the dead that saw you go into a room wait about it until dawn (the siege).
- **Near walls**: the walls of your room on the camera's side turn see-through.

### Translucent near walls

While you are inside a room, its walls on the camera's side are cut down to a stub {{n tuning.cover.stub}} pixels tall at their foot, their tops drawn along the cut, so you see the whole room and the people in it. A door or a window in such a wall is drawn whole, at its full height, faint ({{pct tuning.cover.openingAlpha}} solid), and works as usual. A corner post is cut with its walls only when every wall meeting at it is a near wall. A fence or bars stand as they are. Nothing is faded any more (Michael, 2026-10-30: "hide what is in the way, never fade"). Walls never get the soft hole round the player that tree canopies get.

### Nothing in reach through a wall

Whatever you do to a thing, you do with a clear line to it as well as within reach: a wall, a shut door, or closed shutters stop it, while a fence or an open window does not. You cannot open a chest, use a station, light a fire, sleep in a bed, chop a tree, farm, or poke or talk to a villager through a wall, and a station's ingredients come only from chests you can see. Choose an action behind a wall and you walk round to a place with a clear line, as you walk over to one out of reach; with no way round, the game says "Can't get there from here." An open chest or a station's panel closes when a wall comes between you. Building is the exception: a wall, a door, or a window is built or removed by distance alone, so a player shut in a room with no door can still build a door into a wall, or remove a wall they built, from inside (see [[Building]]).

### Sealed

The debug corner says whether your room is sealed or open. A room is sealed when every door is shut and whole or boarded, and every window is shuttered and whole or boarded. Nothing in the game reads the mark itself: sleep and the dead do not change with it, and the dead still break a sealed room's doors. A shut [[Castle gates|castle gate]] counts as a shut door, and the dead cannot break one: a room closed by gates alone is a cell for them.

A room with **no door at all** is another matter: nothing breaks a plain wall and nobody passes a window, so the dead never get in, and you cannot walk out (see [[Breaking in#A room with no door|Breaking in]]), though you may build your own way out (above). The light follows the openings, not the mark: a room with every door and shutter shut is dark by day (see [[Light]]).

## Numbers

- Largest room: {{n census.constants.map.ROOM_MAX tiles}}.
- Near walls are cut to a stub {{n tuning.cover.stub}} pixels tall; a door or a window in one is drawn at {{n tuning.cover.openingAlpha}} of its opacity.

## See also

- [[Walls]]
- [[Upper floors]], [[Round rooms]]
- [[Openings]]
- [[Fences]]
- [[Light]]
- [[Sleep]]

## Sources

<!-- sources at 3c0a243 -->
- `src/map.js:2876-2946` (the room fill, at da57a57): rooms filled per layer, a stairwell's void inside walls kept, an open edge onto ungrown upper ground outdoors (game #533); a ring's edges ordinary walls (game #536)
- `src/reach.js:1-33`: one reach test for every player action: distance to the nearest tile and a clear line (game #227)
- `src/interact.js:946-1002`: a timed action cancelled when a wall comes between; an action behind a wall walks round to a tile with a clear line, "Can't get there from here." with none
- `src/stations.js:62-80`, `src/main.js:937-940`: a station's ingredients only from chests in reach and sight; an open container closes behind a wall
- `src/placement.js:389-401`, `docs/02-decisions.md:20`: building and removing walls stay distance only, a player's way out of a sealed room (Michael, 2026-10-18)
- `src/map.js:1742-1794`: the flood fill, stopped by walls, doors, and windows in any state
- `src/map.js:25`: the largest room
- `src/map.js:1442-1454`, `src/map.js:1775-1777`: a see-through wall bounds no room
- `src/map.js:1830-1858`: rooms refound only on either side of a changed edge
- `src/entities/player.js:229-230`: a bed outdoors says "Not out here."; a siege held on the player refuses it
- `src/light.js:55-58`, `src/light.js:130-168`, `data/tuning.json:106`: a lit room fire's room light (a fireplace, a fire pit: `src/light.js:50-60` at c3cb736, game #527); a room's daylight by its open openings in proportion to its size, a shut room dark by day (game #150)
- `src/map.js:843-878`: the dead choose a room to break
- `src/entities/zombie.js:421-460`, `src/entities/zombie.js:847-914`: the siege, about a house the dead saw a player go into, until dawn
- `src/map.js:733-744`, `src/map.js:819-826`: a plain wall never breaks and a window never passes a body, so a room with no door is never entered
- `src/render/walls.js:355-371`, `src/render/walls.js:163-169`, `src/render/walls.js:306-316`: near walls faded, posts only when every wall is near
- `src/render/scene.js:38-43`: only trees open the hole round the player
- `src/map.js:828-842`, `src/main.js:1314`: sealed, computed only for the debug corner
- `src/map.js:2003-2014`, `src/map.js:2660` (at 77fee9d): a shut castle gate bounds a room, passes its sight and light, and counts as a shut door for sealed (game #570)
- `src/render/scene.js:35`: the faded walls' opacity
