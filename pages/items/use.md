---
title: Use
categories: [Items, Mechanics]
aliases: [Use mode, Interactions, Nothing interesting happens, Use item on]
summary: Use on any item's menu, then click anything: if the game has a rule for the pair it happens, and otherwise "Nothing interesting happens."
---

**Use** is on every item's menu, wherever the item is: in your bag, in a container, in a hand, equipped as clothing, or on the belt. It picks the item as the thing you are about to use, and your next click is what you use it on. Anything can be used on anything; where the game has no rule for the pair, the chat log says "Nothing interesting happens."

## How it works

### Picking a target

After **Use**, the item stays where it is, outlined, and a label follows the cursor: "Use (item) → (what is under it)". The next left click is the target:

- an item in a bag or a container (with the panels open);
- a character, a living one or one of the dead;
- a piece of furniture or anything standing in the world;
- a bare tile.

The panels may stay open: a Use begun from the bag can be aimed at anything in the world with the bag still up.

`Escape` or a right click cancels. Use itself has no range: anything on screen can be the target, though a rule's action may have its own reach (dipping arrows needs you beside the fire).

### What happens

The game looks for a rule naming the item (or one of its tags) and the target; the first that matches is used. A rule's target may be one kind of thing (a campfire) or any lit fire that burns fuel. If one matches, it happens: its line is printed in the chat log, or its action is carried out and its line printed if the action succeeds; if the action refuses, the chat log gives the reason. If none matches, the chat log says "Nothing interesting happens."

Three rules exist today:

- A [[Torch]] on a campfire: "You hold the torch to the fire. It is already burning."
- [[Arrow|Arrows]] on any fire that burns fuel: the whole stack you carry becomes [[Fire arrow|fire arrows]], "You dip the arrows in the fire." It refuses when the fire is out, when you are too far from it, or when the arrows are not on you (in an open chest or a body: "Take the arrows out first.").
- A [[Waterskin]] on a well: a line saying the rule works. The well's own menu is what fills a waterskin.

Everything else (lighting and feeding fires, filling waterskins, crafting) is done through the menus of the things themselves.

## With friends

A guest's Use is sent to the host with the item and the target, and the host carries it out as that player, a dip at a fire included. The line goes to the guest's [[Chat log|chat log]].

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
- `src/main.js:953-960`: a click on the world is the target, the panels open or not (game commit 57df52e)
- `src/interactions.js:1-49`: rows by item id or tag and target, `fire` for any that burns fuel, the first match wins; the default "Nothing interesting happens." (game commit 3b7cb9a)
- `data/interactions.json`: the three rows (game commit 3b7cb9a)
- `src/use.js:94-104`: a row's action run, its line said on success, the reason on a refusal (game commit 3b7cb9a)
- `src/burn.js:73-94`: the dip's reach, its refusals (arrows not carried: "Take the arrows out first."), the whole stack changed (game commit 8bacbff)
- `src/interact.js:537-581`: the well's own menu fills waterskins
- `src/interact.js:350-380`: fires lit and fed from their menus
- `src/use.js:81-87`: a guest's Use sent to the host
- `src/ui/inventory-actions.js:364-392`: the host runs it as that player
- `src/host.js:225-229`: the line goes to the guest's chat log
