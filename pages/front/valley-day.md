---
title: Valley day
categories: [About]
aliases: [Valley day changes, What changed on valley day]
summary: Every system added or changed since the valley became the game's focus on 2026-10-17, with the pages to read before you play it, and what comes next.
numbersOk: true
---

<!-- typed: the game's pull request numbers, which are names, not the game's numbers -->
<!-- typed: the three by three and the three tiles ahead are loop bounds in the game's code (`src/bucket.js:53-54`, `src/farming.js:272`), not named numbers a lookup can read -->

On 2026-10-17 [[The valley]] became the game's focus. This page lists every system added or changed since then, in the game's merged pull requests from #183 on, grouped by what it touches. Each says in a sentence or two what changed and names the pages to read before you play it. [[Updates]] has the same changes sync by sync; this page keeps the whole day on one screen.

**Worth knowing before you play:** with the [[Survival]] setting off, your body counts as always full, so every food is refused with "You are full." and food never heals in that mode (see [[Food]]).

## Gathering and production

### Farming (game #206)

Till grass or dirt with a [[Hoe]] in hand, plant a seed, water it from a [[Waterskin]], and harvest it with E when it is ready, with its tool on you (game #222, below), for its food and {{n crops.crops.potato.seeds}} seeds back. Crops grow on the clock only while their soil is wet; dry soil pauses them and never kills them. A wall or closed shutters stop farming, while a fence or an open window does not. The farms' granaries hold seed of every crop.

Read: [[Farming]], [[Crops]], [[Hoe]], [[Potato seed]].

### Chopping: the hatchet and the stump (game #207)

Chopping a tree needs a [[Hatchet]] in a hand; without one the menu says "Chop down (need a hatchet)". A felled tree leaves an outlined [[Stump]], which the hatchet chops up for one more log, clearing the tile. The chest in your cottage's main room and the joiner's chest each hold a hatchet from the start.

Read: [[Hatchet]], [[Trees]], [[Stump]], [[Log]].

### Apple trees and the orchard (game #192)

Pick apples from a laden apple tree's menu; the tree is then bare for {{n sprites.tree_apple.pick.days}} days of the world's clock before it bears again. [[The orchard]] has rows of them, and three cottage gardens have one each. Picking needs a clear line to the tree, like farming. A world made with Trees off has none.

Read: [[Trees]], [[Apple]], [[The orchard]].

### Fishing (game #193)

Make a [[Fishing rod]] at the [[Workbench]] from a stick and a piece of cloth, with a [[Belt knife]] on you, hold it, and choose "Cast the line" at the water. A catch comes after {{n fishing.cast.waitMin}} to {{n fishing.cast.waitMax seconds}}, or nothing bites; walking away ends the cast. The river gives perch and trout, the pond carp and perch, and the brook by [[Long Acre]] (game #219) mostly trout. Grill the fish at a fire.

Read: [[Fishing]], [[Fishing rod]], [[Perch]], [[Trout]], [[Carp]].

### Mining, iron, and charcoal (game #210)

A [[Pickaxe]] in hand mines a rock for [[Stone]], and the rock is gone; an ore rock gives [[Iron ore]], stands mined out for {{n sprites.ore_rock.mine.days}} days, and comes back, so iron never runs out. Two new places hold them: [[The iron workings]] in the east woods and [[The quarry]] in the north-east, each with a hut whose chest holds a pickaxe. A [[Charcoal clamp]] burns logs into [[Charcoal]]: one stands in the smithy's yard, three at [[The charcoal burners]]. The smithy's chest holds the first iron bars and charcoal, so the forge and the anvil work from the first day.

Read: [[Mining]], [[Pickaxe]], [[Charcoal clamp]], [[Forge]], [[Anvil]].

### Cloth (game #216)

[[Flax]] is a sixth crop, and the weaver's chest holds its first seed and a [[Belt knife]]. The [[Loom]] weaves flax into [[Linen cloth]], and cloth into [[Bandage|bandages]] and linen clothes. With a knife on you, any garment tears into [[Rag|rags]] at the workbench, and a recipe that wants cloth takes a rag or plain cloth before a garment. The cap and the breeches are now the [[Linen cap]] and [[Linen breeches]], beside the [[Linen tunic]] (renamed in game #218), and cloth is the new [[Linen cloth]].

Read: [[Flax]], [[Linen cloth]], [[Rag]], [[Loom]], [[Bandage]].

### The bucket (game #211)

An item you carry: fill it at any water or a well, and pour it on a plot to water every crop in the three by three round it. One waits in your cottage's chest, and the workbench makes more from planks.

Read: [[Bucket]], [[Farming]].

### The scythe (game #213)

A swing with the [[Scythe]] harvests the ready grain on the three tiles ahead. Only rye is grain: the rye fields of [[Long Acre]] are its work, and the farms' granaries hold rye seed for more.

Read: [[Scythe]], [[Farming]].

### The farms and the mill (game #219)

[[Hollow Farm]], south of the lane, has the great barn with a [[Hoe]] on its rack, the farmhouse, a granary with seed of every crop, the pumpkin field with its scarecrow, plots of potatoes, cabbages, and garlic, and the farm pond. [[Long Acre]], in the north, has two rye fields, a flax strip, and a kitchen garden, with the brook and its plank footbridge beside it. [[The mill]] grinds grain into flour at its [[Millstones]], and the [[Miller]] lives there, alive and at risk. Every crop can now be grown, so bread, porridge, the stew, and a new [[Pumpkin pie]] can all be made.

Read: [[Hollow Farm]], [[Long Acre]], [[The mill]], [[Millstones]], [[Farming]].

### The tools you carry (game #222)

An action that would need a tool asks for it **on you**: in a hand, on the belt, or in the bag. Without it the entry is greyed and names the tool, and the action says "You need a smith's hammer." (or whichever it is).

- **A [[Smith's hammer]]:** building a door or a window, boarding up, pulling a board (which now gives the plank back), Remove, and the workbench's furniture, wheelbarrow, shield, bucket, hoe, and shovel.
- **A [[Hatchet]]:** a log wall, splitting a log into planks, and sticks from a plank.
- **A [[Belt knife]]:** the bow, the arrows, the rod, and tearing a garment into rags.
- **Harvest by crop:** rye with the [[Scythe]], potatoes and garlic with the [[Shovel]], cabbages and pumpkins with the knife; flax and apples by hand.

Your cottage's chest now holds a shovel too, and the joiner's a hammer, so the first potatoes, the first hoe, and the first furniture need no iron. The world rule Free building waives the hammer and the hatchet for building and Remove, but not for boards. A waterskin on the belt is now filled at water like one in the bag, and the [[Tinderbox]] can ride the belt.

Read: [[Smith's hammer]], [[Crafting]], [[Building]], [[Boards]], [[Farming]], [[Shovel]].

### The map on M (game #234, #235)

`M` opens the map: everything anyone in your world has seen, one colour a tile, with the walls as lines and a marker for each player, yours gold. It is drawn from the screen's angle, so map north is up and to the right. The wheel zooms, a drag moves it, and Centre brings you back; place names appear once you have seen them. The world keeps running while it is open.

Read: [[Map]], [[Controls]].

### The Onion-head Hat and the mohawk (game #229, #231)

The Onion-head Hat is now painted: a green hood with a brow over the eyes. A villager's or one of the dead's hood is drawn the same, in their own colour. The mohawk hairstyle was redrawn: a softer fin in the three-quarter views and a rounder side.

Read: [[Clothing]], [[Identities]].

### Hiding a worn item (game #243)

An eye on each worn slot of the character screen hides that item's look on your figure, for everyone who sees you, and keeps every use: a hidden belt keeps its slots and keys, a torch on it still lights, a bag keeps its grid. Click it again to show it.

Read: [[Clothing]], [[Belt]].

### Take All (game #251)

A **Take All** button on a container's panel (a chest, a bag on the ground, a body, a station's output) moves everything into your bag, then onto a free belt slot where it fits; what fits neither stays, with a word to say so. A bag with things in it stays put.

Read: [[Inventory]], [[Containers]], [[Corpses]].

### Smoother movement (game #244, #247)

Characters, the camera, and arrows, thrown things, and the fireball are now drawn between the world's steps, so the world scrolls evenly on any display. The picture runs up to one step, a sixtieth of a second, behind the world.

Read: [[Controls]].

### Smoother bodies on a guest (game #249)

On a guest's screen, the other players, the dead, and the villagers are drawn a few steps behind the host's frames and moved smoothly between them, so they walk evenly.

Read: [[Multiplayer]].

### A guest told when a fire goes out (game #253)

A guest within {{n tuning.world.fireOutRadius tiles}} of a fire that burns out now reads "A fire has gone out.", as the host does.

Read: [[Fire]], [[Chat log]].

## Food and the body

### Food heals a little (game #186)

Each food heals a little, more if cooked, and only for the share of its hunger your stomach has room for, so it is never a way to top up. With your hunger at {{n tuning.player.fullAt}} or more you are full, and eating is refused: "You are full." A food on the belt is eaten from its slot, by its key, its menu, or a double-click.

Read: [[Food]], [[Health]], [[Hunger]], [[Belt]].

### The starting kit as a world choice (game #183, #191)

The starting kit is the game's data. At the Sandbox step of New world, a world can add extra starting items to it, or start everyone wearing the [[Developer Bag]] in place of the sack, for testing.

Read: [[World rules]], [[Developer Bag]], [[Getting started]].

## The dead, villagers, and light

### The dead strike what they break (game #185)

Fences, gates, doors, and shutters take real strikes, on the bite's cooldown, each with a small jolt in place of the old long shake. One of the dead alone breaks a stretch of fence in about two and a half minutes; a crowd is faster. One striking a fence bites a little further across it.

Read: [[Fences]], [[Breaking in]], [[The dead]].

### Immune villagers (game #187)

A villager can be flagged immune: the dead never hunt or harm them, whatever the world rules say. The [[Innkeeper]] and the [[Priest]] are flagged; the other villagers stay at risk.

Read: [[Villagers]], [[Innkeeper]], [[Priest]].

### Talk and the guide (game #220)

Villagers now talk. A poke gets a line of their own for the moment (night, dawn, the dead close by), the lines taking turns, and with you near they now and then remark unprompted. [[Wyn]], the guide, stands just outside your cottage's door, immune to the dead; the dead who stood in the lane by your garden have moved farther down it, so a new world's first poke by day is "Ask me anything, if you are stuck.", not a warning. A speech bubble's time now runs in the world on the host, so a line ends on its own on a server world too (closing game #154).

### Conversations (game #230)

Press E beside a villager, or choose **Talk to** on their menu, and a conversation opens in a panel above the belt: their lines one at a time, then questions to choose, and **That's all for now**. The villager stops and faces you while you talk. Wyn's questions cover each thing the game does, each with a link to its page here; the others have a few lines in their own voice. It is all clicks, and the world keeps running. Walking away, a wall between, or the villager struck ends it; with the dead close by, a villager gives a line instead. A wounded villager still talks.

Read: [[Talk]], [[Wyn]], [[Villagers]], [[Chat log]].

### Villagers heal (game #238)

A villager the dead have hurt but not killed heals slowly, {{n tuning.villager.regenPerMinute}} health a minute as a player does, starting {{n tuning.villager.regenPause seconds}} after the last hit.

Read: [[Villagers]].

### Nothing in reach through a wall (game #227)

Every action needs a clear line as well as the distance: a wall, a shut door, or closed shutters stop it, a fence or an open window does not. Choose something behind a wall and you walk round to it; a station's ingredients come only from chests you can see; an open chest or a station's panel closes when a wall comes between. Building or removing a wall, or building a door into one, still goes by distance alone, so you can always build your own way out of a sealed room. Three chests and a desk boxed in by furniture in the valley's cottages were moved to where they can be reached.

Read: [[Rooms]], [[Openings]], [[Containers]], [[Crafting]], [[Building]].

### Lanterns and torches (game #188, #189)

Hold an unlit torch to a lantern, in a bracket or on a post, to light it. A lantern is always lit and says so to a tinderbox or a lit torch. In Use mode the label over a wall bracket names what is on it.

Read: [[Torch]], [[Torch posts and brackets]].

### The groan in the dark (game #189)

The dead you cannot see in the dark put "Something groans in the dark." in the chat log only within {{n tuning.sight.groanRadius tiles}} of you, and at most once every {{n tuning.sight.groanGap seconds}}.

Read: [[Chat log]], [[Sight]].

## Coming next

Nothing is in review in the game just now. [[Planned]] lists what is to come.

## See also

- [[Updates]], [[Planned]], [[Production chains]]

## Sources

<!-- sources at 3c0a243 -->
- `src/entities/player.js:87-88`: with Survival off a body is always full, so every food is refused
- `src/farming.js:1-11`, `src/farming.js:99-106`, `tools/mapgen/valley.py:191`: farming, its reach and clear line, the cottage's potatoes and cabbages (game #206)
- `src/chop.js:1-51`, `data/loot.json:6-7`: the hatchet, the stump, the two chests (game #207)
- `data/sprites/tree_apple.json`, `src/fruit.js:30-52`: apple trees (game #192)
- `data/fishing.json`, `src/fishing.js:1-81`: fishing (game #193)
- `src/entities/player.js:83-103`, `data/tuning.json:55`: food's heal and `fullAt` (game #186)
- `data/kit.json`, `src/kit.js`: the starting kit (game #183, #191)
- `src/map.js:709-735`, `docs/09-openings.md`: the dead strike fences (game #185)
- `src/entities/villager.js:45`, `src/entities/zombie.js:357`: immune villagers (game #187)
- `src/burn.js:79-176`, `src/interactions.js:58`: lanterns and torches (game #188, #189)
- `src/ui/speech.js:68-89`, `data/tuning.json:123`: the groan's radius and gap (game #189)
- `src/mining.js`, `src/bucket.js`, `src/farming.js:257-292`, `data/recipes.json`, `data/loot.json`: mining, charcoal, cloth, the bucket, and the scythe (game #210, #216, #211, #213)
- `tools/mapgen/valley.py:408-523`, `data/loot.json:8-10`: the farms and the mill (game #219)
- `src/inventory.js:88-108`, `data/recipes.json`, `data/crops.json`, `data/build.json`, `data/loot.json:6-7`, `src/settings.js:63`: the tool rule, the cottage's shovel, the joiner's hammer, Free building (game #222)
- `src/talk.js`, `data/talk/`, `data/maps/valley.json:12288-12299`, `src/game.js:113-126`: talk, Wyn, and the bubbles aged on the host (game #220)
- `src/talk.js`, `src/ui/talk-panel.js`, `src/entities/villager.js:66-71`: conversations and villagers' healing (game #230, #238)
- `src/reach.js`, `tools/mapgen/valley.py:106-118`: one reach test; the boxed-in containers moved (game #227)
- `src/chart.js`, `src/ui/map-panel.js`: the map (game #234, #235)
- `data/items.json:27`, `data/hair/mohawk.json`: the hat's painted art, the mohawk redrawn (game #229, #231)
- `src/inventory.js:184-198`, `src/interp.js`, `data/tuning.json`: hiding a worn item, the draw between steps and the feel numbers (game #243, #244, #247)
- `src/ui/inventory-actions.js:46-83`, `src/netsmooth.js`, `src/host.js:239-247`: Take All, smoother bodies on a guest, a guest told a fire has gone out (game #251, #249, #253)
