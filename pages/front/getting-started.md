---
title: Getting started
categories: [Guides]
aliases: [New player guide, First day]
summary: Your first day in the valley: what you start with, what to do first, and how not to die.
---

This guide walks through a first day in [[The valley]], in the order you will meet things. Every system it mentions has its own page.

## Making a world

The game opens on its site. Press **Play** on its menu (or `Enter` on Home) to open the [[Worlds]] page, then **New world** to make a world: a name, then how it plays, with the [[World rules|world rules]] at their defaults unless you change them. Each world asks you to make a [[Characters|character]] for it from an [[Identities|identity]]: a name and a look kept in your browser. Your character belongs to that world alone. A friend can join you later; see [[Multiplayer]].

## Where you start

You wake at hour {{n census.constants.clock.START_HOUR}} of day one (in the morning) in [[Your cottage]], at the southern end of the village: two rooms, a fireplace, a bed, chests, a well, and a fenced plot of crops. A full day lasts {{n census.constants.clock.DAY_LENGTH}} seconds of real time (see [[The day]]).

You start with plain clothes, a [[Rope belt]], a [[Burlap sack]] on your back holding a [[Waterskin]], a [[Loaf of bread]], [[Apple|apples]] and a [[Plank]], and a [[Torch]] in your hand. Press **Tab** for your bag and **C** for the character screen. The game does not stop while they are open, and you can fight with them up; only the pause menu (**Escape** with nothing open) stops it.

## The first things to do

1. **Look round the cottage.** Right-click anything for what you can do with it; **E** does the nearest simple thing. Search the [[Containers|chests]].
2. **Learn the doors and shutters.** Tap **E** at a door or a window to open or shut it. Nobody passes through a window, you or the dead: a door is the only way in or out, and the dead who see you through a window come round to the door. Shut shutters block sight both ways. See [[Openings]].
3. **Keep fed and watered.** [[Hunger]] and [[Thirst]] fall over the day and show as [[Moodles]] down the right of the screen. Drink at the well or any water, and fill your waterskin there.
4. **Mind your fires.** A fire burns its fuel down over game hours and goes out. Feed it [[Log|logs]] from its menu. See [[Fire]].
5. **Sleep in a bed, indoors,** when you are tired. The night passes quickly while you sleep, and nothing wakes you, so shut the door first. See [[Sleep]].

## The dead

The dead walk slowly, see you by the light you stand in, and remember only where they last saw you. At night they notice a flame from far away, so a torch in your hand is a lantern for them too. Left-click swings what is in your main hand; see [[Combat]] and [[The dead]].

{{planned doc=30 step=4 note="Farming: tilling, planting, watering, and harvesting the plot by your cottage."}}

## See also

- [[Controls]] for every key.
- [[Crafting]] for the workbench and the other stations.
- [[Building]] for walls, doors, and windows of your own.

## Sources

<!-- sources at 9205ad7 -->
- `index.html:51`, `src/ui/screens.js:737-750`: the site's Play opens the Worlds page, New world on it (game commit 02dfcc2)
- `src/main.js:295-321`, `src/ui/screens.js:331-336`, `src/ui/screens.js:372-391`, `src/identities.js:38-72`: a new world, its character made from an identity kept in the browser (game commit 02dfcc2)
- `src/game.js:171-176`: each world's save holds its own characters
- `src/clock.js:18`, `src/clock.js:5`: the start hour and the day's length
- `data/maps/valley.json:5121-5124`, `data/maps/valley.json:1139-1610`: the spawn in your cottage: two rooms, the fireplace, the bed, chests, the well, the fenced plot
- `src/game.js:100-115`: the starter kit
- `src/main.js:741-749`: Tab for the bag, C for the character screen
- `src/main.js:918-1001`: an open panel stops nothing in the world (game commit 57df52e)
- `src/main.js:610-646`, `src/interact.js:946-970`: right-click for the menu; E for the nearest simple action
- `src/interact.js:323-339`: searching a chest
- `src/interact.js:443-472`, `src/map.js:1019-1032`: tap E to open or shut; shut shutters block sight
- `src/map.js:600-609`, `src/entities/zombie.js:211-233`: no one passes a window; the dead go for a door (game commit 82106de)
- `src/entities/player.js:127-128`, `src/moodles.js:23-126`, `src/ui/moodles.js:141-177`: hunger and thirst fall and show as moodles down the right
- `src/interact.js:537-576`: drinking and filling at the well or any water
- `src/map.js:87-117`, `src/interact.js:350-379`: fires burn down and are fed from their menu
- `src/entities/player.js:193-210`, `src/entities/player.js:165-191`, `src/game.js:254-264`: sleep in a bed indoors; time runs fast; nothing wakes you
- `data/tuning.json:4`, `data/tuning.json:36`: the dead walk at a third of your speed
- `src/entities/zombie.js:232-237`, `src/entities/zombie.js:337-353`, `src/entities/zombie.js:295-311`: they see by the light on you, remember where they last saw you, and notice a flame at night
- `src/buttons.js:24-44`, `src/player-controller.js:17-55`: left-click uses the main hand
