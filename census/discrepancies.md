# Discrepancies: where the game's docs and its code still disagree

The live list, short: what is still a discrepancy at the wiki's snapshot (game `main` @ `0bd3f9c`, 2026-10-16; the game's docs read at `origin/main` `490addf`, after its docs sweep of 2026-10-16, which rewrote most of them). Code and data line numbers are at `0bd3f9c`, docs lines at `490addf`. The wiki follows the code; these are for Michael and the coding agents to rule on or fix. A "code" item is a stale comment or a literal in the code, not a doc.

This list is rewritten whole when it is rechecked, at the new commit, and the old one is filed under `census/history/<commit>/`; nothing is amended in place (the sweep, 2026-10-16). The first census's list of 96 at `9205ad7`, with the tails it was given as items were resolved, is `census/history/9205ad7/discrepancies.md`; of its 96, the 49 below are what stands (the rest were resolved by the sweep or by code changes; the recheck was done 2026-10-16 by two reading agents, section by section, and spot-checked).

## world (5 of 18)

- `docs/30-the-big-pass-spec.md:67` says a fire is lit with "a torch or a flint, exists"; the code lights a fire by feeding it one unit of its fuel and asks for no flame (`src/interact.js:351-376`, the label at `:361`; `docs/07:34` agrees with the code).
- `docs/30-the-big-pass-spec.md:61` ("chop a tree or a stump (hatchet)") and `:139` ("Hatchet: chop a tree (exists)") say the chop takes the hatchet; the code's Chop down needs no tool and leaves nothing (`src/interact.js:517-532`: the prop removed, logs dropped; no `hatchet` check anywhere in `src/`, no chop row in `data/interactions.json`).
- `docs/02-decisions.md:984` says small, medium, and large trees collide at 0.14, 0.18, and 0.22 tiles and a giant at 0.3; the data has three sizes, `_m` 0.18, `_l` 0.22, `_old` 0.3 (`data/sprites/tree_*.json` `collide.radius`); no tree is 0.14.
- Code: `src/entities/player.js:153` says that while a player sleeps "crops grow"; nothing in `src/` steps a crop (`docs/30:155` has growth as a step 4 default, not built).
- Code: `src/ground.js:17-18` lists mushrooms among step 3's baked decals; `data/ground.json:36-46` defines leaves, twig, pebbles, flowers, and tuft only, and mushrooms are props.

Still true but no doc contradicts it: `opaque` is read only from map entries (`src/map.js:1566`, `:1834`), never a sprite definition, and nothing under `data/` sets it, so no prop blocks sight or light (`docs/02:1037` leaves "whether rocks block sight" open).

## player (6 of 11)

- Code: `src/rules.js:10-13` starts the rules at `zombieAggro: false`, `multiHit: true`, `survival: false`, with comments and no note that they are placeholders; the effective defaults are the settings' (`src/settings.js:12` aggro true, `:19` multiHit false, `:22` survival true; `src/rules.js:17-19` derives them).
- `docs/30-the-big-pass-spec.md:45` says health regenerates while hunger and thirst are "above their second stage"; the code stops it at stage 2, "Hungry" or "Thirsty" (`src/entities/player.js:135`, `hungerStage < 2 && thirstStage < 2`). Wording.
- The Controls screen says 1 to 4 "Swap a belt slot with your hand" (`src/ui/screens.js:29`); a key on a food or a water container eats or drinks it instead (`src/interact.js:995-1006`, `beltPress`; the comment at `:948-949` says so).
- Code: `src/game.js:606-607` says the way back from the dead screen "is a fresh load"; the dead screen offers New character and Leave world (`src/ui/screens.js:792`).
- Code: the waterskin's `capacity: 100` (`data/items.json:19`) is never read for a fill: filling and the starter kit write 100 (`src/interact.js:539,567`; `src/game.js:111`), so changing the capacity in data changes nothing.
- Code: `src/ui/moodles.js:1` says the file is unchanged from the parent; it carries the stage-0 green class (`:37`) for the always-show rule added in `src/moodles.js:113-126`.

## combat (10 of 20)

