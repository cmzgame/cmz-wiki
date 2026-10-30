---
title: Breaking in
categories: [Building, The dead, Mechanics]
aliases: [Breach, Breaching, Break in, Battering, Siege, The siege]
summary: How the dead choose a door, hit their way through boards, doors, and shutters, batter shut windows open to see in, and at night wait about a house until dawn.
---

**Breaking in** is how [[The dead|the dead]] get through a closed building. A zombie that cannot walk to the person it is hunting picks a door, hits it until it gives, and walks through. A door is the only way in: the dead never come through a window, though they may batter one open to see in. They never attack a plain wall, and they never open a door. At night, the dead that saw you go into a house remember the way you went in and wait about the house until dawn: the **siege**.

The dead only break in while they are hunting someone, which needs the **Zombie aggro** world rule on. It is on by default; with it off the dead wander and never break anything.

## How it works

### Choosing a way in

A zombie that is chasing someone and cannot find a path to where it last saw them picks a [[Rooms|room]] to break, at the moment the path fails:

- If it is shut in a room and its target is somewhere else, it breaks out by a door, the one that leads towards its target's room if there is one, else the nearest. If every door of its room is already open, it goes out by one and makes for the target's room instead.
- Otherwise it breaks into the target's room.

To get into a room it takes, among the room's doors that it can walk to and stand beside, boarded or not, **the one it saw you use** if it holds a siege on you (see below), and otherwise the nearest. From outside, a window still shut or boarded counts too, but only to be battered open (see below). When every door of the room opens from another closed room it cannot reach, such as a hall or a porch, it breaks into that room's door first, and so on a few rooms deep.

It goes for the nearest, not the weakest. It must stand within {{n tuning.zombie.breachReach tiles}} of the middle of the opening to hit it.

### Hitting the opening

An opening is a stack, and the zombie works through it in a fixed order:

- first, the [[Boards|boards]] on its own side, one at a time
- then the door or the shutters
- last, the boards on the far side

Each hit does {{n tuning.zombie.breachDamage}} damage and gives the opening one small jolt. After each hit the zombie waits {{n tuning.zombie.cooldown seconds}}, on top of its attack, before the next. Several of the dead on the same opening each hit on their own clock, so a crowd breaks it much faster.

A board has {{n census.constants.map.BOARD_HP}} health, shutters {{n census.constants.map.SHUTTER_HP}}, and a door {{n census.constants.map.DOOR_HP}}. One zombie alone takes about half a minute to break a bare door, under half that for bare shutters, and well over a minute and a half for a door boarded full on both sides.

**Every door and every window can be broken**, whatever its wall is made of: a door in a stone wall has the same health as one in a wooden wall, and so does one you build. Only a plain wall can never be broken.

Health is not shown: an opening jolts with each hit, but looks the same until a board, the door, or the shutters give.

