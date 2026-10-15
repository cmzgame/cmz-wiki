---
title: Controls
categories: [Interface]
aliases: [Keys, Keyboard, Mouse, Key bindings, Hotkeys]
summary: Every key and mouse button and what it does.
---

The game is played with the keyboard and a three-button mouse. Keys cannot be changed yet. The **Controls** screen (title screen or pause menu) shows a short list; this page is the full one.

## The mouse

The three buttons are roles, not fixed actions (see [[Combat]]):

- **Left button**: the main hand. With a weapon it swings; with nothing in hand, fists. When placing something it confirms the spot, and in Use mode it picks the target. Clicking a gatherable within {{n census.constants.interact.CLICK_REACH}} tiles makes it sway. With a weapon in each hand, the two take turns.
- **Right button, tapped** (let go within {{n census.constants.buttons.TAP_TIME}} seconds): the actions menu for whatever is under the cursor. During a bow's draw a tap cancels the draw; in Use mode it puts the item away.
- **Right button, held**: the off hand's stance: block with a [[Shield|shield]], brace, or an off-hand swing.
- **Middle button**: the main hand's other mode (also `Q`).
- **Wheel**: zoom one step in or out (not while a panel is open, and not faster than once every {{n census.constants.main.ZOOM_PACE}} seconds). Over the log it scrolls the log; while dragging an item it rotates it.

## The keyboard

### Moving

- `W` `A` `S` `D` or the arrow keys: walk, in screen directions.
- `Shift`: sprint (costs [[Stamina|stamina]]).
- `Space`: shove.

### Acting

- `E`, tapped: the nearest simple action (open a door or shutter, search, drink, and so on), shown over its target as "E: action". While carrying furniture: put it down.
- `E`, held for {{n census.constants.interact.HOLD_TIME}} seconds: climb through the nearest window.
- `B`, tapped: board up the nearest opening (needs a [[Plank|plank]]). Held: pull a board off.
- `T`: take a [[Torch|torch]] into the hand or put it away.
- `Q`: the main hand's other mode, as the middle button.
- `1` `2` `3` `4`: the belt's slots: eat or drink what is there, otherwise swap it with your hand.

### Panels and building

- `Tab`: the bag (or the character panel if you wear no bag). Also closes the actions menu.
- `C`: the character panel.
- `N`: the build palette (see [[Building]]).
- `X`: removal mode, for taking down what was built.
- `R`: turn the thing being placed; rotate an item being dragged.

### The screen

- `Z`: the next zoom level (Wide, Middle, Close, then Wide again).
- `Enter`: open the chat box; in it, `Enter` says the line. See [[Log and chat]].
- `/`: open the chat box with a slash typed (there are no commands yet).
- `Escape`: close the top thing in this order: the actions menu, Use mode, the station panel, a screen, the build palette, placement or removal, the bag and character panels. With nothing open, the pause menu. In the chat box it only leaves the box.

In a screen with a text box (a world's name, a join code, the creator key), `Enter` presses its Next button.

### In the panels

- Drag an item to move it; drop it outside the panels to put it on the floor.
- `R`, a right click, or the wheel while dragging: rotate it.
- Shift-click: send an item across (bag to container and back).
- Double-click: use it (equip, wear, take from the belt, unequip, take off), otherwise send it across.
- Right-click: the item's menu.

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
