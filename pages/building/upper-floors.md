---
title: Upper floors
categories: [Building, Mechanics]
aliases: [Upper floor, Stairs, Stair, Storeys, Storey, Upstairs, First floor, Layers, Wood stair, Stone stair, Plank floor, Stone floor, Floors, Floor building, Storey fade]
summary: The map in floors: a stair three tiles long climbs one storey, the floors above you hidden while you are inside a house and faded while you stand behind one, everything you do kept to your own floor, and floors and stairs built with Free building.
---

The map has **upper floors**: a building may have a floor over its ground floor, a storey up, joined to it by a **stair**. A storey is {{n census.constants.map.STOREY}} pixels, a house wall's height (see [[Walls]]). In the valley one house has an upper floor so far, [[The tall house]] east of [[Your cottage]]; the proving ground's tower house has a cellar and two floors over its ground floor. With Free building on, players can build stairs and lay floors of their own, upstairs and down. Upstairs is the same world, walked into, with no loading and no cut.

## How it works

### Stairs

A stair is a straight run of three tiles climbing one storey in {{n census.constants.map.STAIR_TREADS}} even treads, each the same height over the one before. You get on at its foot, from the tile before the bottom step, and walk up: your feet climb onto each tread in turn and stand on its top, so your body rises tread by tread. You may walk up anywhere across the stair's width, at either side as well as the middle: on a stair only your feet are held by its sides, and you pass over whatever stands beside it. Crossing the top edge puts you on the floor above, on the **landing**, the floor tile past the top step; the last half tread is level with it. The landing is open on its other three sides, so you step off it onto the floor round it, or onto it from there. Coming down is the same backwards: from the landing walk back over the top edge onto the top tread, and down.

A stair's sides are closed on both floors: you get on and off only at its ends, never sideways from a step, and someone standing beside a stair is held off its side whole. On the floor above, the opening over the stair (the stairwell) is fenced by its edges, so nobody walks into it. There is no floor over a stair. Nothing but bodies stands on one.

