---
title: Sight
categories: [Mechanics, The world]
aliases: [Line of sight, Fog, Fog of war, Vision]
summary: What you can see: line of sight from your tile, the fog over the rest, what blocks a view, and how the dark hides the dead.
---

You see what has a clear line from where you stand. Everything on screen that you cannot see is drawn under a dim purple fog, and any character standing there is not drawn at all. There is one continuous map with no cut between inside and outside, so walking into a house changes nothing but what the walls hide. In the dark, at night or in a shuttered room by day, you see the dead only close to you or where they stand in light.

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

Darkness shortens your sight of [[The dead]]. Line of sight still decides what you can see at all; the dark decides how much of the dead in it you see. Each of the dead in your line of sight is seen whole, partly (drawn faded), or not at all, by the larger of two things (one seen less than {{n tuning.sight.drawCutoff}} of whole is not drawn at all):

- **The light at its feet.** One standing in light is seen whole from any distance: in a lit room, in the pool of a fire or a mounted torch, or in another player's torchlight. The light it needs is {{n tuning.sight.litFull}}; below {{n tuning.sight.litNone}} it is not in light at all, and between the two it is partly seen. Out of doors by day the sky alone is that bright, so nothing is hidden.
- **How near it is.** With no light, the dead within {{n tuning.sight.darkRadius tiles}} of you are seen whole, and past that they fade to hidden over {{n tuning.sight.edge tiles}}. A light you carry gives sight back: while its radius is larger, you see the dead whole to that radius instead, with the same fade past it. A [[Torch]] in hand reaches {{n items.torch.fire.radius tiles}}, two torches {{n tuning.world.twoTorches}} times as far, and a torch on the belt {{n tuning.world.beltLight}} as far, which is a little past the short radius, so a belt torch lets you see a little farther than none. The light that counts is the one you carry yourself, never a friend's beside you.

One of the dead that is [[Burning]] is its own light and is always seen whole.

