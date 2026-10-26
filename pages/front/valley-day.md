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

**Worth knowing before you play:** with the [[Survival]] setting off, your body counts as always well fed, so health comes back at the well-fed rate, and food still heals (see [[Food]]).

## Gathering and production

### Farming (game #206)

Till grass or dirt with a [[Hoe]] in hand, plant a seed, water it from a [[Waterskin]], and harvest it with E when it is ready, with its tool on you (game #222, below), for its food and {{n crops.crops.potato.seeds}} seeds back. Crops grow on the clock only while their soil is wet; dry soil pauses them and never kills them. A wall or closed shutters stop farming, while a fence or an open window does not. The farms' granaries hold seed of every crop.

Read: [[Farming]], [[Crops]], [[Hoe]], [[Potato seed]].

### Chopping: the hatchet and the stump (game #207)

Chopping a tree needs a [[Hatchet]] in a hand; without one the menu says "Chop down (need a hatchet)". A felled tree leaves an outlined [[Stump]], which the hatchet chops up for one more log, clearing the tile. The chest in your cottage's main room and the joiner's chest each hold a hatchet from the start.

Read: [[Hatchet]], [[Trees]], [[Stump]], [[Log]].

### Apple trees and the orchard (game #192)

Pick apples from a laden apple tree's menu; the tree is then bare for {{n sprites.tree_apple.pick.days}} days of the world's clock before it bears again. Since game #451 an apple tree is the green round tree with red apples through its crown, and a picked one is the same crown bare. [[The orchard]] has rows of them, and three cottage gardens have one each. Picking needs a clear line to the tree, like farming. A world made with Trees off has none.

Read: [[Trees]], [[Apple]], [[The orchard]].

### Fishing (game #193)

Make a [[Fishing rod]] at the [[Workbench]] from a stick and a piece of cloth, with a [[Dirk]] on you, hold it, and choose "Cast the line" at the water. A catch comes after {{n fishing.cast.waitMin}} to {{n fishing.cast.waitMax seconds}}, or nothing bites; walking away ends the cast. The river gives perch and trout, the pond carp and perch, and the brook by [[Long Acre]] (game #219) mostly trout. Grill the fish at a fire.

Read: [[Fishing]], [[Fishing rod]], [[Perch]], [[Trout]], [[Carp]].

### Mining, iron, and charcoal (game #210)

A [[Pickaxe]] in hand mines a rock for [[Stone]] or an ore rock for [[Iron ore]], and the rock is gone. Since game #453 the valley keeps its count of each: a new rock rises out of the ground elsewhere in its area {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days later, stone anywhere on natural ground and ore at the iron workings and the woods round them, so neither runs out (see [[Mining#Coming back|Mining]]). The valley now starts with {{n valley.resources.stone.count}} rocks, not only the quarry's. Two new places hold them: [[The iron workings]] in the east woods and [[The quarry]] in the north-east, each with a hut whose chest holds a pickaxe. A [[Charcoal clamp]] burns logs into [[Charcoal]]: one stands in the smithy's yard, three at [[The charcoal burners]]. The smithy's chest holds the first iron bars and charcoal, so the forge and the anvil work from the first day.

Read: [[Mining]], [[Pickaxe]], [[Charcoal clamp]], [[Forge]], [[Anvil]].

### Herbs, mushrooms, clay, and salt (game #457)

Eleven kinds of herb, {{n valley.resources.sage.count}} sage among them, grow like weeds at random on the valley's natural ground: mageroot near water, nightshade and wolfsbane near trees, and grave moss only in the graveyard. All are gathered at any hour. Each is gathered by hand from its menu, one at a time. The mushrooms under the trees are foraged now for a [[Mushroom]]. {{n valley.resources.clay.count}} clay banks by the river are dug for [[Clay]] with a [[Shovel]] carried, and {{n valley.resources.salt.count}} salt rocks at the iron workings are mined for [[Salt]] with a [[Pickaxe]] in hand. Each comes back elsewhere in its area once taken. None of them has a use yet.

Read: [[Herbs]], [[Mushrooms]], [[Clay]], [[Salt]], [[Gatherables]].

### A click under a tree's crown (game #464)

A click on a tree's crown where an herb, a mushroom, or any other gatherable stands behind it finds that gatherable: it sways, it is first on the menu, and Object Highlight and Use mode take it. The trunk always reaches the tree.

Read: [[Gatherables]], [[Trees]].

### Saplings and sticks (game #461)

A felled tree sometimes drops a [[Sapling]] ({{pct tuning.trees.sapling.chance}} of the time). Planted on open grass outdoors, it grows into a tree in {{n tuning.trees.sapling.days game days}}, waiting while anyone stands on it; an apple tree's sapling grows an apple tree. **Gather sticks** under any standing tree, from its menu, gives {{n tuning.trees.sticks.count.0}} or {{n tuning.trees.sticks.count.1}} [[Stick|sticks]], once a game day a tree.

Read: [[Sapling]], [[Trees]], [[Stick]].

### Cloth (game #216)

[[Flax]] is a sixth crop, and the weaver's chest holds its first seed and a [[Dirk]]. The [[Loom]] weaves flax into [[Linen cloth]], and cloth into [[Bandage|bandages]] and linen clothes. With a knife on you, any garment tears into [[Rag|rags]] at the workbench, and a recipe that wants cloth takes a rag or plain cloth before a garment. The cap and the breeches are now the [[Linen cap]] and [[Linen breeches]], beside the [[Linen tunic]] (renamed in game #218), and cloth is the new [[Linen cloth]].

Read: [[Flax]], [[Linen cloth]], [[Rag]], [[Loom]], [[Bandage]].

### The bucket (game #211)

An item you carry: fill it at any water or a well, and pour it on a plot to water every crop in the three by three round it. One waits in your cottage's chest, and the workbench makes more from planks.

Read: [[Bucket]], [[Farming]].

### The scythe (game #213)

A swing with the [[Scythe]] harvests the ready grain on the three tiles ahead. Only rye is grain: the rye fields of [[Long Acre]] are its work, and the farms' granaries hold rye seed for more.

Read: [[Scythe]], [[Farming]].

### The farms and the mill (game #219)

[[Hollow Farm]], south of the lane, has the great barn with a [[Hoe]] on its rack, the farmhouse, a granary with seed of every crop, the pumpkin field with its scarecrow, plots of potatoes, cabbages, and garlic, and the farm pond. [[Long Acre]], in the north, has two rye fields, a flax strip, and a kitchen garden, with the brook and its plank footbridge beside it. [[The mill]] grinds grain into flour at its [[Millstones]], and the [[Miller]] lives there, alive and at risk. Every crop can now be grown, so bread, porridge, the [[Plain pottage]] (then named the stew), and a new [[Pumpkin pie]] can all be made.

Read: [[Hollow Farm]], [[Long Acre]], [[The mill]], [[Millstones]], [[Farming]].

### The tools you carry (game #222)

An action that would need a tool asks for it **on you**: in a hand, on the belt, or in the bag. Without it the entry is greyed and names the tool, and the action says "You need a smith's hammer." (or whichever it is).

- **A [[Smith's hammer]]:** building a door or a window, boarding up, pulling a board (which now gives the plank back), Remove, and the workbench's furniture, wheelbarrow, shield, bucket, hoe, and shovel.
- **A [[Hatchet]]:** a log wall, splitting a log into planks, and sticks from a plank.
- **A [[Dirk]]:** the bow, the arrows, the rod, and tearing a garment into rags.
- **Harvest by crop:** rye with the [[Scythe]], potatoes and garlic with the [[Shovel]], cabbages and pumpkins with the [[Dirk]]; flax and apples by hand.

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

### Smoother arrows on a guest (game #463)

Arrows, thrown weapons, and the fireball now fly as smoothly on a guest's screen as on the host's: each flight is sent once and drawn every step from where it was loosed, on the bodies' clock, the host still deciding the hit. A guest's own shot shows a few steps later than before.

Read: [[Multiplayer]], [[Archery]].

### A guest told when a fire goes out (game #253)

A guest within {{n tuning.world.fireOutRadius tiles}} of a fire that burns out now reads "A fire has gone out.", as the host does.

Read: [[Fire]], [[Chat log]].

### Fixed: the bag's X with a lit torch (game #258)

With a lit torch in hand or on the belt, the X on the bag (and the character screen) did nothing and only Escape closed it. The X works now, torch lit or not.

Read: [[Inventory]].

### The everyday items drawn (game #337)

The [[Apple]], the [[Loaf of bread]], the [[Tinderbox]] (drawn as a matchbox), the [[Bandage]], the [[Stone]], the six seed pouches, the [[Log]], the [[Linen tunic]], the [[Linen breeches]], the [[Hobnail boots]], the [[Rope belt]], the [[Burlap sack]], and the [[Waterskin]] have drawn icons in the bag and drawn pictures in the world and in the hand. The [[Plank]], the [[Stick]], the [[Torch]], the [[Hatchet]], and the [[Shovel]] are drawn at five angles in the hand, and the long ones fill their cells in the bag with a large icon. The rope belt is in browns, close to the old belt. A lit torch shows a drawn flame on its head, in the hand and in a wall bracket, and its icon in the bag and its picture in a slot show the flame while it burns. What the items do is unchanged. The wiki's item pages show the new icons.

Read: [[Torch]], [[Items]].

### The beehive and the chicken coop (game #338)

Drawn straw beehives stand at [[Your cottage]] (two, along the south of the farm plot), at [[Hollow Farm]] (three, east of the lane), and in [[The manor]]'s garden (three, drawn now). A click sways one, and since game #416 **Take honey** gives a [[Pot of honey]] (see [[Beehive]]); since game #451 bees fly about each hive by day, livelier for a few seconds after its honey is taken. A [[Chicken coop]] stands south of your cottage by the well and another at the west end of Hollow Farm's yard; **Search chicken coop** opens it like a chest, with a small placeholder table of rags, sticks, and a little grain, often nothing, and no eggs.

Read: [[Beehive]], [[Chicken coop]], [[Containers]], [[Gatherables]].

### Rugs (game #339)

Two rugs, the [[Bearskin rug]] and the [[Regal red rug]], are items you carry rolled up in the bag. **Place** on a rug's menu shows its outline on the floor; `R` turns it and a click lays it within reach, never over water, another rug, across a wall, or over something that cannot be carried, such as a tree or a crop. A laid rug lies under everything: you walk over it, things dropped on it lie on it, and the furniture you can carry may stand on it. **Pick up** rolls it back into the bag, but not while furniture stands on it ("Move the chest off it first."). A wall cannot be built through one. For now both are in the [[Developer chest]], and so can be added to Extra starting items.

Read: [[Rugs]], [[Inventory]], [[Placement]].

### Fences and gates, drawn and buildable (game #343)

The valley's fences are drawn now: a rickety fence of split rails, with posts at its ends and corners. A gate swings open and shut through two drawn in-between positions; house doors still snap. The build palette on N has a **Fence**, {{n build.fence.cost.plank}} plank a stretch, and a **Gate**, {{n build.gate.cost.plank}} planks, both with a smith's hammer on you. A gate goes on an empty edge or into a fence, never into another wall ("Only in a fence"), and Remove names them as a fence and a gate.

Read: [[Fences]], [[Building]], [[Openings]].

### Paintings (game #344)

Eight paintings, three small, two tall, and three wide, are items you carry in the bag. **Place** on a painting's menu shows it on the face of the wall under the cursor, and a click hangs it within reach; only a plain wall takes one, one to a stretch of wall, never at a corner, by a torch bracket, or on a door, a window, or a fence, and a wide one needs two stretches side by side. **Pick up** takes one down into the bag. If its wall is removed or built over, the painting falls to the floor, whole. A guest can hang and take them down too. All eight are in the [[Developer chest]], and so can be added to Extra starting items.

Read: [[Paintings]], [[Inventory]], [[Placement]].

### The woods (game #348, #351)

The valley's houses are built in four woods now, mixed: oak, spruce, mahogany, and daub, the limewashed timber frame (the inn is mahogany, the baker's is daub, Hollow Farm's great barn is spruce). Two more, Winter Pine and Bloodbark, are the woods of regions beyond the valley. The build palette has a wall in each of the valley's woods, a plank apiece, and the regions' two while Free building is on. A door or a window may be of another wood than its wall: with a Door or a Window picked, **R** cycles its wood, so an oak house can have Winter Pine doors and shutters.

Read: [[Woods]], [[Walls]], [[Building]].

### The row of buttons in one line (game #312)

The row of buttons sits on the belt's stone, as one panel. Where there is room it is one line of eight along the bottom right, clear of the belt and the chat log; where not, two lines of four, and smaller buttons on a narrow interface. The skills panel stands above it.

Read: [[Interface#The row of buttons|Interface]].

### Bleeding as a debuff (game #315)

Bleeding left the moodles. A wound shows as a red drop in a new row of debuffs at the top right, with its time left under it and its stacks in the corner from two on; hover over it for a card that says how fast it drains, that a bandage stops it, and that another bite makes it worse. The bag now opens a little lower, under the row. A guest's row is the same.

Read: [[Bleeding]], [[Interface#Top right: debuffs|Interface]], [[Moodles]].

### The item hover card (game #313)

Rest the pointer on any item in a grid or slot, the bag, the belt, the hands, the worn slots, a chest, a body, or a station's output, and a small dark card in the style of WoW's tooltips shows its full name, its kind, and what it does, read from the game's data, with **Use** in gold. An empty slot shows its name. It replaces the browser's slow tooltip. Some cards do not yet say everything their item does (game #317).

Read: [[Inventory#The hover card|Inventory]].

### Durable fullscreen (game #311)

In Chrome and Edge, fullscreen from the Settings switch keeps `Escape` for the game: a tap closes menus as in a window, and holding it leaves fullscreen. In Firefox and Safari the first `Escape` still leaves fullscreen. The Fullscreen row says which, and a held `Escape` closes one thing, once.

Read: [[Settings]], [[Controls]].

### Object Highlight (game #303)

Point at anything you can act on, a tree, a crop, a mushroom, a chest, an item on the ground, a villager, and a thin pale outline shows round it; leaf litter and headstones get none. It is a testing setting, on by default.

Read: [[Settings]].

### Inspect, tainted water, and Harvest by name (game #302)

Right-click a crop and **Inspect** it: a line of what it is, how long until it is ready, whether it is watered, and what harvests it, with its tile outlined in gold. Every drink from natural water now says **(tainted)**, the well's and the river's and a waterskin's. Since game #435 a tainted drink may make you [[Sick]] or infect you, the waterskin you start with holds clean water, and a tainted skin is boiled clean at a cooking fire (see [[Water#Boiling|Water]]). **Harvest** names the crop, so E beside the potatoes and the cabbages says which it will take.

Read: [[Farming#Inspect|Farming]], [[Water]], [[Waterskin]], [[Sick]].

### Floating numbers (game #299)

Numbers rise over heads: red for a hit, over whoever took it, you or the dead or a villager or a friend; green for what food heals; and for a gather, the skill's small picture with how many things you got (chopping, mining, fishing, picking, and harvesting). A number over one of the dead hidden by the dark stays hidden. **Floating numbers** in Settings turns them off.

Read: [[Interface#Floating numbers|Interface]], [[Settings]].

### The row of buttons (game #298)

At the bottom right, a button for each panel that opens by a key: Bag, Character, Map, Build, and Chat do what `Tab`, `C`, `M`, `N`, and `Enter` do; Skills opens a panel of the skills to come, Settings the settings screen, and Menu the pause menu. A button is pressed in while its panel is open.

Read: [[Interface#The row of buttons|Interface]], [[Controls]].

## Food and the body

### Food heals what it says, and a full belly heals faster (game #186, #259)

Each food heals a little, more if cooked, and heals exactly its value whenever you eat it, hungry or full (changed in game #259: it was refused when full). With your hunger at {{n tuning.player.fullAt}} or more you are well fed, and health comes back {{n tuning.player.wellFedRegenMult}} times as fast. A food on the belt is eaten from its slot, by its key, its menu, or a double-click.

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

Press E beside a villager, or choose **Talk to** on their menu, and a conversation opens in a parchment panel above the belt (game #297), every choice a line of blue text: their lines one at a time, then questions to choose, and **That's all for now**. The villager stops and faces you while you talk. Wyn's questions cover each thing the game does, each with a link to its page here; the others have a few lines in their own voice. It is all clicks, and the world keeps running. Walking away, a wall between, or the villager struck ends it; with the dead close by, a villager gives a line instead. A wounded villager still talks.

Read: [[Talk]], [[Wyn]], [[Villagers]], [[Chat log]].

### Villagers heal (game #238)

A villager the dead have hurt but not killed heals slowly, {{n tuning.villager.regenPerMinute}} health a minute as a player does, starting {{n tuning.villager.regenPause seconds}} after the last hit.

Read: [[Villagers]].

### Nothing in reach through a wall (game #227)

Every action needs a clear line as well as the distance: a wall, a shut door, or closed shutters stop it, a fence or an open window does not. Choose something behind a wall and you walk round to it; a station's ingredients come only from chests you can see; an open chest or a station's panel closes when a wall comes between. Building or removing a wall, or building a door into one, still goes by distance alone, so you can always build your own way out of a sealed room. Three chests and a desk boxed in by furniture in the valley's cottages were moved to where they can be reached.

Read: [[Rooms]], [[Openings]], [[Containers]], [[Crafting]], [[Building]].

### Lanterns and torches (game #188, #189)

Hold an unlit torch to a lantern, in a bracket or on a post, to light it. Since game #421 a lantern can be put out and lit again (see [[Fire#The home lights|Fire]]). In Use mode the label over a wall bracket names what is on it.

Read: [[Torch]], [[Torch posts and brackets]].

### The groan in the dark (game #189)

The dead you cannot see in the dark put "Something groans in the dark." in the chat log only within {{n tuning.sight.groanRadius tiles}} of you, and at most once every {{n tuning.sight.groanGap seconds}}.

Read: [[Chat log]], [[Sight]].

### Animals (game #452)

Deer, rabbits, and boar live in the woods ringing the valley; hens at Hollow Farm's coop, cows and pigs in two new fenced pens west of the orchard, and sheep in the croft's sheepfold past the ford. They graze and wander about their homes; deer and rabbits run from a player or one of the dead they see; the dead ignore them all. Object Highlight outlines one under the pointer, its name shows over it, and **Look at** says what it is doing. Wild game comes back slowly up to a cap, never within sight of a player.

Read: [[Animals]].

### Hunting (game #456)

A blow or an arrow reaches wild game as it reaches the dead; tame stock only when nothing else is there to hit. A kill leaves a carcass to skin and then butcher with a [[Dirk]] carried, for raw meat, a [[Hide]], [[Feather|feathers]], bacon, and [[Lard]]; the weapon decides how much: the bow the whole yield, a melee weapon less, the [[Halberd]] nothing. A struck boar charges and bites. A [[Snare]] from the workbench catches rabbits unseen, and wild game leaves tracks near you. Raw meat is eaten raw, or cooked (game #462, below).

Read: [[Hunting]], [[Meat]], [[Snare]], [[Dirk]].

### Keeping (game #460)

A [[Lead]] from the workbench leads a tame animal at your pace; let go, it makes its home where it stands, so a fenced yard with its gates shut is a pen. A [[Feeding trough]] (one in each farm pen and by the coop, or built from the palette) filled with grain, vegetables, or [[Hay]] (cut with the [[Scythe]]) feeds the animals near it, and a fed animal gives that day: a cow a [[Jug of milk]] to an empty [[Bucket]], a sheep [[Wool]] to [[Shears]] from the anvil, a hen an [[Egg]] into its coop and most days a feather. Two of a kind fed in a pen breed. An unfed animal gives nothing and never starves.

Read: [[Keeping]], [[Lead]], [[Feeding trough]], [[Chicken coop]].

### The animals' recipes (game #462)

What the animals give is used. Each raw meat cooks alone at a fire into a roast or a steak, and any raw meat goes into the [[Meat pottage]] (beside the meatless pottage, once the stew, now the [[Plain pottage]]), the [[Hearty stew]], a [[Meat pie]] at the oven, [[Smoked meat]] at a [[Smoking rack]], and [[Pemmican]], which stacks. Eggs and bacon fry together, milk makes a [[Wheel of cheese]] and [[Butter]], wool is spun at the weaver's [[Spinning wheel]] (now a station) and woven into [[Woollen cloth]], which serves as any cloth, and a hide is tanned into [[Leather]] at a [[Tanning vat]]. The rack and the vat are made at the workbench. Arrows now need a [[Feather]].

Read: [[Cooking]], [[Meat]], [[Food]], [[Arrow]].

### Small fixes (game #466)

The butcher's, the skinner's, and the shearer's lines count their yields as the things are, "raw venison" and "some lard", never "venisons" or "a lard", and a missing pair of shears reads "(you need shears)". Milking finds an empty bucket wherever you carry it. A garment looted from the dead in a colour no dye gives names it in a word, as "Brownish". A counter, a cart, or a station made at a bench lands only on free tiles a body could walk to from the bench, never past a wall or a shut door, and is refused, before anything is spent, where there is no room. The round oaks are named "oak", so a sapling grows into "an oak".

Read: [[Crafting]], [[Hunting]], [[Keeping]], [[Dye vat]], [[Sapling]].

## Decided or filed, not built yet

Michael's playtest on 2026-10-18 produced rulings and ideas that change nothing in the game yet. Each lives on the game's GitHub (its issue number below) and in its decisions log, `docs/02`; they are listed here so the day is on one page.

- **Food rots** (ruled): rot is pacing, like a torch burning down, and not decay of the world; how fast, what preserves food, and whether food nobody has found rots are open (game #264).
- **The valley's day-one food** is a statistic the wiki keeps current: [[Day-one food]]. Today it would keep one player from starving for about {{day-one-food n=days}} game days, far more than intended; a leaner start, rot, and balanced loot tables are the answers (game #264, #268).
- **Health stays a hundred** (ruled 2026-10-19, withdrawing the day before's ten-times scale): a player starts at a hundred, which levels and gear may raise; the dead and bosses scale as far as they need, thousands for a boss (game #133, #275).
- **Skills are being shaped** (game #275): ten levels each, unlocks at most levels and a capstone at ten, death taking them; combat skills (Melee, Ranged, Magic, Faith) are in the draft, and whether a skill may touch combat is open.
- **Gear can drop by chance** (ruled), a boss's best item not every kill; **regions should keep drawing players back** (Michael's hope); **the least armour is just better than nothing**, with how strong the best gets open; **weapons differ by situation** through resistances (game #133, #268, #123).
- **Loot tables balanced** (done, game #399): a table per kind of container, and gear placed once: the valley's one found sword and mace in the toll house, one leather belt and pair of gloves on the barn's rack, one Onion-head Hat on the scarecrow, no rucksack. Every table is on [[Drop tables]], for Michael to tune.
- **Bags and stacking:** one thing a cell by default (done, game #399: only arrows, throwing knives and axes, bandages, and seeds stack); bag tiers from the valley and the regions, a crafted rucksack among them, are still open (game #260).
- **The map redrawn** with distinct areas and roomier buildings, and **a furniture and rugs pass** (game #92, #261).
- **The regions feed the skills,** a rule drafted for Michael to edit (game #123).
- **A dead-free first day** with an optional tutorial, then the dead arriving on a curve: Michael's middle ground, not ruled (game #123).
- **Villagers all immune unless a script says otherwise,** hiding or cowering with a bark: Michael's leaning, not ruled (game #103).
- **Scripting** means villagers on routines who react and may take commands, and **in-world cutscenes**, which meet an older "never a cutscene" and are open (game #103, #106).

## On the wiki

- [[Special:All pages]] lists every page by title, alphabetically, for reading them one at a time.
- A page whose text has changed since Michael verified it shows **Changed since verified** in place of the green stamp (see [[Special:Verification]]).
- [[Day-one food]] is new.
- [[Dead ends]] is new: every object in the valley a player can use but cannot make (a cart, a well, an anvil), how many there are, and what is lost when the last one goes; beside it, the objects that can be made, and how.

## Coming next

In review in the game: #255 (region and zone wording, waiting on Michael) and #256 (dead code), both held for after the playtest. [[Planned]] lists what is to come.

## See also

- [[Updates]], [[Planned]], [[Production chains]]

## Sources

<!-- sources at 3c0a243 -->
- `data/animals.json`, `src/entities/animal.js`, `tools/mapgen/valley.py:588-658`: the animals, their homes and pens, the flight, the renewal (game #452, at 261cd7a)
- `src/resources.js`, `data/maps/valley.json` `resources`, `data/tuning.json` `resources`: mined rocks and ore rocks owed back elsewhere in their area (game #453, at 261cd7a)
- `src/gather.js`, `data/maps/valley.json` `resources`, `data/sprites/herb_sage.json`, `data/sprites/clay_bank.json`, `data/sprites/salt_rock.json`: herbs, mushrooms foraged, clay, and salt (game #457, at 6e3ab37)
- `src/trees.js`, `src/chop.js`, `data/tuning.json` `trees`: saplings and sticks (game #461, at 6e3ab37)
- `src/entities/animal.js`, `data/animals.json` `kills`, `work`, `snare`, `tracks`, `keep`, `src/tracks.js`, `src/farming.js:262-300`: hunting, snares, tracks, keeping, hay (games #456 and #460, at 6e3ab37)
- `data/sprites/tree_apple.json`, `src/render/bees.js`: the apple tree as the round tree with apples; the bees at the hives (game #451, at 261cd7a)
- `src/sick.js:56-67`, `data/kit.json`, `src/water.js:126-148`: a tainted drink's chance of Sick and of the infection, the starting skin clean, boiling (game #435, at fa2997f)
- `src/ui/screens.js:714-732`, `src/main.js:1743`, `src/ui/nav-row.js:220-241`, `src/item-info.js`, `src/ui/hover-card.js`, `src/debuffs.js`, `src/ui/debuff-row.js`: durable fullscreen, the row in one line, the item hover card, bleeding as a debuff (game #311, #312, #313, #315, at 8af4eed)
- `data/items.json`, `data/sprites/flame.json`: the everyday items' drawn icons, world pictures, held angles, and the lit torch's flame, icon, and portrait (game #337, at 232d0fb)
- `data/sprites/beehive.json`, `data/sprites/chicken_coop.json`, `data/loot.json:3`, `tools/mapgen/valley.py:195-198`, `tools/mapgen/valley.py:313`, `tools/mapgen/valley.py:453-457`: the hives and the coops, and where they stand (game #338, at 232d0fb)
- `src/entities/player.js:87-88`: with Survival off a body is always full, so every food is refused
- `src/farming.js:1-11`, `src/farming.js:99-106`, `tools/mapgen/valley.py:191`: farming, its reach and clear line, the cottage's potatoes and cabbages (game #206)
- `src/chop.js:1-51`, `data/loot.json:6-7`: the hatchet, the stump, the two chests (game #207)
- `data/sprites/tree_apple.json`, `src/fruit.js:30-52`: apple trees (game #192)
- `data/fishing.json`, `src/fishing.js:1-81`: fishing (game #193)
- `src/entities/player.js:83-100`, `data/tuning.json:55`, `data/tuning.json:69`: food's heal, `fullAt`, and `wellFedRegenMult` (game #186, #259)
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
- `data/recipes.json`, `data/items.json:70-85`, `data/sprites/smoking_rack.json`, `data/sprites/tanning_vat.json`, `data/sprites/spinningwheel.json`: the animals' recipes (game #462, at d625844)
- `src/archery.js`, `src/net.js`, `src/netsmooth.js`: a guest's flights stepped from their launch (game #463, at d625844)
- `src/interact.js:1704-1834`: a click under a crown (game #464, at d625844)
- `src/items.js:65-83`, `src/inventory.js:94-112`, `src/dye.js:33-55`, `src/stations.js:208-275`, `data/sprites/tree_oak_m.json`: the counted names, the bucket, the colour words, a made prop's spot, the oak's name (game #466, at d625844)
