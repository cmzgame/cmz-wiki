---
title: Torch posts and brackets
categories: [Mechanics, The world, Light]
aliases: [Torch bracket, Bracket, Brackets, Wall bracket, Wall brackets, Torch on a wall, Place torch, Mounting a torch, Lantern, Lanterns, Lantern post, Lantern posts]
summary: Wall brackets and posts that hold a torch, which burns down there while lit; a torch put on any wall with its own bracket; and the village's lanterns, which burn nothing and can be put out.
---

A [[Torch]] can be mounted in an empty bracket on a wall or on a torch post, where it lights the ground round it while it is lit, and slowly burns down. A mounted torch can be taken down again. A post is made at the [[Workbench]] and set down outdoors as a [[Torch post]] item. No bracket is made: a torch goes on a wall by itself with **Place torch**, on a bracket that comes with it and goes with it (below). The valley's own torch posts (one by the square, four along the high street) and its four torch brackets each hold an unlit torch for a player to light. The village's own lights are **lanterns**, in brackets on its walls and on posts in the square: they burn nothing, a player may put one out and light it again, and they cannot be taken.

## How it works

### Lanterns

A lantern hangs in a wall bracket or on a lantern post. It gives a steady light with no flicker, out to {{n sprites.lantern_post.fire.radius tiles}}, a little more than a torch's {{n items.torch.fire.radius}}, and never burns down. Its menu has **Put out the lantern** while it is lit, and **Light the lantern** while it is out, with a flame on you ("You light the lantern."); a [[Use]] of a tinderbox or a lit torch on one that is out lights it too. A lantern that is out gives no light. A lantern post cannot be carried. Like any light, a lantern's is stopped by walls and shut doors and shutters. Lanterns are still placeholder art.

### Brackets

A bracket sits on a wall, facing into a room or out of the building. A bracket's torch burns just off the wall on the side it faces, with the reach of a torch, {{n items.torch.fire.radius tiles}}, while it is lit; a torch that is out gives no light. When a wall goes, taken apart or with a door or a window built into it, its bracket goes with it: a torch in the bracket falls to the floor on the bracket's side, put out, as a painting falls, and a lantern goes with the wall (see [[Building]]).

### Posts

A torch post stands on its own, outdoors. It gives light only while it holds a lit torch, with a reach of {{n sprites.torch_post.fire.radius tiles}}. It blocks a thin circle of {{n sprites.torch_post.collide.radius}} tiles.

### Taking and mounting

Stand within {{n census.constants.interact.INTERACT_RANGE}} tiles of an empty bracket or a torch post and press E, or right-click it:

- **Take the torch:** the torch goes into a free hand or your bag, as burnt down as it was, and it goes out. The holder is empty.
- **Mount the torch:** with a torch anywhere about you, in a hand, on the belt, or in the bag, it is put into the empty holder as it is: lit if it was lit, out if it was out.
- With no torch, the menu shows "An empty bracket (need a torch)" or "An empty post (need a torch)", greyed.

A mounted torch cannot be lit or put out where it hangs with `T`. A lit one has **Put out the torch** on its menu, which keeps how burnt it is. One that is out is lit by:

- **Light the torch** on its menu, with a [[Tinderbox]] on you, or else a lit torch in a hand or on the belt ("You light the torch."; with neither, "You have no flame (a tinderbox, or a lit torch)."); it is not the E action, so choose it from the menu;
- [[Use]] of a tinderbox or a lit torch on it, on a post or in a bracket ("You light the torch."). In Use mode a click near a wall bracket aims at the bracket, after any character or furniture under the cursor, and the label names what is there: "the torch in the bracket", "the lantern", or "the empty bracket";
- a [[Fireball]] that comes down within reach of it.

Each needs no wall between: the menu and Use reach {{n census.constants.burn.DIP_REACH tiles}}, in sight, so a bracket's torch is never lit from the far side of its wall. Its menu is reached from the side of the wall it faces, so a bracket facing into a room is worked from inside. A lit torch on a post or in a bracket is a flame in its turn: an unlit torch in your hand or on your belt used on it is lit from it ("You light the torch at the fire."), with the same reach and never through its wall. A lit lantern is a flame too: an unlit torch in your hand or on your belt used on a lantern, in a wall bracket or on a lantern post, is lit from it ("You light the torch at the lantern."), with the same reach and never through its wall, and the lantern stays as it was. A Use of a tinderbox or a lit torch on a lantern that is lit says "It is already lit." A Use on an empty bracket says "There is no torch there."

### A torch on a wall

A torch goes on a wall with its own bracket. **Place torch** is on a torch's menu wherever it is: in your own bag, on the belt, or in a hand, lit or not. It starts a ghost on the face of the wall under the cursor, the way a [[Paintings|painting]]'s does, with "Click to put the torch on the wall · Esc cancel" beside it: the bracket and the torch drawn on the wall, lit if the torch is lit, green where it may go and red with the reason where not. A click puts it up ("You put the torch on the wall, burning." for a lit one, "You put the torch on the wall." for one that is out); `Escape` or a right click cancels. A lit torch stays lit on the wall and one that is out stays out, and it keeps its own wear.

