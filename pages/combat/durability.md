---
title: Durability
categories: [Combat, Mechanics]
aliases: [Weapon durability, Breaking, Repairs, Repair, Condition]
summary: Weapons lose durability by landed hits, sized so each lasts about its listed number of kills; a made weapon or tool can be repaired a few times, each repair reaching less.
---

**Durability** is how long a weapon lasts. Weapons lose durability by landed hits, sized so a weapon lasts about its listed number of kills against one of [[The dead]] at full health ({{n tuning.zombie.hp}}). When a weapon is spent it is gone from the hand, with a word on screen. Most weapons and tools that can be made can be repaired at the [[Anvil]], and the edged ones sharpened at the [[Grindstone]], a set number of times in their life, each repair bringing them back to less than the one before.

## How it works

### Durability by kills

Each weapon lists how many kills it lasts. From that and its damage the game works out the durability each hit costs:

- **Hits per kill** is the zombie's health divided by the weapon's damage, rounded up.
- **Each hit costs** one part in (kills × hits per kill).

So a weapon breaks on the landed hit numbered its kills times its hits per kill. The table below gives both for every weapon.

- A miss costs nothing.
- A swing that hits several of the dead (with Multi-hit on) costs durability once for each.
- The [[Halberd]]'s thrust and an off-hand swing cost durability at the weapon's own rate per hit.
- The [[Torch]] loses durability like any weapon and breaks the same way. It also burns down while it is lit, on the same meter, faster in a hand than on the belt or in a holder, so a lit torch runs out without a blow struck (see [[Torch#Burning down|Torch]]).
- [[Fists]] and the [[Shove]] cost no durability.
- A thrown [[Throwing spear]] keeps its durability.

### The bow

The [[Hunting bow]] loses durability per arrow loosed instead: it lasts {{n items.bow.shots}} shots, and leaves the hand at the last.

### Repairs

A weapon or tool that wears and that a recipe makes names its repair: the material the anvil uses on it, and whether it has an edge for the grindstone. Each item counts its own repairs, and the count, not the place, decides what the next repair reaches, so a repair at either place lowers the next at both.

- **The [[Grindstone]]**, in [[The smithy]], sharpens a thing with an edge for nothing, to {{pct tuning.work.grindstone.ceilings.0}} of its condition, then {{pct tuning.work.grindstone.ceilings.1}}, then {{pct tuning.work.grindstone.ceilings.2}}. It takes {{n tuning.work.grindstone.seconds seconds}}.
- **The [[Anvil]]**, beside it, repairs any of them for one unit of its material, with a [[Smith's hammer]] on you, to {{pct tuning.work.anvil.ceilings.0}}, then {{pct tuning.work.anvil.ceilings.1}}, then {{pct tuning.work.anvil.ceilings.2}}. It takes {{n tuning.work.anvil.seconds seconds}}.

After {{n tuning.work.anvil.ceilings.length}} repairs, at either place, a thing is past repair, and wears on until it breaks. A place offers a repair only when it would raise the thing's condition: a sword repaired once and worn to half its condition has no entry at the grindstone, whose next ceiling is {{pct tuning.work.grindstone.ceilings.1}}, but has one at the anvil, whose next is {{pct tuning.work.anvil.ceilings.1}}.

| Repaired with | Edged: grindstone or anvil | Not edged: anvil only |
|---|---|---|
| [[Iron bar]] | [[Arming sword]], [[Hatchet]], [[Throwing spear]], [[Scythe]], [[Dirk]] | [[Flanged mace]], [[Pickaxe]], [[Smith's hammer]] |
| [[Plank]] | - | [[Hunting bow]], [[Hoe]], [[Fishing rod]], [[Shovel]] |

The [[Torch]], the [[Halberd]], the [[Stick]], and the [[Plank]] wear but cannot be repaired.

The menus name the numbers: "Sharpen arming sword (*now*% to {{pct tuning.work.grindstone.ceilings.0}})", "Repair hoe (*now*% to {{pct tuning.work.anvil.ceilings.0}}, a plank)". One worn past repair is greyed, "Repair hoe (worn past repair)"; one the anvil cannot do for want of the hammer or the material is greyed with what is missing, "Repair hoe (need a plank)". With nothing to do, each place shows one greyed line: "Sharpen (no dull blade carried)" or "Repair (nothing worn carried)". See each place's page for its messages.

A repairable thing's hover card says where and with what, and how many repairs it has in all: "Repaired at an anvil with an iron bar, or sharpened at a grindstone; ... repairs in all." Once it has had one, its state line, after its condition ("...% left"), says how many it has left, "... repairs left", or "past repair".

## Numbers

{{weapon-table}}

- The grindstone's ceilings: {{pct tuning.work.grindstone.ceilings.0}}, {{pct tuning.work.grindstone.ceilings.1}}, {{pct tuning.work.grindstone.ceilings.2}}; {{n tuning.work.grindstone.seconds seconds}} a sharpening.
- The anvil's ceilings: {{pct tuning.work.anvil.ceilings.0}}, {{pct tuning.work.anvil.ceilings.1}}, {{pct tuning.work.anvil.ceilings.2}}; {{n tuning.work.anvil.seconds seconds}} a repair.

## With friends

Durability is kept on the item itself and travels with the hands, so it is the same for host and guests. So does its repair count, in the player's record with the rest of what they carry. A guest's Sharpen or Repair is sent to the host by its label and run there for that player; the wear goes to a guest to the hundredth, so the percentages on a guest's menu are the host's.

## See also

- [[Weapons]]
- [[Combat]]
- [[Grindstone]]
- [[Anvil]]

## Sources

<!-- sources at 64cc711 -->
- `src/items.js:27-37`: hits per kill and the durability each hit costs (the code's `wearPerHit`) from `data/tuning.json` (`zombie.hp`)
- `src/combat.js:371`, `src/combat.js:377-389`: durability spent on each landed hit and target; the weapon gone with a word when none is left
- `data/items.json`: each weapon's `kills`; the bow's `shots`
- `src/game.js:494-520`, `data/tuning.json:84-85`: a lit torch burns down on the same `wear`, spent with the same word
- `src/combat.js:393-411`, `src/combat.js:76-80`: the shove and fists cost no durability
- `src/archery.js:702-704`: a thrown spear keeps its durability (the entry itself thrown)
- `src/archery.js:710-719`, `src/items.js:39-41`: the bow loses durability per arrow loosed and leaves the hand at the last
- `src/repair.js:1-10`, `src/repair.js:22-48`: the repair block, only on a thing that wears; one count per item; the ceiling the rung at the count, at either place; past the last, past repair (game #416, at 31d330a)
- `data/tuning.json:167-169`: the two ladders and their seconds; the anvil's tool, `smith` (game #416, at 31d330a)
- `data/items.json:6-52`: each repair block: iron bar and edged, iron bar, or plank; none on the torch, halberd, stick, or plank (game #416, at 31d330a)
- `src/repair.js:56-72`, `src/repair.js:94-108`: what refuses, the material taken, the condition set to the ceiling, the count raised (game #416, at 31d330a)
- `src/repair.js:115-153`: the menus: offered only when it raises the condition, the labels, greyed past repair or missing a thing, the one greyed line (game #416, at 31d330a)
- `src/item-info.js:121-126`, `src/item-info.js:143-148`: the hover card's repair line and its state line's repairs left (game #416, at 31d330a)
- `src/net.js:600-610`, `src/net.js:827-830`, `src/repair.js:50-52`: a guest's repair run on the host by label; the wear sent to two decimals so the labels agree (game #416, at 31d330a)

{{navbox weapons}}