Stairs come in wood and stone, drawn as one staircase: its treads, a closed stringer along each side over a recessed panel, a newel post at the foot and a taller post at the head, dark and open under the run. Each part is drawn at its own depth, so someone on a stair is drawn over the treads above them and behind the near stringer. The drawing stands on the tiles you walk: halfway up, feet at either side of the stair land on its drawn treads. The valley's stairs climb only north or west, away from the camera: one climbing toward the camera folds its treads onto one line on screen (Michael, 2026-10-27), and the map refuses one unless it says why, as the proving ground's two do, which try each way. A stair a player builds climbs north or west too (see [[Upper floors#Building floors and stairs|below]]). Nobody takes a stair apart, the map's or a built one.

Walls may stand along a stair's sides, on its own floor and round its stairwell above, but never across it: none between two of its steps ("Not across a stair") and none across its top edge, on its own floor or on the floor above, where a body crosses to the landing ("Not across a stair's top"). While you are on a stair, the walls along it on the camera's side fade, so you are seen on it; those on its far side stand.

### What you see

The camera follows you up the stair and onto the floor above. Each floor is drawn a storey higher than the one under it, so a two-storey house stands twice a house's height, and a floor hides what is under it. Where a wall stands on a wall below, the two are drawn as one face two storeys tall, with no ledge or cap between them, outside and in; a corner post on a post below is the same, its wood running on into the post below with no stone foot at the seam. A wall under a floor of the storey above shows no top through that floor while the floor is drawn over it: from upstairs, the ground floor's inner walls and the walls round a stairwell stay under the floor, and at a stairwell's edge a wall's top meets the floor's edge flush. A stair's picture is cut at its landing's height, so no post at its head stands up through a wall beside it or through the floor above.

- **Outside**, every storey of every house is drawn.
- **Inside a house**, the floors above yours are hidden over that house, so you see into your own floor; the rest of the village keeps its upper floors.
- **Upstairs**, you see your own floor, the ground round the house, and everything else.
- **In a cellar**, you see the cellar alone.

A body on a floor hidden from you is not drawn, nor its health bar or speech bubble, and a name tag shows only for someone on your own floor. Names, bars, and bubbles sit at the height of the body they belong to. Your own floor's walls fade on the camera's side while you are in a room, as on the ground (see [[Rooms]]).

**Behind a house**, an upper storey of a building that stands between you and the camera and covers any of your body on screen fades, so a player behind [[The tall house]] is seen through its first floor. The whole storey fades as one sheet, at the same strength as a room's near walls ({{pct census.constants.render_scene.NEAR_WALL_ALPHA}} solid): its walls, posts, tops, floor, furniture, rugs, things on the floor, stairs, and anyone on it. It fades only while it covers you: standing in front of it or beside it, it is solid. A storey of the house you are in never fades (it is hidden instead), nor one at or under your own floor, so a ground floor still hides a player a tile behind it as any one-storey house does. A storey made of floors a player laid does not fade yet. Each player's fade is their own, by where they stand.

### Your own floor

Everything you do is on the floor you stand on. `E`, the right-click menu, the Use mode, and the cursor read your own floor: what is under the cursor upstairs is the upstairs, and a chest, a door, a body, or anything else on another floor has no actions for you ("That is on another floor."). Doors and shutters open and shut, torches are lit and taken, and things are put down and dropped on your own floor.

Blows, bites, arrows, and thrown things stay on the floor they start on: a shot loosed upstairs flies and lands upstairs, and nothing hits through a floor (see [[Archery]]). A fire upstairs lights its own floor, never the ground under it (see [[Light]]).

{{planned doc=49 step=5 note="Shooting down from a window: bows and thrown knives and axes, from the ground floor and the first floor; never a spell or a spear."}}

### Sight between floors

You see by the walls and openings of your own floor (see [[Sight]]). A floor hides what is above and below it: two bodies a storey apart see each other only when both are near a stair between them, on it, at its foot, or on its landing.

{{planned doc=49 step=4 note="Looking down: seeing the dead on the ground from an upstairs window, and being seen from below."}}

### The dead upstairs

[[The dead]] walk stairs as you do. One that sees you go up a stair follows you by the stair, up to the landing and on; with no stair to take, one that has lost you on another floor stays where it is and looks round. They bite only on their own floor, never through a floor or up through the stairwell.

{{planned doc=49 step=6 note="The dead hunting across storeys: breaking into a room upstairs, stopping at its door, coming down into a cellar."}}

### Building floors and stairs

{{devonly note="Floors and stairs are not in the game yet: the four rows are listed in the build palette only while Free building is on, until their cost is settled."}}

With **Free building** on, the build palette (N) has four more rows: **Plank floor**, **Stone floor**, **Wood stair**, and **Stone stair** (see [[Building]]). Without it they are refused: "Floors are not in the game yet", "Stairs are not in the game yet". Floors are built a tile at a time, with no physics (Michael, 2026-10-27): nothing holds a floor up, and nothing ever falls.

**A floor** is laid a tile at a time. A click lays the tile under the cursor; press and drag to lay a rectangle, at most {{n census.constants.placement.MAX_DRAG}} tiles a side. The ghost shows each tile green or red, and the prompt says how many of the rectangle's tiles will be laid and what each costs. Each tile is its own build, with its own reason when it is refused; one bar runs for them all, {{n build.floor_wood.seconds second}} a tile, and every tile is checked again when it ends.

- **On the ground** a floor is laid over the floor there, grass or a road, which is kept and comes back when the floor is taken up. It is refused on water, a ford included ("Not on water"), on a stair ("Not over a stair") or its landing ("Not on a stair's landing"), where a piece of furniture or a rug stands ("Something stands there"), and where the same floor is laid already ("Already laid"). A floor laid on a [[Round rooms|round room]]'s tiles is drawn inside its curve.
- **On an upper floor** a tile is laid wherever it touches, by an edge, a tile you can walk on there: a floor, a stair's landing, or a tile laid earlier in the same drag. So a whole floor grows out from a lone landing; a tile touching nothing is refused ("Build it out from a floor"), as is one over a stairwell. An open edge of a floor is unwalkable, never a fall, as on the map's floors.
- Every tile is laid within reach and by a clear line from where you stand: "Too far", or "A wall is in the way" through a wall.

**A stair** is built from the tile under the cursor, three tiles climbing on away from you, with its landing a storey up. It climbs only north or west: one that would climb east or south is refused, "Stairs climb away from the camera" (Primary's default, for Michael to confirm). The ghost is red, with the reason, unless:

- its three tiles are floor you can walk on with nothing on them ("Not here", "Something is in the way", "Someone is in the way"), and the tile before its foot is floor to step from ("Its foot needs a floor to step from");
- no wall stands across its run or its top ("A wall is in the way");
- nothing is over it on the floor above: no floor ("A floor is over it"), no stair ("Another stair is over it"), no wall across its top there ("A wall is over it"), and no round room's curve ("A round wall is over it");
- its landing above is open, empty or a floor a player laid ("Its landing must be open"), with nothing on it ("Something is on its landing").

Building it lays its landing on the floor above, planks for a wood stair and a stone floor for a stone one, and leaves the stairwell open over its run. A stair is never taken apart (ruled).

**Building upstairs.** What you build goes on your own floor: walls, fences, doors, and windows, and furniture you carry and put down. A wall upstairs needs a floor on at least one side ("No floor there"), and a door needs floor on both, so no door opens onto an open edge. Not yet upstairs ("Not upstairs yet"): a rug, a painting, a campfire or a torch post set down, a torch put on a wall, and the palette's pieces that stand on tiles (the [[Fireplace]], the [[Fire pit]], the [[Feeding trough]]). A [[Round rooms|round room]] is never built across a stair.

**Taking a floor up.** The Take apart tool (X) takes a floor you laid when nothing else that can be taken apart is under the cursor: furniture, walls, and doors are taken first. It is refused where a wall stands on its edge ("A wall stands on it"), where a stair or a landing is ("A stair stands on it"), where furniture or a rug stands ("Something stands on it"), where something lies ("Something lies on it"), and where anyone stands ("Someone is standing on it"); a floor of the map is not yours ("That floor is not one you laid"). On the ground the floor it covered comes back; upstairs the tile is empty again, and the tiles round it stay as they are. Like everything taken apart, it gives back half its cost rounded down, which for a tile of one plank or one stone is nothing; laying a new floor over one you laid gives back the same.

### What is not built yet

Floors and stairs in the ordinary game (until their cost is settled, Free building only), stairs climbing east or south, rugs and paintings upstairs, a fade for storeys built of laid floors, ladders and hatches (the map's, climbed with `E`), looking and shooting down, villagers going upstairs (they and the animals keep to the ground), and the valley's other upper floors and root cellars are planned.

{{planned doc=49 step=3b note="Ladders and hatches, placed by the map only, climbed with E, and ignored by the dead."}}
{{planned doc=49 step=7 note="The valley's other upper floors and root cellars: the inn, a house, two root cellars, the barn's loft."}}

## Numbers

- A storey: {{n census.constants.map.STOREY}} pixels, a wall's height.
- A stair: three tiles, one storey, {{n census.constants.map.STAIR_TREADS}} treads.
- How far the stair's sides hold the feet of a body on it from its middle line: {{n census.constants.map.STAIR_FEET}} of a tile.
- A storey behind which you stand fades to {{pct census.constants.render_scene.NEAR_WALL_ALPHA}} solid.
- Plank floor: {{n build.floor_wood.cost.plank}} [[Plank|plank]] a tile; Stone floor: {{n build.floor_stone.cost.stone}} [[Stone|stone]] a tile; {{n build.floor_wood.seconds second}} a tile; a drag at most {{n census.constants.placement.MAX_DRAG}} tiles a side.
- Wood stair: {{n build.stair_wood.cost.plank}} planks, {{n build.stair_wood.seconds seconds}}; Stone stair: {{n build.stair_stone.cost.stone}} stone and {{n build.stair_stone.cost.plank}} plank, {{n build.stair_stone.seconds seconds}}.
- These costs are placeholders, never charged while floors and stairs are built only with Free building.

## With friends

Every floor is the host's world. A guest climbs a stair by their own walking, as on the ground, and their game steps them over the top edge as the host's does, so they do not stick at the top. Which floor each player is on, and how far up a stair, reaches every player. What is hidden is each player's own: a guest upstairs and the host on the ground see different cut-aways, each by their own character. A guest's commands name their floor, and the host refuses one aimed at another floor than the guest's own. A guest builds floors and stairs through the same path as the host: their build command names the rectangle's two corners, or the stair's first tile and the way it climbs, on their own floor, and the host checks reach, floor, and touching by the same rules and builds on the guest's own character. A laid floor and a built stair travel in the map's chunks, so they reach every player and are kept in the save. The fade of a storey you stand behind is each player's own.

## Settings that change it

- **Free building** (default Off): lists the Plank floor, the Stone floor, the Wood stair, and the Stone stair in the palette and lets them be built; without it no floor or stair can be built. See [[World rules]].

## See also

- [[The tall house]]
- [[Walls]], [[Rooms]], [[Sight]]
- [[Round rooms]]
- [[Building]]

## Sources

<!-- sources at 6eba9c1 -->
- `data/build.json:158-209`: the Plank floor, the Stone floor, the Wood stair, and the Stone stair, each `dev`, its cost a placeholder, its seconds; a stair north or west only, never taken apart (game #549)
- `src/placement.js:213-357`: a build on the builder's own storey; a floor laid a tile at a time by a click or a drag at most `MAX_DRAG` a side, each tile's reason, reach by a clear line, laid out from what is walkable, "Floors are not in the game yet", half of a laid floor laid over given back (game #549)
- `src/placement.js:359-420`, `src/placement.js:1460-1490`: a stair three tiles from the cursor climbing away from the player, its reasons, "Stairs are not in the game yet", the timed build; a guest's floor and stair commands (game #549)
- `src/map.js:1049-1117`: a built floor's rules ("Not over a stair", "Not on a stair's landing", "Not on water", "Already laid", "Something stands there", "Build it out from a floor"), the floor under it kept and put back, its take-up refusals (game #549)
- `src/map.js:1175-1203`: no wall across a stair's run ("Not across a stair") or top ("Not across a stair's top"), walls along its sides allowed (game #549)
- `src/map.js:2650-2705`: a built stair's rules ("Stairs climb away from the camera" and the rest), its landing laid on the storey above, its stairwell void, never taken apart (game #549)
- `src/placement.js:217`, `src/placement.js:615-623`, `src/placement.js:638`, `src/placement.js:1164-1212`, `src/placement.js:1408-1413`: "Not upstairs yet" for a rug, a painting, a set-down, a torch on a wall, and a palette prop; a wall upstairs by a floor, "No floor there" (game #549)
- `src/placement.js:920-930`, `src/placement.js:1005-1015`, `src/placement.js:1063-1070`: a laid floor taken apart last under the cursor, half its cost back, "Someone is standing on it" (game #549)
- `src/ground.js:606-697`: a laid floor drawn inside a ring's curve, per pixel (game #549)
- `src/render/storeys.js:60-130`, `src/render/scene.js:248-271`, `src/gl.js:45`: the storey fade: an upper storey of an indexed building covering the viewer's body faded whole, in a pass of its own at the near-wall alpha; never the viewer's own building's, nor at or under the viewer's layer, nor a storey of laid floors (game #546)
- `src/render/walls.js:355-395`, `src/render/walls.js:495-520`: a wall or post under a floor of the storey above drawn with no cap, flush at a stairwell's edge; a post on a post with no stone foot, `POST_FOOT_UP` (games #546, #551)
- `src/render/walls.js:268-294`: the walls along a stair on the camera's side faded for a body on it (game #551)
- `src/render/storeys.js:213-340`: the stair's picture on its low tile's centre, each part clipped to its frame, cut at the landing's height along its head (games #548, #551)
- `src/map.js:61-67`: the ground layer 0, the floors above 1 and up, a cellar -1; `STOREY` (game #533)
- `tools/mapgen/valley.py:210-228`, `tools/mapgen/proving.py`: the valley's tall house with its first floor and stair, the proving ground's tower house with a cellar and two floors (games #533, #534, at a0cf5a2)
- `src/map.js:2573-2582`, `src/map.js:2596-2626`: a body's layer and rise from a stair: twelve treads, the top of the tread under the feet, the floor above past the top edge, back down over it; the player, a guest's prediction, and the dead alike (games #534, #540, #541, at a0cf5a2)
- `src/map.js:2551-2572`, `src/map.js:2648-2662`: a stair's sides closed on both layers, holding the feet of a body on it and the whole of one beside it; a body on a stair over what stands beside it; the stairwell's edges; nothing of the stair's own layer in a climbing body's way past its top (games #534, #540, at a0cf5a2)
- `tools/mapgen/mapgen.py:284-294`: a stair of the map refused climbing east or south unless the map says why (the proving ground's two) (game #540, at a0cf5a2)
- `src/render/storeys.js:143-238`, `data/sprites/stair_wood.json`, `data/sprites/stair_stone.json`: the drawn stairs in wood and stone, each part on its own plane: the picture on its far side, each tread's top, each riser, the near side's stringer, panel, newel, and head post; the dev art's twelve boxes where a material has no picture (games #540, #541, at a0cf5a2)
- `src/render/walls.js:290-307`, `src/render/walls.js:414-475`: the storeys' seam, a wall or post with one over it drawing no cap, the one on it drawn a step nearer (game #540, at a0cf5a2)
- `src/render/storeys.js:1-67`, `src/camera.js:11-13`, `src/camera.js:41-43`: each layer drawn lifted a storey, the hiding rule by the building you stand in, a cellar alone, a hidden storey's bodies not drawn; the camera on the lifted body (game #534, at a0cf5a2)
- `src/interact.js:1147`, `src/interact.js:1277-1295`, `src/interact.js:2196`, `src/interact.js:2379`, `src/interact.js:2454`, `src/reach.js:24-28`, `src/main.js:869`, `src/highlight.js:31`: E, the menu, Use mode, and the cursor on the player's own floor; "That is on another floor." (game #534, at a0cf5a2)
- `src/archery.js:135`, `src/archery.js:282`, `src/archery.js:309`, `src/archery.js:377`: a flight on its shooter's layer, hitting and landing there alone (game #534, at a0cf5a2)
- `src/visibility.js:12`, `src/visibility.js:94-106`: sight on the viewer's own layer (game #534, at a0cf5a2)
- `src/entities/zombie.js:389-405`, `src/entities/zombie.js:492`, `src/entities/movement.js:49-60`: the dead see a storey away only by a stair both stand near, follow by the stair, stay with none (game #534, at a0cf5a2)
- `src/light.js:50-58`: each layer's light from its own sources, never crossing a floor (game #533, at a0cf5a2)
- `docs/49-upper-floors.md` (its status, section 16): what is not built yet
- `src/net.js`, `src/save.js:26-32`: a player's layer and rise in its record, a command's layer, the host refusing another layer's command; the save in layers (games #533, #534, at a0cf5a2)
