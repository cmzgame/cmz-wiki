---
title: The dead
categories: [Creatures, Combat]
aliases: [Zombie, Zombies, Dead, Undead]
summary: The dead who walk the valley: how they see, hunt, bite (a few at a time), break in, wait out a night about a house, and fall.
numbersOk: true
---

<table class="infobox"><caption>The dead</caption><tr><th>Health</th><td>{{n tuning.zombie.hp}}</td></tr><tr><th>Speed</th><td>{{n tuning.zombie.speed tiles a second}}; {{n tuning.zombie.burstSpeed}} times that close to a player it sees</td></tr><tr><th>Sight</th><td>{{n tuning.zombie.sight tiles}} in full light</td></tr><tr><th>Bite</th><td>{{n tuning.zombie.damage}} damage</td></tr><tr><th>Wardrobes</th><td>{{n census.counts.zombieWardrobes}}</td></tr><tr><th>Placed in the valley</th><td>{{n census.counts.authoredDead}} (at Standard)</td></tr></table>

**The dead** are the village's former people, walking. They shamble, they look for the living, and they bite. Each is dressed from one of {{n census.counts.zombieWardrobes}} wardrobes, and their bodies push apart from one another. They never open doors and never break plain walls, but they strike doors, shutters, and fences down.

## Behaviour

### How many and where

[[The valley]]'s map places {{n census.counts.authoredDead}} of the dead. Every chunk of wild land grown beyond the map's edge brings between {{n valley.wild.zombiesPerChunk.0}} and {{n valley.wild.zombiesPerChunk.1}} more. Those are the numbers at the **Standard** Starting population; a world made at None has no dead at all, at Low fewer, and at High more, in the valley and in every wild chunk alike (see [[World rules]]). The level is set when the world is made and never rises with time.

Only the dead within {{n tuning.world.activeTiles tiles}} of some player (in a square around them) think and move; the rest stand still until a player comes near.

### Sight

The dead see the [[Player]] by the same rule the player sees by: a clear line (see [[Sight]]). How far they see depends on the [[Light]] where the player stands: {{n tuning.zombie.sight tiles}} in full light, falling to {{n tuning.zombie.sightDarkFraction}} of that when the player stands unlit. Each looks every {{n tuning.zombie.sightCheck seconds}}.

The dead ignore [[Animals|animals]], wild and tame: they never chase, bite, or count one, though deer and rabbits run from them.

### Flames at night

At night, once one of the dead has not seen a player for {{n tuning.zombie.flamePatience seconds}}, it can be drawn by any lit flame in its line of sight, from as far as {{n tuning.zombie.flameRange tiles}} in full dark. A torch carried in hand counts as seeing its carrier. Two torches are seen {{n tuning.world.twoTorches}} times as far; a torch on the belt is seen from {{n tuning.world.beltLight}} times as far.

### Memory and search

The dead know only where they last saw the player. They walk to that spot. Arriving without seeing the player, or finding no path there, they search within {{n tuning.zombie.searchRadius tiles}} of it with short walks for {{n tuning.zombie.searchTime seconds}}, then give up and go idle, unless they hold a siege on that player (below). Nothing tells them where the player is through a wall. A hit tells a hunting zombie where the blow came from; for an arrow, where it was shot from.

Idle, they wander a little within their room, standing between walks.

### Sight-pull

One of the dead that first turns to hunt a player, because it sees one or because a player's blow lands on it and it lives, calls once: "{{n tuning.zombie.pullText}}". Every other one of the dead within {{n tuning.zombie.pullRadius tiles}} of it that is not already hunting a player, is on its feet or getting up, and has a clear line to it joins the hunt, shown by a "{{n tuning.zombie.pullBubble}}" over its head, and walks to where the caller learnt of the player. The reach is scaled by the light on the caller, as their sight is, so a call in the dark reaches about a tile and a half. The ones it calls never call others, and a killing blow calls no one. The dead never come to a sound. See [[Sight-pull]].

### The closing burst

One of the dead in the chase that sees its target within {{n tuning.zombie.burstRange tiles}} walks {{n tuning.zombie.burstSpeed}} times as fast, so one or two can close on a player who is not paying attention. It depends on distance alone, never on time. A walking player still outpaces a bursting one, and so does one in the middle of a swing, slowed to {{pct combat.blow.swingMove}} of their pace. A player slowed further does not, and the dead catch them: drawing a bow ({{pct combat.bow.drawSpeed}} of their pace), behind a raised [[Wooden shield|shield]] ({{pct items.shield.shield.moveMult}}), or bracing ({{pct combat.bow.braceMove}}). Players' own speed is on [[Player]]. It is a trial: the burst may change or go.

