---
title: Planning
categories: [Building, Interface]
aliases: [Planning tool, Plan, Plans, Ruler, Rulers, Measuring, Tile count]
summary: The Planning tool: rulers laid on the ground in five pastel colours, each saying how big it is, kept in the world until you take them up.
numbersOk: true
---

<!-- typed: "7 tiles", "5 × 4 tiles (20)", and "11 tiles" are the game's own words quoted as examples of a ruler's size, not numbers of the game's -->

**Planning** is a tool for laying out what you mean to build before you build it (Michael's ruling of 2026-10-30: "It lets me lay down any number of rulers ... think pastel post it notes, yellow blue green purple pink"). Drag on the ground and a ruler stays there, outlined in a pastel colour with a tag that says how big it is; hover over one and click to take it up.

## How it works

### Opening it

Press **P**, or pick **Plan** at the foot of any right-click menu, beside **Build**. The Planning panel opens on the left of the screen, where the build palette sits; the two never open together, so opening one closes the other. It stays open until you close it: its **×** button, Escape, or P again. A right click, picking up furniture, or opening the bag also closes it. Like the build palette, it is refused while you carry furniture ("Your hands are full.") or have the bag open ("Close your bag to plan.").

### Laying a ruler

Pick a colour on the panel: **yellow**, **blue**, **green**, **purple**, or **pink**. Press on the ground and drag: the rectangle from where you pressed to the tile under the cursor is outlined in that colour, its edge tiles lit, and the prompt says its size, "7 tiles" for a straight run and "5 × 4 tiles (20)" for a rectangle. Let go and it stays, on the floor you stand on, with its size on a tag in its own colour at its middle. Lay as many as you like, in any colours, overlapping or not.

### Taking one up

Hover over a ruler's outline: it turns white and the prompt says "click to take it up". Click, and it is gone.

### Seeing them

Rulers are drawn on the ground of your floor and the floors below it, and stay when the panel closes. The panel's **Show plans** hides them from your own view (and shows them again); the panel also says how many the world holds.

## Numbers

- A ruler is at most {{n census.constants.plans.MAX_SPAN tiles}} on a side; a world keeps at most {{n census.constants.plans.MAX_PLANS}} of them ("Too big to plan", "Too many plans: take some up").

## With friends

Rulers belong to the world, not to one player: everyone in it sees every ruler, anyone can lay one or take one up, and they are kept in the world's save. A guest's drag and click go to the host as commands, and the host's list comes back to every guest whenever it changes.

## See also

- [[Building]]: the build palette, which Planning sits beside
- [[Controls]]: P and the rest of the keys

## Sources

<!-- sources at f0336bd -->
- `src/plans.js`: a plan's record, the five colours, its size in words, the limits, how a plan under the cursor is found (game #617)
- `src/placement.js`: the planning mode, the drag, the click that takes one up, the `plan` and `unplan` commands a guest sends (game #617)
- `src/ui/planning-panel.js`, `src/ui/plan-labels.js`, `src/render/props.js` (`emitPlans`): the panel, the size tags, the outlines (game #617)
- `src/game.js`, `src/net.js`: the plans in the save, in a frame when they change, in the sync check (game #617)
- `docs/02-decisions.md`, 2026-10-30 (The Planning tool): Michael's request; the ruler that was in the build menu (game #615) moved here
