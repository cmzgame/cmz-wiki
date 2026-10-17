---
title: Light
categories: [Mechanics, The world]
aliases: [Lighting, Darkness]
summary: How bright every place is, from the sky, rooms, fires, and torches, and what that changes.
---

Every point in the world has one light level, worked out by one rule. It is made of the ambient light (the sky outdoors, the room indoors), the pools of fixed fires, lanterns, and mounted torches, and any torch someone carries. Light decides how the world is drawn, how far [[The dead]] can see you, and how far you can see them in the dark.

## How it works

### Outdoors

Outside, the ambient light is the sky's brightness for the hour (see [[The day]]), and never more than {{n census.constants.light.tunables_dayCap}} even at noon. At night it falls to {{n census.constants.clock.NIGHT_B}}.

### Rooms

A room's light depends on what is in it and how open it is. Rooms are found from the walls, never authored; see [[Rooms]].

- **A room with a lit fireplace or hearth** is fully lit, every corner of it, day or night. Only fires that light their room do this: the fireplace and the hearth. An [[Oven]], a [[Forge]], or a campfire lights only the pool round it.
- **A room without such a fire** takes its daylight through its open doors and open shutters; a broken door or broken shutters count as open. By day each open one lights {{n tuning.world.daylightTiles}} tiles of the room fully, so one open window fills a small room with daylight and a larger room needs more of them open, in proportion to its size. Fully lit by day is {{n census.constants.light.tunables_unlitRoomCap}}, a little below the open sky. Closed shutters let through only a sliver, so with every door and shutter shut, noon inside is barely brighter than midnight, and the dead in the room are hidden as they are at night (see [[Sight]]). At night a room without a fire is dark however open it stands. See [[Openings]].

### Light through doors and windows

Every open door or window with a difference in light between its two sides throws a pool onto the darker side. By day, sunlight falls on the floor inside a window; at night a hearth-lit room spills light out of its open windows and doors onto the ground outside. The pool is placed {{n census.constants.light.PORTAL_OFF}} tiles off the opening and appears only when the difference is at least {{n census.constants.light.PORTAL_MIN}}, so closed shutters throw no pool. A fence gate is not part of any room and throws none. These pools do not draw the dead.

### Fires, lanterns, and mounted torches

A lit fire casts a flickering pool of light with real shadows: walls, shut doors, and closed shutters stop it, and open doorways let it through. Each kind of fire has its own reach:

- Fireplace: {{n sprites.fireplace.fire.radius tiles}}, and it lights its whole room.
- Hearth: {{n sprites.hearth.fire.radius tiles}}, and it lights its whole room.
- Campfire: {{n sprites.campfire.fire.radius tiles}}.
- [[Oven]]: {{n sprites.oven.fire.radius tiles}}.
- [[Forge]]: {{n sprites.forge.fire.radius tiles}}.
- A lantern, in a wall bracket or on a lantern post: {{n sprites.lantern_post.fire.radius tiles}}, steady, with no flicker, and never out. The village's own lights are lanterns.
- A lit torch in a bracket or on a post: {{n items.torch.fire.radius tiles}}. See [[Torch posts and brackets]].
- A lit jack-o'-lantern: {{n sprites.pumpkin.fire.radius tiles}}.

A fire gives light only while it burns, and a mounted torch only while it is lit. How fires are lit and fed is on [[Fire]].

### Carried torches

A [[Torch]] gives light only while it is lit, and burns down while it is (see [[Torch]]). Where you carry a lit one decides how much light it gives:

- **In a hand:** a full pool of {{n items.torch.fire.radius tiles}} round you.
- **One in each hand:** {{n tuning.world.twoTorches}} times the light and reach of one.
- **On the belt:** {{n tuning.world.beltLight}} of the light and reach of one in hand.
- **In the bag:** no light.

`T` lights the torch in your hand, or else on your belt, with a [[Tinderbox]] carried, and douses a lit one; with no torch in a hand or on the belt it takes one from the bag into a hand, still out. A torch cannot be set down lit on the ground: dropped, put away, or taken down from a holder, it goes out. It can be mounted in a bracket or on a post.

### Moving lights

One of the dead that is [[Burning]], and a [[Fireball]] or a [[Fire arrow]] in flight, each carry a flickering light with them, so they light the ground they pass at night; a fireball's reaches {{n combat.bow.fireballGlow tiles}}. Where a fireball comes down it leaves a flare out to {{n combat.bow.flareRadius tiles}}, shrinking to nothing over {{n combat.bow.flareSeconds seconds}}. The dead are not drawn to these lights.

### The night tint