### The bite

One of the dead that can see the player and comes within {{n tuning.zombie.contact tiles}} starts a bite, or a little further across a fence it is striking (see [[Fences]]). It winds up first, drawing back, and the bite lands at its strike, 0.4 seconds after it began, if the player is still close and in its line of sight, for {{n tuning.zombie.damage}} damage. <!-- typed: the attack's active frame over its speed, data/poses.json `zombie` --> It then waits {{n tuning.zombie.cooldown seconds}} after the animation before the next. **Any hit that lands during the wind-up cancels the bite**, and the zombie waits out its cooldown instead (see [[Stagger and knockdown]]).

### A few at a time

Only a few of the dead in reach of one player bite at once: {{n tuning.zombie.biteTokens}}, and one more for every {{n tuning.zombie.biteTokensPer}} in reach beyond the first {{n tuning.zombie.biteTokensPer}}. With three in reach, two bite; with six, three; with nine, four. The rest stand pressed against the player, waiting, and still block the way and take hits. One kept waiting by a shut fence or gate between it and the player strikes the fence instead of standing (see [[Fences]]).

- One that has bitten, or is waiting out its cooldown, keeps its place among the biters until it is floored, killed, or pushed or left out of reach; a stagger does not cost it its place.
- When a place comes free, the nearest waiter takes it and starts its own wind-up.
- So a [[Shove]] that pushes a biter out of reach, or a knockdown, hands its place to the next nearest, who must wind up from the start.
- The count is per player: two players standing together each have their own biters. It never grows with time, only with how many are let near.


A bite that gets through:

- may open a wound, with a chance of {{n combat.bleed.chance}} (see [[Bleeding]]),
- may infect, with a chance of {{n combat.infection.chance}} (see [[Infection]]).

A bite fully blocked by the [[Wooden shield]] does neither. A bite on an exposed player does more (see [[Dual wielding]]).

{{planned doc=02 note="Infection marks the player and its moodle worsens over the days, but it has no other effect yet (question 29b)."}}

### Breaking in

When a hunting zombie cannot find a path to where it last saw the player, it goes to a door it can walk to of the room it wants into (or of the room it is shut in): the one it saw the player use, if it holds a siege on them, else the nearest. It hits it: boards on its side first, then the door or shutters, then the boards on the far side. Each hit does {{n tuning.zombie.breachDamage}} damage, at the pace of its bites, and gives the opening a small jolt.

- A board has {{n census.constants.map.BOARD_HP}} health, a door {{n census.constants.map.DOOR_HP}}, shutters {{n census.constants.map.SHUTTER_HP}}. Up to {{n census.constants.map.BOARDS_PER_SIDE}} boards go on each side.
- Every door and window can be broken, whatever its wall is made of.
- A broken door is a doorway for good; broken shutters leave an open hole.
- The dead never come through a window, open, shut, or broken. From outside they may batter a window's closed shutters or boards open to see in, then go on to a door. One that sees the player through an open window walks round to a door and breaks it, so a window is never a safe place to stand behind; and a player who stands right at an open window can be bitten by one just outside it, though a step back is out of its reach.
- With no door it can reach, a zombie strikes a [[Fences|fence]] across its way if there is one, a gate first; otherwise it batters what windows it can and then searches, and does not look for a way in again for {{n tuning.zombie.noWayTime seconds}}.

See [[Breaking in]] and [[Openings]].

### Fences

The dead strike a fence that stands between them and a player they are hunting and cannot walk to, a gate first, with the attack they bite with: each strike takes {{n tuning.zombie.fenceStrike}} of a stretch's {{n tuning.world.fenceHp}} hit points, on the bite's cooldown, and at none left it bursts into splinters. One alone takes about two and a half minutes to bring a stretch down; a crowd is only more strikers, so it is faster, and a gate goes in half the time. A gate opened while they strike it ends the striking: they walk through it instead. One striking a fence still bites a player within reach across it, and reaches {{n tuning.zombie.fenceBiteExtra tiles}} further across it than its usual bite. It does not give up while it knows the player is in a room (it last saw them inside one, or holds a siege on them); only for a player it last saw out in the open does it give up, after {{n tuning.zombie.pressGiveUp seconds}} without seeing them. See [[Fences]].

