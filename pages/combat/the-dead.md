---
title: The dead
categories: [Creatures, Combat]
aliases: [Zombie, Zombies, Dead, Undead]
summary: The dead who walk the valley: how they see, hunt, bite, break in, wait out a night about a house, and fall.
---

<table class="infobox"><caption>The dead</caption><tr><th>Health</th><td>{{n tuning.zombie.hp}}</td></tr><tr><th>Speed</th><td>{{n tuning.zombie.speed tiles a second}}</td></tr><tr><th>Sight</th><td>{{n tuning.zombie.sight tiles}} in full light</td></tr><tr><th>Bite</th><td>{{n tuning.zombie.damage}} damage</td></tr><tr><th>Wardrobes</th><td>{{n census.counts.zombieWardrobes}}</td></tr><tr><th>Placed in the valley</th><td>{{n census.counts.authoredDead}} (at Standard)</td></tr></table>

**The dead** are the village's former people, walking. They shamble, they look for the living, and they bite. Each is dressed from one of {{n census.counts.zombieWardrobes}} wardrobes, and their bodies push apart from one another. They never open doors and never break plain walls, but they strike doors, shutters, and fences down.

## Behaviour

### How many and where

[[The valley]]'s map places {{n census.counts.authoredDead}} of the dead. Every chunk of wild land grown beyond the map's edge brings between {{n valley.wild.zombiesPerChunk.0}} and {{n valley.wild.zombiesPerChunk.1}} more. Those are the numbers at the **Standard** Starting population; a world made at None has no dead at all, at Low fewer, and at High more, in the valley and in every wild chunk alike (see [[World rules]]). The level is set when the world is made and never rises with time.

Only the dead within {{n tuning.world.activeTiles tiles}} of some player (in a square around them) think and move; the rest stand still until a player comes near.

### Sight

The dead see the [[Player]] by the same rule the player sees by: a clear line (see [[Sight]]). How far they see depends on the [[Light]] where the player stands: {{n tuning.zombie.sight tiles}} in full light, falling to {{n tuning.zombie.sightDarkFraction}} of that when the player stands unlit. Each looks every {{n tuning.zombie.sightCheck seconds}}.

### Flames at night

At night, once one of the dead has not seen a player for {{n tuning.zombie.flamePatience seconds}}, it can be drawn by any lit flame in its line of sight, from as far as {{n tuning.zombie.flameRange tiles}} in full dark. A torch carried in hand counts as seeing its carrier. Two torches are seen {{n tuning.world.twoTorches}} times as far; a torch on the belt is seen from {{n tuning.world.beltLight}} times as far.

### Memory and search

The dead know only where they last saw the player. They walk to that spot. Arriving without seeing the player, or finding no path there, they search within {{n tuning.zombie.searchRadius tiles}} of it with short walks for {{n tuning.zombie.searchTime seconds}}, then give up and go idle, unless they hold a siege on that player (below). Nothing tells them where the player is through a wall. A hit tells a hunting zombie where the blow came from; for an arrow, where it was shot from.

Idle, they wander a little within their room, standing between walks.

### The bite

One of the dead that can see the player and comes within {{n tuning.zombie.contact tiles}} starts a bite, or a little further across a fence it is striking (see [[Fences]]). The bite lands at its strike if the player is still close and in its line of sight, for {{n tuning.zombie.damage}} damage. It then waits {{n tuning.zombie.cooldown seconds}} after the animation before the next.

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

The dead strike a fence that stands between them and a player they are hunting and cannot walk to, a gate first, with the attack they bite with: each strike takes {{n tuning.zombie.fenceStrike}} of a stretch's {{n tuning.world.fenceHp}} hit points, on the bite's cooldown, and at none left it bursts into splinters. One alone takes about two and a half minutes to bring a stretch down; a crowd is only more strikers, so it is faster, and a gate goes in half the time. One striking a fence still bites a player within reach across it, and reaches {{n tuning.zombie.fenceBiteExtra tiles}} further across it than its usual bite. It does not give up while it knows the player is in a room (it last saw them inside one, or holds a siege on them); only for a player it last saw out in the open does it give up, after {{n tuning.zombie.pressGiveUp seconds}} without seeing them. See [[Fences]].

### The siege

