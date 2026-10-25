---
title: Hunting
categories: [Combat, Mechanics, Creatures]
aliases: [Hunt, Skinning, Skin, Butchering, Butcher, Carcass, Carcasses, Tracks, Tracking, Kill share]
summary: Killing animals for what they give: wild game takes any blow or arrow, tame stock only a blow or shot meant for it; the weapon decides how much a carcass yields; skin and butcher it with a dirk carried; the boar fights back; snares and tracks.
---

**Hunting** is killing [[Animals]] for what they give: meat, hides, and feathers. A blow or an arrow reaches an animal as it reaches [[The dead]], but tame stock is hurt only on purpose. A kill leaves a **carcass**, which is skinned and then butchered with a [[Dirk]] carried. The weapon that killed it decides how much it gives: the bow the whole yield, a melee weapon less, a [[Halberd]] nothing. The boar fights back. A [[Snare]] catches rabbits, and wild game leaves **tracks** on the ground.

## How it works

### What a blow or a shot reaches

**Wild game** (deer, rabbits, and boar) takes a blow or an arrow as anything does. A swing's wedge, an arrow's landing, a thrown spear, and a [[Fireball]] all hurt it, beside the dead or alone, with Multi-hit off or on.

**Tame stock** (hens, cows, pigs, and sheep) is hurt only on purpose:

- A swing takes the dead and wild game in its wedge first. Only when there is nothing else in the wedge does it strike a tame animal, and then the nearest one alone, with Multi-hit off or on. So a swing at one of the dead passes a nearer cow by, and a swing into a pen strikes the cow aimed at and no other.
- An arrow or a thrown weapon that lands by one of the dead takes the dead one; one that lands by a cow with nothing else there hurts the cow.
- A spell never hurts tame stock: a fireball aimed straight at a cow passes it by.
- The [[Shove]] is for the dead alone.

The Swing targets outline marks an animal the next swing would hit, as it marks the dead.

A blow on an animal does its damage and nothing more: no knockback, no stagger, no knockdown, and no finisher. A shot does its damage scaled by the draw, as on the dead (see [[Archery]]). An animal never burns. Each kind's health is in the table below.

### Struck, short of a kill

A deer or a rabbit that is hit runs from where the blow or the shot came from, as it runs from anyone it sees (see [[Animals]]). Tame stock does nothing. A **boar** fights back (see below).

### The carcass

At no health an animal dies where it stands and lies on its side: a **carcass**. It stays in the animals' own list, never among the dead's [[Corpses]], and keeps the **class** of what killed it:

| Class | What kills | Share of every yield |
|---|---|---|
| Bow | An arrow from the [[Hunting bow]] | {{n animals.kills.bow}} |
| Thrown | A thrown weapon, such as the [[Throwing spear]] | {{n animals.kills.thrown}} |
| Melee | A blow with anything else in hand, fists too | {{n animals.kills.melee}} |
| Spell | A spell, such as the [[Fireball]] | {{n animals.kills.spell}} |
| Halberd | A blow with the [[Halberd]] | {{n animals.kills.halberd}} |
| Snare | A [[Snare]]'s catch | {{n animals.kills.snare}} |

**Look at** on a carcass says what it is and how it died: "A dead deer. Shot clean." for the bow, "Speared." for a thrown weapon, "Beaten down." for melee, "Burnt." for a spell, "Hacked to ruin by a halberd: there is little worth taking." for the halberd, and "Caught in a snare." Once skinned it reads "A dead deer, skinned."

A carcass lies where it fell until it is butchered. It never rots and the dead ignore it.

### Skinning and butchering

A carcass's menu has **Skin the deer**, then **Butcher the deer**. Each is a timed action, {{n animals.work.skin seconds}} to skin and {{n animals.work.butcher seconds}} to butcher, and each needs a [[Dirk]] carried anywhere: in a hand, on the belt, or in the bag. Without one the entries are greyed "Skin the deer (you need a dirk)". Butcher is greyed "(skin it first)" until an animal with a hide is skinned. A hen and a pig have no hide, so they offer Butcher alone. You must be within {{n census.constants.entities_animal.BODY_REACH tiles}} of it; farther, the entry walks you there first.

Skinning says "You skin the deer: a hide." or, when the share left nothing, "The deer's hide is ruined." Butchering says "You butcher the deer:" and what it gave or "There is nothing left worth taking on the deer." What you get goes to your bag, and what does not fit falls at your feet. Arrows and thrown weapons lodged in the carcass come back with the meat, a thrown weapon with its wear kept. A butchered carcass is gone.

### What each kind gives

