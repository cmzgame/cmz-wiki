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

## Sources

<!-- sources at 9205ad7 -->
- `src/view.js:84-88`, `src/view.js:138`: the interface's own size, Interface size
- `style.css:1108`: the HUD hidden while no world is chosen
- `src/ui/hud.js:21-22`: the portrait cut from your own sprite, head to belt
- `src/ui/hud.js:66`, `src/ui/hud.js:92-106`: the name, the health bar's colours, the stamina pulses, the hands line and its dash
- `data/tuning.json`: `player.hp` and `player.stamina`
- `src/ui/hud.js:118-122`, `src/clock.js:5`, `src/clock.js:88-94`: the clock, its format, the day's length
- `src/ui/prompt.js:60`, `src/ui/log.js`: messages float and go to the log
- `src/moodles.js:23-115`, `src/ui/moodles.js`, `style.css:317-321`: the five moodles on the right, their order, stages, names
- `src/ui/prompt.js:41`, `src/interact.js:852-880`: the prompt, "E: Put down", the progress bar, greyed
- `src/ui/zombie-bars.js:14-20`: health bars over hurt zombies and over you
- `src/ui/swing-timer.js:16`, `src/ui/swing-timer.js:69`: the exposure bar over your head
- `src/ui/speech.js`, `src/ui/names.js`: bubbles and names over heads
- `style.css:561-565`, `src/ui/swing-timer.js:1-9`: the two swing bars at bottom centre
- `src/settings.js:49`: the Swing timer setting
- `src/interact.js:928-932`, `style.css:1321-1325`: the belt's slots and keys 1 to 4
- `src/main.js:610-646`, `src/ui/context-menu.js`, `src/buttons.js:10`: the actions menu, Build last, greyed entries, what closes it
- `src/interact.js:1015-1147`, `src/ui/inventory-panel.js:674-703`: the item and slot menus
- `src/input.js:84-87`: no browser context menu except over the debug corner
- `src/ui/inventory-panel.js`, `src/main.js:727-773`: the bag and character panels, X, dragging, containers closing at a distance
- `data/tuning.json`: `world.containerCloseDist`
- `src/view.js:118`: `BASE_CELL`
- `src/ui/station-panel.js`, `style.css:887-891`: the station panel under the clock
- `src/ui/build-palette.js`, `src/main.js:700-721`: the build palette
- `src/ui/cursor.js:1-36`, `src/settings.js:29`, `src/settings.js:56`: the four cursors and the zombie hand
- `src/main.js:1112-1122`, `style.css:81-84`, `src/settings.js:11`: the debug corner, its place, and its contents
