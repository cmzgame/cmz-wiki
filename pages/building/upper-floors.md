---
title: Upper floors
categories: [Building, Mechanics]
aliases: [Upper floor, Stairs, Stair, Storeys, Storey, Upstairs, First floor, Layers]
summary: The map in floors: a stair of three steps climbs one storey, the floors above you hidden while you are inside a house, and everything you do kept to your own floor.
---

The map has **upper floors**: a building may have a floor over its ground floor, a storey up, joined to it by a **stair**. A storey is {{n census.constants.map.STOREY}} pixels, a house wall's height (see [[Walls]]). In the valley one house has an upper floor so far, [[The tall house]] east of [[Your cottage]]; the proving ground's tower house has a cellar and two floors over its ground floor. Upstairs is the same world, walked into, with no loading and no cut.

## How it works

### Stairs

A stair is a straight run of three tiles climbing one storey, a third of a storey a step. You get on at its foot, from the tile before the bottom step, and walk up: your body rises as you go. Crossing the top edge of the third step puts you on the floor above, on the **landing**, the floor tile past the top step. Coming down is the same backwards: from the landing walk back over the top edge onto the top step, and down.

A stair's sides are closed on both floors: you get on and off only at its ends, never sideways from a step, and on the floor above the opening over the stair (the stairwell) is fenced by its edges, so nobody walks into it. There is no floor over a stair. Nothing but bodies stands on one.

Stairs are drawn as placeholder blocks, three steps of wood or stone. Only the map places them; nobody can build or take apart a stair yet.

{{planned doc=49 step=8 note="Stairs and floors built from the palette, a floor held up within reach of a wall below, taken apart again, a guest building upstairs; a stair is never destroyed."}}

### What you see

The camera follows you up the stair and onto the floor above. Each floor is drawn a storey higher than the one under it, so a two-storey house stands twice a house's height, and a floor hides what is under it.

- **Outside**, every storey of every house is drawn.
- **Inside a house**, the floors above yours are hidden over that house, so you see into your own floor; the rest of the village keeps its upper floors.
- **Upstairs**, you see your own floor, the ground round the house, and everything else.
- **In a cellar**, you see the cellar alone.

A body on a floor hidden from you is not drawn, nor its health bar or speech bubble, and a name tag shows only for someone on your own floor. Names, bars, and bubbles sit at the height of the body they belong to. Your own floor's walls fade on the camera's side while you are in a room, as on the ground (see [[Rooms]]).

{{planned doc=49 step=2 note="An upper storey of a building between you and the camera drawn faded while it covers you, so a player behind a two-storey house is not lost."}}

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

### What is not built yet

Ladders and hatches (the map's, climbed with `E`), looking and shooting down, villagers going upstairs (they and the animals keep to the ground), and the valley's other upper floors and root cellars are planned.

{{planned doc=49 step=3b note="Ladders and hatches, placed by the map only, climbed with E, and ignored by the dead."}}
{{planned doc=49 step=7 note="The valley's other upper floors and root cellars: the inn, a house, two root cellars, the barn's loft."}}

## Numbers

- A storey: {{n census.constants.map.STOREY}} pixels, a wall's height.
- A stair: three tiles, one storey, a third of a storey a step.

## With friends

Every floor is the host's world. A guest climbs a stair by their own walking, as on the ground, and their game steps them over the top edge as the host's does, so they do not stick at the top. Which floor each player is on, and how far up a stair, reaches every player. What is hidden is each player's own: a guest upstairs and the host on the ground see different cut-aways, each by their own character. A guest's commands name their floor, and the host refuses one aimed at another floor than the guest's own.

## See also

- [[The tall house]]
- [[Walls]], [[Rooms]], [[Sight]]
- [[Round rooms]]
- [[Building]]

## Sources

<!-- sources at da57a57 -->
- `src/map.js:61-67`: the ground layer 0, the floors above 1 and up, a cellar -1; `STOREY` (game #533)
- `tools/mapgen/valley.py:210-228`, `tools/mapgen/proving.py`: the valley's tall house with its first floor and stair, the proving ground's tower house with a cellar and two floors (games #533, #534)
- `src/map.js:2572-2603`: a body's layer and rise from a stair: a third of a storey a step, the floor above past the top edge, back down over it; the player, a guest's prediction, and the dead alike (game #534)
- `src/map.js:2540-2569`, `src/map.js:2618-2640`: a stair's sides closed on both layers, the stairwell's edges, nothing of the stair's own layer in a climbing body's way past its top (game #534)
- `src/render/storeys.js:1-67`, `src/camera.js:11-13`, `src/camera.js:41-43`: each layer drawn lifted a storey, the hiding rule by the building you stand in, a cellar alone, a hidden storey's bodies not drawn; the camera on the lifted body (game #534)
- `src/interact.js:1147`, `src/interact.js:1277-1295`, `src/interact.js:2196`, `src/interact.js:2379`, `src/interact.js:2454`, `src/reach.js:24-28`, `src/main.js:869`, `src/highlight.js:31`: E, the menu, Use mode, and the cursor on the player's own floor; "That is on another floor." (game #534)
- `src/archery.js:135`, `src/archery.js:282`, `src/archery.js:309`, `src/archery.js:377`: a flight on its shooter's layer, hitting and landing there alone (game #534)
- `src/visibility.js:12`, `src/visibility.js:94-106`: sight on the viewer's own layer (game #534)
- `src/entities/zombie.js:389-405`, `src/entities/zombie.js:492`, `src/entities/movement.js:49-60`: the dead see a storey away only by a stair both stand near, follow by the stair, stay with none (game #534)
- `src/light.js:50-58`: each layer's light from its own sources, never crossing a floor (game #533)
- `docs/49-upper-floors.md` (its status, section 16): what is not built yet
- `src/net.js`, `src/save.js:26-32`: a player's layer and rise in its record, a command's layer, the host refusing another layer's command; the save in layers (games #533, #534)
