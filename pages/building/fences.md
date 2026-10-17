---
title: Fences
categories: [Building, Mechanics]
aliases: [Fence, Gate, Gates, See-through walls, Splinters, Bursting a fence]
summary: Fences are low walls you can see and light through; they bound no room, their gates are doors, and a crowd of the dead bursts them into splinters.
---

**Fences** are low [[Walls|walls]] you cannot walk through but can see through. Light passes them too, and they never make a [[Rooms|room]]: a fenced yard or field stays outdoors. A **gate** is a door in a fence. Unlike any other wall, a fence can be broken: one of [[The dead]] pressing on it does nothing, but a crowd bursts it into splinters.

## How it works

### See-through walls

A fence blocks bodies like any wall, but [[Sight|sight]] and [[Light|light]] pass over it. Because it is see-through, the room fill passes it, so whatever it closes in is outdoors. A fenced plot is not somewhere to [[Sleep|sleep]].

A fence is {{n sprites.wall_fence.wall.height}} pixels tall and {{n sprites.wall_fence.wall.thickness}} thick. It is still placeholder art.

### Fighting across a fence

A fence stops bodies, not reach. A blow is stopped only by what blocks [[Sight|sight]], and sight passes a fence, so you can hit one of the dead on the other side with a torch or any weapon. The same holds the other way: one of the dead that sees you and comes within {{n tuning.zombie.contact tiles}} can bite you across it (see [[The dead]]). A fence keeps the dead from walking in; it does not keep you out of reach.

### A crowd bursts a fence

When one of the dead is hunting a player it cannot walk to, and a fence stands in its way, it goes to the fence and presses on it:

- Pressed against a fence with you in sight beyond it, it presses where it stands.
- With no path to you, or no door of your house that it can walk to, it looks for the fence across its way, **a gate first**: if a gate would let it through, it goes and presses that gate; otherwise it presses the first stretch of fence on its way.

