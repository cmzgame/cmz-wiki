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
- A raised [[Wooden shield]]: {{n items.shield.shield.moveMult}} of your speed.

Nobody passes through a window; a door is the only way through a wall (see [[Openings]]). You cannot sprint while carrying a prop. Right-click "Walk here", and the walk to any action's target, use the same speeds; any movement key stops it.

### Needs

Four slow needs run from full down to empty, each shown as a moodle that worsens in stages:

- [[Hunger]]: fed by [[Food]]. Empty, it costs health.
- [[Thirst]]: fed by a [[Waterskin]], some foods, a well, or any [[Water]]. Empty, it costs health.
- [[Tiredness]]: restored only by [[Sleep]] in a bed. It never kills, but it stops sprinting and then healing.
- [[Health]] comes back by itself only while you are fed, watered, not [[Bleeding]], and not falling asleep.

One more moodle is not a need: [[Infection]], a marker from bites that does nothing yet. [[Bleeding]], from bites, and [[Sick]], from tainted water, are debuffs, shown in a row of their own at the top right with their time left. All of the needs switch off with the [[Survival]] setting.

### The starter kit

Every new character, including one made after a death and every friend who joins, starts with the world's kit. The default kit, the game's own data:

{{starting-kit}}

The torch is not lit: `T` lights it with the tinderbox (see [[Torch]]). The head and glove slots start empty. A better belt, gloves, and a hat are each placed once in the valley: the [[Leather belt]] and [[Work gloves]] on [[Hollow Farm]]'s tool rack, the [[Onion-head Hat]] on its scarecrow (see [[Drop tables]]). Clothing carries no armour or warmth.

A world can change the kit when it is made, at the Sandbox step of New world, for testing (see [[World rules]]): **Extra starting items** adds items to the default kit, and **Dev bag** starts everyone wearing the [[Developer Bag]] in place of the sack. Both are chosen once, never changed after, and hold for every character the world makes.

{{devonly note="In a world made with the Dev chest (on by default at New world), a chest of every weapon, two Developer Bags, and bandages stands beside the spawn."}}

## Numbers

- Health: {{n tuning.player.hp}}
- Stamina: {{n tuning.player.stamina}}
- Walking speed: {{n tuning.player.speed tiles a second}}
- Sprint: ×{{n tuning.player.sprintMult}}
- Body radius: {{n tuning.player.radius tiles}}
- For comparison: the dead walk at {{n tuning.zombie.speed tiles a second}}, villagers at {{n tuning.villager.speed}}

## With friends

Every friend has their own survivor with their own health, stamina, and needs, and the world's starter kit, made by the host with the world's extra items and dev bag if it has them. The world's rules, [[Survival]] among them, are the host's. Time runs fast during [[Sleep]] only while every living player is asleep.

## See also

- [[Health]], [[Stamina]], [[Hunger]], [[Thirst]], [[Tiredness]], [[Sleep]]
- [[Bleeding]], [[Infection]], [[Death]], [[Survival]]
- [[Moodles]], [[Inventory]], [[Combat]], [[Controls]], [[Characters]]

## Sources

<!-- sources at 3c0a243 -->
- `data/tuning.json:45-46`: health and stamina
- `src/ui/hud.js:32-123`: the portrait, the name, the bars, the Hands line, the percent; the clock and the moodles placed
- `src/combat.js:155`, `src/combat.js:324`, `src/combat.js:396`, `data/combat.json:2,9`: swings, shoves, and blocks spend stamina
- `data/tuning.json:43-44`, `data/tuning.json:47`: walking speed, body radius, sprint multiplier
- `src/entities/player.js:344-346`, `src/entities/player.js:360-364`: keyed movement snapped to the eight directions
- `src/entities/player.js:369`: facing follows the aim, not the walk
- `data/sprites/floor_water_shallow.json`, `data/sprites/floor_water.json`, `src/map.js:1438`, `src/map.js:1463-1466`: shallow water's speed and deep water's bar
- `data/combat.json` `bow.drawSpeed`, `bow.braceMove`: the draw and brace slowdowns
- `data/items.json:37`: the raised shield's slowdown
- `src/player-controller.js:52`: the multiplier picked in one place
- `src/map.js:817-825`: no body passes a window
- `src/entities/player.js:351`: no sprint while carrying
- `src/entities/player.js:267-268`, `src/entities/player.js:343-346`: auto-walk uses the same speeds; a movement key cancels it
- `src/entities/player.js:138-177`: the needs, their damage, and regeneration's conditions; the needs held full with Survival off, regeneration still running
- `src/moodles.js:22-80`, `src/debuffs.js:19-30`: four moodles now; bleeding a debuff (game #315, at 8af4eed)
- `data/kit.json`: the default starting kit, what is worn, in the sack, and in hand, the torch out and a tinderbox in the sack
- `src/game.js:100`, `src/game.js:135-139`, `src/game.js:454`, `src/kit.js:62-75`: the kit given at create and to every added player, a guest's too, with the world's extra items and dev bag
- `src/rules.js:21-22`, `src/rules.js:30`, `src/settings.js:70-72`: Extra starting items and Dev bag, world rules chosen once at the Sandbox step
- `data/items.json:32`: the rope belt's two slots
- `data/loot.json:2`: better belts, bags, hoods, and gloves in chests
- `data/items.json`: no clothing has armour or warmth
- `data/loot.json:18`, `src/settings.js:33`, `src/game.js:92-98`: the dev chest, chosen at New world
- `data/tuning.json:4`, `data/tuning.json:81`: the dead's and villagers' speeds
- `src/rules.js:44-49`: a guest uses the host's rules
- `src/game.js:348-358`: time runs fast only while every living player sleeps
- `data/loot.json`, `tools/mapgen/valley.py`: where it is found, a table per kind of container, gear placed once (game #399, at ce21ffc)
