---
title: Interface
categories: [Interface]
aliases: [HUD, UI, Health bar, Stamina bar, Clock, Prompt, Context menu, Actions menu, Cursor, Debug corner]
summary: What is on the screen while playing: the portrait and bars, the clock, the moodles, the swing bars, the prompt, menus, panels, and the cursor.
---

The **interface** is everything drawn over the world: the bars, the clock, the icons, the menus, and the panels. It is drawn at its own size, set by **Interface size** in [[Settings]], separately from the world's zoom. It is hidden until a [[Worlds|world]] is chosen.

## Top left: you

- A **portrait** cut from your own figure, head to belt, so it shows what you wear.
- Your **name**.
- **Health**: a labelled bar ("Health" with the current and the most, {{n tuning.player.hp}} at full). It is green when high, yellow lower, red when low. See [[Health]].
- **Stamina**: a labelled bar in percent, out of {{n tuning.player.stamina}}. It pulses gold when a block lands and red when a guard breaks. See [[Stamina]].
- **Hands**: what is in the main and off hand ("–" for an empty hand; a two-handed item is named once).

## Top centre: the clock

"Day N, HH:MM". A day lasts {{n census.constants.clock.DAY_LENGTH}} seconds of game time. Short messages float under the clock and are copied into the log.

## Right edge: moodles

Five icons always shown, in a fixed order: bleeding, infection, hunger, thirst, tiredness. Each is green when fine and changes as it worsens; an icon pops when it gets worse. Hovering shows its name and a line about it. See [[Moodles]].

## Over the world

- **The prompt**: over the target of the nearest simple action, "E: action" (for example "E: Put down" while carrying furniture). During a timed action it shows the action with a progress bar. It is greyed when the action is not possible.
- **Health bars over heads**: a small bar over any hurt, living zombie in sight, and over your own head while you are hurt.
- **The exposure bar**: a red bar over your head for the moment in which a blow against you is amplified. See [[Combat]].
- **Speech bubbles** over anyone who speaks, and **names** over other players (see [[Log and chat]], [[Multiplayer]]).

## Bottom centre: the swing bars and the belt

- **Swing bars**: two gold bars above the belt, the main hand on top and the off hand below. They are empty at rest and fill while a swing recovers. The **Swing timer** setting hides them.
- **The belt**: while a belt is worn, its slots show here; keys `1` to `4` use them.

## Bottom left: the log

Every message and every line said within sight, with the chat box at its foot. See [[Log and chat]].

## Menus

- **The actions menu**: a tap of the right mouse button opens a menu of everything you can do to what is under the cursor, with **Build** always last. A greyed entry cannot be done now. A click outside closes it without acting on the world, as do `Escape`, `Tab`, and walking.
- **Item menus**: right-clicking an item in a panel offers what can be done with it: Use, Equip, Wear, Apply, Eat, Drink, Split, Store in or Take, Drop, Rotate, and so on. Right-clicking a slot offers Use, Take off, Unequip, Put in bag, and Drop. See [[Inventory]].

The browser's own right-click menu is switched off everywhere except over the debug corner.

## Panels

- **The bag** (`Tab`) at the top right and **the character panel** (`C`) with the worn slots and both hands. Each opens and closes on its own, has an X, and can be dragged by its header to a place it remembers. An open container is its own panel beside the bag and closes when you walk more than {{n tuning.world.containerCloseDist}} tiles away. A bag cell is {{n census.constants.view.BASE_CELL}} interface pixels. Carrying furniture closes the panels. See [[Inventory]].
- **The station panel**: using a station opens one panel under the clock with its recipes, the chosen recipe's ingredients, a count, **Make**, the queue, and **Output**. See [[Crafting]].
- **The build palette** (`N`): a list on the left of what can be built and its cost, greyed when you are short, and a Remove row. See [[Building]].

## The cursor

The **Cursor** setting picks the system's own pointer, a hand, a severed hand, or a zombie hand. With the hand, the pointer turns into the zombie hand over one of the living dead.

## The debug corner

{{devonly note="The debug corner is for testing; the Debug corner setting hides it."}}

Under the portrait, a block of text: frames a second, your position and needs, the clock and the light, the chunk and room, timings, the world's counts, and the wire's traffic when playing with friends.

## See also

- [[Controls]], [[Settings]], [[Screens]], [[Log and chat]], [[Moodles]]
