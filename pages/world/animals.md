---
title: Animals
categories: [Creatures, The world]
aliases: [Animal, Wildlife, Game, Livestock, Rabbit, Rabbits, Boar, Hen, Hens, Chicken, Chickens, Cow, Cows, Pig, Pigs, Sheep, Herds]
summary: The valley's seven kinds of animal: deer, rabbits, and boar in the woods, hunted for meat and hides; hens, cows, and pigs at Hollow Farm and sheep in the croft's sheepfold, kept, fed, and bred; the deer and rabbits run, the boar fights back, and the dead ignore them all.
numbersOk: true
---

<!-- typed: the counts of homes, herds, and kinds (seven kinds, six deer herds, five rabbit edges, two of boar) are the map's list of homes counted, not numbers of the game's; each home's own count and cap are read from the map below -->

<table class="infobox"><caption>Animals</caption><tr><th>Kinds</th><td>Seven: deer, rabbit, boar, hen, cow, pig, sheep</td></tr><tr><th>Wild game</th><td>Deer, rabbits, and boar, renewed up to a cap</td></tr><tr><th>Livestock</th><td>Hens, cows, pigs, and sheep, in their pens; never renewed, but bred (see [[Keeping]])</td></tr><tr><th>Renewal</th><td>One a home every {{n animals.renew.seconds seconds}} of the game's clock, never within {{n animals.renew.clear tiles}} of a player</td></tr><tr><th>Hunted</th><td>Skinned and butchered with a [[Dirk]] (see [[Hunting]])</td></tr><tr><th>The dead</th><td>Ignore them</td></tr></table>

Animals keep to the ground, and nothing on another floor frightens or draws them: a deer under a wall walk grazes on with you on the walk over it, and a boar you shoot from a floor up loses you and gives up.

**Animals** live in [[The valley]]: deer, rabbits, and boar in the woods ringing it, hens at [[Hollow Farm]]'s coop, cows and pigs in the farm's new pens west of [[The orchard]], and sheep in the croft's sheepfold past the ford. They graze, wander about their homes, and the deer and rabbits run from anyone they see coming. [[The dead]] ignore them. Wild game is [[Hunting|hunted]]: a kill leaves a carcass to skin and butcher for meat, hides, and feathers, and the boar fights back. Livestock is [[Keeping|kept]]: led on a [[Lead]], fed from a [[Feeding trough]], it gives milk, wool, and eggs, and two in a pen breed.

## Where they live

Every animal belongs to a **home** the map names: a wood or a forest edge for game, a pen or a coop for livestock. Each wild home is a small clearing kept free of trees. An animal wanders round its home and drifts back to it whenever it has strayed, so a deer that has run comes back, and a rabbit may wander a little way into a field. A home's game is never fenced in.

