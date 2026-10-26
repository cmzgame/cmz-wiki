---
title: Interface
categories: [Interface]
aliases: [HUD, UI, Health bar, Stamina bar, Prompt, Context menu, Actions menu, Cursor, Debug corner]
summary: What is on the screen while playing: the portrait and bars (health, stamina, mana), the clock, the debuffs and buffs, the moodles, the swing bars, the prompt, menus, panels, and the cursor.
---

The **interface** is everything drawn over the world: the bars, the clock, the icons, the menus, and the panels. It is drawn at its own size, set by **Interface size** in [[Settings]], separately from the world's zoom. It is hidden whenever no [[Worlds|world]] is in, before one is chosen and after one is left, the chat box and the debug corner with it; the game is then its site, a page of menus with nothing of a world drawn (see [[Screens#The site|Screens]]).

## Top left: you

- A **portrait** cut from your own figure, head to belt, so it shows what you have on.
- Your **name**.
- **Health**: a labelled bar ("Health" with the current and the most, {{n tuning.player.hp}} at full). It is green when high, yellow lower, red when low. See [[Health]].
- **Stamina**: a labelled bar in percent, out of {{n tuning.player.stamina}}. It pulses gold when a block lands and red when a guard breaks. See [[Stamina]].
- **Mana**: a labelled blue bar under stamina, with its points and its most, out of {{n tuning.player.mana}}. It flashes, its edge red and its fill brighter, when a spell is refused for want of mana. See [[Mana]].
- **Hands**: what is in the main and off hand ("–" for an empty hand; a two-handed item is named once).

## Top centre: the clock

"Day N, HH:MM". A day lasts {{n census.constants.clock.DAY_LENGTH}} seconds of game time. Short messages float under the clock and are copied into the chat log.

## Top right: debuffs

A row of debuffs runs along the top of the screen from the top right corner, growing leftward: a harm with a time on it, each an icon in a dark red frame with its time left under it, whole seconds rounded up under a minute (`34s`) and whole minutes rounded up from a minute (`10m`). When it has more than one stack, the number of stacks shows in its corner. Hovering over one shows its card, in the style of the item cards: its name, "Debuff" with its stacks and time left, what it does, and what ends it. An icon goes when its debuff ends. The debuffs so far are [[Bleeding]], a red drop, and [[Sick]], from tainted water, a green face. A **buff**, a good effect with a time on it, sits in the same row framed in gold, its card saying "Buff" in place of "Debuff"; the one buff so far is the [[Stamina potion]]'s, a gold bolt. The row is always over the map but under the menus and screens. Each player's row is drawn from their own record, so a guest sees their own as the host sees theirs.

## Right edge: moodles

Four icons always shown, in a fixed order: infection, hunger, thirst, tiredness. Each is green when fine and changes as it worsens; an icon pops when it gets worse. Hovering shows its name and a line about it. See [[Moodles]].

## Over the world

- **The prompt**: over the target of the nearest simple action, "E: action" (for example "E: Put down" while carrying furniture). During a timed action it shows the action with a progress bar. It is greyed when the action is not possible.
- **Health bars over heads**: a small bar over any hurt, living zombie in sight, and over your own head while you are hurt. One of the dead lying downed has its bar just over the body, not at a standing head's height. One of the dead hidden by the dark has none (see [[Sight#Darkness|Sight]]).
- **The exposure bar**: a red bar over your head for the moment in which a blow against you is amplified. See [[Combat]].
- **Speech bubbles** over anyone who speaks, and **names** over other players (see [[Chat log]], [[Multiplayer]]).

## Bottom centre: the swing bars and the belt

- **Swing bars**: two gold bars above the belt, the main hand on top and the off hand below. They are empty at rest and fill while a swing recovers. The **Swing timer** setting hides them.
- **The belt**: while a belt is equipped, its slots show here, each with its key, `1` to `5` in the order the **Belt slot order** setting gives. An empty slot is stamped faintly with its role: a hand for a main-hand or off-hand slot, a pouch for the utility slot. With the Hands grouped order a rope belt shows two locked places. See [[Belt]].

## Bottom left: the chat log

Every message and every line said within sight, with the chat box at its foot. See [[Chat log]].

## Menus

