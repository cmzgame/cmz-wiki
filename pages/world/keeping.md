---
title: Keeping
categories: [Creatures, Mechanics, Farming]
aliases: [Livestock keeping, Keeping animals, Pen, Pens, Feeding animals, Feed, Breeding, Milking, Milk the cow, Shearing, Shear the sheep, Lead the cow, Let go, Leading animals, Pens that give more]
summary: Keeping tame animals: leading them on a lead, penning them in a fenced yard, feeding them from a feeding trough, and taking what a fed one gives each day (milk, wool, eggs, feathers); two fed in a pen breed.
numbersOk: true
---

<!-- typed: "every fifth second" (the troughs looked for) is `Math.floor(loop.simTime()) % 5` in `src/entities/animal.js:653`, and "once a second" the step's boundary in `src/game.js:857`, neither a named number; "four" troughs and "three" hens on Hollow Farm are the map's props and homes counted -->

**Keeping** is what a player does with the valley's tame [[Animals]]: the hens, cows, pigs, and sheep of [[Hollow Farm]] and the croft's sheepfold. A tame animal can be led on a [[Lead]], let go inside a fenced yard to make it a pen, and fed from a [[Feeding trough]]. Fed, it gives that day: a cow its milk to a [[Bucket]], a sheep its [[Wool]] to [[Shears]], a hen an [[Egg]] and most days a [[Feather]] into its [[Chicken coop]]. Two of a kind fed in a pen breed. An animal that is not fed simply gives nothing: it never starves, sickens, or dies of neglect, so nothing is lost by being away. Wild game (deer, rabbits, boar) cannot be kept; it is hunted (see [[Hunting]]).

Every tame animal is everyone's: any player may lead, feed, milk, shear, or take from any of them.

## How it works

### The lead

A tame animal's menu has **Lead the cow** (named for the animal) when you carry a [[Lead]], in a hand, on the belt, or in the bag. It is greyed with the reason when it cannot be done: "(you need a lead)", "(your lead is in use)" when every lead you carry is already on an animal (one lead leads one animal), or "(someone else is leading it)". A wild animal "will not be led". Done: "You put the lead on the cow."

A led animal follows its leader at the leader's own pace, a walk or a sprint: the farther behind it is, the faster it goes, {{n animals.keep.leadPull tiles a second}} for each tile behind, never slower than its own walk and never faster than {{n animals.keep.leadMax tiles a second}}. Within {{n animals.keep.leadClose tiles}} of its leader it stands and faces them. It finds its own way round fences and walls.

While you lead it, its menu has **Let go of the cow** instead. Letting go by hand makes the tile where it stands its new **home**, the place it wanders round and drifts back to: "You let the cow go. It will stay near here." Let go inside a fenced yard with its gates shut, it stays there, and the yard is its pen.

A lead is lost on its own only when the animal truly cannot follow: when it has had no way to its leader for {{n animals.keep.leadStuck seconds}} (its leader shut inside a house, say), or its leader is dead, gone from the world, or more than {{n animals.keep.leadReach tiles}} off. A lost lead keeps the old home, so the animal walks back to where it came from. Once a second the host also frees any lead whose leader is not a living player in the world, so an animal led off by a guest who then leaves is not stuck on a lead. A led animal does not eat or breed until it is let go. Look at says "A cow, on a lead."

### Pens

A **pen** is any fenced yard with its gates shut: every tile an animal could walk to from where it stands without crossing a fence, a wall, or a shut gate, as long as that is at most {{n animals.keep.penMax tiles}}. Anything larger, or open to the world, is no pen. The farms' byre, pigsty, and sheepfold are pens, and so is any yard a player fences (see [[Fences]]). A pen decides which trough an animal eats from and whether it may breed. A pen whose gate is left open lets its animals wander out; they stay near and drift back toward their home (see [[Animals]]).

### Feeding