| Home | Animals | At the start | Cap |
|---|---|---|---|
| The west wood | Deer | {{n valley.animals.0.count}} | {{n valley.animals.0.cap}} |
| The north-west wood | Deer | {{n valley.animals.1.count}} | {{n valley.animals.1.count}} |
| The north-east wood | Deer | {{n valley.animals.2.count}} | {{n valley.animals.2.cap}} |
| The east wood | Deer | {{n valley.animals.3.count}} | {{n valley.animals.3.cap}} |
| The south-east wood | Deer | {{n valley.animals.4.count}} | {{n valley.animals.4.cap}} |
| The south-west wood | Deer | {{n valley.animals.5.count}} | {{n valley.animals.5.cap}} |
| The village's west edge | Rabbits | {{n valley.animals.6.count}} | {{n valley.animals.6.count}} |
| Above [[Long Acre]] | Rabbits | {{n valley.animals.7.count}} | {{n valley.animals.7.cap}} |
| The castle's north edge | Rabbits | {{n valley.animals.8.count}} | {{n valley.animals.8.cap}} |
| The farm lane's edge | Rabbits | {{n valley.animals.9.count}} | {{n valley.animals.9.count}} |
| The burners' edge, by [[The charcoal burners]] | Rabbits | {{n valley.animals.10.count}} | {{n valley.animals.10.cap}} |
| The far west wood | Boar | {{n valley.animals.11.count}} | {{n valley.animals.11.count}} |
| The far south-east wood | Boar | {{n valley.animals.12.count}} | {{n valley.animals.12.count}} |
| [[Hollow Farm's yard]], at the [[Chicken coop]] | Hens | {{n valley.animals.13.count}} | Not renewed |
| [[Hollow Farm's byre]] | Cows | {{n valley.animals.14.count}} | Not renewed |
| [[Hollow Farm's pigsty]] | Pigs | {{n valley.animals.15.count}} | Not renewed |
| [[The croft's sheepfold]] | Sheep | {{n valley.animals.16.count}} | Not renewed |

The **byre** and the **pigsty** are fenced pens west of the orchard, each with a gate on the farm's side and a [[Feeding trough]] inside; the hens have one by their coop. The **sheepfold** is a fenced pen south of the drove, past the ford, with its gate on the drove's side and a feeding trough inside; the croft's cottage and its shepherd are not built yet. With its gate shut a pen holds its animals. With the gate left open they wander out, stay near, and drift back toward the pen.

## Behaviour

### Wandering and grazing

An animal stands a while, often grazing, then walks to a spot near its home, and stands again. Each kind is drawn in the four diagonal facings, with its own standing, walking, grazing, and running (for the deer and the rabbit) animations. Like the dead, an animal only moves while a player is within {{n tuning.world.activeTiles tiles}} of it; the rest stand still until someone comes. Feeding, laying, and breeding (see [[Keeping]]) go on whether anyone is near or not.

| Kind | Walks | Wanders from home | Runs |
|---|---|---|---|
| Deer | {{n animals.species.deer.walk tiles a second}} | {{n animals.species.deer.wander tiles}} | At {{n animals.species.deer.run tiles a second}} from what it sees within {{n animals.species.deer.flee.sight tiles}}, about {{n animals.species.deer.flee.tiles tiles}}; settles once nothing it sees is within {{n animals.species.deer.flee.clear tiles}} |
| Rabbit | {{n animals.species.rabbit.walk tiles a second}} | {{n animals.species.rabbit.wander tiles}} | At {{n animals.species.rabbit.run tiles a second}} from what it sees within {{n animals.species.rabbit.flee.sight tiles}}, about {{n animals.species.rabbit.flee.tiles tiles}}; settles once nothing it sees is within {{n animals.species.rabbit.flee.clear tiles}} |
| Boar | {{n animals.species.boar.walk tiles a second}} | {{n animals.species.boar.wander tiles}} | Never |
| Hen | {{n animals.species.hen.walk tiles a second}} | {{n animals.species.hen.wander tiles}} | Never |
| Cow | {{n animals.species.cow.walk tiles a second}} | {{n animals.species.cow.wander tiles}} | Never |
| Pig | {{n animals.species.pig.walk tiles a second}} | {{n animals.species.pig.wander tiles}} | Never |
| Sheep | {{n animals.species.sheep.walk tiles a second}} | {{n animals.species.sheep.wander tiles}} | Never |

Walking through a crop or a mushroom, an animal sets it swaying, as anyone does (see [[Gatherables]]).

### Running

A deer or a rabbit runs from a living player, or one of the dead on its feet, that it can see within its distance by a clear line: walls, shut doors, and closed shutters hide you. It runs straight away first, turning if the way is blocked, and never into a room. When it stops it stands alert, and runs again if it still sees what it ran from close by. It settles only once nothing it can see is within its settling distance, so one of the dead standing behind a wall does not keep it alert for ever. Then it goes back to grazing and wandering, and drifts home. One that is struck runs from where the blow or the shot came from.

### The dead

The dead ignore animals entirely. They never chase, bite, or count one, and a carcass is no meal to them. The deer and rabbits still run from them.

### Coming back

Wild game comes back slowly, and a rabbit a [[Snare]] takes is its home's own, so snaring is renewal too. A wild home with fewer living animals than its cap gets one back every {{n animals.renew.seconds seconds}} of the game's clock (one game day), but only while no player, living or dead, is within {{n animals.renew.clear tiles}} of it, so nothing appears in view. The new animal stands on a free outdoor tile of the home's clearing, its spot first; if the whole clearing is built over or walled in, it waits. Livestock is never renewed; two of a kind fed in a pen breed instead (see [[Keeping]]). A birth, unlike a renewal, may come in view: a young one appears in its pen with a player looking on (Michael, 2026-10-25).

## Looking at them

An animal is outlined by Object Highlight when the pointer is over it, and its name shows over it ("Cow"), whenever you can see it. Its menu has **Look at**, named for it ("Look at the hen"), which says in the message line what it is and what it is doing: for livestock, whether it has eaten today, "A hen. Fed today." or "A hen, hungry: a feeding trough near it, filled, would feed it."; for game, "A deer. Wild; it keeps its distance.", "A deer, grazing. It has not seen you.", or "A rabbit, running."; "A cow, on a lead." for one led; "A boar, and it is angry." for a boar charging; and for a carcass how it died, "A dead deer. Shot clean." (see [[Hunting]]). A tame animal's menu also has **Lead**, **Milk**, or **Shear** (see [[Keeping]]), and a carcass's **Skin** and **Butcher** (see [[Hunting]]). Look at only reads the world, so it is your own and is never sent to the host, and it reaches as far as an Inspect does. An animal is found under the pointer by its own drawn shape, so a hen is a small target.

## Hunting them

Wild game (deer, rabbits, and boar) takes any blow or shot. Tame stock (hens, cows, pigs, and sheep) is struck only when nothing else is in the swing's wedge or at the arrow's landing, and then the nearest one alone; a spell never hurts it. A struck boar charges whoever struck it and bites for {{n animals.species.boar.fight.damage}}, every {{n animals.species.boar.fight.cooldown seconds}}, giving up {{n animals.species.boar.fight.seconds seconds}} after the last blow or once you are past {{n animals.species.boar.fight.giveUp tiles}}. A kill leaves a carcass that keeps the class of what killed it, and the class sets the share of the yield: the bow {{n animals.kills.bow}}, melee {{n animals.kills.melee}}, a spell {{n animals.kills.spell}}, the halberd {{n animals.kills.halberd}}. Skin it ({{n animals.work.skin seconds}}), then butcher it ({{n animals.work.butcher seconds}}), each with a [[Dirk]] carried; a butchered carcass is gone. A [[Snare]] holds a rabbit after {{n animals.snare.hours}} game hours, and wild game leaves tracks you see within {{n animals.tracks.radius tiles}}. The whole of it is [[Hunting]].

## Keeping them

Tame animals are kept, not hunted. A [[Lead]] leads one at your pace, and let go by hand it makes where it stands its home, so let go inside a fenced yard with its gates shut it stays: a pen. Each eats one unit of feed a game day (grain, potatoes, cabbages, pumpkins, or [[Hay]]) as soon as a [[Feeding trough]] it can reach holds some: in a pen, a trough on its own pen's fences; out of one, a trough within {{n animals.keep.feedReach tiles}} of its home. Unfed, it gives nothing and never starves. Fed, a cow gives a [[Jug of milk]] to an empty [[Bucket]] carried, a sheep [[Wool]] to [[Shears]], and a hen lays an [[Egg]] into its [[Chicken coop|coop]], with a [[Feather]] most days. Two of a kind fed in a pen breed one young every {{n animals.keep.breedDays game days}}, up to {{n animals.keep.penCap}} of a kind, and a birth may be seen. The whole of it is [[Keeping]].

## What they give

What the animals give is used: raw [[Meat|meat]] cooks alone at a fire or goes into the [[Meat pottage]], the [[Hearty stew]], a [[Meat pie]], [[Smoked meat]] at a [[Smoking rack]], and [[Pemmican]] (bound with [[Lard]] or honey); eggs and [[Bacon]] fry into [[Eggs and bacon]]; jugs of milk make a [[Wheel of cheese]] and [[Butter]]; [[Wool]] is spun into [[Woollen yarn]] and woven into [[Woollen cloth]]; a [[Hide]] is tanned into [[Leather]] at a [[Tanning vat]]; and a [[Feather]] fletches every batch of [[Arrow|arrows]]. See [[Cooking]] and [[Production chains]].

## With friends

The animals live in the host's world: the host moves them, renews them, feeds them, and breeds them, and every player sees each one where the host has it, smoothed between updates. A guest's player counts as a player to them: a deer runs from a guest as from the host, a boar charges a guest who strikes it, and a guest near a home keeps it from being renewed. A guest's blows and shots, and its Skin, Butcher, Lead, Let go, Milk, and Shear, are carried out by the host by the animal's id, and what they give lands in the guest's own bag. A carcass's class and skinning, who leads an animal, its fed and taken days, and its home reach every guest with the animal; a butchered carcass leaves every guest's world. The animals and their homes' renewal are saved with the world. Look at and the tracks are each player's own.

## See also

- [[Hunting]], [[Keeping]], [[Snare]], [[Lead]], [[Feeding trough]]
- [[Hollow Farm]], [[The orchard]], [[The wild]]
- [[The dead]], [[Villagers]]
- [[Levers]]

## Sources

<!-- sources at 6e3ab37 -->
- `data/animals.json`: the seven species, wild or not, their walk, run, flight (`sight`, `tiles`, `clear`), wander, stands, grazing, health, yields, the boar's `fight`; the renewal's `seconds` and `clear`; `kills`, `work`, `snare`, `tracks`, `keep` (game #452, #456, #460)
- `data/maps/valley.json` `animals`, `tools/mapgen/valley.py:588-658`: the seventeen homes, their species, counts, and caps; the byre and pigsty west of the orchard and the croft's sheepfold, fenced with gates; the clearings kept at the wild homes (game #452, at 261cd7a)
- `data/maps/valley.json`: the four feeding troughs, by the coop and in the byre, the pigsty, and the sheepfold (game #460, at 6e3ab37)
- `src/entities/animal.js:132-175`, `src/entities/animal.js:818-879`: an animal's record and home; a home's cap its count unless the map gives one; renewal for wild species only, never with a player, living or dead, within `renew.clear`, on a free outdoor tile of the clearing, or it waits
- `src/entities/animal.js:268-359`: standing, grazing, wandering within `wander` of home and drifting back, the four diagonals
- `src/entities/animal.js:201-267`, `src/game.js:841-850`: the flight from a living player or the standing dead seen by a clear line within `sight`; away first, turning, never into a room; alert until nothing seen within `clear`; only near a player
- `src/game.js:841-871`, `data/tuning.json` `world.activeTiles`: moving only near a player; the snares and the keeping each second, near or not
- `src/entities/animal.js:696-726`, `src/entities/animal.js:360-401`: a blow or a shot, the carcass and its class, a struck deer or rabbit running, the boar's charge (game #456, at 6e3ab37)
- `src/entities/animal.js:727-817`: Skin and Butcher, a dirk carried, the share (game #456, at 6e3ab37)
- `src/entities/animal.js:402-553`, `src/entities/animal.js:554-695`: the lead, Let go, milk and wool; feeding, laying, breeding (game #460, at 6e3ab37)
- `src/entities/animal.js:880-950`: the snares; a caught rabbit is its home's own (game #456)
- `src/clock.js:5`: a game day's length
- `src/entities/animal.js:959-970`, `src/interact.js:1912-1927`: Look at, local, within Inspect's reach, and its lines (at 6e3ab37)
- `src/ui/names.js:32-60`, `src/main.js:1237-1240`: the name on hover when the animal is seen
- `src/game.js:841-855`: the dead's lists hold no animals; a butchered carcass leaves the list
- `src/game.js:111-116`, `src/game.js:248-250`, `src/game.js:332-333`, `src/game.js:471-474`: the animals and homes made from the map, saved, restored, and in the sync check (at 6e3ab37)
- `data/recipes.json`, `data/items.json:70-85`: the animals' recipes: the cooked meats, the dishes, cheese and butter, yarn and woollen cloth, leather, and fletched arrows (game #462, at d625844)

{{navbox places}}
