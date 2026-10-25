---
title: Animals
categories: [Creatures, The world]
aliases: [Animal, Wildlife, Game, Livestock, Rabbit, Rabbits, Boar, Hen, Hens, Chicken, Chickens, Cow, Cows, Pig, Pigs, Sheep, Herds]
summary: The valley's seven kinds of animal: deer, rabbits, and boar in the woods, hens, cows, and pigs at Hollow Farm, and sheep in the croft's sheepfold; they wander, the deer and rabbits run, and the dead ignore them all.
numbersOk: true
---

<!-- typed: the counts of homes, herds, and kinds (seven kinds, six deer herds, five rabbit edges, two of boar) are the map's list of homes counted, not numbers of the game's; each home's own count and cap are read from the map below -->

<table class="infobox"><caption>Animals</caption><tr><th>Kinds</th><td>Seven: deer, rabbit, boar, hen, cow, pig, sheep</td></tr><tr><th>Wild game</th><td>Deer, rabbits, and boar, renewed up to a cap</td></tr><tr><th>Livestock</th><td>Hens, cows, pigs, and sheep, in their pens; never renewed</td></tr><tr><th>Renewal</th><td>One a home every {{n animals.renew.seconds seconds}} of the game's clock, never within {{n animals.renew.clear tiles}} of a player</td></tr><tr><th>The dead</th><td>Ignore them</td></tr></table>

**Animals** live in [[The valley]]: deer, rabbits, and boar in the woods ringing it, hens at [[Hollow Farm]]'s coop, cows and pigs in the farm's new pens west of [[The orchard]], and sheep in the croft's sheepfold past the ford. They graze, wander about their homes, and the deer and rabbits run from anyone they see coming. [[The dead]] ignore them. For now they can only be watched: nothing hunts, keeps, or uses them yet.

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

The **byre** and the **pigsty** are fenced pens west of the orchard, each with a gate on the farm's side. The **sheepfold** is a fenced pen south of the drove, past the ford, with its gate on the drove's side; the croft's cottage and its shepherd are not built yet. With its gate shut a pen holds its animals. With the gate left open they wander out, stay near, and drift back toward the pen.

## Behaviour

### Wandering and grazing

An animal stands a while, often grazing, then walks to a spot near its home, and stands again. Each kind is drawn in the four diagonal facings, with its own standing, walking, grazing, and running (for the deer and the rabbit) animations. Like the dead, an animal only moves while a player is within {{n tuning.world.activeTiles tiles}} of it; the rest stand still until someone comes.

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

A deer or a rabbit runs from a living player, or one of the dead on its feet, that it can see within its distance by a clear line: walls, shut doors, and closed shutters hide you. It runs straight away first, turning if the way is blocked, and never into a room. When it stops it stands alert, and runs again if it still sees what it ran from close by. It settles only once nothing it can see is within its settling distance, so one of the dead standing behind a wall does not keep it alert for ever. Then it goes back to grazing and wandering, and drifts home.

### The dead

The dead ignore animals entirely. They never chase, bite, or count one. The deer and rabbits still run from them.

### Coming back

Wild game comes back slowly. A wild home with fewer living animals than its cap gets one back every {{n animals.renew.seconds seconds}} of the game's clock (one game day), but only while no player, living or dead, is within {{n animals.renew.clear tiles}} of it, so nothing appears in view. The new animal stands on a free outdoor tile of the home's clearing, its spot first; if the whole clearing is built over or walled in, it waits. Livestock is never renewed.

## Looking at them

An animal is outlined by Object Highlight when the pointer is over it, and its name shows over it ("Cow"), whenever you can see it. Its menu has **Look at**, named for it ("Look at the hen"), which says in the message line what it is and what it is doing: "A hen. Somebody's, once." for livestock standing, "A deer. Wild; it keeps its distance." for game, "A rabbit, running." for one in flight, and a line for one grazing. Look at only reads the world, so it is your own and is never sent to the host, and it reaches as far as an Inspect does. An animal is found under the pointer by its own drawn shape, so a hen is a small target.

## Fighting them

Nothing can hurt an animal yet: blows, arrows, and spells pass them by, and they never fight back.

{{planned doc=45 step=2 note="Hunting: a kill's yield by the weapon (the bow the most), the carcass, skinning and butchering with a dirk carried, boar that charge and bite when attacked, livestock hurt only by a swing aimed at it, tracking, and snares for rabbits."}}

{{planned doc=45 step=3 note="Keeping: leading an animal home on a lead, pens of your own, a feeding trough, hens laying eggs and feathers into their coop, milk with a bucket, wool with shears, breeding."}}

{{planned doc=45 step=4 note="What they give: raw meat to cook alone or in recipes, cheese and butter, bacon and lard, smoked meat, pemmican, woollen cloth, leather, and fletched arrows."}}

## With friends

The animals live in the host's world: the host moves them and renews them, and every player sees each one where the host has it, smoothed between updates. A guest's player counts as a player to them: a deer runs from a guest as from the host, and a guest near a home keeps it from being renewed. The animals and their homes' renewal are saved with the world. Look at is each player's own.

## See also

- [[Hollow Farm]], [[The orchard]], [[The wild]]
- [[The dead]], [[Villagers]]
- [[Levers]]

## Sources

<!-- sources at 261cd7a -->
- `data/animals.json`: the seven species, wild or not, their walk, run, flight (`sight`, `tiles`, `clear`), wander, stands, grazing, and yields; the renewal's `seconds` and `clear` (game #452)
- `data/maps/valley.json` `animals`, `tools/mapgen/valley.py:588-658`: the seventeen homes, their species, counts, and caps; the byre and pigsty west of the orchard and the croft's sheepfold, fenced with gates; the clearings kept at the wild homes (game #452, at 261cd7a)
- `src/entities/animal.js:50-80`, `src/entities/animal.js:263-282`: an animal's record and home; a home's cap its count unless the map gives one; renewal for wild species only
- `src/entities/animal.js:165-256`: standing, grazing, wandering within `wander` of home and drifting back, the four diagonals
- `src/entities/animal.js:107-163`, `src/game.js:687-696`: the flight from a living player or the standing dead seen by a clear line within `sight`; away first, turning, never into a room; alert until nothing seen within `clear`; only near a player
- `src/game.js:529-533`, `data/tuning.json` `world.activeTiles`: near a player
- `src/entities/animal.js:284-318`: renewal: one back each `renew.seconds` below the cap, never with a player, living or dead, within `renew.clear`, on a free outdoor tile of the clearing, or it waits
- `src/clock.js:5`: a game day's length
- `src/entities/animal.js:320-327`, `src/interact.js:1883-1901`: Look at, local, within Inspect's reach, and its lines
- `src/ui/names.js:32-60`, `src/main.js:1237-1240`: the name on hover when the animal is seen
- `src/interact.js:1791`: an animal found by its own pixels
- `src/game.js:687-696`: the dead's lists hold no animals; nothing in the combat code touches them
- `src/game.js:111-113`, `src/game.js:234-236`, `src/game.js:318-319`, `src/game.js:449-451`: the animals and homes made from the map, saved, restored, and in the sync check (game #452, at 261cd7a)

{{navbox places}}
