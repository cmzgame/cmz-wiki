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

- **Light the ... (a log)** when it is out and you carry a flame.
- **Light the ... (need a tinderbox or a flame)** when it is out and you have the fuel but no flame. A click on it says "You need a tinderbox or a lit torch to light it.", and `E` passes it by.
- **Feed the ... (n of max, h left)** when it is lit: one more unit, up to the most it holds.
- **The ... is full** when it holds all it can.

The entry is greyed, with "(need a log)", when you have none. Lighting or feeding takes one unit from your bag, your [[Belt]], or your [[Hands]] (not from containers nearby). The hours left are shown rounded, or "under an hour".

**Lighting a fire that is out needs a flame on you**, whatever the fire: a campfire, a hearth, a fireplace, an [[Oven]], or a [[Forge]]. A flame is a [[Tinderbox]] anywhere you carry it (a hand, the belt, or the bag), or a lit [[Torch]] in a hand or on the belt; a torch in the bag does not count. The flame is not used up. Feeding a fire that is already burning needs no flame. This is the same rule a Use of a flame asks (below).

A campfire that is out but has fuel in it can also be lit with a flame:

- [[Use]] a tinderbox or a lit torch on it ("You light the fire."), from within {{n census.constants.burn.DIP_REACH tiles}} and in sight, never through a wall. One already burning says "It is already burning.", one with no fuel "It has nothing to burn.".
- A [[Fireball]] that comes down within {{n combat.bow.kindleRadius tiles}} of it, with no wall between, lights it.

Neither lights a hearth, a fireplace, an oven, or a forge ("That cannot be lit."): those are lit only from their own menus, with a flame on you (above). The other way round, any burning fire is a flame, and so is a lit torch on a post or in a wall bracket, and a lantern: an unlit torch in your hand or on your belt used on it is lit from it ("You light the torch at the fire.", or "You light the torch at the lantern."). The lantern is unchanged.

### Dipping arrows

[[Use]] arrows you carry on any lit fire in this table and the whole stack becomes [[Fire arrow|fire arrows]]: "You dip the arrows in the fire." An unlit fire says "The fire is out." See [[Fire arrow]].

### Going out

A fire burns one unit every so many game hours. When the last unit burns, it goes out, and the host's own player, within {{n tuning.world.fireOutRadius tiles}} of it, reads "A fire has gone out." (a guest is not told). Most fires in the valley start cold; a few fireplaces and the baker's oven start lit.

A recipe that needs the fire waits while it is out and carries on when it is lit again (see [[Crafting]]).

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

Feeding a fire and its going out change the world, so every player sees it. A guest's Light or Feed is carried out by the host as that player, with what that player carries, so it is their own tinderbox or torch that counts as the flame, and the refusal reaches their screen. A guest's count of a fire's hours left updates at each whole unit burned, so it can lag by up to a unit.

## See also

- [[Light]]
- [[Crafting]], [[Cooking]]
- [[Torch]]
- [[Fire arrow]], [[Burning]]
- [[Log]], [[Charcoal]]

## Sources

<!-- sources at cfe0203 -->
- `data/sprites/campfire.json`: the campfire's fuel, hours a unit, most, cooking
- `data/sprites/hearth.json`: the hearth's, and it lights its room
- `data/sprites/fireplace.json:30-34`: the fireplace's
- `data/sprites/oven.json`: the oven's
- `data/sprites/forge.json`: the forge's: charcoal, no cooking
- `src/stations.js:45-52`: the oven offers only its own recipe
- `src/light.js:47-59`: lit fires give light; a room fire lights its room
- `src/map.js:95`: a game hour in seconds
- `src/interact.js:360-393`: Light, Feed, full, "(need a log)"; fuel from bag, belt, and hands only; lighting one that is out needs a flame ("(need a tinderbox or a flame)", the refusal, not E's), feeding one that burns does not (game #169)
- `src/inventory.js:125-135`, `src/inventory.js:278-292`: the flame: a tinderbox in a hand, on the belt, or in the bag, else a lit torch in a hand or on the belt; the refusal's words
- `src/interact.js:864-883`: E takes only a simple action
- `src/interact.js:368-369`: hours left rounded, or "under an hour"
- `src/map.js:97-115`: a fire burns a unit every so many hours and goes out
- `src/main.js:1628-1630`, `data/tuning.json:90`: "A fire has gone out." within `fireOutRadius`, on the host's own screen only (game #189)
- `data/maps/valley.json`: which fires start lit
- `src/stations.js:209-222`: a job waits while the fire is out
- `data/sprites/pumpkin.json`: the jack-o'-lantern is always lit
- `data/sprites/lantern_post.json`, `src/map.js:208-215`, `src/light.js:63-67`: lanterns, never out; the village's lights
- `src/map.js:137-283`, `src/map.js:149-184`: brackets and posts holding a torch, which burns down while lit
- `src/interact.js:413-471`: Light the torch, Take the torch, and Mount the torch
- `src/items.js:186-215`, `src/game.js:489-515`: a torch's light only while lit, no fuel; it burns down
- `src/game.js:654-666`: two held torches
- `src/interact.js:1141-1162`: `T`
- `src/archery.js:289-292`, `src/map.js:186-205`, `data/combat.json` `bow.kindleRadius`: a fireball lights a campfire with fuel, never a hearth, fireplace, oven, or forge
- `data/interactions.json`, `src/burn.js:62`, `src/burn.js:85-190`, `src/map.js:284-312`: the `light` verb: a tinderbox or a lit torch lights a campfire with fuel, in reach and sight; never a hearth, an oven, or a forge; an unlit torch lit from any burning fire, a lit torch on a post or in a bracket (game #172), or a lantern (game #188); the refusals
- `data/items.json:2`: the torch's radius
- `data/tuning.json:84-85`: the belt torch and two torches
- `src/map.js:104-106`: a guest's fuel refreshed at each whole unit
- `src/net.js:590-598`, `src/host.js:264-268`: a guest's menu choice performed on the host as that player, its refusal to their screen
- `data/interactions.json`, `src/interactions.js:34-43`, `src/burn.js:62-83`: arrows used on any fire that burns fuel, refused when it is out

{{navbox making}}
