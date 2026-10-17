---
title: Controls
categories: [Interface]
aliases: [Keys, Keyboard, Mouse, Key bindings, Hotkeys]
summary: Every key and mouse button and what it does.
---

The game is played with the keyboard and a three-button mouse. Keys cannot be changed yet. The **Controls** screen, on the game's site menu out of a world or on the pause menu in one (see [[Screens]]), shows a short list in six groups: Moving and doing, Fighting, Your things, Building, Talking, and Testing (the debug keys, kept apart from the rest). `R` is written there once, for turning what you are placing or the item you are dragging, and the screen ends with a link to this wiki. This page is the full list.

Only the pause menu and its screens take the keys and the mouse from the world (see [[Screens]]). With the bag, a container, a station's panel, or the character screen open, every button and key below still works on the world, and the world goes on; a click or a wheel turn over a panel stays the panel's.

## The mouse

The three buttons are roles, not fixed actions (see [[Combat]]):

- **Left button**: the main hand. With a weapon it swings; with nothing in hand, fists. When placing something it confirms the spot, and in Use mode it picks the target. With an actions menu open, a left click only closes the menu. Clicking a gatherable within {{n census.constants.interact.CLICK_REACH}} tiles makes it sway. With a weapon in each hand, the two take turns.
- **Right button, tapped** (let go within {{n census.constants.buttons.TAP_TIME}} seconds): the actions menu for whatever is under the cursor. During a bow's draw a tap cancels the draw; in Use mode it puts the item away.
- **Right button, held**: the off hand's stance: block with a [[Shield|shield]], brace, or an off-hand swing.
- **Middle button**: the main hand's other mode (also `Q`).
- **Wheel**: zoom one step in or out, with the panels open or closed (not while an item is being dragged, and not faster than once every {{n census.constants.main.ZOOM_PACE}} seconds). Over the chat log it scrolls the chat log, over a panel it does nothing to the world, and while dragging an item it rotates it.

## The keyboard

### Moving

- `W` `A` `S` `D` or the arrow keys: walk, in screen directions.
- `Shift`: sprint (costs [[Stamina|stamina]]).
- `Space`: shove.

### Acting

- `E`: the nearest simple action (open a door or shutter, search, drink, and so on), shown over its target as "E: action". It acts when the key is let go, however long it was held; holding it does nothing more. While carrying furniture: put it down.
- `B`, tapped: board up the nearest opening (needs a [[Plank|plank]]). Held: pull a board off.
- `T`: light or douse the [[Torch|torch]] in your hand, or else on your belt; lighting needs a [[Tinderbox]] ("You need a tinderbox to light it."). With no torch in a hand or on the belt, it takes one from the bag into a hand, still out. The Controls screen says "Light or douse the torch in hand (a tinderbox lights it)".
- `Q`: the main hand's other mode, as the middle button.
- `1` `2` `3` `4`: the belt's slots: eat or drink what is there, otherwise swap it with your hand.

### Panels and building

- `Tab`: the bag (or the character panel if you have no bag on your back). Also closes the actions menu.
- `C`: the character panel.
- `N`: the build palette (see [[Building]]). Not with the bag open: the game says "Close your bag to build."
- `X`: removal mode, for taking down what players built or made (see [[Building]]). Not with the bag open, as `N`.
- `R`: turn the thing being placed; rotate an item being dragged.

### The screen

- `Z`: the next zoom level (Wide, Middle, Close, then Wide again).
- `Enter`: open the chat box; in it, `Enter` says the line. See [[Chat log]].
- `/`: open the chat box with a slash typed (there are no commands yet).
- `Escape`: close the top thing in this order: the actions menu, Use mode, the station panel, a screen, the build palette, placement or removal, the bag and character panels. With nothing open, the pause menu. In the chat box it only leaves the box. Out of a world it steps back through the site's pages (see [[Screens#The site|Screens]]).

