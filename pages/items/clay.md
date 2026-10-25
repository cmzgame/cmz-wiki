---
title: Clay
categories: [Items, Materials, Gatherables]
aliases: [Clay bank, Clay banks, Dig clay]
summary: Clay dug from the clay banks on the river's dirt bank, with a shovel carried; a dug bank comes back elsewhere along the river; nothing uses clay yet.
---

{{infobox-item clay}}

**Clay** is a material dug from the **clay banks** on the river's bank in [[The valley]], with a [[Shovel]] carried. The valley keeps about {{n valley.resources.clay.count}} banks. A dug bank is gone, and another appears elsewhere along the river {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days later. Nothing uses clay yet: the jugs and jars it is meant for are not built.

## Clay banks

A clay bank is a low reddish-brown mound on the river's own dirt bank, beside the water of the river, from the top of the valley to the bottom but for the ford's stretch, where the drove's road meets the water. It is a [[Gatherables|gatherable]], outlined, and sways when clicked; it is solid, so you walk round it like a [[Rocks|rock]] (it blocks a circle {{n sprites.clay_bank.collide.radius}} tiles in radius). It cannot be carried.

### Where a new one may appear

Only on the dirt of the river's bank within {{n valley.resources.clay.water tile}} of the river's water, with nothing on the tile and no wall on its edges; never on a road, inside a room or a fenced yard, or under anyone. A new bank simply appears; it does not rise like a rock. The valley's first banks are placed by the same rule, the same in every new world.

## Digging

With a shovel anywhere on you (a hand, the belt, or the bag), right-click a bank and choose **Dig clay**, or press `E` beside it, within {{n tuning.world.pickReach tiles}} with no wall in the way. It takes {{n sprites.clay_bank.dig.seconds seconds}} and gives {{n sprites.clay_bank.dig.count.0}} clay, into the bag, or at your feet when the bag is full. Without a shovel the entry is greyed, "Dig clay (need a shovel)", and the dig is refused: "You need a shovel." The bank is then gone, and owed back: {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days later a new one appears at another spot along the river (see [[Herbs#Coming back|Herbs]] for how the comeback is looked for). A small Mining number floats up over you as you dig.

The card reads "Clay", its kind "Material", and "Dug from the clay banks by the river, a shovel carried." The game's data records Mining {{n sprites.clay_bank.dig.level}} for digging; the skills are not built, so no one is refused.

{{planned doc=39 note="Jugs and jars of clay, shaped at the workbench and fired in an oven."}}

{{item-sections clay}}

## With friends

A guest digs through the same menu entry, sent to the host with the bank's id and checked there against the guest's own shovel and reach; the clay goes into the guest's bag. The bank's going, and a new one, reach every player with their part of the map. The banks still owed are the host's, kept with the saved world.

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json`: clay, a material, its icon generated from a lump design in the bank's colour (game #457)
- `data/sprites/clay_bank.json`: the bank: solid (`collide`), `interactable`, not carried; its `dig` block (item, count, seconds, level, the tool verb `dig`)
- `data/maps/valley.json` `resources.clay`, `tools/mapgen/valley.py:629-633`, `tools/mapgen/valley.py:644`: the count, the river's corridor less the ford's band, the dirt floor, water within one tile, of the river
- `src/map.js:619-653`, `src/map.js:580-592`: where a bank may stand: its floor, water of its group near, nothing on the tile, no wall, not in a room or a fenced yard, no body
- `src/gather.js:41-85`, `src/gather.js:92-119`, `src/inventory.js:104-108`: Dig clay with a tool carried that lists `dig`, greyed and refused without one; the bag or the feet; the bank gone and owed back
- `data/items.json:71`: the shovel lists `dig`
- `src/resources.js:36-66`: owed back after its days at another spot; no rise
- `src/item-info.js:72-98`: the card's line
- `data/tuning.json:115-123` `floaters.gathers`: the Mining number on a dig

{{navbox items}}
