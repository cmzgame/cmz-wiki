---
title: Use
categories: [Items, Mechanics]
aliases: [Use mode, Interactions, Nothing interesting happens, Use item on]
summary: Use on any item's menu, then click anything: if the game has a rule for the pair it happens, and otherwise "Nothing interesting happens."
---

**Use** is on every item's menu, wherever the item is: in your bag, in a container, in a hand, worn, or on the belt. It picks the item as the thing you are about to use, and your next click is what you use it on. Anything can be used on anything; where the game has no rule for the pair, the log says "Nothing interesting happens."

## How it works

### Picking a target

After **Use**, the item stays where it is, outlined, and a label follows the cursor: "Use (item) → (what is under it)". The next left click is the target:

- an item in a bag or a container (with the panels open);
- a character, a living one or one of the dead;
- a piece of furniture or anything standing in the world;
- a bare tile.

`Escape` or a right click cancels. There is no range: anything on screen can be the target.

### What happens

The game looks for a rule naming the item (or one of its tags) and the target. If one matches, it happens: its line is printed in the log, or its action is carried out. If none matches, the log says "Nothing interesting happens."

Two rules exist today, both lines only:

- A [[Torch]] on a campfire: "You hold the torch to the fire. It is already burning."
- A [[Waterskin]] on a well: a line saying the rule works. The well's own menu is what fills a waterskin.

Everything else (lighting and feeding fires, filling waterskins, crafting) is done through the menus of the things themselves.

## With friends

A guest's Use is sent to the host with the item and the target, and the host carries it out as that player. The line goes to the guest's log.

## See also

- [[Inventory]]
- [[Crafting]]

## Sources

<!-- sources at 9205ad7 -->
- `src/interact.js:1015-1090`: Use on an item's menu
- `src/interact.js:1095-1147`: Use on a slot's menu
- `src/use.js:42-104`: the Use mode: the outline, the label, the next click, cancelling, no range
- `src/ui/inventory-panel.js:476-478`: a click on an item in a panel is the target
- `src/main.js:649-657`: a character, else a prop, else the tile
- `src/main.js:932-938`: a click on the world applies while the panels are closed
- `src/interactions.js:1-49`: rows by item id or tag and target; the default "Nothing interesting happens."
- `data/interactions.json:4-5`: the two rows, both messages
- `src/interact.js:537-581`: the well's own menu fills waterskins
- `src/interact.js:350-380`: fires lit and fed from their menus
- `src/use.js:81-87`: a guest's Use sent to the host
- `src/ui/inventory-actions.js:364-392`: the host runs it as that player
- `src/host.js:225-229`: the line goes to the guest's log
