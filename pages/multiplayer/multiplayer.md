---
title: Multiplayer
categories: [Multiplayer]
aliases: [Co-op, Playing with friends, Friends]
summary: Friends play in one world together; the host's browser runs it and the others join with a code.
---

**Multiplayer** lets friends play in the same [[Worlds|world]] at once. One browser, the host's, runs the world; everyone else is a guest who sees it and plays in it through the host. There is no separate kind of save for playing together: any world of yours can be opened to friends and closed again.

## How it works

### One world, one owner

A world lives in the browser that made it. When it is open to friends, that browser is the **host**: it runs the dead, the villagers, the fire, the clock, and every player, guests included. A guest sends what they press and click; the host does it and sends the world back {{n census.constants.net.FRAME_EVERY}} steps at a time. A guest's own walking is predicted on their screen and corrected by the host.

Everything a guest can do, they do through the same actions as the host: opening doors, boarding windows, fighting, the bag and the character screen, building, and [[Crafting|crafting]] at a station.

### Getting together

- The host opens the world from the pause menu with **Open to friends**, which shows the world's code. See [[Hosting]].
- A friend types the code under **Join a game** on the Worlds screen. See [[Joining]].
- Friends anywhere meet through the relay, a small server that passes messages between the host and the guests. It keeps nothing of the world.

A world remembers which survivor belongs to which browser, so a friend who comes back returns as the same [[Characters|character]]. A world remembers at most {{n census.constants.host.MAX_OWNERS}} browsers; after that it refuses new ones as full.

### The host's rules

The {{n census.counts.rules}} world rules belong to the world, not to each player: **Zombie aggro**, **Zombies attack villagers**, **Survival**, **Free building**, and **Multi-hit**. In a world of your browser they come from the host's [[Settings]] and are kept in the save. A guest's Settings screen shows the same rows greyed, marked "(the host's)". In a [[Server worlds|server world]] the owner sets them.

### The world never pauses

Played alone, any screen (the pause menu, Settings, Controls) pauses the game. Once a world is open to friends, as host or guest, and even with nobody else in, no screen pauses it. The pause menu reads "Menu" instead of "Paused" and says the world goes on while you are there; your character stands still until you return. The short freeze on a heavy blow ([[Combat]]) is off for everyone while the world is open.

A hidden or covered tab keeps a shared world running. A hidden host with guests renames its tab "Hosting: friends are playing".

### Sleep with friends

Time runs fast only when every living player in the world is asleep. One player alone in bed while a friend is awake sleeps at ordinary speed, and is told "Time will pass faster once everyone in the world is asleep." See [[Sleep]].

### Away from the keyboard

A guest who leaves or loses their connection stands in the world for a short while, then goes [[Dormancy|dormant]]: out of the world, never hunted, and back where they stood on their return. A player who leaves the keyboard in a shared world steps away in the same way after a while.

### Names over heads

Another living player's name floats over their head while they are in your [[Sight|sight]]. Your own name is never shown over you. There is no row on the Settings screen to hide the names.

### Talking

Press `Enter` to type a line; your character says it in a speech bubble, and it appears in the log of everyone who can see you. See [[Log and chat]].

### Death

When your character dies, the body stays where it fell and you may make a new character in the same world. A guest's dead screen comes from the host. See [[Death]] and [[Characters]].

{{planned doc="31-multiplayer/03" note="Spectating after a death: seeing what your body sees until you take a new survivor."}}

## Numbers

- World sent to guests every {{n census.constants.net.FRAME_EVERY}} steps.
- Browsers a world remembers: {{n census.constants.host.MAX_OWNERS}}.
- Time while everyone sleeps: {{n tuning.player.sleepTimeScale}} times normal speed.

## Settings that change it

The {{n census.counts.rules}} world rules above, set by the host.

## See also

- [[Worlds]], [[Saving]], [[Identities]], [[Characters]]
- [[Hosting]], [[Joining]], [[Dormancy]], [[Server worlds]]
- [[Log and chat]], [[Screens]]
