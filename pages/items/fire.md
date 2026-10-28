---
title: Fire
categories: [Crafting, Mechanics]
aliases: [Fires, Fuel, Feeding a fire, Lighting a fire, Putting out a fire, Put out, Home lights, Switches]
summary: The home lights (a fireplace, a fire pit, a lantern) are switches that burn nothing; a campfire, the oven, and the forge burn their own fuel and go out when it runs out.
---

A **fire** gives [[Light]], and most fires let you cook ([[Cooking]]). There are two kinds. **The home lights**, a [[Fireplace|fireplace]], a [[Fire pit|fire pit]], and a lantern, are switches: lit with a flame, put out with nothing, and they burn no fuel. **The fires that burn fuel**, a [[Campfire]], the [[Oven]], the [[Forge]], and the [[Cauldron]], hold a few units of their own fuel and burn one every few game hours; at zero they go out.

## How it works

### The home lights

A [[Fireplace]], a [[Fire pit]], a lantern on a post, a lantern in a wall bracket, and a [[Jack-o'-lantern]] each have two entries on their menu:

- **Light the ...**, when it is out, with a flame on you ("You light the fireplace."). Without one it reads "Light the ... (need a tinderbox or a flame)", greyed.
- **Put out the ...**, when it is lit, with nothing needed ("You put out the fireplace.").

They burn nothing, and stay lit until someone puts them out. A [[Use]] of a tinderbox or a lit torch on one that is out lights it too. A lit fireplace or fire pit lights its whole room, and cooks; a fire pit outdoors lights the ground round it out to {{n sprites.fire_pit.fire.radius tiles}}. Both are built from the palette (see [[Building]]). A lantern that is out gives no light, and no flame to light a torch from. The village's own lights are lanterns.

### Fires that burn fuel

Each burns one fuel item and holds a most it can take:

| Fire | Fuel | Hours a unit | Holds | Cooks |
|---|---|---|---|---|
| [[Campfire]] | [[Log]] | {{n sprites.campfire.fire.hoursPerUnit}} | {{n sprites.campfire.fire.maxFuel}} | Yes |
| [[Oven]] | [[Log]] | {{n sprites.oven.fire.hoursPerUnit}} | {{n sprites.oven.fire.maxFuel}} | Yes, and its own bread and pie |
| [[Forge]] | [[Charcoal]] | {{n sprites.forge.fire.hoursPerUnit}} | {{n sprites.forge.fire.maxFuel}} | No |
| [[Cauldron]] | [[Log]] | {{n sprites.cauldron.fire.hoursPerUnit}} | {{n sprites.cauldron.fire.maxFuel}} | No: it brews potions |

A game hour is {{n census.constants.map.HOUR_SECONDS}} real seconds at normal speed.

The oven's, the forge's, and the cauldron's menus have **Light the ... (a log)** when they are out and **Feed the ... (n of max, h left)** while they burn, and "The ... is full" when they hold all they can; the campfire's has **Add a log** (see [[Campfire]]). The entry is greyed, with "(need a log)", when you have none. The fuel comes from your bag, your [[Belt]], or your [[Hands]] (not from containers nearby). The hours left are shown rounded, or "under an hour". A log added to a cold campfire does not light it.

### A flame

**Lighting any fire that is out needs a flame on you**: a [[Tinderbox]] anywhere you carry it (a hand, the belt, or the bag), or a lit [[Torch]] in a hand or on the belt; a torch in the bag does not count. The flame is not used up. A click on a greyed Light says "You need a tinderbox or a lit torch to light it.", and `E` passes it by. Feeding a fire that is already burning needs no flame.

A [[Use]] of a flame lights a campfire that is out but has fuel in it, a fireplace, a fire pit, a lantern, or a torch that is out on a post or in a bracket, from within {{n census.constants.burn.DIP_REACH tiles}} and in sight, never through a wall. A lit campfire says "It is already burning.", an empty one "It has nothing to burn.", a home light already lit "It is already lit.". The oven, the forge, and the cauldron are lit only from their own menus ("That cannot be lit." to a Use), and none of them is put out: each burns its fuel down.

A [[Fireball]] that comes down within {{n combat.bow.kindleRadius tiles}} of a campfire with fuel in it, with no wall between, lights it; it lights no home light.

The other way round, any burning fire is a flame, and so is a lit torch on a post or in a wall bracket, and a lit lantern: an unlit torch in your hand or on your belt used on it is lit from it ("You light the torch at the fire.", or "You light the torch at the lantern.").

### Putting out

Every light but the oven's and the forge's can be put out from its menu, with nothing needed: a home light, a [[Campfire]] (it keeps the fuel left in it), and a [[Torch]] on a post or in a bracket ("Put out the torch", which keeps how burnt it is). `T` puts out the torch in your hand ("You put out the torch.").

### Dipping arrows

[[Use]] arrows you carry on any lit fire and the whole stack becomes [[Fire arrow|fire arrows]]: "You dip the arrows in the fire." An unlit fire says "The fire is out." See [[Fire arrow]].

### Going out

A fire that burns fuel burns one unit every so many game hours. When the last unit burns it goes out, and every player within {{n tuning.world.fireOutRadius tiles}} of it reads "A fire has gone out.". A fire put out by hand says only the player's own line. A recipe that needs the fire waits while it is out and carries on when it is lit again (see [[Crafting]]).

### Torches and the jack-o'-lantern

A [[Torch]] is a light you carry, in either hand, while it is lit. It is lit with a [[Tinderbox]] and burns down while it is lit, faster in a hand than on the belt. Two held torches light more than one; a torch on your [[Belt]] glows at {{n tuning.world.beltLight}} of a held one's light. `T` lights or puts out the torch in your hand, or else on your belt; with none there, it takes one from the bag into a hand. An empty wall bracket or a torch post holds a torch: **Take the torch** and **Mount the torch** (see [[Torch posts and brackets]]). A [[Jack-o'-lantern]] is a small light that is a switch, as the home lights are: put out with nothing and lit again with a flame.

