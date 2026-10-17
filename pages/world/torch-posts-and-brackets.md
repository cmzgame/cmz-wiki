---
title: Torch posts and brackets
categories: [Mechanics, The world, Light]
aliases: [Torch post, Torch bracket, Bracket, Brackets, Mounting a torch, Lantern, Lanterns, Lantern post, Lantern posts]
summary: Wall brackets and posts that hold a torch, which burns down there while lit; and the village's lanterns, which never go out.
---

A [[Torch]] can be mounted in an empty bracket on a wall or on a torch post, where it lights the ground round it while it is lit, and slowly burns down. A mounted torch can be taken down again. The village's own lights are **lanterns**, in brackets on its walls and on posts in the square: they never go out, and they cannot be taken.

## How it works

### Lanterns

A lantern hangs in a wall bracket or on a lantern post. It is always lit, gives a steady light with no flicker, out to {{n sprites.lantern_post.fire.radius tiles}}, a little more than a torch's {{n items.torch.fire.radius}}, and never burns down. A bracket that holds a lantern offers nothing to E or the right-click menu, and a lantern post cannot be carried. Like any light, a lantern's is stopped by walls and shut doors and shutters. Lanterns are still placeholder art.

### Brackets

A bracket sits on a wall, facing into a room or out of the building. A bracket's torch burns just off the wall on the side it faces, with the reach of a torch, {{n items.torch.fire.radius tiles}}, while it is lit; a torch that is out gives no light. Building a door or a window into a wall takes its bracket away (see [[Building]]).

### Posts

A torch post stands on its own, outdoors. It gives light only while it holds a lit torch, with a reach of {{n sprites.torch_post.fire.radius tiles}}. It blocks a thin circle of {{n sprites.torch_post.collide.radius}} tiles.

### Taking and mounting

Stand within {{n census.constants.interact.INTERACT_RANGE}} tiles of an empty bracket or a torch post and press E, or right-click it:

- **Take the torch:** the torch goes into a free hand or your bag, as burnt down as it was, and it goes out. The holder is empty.
- **Mount the torch:** with a torch anywhere about you, in a hand, on the belt, or in the bag, it is put into the empty holder as it is: lit if it was lit, out if it was out.
- With no torch, the menu shows "An empty bracket (need a torch)" or "An empty post (need a torch)", greyed.

A mounted torch cannot be lit or doused where it hangs with `T`. One that is out is lit by:

- **Light the torch** on its menu, with a [[Tinderbox]] on you, or else a lit torch in a hand or on the belt ("You light the torch."; with neither, "You have no flame (a tinderbox, or a lit torch)."); it is not the E action, so choose it from the menu;
- on a post, [[Use]] of a tinderbox or a lit torch on it (a bracket cannot be the target of a Use);
- a [[Fireball]] that comes down within reach of it.

Each needs no wall between: the menu and Use reach {{n census.constants.burn.DIP_REACH tiles}}, in sight. A lit torch on a post is a flame in its turn: an unlit torch in your hand used on it is lit from it (not so one in a bracket). A lantern cannot be lit or put out ("A lantern is always lit.").

### Burning down

A lit torch in a bracket or on a post burns down at the slower rate a torch has on the belt: it lasts {{n tuning.world.torchWallLife seconds}} of the world's time. When it is used up it is gone from its holder, and players nearby read "A torch burns out." A mounted torch burns only while its part of the world is loaded, near some player. See [[Torch#Burning down|Torch]].

### In the valley

Most buildings in [[The valley]] have a lantern in a wall bracket, and [[The inn]] and [[The toll house]] each have one on an outside wall. The square has three lantern posts, so it is lit all night. Four brackets are empty, for a torch of your own: the two in [[The chapel]], the one in [[The crypt]], and the one in the shut cottage. The valley has no torch posts.
<!-- the counts of brackets and posts are counts of map props, said as words -->

## Numbers

- A lantern's reach: {{n sprites.lantern_post.fire.radius tiles}}.
- A mounted torch's reach: {{n items.torch.fire.radius tiles}}.
- A torch post's reach: {{n sprites.torch_post.fire.radius tiles}}.
- A mounted torch lasts {{n tuning.world.torchWallLife seconds}} lit.
- Reach to take or mount: {{n census.constants.interact.INTERACT_RANGE}} tiles.

## With friends

Taking and mounting a torch are performed by the host for whoever asked, and the change reaches every player at once. A mounted torch burns down on the host; a guest's copy of how far it has burned catches up each time it burns another hundredth.

## See also

- [[Torch]]
- [[Light]]
- [[Fire]]

## Sources

<!-- sources at 2ea0d24 -->
- `data/sprites/lantern_post.json`: the lantern post: its light's radius, the one number for every lantern, not carried
- `src/map.js:138-141`, `src/map.js:208-215`, `src/light.js:63-67`: a bracket holds a lantern or a torch; a lantern's light steady, never out, at the post's radius
- `src/interact.js:404`: a lantern bracket offers no action
- `src/render/walls.js:461-466`, `src/placeholders.js:1088-1130`: the lantern drawn as placeholder art
- `data/items.json:2`: the torch's radius
- `src/map.js:218-222`, `src/light.js:68-71`: a bracket on a wall edge, its torch 0.3 tiles off it on its side, with the torch's radius, only while lit
- `src/map.js:589-617`: a door or window built into a wall forgets its bracket
- `src/light.js:209-250`: the light stopped by walls, shut doors, and shutters
- `data/sprites/torch_post.json`, `src/light.js:52-60`: a post lit only while it holds a lit torch, its radius and collision circle
- `src/interact.js:43`: E's reach to a bracket
- `src/interact.js:402-460`, `src/interact.js:158-163`: Light the torch (not the E action), Take the torch (into a hand, else the bag, out, its wear kept), Mount the torch (as it is), and the greyed empty holder
- `data/interactions.json`, `src/burn.js:74`, `src/burn.js:97-199`, `src/map.js:284-312`: the `light` verb on a mounted torch: a tinderbox or a lit torch, within reach and in sight; an unlit torch lit from a lit one; a lantern refused
- `src/map.js:253-283`: what a mounted torch keeps: its wear and whether it is lit
- `src/inventory.js:125-135`: a torch to mount is found in the hands, the belt, or the bag
- `src/map.js:186-205`, `src/archery.js:289-292`: a fireball's landing lights a mounted torch that is out, within reach, with no wall between
- `src/map.js:149-184`, `data/tuning.json:84`: a lit mounted torch burns at the wall rate, among the loaded chunks; spent, gone with "A torch burns out."
- `src/host.js:231-236`, `src/main.js:1628-1630`: "A torch burns out." to players nearby
- `tools/mapgen/valley.py:101-113`, `tools/mapgen/valley.py:204`, `tools/mapgen/valley.py:260`, `tools/mapgen/valley.py:275`, `tools/mapgen/valley.py:386`: the village's lights lanterns, the square's three lamps, the chapel's, the crypt's, and the shut cottage's brackets empty
- `data/maps/valley.json:1894-1905`, `data/maps/valley.json:3918-3923`: the inn's and the toll house's lanterns outside
- `data/maps/valley.json:5377-5398`: the square's three lantern posts
- `src/interact.js:70-105`: a guest's take or mount run on the host by address
- `src/map.js:261-283`: `setHolder` marks the holder's tile changed, so the frame carries it to guests
