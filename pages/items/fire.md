---
title: Fire
categories: [Crafting, Mechanics]
aliases: [Fires, Fuel, Campfire, Hearth, Fireplace, Feeding a fire, Lighting a fire]
summary: Fires burn their own fuel, one unit every few game hours, and go out when it runs out; feed them to keep them lit.
---

A **fire** in a campfire, a hearth, a fireplace, an [[Oven]], or a [[Forge]] is maintenance: it holds a few units of its own fuel and burns one every few game hours. At zero it goes out. A lit fire gives [[Light]], and some fires let you cook ([[Cooking]]).

## How it works

### Fuel

Each kind of fire burns one fuel item and holds a most it can take:

| Fire | Fuel | Hours a unit | Holds | Cooks |
|---|---|---|---|---|
| Campfire | [[Log]] | {{n sprites.campfire.fire.hoursPerUnit}} | {{n sprites.campfire.fire.maxFuel}} | Yes |
| Hearth | [[Log]] | {{n sprites.hearth.fire.hoursPerUnit}} | {{n sprites.hearth.fire.maxFuel}} | Yes |
| Fireplace | [[Log]] | {{n sprites.fireplace.fire.hoursPerUnit}} | {{n sprites.fireplace.fire.maxFuel}} | Yes |
| [[Oven]] | [[Log]] | {{n sprites.oven.fire.hoursPerUnit}} | {{n sprites.oven.fire.maxFuel}} | Bread only |
| [[Forge]] | [[Charcoal]] | {{n sprites.forge.fire.hoursPerUnit}} | {{n sprites.forge.fire.maxFuel}} | No |

A game hour is {{n census.constants.map.HOUR_SECONDS}} real seconds at normal speed. A hearth and a fireplace light the whole room they are in.

### Lighting and feeding

Right-click a fire, or press `E` beside it:

- **Light the ... (a log)** when it is out.
- **Feed the ... (n of max, h left)** when it is lit: one more unit, up to the most it holds.
- **The ... is full** when it holds all it can.

The entry is greyed, with "(need a log)", when you have none. Feeding takes one unit from your bag, your [[Belt]], or your [[Hands]] (not from containers nearby), and lights the fire if it was out. The hours left are shown rounded, or "under an hour".

### Dipping arrows

[[Use]] arrows you carry on any lit fire in this table and the whole stack becomes [[Fire arrow|fire arrows]]: "You dip the arrows in the fire." An unlit fire says "The fire is out." See [[Fire arrow]].

### Going out

A fire burns one unit every so many game hours. When the last unit burns, it goes out, and players nearby read "A fire has gone out." Most fires in the valley start cold; a few fireplaces and the baker's oven start lit.

A recipe that needs the fire waits while it is out and carries on when it is fed again (see [[Crafting]]).

### Fires that do not burn fuel

- A jack-o'-lantern is always lit.
- A wall bracket or a torch post holds a [[Torch]]: **Take the torch** and **Mount the torch**.

### Torches

A [[Torch]] is a light you carry, in either hand, and it never burns out. Two held torches light more than one; a torch on your [[Belt]] glows at {{n tuning.world.beltLight}} of a held one's light. `T` takes a torch out of your bag or belt into a hand, or puts the held one away.

## Numbers

- A game hour: {{n census.constants.map.HOUR_SECONDS}} seconds.
- A torch's light: radius {{n items.torch.fire.radius}}.
- Two torches held: {{n tuning.world.twoTorches}} times one.
- A torch on the belt: {{n tuning.world.beltLight}} of one.

## With friends

Feeding a fire and its going out change the world, so every player sees it. A guest's count of a fire's hours left updates at each whole unit burned, so it can lag by up to a unit.

## See also

- [[Light]]
- [[Crafting]], [[Cooking]]
- [[Torch]]
- [[Fire arrow]], [[Burning]]
- [[Log]], [[Charcoal]]

## Sources

<!-- sources at 9205ad7 -->
- `data/sprites/campfire.json`: the campfire's fuel, hours a unit, most, cooking
- `data/sprites/hearth.json`: the hearth's, and it lights its room
- `data/sprites/fireplace.json:30-34`: the fireplace's
- `data/sprites/oven.json`: the oven's
- `data/sprites/forge.json`: the forge's: charcoal, no cooking
- `src/stations.js:45-52`: the oven offers only its own recipe
- `src/light.js:45-57`: lit fires give light; a room fire lights its room
- `src/map.js:83`: a game hour in seconds
- `src/interact.js:350-380`: Light, Feed, full, "(need a log)"; fuel from bag, belt, and hands only
- `src/interact.js:358-363`: hours left rounded, or "under an hour"
- `src/map.js:86-103`: a fire burns a unit every so many hours and goes out
- `src/main.js:1466-1468`: "A fire has gone out." within 8 tiles
- `data/maps/valley.json`: which fires start lit
- `src/stations.js:193-205`: a job waits while the fire is out
- `data/sprites/pumpkin.json`: the jack-o'-lantern is always lit
- `src/map.js:125-183`: brackets and posts holding a torch
- `src/interact.js:401-440`: Take the torch and Mount the torch
- `src/items.js:187-194`: a held torch's light, with no fuel
- `src/game.js:552-563`: two held torches
- `src/interact.js:982-989`: `T`
- `data/items.json:2`: the torch's radius
- `data/tuning.json:76-77`: the belt torch and two torches
- `src/map.js:93-95`: a guest's fuel refreshed at each whole unit
- `data/interactions.json`, `src/interactions.js:34-42`, `src/burn.js:73-93`: arrows used on any fire that burns fuel, refused when it is out (game commit 3b7cb9a)

{{navbox making}}