Animals eat **feed**: any item tagged feed, today [[Grain]], [[Potato|potatoes]], [[Cabbage|cabbages]], [[Pumpkin|pumpkins]], and [[Hay]], which the [[Scythe]] cuts from open grass. Feed goes into a [[Feeding trough]], which takes nothing else. The farms' pens and Hollow Farm's coop each have one, empty until a player fills it, and more are built from the palette.

Every tame animal that has not eaten today eats one unit of feed as soon as a trough it can reach holds some. In a pen, that is a trough on that pen's own fences or inside it, never one over the fence in the next pen; out of a pen (Hollow Farm's hens, which are not fenced), it is a trough within {{n animals.keep.feedReach tiles}} of its home. The host looks for troughs every fifth second of the game, for every hungry tame animal in the world, whether or not a player is near, so a filled trough feeds the stock while you are away. One unit feeds one animal for the day; the day is the game's, from midnight to midnight (see [[The day]]). Look at a tame animal to see whether it has eaten: "A cow. Fed today." or "A cow, hungry: a feeding trough near it, filled, would feed it."

### What a fed animal gives

| Animal | What | How | Time | Count |
|---|---|---|---|---|
| Cow | A [[Jug of milk]] | **Milk the cow**, with an empty [[Bucket]] carried | {{n animals.work.milk seconds}} | {{n animals.species.cow.produce.count.0}} |
| Sheep | [[Wool]] | **Shear the sheep**, with [[Shears]] carried | {{n animals.work.shear seconds}} | {{n animals.species.sheep.produce.count.0}} to {{n animals.species.sheep.produce.count.1}} |
| Hen | An [[Egg]] | Laid into its [[Chicken coop]] when it eats | - | {{n animals.species.hen.lays.count.0}} |
| Hen | A [[Feather]] | Left in its coop on {{pct animals.keep.feather}} of the days it eats | - | 1 |

Milking and shearing are timed entries on the animal's menu, once a game day each, and only on a day it has eaten. Each is greyed with the reason: "(you need a bucket)", "(the cow has not been fed today)", "(it has been milked today)", or "(it has been shorn today)". A bucket holding water is refused with "Empty the bucket first.": the milk is a jug of its own, not the bucket's fill, and the bucket is kept. What you take goes into your bag, or falls at your feet if it is full: "You milk the cow: a jug of milk."

A hen lays as it eats, into a chicken coop within {{n animals.keep.coopReach tiles}} of its home each way; with no coop that near, it lays nothing. The coop holds only what its hens lay, and a full coop takes no more until someone empties it.

**Pens that give more:** {{pct animals.keep.more}} of the time, milking, shearing, and laying each give one more. Pigs give nothing while alive; they are kept for their meat (see [[Hunting]]).

### Breeding

Two animals of a kind, both fed today, standing in the same pen, have a young one, as long as:

- neither has bred in the last {{n animals.keep.breedDays game days}};
- the pen holds fewer than {{n animals.keep.penCap}} of their kind;
- the pen has {{n animals.keep.roomPerHead tiles}} for each of their kind, the young one counted.

The young one is born on the free outdoor tile of the pen nearest the first parent, with its parents' home. The host checks once a second, so a birth that is due waits only for the feed, the room, and the days; it may happen in view. Animals out of a pen, and led animals, never breed.

## Numbers

- A led animal: {{n animals.keep.leadPull tiles a second}} for each tile behind, at most {{n animals.keep.leadMax tiles a second}}; stands within {{n animals.keep.leadClose tiles}}; lost after {{n animals.keep.leadStuck seconds}} with no way, or past {{n animals.keep.leadReach tiles}}
- A pen: at most {{n animals.keep.penMax tiles}}
- Feeding: one unit a game day; a trough within {{n animals.keep.feedReach tiles}} of home out of a pen
- A coop: within {{n animals.keep.coopReach tiles}} of a hen's home; a feather {{pct animals.keep.feather}} of the days
- One more: {{pct animals.keep.more}}
- Milking {{n animals.work.milk seconds}}, shearing {{n animals.work.shear seconds}}
- Breeding: every {{n animals.keep.breedDays game days}}, up to {{n animals.keep.penCap}} of a kind, {{n animals.keep.roomPerHead tiles}} a head

