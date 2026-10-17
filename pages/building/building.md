---
title: Building
categories: [Building, Mechanics]
aliases: [Build, Build palette, Build mode, Removal, Removal tool, Remove]
summary: Building log walls, doors, and windows from the palette on N, doors and windows over walls and broken openings, and removing what players built or made with X.
---

**Building** is how you put up walls, doors, and windows of your own. You open the build palette with N, pick a piece, and lay it on the edge of a tile; a timed bar runs, and the materials are spent when it finishes. The removal tool on X takes away what players built or made. Everything you build is a [[Walls|wall]] on a tile's edge: a door or a window can go on an empty edge or into a wall that is already there.

## How it works

### The palette

N opens a short list on the left of the screen. It has three pieces and a Remove row:

- **Log wall**, costing {{n build.wall.cost.log}} [[Log]], built in {{n build.wall.seconds seconds}}.
- **Door**, costing {{n build.door.cost.plank}} [[Plank|planks]], built in {{n build.door.seconds seconds}}.
- **Window**, costing {{n build.window.cost.plank}} planks, built in {{n build.window.seconds seconds}}.

A piece you cannot afford is greyed. Every right-click menu also ends in a "Build" entry, which opens the same list. On an empty edge a door or a window is built of logs; built into a wall, it is made of that wall's material (see below). A log splits into {{n items.log.splitsInto.count}} planks from its item menu, with no tool.

N does nothing while you are [[Carrying furniture|carrying furniture]] ("Your hands are full.") or while the bag is open ("Close your bag to build."); the menu's Build entry is greyed then too. The palette and the bag take turns on the screen: opening the bag closes the palette. This is a matter of room on the screen, not of safety: with the bag open the game goes on (see [[Controls]]).

### Laying a piece

Once a piece is picked, a ghost of it follows the cursor, snapped to the nearest edge of the tile under it. The ghost is green where the piece can go and red where it cannot, with the reason:

- **Too far**: the edge's midpoint is more than {{n census.constants.placement.BUILD_REACH tiles}} from you.
- **Already a wall**: the edge already holds something this piece cannot be built over (see below).
- **No room**: a single solid piece of furniture spans both tiles of the edge. A door also needs both tiles walkable and nothing standing on either, so it cannot stand in water or beside any prop, solid or not: the dead must be able to stand at a door (see [[Openings]]). A wall or a window may be built over water or beside furniture.
- **Step back**: you are standing closer than {{n census.constants.placement.EDGE_CLEARANCE tiles}} to the edge.
- **Need**: you lack the materials, and it names them.

A click on a green ghost starts the build. A bar runs for the piece's time. Nothing is spent until the bar finishes, and every rule is checked again then. Moving cancels the build, as does going a little beyond the build reach. Only one build runs at a time.

Build mode stays on after a piece is finished, so a run of wall can be laid click by click. N or Escape leaves it.

When a wall goes up or comes down, the [[Rooms|rooms]] on either side of it are worked out again, so closing the last gap in a ring of walls makes a room.

### Building over a wall or a broken opening

A log wall needs an empty edge. A door or a window may also be built over what stands on the edge:

- **Over a plain wall**, authored or built: the door or window takes the wall's place, shut, and is made of the wall's material, so a door built into a stone wall is a stone door. The wall it replaced is remembered.
- **Over a fence**, a door only: it is a gate in the fence. A window cannot be built into a fence (see [[Fences]]).
- **Over a broken door**, a new door; **over broken shutters**, a new window: whole, shut, and at full health. It is a new one, at a new one's cost, never a repair.

Never over a door or a window that is whole. A door still needs both its tiles clear ("No room"). A torch bracket on a wall built over is lost with it. Whatever it is made of, a door or a window you build can be broken by the dead (see [[Breaking in]]).

### Removal

X, or the palette's Remove row, turns on the removal tool. The front-most removable thing under the cursor lights up green, or red with "Too far" when it is more than {{n census.constants.placement.REMOVE_REACH tiles}} away. A click destroys it at once, and the tool stays on. X, N, or Escape leaves it.

Only what players made can be removed:

- any wall, door, or window a player built, including a door or window built into a wall of the village
- any piece of furniture made at a station (a chest, a shelf, a workbench, a wheelbarrow, and the rest; see [[Crafting]]), whether or not it can be carried

