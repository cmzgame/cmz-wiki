---
title: Torch posts and brackets
categories: [Mechanics, The world]
aliases: [Torch post, Torch bracket, Bracket, Brackets, Mounting a torch]
summary: Wall brackets and posts that hold a torch, which burns there for ever.
---

A [[Torch]] can be mounted in a bracket on a wall or on a torch post, where it burns for ever and lights the ground round it. A mounted torch can be taken down again. A torch cannot be set down lit on the bare ground.

## How it works

### Brackets

A bracket sits on a wall, facing into a room or out of the building. Its torch burns just off the wall on the side it faces, with the reach of a torch, {{n items.torch.fire.radius tiles}}. Like any fire's, its light is stopped by walls and shut doors and shutters.

### Posts

A torch post stands on its own, outdoors. It gives light only while it holds a torch, also with a reach of {{n sprites.torch_post.fire.radius tiles}}. It blocks a thin circle of {{n sprites.torch_post.collide.radius}} tiles.

### Taking and mounting

Stand within {{n census.constants.interact.INTERACT_RANGE}} tiles and press E, or right-click the bracket or post:

- **Take the torch:** the torch goes into a free hand or your bag, and the holder is empty.
- **Mount the torch:** with a torch anywhere about you, in a hand, on the belt, or in the bag, it is put into the empty holder.
- With no torch, the menu shows "An empty bracket (need a torch)" or "An empty post (need a torch)", greyed.

### In the valley

Most buildings in [[The valley]] have a bracket with a torch already burning. The two brackets in [[The chapel]], the one in [[The crypt]], and the one in the shut cottage start empty. [[The inn]] and [[The toll house]] each have a torch on an outside wall.

The three torch posts in the square start empty and give no light until someone mounts a torch on them.
<!-- the count of posts is a count of map props, said as a word -->

## Numbers

- A mounted torch's reach: {{n items.torch.fire.radius tiles}}.
- A torch post's reach: {{n sprites.torch_post.fire.radius tiles}}.
- Reach to take or mount: {{n census.constants.interact.INTERACT_RANGE}} tiles.

## With friends

Taking and mounting a torch are performed by the host for whoever asked, and the holder's state reaches every player with the changed part of the map.

## See also

- [[Torch]]
- [[Light]]
- [[Fire]]
