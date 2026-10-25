---
title: Herbs
categories: [Gatherables, The world, Mechanics]
aliases: [Herb, Herbalism, Gathering herbs, Dye plants, Dye plant]
summary: Eleven kinds of herb grow wild about the valley, one plant here and there like weeds; each is gathered by hand for one of its herb, and another grows elsewhere a game day or two later. Nothing uses them yet.
---

**Herbs** grow wild in [[The valley]]: eleven kinds, scattered one plant at a time like weeds, never in patches. Each is a [[Gatherables|gatherable]]: outlined, swaying when clicked or walked through, and gathered by hand for one of its herb. A gathered plant is gone, and another of its kind grows somewhere else in its area {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days later, so the valley keeps about the same number. Nothing uses an herb yet: potions, the herb tea, and seasoning are not built, and the three dye plants are not yet asked for at the [[Dye vat]].

## The kinds

| Herb | In the valley | Where it grows | Card |
|---|---|---|---|
| [[Sage]] | {{n valley.resources.sage.count}} | Anywhere on open grass | Herb |
| [[Nettle]] | {{n valley.resources.nettle.count}} | Anywhere on open grass | Herb |
| [[Feverfew]] | {{n valley.resources.feverfew.count}} | Anywhere on open grass | Herb |
| [[Yarrow]] | {{n valley.resources.yarrow.count}} | Anywhere on open grass | Herb |
| [[Woad]] | {{n valley.resources.woad.count}} | Anywhere on open grass | Dye plant |
| [[Madder]] | {{n valley.resources.madder.count}} | Anywhere on open grass | Dye plant |
| [[Weld]] | {{n valley.resources.weld.count}} | Anywhere on open grass | Dye plant |
| [[Mana herb]] | {{n valley.resources.mana_herb.count}} | Within {{n valley.resources.mana_herb.water tiles}} of water, along the river and the brook west of [[Long Acre]] | Herb |
| [[Nightshade]] | {{n valley.resources.nightshade.count}} | Within {{n valley.resources.nightshade.near tiles}} of a tree | Herb |
| [[Wolfsbane]] | {{n valley.resources.wolfsbane.count}} | Within {{n valley.resources.wolfsbane.near tiles}} of a tree | Herb |
| [[Grave moss]] | {{n valley.resources.grave_moss.count}} | Inside the graveyard's wall, at [[The chapel]]; gathered only at night | Herb |

The valley is wooded, so "near a tree" covers most of its open ground: nightshade and wolfsbane lean toward the woods but are found almost anywhere. The mana herb grows only by water; every other pond in the valley lies where nothing grows. "Mana herb" and "Grave moss" are placeholder names, and grave moss a placeholder kind, until the game names the graveyard's herbs.

Each herb is drawn as a small plant of its own colour and shape, with a clump of leaves at its foot: sage grey-green with violet tips, nettle dark and toothed, feverfew white daisies, yarrow flat white heads, the mana herb blue-teal with a glowing point, nightshade purple bells and black berries, wolfsbane blue-violet hoods, grave moss a pale tuft, woad yellow clusters, madder yellow-green stars, and weld a tall yellow spike. Its icon in the bag is the same picture.

## How it works

### Where an herb may grow

Every herb grows on natural ground: the valley's own grass, with nothing on the tile and no wall on its edges, never on a road, water, a built floor, tilled soil, or a rug, never inside a room or a fenced yard or pen, never on the ground kept clear round the buildings and places, and never under anyone, living or dead, or an animal. Grave moss is the one exception: the graveyard is its own place, so it grows among the headstones inside the fence. The valley starts with its full count of each kind, at spots chosen by the map's own rule, the same in every new world. Herbs do not grow in [[The wild]].

### Gathering

Right-click an herb and choose **Gather sage** (named for the herb), or press `E` beside it. You must stand within {{n tuning.world.pickReach tiles}} of it with no wall in the way. The work takes {{n sprites.herb_sage.gather.seconds seconds}}, and gives {{n sprites.herb_sage.gather.count.0}} of the herb ("You gather ... sage."), into your bag; when the bag is full it falls at your feet ("You gather ... sage; ... at your feet."). The plant is then gone. No tool is needed. A small Herbalism number floats up over you as you gather.

**Grave moss** can be gathered only at night, between {{n census.constants.clock.NIGHT_START}} and {{n census.constants.clock.NIGHT_END}} o'clock. By day its entry is greyed, "Gather grave moss (only at night)", and the gather is refused: "It can be gathered only at night."

Each herb has a Herbalism level in the game's data, from {{n sprites.herb_sage.gather.level}} for the common herbs to {{n sprites.herb_grave_moss.gather.level}} for grave moss. The skills are not built, so no one is refused.

{{planned doc=39 note="Herbalism's levels as the herbs' gates, once the skills are built."}}

### Coming back

An herb gathered inside the valley is owed back to its kind: {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days later (rolled for each), a new one simply appears at a random spot elsewhere in its kind's area that passes the same test, never on the tile the last one stood on. The game looks for herbs that are due every {{n tuning.resources.checkSeconds seconds}} of its clock, {{n tuning.resources.tries}} tries a look; if none finds a free spot it waits for the next look. Grave moss comes back only at night: one that falls due by day waits until dark. The game's clock moves only while someone is in the world, so nothing is lost while you are away.

### What they are for

Nothing yet. Each herb's card names the herb, its kind (**Herb**, or **Dye plant** for woad, madder, and weld), and where it grows: "Grows wild in the valley; gathered by hand.", "Grows wild near water; gathered by hand.", "Grows wild near trees; gathered by hand.", or "Grows wild in the graveyard; gathered by hand, only at night."

{{planned doc=39 note="Potions, the herb tea, and seasoning from the herbs; the cure, with mushrooms, when infection is real."}}

{{planned doc=43 note="A dye that costs a dye plant (woad, madder, weld) at the dye vat; the vats cost nothing today."}}

## Numbers

- Herbs in the valley: {{n valley.resources.sage.count}} sage, {{n valley.resources.nettle.count}} nettle, {{n valley.resources.feverfew.count}} feverfew, {{n valley.resources.yarrow.count}} yarrow, {{n valley.resources.woad.count}} woad, {{n valley.resources.madder.count}} madder, {{n valley.resources.weld.count}} weld, {{n valley.resources.mana_herb.count}} mana herb, {{n valley.resources.nightshade.count}} nightshade, {{n valley.resources.wolfsbane.count}} wolfsbane, {{n valley.resources.grave_moss.count}} grave moss.
- A gather: {{n sprites.herb_sage.gather.count.0}} herb in {{n sprites.herb_sage.gather.seconds seconds}}.
- Back elsewhere: {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days.
- Grave moss: between {{n census.constants.clock.NIGHT_START}} and {{n census.constants.clock.NIGHT_END}} o'clock.

## With friends

Gathering is a menu entry the host runs: a guest's choice of "Gather nettle" is sent with the plant's id, checked on the host (reach, the night, a wall in the way), and the herb goes into the guest's bag. The plant's going reaches every player with its part of the map, and so does a new one. The herbs still owed are the host's, kept with the saved world. If two players gather one plant at once, the second finds it gone.

## Settings that change it

- **Trees** ([[World rules]], default on): with it off, nightshade and wolfsbane still count the trees that would have stood.

## See also

- [[Gatherables]], [[Mushrooms]], [[Clay]], [[Salt]]
- [[The chapel]], [[Dye vat]]
- [[Levers]]

## Sources

<!-- sources at 6e3ab37 -->
- `data/maps/valley.json` `resources`, `tools/mapgen/valley.py:625-643`: the eleven kinds, their counts, areas (the river's corridor and the brook for the mana herb, the graveyard for grave moss), `water`, `near`, `own`, `night`, `where`; not solid; one sprite each (game #457)
- `data/sprites/herb_sage.json` (and the other ten `herb_*`): each `gather` block (item, count, seconds, skill, level; `night` on grave moss), `interactable`, the design its picture and icon are drawn from
- `data/items.json`: the eleven herbs, tagged `herb` (and `dye` for woad, madder, and weld), their icons generated from their nodes' designs
- `src/map.js:619-653`: where a node may stand: its area, its floors, nothing on the tile, no wall, a tree near, water near, not in a room or a fenced yard unless its area is its own place, no body
- `src/map.js:580-592`: water within so many tiles, of a named water when the kind names one
- `src/map.js:689-725`, `src/map.js:2623-2633`: the kinds read from the map, clipped to the valley's bounds; the count made up at the load by hash
- `src/gather.js:28-51`, `src/gather.js:54-85`: the verb: reach and a wall in the way, the night, the count to the bag or the feet, the node owed and gone, the words
- `src/gather.js:92-119`, `src/interact.js:994`, `src/interact.js:1149-1171`: the menu's timed entry, greyed with why; a simple action, so `E` runs it
- `src/clock.js:11-15`, `src/clock.js:68-74`: night from 23:00 to 06:00
- `src/resources.js:36-45`, `src/resources.js:52-90`: owed back after its days, a new spot, never the last one's tile; the graveyard's only at night
- `src/interact.js:1771-1792`: a body walking through a non-solid gatherable sways it
- `src/item-info.js:72-98`, `src/item-info.js:135-139`: the card's kind (Herb, Dye plant) and where it grows
- `data/tuning.json:115-123` `floaters.gathers`: the Herbalism number on a gather

{{navbox items}}
