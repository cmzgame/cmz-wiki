---
title: Stagger and knockdown
categories: [Combat, Mechanics]
aliases: [Stagger, Knockdown, Flinch, Interrupt, Getting up, Wind-up]
summary: Every hit makes one of the dead flinch; a hit may also stop its walk or floor it, and a hit during its bite's wind-up cancels the bite.
numbersOk: true
---

Every hit on one of [[The dead]] makes it **flinch**. A hit may also **stagger** it (stop its walk for a moment) or **knock it down** (floor it briefly), and a hit landed while it winds up a bite **cancels the bite**. Each weapon's chances are on its page and in [[Weapons]].

## How it works

### The flinch

Every landed hit that neither kills nor floors plays the hurt pose, a short flash and a lean back, whatever the weapon and whether or not it staggers. A flinch does not stop the walk: one of the dead that only flinches keeps coming, and the pose plays out over its walk.

### Cancelling a bite

One of the dead winds up before it bites: the bite lands 0.4 seconds after the attack begins. <!-- typed: the attack's active frame over its speed, in data/poses.json `zombie`, which no template reads --> Any landed hit during the wind-up cancels the bite, from any weapon, an arrow, a thrown spear, the [[Fireball]], or the [[Shove]]. The zombie goes back to the chase and waits out the bite's cooldown, {{n tuning.zombie.cooldown seconds}}, before it can bite again. A bite that has already landed cannot be cancelled.

A knockdown also cancels a bite. A front block with the [[Wooden shield]] staggers the biter, ignores the window below, and always cancels its bite.

### Stagger

Each hit staggers with the weapon's stagger chance. A source that gives no chance (an arrow) uses the default, {{n combat.stagger.chance}}. A stagger stops the walk for {{n tuning.zombie.stagger seconds}} for every weapon; the [[Shove]] staggers for {{n combat.shove.stagger seconds}}. A stagger during a bite's recovery ends the attack, and the zombie waits out its cooldown.

After a stagger ends there is a short window, {{n combat.stagger.immunity seconds}}, in which that one cannot be staggered again. A stream of quick hits cannot hold it in place forever, though every hit still flinches it.

### Knockdown

Only three things floor one of the dead, each by its own chance:

- the [[Flanged mace]], on {{n items.mace.weapon.knockdown}} of hits,
- the [[Halberd]]'s thrust, on {{n items.halberd.weapon.alt.knockdown}},
- the [[Shove]], on {{n combat.shove.knockdown}}.

Every other weapon, the tools and [[Fists]] included, uses the default, {{n combat.blow.knockdownChance}}, and never floors. Arrows, thrown spears, and the fireball never floor.

A knockdown cancels a bite and any attempt to break through an [[Openings|opening]].

### Getting up

A floored zombie lies still for {{n tuning.zombie.downTime seconds}}, then gets up over {{n tuning.zombie.getUpTime seconds}}. Afterwards it goes back to the chase if it was hunting and remembers where it saw the player; otherwise it stands idle.

While it lies, any blow in hand is a **finisher**: {{n combat.finisher.mult}} times the damage, and no push, stagger, or knockdown. While it gets up, a blow does its plain damage and nothing else: the rise is safe from the finisher, so a knockdown buys one finishing blow, not a free kill (see [[Combat]]).

## Numbers

- Bite wind-up: 0.4 seconds; the bite's cooldown: {{n tuning.zombie.cooldown seconds}}.
- Default stagger chance: {{n combat.stagger.chance}}.
- Stagger: {{n tuning.zombie.stagger seconds}}; from the shove {{n combat.shove.stagger seconds}}.
- Immunity after a stagger: {{n combat.stagger.immunity seconds}}.
- Knockdown: the mace {{n items.mace.weapon.knockdown}}, the halberd's thrust {{n items.halberd.weapon.alt.knockdown}}, the shove {{n combat.shove.knockdown}}, any other {{n combat.blow.knockdownChance}}.
- Down: {{n tuning.zombie.downTime seconds}}. Getting up: {{n tuning.zombie.getUpTime seconds}}.

## See also

- [[Combat]]
- [[Weapons]]
- [[The dead]]
- [[Shove]]
- [[Levers]]: the floor's and knockdown's numbers still being balanced

## Sources

<!-- sources at 37e8726 -->
- `src/entities/zombie.js:38-44`: the flinch a one-shot that the walk and the idle do not replace
- `src/entities/zombie.js:139-162`: a landed hit cancels a bite not yet landed, sets the cooldown; the stagger by chance and its immunity; the hurt pose on every hit
- `data/poses.json`: the dead's attack, six frames at 10 a second, the bite on the fifth
- `src/entities/zombie.js:126-138`: a knockdown cancels a bite and a breach
- `src/entities/zombie.js:87-98`: a shield block staggers, ignores the immunity, and cancels the bite
- `data/items.json`: each weapon's `staggerChance`, the mace's `knockdown`, the halberd thrust's `knockdown`
- `data/combat.json`: `stagger.chance`, `stagger.immunity`, `shove.*`, `blow.knockdownChance`, `finisher.mult`
- `data/tuning.json`: `zombie.stagger`, `zombie.cooldown`, `zombie.downTime`, `zombie.getUpTime`
- `src/combat.js:357-377`: the finisher only while the zombie lies; no push, stagger, or knockdown on a zombie down or rising; the knockdown by the weapon's chance or the default
- `src/archery.js`: an arrow, a thrown spear, and the fireball pass no knockdown
- `src/entities/zombie.js:190-231`: lying, getting up, back to the chase or idle