| Kind | Health | Skinned | Butchered |
|---|---|---|---|
| Deer | {{n animals.species.deer.hp}} | [[Hide]] × {{n animals.species.deer.yields.skin.0.count.0}} | [[Meat|Raw venison]] × {{n animals.species.deer.yields.butcher.0.count.0}}–{{n animals.species.deer.yields.butcher.0.count.1}} |
| Rabbit | {{n animals.species.rabbit.hp}} | [[Hide]] × {{n animals.species.rabbit.yields.skin.0.count.0}} | [[Meat|Raw rabbit]] × {{n animals.species.rabbit.yields.butcher.0.count.0}} |
| Boar | {{n animals.species.boar.hp}} | [[Hide]] × {{n animals.species.boar.yields.skin.0.count.0}} | [[Meat|Raw pork]] × {{n animals.species.boar.yields.butcher.0.count.0}}–{{n animals.species.boar.yields.butcher.0.count.1}} |
| Cow | {{n animals.species.cow.hp}} | [[Hide]] × {{n animals.species.cow.yields.skin.0.count.0}} | [[Meat|Raw beef]] × {{n animals.species.cow.yields.butcher.0.count.0}}–{{n animals.species.cow.yields.butcher.0.count.1}} |
| Sheep | {{n animals.species.sheep.hp}} | [[Hide]] × {{n animals.species.sheep.yields.skin.0.count.0}} | [[Meat|Raw mutton]] × {{n animals.species.sheep.yields.butcher.0.count.0}}–{{n animals.species.sheep.yields.butcher.0.count.1}} |
| Pig | {{n animals.species.pig.hp}} | Nothing | [[Meat|Raw pork]] × {{n animals.species.pig.yields.butcher.0.count.0}}–{{n animals.species.pig.yields.butcher.0.count.1}}, [[Meat|Bacon]] × {{n animals.species.pig.yields.butcher.1.count.0}}–{{n animals.species.pig.yields.butcher.1.count.1}}, [[Lard]] × {{n animals.species.pig.yields.butcher.2.count.0}} |
| Hen | {{n animals.species.hen.hp}} | Nothing | [[Meat|Raw hen]] × {{n animals.species.hen.yields.butcher.0.count.0}}, [[Feather]] × {{n animals.species.hen.yields.butcher.1.count.0}}–{{n animals.species.hen.yields.butcher.1.count.1}} |

These are the counts of a whole yield. Each count is rolled in its range, then multiplied by the kill's share. The result is given as its whole part, plus one more at the chance of what is left over. So a bow's kill of a deer gives its full roll of venison; a melee kill gives about {{pct animals.kills.melee}} of its roll, on average; a melee kill's hide (a share of one) comes {{pct animals.kills.melee}} of the time, a spell's {{pct animals.kills.spell}}; and a halberd's kill gives nothing at all.

### The boar fights back

A boar struck by a player turns on that player. It charges at its run of {{n animals.species.boar.run tiles a second}}, and within {{n animals.species.boar.fight.reach tiles}} it winds up for {{n animals.species.boar.fight.windup seconds}} (its attack) and bites for {{n animals.species.boar.fight.damage}} damage if you are still in reach and in its sight, then again after {{n animals.species.boar.fight.cooldown seconds}}. The bite is met by a raised shield and worsened by the off hand's exposure exactly as the dead's bite is (see [[Wooden shield]] and [[Dual wielding]]), but a block does not stagger the boar. It opens no wound and gives no infection. The boar gives up {{n animals.species.boar.fight.seconds seconds}} after the last blow, or once you are more than {{n animals.species.boar.fight.giveUp tiles}} away, and goes back to grazing. Look at on a charging boar says "A boar, and it is angry." Only the boar fights; deer and rabbits never do.

### Snares

A [[Snare]] is made at the [[Workbench]] and set from the bag outdoors. Left alone for {{n animals.snare.hours}} game hours near a home of rabbits (within {{n animals.snare.reach tiles}}), it holds one of that home's rabbits, taken only when no player, living or dead, is within {{n animals.renew.clear tiles}} of the snare or of the rabbit, so nothing is caught in view. The catch is a carcass lying on the snare, its class Snare (the whole yield). Once it is butchered, the snare is set again. The rabbit was the home's own, so the home renews it in time: snaring is renewal, never endless.

### Tracks

Wild game leaves pairs of prints on the ground, one each {{n animals.tracks.every tile}} it goes, pointing the way it went: a deer's and a boar's two cleaves, a rabbit's two dots side by side. Each print lasts {{n animals.tracks.seconds seconds}} of the game's clock, fading as it ages, with at most {{n animals.tracks.keep}} an animal. You see them within {{n animals.tracks.radius tiles}} of you, on tiles in sight. Tame stock leaves none. A trail followed leads to the animal that made it.

