---
title: Salt
categories: [Items, Materials, Gatherables]
aliases: [Salt rock, Salt rocks, Mine salt]
summary: Salt mined from the salt rocks at the iron workings with a pickaxe in hand; a mined rock rises again elsewhere in the ore area; nothing uses salt yet.
---

{{infobox-item salt}}

**Salt** is a material mined from the **salt rocks** at [[The iron workings]], with a [[Pickaxe]] in hand. The valley keeps about {{n valley.resources.salt.count}} salt rocks, in the same area as the ore rocks: the workings and the woods round them. A mined salt rock is gone, and another rises out of the ground elsewhere in that area {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days later. Nothing uses salt yet: salting food is not built.

## Salt rocks

A salt rock is a pale grey-white lump with crystals on it. It is a [[Gatherables|gatherable]], outlined, and sways when clicked; it is solid, so you walk round it (it blocks a circle {{n sprites.salt_rock.collide.radius}} tiles in radius). It cannot be carried. A new one grows only on natural ground in the ore area, the iron workings included, by the same rule as the ore rocks, and rises whole through the ground line over {{n tuning.resources.riseSeconds seconds}} with a little soil and dust at its foot (see [[Mining#Coming back|Mining]]).

## Mining

With a pickaxe in a hand, right-click a salt rock and choose **Mine salt**. Without a pickaxe the entry is greyed, "Mine salt (need a pickaxe)". You must stand within {{n tuning.world.pickReach tiles}} of it with nothing that blocks sight between you. The work takes {{n sprites.salt_rock.mine.seconds seconds}} and gives {{n sprites.salt_rock.mine.count.0}} salt, into the bag, or at your feet when it is full. The rock is then gone and owed back ({{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days). A small Mining number floats up over you.

The card reads "Salt", its kind "Material", and "Mined from salt rocks at the iron workings, a pickaxe in hand." The game's data records Mining {{n sprites.salt_rock.mine.level}} for it; the skills are not built, so no one is refused.

{{planned doc=39 note="Salting food, at Cooking 5."}}

{{item-sections salt}}

## With friends

A guest mines through the same menu entry, sent to the host with the rock and checked there against the guest's hands, reach, and line of sight; the salt goes into the guest's bag. The rock's going, and a new one rising, reach every player with their part of the map, and every screen draws the rise from the same moment.

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json`: salt, a material, its icon generated from a lump design with crystals in the rock's colours (game #457)
- `data/sprites/salt_rock.json`: the salt rock: solid (`collide`), `interactable`, not carried; its `mine` block (item, count, seconds, `gone`, level)
- `data/maps/valley.json` `resources.salt`, `tools/mapgen/valley.py:645`: the count, the ore area, the iron workings open to it, `rise`
- `src/mining.js:19-55`, `src/interact.js:834-852`: Mine salt with a pickaxe in a hand, greyed without one; reach and a clear line; the bag or the feet; gone and owed back
- `src/resources.js:36-66`, `src/resources.js:93-103`: owed back after its days, rising from its arrival
- `src/item-info.js:72-98`: the card's line
- `data/tuning.json:115-123` `floaters.gathers`: the Mining number

{{navbox items}}