A room has its own light (see [[Light#Rooms|Light]]). One with every shutter and door shut is dark by day too, so the dead in it are hidden past your short reach even at noon; open shutters let the daylight in and fill the room with it. See [[Openings]].

Only the standing dead are hidden this way. The fallen, [[Villagers]], and other players are drawn wherever you have a line to them, day or night.

#### What the dark hides

The dark hides what you know, never what happens. One of the dead seen less than {{n tuning.sight.seenAt}} of whole:

- has no swing-target outline and no health bar over its head;
- cannot be pointed at: the pointer does not turn into the zombie hand over it, and a click, a right-click, or a [[Use]] passes it by, to whatever is beneath;
- shows no speech bubble. When it groans within {{n tuning.sight.groanRadius tiles}} of you, the [[Chat log]] says "Something groans in the dark." instead, with nothing to say where, at most once in {{n tuning.sight.groanGap seconds}} of the world's time however many groan; farther off, you hear nothing.

The line is for the dark alone. One of the dead whose bubble a tree's canopy hides by day (behind it, farther off than a bubble shows there) puts no line in the log.

A blow still lands on it: a swing hits whatever is in its wedge, and an arrow, a throw, or a fireball hits what it meets, seen or not. The dead's own sight of you is a separate rule, by the light you stand in; see [[Light#Light and the dead|Light]].

### The fog

Tiles out of sight are drawn under a purple fog at {{n census.constants.render_scene.FOG_ALPHA}} strength. The ground and the buildings still show through it, but characters there, the dead, villagers, and other players alike, are hidden. A fire's flames are drawn only when you can see it.

### Seeing through trees

When you walk behind a tall tree, a soft round hole opens in its canopy so you can see yourself: fully clear within {{n census.constants.render_scene.HOLE_INNER}} pixels of you, fading back to solid by {{n census.constants.render_scene.HOLE_OUTER}}. Only trees do this, and only those at least {{n census.constants.render_scene.OCCLUDER_MIN_HEIGHT}} pixels tall. The hole is for your own character alone: the dead and other players behind a tree stay hidden by it. Walls do not open a hole; the walls of the room you are in fade to {{n census.constants.render_scene.NEAR_WALL_ALPHA}} instead.

{{devonly note="V turns the fog off and shows everything, the dead hidden by the dark included. L cycles the light debug views."}}

## Numbers

- Corner points tested: {{n census.constants.visibility.CORNER}} of a tile from the centre.
- Longest line walked: {{n census.constants.visibility.MAX_STEPS}} steps.
- Fog strength: {{n census.constants.render_scene.FOG_ALPHA}}.
- Tree hole: clear within {{n census.constants.render_scene.HOLE_INNER}} px, solid by {{n census.constants.render_scene.HOLE_OUTER}} px.
- Near walls drawn at {{n census.constants.render_scene.NEAR_WALL_ALPHA}}.
- In the dark, the dead seen whole within {{n tuning.sight.darkRadius tiles}}, or the radius of the light you carry; hidden {{n tuning.sight.edge tiles}} past it.
- In light from {{n tuning.sight.litFull}} at their feet; not at all below {{n tuning.sight.litNone}}.
- Counted as seen from {{n tuning.sight.seenAt}} of whole; not drawn below {{n tuning.sight.drawCutoff}}.
- "Something groans in the dark.": only within {{n tuning.sight.groanRadius tiles}}, at most every {{n tuning.sight.groanGap seconds}}.

## With friends

Each player's sight and fog are their own, worked out from their own character. Another player is drawn only when they are in your sight, never through a wall.

Each player sees the dead in the dark by their own sight and their own torch, from their own copy of the light. A friend's torch lights the ground round them for everyone, so the dead in its light are seen from afar by you too, but it does not lengthen your own reach in the dark. When a guest clicks, the host decides what the click lands on by that guest's sight, not its own.

## See also

- [[Light]]
- [[Openings]]
- [[Trees]]
- [[The dead]]

## Sources

<!-- sources at 29a9f8e -->
- `src/visibility.js:12-48`, `src/visibility.js:86-109`, `src/camera.js:58-75`: rays from your tile over the viewport and a margin; the corner points
- `src/main.js:1170-1179`: recomputed on a new tile, a world change, or a resize
- `src/map.js:1363-1376`: walls, shut doors, closed shutters, and boards block sight; open and broken openings and see-through fences do not
- `src/visibility.js:39-42`, `src/map.js:1910`: only a prop marked opaque blocks sight, and no prop's definition is
- `src/sight.js:18-34`, `data/tuning.json:120`: how much of a dead one is seen: the light at its feet between `litNone` and `litFull`, or whole within `darkRadius` or the viewer's own carried light's radius, fading over `edge`; a burning one whole; seen from `seenAt` (game #173)
- `src/light.js:427-439`, `src/game.js:687-699`, `data/tuning.json:99-100`: the light at a point includes every carried light; a torch's radius in hand, two in hand, and on the belt at `beltLight` (game #173)
- `src/light.js:120-122`, `src/light.js:155-168`: the sky's light out of doors; a shuttered room at the night's level by day, an open one filled (game #150)
- `src/render/entities.js:196-204`, `src/render/entities.js:262`: the dead drawn faded, or not at all below `drawCutoff` (game #173), not the fallen, your own player, or a debug draw-all; the swing outline only at `seenAt` or more (game #189)
- `src/ui/zombie-bars.js:56`: no health bar on one not seen
- `src/interact.js:1495-1502`, `src/interact.js:873`, `src/interact.js:1547`, `src/main.js:820`, `src/main.js:1108-1109`, `src/main.js:1130`: one not seen cannot be pointed at: the hover hand, the actions menu, Use, and a click, the clicking player's own sight
- `src/ui/speech.js:68-89`: a hidden one's groan shows no bubble, and "Something groans in the dark." goes to the log only for one the dark hides, not a canopy (game #173), within `groanRadius`, at most every `groanGap` (game #189)
- `src/sight.js:1-11`: sight read by what a client draws and points at, and by the host's step only to choose what a click lands on; the swing, the shot, and the dead's sight of you never read it
- `src/render/scene.js:31-32`, `src/render/area.js:154-169`: the fog's colour and strength
- `src/render/entities.js:198-199`: characters out of sight are not drawn
- `src/render/props.js:142-148`: flames drawn only when seen
- `src/render/scene.js:35-43`, `src/render/scene.js:97-121`, `src/render/props.js:156`: the tree hole, its sizes, trees alone, for your own character; near walls faded
- `src/main.js:1063`, `src/main.js:1085`: V and L
- `src/main.js:1177`, `src/render/entities.js:198`: sight each player's own; another player drawn only in sight
- `src/net.js:882`, `src/net.js:1247`: every player's carried light sent to every guest, each with its owner