At night the world is drawn darker and tinted. The ground and the buildings are drawn as far as your line of sight reaches, but the dead are not: in the dark you see them whole only close to you, or to the reach of a torch you carry, unless they stand in light, where they are seen from any distance. See [[Sight#Darkness|Sight]]. Light flickers only in the picture; the light level the game reads is steady.

### Light and the dead

The dead see you farther the brighter the light on you. Their reach is {{n tuning.zombie.sight tiles}} in full light, falling to {{n tuning.zombie.sightDarkFraction}} of that in total darkness. At night they also notice a flame, a carried torch or a fire, from up to {{n tuning.zombie.flameRange tiles}} away, and walk to it; a torch on the belt shows {{n tuning.world.beltLight}} as far, two torches {{n tuning.world.twoTorches}} times as far. By day flames draw nobody. All of this needs a clear line of sight and the world rule Zombie aggro on. See [[The dead]].

## Numbers

- Outdoor light at most {{n census.constants.light.tunables_dayCap}}; night sky {{n census.constants.clock.NIGHT_B}}.
- Light worked out on a grid of {{n census.constants.light.RES}} cells a tile.
- Torch in hand: {{n items.torch.fire.radius tiles}}; two torches {{n tuning.world.twoTorches}} times; on the belt {{n tuning.world.beltLight}} times.
- Lantern: {{n sprites.lantern_post.fire.radius tiles}}.
- A fireball's light in flight: {{n combat.bow.fireballGlow tiles}}; its flare {{n combat.bow.flareRadius tiles}} for {{n combat.bow.flareSeconds seconds}}.
- Pools through openings need a difference of {{n census.constants.light.PORTAL_MIN}}.
- An open door or window lights {{n tuning.world.daylightTiles}} tiles of its room fully by day; fully lit is {{n census.constants.light.tunables_unlitRoomCap}}.
- You see the dead in the dark whole within {{n tuning.sight.darkRadius tiles}} or your carried light's radius, and the dead standing in light of {{n tuning.sight.litFull}} or more from any distance.
- The dead's sight: {{n tuning.zombie.sight tiles}}, {{n tuning.zombie.sightDarkFraction}} of it in darkness; flames seen from {{n tuning.zombie.flameRange tiles}} at night.

## With friends

Light belongs to the world: the host works it out, and each guest works out the same light from its copy of the world. Every player carries their own torch light, and the host sends each player's torches to the others when they change, so everyone sees each other's light. How far you see the dead in the dark is your own: it is read from your copy of the light and the torch you carry, so the dead in a friend's torchlight are seen by everyone, but only your own torch lengthens your reach.

## Settings that change it

- **Zombie aggro** (default On): with it off, the dead neither see you nor walk to flames, whatever the light.

## See also

- [[The day]]
- [[Sight]]
- [[Fire]]
- [[Torch]]
- [[Torch posts and brackets]]
- [[Burning]]
- [[Rooms]]
- [[Openings]]

## Sources

<!-- sources at 2ea0d24 -->
- `src/light.js:427-439`: one light level: ambient, the static map, carried lights
- `src/light.js:29`, `src/light.js:120-122`, `src/clock.js:7`: the outdoor cap and the night sky
- `src/map.js:1718-1770`: rooms found by flood fill
- `src/light.js:53-59`, `src/light.js:159`, `data/sprites/fireplace.json`, `data/sprites/hearth.json`: a room with a lit fireplace or hearth fully lit; the oven, forge, and campfire light no room
- `src/light.js:28-33`, `src/light.js:130-168`, `data/tuning.json:83`, `src/map.js:1350-1359`: an unlit room's daylight: each open or broken opening lights `daylightTiles` tiles to the window-lit cap, closed shutters only their leak, nothing by night (game #150)
- `src/light.js:23-25`, `src/light.js:72-102`: pools through openings, their offset and minimum difference; fence gates bound no room
- `src/light.js:202-207`: the pools draw no dead
- `src/light.js:53-71`, `src/light.js:215-251`: fires', lanterns', and lit mounted torches' pools, stopped by walls and shut openings; a lantern steady, at the lantern post's radius
- `data/sprites/fireplace.json`, `data/sprites/hearth.json`, `data/sprites/campfire.json`, `data/sprites/oven.json`, `data/sprites/forge.json`, `data/items.json:2`, `data/sprites/torch_post.json`, `data/sprites/lantern_post.json`, `data/sprites/pumpkin.json`: each fire's radius
- `src/game.js:658-670`, `data/tuning.json:79-80`: the carried torch in hand, two in hand, on the belt; none from the bag or the ground
- `src/interact.js:987-1008`, `src/items.js:186-206`: the T key; a torch lit only with a tinderbox, giving light only while lit, out when it leaves a hand, the belt, or a holder
- `src/light.js:308-313`: flicker only in the picture
- `src/sight.js:16-32`, `data/tuning.json:93`: in the dark the dead seen near you, to your torch's reach, or in light (game #150)
- `src/light.js:20`: the light grid's resolution
- `data/tuning.json:5-7`, `src/entities/zombie.js:297-302`, `src/entities/zombie.js:360-376`: the dead's light-scaled sight and flame range
- `src/settings.js:12`: Zombie aggro on by default
- `src/net.js:1225-1232`, `src/net.js:867`, `src/light.js:185-188`: a guest rebuilds the light; each player's carried light sent when it changes, with its owner
- `src/sight.js:24`: only the viewer's own carried light lengthens its reach (game #150)
- `src/fire.js:97-102`, `src/archery.js:366-381`, `src/game.js:671`, `src/light.js:184-200`, `data/combat.json` `bow.fireballGlow`, `bow.flareRadius`, `bow.flareSeconds`: burning bodies, a fireball or fire arrow in flight, and a fireball's flare as moving lights, not among the flames the dead notice
