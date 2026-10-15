# Findings: what the census turned up that a player would notice

Game `main` @ `9205ad7` (2026-10-14). The short list from the six fact sheets (`census/areas/`): behaviour in the code that is probably not what anyone intends, or that surprises. Each was read in the code; the ones marked *inferred* were not tried. The full docs-versus-code list is `census/discrepancies.md`. These are for Michael and the coding agent; the wiki describes the game as it is meanwhile.

## Likely bugs

- **Settings → Defaults wipes far more than settings** (multiplayer-ui): the settings blob also holds the identities, the browser id, friends' worlds bookmarks, the creator key, and the owner keys. After a reload the browser would lose its characters in friends' worlds. *Read, not tried.*
- **The wheelbarrow rolls the dev kit** (items, building): searching any wheelbarrow, the joiner's or a crafted one, gives the whole developer kit, two Developer Bags included.
- **A crafted chest or shelf rolls chest loot** on its first search (items, building): four planks make a chest that may hold weapons, bread, planks, and logs.
- **The forge, anvil, cooking, and oven recipes cannot be made in play** (items): nothing in the valley gives potato, cabbage, garlic, grain, flour, iron ore, iron bars, or charcoal; only the console or the dev chest (which has no charcoal) do.
- **The dead hunt villagers with Zombie aggro off** (combat): with "Zombies attack villagers" on and aggro off, the dead ignore you and still hunt and kill villagers (`nearestPrey` never reads aggro).
- **A torch in the off hand is a weapon** (combat): fast clicking with a sword and a torch, or a spear and a torch, swings the torch and opens the two-and-a-half-second exposure (from behind, a bite is fatal). The torch also wears out after 65 landed hits.
- **Troughs and the chapel's font say "Drink from the well"** (world).
- **The square's three lamp posts start empty**, so they give no light (world).
- **The Controls screen lists K**, which nothing reads, and leaves out Q, the middle button, and holding the right button (multiplayer-ui).
- **Names over heads cannot be hidden**: the setting exists with no row on the Settings screen (multiplayer-ui).
- **A guest sees "In <code>'s world"** on its pause screen: the host's name is never filled in (multiplayer-ui).
- **Autosave runs every 60 seconds of sim time**, about once a real second while everyone sleeps (multiplayer-ui).
- **`light.poolRays()` names an undefined variable** and would throw if called; nothing calls it (world).
- **Switching Open to friends off does not make the guests dormant** (found by the sources pass): `setOpen` calls `net.close()`, which clears the guests without `dormantNow` (`src/net.js:149-180`); only Leave world does (`src/main.js:336`), so the guests' characters stay standing in the world and are saved as players.
- **Taking or mounting a torch never marks the tile changed** (found by the sources pass): `map.setHolder` (`src/map.js:181-187`) calls no `map.touch`, unlike a door, so a guest's copy of a post or bracket may not update.
- *Inferred:* **a guest's right tap may not cancel its bow draw on the host** (combat); **the Square surface setting changes the map on the client**, so a guest's square may differ from the host's until the chunk is resent (world).

## Surprises worth a ruling

- **No bites in a default world**: Zombie aggro is off by default, and so is breaching, so a fresh solo world hurts only through hunger and thirst (player, building).
- **Survival off also stops health regeneration** (player).
- **Bandages exist only in the dev chest**, and their `cloth` tag lets the torch, bow, and bed recipes use them up (player).
- **Chopping a tree needs no tool and leaves no stump; feeding a fire lights it** (world).
- **Darkness never shortens the player's sight**: night tints the picture; every on-screen tile with a clear line is seen (world).
- **Nothing but walls blocks sight or light**: no map entry sets `opaque`, so trees, rocks, and furniture never do (world).
- **Removal on X takes the village's own furniture** (any carryable chest, bed, table), with no refund; an unopened chest drops nothing (building).
- **A crafted workbench or wheelbarrow can never be moved or removed** (building).
- **The dead never walk through an open window**; they climb only when a failed path sends them to breach (building).
- **Arrows and thrown spears get no finisher bonus and never knock down** (combat).
- **Every weapon without its own knockdown floors the dead on 30 percent of hits** (a code default), so the sword, hatchet, halberd, and tools all knock down (combat).
- **Several combat numbers are code constants, not data** (tired blow, point blank, default knockdown, hit-stop, every bow tunable), against the "combat numbers are data" rule (combat).
- **The needs' code defaults are stale** (600 and 420 seconds) behind the data's 1080 and 720 (player).
- **Leave world goes to the title**, not to the Worlds screen (multiplayer-ui).
- **Combat testing's forty dead stand two hundred tiles from the valley's spawn** (combat; already owed in the game's TODO).
