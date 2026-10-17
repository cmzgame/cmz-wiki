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

You start with plain clothes, a [[Rope belt]], a [[Burlap sack]] on your back holding a [[Waterskin]], a [[Loaf of bread]], [[Apple|apples]], a [[Plank]], and a [[Tinderbox]], and a [[Torch]] in your hand: the game's default kit, which a world made for testing can add to (see [[Player#The starter kit|the starter kit]]). The torch is not lit: press **T** to light it with the tinderbox, and again to douse it. A lit torch burns down, faster in your hand than on your belt, so douse it when you do not need it. Press **Tab** for your bag and **C** for the character screen. The game does not stop while they are open, and you can fight with them up; only the pause menu (**Escape** with nothing open) stops it.

## The first things to do

1. **Look round the cottage.** Right-click anything for what you can do with it; **E** does the nearest simple thing. Search the [[Containers|chests]]: the one in the main room holds your first tools, a [[Hatchet]], a [[Shovel]], and a [[Bucket]]. The hatchet chops down trees for [[Log|logs]] (see [[Trees]]) and splits a log into planks; the shovel digs up ripe potatoes; the bucket waters the garden. A tool works from anywhere on you, the bag included: an action that needs one names it when you lack it ("You need a smith's hammer."). Step outside and [[Wyn]], the guide, is by the door: poke them for a word.
2. **Learn the doors and shutters.** Tap **E** at a door or a window to open or shut it. Nobody passes through a window, you or the dead: a door is the only way in or out, and the dead who see you through a window come round to the door. Shut shutters block sight both ways. See [[Openings]].
3. **Keep fed and watered.** [[Hunger]] and [[Thirst]] fall over the day and show as [[Moodles]] down the right of the screen. Drink at the well or any water, and fill your waterskin there.
4. **Mind your fires.** A fire burns its fuel down over game hours and goes out. Feed it [[Log|logs]] from its menu; lighting one that is out also needs the tinderbox in your bag, or a lit torch. See [[Fire]].
5. **Farm the plot.** The garden's potatoes and cabbages grow on their own while their soil is wet; harvest a ready one with **E** for food and {{n crops.crops.potato.seeds}} seeds, and plant the seeds again in the tilled soil. Potatoes want the shovel on you; cabbages want a [[Belt knife]], which the weaver's chest holds. Water them from your waterskin or the bucket, and till more ground with a [[Hoe]]. See [[Farming]].
6. **Go further afield.** [[The joiner]]'s chest has a second hatchet and a [[Smith's hammer]], which building doors and windows, boarding up, and most of the workbench ask for; [[Hollow Farm]], past the end of the lane, has a hoe in its barn and a granary of every seed; the weaver's chest has flax seed and a knife for cloth (see [[Linen cloth]]); the smithy's chest has the first iron and charcoal for the forge and the anvil; and the iron workings and the quarry, out in the woods, have pickaxes and rocks to mine (see [[Mining]]).
7. **Sleep in a bed, indoors,** when you are tired. The night passes quickly while you sleep, and nothing wakes you, so shut the door first. If the dead saw you go in at night, they wait about the house until dawn, and you cannot sleep while they are near. See [[Sleep]].

## The dead

The dead walk slowly, see you by the light you stand in, and remember only where they last saw you; at night, the ones that see you go into a house remember the door and wait about it until dawn (see [[Breaking in#The siege|Breaking in]]). At night you see them only close by or where they stand in light, and a torch in your hand lets you see them farther; but they notice a flame from far away, so a lit torch is a beacon for them too. A shuttered room is dark by day as well; open its shutters to let the daylight in. Left-click swings what is in your main hand; see [[Combat]] and [[The dead]].


## See also

- [[Controls]] for every key.
- [[Crafting]] for the workbench and the other stations.
- [[Building]] for walls, doors, and windows of your own.

## Sources

<!-- sources at 3f11fdb -->
- `index.html:51`, `src/ui/screens.js:823-836`: the site's Play opens the Worlds page, New world on it
- `src/main.js:312-348`, `src/ui/screens.js:360-366`, `src/ui/screens.js:438-457`, `src/identities.js:38-72`: a new world, its character made from an identity kept in the browser
- `src/game.js:214-219`: each world's save holds its own characters
- `src/clock.js:18`, `src/clock.js:5`: the start hour and the day's length
- `data/maps/valley.json:11685-11688`, `data/maps/valley.json:1305-1778`: the spawn in your cottage: two rooms, the fireplace, the bed, chests, the well, the fenced plot
- `data/kit.json`, `src/game.js:132-136`: the starter kit, its torch out and a tinderbox in the sack
- `data/loot.json:6-7`, `data/loot.json:11`: your cottage's chest's hatchet, shovel, loaf, and bucket; the joiner's hatchet and hammer; the weaver's knife (game #222)
- `src/inventory.js:88-108`, `data/crops.json`: a tool carried anywhere, found by its verb, "You need a ..."; potatoes with a shovel, cabbages with a knife (game #222)
- `data/maps/valley.json:12288-12299`: Wyn by the door (game #220)
- `src/interact.js:1155-1176`, `src/game.js:513-539`, `data/tuning.json:92-93`: T lights and douses the torch with a tinderbox; a lit torch burns down, faster in hand than on the belt
- `src/main.js:899-907`: Tab for the bag, C for the character screen
- `src/main.js:1058-1141`: an open panel stops nothing in the world
- `src/main.js:763-802`, `src/interact.js:1120-1138`: right-click for the menu; E for the nearest simple action
- `src/interact.js:333-349`: searching a chest
- `src/interact.js:476-505`, `src/map.js:1342-1355`: tap E to open or shut; shut shutters block sight
- `src/map.js:817-826`, `src/entities/zombie.js:216-241`: no one passes a window; the dead go for a door
- `src/entities/player.js:145-147`, `src/moodles.js:23-126`, `src/ui/moodles.js:141-177`: hunger and thirst fall and show as moodles down the right
- `src/interact.js:678-717`: drinking and filling at the well or any water
- `src/map.js:98-129`, `src/interact.js:360-393`: fires burn down and are fed from their menu; lit with a flame carried (game #169)
- `src/entities/player.js:219-237`, `src/entities/player.js:191-217`, `src/game.js:342-352`: sleep in a bed indoors, refused while a siege is held on you; time runs fast; nothing wakes you
- `data/tuning.json:4`, `data/tuning.json:43`: the dead walk at a third of your speed
- `src/entities/zombie.js:308-313`, `src/entities/zombie.js:520-560`, `src/entities/zombie.js:371-387`: they see by the light on you, remember where they last saw you, and notice a flame at night
- `src/entities/zombie.js:421-478`, `src/entities/zombie.js:847-914`: at night the dead that see you go in remember the door and wait about the house until dawn
- `src/sight.js:18-29`, `src/light.js:155-168`: you see them at night near you, to your torch's reach, or in light; a shut room dark by day, an open one lit
- `src/buttons.js:24-44`, `src/player-controller.js:17-55`: left-click uses the main hand