### The siege

At night, from {{n census.constants.clock.DUSK_START}} o'clock, one of the dead that sees a player inside a room it is not in holds a siege on them until {{n tuning.zombie.siegeEndHour}} o'clock. It remembers the door it saw them go in by, the one on the line from where it last saw them outside to where it sees them now (else the door nearest them), and any window it saw them through, and breaks in there first. When its search finds no one it does not give up: it waits about the house, going between the openings it knows and breaking the shut ones. At {{n tuning.zombie.siegeEndHour}} o'clock it loses interest and wanders off, unless it sees someone. The siege calls no more of the dead: it is held only by the ones that saw you. While one holding a siege on you is within {{n tuning.zombie.siegeSleepRadius tiles}}, you cannot [[Sleep|sleep]]. See [[Breaking in#The siege|Breaking in]].

### The groan

Now and then each of the dead says "{{n tuning.zombie.groanText}}" in a speech bubble, every {{n tuning.zombie.groanMin}} to {{n tuning.zombie.groanMax seconds}}. It does not groan while on the floor, and the fallen are silent. A groan from one you cannot see for the dark shows no bubble; within {{n tuning.sight.groanRadius tiles}} of you the [[Chat log]] says "Something groans in the dark." instead, at most once every {{n tuning.sight.groanGap seconds}}, and farther off nothing is heard. One behind a tree's canopy by day says nothing in the log.

### Burning

A lit [[Torch]]'s blow (by chance), the [[Fireball]], and a [[Fire arrow]] set the dead alight. A burning body loses a little health a second for a few seconds, with no push or stagger, so it keeps coming; one that dies burning burns on as a corpse. The dead do not notice the fire. See [[Burning]].

### Death

At no health one of the dead falls, and once the fall has played its body stays as a still picture that can be searched. See [[Corpses]].

## Fighting them

