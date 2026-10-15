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
