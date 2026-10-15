---
title: Breaking in
categories: [Building, The dead, Mechanics]
aliases: [Breach, Breaching, Break in]
summary: How the dead choose an opening, hit their way through boards, doors, and shutters, and climb open windows.
---

**Breaking in** is how [[The dead|the dead]] get through a closed building. A zombie that cannot walk to the person it is hunting picks an opening, hits it until it gives, and walks or climbs through. The dead never attack a plain wall, and they never open a door.

The dead only break in while they are hunting someone, which needs the **Zombie aggro** setting on. It is off by default, and with it off the dead wander and never break anything.

## How it works

### Choosing an opening

A zombie that is chasing someone and cannot find a path to where it last saw them picks a [[Rooms|room]] to break:

- If it is shut in a room and its target is somewhere else, it breaks out of that room.
- Otherwise it breaks into the target's room.

It goes for that room's nearest opening on its own side, not the weakest one. It must stand within {{n tuning.zombie.breachReach tiles}} of the middle of the opening to hit it.

### Hitting the opening

An opening is a stack, and the zombie works through it in a fixed order:

- first, the [[Boards|boards]] on its own side, one at a time
- then the door or the shutters
- last, the boards on the far side

Each hit does {{n tuning.zombie.breachDamage}} damage. After each hit the zombie waits {{n tuning.zombie.cooldown seconds}}, on top of its attack, before the next. Several of the dead on the same opening each hit on their own clock, so a crowd breaks it much faster.

A board has {{n census.constants.map.BOARD_HP}} health, shutters {{n census.constants.map.SHUTTER_HP}}, and a door {{n census.constants.map.DOOR_HP}}. One zombie alone takes about half a minute to break a bare door, under half that for bare shutters, and well over a minute and a half for a door boarded full on both sides.

Health is not shown, so an opening looks the same until a board, a door, or the shutters give.

### What a broken door or shutter becomes

A broken door is an open doorway for good. Broken shutters are a permanent hole, drawn as open shutters with no leaves. Nothing repairs them and nothing can be built into the gap, but they can be boarded again. See [[Openings]].

### Climbing open windows

Once the way is open, the zombie walks through a door, or climbs through a window. A zombie's climb takes {{n tuning.zombie.climb seconds}}, slower than yours, and it cannot bite until it is through. A hit interrupts the climb: the body lands back where it started if it was less than halfway, otherwise on the far side.

The dead never path through an open window as part of a normal chase. They climb only when a failed path has sent them to break in, and the opening they chose is a window they can climb.

### Giving up

A zombie gives up breaking in if it can bite someone, if it stops hunting, or if its target moves to another room.

## Numbers

- Damage a hit: {{n tuning.zombie.breachDamage}}.
- Wait between hits: {{n tuning.zombie.cooldown seconds}}, after the attack itself.
- Reach to the opening: {{n tuning.zombie.breachReach tiles}}.
- Health of a board: {{n census.constants.map.BOARD_HP}}.
- Health of shutters: {{n census.constants.map.SHUTTER_HP}}.
- Health of a door: {{n census.constants.map.DOOR_HP}}.
- Boards per side: {{n census.constants.map.BOARDS_PER_SIDE}}.
- A zombie's climb: {{n tuning.zombie.climb seconds}}.

## With friends

A guest sees a break-in only as each board, door, or set of shutters gives. The damage between is kept on the host.

## Settings that change it

- **Zombie aggro** (default Off): with it off, the dead never hunt and never break in. It is a world rule: on a guest it is the host's.

## See also

- [[The dead]]
- [[Openings]]
- [[Boards]]
- [[Rooms]]
- [[Settings]]

## Sources

<!-- sources at 9205ad7 -->
- `src/entities/zombie.js:202-215`, `src/entities/zombie.js:488-506`: a breach starts when the path fails
- `src/entities/zombie.js:233`, `src/settings.js:12`: hunting needs Zombie aggro, off by default
- `src/map.js:598-624`: the room chosen (out of its own, else into the target's) and its nearest opening on the zombie's side
- `data/tuning.json`: `zombie.breachReach`; `src/entities/zombie.js:530-540`: the reach to the edge's midpoint
- `src/map.js:536-565`: the order of the stack: near boards, the leaf, far boards
- `data/tuning.json`: `zombie.breachDamage` and `zombie.cooldown`; `src/entities/zombie.js:548-575`: the hit after the attack animation, then the cooldown
- `data/poses.json`: the zombie attack, 4 frames at 12 fps (the times are inferred from it)
- `src/map.js:431-434`: the health of a board, shutters, and a door
- `src/map.js:563`: the chunk marked changed only when something gives
- `src/map.js:551-559`: a broken door stays open, broken shutters stay open
- `src/placement.js:186-187`: nothing can be built into the gap
- `src/entities/zombie.js:217-222`, `src/entities/zombie.js:372-387`, `src/entities/zombie.js:542-546`: walking or climbing through once open
- `data/tuning.json`: `zombie.climb`; `src/entities/zombie.js:92-99`: a hit cuts the climb short at the nearer end
- `src/map.js:568-573`: windows never pass a walking body, so a chase never paths through one
- `src/entities/zombie.js:510-575`: giving up on a bite, lost aggro, or a moved target
- `src/rules.js:9-37`: Zombie aggro is a world rule, the host's on a guest