- Hits, pushes, staggers, and knockdowns are on [[Combat]] and [[Stagger and knockdown]].
- A floored zombie takes finishers while it lies, not while it gets up.
- A hit during a bite's wind-up cancels it, whatever the weapon; a bite already landed cannot be cancelled.
- [[Burning|Fire]] and [[Poison]] go on hurting one after the hit: a burn and a poison each take health a second for a while, and one of the dead may carry both. A poisoned one is drawn tinted green.
- A hit on one of the dead, or its first sight of you, brings the others near it that can see it (see [[Sight-pull]]). To take one at a time, pull one at the edge of a group, out of the others' line, or in the dark.
- Only a few of a crowd bite at once; the rest wait their turn, or strike the fence between, and a [[Shove]] that clears a biter hands its place on.
- A hit that staggers one makes it reel, arms flung up and leaning back, for the length of the stagger; a hit that does not stagger it only flinches. One lying downed has its health bar just over the body, and is outlined when the pointer is over it.
- Light matters: in the dark they see the player from much less far, but a lit flame draws them at night.
- In the dark you see them only close by, to the reach of a torch you carry, or where they stand in light (see [[Sight#Darkness|Sight]]). One lost in the dark has no health bar or swing-target outline and cannot be clicked, but a swing or a shot still hits it.
- Doors, shutters, boards, and fences hold them off for a time (see [[Openings]], [[Fences]], and [[Building]]); a crowd breaks any of them faster than one alone.
- At night, being seen going into a house means the dead that saw you wait about it until dawn.

## The sound it makes

The dead shuffle as they walk, whatever the floor. One knocked down thumps to the ground, and one killed makes a heavier sound of its own. They moan as they turn to come at someone. See [[Sound]].

## With friends

Each of the dead picks the nearest player it can see; a fallen player draws no one. With none seen, it chases toward the nearest living player. The bite names its victim: the wound, the infection, and the words about them belong to that player alone. A siege is held on one player, the last the zombie saw inside, and stops only that player's sleep.

## Settings that change it

- **Zombie aggro** (default on): on, they behave as described here. Off, the dead never see the player and never hunt them; they wander, and a hit does not make them hunt. Flames do not draw them either. It is a [[World rules|world rule]], chosen at New world and changed from the pause menu; a browser that saved its settings before aggro came on by default offers its old choice first at New world.
- **Zombies attack villagers** (default off): on, one of the dead that sees no player hunts the nearest of the [[Villagers]] it can see, with the same sight and memory, and bites them. A villager flagged immune, the [[Innkeeper]] and the [[Priest]] in the valley, is never hunted or harmed, with the setting on or off. It works whatever Zombie aggro says: with aggro off the dead ignore players and still hunt villagers; with aggro on, players are always preferred when in sight. The two are separate settings on purpose. A bitten villager flinches for {{n tuning.villager.hurtTime seconds}}; one bitten to death gets up as one of the dead in what they wore.

- **Starting population** (default Standard), chosen when the world is made: None, Low, Standard, or High, how many of the dead the world starts with and each wild chunk brings.

## See also

- [[Corpses]]
- [[Sight-pull]]
- [[Combat]]
- [[Burning]]
- [[Openings]]
- [[Sight]]
- [[Light]]
- [[Levers]]: the dead's numbers still being balanced
- [[Animals]]

## Sources

<!-- sources at 879d0a7 -->
- `src/poison.js:85-142`, `src/game.js:835` (at 307ed34): poison on the dead, beside a burn, and its green (game #496)
- `data/tuning.json`: the `zombie` block (hp, speed, sight, sightDarkFraction, sightCheck, flame, search, contact, damage, cooldown, biteTokens, biteTokensPer, breach, noWayTime, groan) and `world.activeTiles`, `twoTorches`, `beltLight`, `villager.hurtTime`
- `data/wardrobes.json`: the dead's ten wardrobes
- `src/entities/zombie.js:46-85`, `src/entities/movement.js:81-103`: the body, separation
- `src/map.js:1723-1735`: wild chunks bring the dead per `data/maps/valley.json` (`wild.zombiesPerChunk`)
- `src/game.js:693-697`: only the dead in the active box think
- `src/entities/zombie.js:367-401`, `src/entities/zombie.js:581-592`: sight scaled by the light at the player, the look's interval, the nearest player seen
- `src/entities/zombie.js:430-446`, `src/entities/zombie.js:606-618`, `src/game.js:918`: flames at night, two torches, the belt
- `src/entities/zombie.js:581-619`, `src/entities/zombie.js:671-767`, `src/entities/zombie.js:834-860`, `src/entities/zombie.js:547-557`: memory, the walk to the last sighting, the search, giving up, or a siege
- `src/entities/zombie.js:123-128`: a hit tells a hunting zombie where the blow came from
- `src/entities/zombie.js:652`: idle wandering within the room
- `src/entities/zombie.js:671-682`, `src/entities/zombie.js:1009-1021`, `data/poses.json:31`, `src/game.js:432-440`: the bite begun in reach, its wind-up (the attack's active frame, its fifth, at 10 frames a second), its landing in reach and sight, the cooldown after the animation, the guard and exposure
- `src/entities/zombie.js:141-149`: any landed hit before the bite lands cancels it and sets the cooldown
- `src/entities/zombie.js:331-361`, `src/entities/zombie.js:677-683`, `data/tuning.json:13-14`: bite tokens: the pool and its growth, a holder kept through its cooldown and a stagger, the nearest waiter first, per target; the rest wait pressed in
- `data/combat.json`: `bleed.chance`, `infection.chance`
- `src/bleed.js:59`, `src/infection.js:48`: a blocked bite neither wounds nor infects
- `src/entities/zombie.js:768-833`, `src/map.js:919-922`, `src/map.js:1147-1223`: breaching openings, their health, boards per side; a jolt each hit (game #185)
- `src/entities/zombie.js:244-269`, `src/entities/zombie.js:719-807`, `src/map.js:1205-1274`: a door the way in, the remembered one first, a shut window battered only to see in, never passed; no way in, a fence struck or a search
- `src/map.js:1125-1135`: a door and a window always have health, whatever their material
- `src/entities/zombie.js:710-718`, `src/entities/zombie.js:742-755`, `src/entities/zombie.js:861-940`, `src/map.js:1070-1135`, `data/tuning.json:12`, `data/tuning.json:15-17`, `data/tuning.json:180-181`: a fence struck, a gate first; its hit points, a strike on the bite's cooldown, a crowd only more strikers (game #185)
- `src/entities/zombie.js:873-898`, `src/entities/zombie.js:317-325`, `src/entities/zombie.js:239-242`, `data/tuning.json:17`, `data/tuning.json:34`: a striking one bites a player in reach across the fence, `fenceBiteExtra` further (game #185); it gives up after `pressGiveUp` unseen only on a player last seen outside a room, with no siege (game #171)
- `src/entities/zombie.js:671-683`, `src/visibility.js:12-45`: a bite needs the contact distance and a clear line, which an open window passes (game #171)
- `src/clock.js:12`, `src/entities/zombie.js:480-537`, `src/entities/zombie.js:621-629`, `src/entities/zombie.js:941-1008`, `data/tuning.json:36-38`: the siege: from dusk on a player seen inside, the openings remembered (the door on the line from the last sighting outside, else the nearest, `src/entities/zombie.js:509-515`, game #171), waiting about the house, ended at its dawn; no sleep within `siegeSleepRadius`
- `src/entities/zombie.js:58`, `src/entities/zombie.js:569-574`: the groan, never from the floor
- `src/ui/speech.js:67-88`, `data/tuning.json:184`: a groan from one hidden by the dark goes to the log, not a bubble (game #150), only within `groanRadius` and once in `groanGap` (game #189); one hidden only by a canopy, none (game #173)
- `src/entities/zombie.js:119-122`, `src/entities/zombie.js:169-178`, `src/entities/zombie.js:561-568`: death (`damageZombie` calls `kill`, which holds the fall) and the still body
- `src/entities/zombie.js:101-105`, `src/entities/zombie.js:129`, `src/combat.js:399-416`: a floored zombie takes finishers while it lies, plain damage while it rises
- `src/sight.js:18-34`, `src/ui/zombie-bars.js:60`, `src/render/entities.js:267`, `src/interact.js:1926-1933`: seen in the dark near you, to your torch's reach, or in light; one not seen has no bar or outline and cannot be pointed at; nothing in a blow reads it (game #150)
- `src/main.js:1755-1759`: the bite's words on the victim's client alone
- `src/entities/zombie.js:505-508`: the siege held on the last player seen inside
- `src/settings.js:12-13`, `src/settings.js:71-72`, `src/rules.js:14-15`, `src/entities/zombie.js:367-372`, `src/entities/zombie.js:410-424`, `src/entities/zombie.js:431`, `src/entities/zombie.js:593-605`, `src/entities/villager.js:240-278`: Zombie aggro, Zombies attack villagers, an immune villager never prey nor harmed (game #187), a bitten villager turning
- `src/game.js:175-201`, `src/map.js:1723-1735`, `data/tuning.json:183`: the Starting population's factor on the map's dead and each wild chunk's, read once when the world is made
- `src/burn.js:28-54`, `src/entities/zombie.js:180-190`, `src/combat.js:418-423`, `src/archery.js:292`: burning: who sets it (a torch only while lit), a burn taking health alone, a corpse burning on
- `src/sound-cues.js`, `data/sounds.json`: the sound it makes, heard as this client sees it (game #381 and #386)
- `src/entities/zombie.js:684-698`, `src/entities/zombie.js:893-897`: a waiter with a shut fence between it and its target strikes the fence; the press hands back to the chase only one that may bite (game #389)
- `src/entities/zombie.js:151-165`, `src/figure/rig.js:21`, `data/poses.json`: a staggering hit reels, one that does not flinches (game #389)
- `src/ui/zombie-bars.js:17-19`, `src/highlight.js:32-34`: a downed one's bar over its body, and its outline under the pointer (game #390)
- `src/entities/zombie.js:639-643`, `data/tuning.json`: the closing burst, `burstSpeed` within `burstRange` of a target it sees in the chase; 1 is off; the player's speeds against it from `player.speed`, `blow.swingMove`, `bow.drawSpeed`, the shield's `moveMult`, `bow.braceMove` (game #394)
- `src/entities/zombie.js:865-871`, `src/entities/zombie.js:923-929`: a gate opened while they strike it, and they walk through (game #397)
- `src/entities/zombie.js:126-136`, `src/entities/zombie.js:559-591`, `src/entities/zombie.js:612-617`, `src/entities/zombie.js:638-648`, `data/tuning.json:24-27`: sight-pull, the call on a first-hand turn to a player and who answers (game #504, at 5eb40e6)
- `src/sound-cues.js:272-292`: the moan as one turns from calm to closing in (game #436)
- `src/game.js:852-861`: animals are in none of the dead's lists; deer and rabbits run from the standing dead (game #452)
