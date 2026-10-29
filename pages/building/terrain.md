---
title: Terrain
categories: [Building, Mechanics]
aliases: [Terrain tab, Painting the ground, Paint the ground, Random spawn, No random spawn, Build menu, Build menu tabs]
summary: The build menu's Terrain tab, offered only with Free building: it paints the ground in grass, dirt, cobblestone, shallow water, water, and the pink Random spawn tile, a drag at a time.
---

{{devonly note="Terrain is for building the map by hand and for testing: its tab is offered only while Free building is on, and the pink Random spawn tile does nothing yet."}}

The **build menu** (N, the build palette; see [[Building]]) has two tabs, **Build** and **Terrain**. Build holds what a player builds: the walls and openings, the props, and the floors and stairs. **Terrain** holds the ground itself: it paints a tile as grass, dirt, cobblestone, shallow water, or water, or marks it with the pink **Random spawn** tile, and it holds the pieces of a hill (see [[Cliffs]]). Painting needs **Free building**. The direction is that the world's map can be built by hand, inside the game, from a flat plain of grass; the plain is built, the [[Maps#Flat grass|Flat grass]] map, and the painting is a tool for the rest.

## How it works

### The tabs

An entry of the build menu says which tab it is on, and the menu shows the tab bar only when the Terrain tab is on offer. With Free building off, the menu is the Build tab alone, with no tab bar. The tab you last picked is remembered for the session, also while Terrain is not on offer: turn Free building off and the menu shows Build, turn it on and Terrain comes back. No key switches tabs; click the tab.

Each tab lists its rows under small headings:

- **Build:** Walls and openings, Props, Floors and stairs.
- **Terrain:** **Ground** (Grass, Dirt, Cobblestone, Random spawn), **Water** (Shallow water, Water), and **Landforms** (the Cliff wall, Grassy cliff wall, Cliff top, Grassy cliff top, and Stone ramp; see [[Cliffs]]).

A terrain row shows its floor's colour, a small diamond, where a building row shows its cost. The five landforms are built as they were before they moved to this tab.

### The list

The menu sits under the health bars and over the log, and has a greatest height. Its title, tab bar, and hint stay where they are (and, on the Build tab, the **Take apart** row, which the Terrain tab does not have: a painted tile has nothing to take apart), and only the list of rows scrolls, with a thin scrollbar. The mouse wheel scrolls the list and never zooms the world while it is over the menu. The list keeps its place when the menu rebuilds as you walk and on each tab, and the row you picked last is scrolled into view when the menu opens again. In a short window the menu moves to the right of the health bars and drops its title and hint so the list keeps room. A row's full name shows on hover when it is cut short, with what a click does. N and Escape close the menu.

### Painting

Pick a terrain row, press the mouse at one corner, drag, and let go at the other: the rectangle between them is painted. A drag is at most {{n census.constants.placement.TERRAIN_DRAG}} tiles a side, larger than a floor's ({{n census.constants.placement.MAX_DRAG}}), since a map is painted big. Each tile is checked and painted on its own: the ghost covers the tiles, green where one can be painted and red where it cannot, with the reason, and the prompt says "Release to paint ... tiles" while you drag. A tile must be within {{n build.terrain_dirt.reach tiles}} of you by a clear line ("Too far", "A wall is in the way"), well past the {{n census.constants.placement.BUILD_REACH tiles}} of other building.

Painting is **instant**, costs **nothing**, and asks for no tool. It works on the **ground only**: upstairs, "Terrain is the ground's". It replaces the tile's floor outright, as tilling does, and nothing is kept: no record that a player built it, so there is nothing to take apart, and the Take apart tool does not light a painted tile. To change a tile again, paint it over. Without Free building every tile is refused, "Terrain is not in the game yet".

A painted tile is a floor of the map like any other. It blends into its neighbours as an authored one does: dirt and cobblestone meet grass with a ragged, pixel-crisp edge, water meets grass and dirt with a ragged dirt shore as the valley's river does, and shallow water and the pink tile are hard-edged diamonds, as the river's ford is.

### What a tile can be painted

