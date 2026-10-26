---
title: Map
categories: [Interface, Mechanics]
aliases: [The map, Map on M, Chart, The chart, Minimap]
summary: M opens the map: the land anyone in your world has seen, drawn from the screen's angle, with a marker for every player.
---

**The map** opens with `M`. It shows the part of [[The valley]] that anyone in your world has seen, one flat colour a tile, with the walls drawn as lines, and a marker for every living player. It is drawn from the same angle as the screen, so **map north is up and to the right**: a direction on the map is the same direction in the world, for every player.

## How it works

### What it shows

- **The land seen so far.** Every tile anyone in the world has seen is charted: its ground (grass, dirt, cobbles, water, a field) or what stands on it (a tree, a rock), in one colour. Nothing else is drawn: no furniture, no items, no fires.
- **Walls** as thin lines on the edges of their tiles: walls, doors, windows, and fences each their own colour, and one a player built a shade lighter than the village's. A wall is charted once a tile on either side of it has been seen, so a building's walls show from outside before its rooms are seen.
- **Players.** A marker for every living player in the world, wherever they are, each with a name. Yours is a gold disc with a point toward the way you face, outlined dark, and it turns as your character does; the others are smaller white dots. The dead and the villagers are never shown.
- **Place names**, each drawn once any tile of its place has been charted.
- **A compass**: an "N" pointing up and to the right.

### How the land is revealed

The world keeps one chart, shared by every player in it. Wherever a living player goes, each tile within {{n tuning.world.chartRadius tiles}} that they can see is charted, as the fog shows it on the screen: a wall or a shut door hides what is behind it, but darkness does not, so the land is charted by night too. A door opened, a wall built, a field tilled, or a tree felled within reach is charted again as it now is. The chart is never forgotten, even for a far part of the wild the world has set aside, and a new character joining the world sees everything charted so far.

### Using it

- **The wheel** zooms in or out, in three steps, about the pointer.
- **A drag** pans the map, as far as the charted land goes.
- **Centre**, or a double-click, follows you again.
- **`M`**, the X, or `Escape` closes it. Escape closes any other panel open on top first, and the map before the pause menu.

The world keeps running while the map is open, and no key is taken from you: you can walk, fight, and shove with it up. Your character keeps turning to the pointer over the map, as over the world, so your aim and your marker's point follow the mouse. A click or the wheel over the map is the map's, never the world's.

## Numbers

- Charted around each player: {{n tuning.world.chartRadius tiles}}.

## With friends

The chart is the world's, made on the host from what every player sees, and kept in the save. A guest's map draws the chart the host sends, the land as it is charted and the walls as they change, and every player's marker where the host has them. What one player sees, everyone's map shows.

## Not on the map

There are no pins or notes, no marker where you died, no map to carry, no sign of what another player can see right now, and never the dead.

## See also

- [[Controls]], [[Interface]], [[Sight]], [[The valley]]

## Sources

<!-- sources at 3c0a243 -->
- `src/ui/map-panel.js:1-5`, `src/main.js:1068`: M opens and shuts the map, a panel over the world; the world keeps running (game #235)
- `src/chart.js:1-9`, `src/chart.js:64-73`, `src/chart.js:97-112`: the chart, a surface colour a tile from what stands on it or its floor, the walls by kind and a built one marked; a wall charted from either side (game #234)
- `src/chart.js:136-154`, `src/chart.js:171-189`, `data/tuning.json:114`, `src/visibility.js`: the reveal, each tile within `chartRadius` a living player can see by the fog's rule, with no light needed; a touched chunk within reach charted again
- `src/chart.js:208-248`, `src/game.js:216`: the chart in the save and the welcome, the changed cells in each frame (game #239); kept when the wild far away is set aside
- `src/ui/map-panel.js:10-21`, `src/ui/map-panel.js:196-259`: three zooms, the colours of the walls, a built wall lighter
- `src/ui/map-panel.js:275-380`: a marker for every living player, the others white, each named, never the dead or a villager; the place names once charted; the compass, "N" up and to the right
- `src/ui/map-panel.js:17`, `src/ui/map-panel.js:265-277`, `src/ui/map-panel.js:340-368` (at 5eb40e6): your own marker a gold disc with a point toward your facing, outlined dark, your name clear of it (game #501)
- `src/input.js:52-71` (at 5eb40e6): the pointer followed over the whole window, a panel included, so the aim turns with the map open; a click is the world's only over the world (game #501)
- `src/ui/map-panel.js:106-189`: Centre and the double-click, the drag clamped to the charted land, the wheel's zoom about the pointer
- `src/main.js:851-869`: Escape closes other panels first, then the map, then the pause menu
- `src/map.js:2236-2248`: the place names from the map's named sets
- `docs/33-the-map.md:80-82`: pins, notes, a death marker, a map item, and the dead not in scope
