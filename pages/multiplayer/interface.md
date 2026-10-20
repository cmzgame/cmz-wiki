---
title: Interface
categories: [Interface]
aliases: [HUD, UI, Health bar, Stamina bar, Prompt, Context menu, Actions menu, Cursor, Debug corner]
summary: What is on the screen while playing: the portrait and bars, the clock, the moodles, the swing bars, the prompt, menus, panels, and the cursor.
---

The **interface** is everything drawn over the world: the bars, the clock, the icons, the menus, and the panels. It is drawn at its own size, set by **Interface size** in [[Settings]], separately from the world's zoom. It is hidden whenever no [[Worlds|world]] is in, before one is chosen and after one is left, the chat box and the debug corner with it; the game is then its site, a page of menus with nothing of a world drawn (see [[Screens#The site|Screens]]).

## Top left: you

- A **portrait** cut from your own figure, head to belt, so it shows what you have on.
- Your **name**.
- **Health**: a labelled bar ("Health" with the current and the most, {{n tuning.player.hp}} at full). It is green when high, yellow lower, red when low. See [[Health]].
- **Stamina**: a labelled bar in percent, out of {{n tuning.player.stamina}}. It pulses gold when a block lands and red when a guard breaks. See [[Stamina]].
- **Hands**: what is in the main and off hand ("–" for an empty hand; a two-handed item is named once).

## Top centre: the clock

"Day N, HH:MM". A day lasts {{n census.constants.clock.DAY_LENGTH}} seconds of game time. Short messages float under the clock and are copied into the chat log.

## Right edge: moodles

Five icons always shown, in a fixed order: bleeding, infection, hunger, thirst, tiredness. Each is green when fine and changes as it worsens; an icon pops when it gets worse. Hovering shows its name and a line about it. See [[Moodles]].

## Over the world