### Fires and the dead

At night a lit fire, a lantern, or a torch on a wall draws the dead that see it from up to {{n tuning.zombie.flameRange tiles}} away, but only those with no player to follow: one hunting a player, holding a siege on a house, or breaking a door or a window is never drawn off by it. A torch you carry is different: it is a sighting of you, and it leads even the ones hunting you. See [[The dead#Flames at night|The dead]] and [[Light]].

## Numbers

- A game hour: {{n census.constants.map.HOUR_SECONDS}} seconds.
- A campfire: {{n sprites.campfire.fire.maxFuel}} logs at most, {{n sprites.campfire.fire.hoursPerUnit}} hours a log.
- A torch's light: radius {{n items.torch.fire.radius}}.
- Two torches held: {{n tuning.world.twoTorches}} times one.
- A torch on the belt: {{n tuning.world.beltLight}} of one.

## With friends

Lighting, putting out, and feeding a fire change the world, so every player sees it. A guest's Light, Put out, or Feed is carried out by the host as that player, with what that player carries, so it is their own tinderbox or torch that counts as the flame, and the refusal reaches their screen. A guest's count of a fire's hours left updates at each whole unit burned, so it can lag by up to a unit.

## See also

- [[Campfire]], [[Light]]
- [[Crafting]], [[Cooking]]
- [[Torch]], [[Torch posts and brackets]]
- [[Fire arrow]], [[Burning]]
- [[Log]], [[Charcoal]]

## Sources

<!-- sources at 879d0a7 -->
- `src/entities/zombie.js:457-492`, `src/entities/zombie.js:690-707` (at eba3c56): a fixed fire draws only the dead on no player's trail, a carried torch any (game #555)
- `data/sprites/fireplace.json`, `data/sprites/fire_pit.json`, `data/sprites/lantern_post.json`: the home lights' `fire.switch` (game #421; the fire pit, game #527, at c3cb736)
- `src/interact.js:508-518`, `src/interact.js:632-640`: a switch's and a bracket lantern's menu: Light with a flame, Put out with nothing (game #421)
- `src/map.js:108-111`, `src/map.js:131-133`: a switch burns nothing and takes no fuel (game #421)
- `src/map.js:320-346`: a lantern or a switch on or off; a put-out emits `firePutOut`, not the burnt-out `fireOut` (game #421)
- `src/light.js:47-71`: lit fires give light, a room fire its room, a lantern put out none
- `data/sprites/campfire.json`, `data/sprites/oven.json`, `data/sprites/forge.json`: each fire's fuel, hours a unit, most, cooking
- `src/stations.js:51-59`: a prop's stations as a list, the oven its own and a fire that cooks (game #421)
- `src/map.js:105`: a game hour in seconds
- `src/interact.js:462-497`: the oven's and forge's Light, Feed, full, "(need a log)"; fuel from bag, belt, and hands only
- `src/inventory.js:155-165`, `src/inventory.js:398-412`: the flame: a tinderbox in a hand, on the belt, or in the bag, else a lit torch in a hand or on the belt; the refusal's words
- `src/burn.js:178-211`, `src/burn.js:301-321`: the `light` verb: a campfire with fuel, a switch, a lantern, a torch that is out; never the oven or the forge; each refusal; the lines
- `src/burn.js:213-241`: a burning fire, a lit torch on a holder, and a lit lantern are flames; a lantern put out is not
- `src/archery.js:311-314`, `src/map.js:198-218`, `data/combat.json` `bow.kindleRadius`: a fireball lights a campfire with fuel and nothing else that is a fire
- `src/burn.js:252-282`, `src/interact.js:559-591`: the `putout` verb: a switch, a lantern, a campfire keeping its fuel, a mounted torch keeping its wear (game #421)
- `src/interact.js:1481-1499`: `T`, "You put out the torch." (game #421)
- `src/map.js:108-129`: a fire burns a unit every so many hours and goes out
- `src/main.js:1781-1783`, `src/host.js:254-261`, `data/tuning.json`: "A fire has gone out." within `fireOutRadius`, on every player's screen
- `src/stations.js`: a job waits while the fire is out
- `data/sprites/pumpkin.json`: the jack-o'-lantern is a switch (game #428)
- `data/items.json`: the torch's radius; `data/tuning.json`: the belt torch and two torches
- `src/net.js:664-672`: a guest's menu choice performed on the host as that player, its refusal to their screen
- `data/interactions.json`, `src/interactions.js:35-44`, `src/burn.js:147-169`: arrows used on any lit fire, refused when it is out
- `data/sprites/cauldron.json`, `src/interact.js:463-497`, `src/burn.js:198-200`, `src/burn.js:263`: the cauldron's fire, logs, lit from its menu, never by a Use, never put out (game #491, at 0fa02e5)

{{navbox making}}
