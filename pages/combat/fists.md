---
title: Fists
categories: [Combat, Weapons]
aliases: [Punch, Unarmed]
summary: An empty main hand punches: weak, short, never floors, and never breaks.
---

**Fists** are what the [[Player]] fights with when nothing usable is in the main hand. A punch is weak and short, never floors one of [[The dead]], and never breaks. An item with no weapon block held in the main hand (food, the [[Throwing knife]], the [[Throwing axe]], and so on) also swings as fists. The [[Staff of Fire]] and the [[Book of Fire]] are the exception: held together they cast a [[Fireball]], and either one alone does nothing on the left button (no punch).

## Combat

Left punches. Fists have no other mode.

- Damage: {{n combat.fists.damage}}.
- Reach: {{n combat.fists.range tiles}}. Arc: {{n combat.fists.arc}} degrees.
- Swing: {{n combat.fists.swing seconds}}.
- Push: {{n combat.fists.knockback tiles}}.
- Stamina: {{n combat.fists.stamina}}.
- Stagger chance: {{n combat.fists.staggerChance}}.
- Knockdown chance: {{n combat.fists.knockdown}}.

The Swing targets setting works with fists too. Fists have no durability to lose (see [[Durability]]). The [[Shove]] works with empty hands as well.

## See also

- [[Combat]]
- [[Weapons]]

## Sources

<!-- sources at 9205ad7 -->
- `src/combat.js:50`, `src/combat.js:73-77`: fists when the main hand holds no weapon block
- `data/items.json`: the throwing knife and throwing axe carry no weapon block; the book carries `book.spell` and the staff `staff: true` (game commit 3c70aa7)
- `src/archery.js`: `spellOf`, a staff and a book make a spell launcher; one without the other refuses
- `data/combat.json`: the `fists` numbers
- `src/combat.js:399-410`: swing targets work with fists
- `src/combat.js:362-372`: durability is spent only by a held weapon
- `src/combat.js:376-394`: the shove with any hands
