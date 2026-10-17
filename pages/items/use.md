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

The rules today:

- A [[Tinderbox]] or a lit [[Torch]] on a campfire that is out but has fuel in it: "You light the fire." On a torch post's torch that is out, or on an unlit torch in your hand or on your belt: "You light the torch." (A torch in a bracket is lit from its own menu instead; see [[Torch posts and brackets]].) An unlit torch used on any burning fire is lit from it: "You light the torch at the fire." Each needs the target within {{n census.constants.burn.DIP_REACH tiles}} and in sight, never through a wall, and says why when it refuses ("That cannot be lit." for a hearth, an oven, or the forge; "It has nothing to burn."; "There is a wall in the way."; a torch in the bag cannot be lit this way). See [[Torch]] and [[Fire]].
- [[Arrow|Arrows]] on any fire that burns fuel: the whole stack you carry becomes [[Fire arrow|fire arrows]], "You dip the arrows in the fire." It refuses when the fire is out, when you are too far from it, or when the arrows are not on you (in an open chest or a body: "Take the arrows out first.").
- A [[Waterskin]] on a well: a line saying the rule works. The well's own menu is what fills a waterskin.

Everything else (feeding fires, filling waterskins, crafting) is done through the menus of the things themselves.

## With friends

A guest's Use is sent to the host with the item and the target, an item in a hand or on the belt named by its slot, and the host carries it out as that player, a dip at a fire or a light included. The line goes to the guest's [[Chat log|chat log]].

## See also

- [[Inventory]]
- [[Crafting]]

## Sources

<!-- sources at 2ea0d24 -->
- `src/interact.js:1031-1107`: Use on an item's menu
- `src/interact.js:1112-1164`: Use on a slot's menu
- `src/use.js:42-105`: the Use mode: the outline, the label, the next click, cancelling, no range
- `src/ui/inventory-panel.js:481-483`: a click on an item in a panel is the target
- `src/main.js:801-809`: a character, else a prop, else the tile
- `src/main.js:1086-1093`: a click on the world is the target, the panels open or not
- `src/interactions.js:1-49`: rows by item id or tag and target, `fire` for any that burns fuel, the first match wins; the default "Nothing interesting happens."
- `data/interactions.json`: the rows: light (a tinderbox or a torch on a campfire, a torch post, a torch, a fire), dip, and the well's note
- `src/burn.js:74`, `src/burn.js:97-199`: the `light` verb: what it lights, the torch lit at a fire, the reach and the line of sight, the refusals
- `src/use.js:94-104`: a row's action run, its line said on success, the reason on a refusal
- `src/burn.js:74-95`: the dip's reach, its refusals (arrows not carried: "Take the arrows out first."), the whole stack changed
- `src/interact.js:545-589`: the well's own menu fills waterskins
- `src/interact.js:352-382`: fires lit and fed from their menus
- `src/use.js:81-87`: a guest's Use sent to the host
- `src/ui/inventory-actions.js:368-399`: the host runs it as that player
- `src/host.js:267-271`: the line goes to the guest's chat log