In a screen with a text box (a world's name, a join code, the creator key), `Enter` presses its Next button. On the site's Home, `Enter` opens the Worlds page, unless a button, link, or field has the focus. In fullscreen the browser takes the first `Escape` to leave fullscreen.

### In the panels

- Drag an item to move it; drop it outside the panels to put it on the floor.
- `R`, a right click, or the wheel while dragging: rotate it.
- Shift-click: send an item across (bag to container and back).
- Double-click: equip or unequip it, otherwise send it across. In your bag it equips the item (into a hand, or a garment into its slot); on a hand or clothing slot it unequips; on a belt slot it equips into a hand. The Controls screen says "Equip or unequip a thing; else move it across".
- Right-click: the item's menu.
- Typing in a station's count goes to the count alone, never to the keys above; `Enter` or `Escape` leaves it.

See [[Inventory]].

### Debug keys

{{devonly note="These keys are for testing the game."}}

- `V`: fog off and on (see everything).
- `L`: the light's debug views in turn: off, light, ambient, fog.
- `]` and `[`: move the clock an hour forward or back, keeping the day. On a guest this changes nothing for long; the host's clock wins.

## With friends

A guest's keys and clicks go to the host, who performs them. Stepped away (see [[Dormancy]]), any key, click, mouse move, or wheel brings you back, and is spent doing so.

## See also

- [[Interface]], [[Settings]], [[Combat]], [[Inventory]], [[Building]]

## Sources

<!-- sources at 2ea0d24 -->
- `src/ui/screens.js:21-59`, `src/ui/screens.js:1051-1058`, `src/settings.js:41-65`: the Controls screen is a fixed list in six groups, R once, the wiki linked at its foot, and no setting rebinds a key
- `index.html:50`, `src/ui/screens.js:920`: Controls on the site's menu and on the pause menu
- `src/buttons.js:10`, `src/buttons.js:25-26`, `src/buttons.js:34-42`: the three buttons as roles, the tap time, the hold, the middle button and Q
- `src/main.js:1079-1094`: the left button: placement's confirm, Use mode's target, else the swing
- `src/main.js:1080`, `src/main.js:1109-1113`, `src/main.js:1134`: an open panel stops no click and no key; an open actions menu takes the click that closes it and ends a draw
- `src/interact.js:1173`: `CLICK_REACH`, a gatherable sways when clicked within reach
- `src/main.js:758-776`: a right tap opens the menu, cancels a draw, puts the item down in Use mode
- `src/input.js:69-73`: the middle button read
- `src/main.js:71`, `src/main.js:1051-1058`, `src/input.js:88`: the wheel's zoom step and its pace, held only while an item is dragged, and taken by the world only from the canvas
- `src/ui/inventory-panel.js:123`: the wheel rotates a dragged item
- `src/input.js:150-158`: W A S D and the arrows walk in screen directions
- `src/main.js:1122`, `src/entities/player.js:331-335`: Shift sprints, and sprinting drains stamina
- `src/player-controller.js:53`: Space shoves
- `src/interact.js:837-845`, `src/interact.js:941-970`, `src/ui/screens.js:27`: E on its release however long it was held, no hold; E while carrying puts it down
- `src/interact.js:971-983`: B boards up (needs a plank), held pulls a board
- `src/interact.js:946`, `src/interact.js:985-1008`, `src/ui/screens.js:42`: T lights or douses the torch in hand, else on the belt, with a tinderbox; else takes one from the bag; the Controls screen's line
- `src/interact.js:937`, `src/interact.js:957`, `src/interact.js:1010-1026`: keys 1 to 4 eat, drink, or swap the belt slot
- `src/main.js:893-901`, `src/ui/context-menu.js:34`: Tab and C, and Tab closing the menu
- `src/main.js:1043-1044`: N and X
- `src/main.js:852-873`: N and X refused with the bag open, "Close your bag to build."
- `src/placement.js:277`, `src/ui/inventory-panel.js:117`: R turns a prop being placed or a dragged item
- `src/main.js:1051`, `src/view.js:95-109`: Z cycles the zooms, wrapping
- `src/main.js:1041-1042`, `src/ui/log.js:45-52`: Enter and / open the chat box; no commands yet
- `src/main.js:831-848`, `src/ui/log.js:55`: Escape's order, and in the chat box
- `src/main.js:831-832`, `src/ui/screens.js:245-274`: Escape out of a world steps back through the site
- `src/ui/screens.js:824`, `src/ui/screens.js:871`, `src/ui/screens.js:883`: Enter in a screen's text field presses its button
- `src/ui/screens.js:103-110`, `src/ui/screens.js:545-552`: Enter on Home opens the Worlds page; the first Escape in fullscreen leaves it
- `src/ui/inventory-panel.js:75-126`, `src/ui/inventory-panel.js:637`: drag, rotate, shift-click, double-click, right-click in the panels
- `src/ui/inventory-actions.js:167-183`, `src/ui/screens.js:41`: a double-click equips from the bag and runs a slot's Equip or Unequip; the Controls screen's line
- `src/ui/station-panel.js:34-43`: typing in a station's count is kept from the world's keys; Enter or Escape leaves it
- `src/main.js:1039`, `src/main.js:1060-1063`: V, L, ] and [
- `src/clock.js:41-44`: the hour moved keeping the day
- `src/net.js:856`, `src/net.js:1120`: the host sends its clock in every frame and a guest takes it
- `src/net.js:1236-1273`: a guest's inputs and commands go to the host
- `src/main.js:202-211`: any input while stepped away brings you back and is spent on it
