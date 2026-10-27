---
title: Fences
categories: [Building, Mechanics]
aliases: [Fence, Gate, Gates, See-through walls, Splinters, Bursting a fence, Striking a fence]
summary: Fences are low walls you can see and light through, built from planks; they bound no room, their gates are doors that swing, and the dead strike them down into splinters.
---

**Fences** are low [[Walls|walls]] you cannot walk through but can see through. Light passes them too, and they never make a [[Rooms|room]]: a fenced yard or field stays outdoors. A **gate** is a door in a fence. Unlike any other wall, a fence can be broken: [[The dead]] strike it as they would bite you, one alone slowly and a crowd faster, until it bursts into splinters.

## How it works

### See-through walls

A fence blocks bodies like any wall, but [[Sight|sight]] and [[Light|light]] pass over it. Because it is see-through, the room fill passes it, so whatever it closes in is outdoors. A fenced plot is not somewhere to [[Sleep|sleep]].

A fence is {{n sprites.wall_fence.wall.height}} pixels tall and {{n sprites.wall_fence.wall.thickness}} thick. It is drawn as a rickety fence of split rails, with a post wherever a run ends, turns, or meets another wall.

### Fighting across a fence

A fence stops bodies, not reach. A blow is stopped only by what blocks [[Sight|sight]], and sight passes a fence, so you can hit one of the dead on the other side with a torch or any weapon. The same holds the other way: one of the dead that sees you and comes within {{n tuning.zombie.contact tiles}} can bite you across it, and one striking the fence reaches a little further (below; see [[The dead]]). A fence keeps the dead from walking in; it does not keep you out of reach.

### The dead strike a fence down

When one of the dead is hunting a player it cannot walk to, and a fence stands in its way, it goes to the fence and strikes it:

- Against a fence with you in sight beyond it and no way round, it strikes the fence where it stands.
- With no path to you, or no door of your house that it can walk to, it looks for the fence across its way, **a gate first**: if a gate would let it through, it goes and strikes that gate; otherwise it strikes the first stretch of fence on its way.

