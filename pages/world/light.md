---
title: Light
categories: [Mechanics, The world]
aliases: [Lighting, Darkness]
summary: How bright every place is, from the sky, rooms, fires, and torches, and what that changes.
---

Every point in the world has one light level, worked out by one rule. It is made of the ambient light (the sky outdoors, the room indoors), the pools of fixed fires and mounted torches, and any torch someone carries. Light decides how the world is drawn and how far [[The dead]] can see you.

## How it works

### Outdoors

Outside, the ambient light is the sky's brightness for the hour (see [[The day]]), and never more than {{n census.constants.light.tunables_dayCap}} even at noon. At night it falls to {{n census.constants.clock.NIGHT_B}}.

### Rooms

A room's light depends on what is in it and how open it is. Rooms are found from the walls, never authored; see [[Rooms]].

- **A room with a lit fireplace or hearth** is fully lit, every corner of it, day or night. Only fires that light their room do this: the fireplace and the hearth. An [[Oven]], a [[Forge]], or a campfire lights only the pool round it.
- **A room without such a fire** gets a share of the daylight through its open doors and open shutters. The more of its openings stand open, the brighter it is, up to a cap below the outdoor day. Shut every door and shutter and noon inside is as dark as midnight. Closed shutters let through only a sliver. See [[Openings]].

### Light through doors and windows

Every open door or window with a difference in light between its two sides throws a pool onto the darker side. By day, sunlight falls on the floor inside a window; at night a hearth-lit room spills light out of its open windows and doors onto the ground outside. The pool is placed {{n census.constants.light.PORTAL_OFF}} tiles off the opening and appears only when the difference is at least {{n census.constants.light.PORTAL_MIN}}, so closed shutters throw no pool. A fence gate is not part of any room and throws none. These pools do not draw the dead.

### Fires and mounted torches

A lit fire casts a flickering pool of light with real shadows: walls, shut doors, and closed shutters stop it, and open doorways let it through. Each kind of fire has its own reach:

- Fireplace: {{n sprites.fireplace.fire.radius tiles}}, and it lights its whole room.
- Hearth: {{n sprites.hearth.fire.radius tiles}}, and it lights its whole room.
- Campfire: {{n sprites.campfire.fire.radius tiles}}.
- [[Oven]]: {{n sprites.oven.fire.radius tiles}}.
- [[Forge]]: {{n sprites.forge.fire.radius tiles}}.
- A torch in a bracket or on a post: {{n items.torch.fire.radius tiles}}. See [[Torch posts and brackets]].
- A lit jack-o'-lantern: {{n sprites.pumpkin.fire.radius tiles}}.

A fire gives light only while it burns. How fires are lit and fed is on [[Fire]].

### Carried torches

A [[Torch]] never burns out. Where you carry it decides how much light it gives:

- **In a hand:** a full pool of {{n items.torch.fire.radius tiles}} round you.
- **One in each hand:** {{n tuning.world.twoTorches}} times the light and reach of one.
- **On the belt:** {{n tuning.world.beltLight}} of the light and reach of one in hand.
- **In the bag:** no light.

The T key takes a torch from what you carry into a hand, or puts it away. A torch cannot be set down lit on the ground; it can be mounted in a bracket or on a post.

### The night tint

At night the world is drawn darker and tinted, but you still see as far: darkness never shortens your own sight. See [[Sight]]. Light flickers only in the picture; the light level the game reads is steady.

### Light and the dead

The dead see you farther the brighter the light on you. Their reach is {{n tuning.zombie.sight tiles}} in full light, falling to {{n tuning.zombie.sightDarkFraction}} of that in total darkness. At night they also notice a flame, a carried torch or a fire, from up to {{n tuning.zombie.flameRange tiles}} away, and walk to it; a torch on the belt shows {{n tuning.world.beltLight}} as far, two torches {{n tuning.world.twoTorches}} times as far. By day flames draw nobody. All of this needs a clear line of sight and the world rule Zombie aggro on. See [[The dead]].

## Numbers

- Outdoor light at most {{n census.constants.light.tunables_dayCap}}; night sky {{n census.constants.clock.NIGHT_B}}.
- Light worked out on a grid of {{n census.constants.light.RES}} cells a tile.
- Torch in hand: {{n items.torch.fire.radius tiles}}; two torches {{n tuning.world.twoTorches}} times; on the belt {{n tuning.world.beltLight}} times.
- Pools through openings need a difference of {{n census.constants.light.PORTAL_MIN}}.
- The dead's sight: {{n tuning.zombie.sight tiles}}, {{n tuning.zombie.sightDarkFraction}} of it in darkness; flames seen from {{n tuning.zombie.flameRange tiles}} at night.

## With friends

Light belongs to the world: the host works it out, and each guest works out the same light from its copy of the world. Every player carries their own torch light, and the host sends each player's torches to the others when they change, so everyone sees each other's light.

## Settings that change it

- **Zombie aggro** (default Off): with it off, the dead neither see you nor walk to flames, whatever the light.

## See also

- [[The day]]
- [[Sight]]
- [[Fire]]
- [[Torch]]
- [[Torch posts and brackets]]
- [[Rooms]]
- [[Openings]]