At night, from {{n census.constants.clock.DUSK_START}} o'clock, one of the dead that sees a player inside a room it is not in holds a siege on them until {{n tuning.zombie.siegeEndHour}} o'clock. It remembers the door it saw them go in by, the one on the line from where it last saw them outside to where it sees them now (else the door nearest them), and any window it saw them through, and breaks in there first. When its search finds no one it does not give up: it waits about the house, going between the openings it knows and breaking the shut ones. At {{n tuning.zombie.siegeEndHour}} o'clock it loses interest and wanders off, unless it sees someone. No more of the dead are called: a siege is only the ones that saw you. While one holding a siege on you is within {{n tuning.zombie.siegeSleepRadius tiles}}, you cannot [[Sleep|sleep]]. See [[Breaking in#The siege|Breaking in]].

### The groan

Now and then each of the dead says "{{n tuning.zombie.groanText}}" in a speech bubble, every {{n tuning.zombie.groanMin}} to {{n tuning.zombie.groanMax seconds}}. It does not groan while on the floor, and the fallen are silent. A groan from one you cannot see for the dark shows no bubble; within {{n tuning.sight.groanRadius tiles}} of you the [[Chat log]] says "Something groans in the dark." instead, at most once every {{n tuning.sight.groanGap seconds}}, and farther off nothing is heard. One behind a tree's canopy by day says nothing in the log.

### Burning

A lit [[Torch]]'s blow (by chance), the [[Fireball]], and a [[Fire arrow]] set the dead alight. A burning body loses a little health a second for a few seconds, with no push or stagger, so it keeps coming; one that dies burning burns on as a corpse. The dead do not notice the fire. See [[Burning]].

### Death

At no health one of the dead falls, and once the fall has played its body stays as a still picture that can be searched. See [[Corpses]].

## Fighting them

