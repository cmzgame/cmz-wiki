---
title: Death
categories: [Player, Mechanics]
aliases: [Dying, Dead screen, Respawn]
summary: What happens at zero health: the fall, the body left behind, and the next survivor in the same world.
---

**Death** comes when your [[Health]] reaches zero. Your character falls and stays where they fell, as a body with everything they carried. You go on in the same [[Worlds|world]] as a new survivor.

## How it works

### The fall

At zero health, whatever you were doing stops: [[Sleep]], an action, a walk, a raised shield, a drawn bow. A prop you were carrying is set down nearby if there is room. Your character plays the fall, and the body then lies there as a corpse.

### The body

The body keeps your clothes, your bag, and everything in it. It can be searched like any of the dead's bodies, by you as your next survivor or by anyone else. The world is saved at the death.

### The dead screen

The screen says that your character died, the time, and "The body stays where it fell." It offers two buttons:

- **New character** makes a fresh survivor in the same world. Character creation has {{n census.constants.ui_screens.CREATION_STEPS}} steps: pick an [[Identities|identity]], then a step kept for skills and a profession, not built yet. The new survivor has the starter kit (see [[Player]]) and appears beside the map's spawn, in your cottage, on the nearest free tile.
- **Exit game** saves and goes back to the game's site, on the [[Worlds]] page.

If you reload a world whose character is dead, the dead screen shows again.

{{planned doc=30 note="The next survivor arriving elsewhere in the valley, by turn, rather than at the spawn; skills and a profession chosen at creation."}}

## With friends

Each death belongs to its own player; only that player sees the dead screen. The dead stop hunting a player who has fallen. A guest's New character leaves and rejoins the world with the chosen identity, and the host makes the new survivor. A fallen player does not count toward everyone being asleep (see [[Sleep]]). With every player in the world dead, the world runs on until someone takes a new character: nothing pauses a world on the wire.

## See also

- [[Health]], [[Characters]], [[Identities]], [[Worlds]], [[The dead]], [[Multiplayer]]

## Sources

<!-- sources at 2a9a308 -->
- `src/game.js:616-623`: the death check at zero health
- `src/game.js:337-356`: the fall stops sleep, actions, auto-walk, the guard, and a draw, and sets a carried prop down within 2 tiles
- `src/game.js:478-485,535-538`: the body dressed in the fallen player's gear and kept as a corpse
- `src/host.js:241-243`: the world saved at a death
- `src/ui/screens.js:1044-1050`: the dead screen's text and its two buttons, New character and Exit game
- `src/ui/screens.js:80`: `CREATION_STEPS`: the identity step and the placeholder for skills
- `src/main.js:400-429`: the respawn with the starter kit, on the nearest free walkable tile to spawn + (1, 1)
- `data/maps/valley.json`: the valley's spawn, in your cottage
- `src/main.js:475-489`: Exit game saves and shows the site's Worlds page
- `src/main.js:387`: the dead screen shown again on a reload
- `src/main.js:293-306,867-875`: a guest's dead screen from the host's record, and its New character as a leave and rejoin
- `src/entities/zombie.js:276`: the dead stop hunting a fallen player
- `src/game.js:322-331`: only living players count toward everyone asleep
- `src/main.js:819-822`: nothing pauses a world on the wire, the dead screen included
- `docs/31-multiplayer/03-the-game-with-more-than-one-player.md`: play with friends as built, system by system; this page's With friends checked against it (game commit 490addf)