- `CLAUDE.md:29` and `docs/21-combat-buttons.md:19` say combat numbers are data; three are still code: the down-screen slack 0.8 (`src/combat.js:35` `BODY_SLACK`), the shield's push 0.25 as a default (`src/combat.js:156`; the shield block in `data/items.json:35` has no `push`), and the tap time 0.2 (`src/buttons.js:10` `TAP_TIME`; `docs/21:34` names it as `buttons.js`).
- `docs/21-combat-buttons.md:43` says the halberd sits at about 30 damage "and no knockdown-finisher two-shot"; the halberd's block has no `knockdown` of its own (`data/items.json:9`), so it floors on 30 percent of hits by `blow.knockdownChance` (`data/combat.json:10`, `src/combat.js:355`), which `docs/21:15` itself calls high.
- `docs/21-combat-buttons.md:46` says the brace fills the draw half as fast again, "0.9 s becomes 0.6 s, braceDrawRate 1.5"; the bow's own `drawTime` is 1.4 and `braceDrawTime` 0.6 (`data/items.json:21`), 2.33 to 1, as `docs/21:11` and `:94` say; `data/combat.json:11` and `src/archery.js:44` still carry `braceDrawRate: 1.5` with the "0.9 s becomes 0.6" comment, overridden by the bow.
- `docs/21-combat-buttons.md:46` ("the draw's 0.5"), `:94` ("free-draw walking 0.5"), and `docs/20-archery.md:39` (`drawSpeed` 0.5), `:83`, `:95` ("half speed") say the free draw walks at 0.5; the walk is 0.45 (`data/combat.json:11` `drawSpeed`, `src/archery.js:42`), which `docs/21:76` has right.
- `docs/20-archery.md:39` says a `drawStamina` tunable per second of hold "is there for later"; no such tunable exists (`src/archery.js:33-58`, `data/combat.json:11` `bow`).
- `docs/20-archery.md:11` says "half the arrows that hit break (30 of 60 kept)"; an arrow never breaks, it lodges in the body (`src/archery.js:266` rolls `breakChance` only for a thrown item, `:101`; `:273-276` lodges the arrow), as `docs/20:9` and `:96` say.
- `docs/21-combat-buttons.md:59` lists "guard arc 150, 15 percent through, 4 stamina a block, 0.5 s stagger, walk 0.75" (and `:101` a 150 degree arc); the shield block is arc 100, sideArc 220, sideThrough 0.5, stamina 5, stagger 0.5, moveMult 0.45 (`data/items.json:35`), which `docs/21:47` and `:76` carry.
- `docs/09-openings.md:48` says a breaching zombie drops the breach and chases when "it sees the player"; the code drops it only when it sees the player within bite reach (`src/entities/zombie.js:530`, `z.seesNow && distTo(z, tgt) <= T.contact`, 0.7 tiles), or when the goal changes rooms (`:539-544`).
- `docs/21-combat-buttons.md:9` says Combat testing "still places its forty dead within tiles 1 to 30 ... so on the valley they stand far from the spawn"; the code stands a hundred in a ring ten to thirty-six tiles round the spawn on any map (`src/game.js:121-125`, `addTestingDead`), as `docs/21:17` and `:23` say.
- `data/loot.json:6` calls `dev_kit` "the combat-testing chest by the well" and `docs/21-combat-buttons.md:23` says it stands at tile 14, 17 with three spears; the chest is placed by the spawn on any map (`src/game.js:80-81`) and holds two spears (`data/loot.json:6`, `count: 2`; `docs/21:9` says two), while `giveKit` gives three (`src/dev.js:137`).

## items (13 of 21)

