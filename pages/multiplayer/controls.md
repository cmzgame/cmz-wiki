---
title: Controls
categories: [Interface]
aliases: [Keys, Keyboard, Mouse, Key bindings, Hotkeys]
summary: Every key and mouse button and what it does.
---

The game is played with the keyboard and a three-button mouse. Keys cannot be changed yet. The **Controls** screen, on the game's site menu out of a world or on the pause menu in one (see [[Screens]]), shows a short list in six groups: Moving and doing, Fighting, Your things, Building, Talking, and Testing (the debug keys, kept apart from the rest). `R` is written there once, for turning what you are placing or the item you are dragging, and the screen ends with a link to this wiki. This page is the full list.

Only the pause menu and its screens take the keys and the mouse from the world (see [[Screens]]). With the bag, a container, a station's panel, the character screen, or the [[Map]] open, every button and key below still works on the world, and the world goes on; a click or a wheel turn over a panel stays the panel's. Your character keeps turning to the pointer over any panel, so the aim follows the mouse there too.

## The mouse

The three buttons are roles, not fixed actions (see [[Combat]]):

- **Left button**: the main hand. With a weapon it swings; with nothing in hand, fists. When placing something it confirms the spot, and in Use mode it picks the target. With an actions menu open, a left click only closes the menu. Clicking a gatherable within {{n census.constants.interact.CLICK_REACH}} tiles makes it sway. With a weapon in each hand, the two take turns.
- **Right button, tapped** (let go within {{n census.constants.buttons.TAP_TIME}} seconds): the actions menu for whatever is under the cursor. During a bow's draw a tap cancels the draw; in Use mode it puts the item away. With a placement ghost up (a build, a rug, a painting, a set-down from the bag, a torch for a wall) or the Take apart tool on, a tap puts it away as `Escape` does and opens no menu; a piece of furniture you are carrying is no ghost, so its menu still opens, to put it down.
- **Right button, held**: the off hand's stance: block with a [[Wooden shield|shield]], brace, or an off-hand swing.
- **Middle button**: the main hand's other mode (also `Q`): the [[Halberd]]'s thrust, the [[Throwing spear]]'s throw, or the throw of a potion or a poison held in the main hand (see [[Potions]]).
- **Wheel**: zoom one step in or out, with the panels open or closed (not while an item is being dragged, and not faster than once every {{n census.constants.main.ZOOM_PACE}} seconds). Over the chat log it scrolls the chat log, over a panel it does nothing to the world, and while dragging an item it rotates it.

A press and drag on the game works the game alone: the browser never starts dragging the picture of the game or selecting the page, outside a text field.

## The row of buttons

