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
- holding a [[Shield]] up
- "Exhausted" or worse ([[Tiredness]])

### What else costs it

- **A swing** costs the weapon's stamina (fists {{n combat.fists.stamina}}; each weapon's is on its page and in [[Weapons]]).
- **A shove** costs {{n combat.shove.stamina}}.
- **A blow taken on a shield** costs the shield's {{n items.shield.shield.stamina}}.

A swing at zero stamina still lands, at ×{{n census.constants.combat.TIRED_DAMAGE}} damage. A swing or shove that empties the bar leaves you winded.

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
- Damage at zero stamina: ×{{n census.constants.combat.TIRED_DAMAGE}}

## Settings that change it

- **Survival** (default On): off, the needs never slow recovery.

## See also

- [[Health]], [[Combat]], [[Shield]], [[Tiredness]], [[Player]]

## Sources

<!-- sources at 9205ad7 -->
- `src/ui/hud.js:95-101`: the bar, its percent, and the winded class
- `data/tuning.json:39-43`: the maximum, the sprint multiplier, the drain, the recovery, and the winded threshold
- `src/entities/player.js:325-335`: sprinting, its drain, winded, and the recovery
- `src/entities/player.js:328`: no sprint when still, winded, carrying, guarding, or Exhausted
- `data/combat.json:2,9`: the fists' and the shove's stamina
- `data/items.json:34`, `src/combat.js:134-143`: a blocked blow costs the shield's stamina
- `src/combat.js:48,311-314,345`: half damage at zero stamina; an emptying swing or shove leaves you winded
- `src/entities/player.js:143-148`, `data/tuning.json:61-62`: no recovery with the guard up; the needs' multipliers, multiplied together
- `src/entities/player.js:120-126`: Survival off holds the needs full, so they never slow it