## Numbers

- Shares: bow {{n animals.kills.bow}}, thrown {{n animals.kills.thrown}}, melee {{n animals.kills.melee}}, spell {{n animals.kills.spell}}, halberd {{n animals.kills.halberd}}, snare {{n animals.kills.snare}}.
- Skinning {{n animals.work.skin seconds}}; butchering {{n animals.work.butcher seconds}}; reach {{n census.constants.entities_animal.BODY_REACH tiles}}.
- The boar's bite: {{n animals.species.boar.fight.damage}} damage, reach {{n animals.species.boar.fight.reach tiles}}, windup {{n animals.species.boar.fight.windup seconds}}, every {{n animals.species.boar.fight.cooldown seconds}}; gives up after {{n animals.species.boar.fight.seconds seconds}} or past {{n animals.species.boar.fight.giveUp tiles}}.
- A snare: {{n animals.snare.hours}} game hours; a rabbits' home within {{n animals.snare.reach tiles}}; nobody within {{n animals.renew.clear tiles}}.
- Tracks: a print every {{n animals.tracks.every tile}}, kept {{n animals.tracks.seconds seconds}}, at most {{n animals.tracks.keep}} an animal, seen within {{n animals.tracks.radius tiles}}.

These are defaults, Michael's to tune (see [[Levers]]). Every skill gate the game's design names (Beastlore for tracks and snares, Crafting for the snare) is open to all until the skills are built.

## With friends

Hunting is the host's: the hits, the kill, the boar's charge, the snares' catches, and skinning and butchering all happen in the host's world. A guest's swing and arrow work on the host as the host's own do. Skin and Butcher are the carcass's menu entries, run on the host by the animal, so a guest's choice of the label is the host's doing, the bar included, and the yields go to the guest's own bag. A boar a guest strikes charges and bites the guest. Every player sees a carcass's class and whether it is skinned; a butchered carcass leaves every guest's world; a snare's catch shows on the snare for everyone. Tracks are each player's own view, drawn from where the game is in their own world: they are never sent, saved, or compared. A carcass and a set snare are saved with the world.

## See also

- [[Animals]], [[Keeping]]
- [[Dirk]], [[Snare]], [[Meat]], [[Hide]], [[Lard]], [[Feather]]
- [[Hunting bow]], [[Archery]], [[Combat]]
- [[Levers]]

## Sources

<!-- sources at 6e3ab37 -->
- `src/combat.js:204-220`: a blow's targets: the dead and wild game first, then the nearest tame animal alone; the shove for the dead alone
- `src/combat.js:388-397`: a blow on an animal: its damage only, the class of the item in hand
- `src/combat.js:495-499`: the Swing targets outline on animals
- `src/archery.js:272-292`: a landing on an animal: damage by the draw, the class bow, thrown, or spell, nothing set alight, what stays lodged
- `src/archery.js:319-346`: a landing takes the dead and wild game first, a tame animal only alone, and never by a spell
- `src/entities/animal.js:62-80`: wild or tame; the share by class; a blow's class by the item (`classes`); the work's seconds
- `src/entities/animal.js:696-725`: hurt and killed: the carcass and its class; deer and rabbits run, the boar charges its striker
- `src/entities/animal.js:360-406`: the boar's charge, windup, bite, cooldown, and giving up
- `src/game.js:430-436`, `src/combat.js:335-348`: the boar's bite through the guard and the off hand's exposure; no bleed, no infection
- `src/combat.js:146-176`: a shield meets the bite; an animal is not staggered by the block
- `src/entities/animal.js:727-822`: the yields rolled and shared by expected value; Skin then Butcher, a dirk carried, the reach, the refusals and the messages; lodged things back; butchered
- `src/interact.js:1945-1968`, `src/interact.js:1996`: the carcass's menu, timed, greyed with why
- `src/game.js:850-860`: a butchered carcass leaves the list; the snares checked once a second, watched by the players living and dead
- `src/entities/animal.js:887-958`: the snare's catch: its hours, a rabbits' home within reach, unseen, the catch on the snare, set again
- `src/entities/animal.js:960-970`: Look at's lines for a carcass and a charging boar
- `src/tracks.js:1-57`, `src/render/tracks.js:1-35`: the prints: wild game only, every so many tiles, their life, the cap, the radius, in sight; this client's alone
- `data/animals.json:1-18`: `kills`, `classes`, `work`, `snare`, `tracks`, each species' health, wildness, `yields`, and the boar's `fight` (game #456)

{{navbox items}}
