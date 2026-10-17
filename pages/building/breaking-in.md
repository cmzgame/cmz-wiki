---
title: Breaking in
categories: [Building, The dead, Mechanics]
aliases: [Breach, Breaching, Break in, Battering]
summary: How the dead choose a door, hit their way through boards, doors, and shutters, and batter shut windows open to see in, never to pass.
---

**Breaking in** is how [[The dead|the dead]] get through a closed building. A zombie that cannot walk to the person it is hunting picks a door, hits it until it gives, and walks through. A door is the only way in: the dead never come through a window, though they may batter one open to see in. They never attack a plain wall, and they never open a door.

The dead only break in while they are hunting someone, which needs the **Zombie aggro** world rule on. It is on by default; with it off the dead wander and never break anything.

## How it works

### Choosing a way in

A zombie that is chasing someone and cannot find a path to where it last saw them picks a [[Rooms|room]] to break, at the moment the path fails:

- If it is shut in a room and its target is somewhere else, it breaks out by a door, the one that leads towards its target's room if there is one, else the nearest. If every door of its room is already open, it goes out by one and makes for the target's room instead.
- Otherwise it breaks into the target's room.

To get into a room it takes the nearest of the room's doors that it can walk to and stand beside, boarded or not. From outside, a window still shut or boarded counts too, but only to be battered open (see below). When every door of the room opens from another closed room it cannot reach, such as a hall or a porch, it breaks into that room's door first, and so on a few rooms deep.

It goes for the nearest, not the weakest. It must stand within {{n tuning.zombie.breachReach tiles}} of the middle of the opening to hit it.

### Hitting the opening

An opening is a stack, and the zombie works through it in a fixed order:

- first, the [[Boards|boards]] on its own side, one at a time
- then the door or the shutters
- last, the boards on the far side

Each hit does {{n tuning.zombie.breachDamage}} damage. After each hit the zombie waits {{n tuning.zombie.cooldown seconds}}, on top of its attack, before the next. Several of the dead on the same opening each hit on their own clock, so a crowd breaks it much faster.

A board has {{n census.constants.map.BOARD_HP}} health, shutters {{n census.constants.map.SHUTTER_HP}}, and a door {{n census.constants.map.DOOR_HP}}. One zombie alone takes about half a minute to break a bare door, under half that for bare shutters, and well over a minute and a half for a door boarded full on both sides.

Health is not shown, so an opening looks the same until a board, a door, or the shutters give.

### Through a door, never a window

Once a door is open or broken and has no boards, the zombie walks through it.

A window is different. The dead batter a window whose shutters are closed, or that carries boards, until it is open, so they can see in. Once it is open, or its shutters are broken, it is nothing to them, and they go on to a door. Nobody passes through a window, so a window is never a safe place to stand behind: one of the dead that sees you through an open window walks round to a door and breaks it.

### When there is no way in

If the zombie can reach no door of the room at all, for example a house inside a fenced yard whose gate is shut, it batters any shut window it can reach and then **searches** round where it last saw you. For {{n tuning.zombie.noWayTime seconds}} after finding no way in it does not look for one again, and seeing you does not turn the search back into a chase. A search that finds no one gives up.

The game keeps both tiles of every door clear of furniture so this does not happen by accident (see [[Openings]]).

### What a broken door or shutter becomes

A broken door is an open doorway for good. Broken shutters are a permanent hole, drawn as open shutters with no leaves, that still lets no one through. Nothing repairs them and nothing can be built into the gap, but they can be boarded again. See [[Openings]].

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

## With friends

A guest sees a break-in only as each board, door, or set of shutters gives. The damage between is kept on the host. A window battered open is opened for everyone.

## Settings that change it

- **Zombie aggro** (default On): with it off, the dead never hunt and never break in. It is a [[World rules|world rule]]: on a guest it is the host's.

## See also

- [[The dead]]
- [[Openings]]
- [[Boards]]
- [[Rooms]]
- [[World rules]]

## Sources

<!-- sources at 82106de -->
- `src/entities/zombie.js:488-529`: a way in chosen on the step the path fails; out of the zombie's own room, else into the target's
- `src/entities/zombie.js:253-255`, `src/rules.js:13-14`, `src/settings.js:12`: hunting needs Zombie aggro, on by default
- `src/map.js:625-668`: a room's openings to break, nearest first, the door towards the target's room first from inside, shut or boarded windows only from outside, an opening already open never one
- `src/entities/zombie.js:211-233`: the nearest door or shut window the zombie can walk to; through a closed outer room's door first, a few rooms deep
- `data/tuning.json`: `zombie.breachReach`; `src/entities/zombie.js:550-562`: the reach to the edge's midpoint
- `src/map.js:560-591`: the order of the stack: near boards, the leaf, far boards
- `data/tuning.json`: `zombie.breachDamage` and `zombie.cooldown`; `src/entities/zombie.js:566-594`: the hit after the attack animation, then the cooldown
- `data/poses.json`: the zombie attack, 4 frames at 12 fps (the times are inferred from it)
- `src/map.js:446-449`: the health of a board, shutters, and a door, and boards per side
- `src/map.js:589-590`: the chunk marked changed only when something gives
- `src/map.js:575-580`: a broken door stays open, broken shutters stay open
- `src/map.js:594-609`: a window needs breaking while shut or boarded, and never passes a body
- `src/entities/zombie.js:563-570`: through a door once open; a window open is the end of it
- `src/entities/zombie.js:518-526`, `src/entities/zombie.js:395`, `src/entities/zombie.js:596-604`, `data/tuning.json`: `zombie.noWayTime`: no way in, a search, no chase on sight while it lasts, then giving up
- `src/placement.js:188-190`: nothing can be built into the gap
- `src/entities/zombie.js:531-561`: giving up on a bite, lost aggro, a moved target, or an opening it cannot reach
- `src/rules.js:13-21`, `src/rules.js:38-40`: Zombie aggro is a world rule, the host's on a guest