The buttons at the bottom right (see [[Interface#The row of buttons|Interface]]) are the keys for the mouse: **Bag** is `Tab`, **Character** `C`, **Map** `M`, **Build** `N`, and **Chat** `Enter` (keeping anything already typed). **Skills** opens the skills panel, **Settings** the settings screen, and **Menu** the pause menu.

## The keyboard

### Moving

- `W` `A` `S` `D` or the arrow keys: walk, in screen directions.
- `Shift`: sprint (costs [[Stamina|stamina]]).
- `Space`: shove.

### Acting

- `E`: the nearest simple action (talk to a villager, open a door or shutter, search, drink, feed a fire, and so on), shown over its target as "E: action". It takes only what you can reach with a clear line, never through a wall. It does not light a fire that is out unless you carry a flame, a tinderbox or a lit torch (see [[Fire]]). It acts when the key is let go, however long it was held; holding it does nothing more. While carrying furniture: put it down.
- `B`, tapped: board up the nearest opening (needs a [[Plank|plank]] and a [[Smith's hammer]] on you); a gate takes none. Held: pull a board off, with the hammer, and get the plank back.
- `T`: light or put out the [[Torch|torch]] in your hand, or else on your belt; lighting needs a [[Tinderbox]] ("You need a tinderbox to light it."). With no torch in a hand or on the belt, it takes one from the bag into a hand, still out. The Controls screen says "Light or put out the torch in hand (a tinderbox lights it)".
- `Q`: the main hand's other mode, as the middle button.
- `1` `2` `3` `4` `5`: the belt's slots. A main-hand or off-hand slot's key draws what is there into that hand, swapping what the hand held onto the slot, or eats a food; the utility slot's key only eats. The utility slot's key drinks a potion; a hand slot's key draws a potion or a poison into that hand, to throw (see [[Potions]]). An empty slot's key does nothing, and a waterskin's drinks by itself and is never drunk by its key. Which key is which slot is the **Belt slot order** setting: by default `1` main hand, `2` off hand, `3` utility, and a leather belt's `4` main hand and `5` off hand (see [[Belt]]). The Controls screen says "Use a belt slot: a hand slot draws what is there into its hand (or eats it), the utility slot eats; the order is a setting".

### Panels and building

- `Tab`: the bag (or the character panel if you have no bag on your back). Also closes the actions menu.
- `C`: the character panel.
- `N`: the build palette (see [[Building]]). Not with the bag open: the game says "Close your bag to build."
- `H`: with the build palette open, puts every wall on your floor down to its foot, and again raises them (see [[Building]]).
- `P`: the Planning panel, rulers laid on the ground that stay (see [[Planning]]). Not with the bag open, as `N`.
- `X`: Take apart, which highlights what players built or made; a click takes it apart for half its materials (see [[Building]]). Not with the bag open, as `N`.
- `R`: turn the thing being placed; rotate an item being dragged.
- `M`: the [[Map]]: what anyone in the world has seen, and where every player is. The wheel zooms it and a drag moves it; the world keeps running while it is open.

### The screen

- `Z`: the next zoom level (Wide, Middle, Close, then Wide again).
- `Enter`: open the chat box; in it, `Enter` says the line. See [[Chat log]].
- `/`: open the chat box with a slash typed, for a command. The one command is `/wave`, which waves as `G` does; any other says "There is no /... Try /wave." See [[Chat log#Speaking|Chat log]].
- `G`: wave. Your character raises an arm and waves for {{n tuning.player.waveSeconds seconds}}, and every player who can see you sees it. Walking, or lifting furniture, ends it; eating or drinking shows its own pose first. Not asleep or dead; with your arms full of furniture the game says "Your arms are full." The Controls screen says "Wave, for everyone to see".
- `Escape`: close the top thing in this order: the actions menu, a screen, Use mode, an Inspect card (see [[Farming#Inspect|Farming]]), the station panel, a conversation, the skills panel, the build palette, placement or removal, the bag and character panels, the map. With nothing open, the pause menu. In the chat box it only leaves the box. Out of a world it steps back through the site's pages (see [[Screens#The site|Screens]]).
- `F8`: every sound off, or on again, with a line saying which; the same switch as the Sound setting (see [[Sound]]). It works with any panel or screen up.

In a screen with a text box (a world's name, a join code, the creator key), `Enter` presses its Next button. On the site's Home, `Enter` opens the Worlds page, unless a button, link, or field has the focus. In fullscreen, in a browser that can lock the keyboard (Chrome and Edge), a tap of `Escape` does what it does in a window and a held `Escape` leaves fullscreen; in any other browser the first `Escape` leaves fullscreen and the next reaches the game (see [[Settings]]). A held `Escape` acts once: the game takes no notice of the key repeating.

### In the panels

- Drag an item to move it; drop it outside the panels to put it on the floor.
- `R`, a right click, or the wheel while dragging: rotate it.
- Shift-click: send an item across (bag to container and back).
- Double-click: equip or unequip it, otherwise send it across. In your bag it equips the item (into a hand, or a garment into its slot), or drinks a potion; on a hand or clothing slot it unequips; on a belt slot it does what the slot's key does: it eats a food, drinks a potion, or draws the item into the slot's hand, or else shows the key's line (it never drinks a skin on the belt). The Controls screen says "Equip or unequip a thing; else move it across".
- Right-click: the item's menu.
- Typing in a station's count goes to the count alone, never to the keys above; `Enter` or `Escape` leaves it.

See [[Inventory]].

### Debug keys

{{devonly note="These keys are for testing the game."}}

- `V`: fog off and on (see everything).
- `L`: the light's debug views in turn: off, light, ambient, fog.
- `]` and `[`: move the clock an hour forward or back, keeping the day. On a guest this changes nothing for long; the host's clock wins.

## With friends

A guest's keys and clicks go to the host, who performs them. A guest's wave, from `G` or `/wave`, goes to the host the same way, as a key in their next input, and every player sees it. Stepped away (see [[Dormancy]]), any key, click, mouse move, or wheel brings you back, and is spent doing so.

## See also

- [[Interface]], [[Settings]], [[Combat]], [[Inventory]], [[Building]]

## Sources

<!-- sources at d7cf736 -->
- `src/inventory.js:456-459`, `src/archery.js:906-911` (game #586); `src/input.js:102-111`: dragstart and selectstart cancelled outside a text field (game #573) (at 8d361e5)
- `src/input.js:52-71` (at 5eb40e6): the pointer followed over the whole window, so the aim turns over any panel (game #501)
- `src/ui/screens.js:23-61`, `src/ui/screens.js:1079-1086`, `src/settings.js:41-65`: the Controls screen is a fixed list in six groups, R once, the wiki linked at its foot, and no setting rebinds a key
- `index.html:50`, `src/ui/screens.js:948`: Controls on the site's menu and on the pause menu
- `src/buttons.js:10`, `src/buttons.js:25-26`, `src/buttons.js:34-42`: the three buttons as roles, the tap time, the hold, the middle button and Q
- `src/main.js:1105-1120`: the left button: placement's confirm, Use mode's target, else the swing
- `src/main.js:1106`, `src/main.js:1135-1139`, `src/main.js:1160`: an open panel stops no click and no key; an open actions menu takes the click that closes it and ends a draw
- `src/interact.js:1364`: `CLICK_REACH`, a gatherable sways when clicked within reach
- `src/main.js:776-794`: a right tap opens the menu, cancels a draw, puts the item down in Use mode
- `src/input.js:69-73`: the middle button read
- `src/main.js:80`, `src/main.js:1076-1083`, `src/input.js:88`: the wheel's zoom step and its pace, held only while an item is dragged, and taken by the world only from the canvas
- `src/ui/inventory-panel.js:137`: the wheel rotates a dragged item
- `src/input.js:150-158`: W A S D and the arrows walk in screen directions
- `src/main.js:1148`, `src/entities/player.js:349-353`: Shift sprints, and sprinting drains stamina
- `src/player-controller.js:53`: Space shoves
- `src/interact.js:1009-1017`, `src/interact.js:1113-1142`, `src/ui/screens.js:28`: E on its release however long it was held, no hold; E while carrying puts it down
- `src/interact.js:881-928`, `src/interact.js:372-379`, `src/ui/screens.js:28`: E takes only a simple action within reach and a clear line (game #227), a villager's Talk among them (game #230); a fire's Light is one only with a flame carried (game #169)
- `src/interact.js:1143-1157`, `src/interact.js:479-546`: B boards up (needs a plank and a hammer carried), held pulls a board, the plank back (game #222)
- `src/interact.js:1118`, `src/interact.js:1158-1181`, `src/ui/screens.js:44`: T lights or douses the torch in hand, else on the belt, with a tinderbox; else takes one from the bag; the Controls screen's line
- `src/interact.js:1413-1435`, `src/interact.js:1527-1556`, `src/inventory.js:295-363`, `src/ui/screens.js:25` (at 78116b1): keys 1 to 5 by the Belt slot order, sent as the slot's role; a hand slot draws or eats, the utility slot eats, an empty slot nothing; the Controls screen's line (game #478)
- `src/main.js:915-923`, `src/ui/context-menu.js:34`: Tab and C, and Tab closing the menu
- `src/main.js:1067-1069`, `src/ui/screens.js:30`: N, M, and X; the Controls screen's M line (game #235)
- `src/main.js:874-895`: N and X refused with the bag open, "Close your bag to build."
- `src/placement.js:288`, `src/ui/inventory-panel.js:131`: R turns a prop being placed or a dragged item
- `src/main.js:1076`, `src/view.js:95-109`: Z cycles the zooms, wrapping
- `src/main.js:1065-1066`, `src/ui/log.js:45-52`: Enter and / open the chat box; a slash line handed to the game as a command
- `src/main.js:1924-1934`, `src/ui/screens.js:33`: F8 switches Sound, with its line, any panel up; on the Controls screen (game #386, at 3c68f9c)
- `src/main.js:900-920`, `src/ui/log.js:60`: Escape's order, a screen first (game #298), an Inspect card after Use mode (game #507), a conversation, the skills panel, and the map among the panels, and in the chat box
- `src/main.js:829-847`, `src/placement.js:378-382`: a right tap puts a placement ghost or the Take apart tool away and opens no menu (game #507, at d7cf736)
- `src/ui/nav-row.js:130-139`, `src/ui/nav-row.js:213-223`, `src/input.js:105-107`: the row of buttons, each tapping its key (game #298)
- `src/main.js:851-852`, `src/ui/screens.js:253-282`: Escape out of a world steps back through the site
- `src/ui/screens.js:851`, `src/ui/screens.js:898`, `src/ui/screens.js:911`: Enter in a screen's text field presses its button
- `src/ui/screens.js:105-112`, `src/ui/screens.js:572-579`: Enter on Home opens the Worlds page; the first Escape in fullscreen leaves it
- `src/ui/screens.js:714-732`, `src/main.js:1743`: in fullscreen, Escape locked to the page where the browser can, a hold to leave; Escape acts once a press, never on a repeat (game #311, at 8af4eed)
- `src/ui/inventory-panel.js:75-140`, `src/ui/inventory-panel.js:657`: drag, rotate, shift-click, double-click, right-click in the panels
- `src/ui/inventory-actions.js:214-229`, `src/interact.js:1321-1333`, `src/ui/screens.js:43`: a double-click equips from the bag and runs a slot's Equip or Unequip (game #186); the Controls screen's line
- `src/ui/inventory-actions.js:90-108` (at 78116b1): a belt slot's double-click follows its key, Equip or Eat, else the key's line (game #478)
- `src/ui/station-panel.js:35-44`: typing in a station's count is kept from the world's keys; Enter or Escape leaves it
- `src/main.js:1063`, `src/main.js:1085-1088`: V, L, ] and [
- `src/clock.js:41-44`: the hour moved keeping the day
- `src/net.js:872`, `src/net.js:1129`: the host sends its clock in every frame and a guest takes it
- `src/net.js:1250-1290`: a guest's inputs and commands go to the host
- `src/main.js:214-223`: any input while stepped away brings you back and is spent on it
- `src/interact.js:1273`: B at a gate, "A gate takes no boards." (game #398, at 4db1c00)
- `src/ui/screens.js:50`: X's line, Take apart (game #413, at 31d330a)
- `src/ui/screens.js`: T's line, "Light or put out the torch in hand" (game #421, at 1bcb6ed)
- `src/interact.js:1376-1402`, `src/main.js:1556-1559`, `src/ui/screens.js:54-58`: G and /wave queue a `wave` key event; any other command's answer; the Talking group's lines (game #434, at fa2997f)
- `src/entities/player.js:75-81`, `src/entities/player.js:412-415`, `data/tuning.json:67`: the wave for `waveSeconds`, not dead, asleep, or carrying; walking ends it, the held-out pose first (game #434, at fa2997f)
- `src/net.js:429`, `src/entities/player.js:71`: the wave a key event in a guest's snapshot, `waveFor` in the player's record for every client (game #434, at fa2997f)
- `src/inventory.js:343-356`, `src/ui/inventory-actions.js:249-256`: any slot's key drinks a potion; a double-click in your own bag drinks one (game #491, at 0fa02e5)
