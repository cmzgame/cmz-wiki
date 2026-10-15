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

## Sources

<!-- sources at 9205ad7 -->
- `src/light.js:415-427`: one light level: ambient, the static map, carried lights
- `src/light.js:27`, `src/light.js:113-115`, `src/clock.js:7`: the outdoor cap and the night sky
- `src/map.js:1341-1393`: rooms found by flood fill
- `src/light.js:137-144`, `data/sprites/fireplace.json`, `data/sprites/hearth.json`: a room with a lit fireplace or hearth fully lit; the oven, forge, and campfire light no room
- `src/light.js:26-31`, `src/light.js:124-144`, `src/map.js:1019-1028`: an unlit room's share of daylight through its openings, capped below the day; shut openings leave the night level; closed shutters a sliver
- `src/light.js:21-23`, `src/light.js:65-95`: pools through openings, their offset and minimum difference; fence gates bound no room
- `src/light.js:178-183`: the pools draw no dead
- `src/light.js:51-64`, `src/light.js:191-227`: fires' and mounted torches' pools, stopped by walls and shut openings
- `data/sprites/fireplace.json`, `data/sprites/hearth.json`, `data/sprites/campfire.json`, `data/sprites/oven.json`, `data/sprites/forge.json`, `data/items.json:2`, `data/sprites/torch_post.json`, `data/sprites/pumpkin.json`: each fire's radius
- `src/game.js:552-566`, `data/tuning.json:76-77`: the carried torch in hand, two in hand, on the belt; none from the bag or the ground
- `src/interact.js:984-991`: the T key
- `src/light.js:296-301`: flicker only in the picture
- `src/visibility.js:10-67`: darkness does not shorten your sight
- `src/light.js:18`: the light grid's resolution
- `data/tuning.json:5-7`, `src/entities/zombie.js:232-237`, `src/entities/zombie.js:295-311`: the dead's light-scaled sight and flame range
- `src/settings.js:12`: Zombie aggro off by default
- `src/net.js:1145-1152`, `src/net.js:814`, `src/light.js:161-164`: a guest rebuilds the light; each player's carried light sent when it changes
