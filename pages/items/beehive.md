---
title: Beehive
categories: [Props, Gatherables, Food]
aliases: [Beehives, Hive, Hives, Skep, Take honey]
summary: A straw skep on a plank stand, with bees about it by day, that gives a pot of honey, and has more some game days later.
numbersOk: true
---

<!-- typed: the bees' three to six and eight seconds are fields of the `BEES` object in `src/render/bees.js`, which the census does not read -->

{{infobox-prop beehive}}

A **beehive** is a straw skep on a plank stand. Hives stand in three places: two at [[Your cottage]], along the south of the farm plot; three in the yard of [[Hollow Farm]], east of the lane; and three in the garden of [[The manor]]. It is a [[Gatherables|gatherable]]: outlined, and a click sways it. Each gives a [[Pot of honey]], and has more {{n tuning.work.honey.days}} [[The day|game days]] after it was last taken from. Every hive has honey at the start. Taking it is open to everyone. {{planned note="Beastlore at level five will be the hives' gate once the skills are built; until then no one is refused."}}

## Using it

Right-click a hive and choose **Take honey**, or press `E` beside it. It takes {{n tuning.work.honey.seconds seconds}}; moving ends it. You get {{n tuning.work.honey.count.0}} pot of honey: "You take a pot of honey from the hive." It goes into your bag, or falls at your feet if the bag has no room ("...; ... at your feet."). {{planned doc=02 note="Ruled 2026-10-26, not built (game #500): taking honey will need an empty clay jar carried, which it fills; without one, 'You need a clay jar to take honey.'"}} The Beastlore skill's picture rises over your head with the count (see [[Interface#Floating numbers|Floating numbers]]).

A hive that has been taken from has a greyed entry until its honey is back, saying how many days are left, rounded up: "No honey yet (more in about ... days)". Apart from its bees (below), the hive looks the same either way. Asked for honey another way, an empty hive refuses with "The bees have made no more honey yet."

## Bees

By day, from {{n census.constants.clock.DAWN_END}} o'clock until dusk at {{n census.constants.clock.DUSK_START}} o'clock, small yellow-and-black bees fly in loops above and beside every hive in sight: three to six of them, the number fixed for each hive. None are out from dusk through the night to dawn. Most of each loop is in front of the hive; a bee on the far side passes behind it. For a few seconds after its honey is taken, a hive is livelier: six bees, in wider loops, darting quicker, settling over eight seconds of the game's clock. A hive whose honey was taken while nobody was looking is calm when it comes into view. The bees stop while the game is paused. They are only a picture: they do nothing and cannot be touched.

{{prop-sections beehive}}

## With friends

Every player sees the same bees: each screen draws them from the hive and the game's clock, and a hive stirs on every screen when anyone takes its honey. A guest's **Take honey** is sent to the host by its label, and the host runs it for that player: the walk, the bar, and the honey into that player's bag. The time the hive has honey again is kept on the hive, saved with the world and sent to every player with its part of the map, so a hive emptied by one player is empty for all. When two players take from one hive at once, the second finds it taken.

## Sources

<!-- sources at 261cd7a -->
- `docs/02-decisions.md` (at 5eb40e6): honey into a clay jar, ruled and not built (game #499, #500)
- `data/sprites/beehive.json`: the drawn skep, `interactable`, fixed, `hive: true`
- `tools/mapgen/valley.py:195-198`, `tools/mapgen/valley.py:313`, `tools/mapgen/valley.py:456-458`: two hives at the cottage, three in the manor's garden, three in Hollow Farm's yard
- `src/hives.js:1-7`: honey until taken, more `work.honey.days` later; skills not read yet
- `src/hives.js:104-111`, `data/maps/valley.json`: a hive has honey with no `honeyAt` or once the clock passes it; no hive is placed with one
- `src/hives.js:113-136`, `data/tuning.json:171`: the verb: the count, the bag or the feet, `honeyAt` set the days on, the chunk touched, the messages; the second at one hive finds it taken
- `src/hives.js:138-158`: the menu: Take honey (`E`), or greyed with the days left, rounded up
- `src/clock.js:5`: a game day's length
- `src/floaters.js:58-64`, `data/tuning.json:112`: the gather floater for taking honey, Beastlore
- `src/interact.js:886-903`: the prop's menu takes the hive's entry
- `src/interact.js:1084-1096`: moving or leaving reach ends the bar
- `src/net.js:600-610`, `src/net.js:1261-1263`, `src/interact.js:136-141`: a guest's entry sent by label and run on the host as that player
- `src/map.js:1076-1088`, `src/map.js:1096-1114`: the prop's fields, `honeyAt` among them, saved and sent with its chunk
- `src/render/bees.js:1-60`, `src/clock.js:5`: the bees: by day only, three to six by the hive's id, their loops in front of and behind the hive, the stir after honey is taken read off `honeyAt`, on the sim clock, drawn by every client and never sent (game #451, at 261cd7a)

{{navbox props}}