- `docs/11-character.md:3` and `docs/02-decisions.md:928` say the Developer Bag comes from the console only, never from loot; the dev chest's `dev_kit` table in `data/loot.json` holds two of them (`fixed`), dealt by `src/items.js:81`.
- Code: `src/settings.js:31` calls the dev chest "the chest of every item", and `docs/26-art-owed.md:26` says the tools, charcoal, ore, bars, and crops are "all in the dev chest"; `data/loot.json` `dev_kit` holds 17 kinds of weapons, arrows, torches, bandages, and two Developer Bags, nothing else.
- `docs/02-decisions.md:451` says the forge's charcoal comes from the dev chest until the burners exist; the dev chest's table (`data/loot.json` `dev_kit`) holds no charcoal and nothing in play makes it (`data/recipes.json`), so the forge lights only from the console (the game's `docs/bugs.md` closed the missing charcoal as expected; the sentence about the chest is still untrue).
- `docs/30-the-big-pass-spec.md:99` (and `docs/07-lighting.md:34`) say a fire's fuel comes from the bag, the belt, and every container within reach; `src/interact.js:357, 374-376` take it with `countAll`, which reads only the hands, the belt, and the bag (`src/inventory.js:87-96`).
- `docs/30-the-big-pass-spec.md:99` says the station panel shows the station's fire with its fuel; `src/ui/station-panel.js:143, 150-151` show no fuel, only "needs the fire lit" and "(the fire is out)".
- `docs/30-the-big-pass-spec.md:17, 85` say a station is placed from the bag like furniture with `carry: true`; every station sprite in `data/sprites/` is `carry: false`, no station is an item, and `docs/13-placement.md:3` says nothing is placed from the bag.
- `docs/30-the-big-pass-spec.md:139` says the smith's and the workbench's recipes ask for the hammer in hand; in `data/recipes.json` only the anvil's rows do, except the hammer's own, and no workbench row does.
- `docs/30-the-big-pass-spec.md:103, 105, 106` list "planks to boards" at the workbench and "a pie" at the cooking hearth and the oven; `data/recipes.json` has none of them.
- `docs/30-the-big-pass-spec.md:61` says foraging sticks under trees exists by rule; the forage rule in `src/map.js:305-312` places mushrooms and pumpkins as props, and the `wild` table in `data/loot.json` that gives a stick is rolled by no code (so the census's "in loot: wild" on the Stick is a data note, not a source in play).
- `docs/30-the-big-pass-spec.md:95` gives `on` as "tree" | "rock" | "water" | "soil" | "grass", action kinds give/transform/open/fill/plant/water/message, and a menu of rows whose `use` is in a hand; `src/interactions.js:7-11, 35-39` resolve item ids and tags, prop sprites, "fire", character kinds, floor sprites, and "tile", `action` is a verb name, and no menu lists rows.
- `docs/30-the-big-pass-spec.md:120` and the comment at `src/map.js:1605` say a fire's `fuel` may be an item or a tag; `src/interact.js:355-357, 374-376` look the fuel up and count it by item id only.
- `docs/30-the-big-pass-spec.md:120` says cooked food is worth the raw's doubled; in `data/items.json` and `data/recipes.json` stew gives 50 hunger from ingredients worth 31, while roast potato (20 from 10) fits.
- `docs/26-art-owed.md:17` says the torch is "held lit in the off hand"; `data/items.json:2` makes it `hands: "either"` (`docs/02:963` on the off hand is marked superseded).

The hatchet for chopping is the world section's item; the body's grid (`data/loot.json` `body.grid` [3,3] is unread, `src/entities/character.js:141` makes 6 by 6) is a data note no live doc contradicts.

## building (6 of 11)

- `docs/09-openings.md:48` gives about 24 s through a bare door and about 80 s through one boarded three deep on both sides; `src/entities/zombie.js:569-591` adds the 0.33 s attack animation to the 1.2 s cooldown on every hit, about 31 s and about 104 s (inferred from the code, not timed).
- `docs/09-openings.md:31` says sealed is derived per room each step and that sleep will read it (`docs/02-decisions.md:944`, dated, says the same); `src/map.js:589` `roomSealed` is computed only for the debug corner's text (`src/main.js:1149`) and nothing else reads it, as `docs/09:3` admits.
- `docs/13-placement.md:3` says a prop recipe lands on a free tile beside its station; `src/stations.js:181-183` tests only the anchor tile, so a 2 by 1 piece's second tile may overlap a prop or straddle a wall (`src/map.js:375-380`; inferred, not tried).
- `docs/17-village-art-plumbing.md:121` says log-wall corners fall back to `post_wood`; `data/sprites/wall_log.json` names `post_log`, as `docs/17:53` does.
- Code: the comment at `src/map.js:522` says planks are free until the inventory; boarding spends a plank at `src/interact.js:495-497`.
- Code: the comment at `src/main.js:658` says building stays the client's own until it is a command; a guest's placement, build, and removal are commands the host performs (`src/placement.js:36, 496`).

## multiplayer-ui (9 of 22)

- `docs/31-multiplayer/09-worlds-identities-characters.md:31` says a friend's world row shows when you were last in it; `src/ui/screens.js:527-531` show the dot, the name, the host, the code, and your character, and `lastAt` (`src/settings.js:35`) is never shown.
- `docs/10-interface.md:3` says the autosave is every minute of game time; `src/main.js:110-111, 1115` save after 60 s of simulation time, two hours on the in-game clock, and never within a real minute of the last. Wording.
- Code: the setting's label at `src/settings.js:49` says the swing timer is a bar over your head; `style.css:561-569` puts the swing bars at bottom centre, and only the exposure bar is over the head.
- Code: the comment at `src/ui/swing-timer.js:6` puts the moodles in a left stack growing upward; `style.css:316-325` puts them down the right edge, centred.
- Code: the comment at `src/view.js:73-74` says Auto zoom is wide at 1080p and middle at 4K; the arithmetic at `src/view.js:69-71` (`BASE_W` 960, `BASE_H` 540) gives Close on a 3840 by 2160 window and Middle at 1440p.
- Code: the Join screen's placeholder at `src/ui/screens.js:625` is `oak-abc`; a code is `word-word-xxxx` (`src/net.js:92-100`).
- Code: the Settings screen's hair row (`src/ui/screens.js:386-391`) is drawn only when the identity api is absent (`src/ui/screens.js:771`), and `src/main.js:1453` always passes it, so the row never appears.
- Code: the labels at `src/settings.js:50, 57` say Combat testing and the Dev chest need a page reload; both are read when a world is created (`src/main.js:243-244, 1288-1289`), and only combat testing's tree removal happens at boot (`src/main.js:1186, 1222-1224`), so the dev chest needs no reload for a new world (inferred).
- `docs/31-multiplayer/09-worlds-identities-characters.md:29` shows Move to the server when the relay allows it; `src/main.js:1411` and `src/ui/screens.js:479` show it whenever any relay URL is set (`src/net.js:385-387`), including one that keeps no worlds.