- Hits, pushes, staggers, and knockdowns are on [[Combat]] and [[Stagger and knockdown]].
- A floored zombie takes finishers until it is up.
- A stagger does not stop a bite already under way; the [[Flanged mace]], the [[Halberd]]'s thrust, the thrown [[Throwing spear]], and the [[Shove]] do.
- Light matters: in the dark they see the player from much less far, but a lit flame draws them at night.
- In the dark you see them only close by, to the reach of a torch you carry, or where they stand in light (see [[Sight#Darkness|Sight]]). One lost in the dark has no health bar or swing-target outline and cannot be clicked, but a swing or a shot still hits it.
- Doors, shutters, boards, and fences hold them off for a time (see [[Openings]], [[Fences]], and [[Building]]); a crowd breaks any of them faster than one alone.
- At night, being seen going into a house means the dead that saw you wait about it until dawn.

## With friends

Each of the dead picks the nearest player it can see; a fallen player draws no one. With none seen, it chases toward the nearest living player. The bite names its victim: the wound, the infection, and the words about them belong to that player alone. A siege is held on one player, the last the zombie saw inside, and stops only that player's sleep.

## Settings that change it

- **Zombie aggro** (default on): on, they behave as described here. Off, the dead never see the player and never hunt them; they wander, and a hit does not make them hunt. Flames do not draw them either. It is a [[World rules|world rule]], chosen at New world and changed from the pause menu; a browser that saved its settings before aggro came on by default offers its old choice first at New world.
- **Zombies attack villagers** (default off): on, one of the dead that sees no player hunts the nearest of the [[Villagers]] it can see, with the same sight and memory, and bites them. A villager flagged immune, the [[Innkeeper]] and the [[Priest]] in the valley, is never hunted or harmed, with the setting on or off. It works whatever Zombie aggro says: with aggro off the dead ignore players and still hunt villagers; with aggro on, players are always preferred when in sight. The two are separate settings on purpose. A bitten villager flinches for {{n tuning.villager.hurtTime seconds}}; one bitten to death gets up as one of the dead in what they wore.

- **Starting population** (default Standard), chosen when the world is made: None, Low, Standard, or High, how many of the dead the world starts with and each wild chunk brings.

## See also

- [[Corpses]]
- [[Combat]]
- [[Burning]]
- [[Openings]]
- [[Sight]]
- [[Light]]

## Sources

<!-- sources at 015eabc -->
- `data/tuning.json`: the `zombie` block (hp, speed, sight, sightDarkFraction, sightCheck, flame, search, contact, damage, cooldown, breach, noWayTime, groan) and `world.activeTiles`, `twoTorches`, `beltLight`, `villager.hurtTime`
- `data/wardrobes.json`: the dead's ten wardrobes
- `src/entities/zombie.js:37-76`, `src/entities/movement.js:70-75`: the body, separation
- `src/map.js:1279-1291`: wild chunks bring the dead per `data/maps/valley.json` (`wild.zombiesPerChunk`)
- `src/game.js:505-509`: only the dead in the active box think
- `src/entities/zombie.js:308-342`, `src/entities/zombie.js:522-532`: sight scaled by the light at the player, the look's interval, the nearest player seen
- `src/entities/zombie.js:371-387`, `src/entities/zombie.js:547-559`, `src/game.js:696`: flames at night, two torches, the belt
- `src/entities/zombie.js:520-560`, `src/entities/zombie.js:607-686`, `src/entities/zombie.js:753-779`, `src/entities/zombie.js:488-498`: memory, the walk to the last sighting, the search, giving up, or a siege
- `src/entities/zombie.js:111-116`: a hit tells a hunting zombie where the blow came from
- `src/entities/zombie.js:588`: idle wandering within the room
- `src/entities/zombie.js:915-928`, `src/game.js:388-396`: the bite, its landing, the guard and exposure
- `data/combat.json`: `bleed.chance`, `infection.chance`
- `src/bleed.js:59`, `src/infection.js:48`: a blocked bite neither wounds nor infects
- `src/entities/zombie.js:687-752`, `src/map.js:577-580`, `src/map.js:755-829`: breaching openings, their health, boards per side; a jolt each hit (game #185)
- `src/entities/zombie.js:217-242`, `src/entities/zombie.js:638-726`, `src/map.js:811-878`: a door the way in, the remembered one first, a shut window battered only to see in, never passed; no way in, a fence struck or a search
- `src/map.js:733-744`: a door and a window always have health, whatever their material
- `src/entities/zombie.js:629-637`, `src/entities/zombie.js:661-674`, `src/entities/zombie.js:780-846`, `src/map.js:678-744`, `data/tuning.json:12-15`, `data/tuning.json:111-112`: a fence struck, a gate first; its hit points, a strike on the bite's cooldown, a crowd only more strikers (game #185)
- `src/entities/zombie.js:790-805`, `src/entities/zombie.js:290-298`, `src/entities/zombie.js:212-215`, `data/tuning.json:29`: a striking one bites a player in reach across the fence, `fenceBiteExtra` further (game #185); it gives up after `pressGiveUp` unseen only on a player last seen outside a room, with no siege (game #171)
- `src/entities/zombie.js:607-622`, `src/visibility.js:12-48`: a bite needs the contact distance and a clear line, which an open window passes (game #171)
- `src/clock.js:12`, `src/entities/zombie.js:421-478`, `src/entities/zombie.js:562-570`, `src/entities/zombie.js:847-914`, `data/tuning.json:31-33`: the siege: from dusk on a player seen inside, the openings remembered (the door on the line from the last sighting outside, else the nearest, `src/entities/zombie.js:434-457`, game #171), waiting about the house, ended at its dawn; no sleep within `siegeSleepRadius`
- `src/entities/zombie.js:49`, `src/entities/zombie.js:511-515`: the groan
- `src/ui/speech.js:68-89`, `data/tuning.json:115`: a groan from one hidden by the dark goes to the log, not a bubble (game #150), only within `groanRadius` and once in `groanGap` (game #189); one hidden only by a canopy, none (game #173)
- `src/entities/zombie.js:107-110`, `src/entities/zombie.js:143-151`, `src/entities/zombie.js:502-509`: death and the still body
- `src/entities/zombie.js:118-128`: a floored zombie takes finishers
- `src/sight.js:18-34`, `src/ui/zombie-bars.js:56`, `src/render/entities.js:262`, `src/interact.js:1495-1502`: seen in the dark near you, to your torch's reach, or in light; one not seen has no bar or outline and cannot be pointed at; nothing in a blow reads it (game #150)
- `src/main.js:1630-1634`: the bite's words on the victim's client alone
- `src/entities/zombie.js:446-449`: the siege held on the last player seen inside
- `src/settings.js:12-13`, `src/settings.js:60-61`, `src/rules.js:14-15`, `src/entities/zombie.js:305-312`, `src/entities/zombie.js:345-367`, `src/entities/zombie.js:372`, `src/entities/zombie.js:534-546`, `src/entities/villager.js:131-168`: Zombie aggro, Zombies attack villagers, an immune villager never prey nor harmed (game #187), a bitten villager turning
- `src/game.js:141-170`, `src/map.js:1278-1291`, `data/tuning.json:114`: the Starting population's factor on the map's dead and each wild chunk's, read once when the world is made
- `src/burn.js:26-52`, `src/entities/zombie.js:156-163`, `src/combat.js:358-363`, `src/archery.js:275-277`: burning: who sets it (a torch only while lit), a burn taking health alone, a corpse burning on
