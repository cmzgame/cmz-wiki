---
title: Stagger and knockdown
categories: [Combat, Mechanics]
aliases: [Stagger, Knockdown, Interrupt, Getting up]
summary: How a hit stops one of the dead for a moment or floors it, and how long until it can be stopped again.
---

A hit on one of [[The dead]] can **stagger** it (stop it in its tracks for a moment) or **knock it down** (floor it for a while). Heavier weapons do both more often. Each weapon's chances are on its page and in [[Weapons]].

## How it works

### Stagger

Each hit staggers with the weapon's stagger chance. A source that gives no chance (an arrow) uses the default, {{n combat.stagger.chance}}. A stagger lasts {{n tuning.zombie.stagger seconds}} for every weapon; the [[Shove]] staggers for {{n combat.shove.stagger seconds}}.

After a stagger ends there is a short window, {{n combat.stagger.immunity seconds}}, in which that one cannot be staggered again. A stream of quick hits cannot hold it in place forever.

### Interrupting a bite

A bite already under way is not cancelled by a stagger. The damage and the push still land, but the bite goes on. Only a blow that **interrupts** cancels it:

- the [[Mace]]
- the [[Halberd]]'s thrust
- the thrown [[Throwing spear]]
- the [[Shove]]

A knockdown also cancels a bite. A front block with the [[Shield]] staggers the biter, ignores the window above, and always cancels its bite.

### Knockdown

Each hit may floor the target. The chance is the weapon's own where it has one: the [[Mace]] floors on {{n items.mace.weapon.knockdown}} of hits, and [[Fists]] on {{n combat.fists.knockdown}}. Every other weapon, the tools included, floors on the default {{n census.constants.combat.KNOCKDOWN_CHANCE}} of hits. Arrows and thrown spears never floor. The shove floors on {{n combat.shove.knockdown}} of shoves.

A knockdown cancels a bite and any attempt to break through an [[Openings|opening]].

### Getting up

A floored zombie lies still for {{n tuning.zombie.downTime seconds}}, then gets up over {{n tuning.zombie.getUpTime seconds}}. Afterwards it goes back to the chase if it was hunting and remembers where it saw the player; otherwise it stands idle.

Any blow in hand on a zombie that is down or getting up is a finisher: {{n combat.finisher.mult}} times the damage, and no push, stagger, or knockdown (see [[Combat]]).

## Numbers

- Default stagger chance: {{n combat.stagger.chance}}.
- Stagger: {{n tuning.zombie.stagger seconds}}; from the shove {{n combat.shove.stagger seconds}}.
- Immunity after a stagger: {{n combat.stagger.immunity seconds}}.
- Default knockdown chance: {{n census.constants.combat.KNOCKDOWN_CHANCE}}.
- Down: {{n tuning.zombie.downTime seconds}}. Getting up: {{n tuning.zombie.getUpTime seconds}}.

## See also

- [[Combat]]
- [[Weapons]]
- [[The dead]]

## Sources

<!-- sources at 9205ad7 -->
- `src/entities/zombie.js:142-152`, `src/entities/zombie.js:190-196`: stagger by chance, immunity, interrupts
- `data/items.json`: each weapon's `staggerChance`, `interrupts`, and the mace's `knockdown`
- `data/combat.json`: `stagger.chance`, `stagger.immunity`, `shove.*`, `fists.knockdown`, `finisher.mult`
- `data/tuning.json`: `zombie.stagger`, `zombie.downTime`, `zombie.getUpTime`
- `src/entities/zombie.js:105`, `src/entities/zombie.js:149-150`: the stagger's length and the immunity window
- `src/combat.js:386`: the shove always interrupts
- `src/entities/zombie.js:75-85`: a shield stagger ignores immunity and cancels the bite
- `src/combat.js:37`, `src/combat.js:343`: the default knockdown chance
- `src/archery.js:247`: arrows and thrown spears never floor
- `src/entities/zombie.js:131-141`, `src/entities/zombie.js:166-189`: a knockdown cancels a bite and a breach; getting up; back to the chase or idle
- `src/combat.js:329-356`: the finisher on a target down or rising
