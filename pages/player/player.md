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
- A drawn bow: {{n census.constants.archery.tunables_drawSpeed}} of your speed, or {{n census.constants.archery.tunables_braceMove}} while braced (see [[Archery]]).
- A raised [[Shield]]: {{n items.shield.shield.moveMult}} of your speed.

Climbing through an open window takes {{n tuning.player.climbTime}} seconds. You cannot climb or sprint while carrying a prop. Right-click "Walk here", and the walk to any action's target, use the same speeds; any movement key stops it.

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

- Worn: a [[Tunic]], [[Breeches]], [[Boots]], a [[Rope belt]] ({{n items.belt.beltSlots}} belt slots), and a [[Burlap sack]] on the back.
- In the sack: a full [[Waterskin]], a [[Loaf of bread]], two [[Apple|apples]], and a [[Plank]].
- In hand: a lit [[Torch]].

The head and glove slots start empty. Better belts and bags, hoods, and gloves turn up in chests (see [[Inventory]]). Clothing carries no armour or warmth.

{{devonly note="While the dev chest setting is on (the default), a chest of every weapon, two Developer Bags, and bandages stands beside the spawn."}}

## Numbers

- Health: {{n tuning.player.hp}}
- Stamina: {{n tuning.player.stamina}}
- Walking speed: {{n tuning.player.speed tiles a second}}
- Sprint: ×{{n tuning.player.sprintMult}}
- Body radius: {{n tuning.player.radius tiles}}
- Window climb: {{n tuning.player.climbTime}} seconds
- For comparison: the dead walk at {{n tuning.zombie.speed tiles a second}}, villagers at {{n tuning.villager.speed}}

## With friends

Every friend has their own survivor with their own health, stamina, and needs, and the same starter kit. The world's rules, [[Survival]] among them, are the host's. Time runs fast during [[Sleep]] only while every living player is asleep.

## See also

- [[Health]], [[Stamina]], [[Hunger]], [[Thirst]], [[Tiredness]], [[Sleep]]
- [[Bleeding]], [[Infection]], [[Death]], [[Survival]]
- [[Moodles]], [[Inventory]], [[Combat]], [[Controls]], [[Characters]]
