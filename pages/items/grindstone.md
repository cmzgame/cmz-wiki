---
title: Grindstone
categories: [Props, Combat]
aliases: [Grindstones, Sharpen, Sharpening]
summary: The smithy's grindstone: sharpens an edged weapon or tool for free, to a little less each time, until it is past repair.
---

{{infobox-prop grindstone}}

The **grindstone** stands in the forge room of [[The smithy]], beside the [[Anvil]]. It sharpens a worn weapon or tool with an edge, for nothing, to a share of its full condition that falls with every repair the thing has had. It is one of the two places that repair what wears (see [[Durability#Repairs|Durability]]); the anvil is the other, and it does more but costs a bar or a plank. It is open to everyone. {{planned note="Blacksmithing at level two will be the grindstone's gate once the skills are built; until then no one is refused."}}

## Using it

Right-click the grindstone. Its menu has one entry for each worn thing with an edge that you carry, in a hand, on the [[Belt]], or in your bag, that it can still better. The entry names the thing, its condition now, and what sharpening brings it to, as "Sharpen arming sword (*now*% to {{pct tuning.work.grindstone.ceilings.0}})" for a sword never repaired. It takes {{n tuning.work.grindstone.seconds seconds}}; moving ends it. Then the game says what it reached and how many more repairs the thing will take: "You sharpen the arming sword: {{pct tuning.work.grindstone.ceilings.0}}. It will take ... more repairs."

What it reaches is set by how many repairs the thing has had, at either place:

- never repaired: {{pct tuning.work.grindstone.ceilings.0}}
- repaired once: {{pct tuning.work.grindstone.ceilings.1}}
- repaired twice: {{pct tuning.work.grindstone.ceilings.2}}
- repaired {{n tuning.work.grindstone.ceilings.length}} times: past repair. Its entry is greyed, "Sharpen arming sword (worn past repair)", and it wears on until it breaks.

A sharpening uses up a repair as an anvil's does, so a sword sharpened once reaches only {{pct tuning.work.anvil.ceilings.1}} at the anvil after.

The things with an edge are the [[Arming sword]], the [[Hatchet]], the [[Throwing spear]], the [[Scythe]], and the [[Dirk]]. The [[Flanged mace]], the [[Pickaxe]], and the [[Smith's hammer]] have none and go to the anvil; so do the wooden things, the [[Hunting bow]], the [[Hoe]], the [[Fishing rod]], and the [[Shovel]].

A thing already at or above what the stone would bring it to has no entry. With nothing to sharpen, the menu has one greyed line: "Sharpen (no dull blade carried)". When every worn blade you carry is already as sharp as the stone can make it, the line is "Sharpen (nothing it can better)" instead.

The reasons it can refuse, if a sharpening is asked for another way:

- "Only an edge is sharpened on a grindstone."
- "That cannot be sharpened.": the thing does not wear, or has no repair.
- "It is as sharp as the stone can make it."
- "It is worn past repair."
- "You are not carrying that."

{{prop-sections grindstone}}

## With friends

A guest's entry is sent to the host by its label, and the host runs it for that player: the walk to the stone, the bar, and the sharpening. The thing's condition and its repair count are kept on the item and travel in the player's record, so the next menu and hover card read the same on every screen.

## Sources

<!-- sources at 31d330a -->
- `data/sprites/grindstone.json`: the grindstone, a fixed prop, `repair: "grindstone"`
- `tools/mapgen/valley.py:373`: the grindstone in the smithy's forge room, by the anvil
- `src/repair.js:1-10`: the two places, the one count per item, every repair lowering the next ceiling; skills not read yet
- `src/repair.js:22-27`, `data/items.json:6-52`: what can be repaired: a thing that wears with a `repair` block; `edged` on the hatchet, sword, spear, scythe, and dirk
- `src/repair.js:44-48`, `data/tuning.json:167-172`: the ceiling is the ladder's rung at the repair count; none past the last; the seconds
- `src/repair.js:56-72`: the refusals
- `src/repair.js:74-84`: what is carried: the hands, the belt, the bag
- `src/repair.js:94-108`: the sharpening sets the condition to the ceiling, counts the repair, and says what is left
- `src/repair.js:115-156`: the menu: one entry per worn edged thing it can better, the label's numbers, greyed past repair, the one greyed line with nothing to do, "(nothing it can better)" for blades above its ceiling (game #454, at 6e3ab37)
- `src/interact.js:886-903`: the prop's menu takes the grindstone's entries
- `src/interact.js:1084-1096`: moving or leaving reach ends the bar
- `src/net.js:600-610`, `src/net.js:1261-1263`, `src/interact.js:136-141`: a guest's entry sent by label and run on the host as that player
- `src/net.js:827-830`, `src/repair.js:50-52`: the wear on the wire to two decimals, so a guest's label is the host's

{{navbox props}}