It does this in a chase and while it holds a [[Breaking in#The siege|siege]] on you.

- **It bites over the fence.** One pressing a fence that sees you within {{n tuning.zombie.contact tiles}} across it bites you, as it would in a chase, and goes back to pressing when you are out of its reach.
- **It does not give up while it knows you are in a room**: while the last place it saw you is inside a house, or it holds a siege on you, it presses on without seeing you, by day or by night. So a house inside a fenced yard is no safe place.
- Only one that last saw you out in the open, in the yard, gives up after {{n tuning.zombie.pressGiveUp seconds}} without seeing you, and searches.

**One of the dead pressing a fence does nothing.** {{n tuning.world.fenceCrowd}} or more pressing the same stretch together wear it down by {{n tuning.world.fenceDps}} a second, and by that again for each one more, so a larger crowd brings it down far faster. A stretch of fence gives way when its wear reaches {{n tuning.world.fenceHp}}; **a gate gives way at {{n tuning.world.fenceGateFactor}} of that**, so a gate goes first. A stretch that fewer press recovers {{n tuning.world.fenceRecover}} a second.

While a crowd presses it, the fence shakes, so you have warning. When it gives way it **bursts into a cloud of splinters and a puff of dust** and is gone: that edge is open ground, and the rooms round it are worked out again.

Only fences break this way. A plain wall of wood, stone, or logs is never broken by anything, and doors and windows are broken by the dead's blows instead (see [[Breaking in]]).

### Gates

A gate is a door in a fence. Tap E to open or close it, as with any door (see [[Openings]]). A shut gate blocks bodies, but you can still see through it. An open gate is no fence to press.

### Building

Fences cannot be built. A **gate can be built into a fence**: a Door from the build palette, laid on a stretch of fence, takes its place as a gate (see [[Building]]); a window cannot be built into a fence. Removing a gate you built that way puts the fence back.

A burst stretch of fence leaves an empty edge, where a log wall, a door, or a window can be built.

### Where they are

The valley has fences round the graveyard, your cottage's garden, the inn's yard, the manor's garden, and the merchant's yard. Some houses also use a fence as a partition inside.

## Numbers

- Height: {{n sprites.wall_fence.wall.height}} pixels.
- Thickness: {{n sprites.wall_fence.wall.thickness}} pixels.
- The dead it takes to wear a fence: {{n tuning.world.fenceCrowd}}.
- Wear a second: {{n tuning.world.fenceDps}} for that many, and {{n tuning.world.fenceDps}} more for each one beyond.
- A stretch of fence gives way at {{n tuning.world.fenceHp}}; a gate at {{n tuning.world.fenceGateFactor}} of that.
- Recovery while fewer press it: {{n tuning.world.fenceRecover}} a second.
- One pressing gives up on a player last seen in the open after {{n tuning.zombie.pressGiveUp seconds}} unseen.

## With friends

The wear is kept on the host, and it is not saved. Every player sees a pressed fence shake and a burst fence's splinters, and the fence's going reaches every player and the save like any other change to the map.

## See also

- [[Walls]]
- [[Rooms]]
- [[Openings]]
- [[Breaking in]]
- [[Sight]]

## Sources

<!-- sources at 64cc711 -->
- `data/sprites/wall_fence.json`: the fence's height, thickness, `seeThrough`, and `fence`
- `src/map.js:1429-1441`: a see-through wall passes sight and light and bounds no room; `wall.fence` marks what a crowd can burst
- `src/map.js:1718-1770`: the room fill passes a see-through wall
- `src/entities/player.js:212`: a bed outdoors says "Not out here."
- `src/map.js:827-834`: a shut gate blocks bodies as a door does
- `src/map.js:1352-1359`: a shut gate in a see-through fence still passes sight
- `src/combat.js:176-183`: a blow reaches the dead in its wedge in line of sight, which a fence passes
- `src/entities/zombie.js:597-601`: a bite needs the contact distance and a clear line of sight
- `src/entities/zombie.js:619-624`: pressed against a fence with the player in sight beyond it, a chase presses it
- `src/entities/zombie.js:648-661`, `src/entities/zombie.js:244-279`, `src/map.js:1459-1470`: with no path, or no door of the house it can reach, the fence across its way is sought, a gate first, and pressed
- `src/entities/zombie.js:766-806`, `src/entities/zombie.js:212-215`, `data/tuning.json:26`: the press state: at the fence, pressing; a player in reach bitten across it by the chase's bite (game #171); giving up unseen after `pressGiveUp` only for a player last seen outside a room and with no siege held
- `src/entities/zombie.js:860-872`: the siege presses too
- `src/map.js:669-739`, `data/tuning.json:88-92`: the wear: one does nothing, a crowd wears it, a gate at a fraction, recovery, the burst; not saved
- `src/game.js:621`: the wear worked out on the world's step, after the dead have moved
- `src/render/walls.js:374-400`, `src/fire.js:81-83`: the shake, and the splinters and dust
- `src/map.js:652-671`: the burst edge emptied and the rooms found again
- `src/map.js:587-597`, `src/map.js:622-671`, `src/placement.js:408`: a gate built over a fence, no window over one; removing it puts the fence back
- `data/build.json`: only the log wall, door, and window can be built
- `data/maps/valley.json:1110-1124`: the graveyard's fence feature and its gate
- `data/maps/valley.json:1279-1290`, `data/maps/valley.json:2042-2053`, `data/maps/valley.json:2779-2790`, `data/maps/valley.json:3147-3158`: the fences of your cottage, the inn, the manor, and the merchant's house
- `data/maps/valley.json:4099-4113`, `data/maps/valley.json:4655-4669`: fence partitions inside the cooper's long house and the second cottage on the lane
- `src/host.js:218-225`, `src/main.js:1606-1608`, `src/main.js:1709-1712`: the shake and the splinters drawn on every player's screen
