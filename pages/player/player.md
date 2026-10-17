---
title: Player
categories: [Player]
aliases: [You, Survivor, The player]
summary: Your survivor in the valley: health, stamina, speed, the four needs, and what you start with.
---

The **player** is your survivor: one person in the valley, made from an [[Identities|identity]] and kept for life by that [[Worlds|world]]. You see what your character can see ([[Sight]]), walk where they can walk, and keep them alive by eating, drinking, sleeping, and staying out of reach of [[The dead]].

## How it works

### Health and stamina

You have {{n tuning.player.hp}} [[Health]], shown as a bar at the top left with the current and the maximum. At zero you [[Death|die]]. Below it is [[Stamina]], {{n tuning.player.stamina}} at most, shown as a percent: sprinting, swinging, shoving, and blocking spend it, and it comes back when you stop.

The top left also shows a portrait of your character, your name, and a "Hands" line naming what is in your main hand and your off hand. The clock is at the top centre, and the [[Moodles]] run down the right edge.

### Moving

You walk at {{n tuning.player.speed tiles a second}} in the eight isometric directions; the keys snap to them. Hold Shift to sprint, at {{n tuning.player.sprintMult}} times walking speed, while [[Stamina]] lasts. Your facing follows the mouse, not the walk.

Some things slow you:

- Shallow [[Water]]: {{n sprites.floor_water_shallow.walk}} of your speed. Deep water cannot be entered at all.
- A drawn bow: {{n combat.bow.drawSpeed}} of your speed, or {{n combat.bow.braceMove}} while braced (see [[Archery]]).
- A raised [[Shield]]: {{n items.shield.shield.moveMult}} of your speed.

Nobody passes through a window; a door is the only way through a wall (see [[Openings]]). You cannot sprint while carrying a prop. Right-click "Walk here", and the walk to any action's target, use the same speeds; any movement key stops it.

### Needs

Four slow needs run from full down to empty, each shown as a moodle that worsens in stages:

- [[Hunger]]: fed by [[Food]]. Empty, it costs health.
- [[Thirst]]: fed by a [[Waterskin]], some foods, a well, or any [[Water]]. Empty, it costs health.
- [[Tiredness]]: restored only by [[Sleep]] in a bed. It never kills, but it stops sprinting and then healing.
- [[Health]] comes back by itself only while you are fed, watered, not [[Bleeding]], and not falling asleep.

Two more moodles are not needs: [[Bleeding]], from bites, and [[Infection]], a marker from bites that does nothing yet. All of the needs switch off with the [[Survival]] setting.

### The starter kit

<!-- typed: the starter kit's counts are written in src/game.js giveStarterKit, not in data -->

Every new character, including one made after a death and every friend who joins, starts with the same kit:

- Equipped: a [[Tunic]], [[Breeches]], [[Boots]], a [[Rope belt]] ({{n items.belt.beltSlots}} belt slots), and a [[Burlap sack]] on the back.
- In the sack: a full [[Waterskin]], a [[Loaf of bread]], two [[Apple|apples]], a [[Plank]], and a [[Tinderbox]].
- In hand: a [[Torch]], not lit. `T` lights it with the tinderbox (see [[Torch]]).

The head and glove slots start empty. Better belts and bags, hoods, and gloves turn up in chests (see [[Inventory]]). Clothing carries no armour or warmth.

{{devonly note="In a world made with the Dev chest (on by default at New world), a chest of every weapon, two Developer Bags, and bandages stands beside the spawn."}}

## Numbers

- Health: {{n tuning.player.hp}}
- Stamina: {{n tuning.player.stamina}}
- Walking speed: {{n tuning.player.speed tiles a second}}
- Sprint: ×{{n tuning.player.sprintMult}}
- Body radius: {{n tuning.player.radius tiles}}
- For comparison: the dead walk at {{n tuning.zombie.speed tiles a second}}, villagers at {{n tuning.villager.speed}}

## With friends

Every friend has their own survivor with their own health, stamina, and needs, and the same starter kit. The world's rules, [[Survival]] among them, are the host's. Time runs fast during [[Sleep]] only while every living player is asleep.

## See also

- [[Health]], [[Stamina]], [[Hunger]], [[Thirst]], [[Tiredness]], [[Sleep]]
- [[Bleeding]], [[Infection]], [[Death]], [[Survival]]
- [[Moodles]], [[Inventory]], [[Combat]], [[Controls]], [[Characters]]

## Sources

<!-- sources at 2ea0d24 -->
- `data/tuning.json:41-42`: health and stamina
- `src/ui/hud.js:32-123`: the portrait, the name, the bars, the Hands line, the percent; the clock and the moodles placed
- `src/combat.js:155`, `src/combat.js:324`, `src/combat.js:396`, `data/combat.json:2,9`: swings, shoves, and blocks spend stamina
- `data/tuning.json:39-40`, `data/tuning.json:43`: walking speed, body radius, sprint multiplier
- `src/entities/player.js:326-328`, `src/entities/player.js:342-346`: keyed movement snapped to the eight directions
- `src/entities/player.js:351`: facing follows the aim, not the walk
- `data/sprites/floor_water_shallow.json`, `data/sprites/floor_water.json`, `src/map.js:1425`, `src/map.js:1450-1453`: shallow water's speed and deep water's bar
- `data/combat.json` `bow.drawSpeed`, `bow.braceMove`: the draw and brace slowdowns
- `data/items.json:36`: the raised shield's slowdown
- `src/player-controller.js:52`: the multiplier picked in one place
- `src/map.js:825-833`: no body passes a window
- `src/entities/player.js:333`: no sprint while carrying
- `src/entities/player.js:249-250`, `src/entities/player.js:325-328`: auto-walk uses the same speeds; a movement key cancels it
- `src/entities/player.js:121-160`: the needs, their damage, and regeneration's conditions; the needs held full with Survival off, regeneration still running
- `src/moodles.js:23-102`: the five moodles
- `src/game.js:92`, `src/game.js:104-120`, `src/game.js:428`: the starter kit, its torch out and a tinderbox in the sack, given at create and to every added player
- `data/items.json:31`: the rope belt's two slots
- `data/loot.json:2`: better belts, bags, hoods, and gloves in chests
- `data/items.json`: no clothing has armour or warmth
- `data/loot.json:6`, `src/settings.js:31`, `src/game.js:84-90`: the dev chest, chosen at New world
- `data/tuning.json:4`, `data/tuning.json:68`: the dead's and villagers' speeds
- `src/rules.js:38-43`: a guest uses the host's rules
- `src/game.js:323-333`: time runs fast only while every living player sleeps