## With friends

Every part of keeping runs on the host. A guest's **Lead**, **Let go**, **Milk**, and **Shear** are its menu's labels, sent to the host by the animal's id; the host runs them for that player, the bar included, and the milk or wool goes into the guest's bag. A guest fills a trough or empties a coop through the container panel, as with any chest. Who leads an animal, the day it last ate, the day it was milked or shorn, and its home are sent with each animal when they change, so every screen agrees; a trough's and a coop's contents travel with their part of the map, and a young one arrives on every screen as the host makes it. A guest who leaves while leading an animal loses the lead within a second, and the animal walks back to its old home. Everything is saved with the world.

## See also

- [[Animals]], [[Hunting]]
- [[Lead]], [[Shears]], [[Bucket]], [[Feeding trough]], [[Chicken coop]]
- [[Jug of milk]], [[Wool]], [[Egg]], [[Feather]], [[Hay]]
- [[Fences]], [[Hollow Farm]], [[Levers]]

## Sources

<!-- sources at 6e3ab37 -->
- `data/animals.json`: the `keep` block (feeding, coops, the feather, one more, breeding, the lead), `work.milk` and `work.shear`, each species' `produce` and the hen's `lays` (game #460)
- `src/entities/animal.js:407-437`: a led animal: its leader's pace by `leadPull` up to `leadMax`, never under its walk; standing within `leadClose`; lost after `leadStuck` with no way, or with its leader dead, gone, or past `leadReach`
- `src/entities/animal.js:439-463`: Let go makes where it stands its home; a lost lead keeps the old home; once a second a lead whose leader is not a living player is freed
- `src/entities/animal.js:466-511`: Lead refused for a wild animal, someone else's, out of reach, no lead carried, or every lead carried in use; the messages
- `src/interact.js:1971-1992`: the tame animal's menu: Lead the cow or Let go of the cow, Milk the cow or Shear the sheep, each greyed with its reason
- `src/inventory.js:92-108`: a tool carried in a hand, on the belt, or in the bag; "You need a ..."
- `src/entities/animal.js:513-552`: milking and shearing: fed today, once a day, the tool carried, a bucket holding water refused, the count and one more at `more`, to the bag or the feet
- `src/entities/animal.js:556-595`: a trough with feed: in a pen, one on that pen's fences; out of one, within `feedReach` of home; one unit eaten
- `src/entities/animal.js:597-623`: a hen's coop within `coopReach` of its home each way; its egg and one more at `more`, a feather at `feather`; a full coop takes no more
- `src/entities/animal.js:625-647`: a pen: a flood within fences, walls, and shut gates of at most `penMax` tiles
- `src/entities/animal.js:649-697`: every fifth second the troughs; not while led; breeding: two fed and rested, under `penCap`, `roomPerHead` a head the young counted, born on the free tile nearest a parent with its home
- `src/game.js:855-865`: the snares and the keeping once a second of sim time, on the host, near a player or not
- `src/entities/animal.js:91-93`: the day is the clock's
- `src/entities/animal.js:961-970`: Look at: on a lead, fed today, or hungry
- `data/items.json:81`, `data/items.json:77-80`, `data/items.json:69`: grain, potatoes, cabbages, pumpkins, and hay tagged `feed`
- `tools/mapgen/valley.py:458-459`, `tools/mapgen/valley.py:593-602`: the coop and the troughs at Hollow Farm, the byre, the pigsty, and the sheepfold
- `src/net.js`, `src/game.js`: an animal's leader, fed day, taken day, and home on the wire and in the `animals` sync part (game #460, `net.PROTOCOL` 12)

{{navbox places}}
