---
title: Sawpit
categories: [Props, Crafting]
aliases: [Saw pit, Sawing, Saw]
summary: The joiner's sawpit: saws a log into planks with no hatchet.
---

{{infobox-prop sawpit}}

The **sawpit** is in the lumber yard of [[The joiner]], south of the workshop. It saws a [[Log]] into [[Plank|planks]], as many as a hatchet's Split gives, with no [[Hatchet]] needed. It is open to everyone. {{planned note="Woodcutting at level three will be the sawpit's gate once the skills are built; until then no one is refused."}}

## Using it

With a log on you, in a hand, on the [[Belt]], or in your bag, right-click the sawpit and choose **Saw a log into {{n items.log.splitsInto.count}} planks**, or press `E` beside it. It takes {{n tuning.work.saw.seconds seconds}}; moving ends it. One log is sawn each time: "You saw the log into {{n items.log.splitsInto.count}} planks." The planks go into your bag, and those that do not fit fall at your feet: "...; ... fall at your feet."

With no log on you, the entry is greyed: "Saw a log into {{n items.log.splitsInto.count}} planks (no log carried)". Asked for another way, it refuses with "You need a log."

What the sawpit gives is always what a log splits into, so it and a hatchet's **Split into {{n items.log.splitsInto.count}} planks** never differ. The difference is the tool: Split needs the log in your own bag and a hatchet on you; the sawpit takes the log from anywhere on you and needs nothing.

{{prop-sections sawpit}}

## With friends

A guest's entry is sent to the host by its label, and the host runs it for that player: the walk, the bar, the log taken, and the planks put in that player's bag or at their feet, which every player then sees.

## Sources

<!-- sources at 31d330a -->
- `data/sprites/sawpit.json`: the sawpit, a fixed prop, `saw: true`
- `tools/mapgen/valley.py:355`: the sawpit in the joiner's lumber yard
- `src/sawpit.js:1-5`: no hatchet; the sawn item and what it gives are data; skills not read yet
- `src/sawpit.js:25-29`, `data/tuning.json:170`, `data/items.json:4`: what one cut gives is the log's own `splitsInto`; the seconds
- `src/sawpit.js:31-50`: the verb: a log from anywhere carried, the planks to the bag, the rest at the feet, the messages, "You need a log."
- `src/sawpit.js:52-75`: the one entry, `E` while a log is carried, greyed "(no log carried)" without one
- `src/interact.js:886-903`: the prop's menu takes the sawpit's entry
- `src/interact.js:1084-1096`: moving or leaving reach ends the bar
- `src/interact.js:1398-1414`: Split needs the log in your own bag and a hatchet carried (game #222)
- `src/net.js:600-610`, `src/net.js:1261-1263`, `src/interact.js:136-141`: a guest's entry sent by label and run on the host as that player

{{navbox props}}