**A fire does not draw it off.** At night, one of the dead breaking a door or a window is never drawn away by a fixed flame, a fire, a lantern, or a torch on a wall, however near and however long it has gone without seeing you: it keeps at the opening until it gives, a bite comes in reach, or where it is going no longer lies through it. A torch you carry still draws it, as a sighting of you (see [[The dead#Flames at night|The dead]]).

### Through a door, never a window

Once a door is open or broken and has no boards, the zombie walks through it.

A window is different. The dead batter a window whose shutters are closed, or that carries boards, until it is open, so they can see in. Once it is open, or its shutters are broken, it is nothing to them, and they go on to a door. Nobody passes through a window, so a window is never a safe place to stand behind: one of the dead that sees you through an open window walks round to a door and breaks it. And a window is a place to be bitten from: one of the dead just outside an open window bites you if you stand right at it, though a step back is out of its reach.

### When there is no way in

If the zombie can reach no door of the room at all, for example a house inside a fenced yard, it first looks for a [[Fences|fence]] across its way and goes to strike it, a gate first, until it bursts: one alone takes minutes over a stretch of fence, a crowd less. One striking a fence bites you across it if you come within reach, and while it knows you are in the house it does not give up striking, by day or night (see [[Fences]]). With no fence to strike, it batters any shut window it can reach and then **searches** round where it last saw you. For {{n tuning.zombie.noWayTime seconds}} after finding no way in it does not look for one again, and seeing you does not turn the search back into a chase.

A search that finds no one gives up, unless the zombie holds a siege on you: then it waits about the house instead (see below).

The game keeps both tiles of every door clear of furniture so a door is not out of reach by accident (see [[Openings]]).

### The siege

**At night, the dead that saw you go into a house wait about it until dawn.** From dusk, at {{n census.constants.clock.DUSK_START}} o'clock, until {{n tuning.zombie.siegeEndHour}} o'clock, one of the dead that sees you inside a room it is not in holds a siege on you, and remembers where you went in:

- the door you crossed, if the sighting before had you out in the open, so it saw you go in: the door on the line from where it last saw you outside to where it sees you now, so with two doors close together it is the one you used; failing that, the door nearest you;
- any window it sees you through.

By day a sighting is the ordinary chase, and holds no siege. Seeing you out in the open, or by day, ends a siege it held.

While it holds a siege:

- **It goes first to the opening it saw you use**, among those it can walk to, when it breaks in (above).
- **When its search finds no one, it does not give up.** It waits about the house, going between the openings it knows: it stands at one and breaks it if it is shut (a door, or a window battered open to see in, as above), and tries another every {{n tuning.zombie.siegeSwitch seconds}}, or sooner if it cannot reach one. A fence in its way it strikes (see [[Fences]]). When every opening is already open it comes in. If there is nothing left to break and it still cannot walk to you, as with a room that has no door, it waits at the opening it saw you by.
- If it sees you again, it chases you as usual.
- **No fire draws it away**: a fire, a lantern, or a torch on a wall near the house does not pull it off the siege; only a torch you carry leads it, as a sighting of you.
- **You cannot [[Sleep|sleep]]** while one of the dead holding a siege on you is within {{n tuning.zombie.siegeSleepRadius tiles}} of you, whichever room of the house it is in: the bed says "The dead that know you are in here are still about." A sleep already begun is not broken.

At {{n tuning.zombie.siegeEndHour}} o'clock the siege ends: wherever it has got to, the zombie loses interest and wanders off, unless it can see someone, in which case it chases them as usual. Your death ends a siege on you too. Nothing calls more of the dead: a siege is only the ones that saw you.

### A room with no door

Nothing breaks a plain wall and nobody passes a window, so the dead never get into a room with no door; but you cannot walk out of it either. Building never refuses a room for having no door.

A room whose only ways in are shut [[Castle gates|castle gates]] is broken into too: the dead break a shut gate at {{n sprites.wall_stone_gate_2.wall.gate.hp}} hit points an edge, the whole gate giving way at once (Michael's ruling of 2026-10-30). Until it gives, a bite does not pass its bars; they see you through it and cannot reach you.

A [[Battlements|battlement]], the parapet of a wall walk, is another wall the dead cannot strike down: it has no hit points and they never target it. It stops bodies at its edge and nothing else, so it keeps nobody safe by itself; a wall walk is no room.

### What a broken door or shutter becomes

A broken door is an open doorway for good. Broken shutters are a permanent hole, drawn as open shutters with no leaves, that still lets no one through. Nothing repairs them, but they can be boarded again, and a new door can be built over a broken door, or a new window over broken shutters, whole and shut (see [[Building]] and [[Openings]]).

### Giving up

A zombie gives up breaking in if it can bite someone, if it stops hunting, or if its target moves to another room. If it cannot even reach the opening it chose, it searches instead.

## Numbers

- Damage a hit: {{n tuning.zombie.breachDamage}}.
- Wait between hits: {{n tuning.zombie.cooldown seconds}}, after the attack itself.
- Reach to the opening: {{n tuning.zombie.breachReach tiles}}.
- Health of a board: {{n census.constants.map.BOARD_HP}}.
- Health of shutters: {{n census.constants.map.SHUTTER_HP}}.
- Health of a door: {{n census.constants.map.DOOR_HP}}.
- Boards per side: {{n census.constants.map.BOARDS_PER_SIDE}}.
- No way in, before looking again: {{n tuning.zombie.noWayTime seconds}}.
- A siege starts from {{n census.constants.clock.DUSK_START}} o'clock and ends at {{n tuning.zombie.siegeEndHour}} o'clock.
- In a siege, another opening tried every {{n tuning.zombie.siegeSwitch seconds}}.
- No sleep with a besieger within {{n tuning.zombie.siegeSleepRadius tiles}}.

## With friends

A guest sees each hit as a jolt of the opening, and each board, door, or set of shutters as it gives. The damage between is kept on the host, and saved with the world. A window battered open is opened for everyone.

The dead see a guest as they see the host, so a guest can be besieged too. A siege is held on one player, the last one the zombie saw inside, and only that player is refused sleep by it.

## Settings that change it

- **Zombie aggro** (default On): with it off, the dead never hunt and never break in. It is a [[World rules|world rule]]: on a guest it is the host's.

## See also

- [[The dead]]
- [[Openings]]
- [[Fences]]
- [[Boards]]
- [[Rooms]]
- [[Sleep]]
- [[World rules]]

## Sources

<!-- sources at 3c0a243 -->
- `data/sprites/wall_battlement.json` (`seeThrough`, no `fence`, no hit points), `src/map.js:2762` (game #574) (at 8d361e5)
- `src/entities/zombie.js:638-659`: a way in chosen on the step the path fails; out of the zombie's own room, else into the target's
- `src/entities/zombie.js:307-309`, `src/rules.js:13-14`, `src/settings.js:12`: hunting needs Zombie aggro, on by default
- `src/map.js:843-878`: a room's openings to break, nearest first, the door towards the target's room first from inside, shut or boarded windows only from outside, an opening already open never one
- `src/entities/zombie.js:217-242`: the remembered opening first, else the nearest door or shut window the zombie can walk to; through a closed outer room's door first, a few rooms deep
- `data/tuning.json`: `zombie.breachReach`; `src/entities/zombie.js:706-718`: the reach to the edge's midpoint
- `src/map.js:777-808`: the order of the stack: near boards, the leaf, far boards
- `data/tuning.json`: `zombie.breachDamage` and `zombie.cooldown`; `src/entities/zombie.js:727-752`: the hit after the attack animation, a jolt with it (game #185), then the cooldown
- `data/poses.json`: the zombie attack, 4 frames at 12 fps (the times are inferred from it)
- `src/map.js:577-580`: the health of a board, shutters, and a door, and boards per side
- `src/map.js:733-744`: a door and a window always have health, whatever their material; a plain wall none
- `src/map.js:806-807`, `src/host.js:218-222`, `src/main.js:1655-1656`: the chunk sent only when something gives, the damage between saved; each hit a jolt on every player's screen (game #185)
- `src/map.js:792-797`: a broken door stays open, broken shutters stay open
- `src/map.js:811-826`: a window needs breaking while shut or boarded, and never passes a body
- `src/entities/zombie.js:719-726`: through a door once open; a window open is the end of it
- `src/map.js:1716-1726`, `src/entities/zombie.js:330` (at 77fee9d): the dead cannot break a shut castle gate, never target it, and cannot bite through it (game #570)
- `src/entities/zombie.js:660-682`, `src/entities/zombie.js:244-278`: no door it can reach: a fence across the way struck, a gate first; else a search
- `src/entities/zombie.js:790-805`, `src/entities/zombie.js:212-215`: a striking one bites across the fence, and does not give up unseen while it last saw the player in a room (game #171)
- `src/entities/zombie.js:607-622`, `src/visibility.js:12-48`: a bite needs the contact distance and a clear line, which an open window passes (game #171)
- `src/entities/zombie.js:753-779`, `data/tuning.json`: `zombie.noWayTime`: a search, no chase on sight while it lasts, then giving up, or the siege
- `src/clock.js:12`, `src/clock.js:68-74`, `data/tuning.json:31-33`: dusk and night, and the siege's end hour, switch, and sleep radius
- `src/entities/zombie.js:457-492`, `src/entities/zombie.js:690-707` (at eba3c56): a fixed flame never pulls off one breaking an opening or holding a siege, a carried torch still does (game #555, Michael's ruling of 2026-10-27)
- `src/entities/zombie.js:421-460`: a sighting inside a room at night starts or renews a siege and remembers the door crossed (the one on the line from where it last saw the player outside, else the door nearest them, game #171) and the window seen through; out in the open or by day it ends
- `src/entities/zombie.js:847-914`: the siege state: between the openings it knows, breaking the shut ones, another every `siegeSwitch`, in when all are open, waiting at the opening with nothing to break and no way in
- `src/entities/zombie.js:462-478`, `src/entities/player.js:221-233`, `src/game.js:359`: the siege held until its dawn on a living player; the sleep refused within `siegeSleepRadius`
- `src/entities/zombie.js:562-570`, `src/entities/zombie.js:488-498`: at the dawn, or the player's death, it loses interest and wanders, unless it sees someone
- `src/entities/character.js:61-68`: the siege is kept with the dead in the save; the striking of a fence and the breach are not
- `src/placement.js:199-205`, `src/map.js:596-606`: no build refuses a doorless room; a new door or window built over a broken one
- `src/entities/zombie.js:687-717`: giving up on a bite, lost aggro, a moved target, or an opening it cannot reach
- `src/rules.js:13-23`, `src/rules.js:44-46`: Zombie aggro is a world rule, the host's on a guest
- `src/entities/zombie.js:520-534`: any player seen, a guest's as the host's, and the siege's player the last seen