It takes the faces a painting takes: a plain, solid, drawn wall, indoors or out, on the face turned toward the camera (the inside of a building's north and west walls, the outside of its south and east walls). The ghost is red:

- **Too far**: the floor in front of the face is more than {{n census.constants.setdown.REACH tiles}} from you;
- **There is a wall in the way.**: it is put up from the side of the wall it faces;
- **Nothing to hang it on**: the wall is a fence, bars, a window, a door, or a broken piece;
- **A bracket is already there**: a bracket, with a torch or a lantern, is on either face of that stretch of wall;
- **Something already hangs there**: a painting is on that face.

A painting is refused on a face that holds a torch ("A bracket is in the way").

On the wall it works as a bracket's torch does: **Light the torch** while it is out and **Put out the torch** while it is lit, and it burns down at the wall rate. In place of Take the torch it offers **Pick up torch**, which `E` also does: the torch comes back put out, as a torch leaving any holder does, with its wear, into a free hand, else the belt or the bag ("You pick up the torch."), and the bracket goes with it, leaving the wall bare. A torch that burns out on the wall takes its bracket with it, and one whose wall goes falls to the floor, put out. The village's own brackets keep their brackets: their torch is taken with Take the torch, as above. The torch's [[Inventory#The hover card|hover card]] says "**Place torch**: on a wall's face, in a bracket that comes with it; picked up again, the bracket goes too."

### Burning down

A lit torch in a bracket or on a post burns down at the slower rate a torch has on the belt: it lasts {{n tuning.world.torchWallLife seconds}} of the world's time. When it is used up it is gone from its holder (a torch put on a wall with Place torch takes its bracket with it), and players within {{n tuning.world.torchSpentRadius tiles}} of it read "A torch burns out." A mounted torch burns only while its part of the world is loaded, near some player. See [[Torch#Burning down|Torch]].

### In the valley

Most buildings in [[The valley]] have a lantern in a wall bracket, and [[The inn]] and [[The toll house]] each have one on an outside wall. The square has three lantern posts, so it is lit all night. Four brackets hold an unlit torch for a player to light: the two in [[The chapel]], the one in [[The crypt]], and the one in the shut cottage. Five torch posts, each with an unlit torch, stand by the square and along the high street.
<!-- the counts of brackets and posts are counts of map props, said as words -->

## Numbers

- A lantern's reach: {{n sprites.lantern_post.fire.radius tiles}}.
- A mounted torch's reach: {{n items.torch.fire.radius tiles}}.
- A torch post's reach: {{n sprites.torch_post.fire.radius tiles}}.
- A mounted torch lasts {{n tuning.world.torchWallLife seconds}} lit.
- "A torch burns out." reaches players within {{n tuning.world.torchSpentRadius tiles}}.
- Reach to take or mount: {{n census.constants.interact.INTERACT_RANGE}} tiles.
- Reach to put a torch on a wall: {{n census.constants.setdown.REACH tiles}}.

## With friends

Taking and mounting a torch are performed by the host for whoever asked, and the change reaches every player at once. A guest's Place torch shows its ghost on their own screen; the click sends the torch and the face it goes on (its tile and edge) to the host, which puts it up by the same rules, and a guest's Pick up torch, Light, and Put out name the bracket the same way. A torch on a wall rides with its wall, so every player sees it and it is kept in the save. So is a guest's Use on a bracket, which names the bracket by its tile and the wall edge it is on. A mounted torch burns down on the host; a guest's copy of how far it has burned catches up each time it burns another hundredth.

## See also

- [[Torch]]
- [[Light]]
- [[Fire]]

## Sources

<!-- sources at 3c0a243 -->
- `data/sprites/lantern_post.json`: the lantern post: its light's radius, the one number for every lantern, not carried
- `src/map.js:138-141`, `src/map.js:208-215`, `src/light.js:63-67`: a bracket holds a lantern or a torch; a lantern's light steady, never out, at the post's radius
- `src/interact.js:416`: a lantern bracket offers no action
- `src/render/walls.js:461-466`, `src/placeholders.js:1114-1156`: the lantern drawn as placeholder art
- `data/items.json:2`: the torch's radius
- `src/map.js:218-222`, `src/light.js:68-71`: a bracket on a wall edge, its torch 0.3 tiles off it on its side, with the torch's radius, only while lit
- `src/map.js:262-275`, `src/map.js:1020-1028`, `src/map.js:1090-1098` (at 91bafc1): a wall that goes, taken apart or stamped over by a door or a window, takes its bracket; a torch in it falls to the floor on its side, put out; a lantern goes with the wall (game #532)
- `src/light.js:209-250`: the light stopped by walls, shut doors, and shutters
- `data/sprites/torch_post.json`, `src/light.js:52-60`: a post lit only while it holds a lit torch, its radius and collision circle
- `src/interact.js:52`: E's reach to a bracket
- `src/interact.js:413-473`, `src/interact.js:420-423`, `src/interact.js:167-172`: a bracket reached from the tile on its own side (game #227); Light the torch (not the E action), Take the torch (into a hand, else the bag, out, its wear kept), Mount the torch (as it is), and the greyed empty holder
- `data/interactions.json`, `src/burn.js:56`, `src/burn.js:79-176`, `src/map.js:284-312`: the `light` verb on a mounted torch: a tinderbox or a lit torch, within reach and in sight; an unlit torch lit from a lit one on a post or in a bracket, at the bracket's own point (game #172), or from a lantern in a bracket or on a post, the lantern unchanged (game #188); a lantern itself never lit, an empty bracket refused
- `data/interactions.json:12-13`, `src/burn.js:106`: a tinderbox and a lit torch on a lantern post say "A lantern is always lit.", as on a lantern in a bracket (game #189)
- `src/interactions.js:58`: the Use label names a bracket's torch, its lantern, or the empty bracket (game #189)
- `src/interactions.js:34-43`, `src/interact.js:831-838`, `src/main.js:819-829`: Use mode aims at any bracket near the cursor, after a character and a prop (game #172)
- `src/map.js:253-283`: what a mounted torch keeps: its wear and whether it is lit
- `src/inventory.js:151-161`: a torch to mount is found in the hands, the belt, or the bag
- `src/map.js:186-205`, `src/archery.js:289-292`: a fireball's landing lights a mounted torch that is out, within reach, with no wall between
- `src/map.js:149-184`, `data/tuning.json:107`: a lit mounted torch burns at the wall rate, among the loaded chunks; spent, gone with "A torch burns out."
- `src/host.js:232-237`, `src/main.js:1680-1682`, `data/tuning.json:110`: "A torch burns out." to players within `torchSpentRadius`
- `tools/mapgen/valley.py:101-114`, `tools/mapgen/valley.py:207`, `tools/mapgen/valley.py:263`, `tools/mapgen/valley.py:278`, `tools/mapgen/valley.py:390`: the village's lights lanterns, the square's three lamps, the chapel's, the crypt's, and the shut cottage's brackets holding unlit torches (corrected at 91bafc1)
- `data/maps/valley.json:2061-2072`, `data/maps/valley.json:4100-4105`: the inn's and the toll house's lanterns outside
- `data/maps/valley.json:12029-12050`: the square's three lantern posts
- `src/interact.js:73-130`: a guest's take or mount run on the host by address
- `src/main.js:1021-1032`, `src/ui/inventory-actions.js:457-459`: a guest's Use on a bracket by its tile and edge, run on the host
- `src/map.js:261-283`: `setHolder` marks the holder's tile changed, so the frame carries it to guests
- `src/interact.js:599-609`, `src/burn.js:87-120`, `src/burn.js:161-191`, `src/map.js:291-300`, `src/light.js:64`: a lantern put out and lit again, by its menu or a Use, `lit: false` on its bracket, no light while out; a lit torch on a holder put out from its menu (game #421, at 1bcb6ed)
- `tools/mapgen/valley.py:212-215`, `src/map.js`: the valley's posts and its four brackets with unlit, unworn torches; a player's own post and bracket (`src/setdown.js`) (game #428, at 0ce54cf)
- `src/interact.js:1745-1747`, `src/interact.js:1771`, `src/interact.js:1912`, `src/interact.js:1930` (at 91bafc1): Place torch on a torch's menu in the bag, on the belt, and in a hand (game #532)
- `src/placement.js:367-375`, `src/placement.js:764-781`: the ghost on the face under the cursor, the bracket and the torch drawn lit or out, its prompt, Escape
- `src/setdown.js:234-291`, `src/paintings.js:52-60`: a torch on a wall: a painting's faces and reach, "A bracket is already there" on either face; put up lit or out with its wear; its lines
- `src/paintings.js:58`: a painting refused under a torch, "A bracket is in the way"
- `src/map.js:238-262`: a torch on a wall a bracket of its own, `made`, keeping its torch's uid, wear, and lit; given back put out
- `src/setdown.js:293-318`, `src/interact.js:715-720`: Pick up torch on a torch a player put up, E's action, into a hand, else the belt or the bag, put out, the bracket gone
- `src/map.js:172-185`: a torch put up with Place torch that burns out takes its bracket
- `src/item-info.js:310`: the torch's card line
- `src/placement.js:894-900`, `src/placement.js:989-991`: a guest's Place torch a `place` command of kind `torch` by the face's tile and edge, run on the host (game #532, net PROTOCOL 22)
