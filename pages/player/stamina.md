---
title: Stamina
categories: [Player, Mechanics]
aliases: [Sprint, Sprinting, Winded, Running]
summary: The orange bar that sprinting, swinging, shoving, and blocking spend.
---

**Stamina** is your short-term breath, shown as an orange bar under [[Health]] with a percent. It runs from {{n tuning.player.stamina}} down to zero. Sprinting and fighting spend it, and it comes back quickly when you stop.

## How it works

### Sprinting

Hold Shift while moving to sprint at {{n tuning.player.sprintMult}} times walking speed. Sprinting drains {{n tuning.player.sprintDrain}} stamina a second.

Run the bar to zero and you are **winded**: you cannot sprint again until stamina climbs back to {{n tuning.player.sprintRecoverAt}}. The bar shows when you are winded.

You also cannot sprint while:

- standing still
- carrying a prop
- holding a [[Wooden shield]] up
- "Exhausted" or worse ([[Tiredness]])

### What else costs it

- **A swing** costs the weapon's stamina (fists {{n combat.fists.stamina}}; each weapon's is on its page and in [[Weapons]]).
- **A shove** costs {{n combat.shove.stamina}}.
- **A blow taken on a shield** costs the shield's {{n items.shield.shield.stamina}}.

Stamina is the one thing that paces a fight: from a full bar, an [[Arming sword]] swung as fast as it allows runs it dry in about ten seconds, and a heavier weapon sooner. A swing the bar cannot pay for still lands, at ×{{n combat.blow.tiredDamage}} damage, so you are never locked out of hitting. A swing or shove that empties the bar leaves you winded, and the bar you fight with is the bar you sprint with.

### Recovery

When you are not sprinting, stamina comes back at {{n tuning.player.staminaRegen}} a second. None comes back while a shield is raised. Your needs slow it:

- ×{{n tuning.player.needsStaminaRegenMult}} while "Very hungry" or worse ([[Hunger]]) or "Parched" or worse ([[Thirst]]).
- ×{{n tuning.player.tiredStaminaRegenMult}} while "Tired" or worse ([[Tiredness]]).
- Both multiply together.

## Numbers

- Maximum: {{n tuning.player.stamina}}
- Sprint speed: ×{{n tuning.player.sprintMult}}
- Sprint drain: {{n tuning.player.sprintDrain}} a second
- Recovery: {{n tuning.player.staminaRegen}} a second
- Winded until: {{n tuning.player.sprintRecoverAt}}
- Shove: {{n combat.shove.stamina}}
- Damage when a swing cannot be paid for: ×{{n combat.blow.tiredDamage}}

## Settings that change it

- **Survival** (default On): off, the needs never slow recovery.

## See also

- [[Health]], [[Combat]], [[Wooden shield]], [[Tiredness]], [[Player]]
- [[Levers]]: stamina's numbers still being balanced

## Sources

<!-- sources at 37e8726 -->
- `src/ui/hud.js:95-98`: the bar, its percent, and the winded class
- `data/tuning.json:49-53`: the maximum, the sprint multiplier, the drain, the recovery, and the winded threshold
- `src/entities/player.js:352-362`: sprinting, its drain, winded, and the recovery
- `src/entities/player.js:355`: no sprint when still, winded, carrying, guarding, or Exhausted
- `data/combat.json:2`, `data/combat.json:12`: the fists' and the shove's stamina
- `data/items.json:37`, `src/combat.js:150-159`: a blocked blow costs the shield's stamina
- `data/items.json:8`, `data/tuning.json:52`: an arming sword's cost and swing against the recovery, about ten seconds from a full bar
- `data/combat.json:10`, `src/combat.js:336-341`, `src/combat.js:375`, `src/combat.js:419-420`: the tired blow, a swing the bar cannot pay for, at `blow.tiredDamage` (game commit 2c70942); an emptying swing or shove leaves you winded
- `src/entities/player.js:359-361`, `src/entities/player.js:168-173`, `data/tuning.json:73-74`: no recovery with the guard up; the needs' multipliers, multiplied together
- `src/entities/player.js:139-145`: Survival off holds the needs full, so they never slow it