The village's own furniture never lights up, even after it has been carried somewhere else, and neither do walls that are part of the map, trees, the well, fires, or torch posts.

Nothing is refunded. A removed container spills what it held onto its tile, and a removed station spills its output box too. A removed wall takes its [[Boards|boards]] and any torch bracket with it.

Removing a door or a window that was built into a wall puts the wall back, never a hole. If that wall was one a player built, it is still theirs to remove; a wall of the village comes back as the village's. A new door built over a broken one still remembers the wall the first was built into.

The removal tool cannot be used while carrying furniture ("Your hands are full.") or with the bag open ("Close your bag to build.").

## Numbers

- Log wall: {{n build.wall.cost.log}} log, {{n build.wall.seconds seconds}}.
- Door: {{n build.door.cost.plank}} planks, {{n build.door.seconds seconds}}.
- Window: {{n build.window.cost.plank}} planks, {{n build.window.seconds seconds}}.
- Build reach: {{n census.constants.placement.BUILD_REACH tiles}} to the edge's midpoint.
- Closest you may stand to the edge: {{n census.constants.placement.EDGE_CLEARANCE tiles}}.
- Removal reach: {{n census.constants.placement.REMOVE_REACH tiles}}.

## With friends

A guest's click is sent to the host as a build command. The host checks the guest's reach and materials again and runs the timed build on the guest's own character, spending the guest's own items. Removal works the same way: the guest names what it clicked, and the host checks that it can be removed and that it is in reach.

## Settings that change it

{{devonly note="Free building is for testing structures."}}

- **Free building** (default Off): every cost becomes free. The build time still applies. It is a world rule: on a guest it is the host's.

## See also

- [[Walls]]
- [[Openings]]
- [[Boards]]
- [[Rooms]]
- [[Placement]]
- [[Carrying furniture]]
- [[Workbench]], which makes furniture

## Sources

<!-- sources at 2ea0d24 -->
- `src/ui/build-palette.js`: the palette, its rows, costs greyed, and the Remove row
- `data/build.json`: each piece's name, sprite (`wall_log`), cost, and seconds
- `src/main.js:795`, `src/main.js:1043`: the Build entry at the foot of every menu
- `data/items.json`: the log's `splitsInto`; `src/interact.js:1070-1083`: splitting with no tool
- `src/main.js:852-861`, `src/main.js:795`, `src/main.js:1073-1074`: N, refused while carrying or with the bag open and its line; the Build entry greyed; an open bag closes the palette
- `src/placement.js:162-177`: the ghost snapped to the nearest edge
- `src/placement.js:188-200`: the red reasons in order
- `src/placement.js:27`, `src/placement.js:29`: the build reach and the edge clearance
- `src/map.js:601-609`: what "No room" means for a wall, a door, a window
- `src/map.js:599-609`: a door refused with a prop on either tile
- `src/map.js:587-597`, `src/map.js:622-650`: a door or window over a plain wall, of its material and remembering it; a door over a fence; a new one over a broken one of its kind; the bracket of the wall built over forgotten
- `src/map.js:741-751`: a door and a window always have health, whatever their material
- `src/placement.js:427-437`, `src/placement.js:566-592`: the timed build, spent and rechecked at the end, cancelled by moving
- `src/placement.js:576`: the build lasts within the reach plus 0.6
- `src/placement.js:476`: one build at a time
- `src/map.js:1806-1834`: rooms refound on either side of a changed edge
- `src/main.js:864-873`: X, refused while carrying or with the bag open, with the same line
- `src/placement.js:28`, `src/placement.js:370-376`: the removal reach
- `src/placement.js:319-368`: what lights up: props made at a station (`made`) and built walls
- `src/stations.js:183-184`: a prop made at a station marked `made`
- `src/map.js:642`: built walls marked `built`
- `src/placement.js:392-410`: a removed container spills its bag and a station its output, nothing refunded
- `src/map.js:652-671`, `src/placement.js:408`: a removed wall takes its boards and bracket; a door or window built into a wall leaves the wall again, built if it was built
- `src/placement.js:498-561`: a guest's build and remove as commands, rechecked on the host
- `src/rules.js:18`, `src/placement.js:126-129`: Free building makes costs free, the time stays
- `src/rules.js:13-21`, `src/rules.js:38-40`: Free building is a world rule, the host's on a guest