- **The actions menu**: a tap of the right mouse button opens a menu of everything you can do to what is under the cursor, with **Build** always last. A greyed entry cannot be done now. A click outside closes it without acting on the world, as do `Escape`, `Tab`, and walking.
- **Item cards**: resting the pointer on any item in a grid or slot (the bag, the belt, the hands, the worn slots, a container, a body, a station's output) shows a small dark card with its full name, its kind, and what it does, with **Use** in gold; an empty slot shows its name. See [[Inventory#The hover card|Inventory]].
- **Item menus**: right-clicking an item in a panel offers what can be done with it: Use, Equip, Apply, Eat, Drink, Split, Store in or Take, Drop, Rotate, and so on. Right-clicking a slot offers Use, Equip or Unequip, Put in bag, and Drop, as the slot allows; a double-click on a slot runs its Equip or Unequip. See [[Inventory]].

The browser's own right-click menu is switched off everywhere except over the debug corner.

## Panels

The game goes on while any panel is open, and the world's keys and clicks still work (see [[Controls]]).

- **The bag** (`Tab`) at the top right, opening under the row of debuffs, and **the character panel** (`C`) with the clothing slots, each worn one drawn on you with an eye that hides it (see [[Clothing#Hiding a worn item|Clothing]]), and both hands. Each opens and closes on its own, has an X, and can be dragged by its header to a place it remembers. An open container is its own panel beside the bag and closes when you walk more than {{n tuning.world.containerCloseDist}} tiles away. A bag cell is {{n census.constants.view.BASE_CELL}} interface pixels. Carrying furniture closes the panels. See [[Inventory]].
- **The station panel**: using a station opens one panel under the clock with its recipes, the chosen recipe's ingredients, a count, **Make**, the queue, and **Output**. See [[Crafting]].
- **A conversation** (see [[Talk]]): talking to a villager opens a parchment panel at the bottom centre, above the belt, with their lines, **Click here to continue**, the questions to choose, and **That's all for now**, each a line of blue text to click.
- **The skills panel** (from the row of buttons): the skills in their groups, Combat, Gathering, and Production, each with its picture (the one that floats over a gatherer's head) and at its first level, with a note that skills are not built yet. It has an X; `Escape` closes it.
- **The map** (`M`; see [[Map]]): the land seen so far and every player, over the world.
- **The build palette** (`N`): a list on the left of what can be built and its cost, greyed when you are short, and a Take apart row. See [[Building]].

## Floating numbers

Numbers rise over heads as things happen, like the combat text of other games:

- **A red number**, with a minus sign, over whoever is hit: you, one of the dead, a villager, or another player. The damage you take and the damage you deal both show, each over the head it was done to.
- **A green number**, with a plus sign, over whoever is healed. For now only [[Food]] heals with a number; healing by itself over time, burning, bleeding, and starving show none.
- **A skill's small picture and a number** over whoever gathers: the logs from chopping (Woodcutting), the ore and stone from mining (Mining), a fish caught (Fishing), what is picked or harvested (Farming), and honey taken from a hive (Beastlore). Until skills are built, the number is how many things were gained. It is white with a black edge in the dark and black with a white edge in the light, so it is never taken for a red or a green one. Herbalism has no number yet.

Each rises about {{n tuning.floaters.riseTiles tile}} over {{n tuning.floaters.life seconds}}, fading over its last half, a little to one side. Several at once over one body start a line apart. A number shows only over a body in your sight, and never over one of the living dead hidden by the dark. **Floating numbers** in [[Settings]] hides them all.

With friends, the host notes each number where it happens and sends it to every player; each screen draws the ones in its own sight. Nothing of them is kept in the save.

## The row of buttons

At the bottom right is a row of buttons on a stone plate, the same stone the belt sits on, each with a small picture: **Bag**, **Character**, **Skills**, **Map**, **Build**, **Chat**, **Settings**, and **Menu**. Each does what its key does (`Tab`, `C`, `M`, `N`, `Enter`), so a panel opened by its button closes by its key and the other way round; Skills opens the skills panel, Settings the settings screen, and Menu the pause menu, as `Escape` does with nothing open. Hovering over a button names it and its key. A button whose panel is open is drawn pressed in.

A click on the row is the row's, never the world's. Chat keeps anything already typed in the chat box; any other button hands the keys back to the world from the chat box. With a screen up the row does nothing.

The row takes one of three shapes, chosen again whenever the window, the **Interface size**, the belt, or the chat log changes size:

- **One line of eight** along the bottom right, when that line clears both the belt (whose width depends on the belt worn) and the chat log and chat box at the bottom left (the log can be resized).
- **Two lines of four**, when one line would not clear them.
- **Two lines of four smaller buttons**, when the interface is narrower than {{n census.constants.ui_nav-row.NARROW}} of its own pixels (a small window, or a large Interface size).

The skills panel stands just above the row, whichever shape it takes; on a narrow interface it stands higher, above the chat log.

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
- `src/ui/nav-row.js:16-30`, `src/ui/nav-row.js:157-162`, `src/ui/nav-row.js:192`, `src/ui/nav-row.js:220-241`, `src/ui/nav-row.js:280-282`, `src/main.js:1527`, `style.css:2212-2235`, `style.css:2270-2292`: the row on the stone plate; one line of eight where it clears the belt and the chat log, both measured, two lines of four where not, smaller under `NARROW`; the skills panel above it; chosen again on a resize (game #312, at 8af4eed)
- `src/ui/nav-row.js:130-139`, `src/ui/nav-row.js:167-249`, `src/input.js:105-107`, `src/main.js:1503`, `style.css:2164-2270`: the row of buttons, each tapping its key, Skills, Settings, Menu, Chat keeping a draft, the skills panel, the narrow layout (game #298, at 0362b89)
- `src/main.js:918-1001`: an open panel stops no click, key, or zoom (game commit 57df52e)
- `src/view.js:84-88`, `src/view.js:138`: the interface's own size, Interface size
- `style.css:1104`, `src/main.js:100-104`, `src/main.js:1207-1209`, `src/ui/screens.js:187-200`: the interface, the chat box, and the debug corner hidden while no world is in; nothing of a world drawn, the game's stage hidden behind the site (game #80, #120, at 02dfcc2)
- `src/ui/hud.js:21-22`: the portrait cut from your own sprite, head to belt
- `src/ui/hud.js:66`, `src/ui/hud.js:92-106`: the name, the health bar's colours, the stamina pulses, the hands line and its dash
- `data/tuning.json`: `player.hp` and `player.stamina`
- `src/ui/hud.js:118-122`, `src/clock.js:5`, `src/clock.js:88-94`: the clock, its format, the day's length
- `src/ui/prompt.js:60`, `src/ui/log.js`: messages float and go to the chat log
- `src/moodles.js:22-80`, `src/moodles.js:103-115`, `src/ui/moodles.js`, `style.css:324-330`: the four moodles on the right, their order, stages, names; bleeding gone from them (game #315, at 8af4eed)
- `src/debuffs.js:9-47`, `src/ui/debuff-row.js:1-87`, `src/ui/debuff-icons.js:7-18`, `style.css:504-519`, `src/main.js:1218`: the row of debuffs at the top right, growing leftward, the time, the stacks, the card; drawn from the player's own record (game #315, at 8af4eed)
- `style.css:732-737`: the bag's home under the row of debuffs (game #315, at 8af4eed)
- `src/ui/prompt.js:41`, `src/interact.js:852-880`: the prompt, "E: Put down", the progress bar, greyed
- `src/ui/zombie-bars.js:14-20`: health bars over hurt zombies and over you
- `src/ui/zombie-bars.js:16-18`, `src/ui/zombie-bars.js:63`: a downed one's bar just over its body (game #390, at 9be007c)
- `src/floaters.js:1-106`, `src/ui/floaters.js:1-121`, `data/tuning.json:73-95`, `src/entities/player.js:73`, `src/entities/player.js:101`, `src/entities/zombie.js:104`, `src/entities/villager.js:134`, `src/verbs.js:36`: the floating numbers: a hit, a heal from food, a gather by the verb's table, recorded on the host and drawn on every screen in sight, the dark rule for the living dead, the colours, the rise and fade (game #299, at 3331946)
- `src/ui/skill-icons.js`: the skills' pictures (game #299, at 3331946)
- `src/ui/zombie-bars.js:56`, `src/main.js:1082-1083`, `src/interact.js:1272-1279`: no bar and no zombie hand over one of the dead hidden by the dark (game commit 9d9a5b5)
- `src/ui/swing-timer.js:16`, `src/ui/swing-timer.js:69`: the exposure bar over your head
- `src/ui/speech.js`, `src/ui/names.js`: bubbles and names over heads
- `style.css:561-565`, `src/ui/swing-timer.js:1-9`: the two swing bars at bottom centre
- `src/settings.js:49`: the Swing timer setting
- `src/ui/inventory-panel.js:333-352`, `src/ui/belt-icons.js` (at 78116b1): the belt's slots, their keys in the setting's order, the role stamped on an empty one, the locked places (game #478)
- `src/main.js:610-646`, `src/ui/context-menu.js`, `src/buttons.js:10`: the actions menu, Build last, greyed entries, what closes it
- `src/interact.js:1015-1147`, `src/ui/inventory-panel.js:674-703`: the item and slot menus
- `src/item-info.js:70-122`, `src/ui/hover-card.js`, `src/ui/inventory-panel.js:428-456`: the item cards over every grid and slot, an empty slot's name (game #313, at 8af4eed)
- `src/input.js:84-87`: no browser context menu except over the debug corner
- `src/ui/inventory-panel.js`, `src/main.js:727-773`: the bag and character panels, X, dragging, containers closing at a distance
- `data/tuning.json`: `world.containerCloseDist`
- `src/view.js:118`: `BASE_CELL`
- `src/ui/station-panel.js`, `style.css:887-891`: the station panel under the clock
- `src/ui/build-palette.js`, `src/main.js:700-721`: the build palette
- `src/ui/cursor.js:1-36`, `src/settings.js:29`, `src/settings.js:56`: the four cursors and the zombie hand
- `src/main.js:1112-1122`, `style.css:81-84`, `src/settings.js:11`: the debug corner, its place, and its contents
- `style.css:69-75`: the interface over the debug corner, so a panel or screen covers it (game commit f2b8062)
- `src/ui/build-palette.js:49`: the palette's Take apart row (game #413, at 31d330a)
- `data/tuning.json` `floaters.gathers`: honey floats under Beastlore (game #416, at 31d330a)
- `src/debuffs.js`, `src/sick.js`: Sick beside bleeding in the row (game #435, at fa2997f)
- `src/ui/hud.js:108-114`, `style.css:297-353`: the mana bar under stamina, in blue, its points, its flash (game #488, at 0fa02e5)
- `src/debuffs.js:42-50`, `src/ui/debuff-icons.js:36-40`, `style.css:580`: the stamina potion's buff in the row, a gold bolt in a gold frame, "Buff" on its card (game #491, at 0fa02e5)