- **Grass**, **Dirt**, and **Cobblestone**: the ground's surfaces. Painting grass over dirt or water takes the tile back to the ground's own grass.
- **Shallow water**: wading ground, walked at {{n sprites.floor_water_shallow.walk}} of the usual speed and drunk from, like the valley's ford (see [[Water]]).
- **Water**: deep water, which no body walks (see [[Water]]).
- **Random spawn**: a flat bubblegum-pink tile, bright by day and by night so it cannot be missed, walked as ordinary ground and shown in the same pink on the map. **It does nothing yet.** It is a tag for a tile where random things can spawn (trees, the dead, whatever the map's scatter and spawns later place), painted by hand on a map that has none of its own; nothing reads it yet, and a rule for it is not written. Where the dead come from on a map built by hand is not decided, and may be this tile or a square of its own. Until 2026-10-28 it was called No random spawn and meant the opposite, a tile where nothing random may spawn; a save or a frame that holds the old name loads as this tile.

Tilled soil is not here: tilling makes it (see [[Farming]]).

### What refuses a tile

- "A floor is laid there": a floor a player laid is on the tile (a cliff top included).
- "Not over a stair": a stair or its landing is on it.
- "Crops grow there": a crop grows on it.
- "That is already dirt ground" (grass and cobblestone the same way), "That is already shallow water", "That is already water", "That is already random-spawn ground": the tile is that ground already.
- "Terrain is the ground's": you are upstairs.
- "Not under something", for water of either kind only: a prop, a rug, an item, or a wall's edge is on the tile.
- "Someone is in the way", for water only: anyone is on the tile, you yourself included.
- "A body lies there", for water only: a corpse lies on the tile, since its loot would lie where no one walks.
- "Not here": the tile is off the map or a hole.
- "Too far" and "A wall is in the way", as above.

## Numbers

- A drag: at most {{n census.constants.placement.TERRAIN_DRAG}} tiles a side.
- Reach: {{n build.terrain_grass.reach tiles}}.
- Time: {{n build.terrain_grass.seconds seconds}} (instant), cost: nothing.

## With friends

A guest paints through the same build command as the host's player does, naming the two corners of the rectangle and the terrain. The host checks its own Free building, the reach, the size of the drag, and each tile's refusals, and paints. The painted tiles travel with their chunks, so every player sees them, and are kept in the save; a wild chunk holding a painted tile is never forgotten and grown over again. Nothing about the network changed to carry them.

## Settings that change it

- **Free building** (default Off): offers the Terrain tab and lets it paint. See [[World rules]].

## See also

- [[Building]]
- [[Cliffs]]
- [[Water]]
- [[Upper floors]]

## Sources

<!-- sources at 5257b92 -->
- `data/build.json`: each entry's `tab` and `group`; the six `terrain_*` entries (`kind` terrain, `dev`, `seconds` 0, `reach` 12, `already`) and the landforms moved to the Terrain tab (game #565)
- `src/placement.js:81-97`, `src/placement.js:255-296`: the tabs and which are on offer; `isTerrainBuild`, `TERRAIN_DRAG`, `terrainPlan`: the drag, the reach, the refusals in order, "Terrain is not in the game yet", "Terrain is the ground's" (game #565)
- `src/placement.js:363-433`: the paint run tile by tile, instant, each tile checked again as it is painted (game #565)
- `src/placement.js:1571`: a guest's rectangle as a build command, checked on the host (game #565)
- `src/map.js:1097-1123`: `isWaterFloor`, `paintGroundProblem`, `paintGround`: "A floor is laid there", "Not over a stair", "Crops grow there", "Not under something", the tile replaced outright (game #565)
- `src/ui/build-palette.js`: the two tabs, the list that scrolls, the remembered tab and scroll (game #565)
- `data/ground.json`: `floor_randomspawn` (`floor_nospawn` until game #567) a laid kind, a hard diamond; dirt includes water, so deep water has a dirt shore (game #565)
- `data/sprites/floor_randomspawn.json`: the pink floor, its map colour, its note that nothing reads it yet (game #565, renamed in game #567)
- `src/map.js:2111-2114`, `src/map.js:2147-2156`: `RENAMED_FLOORS`, an old id `floor_nospawn` in a chunk, or under a laid floor, coming back as `floor_randomspawn` (game #567, at 5257b92)
- `docs/02-decisions.md`, 2026-10-28 (The pink is Random spawn): Michael's ruling, the meaning swapped, the dead's source on a bounded map left open
- The game's pull request #565 and `docs/02-decisions.md`, 2026-10-28 (The build menu is two tabs, Build and Terrain): Michael's request, and the hand-built map as a direction, not built