It does this in a chase and while it holds a [[Breaking in#The siege|siege]] on you.

A stretch of fence has {{n tuning.world.fenceHp}} hit points, and **a gate {{n tuning.world.fenceGateFactor}} of that**, so a gate goes first. One of the dead comes to within {{n tuning.zombie.fenceReach tiles}} of the middle of the stretch, faces it, and strikes it with the same attack it bites with: each strike takes {{n tuning.zombie.fenceStrike}} of its hit points, and it waits {{n tuning.zombie.cooldown seconds}} after the strike before the next, standing still between. A crowd is only more strikers, each on its own clock, so more of the dead bring a fence down faster, whether they arrive together or spread out.

One of the dead alone takes about two and a half minutes to break a stretch of fence, and about half that for a gate. Two take about half as long as one, and three about a third. Only about three can strike one stretch at a time; the rest wait their turn or strike the stretch beside it, so even a large crowd takes over half a minute. That is time to run, or to arm yourself.

- **It bites over the fence.** One striking a fence that sees you across it bites you, as it would in a chase, when you are within its reach: {{n tuning.zombie.contact tiles}}, and {{n tuning.zombie.fenceBiteExtra tiles}} more across the fence it is striking, from within {{n tuning.zombie.fenceReach tiles}} of it, so standing right against the fence gets you bitten. It goes back to striking when you are out of its reach. Only a few of the dead bite one player at once (see [[The dead#A few at a time|The dead]]): the rest at the fence keep striking it rather than standing, so a crowd at a fence wears it down while you stand behind it. One that finds you on its own side of the fence, at the fence, gives up the fence for the chase.
- **It does not give up while it knows you are in a room**: while the last place it saw you is inside a house, or it holds a siege on you, it strikes on without seeing you, by day or by night. So a house inside a fenced yard is no safe place.
- Only one that last saw you out in the open, in the yard, gives up after {{n tuning.zombie.pressGiveUp seconds}} without seeing you, and searches.

Each strike gives the fence one small jolt, so you can see it being struck. The damage stays: nothing mends a fence, and one the dead have worn stays worn. When its hit points are gone it **bursts into a cloud of splinters and a puff of dust** and is gone: that edge is open ground, and the rooms round it are worked out again.

Only fences break this way. A plain wall of wood, stone, or logs is never broken by anything, and doors and windows are broken by the same kind of strike, with their own damage and health (see [[Breaking in]]).

### Gates

A gate is a door in a fence. Tap E to open or close it, as with any door (see [[Openings]]). A gate swings: opening or shutting it plays two drawn in-between positions, over {{n census.constants.render_walls.SWING_S seconds}}, where a house door snaps open or shut. A shut gate blocks bodies, but you can still see through it. **A fence takes no [[Boards|boards]], a gate included**: a gate's menu has no Board up, and B at one says "A gate takes no boards." An open gate is no fence to strike: open a gate the dead are striking and they stop at once and walk through it, so opening it lets them in rather than having it broken.

### Building

The build palette on N has a **Fence** and a **Gate**, both built with a [[Smith's hammer]] on you (see [[Building]]):

- A **Fence** costs {{n build.fence.cost.plank}} [[Plank|plank]] a stretch and takes {{n build.fence.seconds seconds}}. It needs an empty edge.
- A **Gate** costs {{n build.gate.cost.plank}} planks and takes {{n build.gate.seconds seconds}}. It goes on an empty edge or into a stretch of fence, and never into another wall: laid on a wall of wood, stone, or logs, it says "Only in a fence". Like any door, it needs both its tiles clear.

A Door from the palette laid on a stretch of fence also becomes a gate, at a door's cost. A window cannot be built into a fence. Removing a gate built into a fence puts the fence back; removing one built on an empty edge leaves the edge empty.

A burst stretch of fence leaves an empty edge, where a fence, a gate, a log wall, a door, or a window can be built.

### Where they are

The valley has fences round the graveyard, your cottage's garden, the inn's yard, the manor's garden, and the merchant's yard. Some houses also use a fence as a partition inside.

## Numbers

- Height: {{n sprites.wall_fence.wall.height}} pixels.
- Thickness: {{n sprites.wall_fence.wall.thickness}} pixels.
- To build a stretch of fence: {{n build.fence.cost.plank}} plank, {{n build.fence.seconds seconds}}.
- To build a gate: {{n build.gate.cost.plank}} planks, {{n build.gate.seconds seconds}}.
- A gate's swing: {{n census.constants.render_walls.SWING_S seconds}}.
- Hit points of a stretch of fence: {{n tuning.world.fenceHp}}; of a gate, {{n tuning.world.fenceGateFactor}} of that.
- Hit points a strike takes: {{n tuning.zombie.fenceStrike}}.
- Wait after a strike: {{n tuning.zombie.cooldown seconds}}, after the attack itself.
- Reach to the fence: {{n tuning.zombie.fenceReach tiles}} from the middle of the stretch.
- A bite's extra reach across the fence being struck: {{n tuning.zombie.fenceBiteExtra tiles}}.
- The jolt of a strike lasts {{n census.constants.render_walls.SHAKE_MS}} milliseconds.
- One striking gives up on a player last seen in the open after {{n tuning.zombie.pressGiveUp seconds}} unseen.

## With friends

The strikes are the host's. A fence's damage is kept on the host and saved with the world, but not sent to guests: every player sees each strike's jolt and a burst fence's splinters, and the fence's going reaches every player and the save like any other change to the map. A guest builds fences and gates as the host does, and each player's screen plays a gate's swing when it sees the gate open or shut.

## See also

- [[Walls]]
- [[Rooms]]
- [[Openings]]
- [[Breaking in]]
- [[Sight]]

## Sources

<!-- sources at 3c0a243 -->
- `data/sprites/wall_fence.json`, `data/sprites/post_fence.json`, `data/sprites/wall_parts_fence.json`, `data/sprites/wall_boards_gate.json`: the drawn fence, its post, its gate's leaves, and a drawing of boards across a gate (game #343, at b0df8fc), which no gate can take since game #398
- `data/build.json`: the Fence and the Gate, their costs, seconds, and tool; a gate `over` the fence (game #343, at b0df8fc)
- `src/placement.js:204-212`: a build entry's wall kind, and a gate refused in any wall but a fence ("Only in a fence") (game #343, at b0df8fc)
- `src/render/walls.js:133-159`: a gate's swing through its in-between leaves, `SWING_S`, on each screen from the gate's open state, never for a ghost, a broken gate, or a boarded one (game #343, at b0df8fc)
- `data/sprites/wall_fence.json`: the fence's height, thickness, `seeThrough`, and `fence`
- `src/map.js:1442-1454`: a see-through wall passes sight and light and bounds no room; `wall.fence` marks what the dead can break
- `src/map.js:1742-1794`: the room fill passes a see-through wall
- `src/entities/player.js:229`: a bed outdoors says "Not out here."
- `src/map.js:819-826`: a shut gate blocks bodies as a door does
- `src/map.js:1365-1372`: a shut gate in a see-through fence still passes sight
- `src/combat.js:176-183`: a blow reaches the dead in its wedge in line of sight, which a fence passes
- `src/entities/zombie.js:607-622`, `src/entities/zombie.js:915-928`: a bite needs the contact distance and a clear line of sight
- `src/entities/zombie.js:629-637`, `src/map.js:690-709`: against a fence with the player in sight beyond it and no way round, a chase strikes it (game #185)
- `src/entities/zombie.js:661-674`, `src/entities/zombie.js:244-278`, `src/map.js:1483-1494`: with no path, or no door of the house it can reach, the fence across its way is sought, a gate first, and struck
- `src/entities/zombie.js:780-828`, `src/entities/zombie.js:212-215`, `data/tuning.json:29`: the press state: to within `fenceReach` of the fence, then a strike when the cooldown allows, standing still between; a player in reach bitten across it by the chase's bite; giving up unseen after `pressGiveUp` only for a player last seen outside a room and with no siege held
- `src/entities/zombie.js:829-846`, `data/tuning.json:12-15`: the strike at the attack's active frame, `fenceStrike` a strike, then the bite's `cooldown` (game #185)
- `src/entities/zombie.js:290-298`: a bite reaches `fenceBiteExtra` further across the fence its dead one strikes from within `fenceReach` (game #185)
- `src/entities/zombie.js:900-912`: the siege strikes too
- `src/map.js:678-731`, `src/map.js:733-744`, `data/tuning.json:119-120`: a fence's and a gate's hit points, a strike, the jolt, the burst; the damage saved and never mended (game #185)
- `data/poses.json`, `docs/09-openings.md:52`, `tools/checks/fence.js:74-101`: the attack's length, and the seconds measured with real bodies (one alone about 140, two 71, three 48, eight 37; a gate half); the times on this page are from them
- `src/render/walls.js:373-391`, `src/fire.js:81-83`: the jolt of a strike, and the splinters and dust
- `src/map.js:661-676`: the burst edge emptied and the rooms found again
- `src/map.js:596-606`, `src/map.js:631-676`, `src/placement.js:435`: a gate built over a fence, no window over one; removing it puts the fence back
- `data/maps/valley.json:1156-1170`: the graveyard's fence feature and its gate
- `data/maps/valley.json:1475-1495` (at 393acaf), `data/maps/valley.json:2209-2220`, `data/maps/valley.json:2947-2958`, `data/maps/valley.json:3315-3326`: the fences of your cottage, the inn, the manor, and the merchant's house
- `data/maps/valley.json:4288-4302`, `data/maps/valley.json:4858-4872`: fence partitions inside the cooper's long house and the second cottage on the lane
- `src/host.js:218-225`, `src/main.js:1655-1657`, `src/main.js:1762-1765`: the jolt and the splinters drawn on every player's screen
- `src/map.js:724-729`, `src/game.js:420`: a fence's health short of a break saved, but neither sent to a guest nor in the sync check (game #185)
- `src/entities/zombie.js:679-693`, `src/entities/zombie.js:876-890`: the dead kept waiting for a bite strike the fence between; one with its target on its own side, at the fence, takes up the chase (game #389, at 9be007c)
- `src/entities/zombie.js:865-871`, `src/entities/zombie.js:923-929`: a gate opened while the dead strike it ends their striking, and they take up the chase through it (game #397, at 82485c4)
- `src/interact.js:557`, `src/interact.js:1273`, `src/map.js:816-818`, `src/map.js:2181`: no boards on a fence, a gate included: no Board up on its menu, B says "A gate takes no boards.", a board refused, and a map's boards on one left off (game #398, at 4db1c00)

