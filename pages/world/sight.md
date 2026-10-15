---
title: Sight
categories: [Mechanics, The world]
aliases: [Line of sight, Fog, Fog of war, Vision]
summary: What you can see: line of sight from your tile, the fog over the rest, and what blocks a view.
---

You see what has a clear line from where you stand. Everything on screen that you cannot see is drawn under a dim purple fog, and any character standing there is not drawn at all. There is one continuous map with no cut between inside and outside, so walking into a house changes nothing but what the walls hide.

## How it works

### Line of sight

Lines are drawn from the middle of your tile to every tile on screen, plus a margin round the edge. A tile counts as seen if its centre, or any of four points {{n census.constants.visibility.CORNER}} of a tile toward its corners, has a clear line to you. The view is worked out again whenever you move to another tile, the world changes, or the window changes size.

### What blocks sight

- Walls.
- Shut doors.
- Closed shutters.
- Boards nailed over a door or window.

### What does not

- Open doors and open shutters: you see through a window whose shutters stand open. See [[Openings]].
- A broken door or broken shutters: the hole is open.
- Fences and fence gates, shut or open: a fence is a wall you can see over.
- Trees, rocks, and furniture.

### Darkness

Darkness does not shorten your sight. At night you see just as far by line of sight; the world is only drawn darker and tinted. A [[Torch]] lights the way but does not widen your view. The dead are different: their sight does shrink in the dark. See [[Light]].

### The fog

Tiles out of sight are drawn under a purple fog at {{n census.constants.render_scene.FOG_ALPHA}} strength. The ground and the buildings still show through it, but characters there, the dead, villagers, and other players alike, are hidden. A fire's flames are drawn only when you can see it.

### Seeing through trees

When you walk behind a tall tree, a soft round hole opens in its canopy so you can see yourself: fully clear within {{n census.constants.render_scene.HOLE_INNER}} pixels of you, fading back to solid by {{n census.constants.render_scene.HOLE_OUTER}}. Only trees do this, and only those at least {{n census.constants.render_scene.OCCLUDER_MIN_HEIGHT}} pixels tall. The hole is for your own character alone: the dead and other players behind a tree stay hidden by it. Walls do not open a hole; the walls of the room you are in fade to {{n census.constants.render_scene.NEAR_WALL_ALPHA}} instead.

{{devonly note="V turns the fog off and shows everything. L cycles the light debug views."}}

## Numbers

- Corner points tested: {{n census.constants.visibility.CORNER}} of a tile from the centre.
- Longest line walked: {{n census.constants.visibility.MAX_STEPS}} steps.
- Fog strength: {{n census.constants.render_scene.FOG_ALPHA}}.
- Tree hole: clear within {{n census.constants.render_scene.HOLE_INNER}} px, solid by {{n census.constants.render_scene.HOLE_OUTER}} px.
- Near walls drawn at {{n census.constants.render_scene.NEAR_WALL_ALPHA}}.

## With friends

Each player's sight and fog are their own, worked out from their own character. Another player is drawn only when they are in your sight, never through a wall.

## See also

- [[Light]]
- [[Openings]]
- [[Trees]]
- [[The dead]]

## Sources

<!-- sources at 9205ad7 -->
- `src/visibility.js:10-67`, `src/camera.js:38-55`: rays from your tile over the viewport and a margin; the corner points
- `src/main.js:990-997`: recomputed on a new tile, a world change, or a resize
- `src/map.js:1019-1032`: walls, shut doors, closed shutters, and boards block sight; open and broken openings and see-through fences do not
- `src/map.js:1500`: no prop blocks sight
- `src/visibility.js`, `src/light.js:415-427`: sight has no light term
- `src/render/scene.js:31-32`, `src/render/area.js:154-169`: the fog's colour and strength
- `src/render/entities.js:182-186`: characters out of sight are not drawn
- `src/render/props.js:142-148`: flames drawn only when seen
- `src/render/scene.js:35-43`, `src/render/scene.js:97-121`, `src/render/props.js:156`: the tree hole, its sizes, trees alone, for your own character; near walls faded
- `src/main.js:887`, `src/main.js:907`: V and L
- `src/main.js:995`, `src/render/entities.js:184`: sight each player's own; another player drawn only in sight
