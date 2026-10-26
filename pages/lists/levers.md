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
- **The closing burst** (a trial): one of the dead in the chase walks {{n tuning.zombie.burstSpeed}} times as fast within {{n tuning.zombie.burstRange tiles}} of a target it sees; set to one, it is off. See [[The dead#The closing burst|The dead]].
- **Bite tokens:** of the dead in reach of one target, {{n tuning.zombie.biteTokens}} may bite at once, plus one more for every {{n tuning.zombie.biteTokensPer}} in reach beyond the first {{n tuning.zombie.biteTokensPer}}. See [[The dead]].
- **The floor:** one of the dead knocked down stays down {{n tuning.zombie.downTime seconds}} and takes {{n tuning.zombie.getUpTime seconds}} to get up; a villager who has just turned lies {{n tuning.zombie.turnDownTime seconds}}. See [[Stagger and knockdown]].

### The player's blows

- **Stamina's regeneration:** {{n tuning.player.staminaRegen}} a second. See [[Stamina]].
- **Each weapon's swing cost:** the stamina each swing takes, on each weapon (the table below); [[Fists]] take {{n combat.fists.stamina}}.
- **The tired blow:** a swing the stamina bar cannot pay for lands at {{pct combat.blow.tiredDamage}} of its damage; a shove the bar cannot pay for staggers and floors at the same share, and pushes {{pct combat.shove.tiredPush}} as far.
- **Knockdown:** an ordinary blow's chance to floor one of the dead is {{pct combat.blow.knockdownChance}}. The [[Flanged mace]]'s is {{pct items.mace.weapon.knockdown}}, the [[Halberd]]'s thrust's {{pct items.halberd.weapon.alt.knockdown}}, and the [[Shove|shove]]'s {{pct combat.shove.knockdown}}.
- **The finisher:** a blow on one of the dead that is down does {{n combat.finisher.mult}} times its damage.
- **The third-hit combo:** three hits on one of the dead within {{n combat.combo.window seconds}} always floor it. It is switched off and kept for testing.
- **The shove:** a push of {{n combat.shove.knockback tiles}} ({{pct combat.shove.tiredPush}} of it when tired), a stagger of {{n combat.shove.stagger seconds}}, {{n combat.shove.stamina}} stamina, a recovery of {{n combat.shove.cooldown seconds}} in which no swing starts, on up to {{n combat.shove.targets}} of the dead at once. See [[Shove]].
- **The spear's break:** a thrown [[Throwing spear|spear]] breaks on {{pct items.spear.thrown.breakChance}} of its throws, hit or miss.
- **Hit stop and the swing's commitment:** a landed blow freezes the world for {{n combat.blow.hitStop seconds}}, a killing one for {{n combat.blow.hitStopKill seconds}}; while a swing plays, the player walks at {{pct combat.blow.swingMove}} of their speed. See [[Combat]].

{{weapon-table}}

### Food, the world, the valley

- **Rot:** {{planned doc=42 note="Each food will keep for a number of game days, and planted or hanging food five times as long."}}
- **Day-one food:** what one player with tools can gather and make in the valley is aimed at about twelve game days of food, as counted on [[Day-one food]].
- **The loot tables:** a table per kind of [[Containers|container]], most with weights out of thirty-two, so a weight is a chance in thirty-two a roll, and a number of rolls for each container. Every table, each item's chance a roll and its expected count per container, and what the valley holds all told are on [[Drop tables]], for Michael to tune.
- **What stacks and how far:** each item's own stack size; one thing a cell unless chosen. Today arrows, throwing knives and axes, bandages, feathers, hay, grain, pemmican, seeds, the vials, and the potions and poisons stack (see [[Inventory#Stacking|Inventory]]).
- **The bags' sizes:** each bag's grid: the [[Burlap sack]] {{n items.small_sack.bag.0}} × {{n items.small_sack.bag.1}}, the [[Linen satchel]] {{n items.satchel.bag.0}} × {{n items.satchel.bag.1}}, and the [[Rucksack]] {{n items.rucksack.bag.0}} × {{n items.rucksack.bag.1}} today. {{planned doc=42 note="A rucksack of eight by six, made from leather and wool, and a best bag of ten by six, both built."}}
- **A boss's best drop:** {{planned doc=42 note="About one in eight at first, rising with each kill that misses it, certain by the twentieth, for each player."}}
- **Natural resources:** each kind's count for the valley, {{n valley.resources.stone.count}} rocks of stone, {{n valley.resources.ore.count}} ore rocks, {{n valley.resources.salt.count}} salt rocks, {{n valley.resources.clay.count}} clay banks, {{n valley.resources.mushrooms.count}} mushrooms, and each of the eleven herbs (from {{n valley.resources.sage.count}} sage to {{n valley.resources.grave_moss.count}} grave moss), and each kind's area, are the map's; what a node gives and how long it takes are its own picture's data (an herb {{n sprites.herb_sage.gather.count.0}} in {{n sprites.herb_sage.gather.seconds seconds}}, a clay bank {{n sprites.clay_bank.dig.count.0}} clay, a salt rock {{n sprites.salt_rock.mine.count.0}} salt); a taken one's replacement falls due {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days later, looked for every {{n tuning.resources.checkSeconds seconds}} with {{n tuning.resources.tries}} tries; a fill of more than {{n tuning.resources.yardCap}} tiles is open ground, not a fenced yard; a rock rises in {{n tuning.resources.riseSeconds seconds}}, shuddering as it comes (the beats and the reach of the shudder are the code's, `SHUDDER` in `src/resources.js`). See [[Mining#Coming back|Mining]] and [[Herbs]].
- **Saplings and sticks:** a felled tree drops a [[Sapling]] at {{pct tuning.trees.sapling.chance}}; planted, it grows into a tree over {{n tuning.trees.sapling.days game days}}, looked at every {{n tuning.trees.checkSeconds seconds}} of the clock; Gather sticks gives {{n tuning.trees.sticks.count.0}} to {{n tuning.trees.sticks.count.1}} under a tree in {{n tuning.trees.sticks.seconds seconds}}, once a game day a tree. See [[Trees]].
- **Animals:** each kind's walk, run, flight, wander, stands, and grazing (see [[Animals]]); wild game renewed one a home every {{n animals.renew.seconds seconds}} of the clock, never within {{n animals.renew.clear tiles}} of a player; each home's herd and cap are the map's. The share of a yield each kind of kill leaves, the seconds of skinning, butchering, milking, and shearing, the boar's bite, the snare's hours and reach, and the tracks' life and reach (see [[Hunting]]); the feeding trough's reach, the coop's, a feather's chance, one more's chance, breeding's days, room, and pen cap, and the lead's pull, reach, and patience (see [[Keeping]]): all in `data/animals.json`.
- **The animals' recipes:** each dish's ingredients and seconds (the meat pottage, the hearty stew, eggs and bacon, a meat pie, smoked meat, pemmican, cheese, butter, leather, yarn, woollen cloth, and the arrows' feather), in `data/recipes.json`; each food's hunger and heal in `data/items.json`, as the [[Hearty stew]]'s {{n items.hearty_stew.hunger}} and {{n items.hearty_stew.heal}} and [[Pemmican]]'s {{n items.pemmican.hunger}} and {{n items.pemmican.heal}}, kept low so a stack of {{n items.pemmican.stack}} is no healing potion (pemmican's two numbers ruled by Michael, 2026-10-25); the [[Smoking rack]]'s cost, sticks and planks, and the [[Tanning vat]]'s, planks and an iron bar. All Primary's defaults (see [[Cooking]]).

### Making and mending

- **Take apart's return:** half a thing's materials, rounded down. This lives in the code, not the data. See [[Building#Taking apart|Building]].
- **Repairs:** one count per weapon or tool, used by a repair at either place. The [[Grindstone]] sharpens an edge free, to {{pct tuning.work.grindstone.ceilings.0}}, then {{pct tuning.work.grindstone.ceilings.1}}, then {{pct tuning.work.grindstone.ceilings.2}}, in {{n tuning.work.grindstone.seconds seconds}}; the [[Anvil]] repairs to {{pct tuning.work.anvil.ceilings.0}}, then {{pct tuning.work.anvil.ceilings.1}}, then {{pct tuning.work.anvil.ceilings.2}}, in {{n tuning.work.anvil.seconds seconds}}, for one of the item's material with a [[Smith's hammer]] carried. Each item's material is its own line of data. See [[Durability]].
- **The sawpit:** a [[Log]] sawn into what a log splits into, {{n items.log.splitsInto.count}} planks, in {{n tuning.work.saw.seconds seconds}}, no hatchet. See [[Sawpit]].
- **Honey:** a [[Beehive]] gives {{n tuning.work.honey.count.0}} [[Pot of honey]], and has more {{n tuning.work.honey.days}} game days later; taking it takes {{n tuning.work.honey.seconds seconds}}. The pot fills {{n items.honey.hunger}} hunger and heals {{n items.honey.heal}}.
- **The dye vat:** the dyes and their palettes, and what each garment may take, are data; using a vat will ask for Crafting {{n dyes.unlock.level}}, open to everyone until skills are built, and a dye costs nothing until it is ruled whether it costs a plant. See [[Dye vat]].
- **Burning a body:** it burns {{n tuning.work.burnCorpse.hours}} game hour, for a log and with a tinderbox carried, after a bar of {{n tuning.work.burnCorpse.seconds seconds}}. See [[Corpses]].
- **The village's stations:** a world rule, **Village stations**, Fixed by default or Movable and craftable, chosen when the world is made; its recipes' materials are data. See [[World rules]].

### Potions, poisons, and mana

- **Mana:** {{n tuning.player.mana}} at most, coming back {{n tuning.player.manaRegen}} a second; each spell's cost is on the spell, the [[Fireball]]'s {{n items.book_of_fire.book.spell.mana}}, refused before the draw and paid on the release; Pray at the [[Altar]] fills mana and stamina after a bar of {{n tuning.potions.praySeconds seconds}}. See [[Mana]].
- **The vials and the brew:** each brew's herbs, vial, seconds, and draught of clean water are its row at the cauldron in `data/recipes.json`, as are the workbench's two unfired vials from a clay and the oven's firing; a clay vial stacks {{n items.clay_vial.stack}} and a potion {{n items.healing_potion.stack}}; the cauldron's fire holds {{n sprites.cauldron.fire.maxFuel}} logs of {{n sprites.cauldron.fire.hoursPerUnit}} game hours each; your own cauldron is made from iron bars at the anvil and is {{n items.cauldron.size.0}} × {{n items.cauldron.size.1}} in the bag. See [[Potions]] and [[Cauldron]].
- **Drinking:** a healing potion heals {{n tuning.potions.heal}}, a mana potion gives {{n tuning.potions.mana}}, a stamina potion fills the bar and makes it come back {{n tuning.potions.staminaMult}} times as fast for {{n tuning.potions.staminaSeconds seconds}}; {{n tuning.potions.between seconds}} from one potion to the next.
- **The poisons' bottleneck:** grave moss, {{n valley.resources.grave_moss.count}} in the valley, goes into both poisons. See [[Herbs]].
- **Poisons and the splash:** {{planned doc=47 note="A coat of poison on a blade lasting some hits, a vial poisoning some arrows, up to three stacks draining the dead, and a thrown potion's splash about a tile and a half across."}}

### Water, and the others

- **Tainted water and Sick:** a tainted drink makes you [[Sick]] {{pct tuning.water.sickChance}} of the time, a stack lasting {{n tuning.water.sickDays}} of a game day, up to {{n tuning.water.sickMaxStacks}} stacks; Sick makes tiredness come {{n tuning.water.sickTiredMult}} times as fast and food heal {{pct tuning.water.sickHealMult}} of its number; a tainted drink gives the infection {{pct tuning.water.infectionChance}} of the time; boiling a skin takes {{n tuning.water.boilSeconds seconds}} at a lit fire within {{n tuning.water.boilReach tiles}}. See [[Water]].
- **The wave:** {{n tuning.player.waveSeconds seconds}} long, on `G`. See [[Controls]].
- **The cowering of the immune:** one of the dead in sight within {{n tuning.villager.cowerRadius tiles}} makes an immune villager cower {{n tuning.villager.cowerSeconds seconds}}, then run about {{n tuning.villager.fleeTiles tiles}} at {{n tuning.villager.fleeSpeed}} times its walk, and walk back once none is within {{n tuning.villager.cowerClearRadius tiles}}. See [[Villagers]].

## World settings

### A world's rules

Chosen at the Sandbox step of New world; see [[World rules]] for what each does.

- **Zombie aggro**, {{default zombieAggro}} by default.
- **Zombies attack villagers**, {{default zombiesAttackVillagers}}.
- **Survival**, {{default survival}}.
- **Free building**, {{default freeBuilding}}.
- **Multi-hit**, {{default multiHit}}: "the easy button".
- **Trees** ({{default trees}}), **Starting population** ({{default population}}), and **Village stations** (Fixed): chosen when the world is made, and fixed after.
- **Dev chest** ({{default devChest}}), **Dev bag** ({{default devBag}}), and **Extra starting items** (none): the Sandbox step's testing choices.
- **Combat difficulty and infection, one dial:** {{planned doc=42 note="One world setting for how hard the fighting is and how readily a bite infects."}} Today its only part is the chance a bite infects, {{pct combat.infection.chance}}, a tuning number. See [[Infection]].
- **What death takes:** {{planned doc=42 note="Death will take all of a character's skills, with a world rule to soften it if playtests ask for one."}}

### A player's own settings

On the [[Settings]] screen, kept in the browser.

- **Aim guide**, {{default aimGuide}} by default, for the challenge of learning a bow's draw by feel. See [[Archery]].
- **Swing targets**, {{default showSwingTargets}}. **Swing timer**, {{default swingTimer}}. **Floating numbers**, {{default floaters shown}}.
- **Sound**, {{default soundOn}}, and **Volume**, {{default soundVolume percent}}; `F8` switches Sound from anywhere in the game. See [[Sound]].
- **Belt slot order**, {{default beltOrder}} by default (Sequential: the first three keys never change), or Hands grouped: which number key is which [[Belt]] slot. It changes only that player's own keys and screen.

## See also

- [[Settings]], [[World rules]], [[Combat]], [[The dead]]

## Sources

<!-- sources at ce21ffc -->
- `docs/42-levers.md`: the list of levers and world settings, their kinds, and the rulings behind each
- `src/settings.js:30`, `src/settings.js:66` (at 78116b1): Belt slot order, a player's own setting, Sequential by default (game #478)
- `data/tuning.json`: the dead's health, the bite's cooldown, the bite tokens, the floor's times, stamina's regeneration
- `src/entities/zombie.js:639-643`: the closing burst (game #394, at 5830ac2)
- `src/entities/zombie.js:333-352`: the bite tokens' pool, one more for every `biteTokensPer` in reach beyond the first
- `src/entities/zombie.js:140-148`: a landed hit during the wind-up cancels the bite and sets the bite's cooldown; every hit, a switch in code
- `data/poses.json`: the dead's attack, its rate and the frame the bite lands on
- `data/combat.json`: the tired blow, knockdown, the finisher, the combo and its switch (`combo.enabled`), the shove, hit stop, the swing's walk, fists, the infection chance
- `src/combat.js:418-434`: the tired shove, its stagger and knockdown at the tired blow's share, its push at `shove.tiredPush` (game #396, at 32ff419)
- `data/items.json`: each weapon's stamina and damage, the mace's and the thrust's knockdown, the spear's break
- `data/loot.json`, `data/items.json`: the loot tables, each item's stack, each bag's grid (game #399)
- `src/settings.js:8-45`: every setting's default
- `src/settings.js:59-82`: the Settings screen's rows and the world's rules, which are fixed when the world is made
- `src/main.js:1924-1934`: F8, the mute key
- `src/placement.js:518-536`: Take apart's half, rounded down, in the code (game #413, at 31d330a)
- `data/tuning.json` `work`, `data/items.json` each `repair` and the honey: the repair ladders and seconds, the sawpit, the hives (game #416, at 31d330a)
- `data/dyes.json`, `data/items.json` each `dye`: the dye vat's palettes, its unlock, no cost (game #417, at 31d330a)
- `src/rules.js`, `data/recipes.json`: Village stations, its recipes' rows (game #431, at 49b8c44)
- `data/tuning.json` `work.burnCorpse`, `water`, `player.waveSeconds`, `villager` (the cowering): the burning, the water and Sick, the wave, the cowering (games #434 and #435, at fa2997f)
- `data/maps/valley.json` `resources` and `animals`, `data/tuning.json` `resources`, `data/animals.json`: the natural resources' counts and times, the animals' numbers and renewal, the homes (games #452 and #453, at 261cd7a)
- `data/maps/valley.json` `resources`, `data/sprites/herb_sage.json`, `data/sprites/clay_bank.json`, `data/sprites/salt_rock.json`, `data/tuning.json` `trees`, `data/animals.json` `kills`, `work`, `snare`, `tracks`, `keep`: herbs, clay, and salt; saplings and sticks; hunting and keeping (games #456, #457, #460, #461, at 6e3ab37)
- `data/recipes.json`, `data/items.json`: the animals' recipes and foods, the rack's and the vat's costs (game #462, at d625844)
- `data/tuning.json:52-53`, `data/tuning.json:200-207`, `data/items.json:11` `book.spell.mana`, `data/items.json:136-143`, `data/recipes.json:1611-1790`, `data/sprites/cauldron.json`: mana, Pray, the potions' numbers, the stacks, the brews, the cauldron's fire and size (games #488 and #491, at 0fa02e5)