- **The prompt**: over the target of the nearest simple action, "E: action" (for example "E: Put down" while carrying furniture). During a timed action it shows the action with a progress bar. It is greyed when the action is not possible.
- **Health bars over heads**: a small bar over any hurt, living zombie in sight, and over your own head while you are hurt. One of the dead hidden by the dark has none (see [[Sight#Darkness|Sight]]).
- **The exposure bar**: a red bar over your head for the moment in which a blow against you is amplified. See [[Combat]].
- **Speech bubbles** over anyone who speaks, and **names** over other players (see [[Chat log]], [[Multiplayer]]).

## Bottom centre: the swing bars and the belt

- **Swing bars**: two gold bars above the belt, the main hand on top and the off hand below. They are empty at rest and fill while a swing recovers. The **Swing timer** setting hides them.
- **The belt**: while a belt is equipped, its slots show here; keys `1` to `4` use them.

## Bottom left: the chat log

Every message and every line said within sight, with the chat box at its foot. See [[Chat log]].

## Menus

- **The actions menu**: a tap of the right mouse button opens a menu of everything you can do to what is under the cursor, with **Build** always last. A greyed entry cannot be done now. A click outside closes it without acting on the world, as do `Escape`, `Tab`, and walking.
- **Item menus**: right-clicking an item in a panel offers what can be done with it: Use, Equip, Apply, Eat, Drink, Split, Store in or Take, Drop, Rotate, and so on. Right-clicking a slot offers Use, Equip or Unequip, Put in bag, and Drop, as the slot allows; a double-click on a slot runs its Equip or Unequip. See [[Inventory]].

The browser's own right-click menu is switched off everywhere except over the debug corner.

## Panels

The game goes on while any panel is open, and the world's keys and clicks still work (see [[Controls]]).

- **The bag** (`Tab`) at the top right and **the character panel** (`C`) with the clothing slots, each worn one drawn on you with an eye that hides it (see [[Clothing#Hiding a worn item|Clothing]]), and both hands. Each opens and closes on its own, has an X, and can be dragged by its header to a place it remembers. An open container is its own panel beside the bag and closes when you walk more than {{n tuning.world.containerCloseDist}} tiles away. A bag cell is {{n census.constants.view.BASE_CELL}} interface pixels. Carrying furniture closes the panels. See [[Inventory]].
- **The station panel**: using a station opens one panel under the clock with its recipes, the chosen recipe's ingredients, a count, **Make**, the queue, and **Output**. See [[Crafting]].
- **A conversation** (see [[Talk]]): talking to a villager opens a parchment panel at the bottom centre, above the belt, with their lines, **Click here to continue**, the questions to choose, and **That's all for now**, each a line of blue text to click.
- **The skills panel** (from the row of buttons): the skills in their groups, Combat, Gathering, and Production, each with its picture (the one that floats over a gatherer's head) and at its first level, with a note that skills are not built yet. It has an X; `Escape` closes it.
- **The map** (`M`; see [[Map]]): the land seen so far and every player, over the world.
- **The build palette** (`N`): a list on the left of what can be built and its cost, greyed when you are short, and a Remove row. See [[Building]].

## Floating numbers

Numbers rise over heads as things happen, like the combat text of other games:

- **A red number**, with a minus sign, over whoever is hit: you, one of the dead, a villager, or another player. The damage you take and the damage you deal both show, each over the head it was done to.
- **A green number**, with a plus sign, over whoever is healed. For now only [[Food]] heals with a number; healing by itself over time, burning, bleeding, and starving show none.
- **A skill's small picture and a number** over whoever gathers: the logs from chopping (Woodcutting), the ore and stone from mining (Mining), a fish caught (Fishing), and what is picked or harvested (Farming). Until skills are built, the number is how many things were gained. It is white with a black edge in the dark and black with a white edge in the light, so it is never taken for a red or a green one. Herbalism and Beastlore have no number yet.

Each rises about {{n tuning.floaters.riseTiles tile}} over {{n tuning.floaters.life seconds}}, fading over its last half, a little to one side. Several at once over one body start a line apart. A number shows only over a body in your sight, and never over one of the living dead hidden by the dark. **Floating numbers** in [[Settings]] hides them all.

With friends, the host notes each number where it happens and sends it to every player; each screen draws the ones in its own sight. Nothing of them is kept in the save.

## The row of buttons

At the bottom right is a row of buttons, each with a small picture: **Bag**, **Character**, **Skills**, **Map**, **Build**, **Chat**, **Settings**, and **Menu**. Each does what its key does (`Tab`, `C`, `M`, `N`, `Enter`), so a panel opened by its button closes by its key and the other way round; Skills opens the skills panel, Settings the settings screen, and Menu the pause menu, as `Escape` does with nothing open. Hovering over a button names it and its key. A button whose panel is open is drawn pressed in.

A click on the row is the row's, never the world's. Chat keeps anything already typed in the chat box; any other button hands the keys back to the world from the chat box. With a screen up the row does nothing. On a narrow screen, or with a large **Interface size**, the buttons are smaller and the skills panel stands higher, above the chat log.

## The cursor

The **Cursor** setting picks the system's own pointer, a hand, a severed hand, or a zombie hand. With the hand, the pointer turns into the zombie hand over one of the living dead, but not over one hidden by the dark.

## The debug corner

{{devonly note="The debug corner is for testing; the Debug corner setting hides it."}}

Under the portrait, a block of text: frames a second, your position and needs, the clock and the light, the chunk and room, timings, the world's counts, and the wire's traffic when playing with friends. It sits under everything else of the interface: an open panel or screen covers it.

## See also

- [[Controls]], [[Settings]], [[Screens]], [[Chat log]], [[Moodles]]

## Sources

<!-- sources at 9205ad7 -->
- `src/ui/inventory-panel.js`, `src/inventory.js`: the eye on a worn slot, hiding its look (game #243)
- `src/ui/talk-panel.js`, `src/ui/map-panel.js`: the conversation panel and the map (game #230, #235); the conversation on parchment with blue links (game #297, at 0362b89)
- `src/ui/nav-row.js:130-139`, `src/ui/nav-row.js:167-249`, `src/input.js:105-107`, `src/main.js:1503`, `style.css:2164-2270`: the row of buttons, each tapping its key, Skills, Settings, Menu, Chat keeping a draft, the skills panel, the narrow layout (game #298, at 0362b89)
- `src/main.js:918-1001`: an open panel stops no click, key, or zoom (game commit 57df52e)
- `src/view.js:84-88`, `src/view.js:138`: the interface's own size, Interface size
- `style.css:1104`, `src/main.js:100-104`, `src/main.js:1207-1209`, `src/ui/screens.js:187-200`: the interface, the chat box, and the debug corner hidden while no world is in; nothing of a world drawn, the game's stage hidden behind the site (game #80, #120, at 02dfcc2)
- `src/ui/hud.js:21-22`: the portrait cut from your own sprite, head to belt
- `src/ui/hud.js:66`, `src/ui/hud.js:92-106`: the name, the health bar's colours, the stamina pulses, the hands line and its dash
- `data/tuning.json`: `player.hp` and `player.stamina`
- `src/ui/hud.js:118-122`, `src/clock.js:5`, `src/clock.js:88-94`: the clock, its format, the day's length
- `src/ui/prompt.js:60`, `src/ui/log.js`: messages float and go to the chat log
- `src/moodles.js:23-115`, `src/ui/moodles.js`, `style.css:317-321`: the five moodles on the right, their order, stages, names
- `src/ui/prompt.js:41`, `src/interact.js:852-880`: the prompt, "E: Put down", the progress bar, greyed
- `src/ui/zombie-bars.js:14-20`: health bars over hurt zombies and over you
- `src/floaters.js:1-106`, `src/ui/floaters.js:1-121`, `data/tuning.json:73-95`, `src/entities/player.js:73`, `src/entities/player.js:101`, `src/entities/zombie.js:104`, `src/entities/villager.js:134`, `src/verbs.js:36`: the floating numbers: a hit, a heal from food, a gather by the verb's table, recorded on the host and drawn on every screen in sight, the dark rule for the living dead, the colours, the rise and fade (game #299, at 3331946)
- `src/ui/skill-icons.js`: the skills' pictures (game #299, at 3331946)
- `src/ui/zombie-bars.js:56`, `src/main.js:1082-1083`, `src/interact.js:1272-1279`: no bar and no zombie hand over one of the dead hidden by the dark (game commit 9d9a5b5)
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
- `style.css:69-75`: the interface over the debug corner, so a panel or screen covers it (game commit f2b8062)
