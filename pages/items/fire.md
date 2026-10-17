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

A campfire that is out but has fuel in it can also be lit with a flame:

- [[Use]] a [[Tinderbox]] or a lit [[Torch]] on it ("You light the fire."), from within {{n census.constants.burn.DIP_REACH tiles}} and in sight, never through a wall. One already burning says "It is already burning.", one with no fuel "It has nothing to burn.".
- A [[Fireball]] that comes down within {{n combat.bow.kindleRadius tiles}} of it, with no wall between, lights it.

Neither lights a hearth, a fireplace, an oven, or a forge ("That cannot be lit."): those are lit only from their own menus. The other way round, any burning fire is a flame: an unlit torch in your hand or on your belt used on it is lit from it ("You light the torch at the fire.").

### Dipping arrows

[[Use]] arrows you carry on any lit fire in this table and the whole stack becomes [[Fire arrow|fire arrows]]: "You dip the arrows in the fire." An unlit fire says "The fire is out." See [[Fire arrow]].

### Going out

A fire burns one unit every so many game hours. When the last unit burns, it goes out, and players nearby read "A fire has gone out." Most fires in the valley start cold; a few fireplaces and the baker's oven start lit.

A recipe that needs the fire waits while it is out and carries on when it is fed again (see [[Crafting]]).

### Fires that do not burn fuel

- A jack-o'-lantern is always lit.
- A lantern, in a wall bracket or on a lantern post, is always lit and never goes out. The village's own lights are lanterns.
- An empty wall bracket or a torch post holds a [[Torch]]: **Take the torch** and **Mount the torch**. A mounted torch burns down while it is lit (see [[Torch posts and brackets]]).

### Torches

A [[Torch]] is a light you carry, in either hand, while it is lit. It is lit with a [[Tinderbox]] and burns down while it is lit, faster in a hand than on the belt. Two held torches light more than one; a torch on your [[Belt]] glows at {{n tuning.world.beltLight}} of a held one's light. `T` lights or douses the torch in your hand, or else on your belt; with none there, it takes one from the bag into a hand. A torch is also lit by Use of a tinderbox or a lit torch on it, or at a burning fire (see [[Torch#Lit or out|Torch]]).

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

<!-- sources at 2ea0d24 -->
- `data/sprites/campfire.json`: the campfire's fuel, hours a unit, most, cooking
- `data/sprites/hearth.json`: the hearth's, and it lights its room
- `data/sprites/fireplace.json:30-34`: the fireplace's
- `data/sprites/oven.json`: the oven's
- `data/sprites/forge.json`: the forge's: charcoal, no cooking
- `src/stations.js:45-52`: the oven offers only its own recipe
- `src/light.js:47-59`: lit fires give light; a room fire lights its room
- `src/map.js:95`: a game hour in seconds
- `src/interact.js:352-382`: Light, Feed, full, "(need a log)"; fuel from bag, belt, and hands only
- `src/interact.js:360-365`: hours left rounded, or "under an hour"
- `src/map.js:97-115`: a fire burns a unit every so many hours and goes out
- `src/main.js:1619-1621`: "A fire has gone out." within 8 tiles
- `data/maps/valley.json`: which fires start lit
- `src/stations.js:204-217`: a job waits while the fire is out
- `data/sprites/pumpkin.json`: the jack-o'-lantern is always lit
- `data/sprites/lantern_post.json`, `src/map.js:208-215`, `src/light.js:63-67`: lanterns, never out; the village's lights
- `src/map.js:137-283`, `src/map.js:149-184`: brackets and posts holding a torch, which burns down while lit
- `src/interact.js:402-460`: Light the torch, Take the torch, and Mount the torch
- `src/items.js:186-215`, `src/game.js:494-520`: a torch's light only while lit, no fuel; it burns down
- `src/game.js:658-670`: two held torches
- `src/interact.js:987-1008`: `T`
- `src/archery.js:289-292`, `src/map.js:186-205`, `data/combat.json` `bow.kindleRadius`: a fireball lights a campfire with fuel, never a hearth, fireplace, oven, or forge
- `data/interactions.json`, `src/burn.js:74`, `src/burn.js:97-199`, `src/map.js:284-312`: the `light` verb: a tinderbox or a lit torch lights a campfire with fuel, in reach and sight; never a hearth, an oven, or a forge; an unlit torch lit from any burning fire; the refusals
- `data/items.json:2`: the torch's radius
- `data/tuning.json:79-80`: the belt torch and two torches
- `src/map.js:104-106`: a guest's fuel refreshed at each whole unit
- `data/interactions.json`, `src/interactions.js:34-42`, `src/burn.js:74-95`: arrows used on any fire that burns fuel, refused when it is out

{{navbox making}}
