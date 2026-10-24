---
title: Levers
categories: [Lists, Settings, Combat]
aliases: [Levers and world settings, Tuning, Tuning levers, Balance, Sandbox settings]
summary: Every number Michael is still balancing by play, and every choice a world or a player makes, each with its value today and where it lives.
---

The **levers** are the numbers the game is still being balanced on and the settings a player can choose. The list follows the game's own reference of them, `docs/42-levers.md`, and every value on this page is read from the game's data, so it changes when the game does. There are two kinds:

- **A tuning lever** is a number still being balanced by play. Players cannot change it; it moves when a ruling moves it.
- **A world setting** is a choice a player makes: either a rule of the [[World rules|world]] (chosen at the Sandbox step of New world, most of them changeable later by the host from the pause menu), or a player's own [[Settings|setting]] on the Settings screen.

Where a lever lives only in the game's code, not its data, this page says so.

## Tuning levers

### The dead and the bite

- **The dead's health:** {{n tuning.zombie.hp}}. How many blows each weapon needs follows from it (the weapons table below). It has room to rise with the difficulty pass. See [[The dead]].
- **What a cancelled bite costs the dead one:** a landed hit during a bite's wind-up cancels the bite, and the dead one waits out the bite's whole cooldown, {{n tuning.zombie.cooldown seconds}}, before it can bite again. A softer setting under discussion is half of it.
- **Whether every hit cancels a bite, or only one that staggers:** today every landed hit cancels it, whatever the weapon. This switch lives in the code, not the data.
- **The bite's wind-up:** the dead's bite lands on frame {{n poses.zombie.activeFrame}} of its attack, the first frame counted as frame zero, at {{n poses.zombie.fps}} frames a second.
- **Bite tokens:** of the dead in reach of one target, {{n tuning.zombie.biteTokens}} may bite at once, plus one more for every {{n tuning.zombie.biteTokensPer}} in reach beyond the first {{n tuning.zombie.biteTokensPer}}. See [[The dead]].
- **The floor:** one of the dead knocked down stays down {{n tuning.zombie.downTime seconds}} and takes {{n tuning.zombie.getUpTime seconds}} to get up; a villager who has just turned lies {{n tuning.zombie.turnDownTime seconds}}. See [[Stagger and knockdown]].

### The player's blows

- **Stamina's regeneration:** {{n tuning.player.staminaRegen}} a second. See [[Stamina]].
- **Each weapon's swing cost:** the stamina each swing takes, on each weapon (the table below); [[Fists]] take {{n combat.fists.stamina}}.
- **The tired blow:** a swing the stamina bar cannot pay for lands at {{pct combat.blow.tiredDamage}} of its damage.
- **Knockdown:** an ordinary blow's chance to floor one of the dead is {{pct combat.blow.knockdownChance}}. The [[Flanged mace]]'s is {{pct items.mace.weapon.knockdown}}, the [[Halberd]]'s thrust's {{pct items.halberd.weapon.alt.knockdown}}, and the [[Shove|shove]]'s {{pct combat.shove.knockdown}}.
- **The finisher:** a blow on one of the dead that is down does {{n combat.finisher.mult}} times its damage.
- **The third-hit combo:** three hits on one of the dead within {{n combat.combo.window seconds}} always floor it. It is switched off and kept for testing.
- **The shove:** a push of {{n combat.shove.knockback tiles}}, a stagger of {{n combat.shove.stagger seconds}}, {{n combat.shove.stamina}} stamina, a recovery of {{n combat.shove.cooldown seconds}} in which no swing starts, on up to {{n combat.shove.targets}} of the dead at once. See [[Shove]].
- **The spear's break:** a thrown [[Throwing spear|spear]] breaks on {{pct items.spear.thrown.breakChance}} of its throws, hit or miss.
- **Hit stop and the swing's commitment:** a landed blow freezes the world for {{n combat.blow.hitStop seconds}}, a killing one for {{n combat.blow.hitStopKill seconds}}; while a swing plays, the player walks at {{pct combat.blow.swingMove}} of their speed. See [[Combat]].

{{weapon-table}}

### Food, the world, the valley

- **Rot:** {{planned doc=42 note="Each food will keep for a number of game days, and planted or hanging food five times as long."}}
- **Day-one food:** what one player with tools can gather and make in the valley is aimed at about twelve game days of food, as counted on [[Day-one food]].
- **The loot tables:** what every [[Containers|container]] holds is provisional until it is ruled.

## World settings

### A world's rules

Chosen at the Sandbox step of New world; see [[World rules]] for what each does.

- **Zombie aggro**, {{default zombieAggro}} by default.
- **Zombies attack villagers**, {{default zombiesAttackVillagers}}.
- **Survival**, {{default survival}}.
- **Free building**, {{default freeBuilding}}.
- **Multi-hit**, {{default multiHit}}: "the easy button".
- **Trees** ({{default trees}}) and **Starting population** ({{default population}}): chosen when the world is made, and fixed after.
- **Dev chest** ({{default devChest}}), **Dev bag** ({{default devBag}}), and **Extra starting items** (none): the Sandbox step's testing choices.
- **Combat difficulty and infection, one dial:** {{planned doc=42 note="One world setting for how hard the fighting is and how readily a bite infects."}} Today its only part is the chance a bite infects, {{pct combat.infection.chance}}, a tuning number. See [[Infection]].
- **What death takes:** {{planned doc=42 note="Death will take all of a character's skills, with a world rule to soften it if playtests ask for one."}}

### A player's own settings

On the [[Settings]] screen, kept in the browser.

- **Aim guide**, {{default aimGuide}} by default, for the challenge of learning a bow's draw by feel. See [[Archery]].
- **Swing targets**, {{default showSwingTargets}}. **Swing timer**, {{default swingTimer}}. **Floating numbers**, {{default floaters shown}}.
- **Sound**, {{default soundOn}}, and **Volume**, {{default soundVolume percent}}; `F8` switches Sound from anywhere in the game. See [[Sound]].

## See also

- [[Settings]], [[World rules]], [[Combat]], [[The dead]]

## Sources

<!-- sources at 3c68f9c -->
- `docs/42-levers.md`: the list of levers and world settings, their kinds, and the rulings behind each
- `data/tuning.json`: the dead's health, the bite's cooldown, the bite tokens, the floor's times, stamina's regeneration
- `src/entities/zombie.js:333-352`: the bite tokens' pool, one more for every `biteTokensPer` in reach beyond the first
- `src/entities/zombie.js:140-148`: a landed hit during the wind-up cancels the bite and sets the bite's cooldown; every hit, a switch in code
- `data/poses.json`: the dead's attack, its rate and the frame the bite lands on
- `data/combat.json`: the tired blow, knockdown, the finisher, the combo and its switch (`combo.enabled`), the shove, hit stop, the swing's walk, fists, the infection chance
- `data/items.json`: each weapon's stamina and damage, the mace's and the thrust's knockdown, the spear's break
- `src/settings.js:8-45`: every setting's default
- `src/settings.js:59-82`: the Settings screen's rows and the world's rules, which are fixed when the world is made
- `src/main.js:1924-1934`: F8, the mute key
