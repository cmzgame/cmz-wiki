---
title: Multiplayer
categories: [Multiplayer]
aliases: [Co-op, Playing with friends, Friends]
summary: Friends play in one world together; the host's browser runs it and the others join with a code.
numbersOk: true
---

<!-- typed: the idle time, five minutes, is AWAY_AFTER_MS in src/main.js, not a census constant -->

**Multiplayer** lets friends play in the same [[Worlds|world]] at once. One browser, the host's, runs the world; everyone else is a guest who sees it and plays in it through the host. There is no separate kind of save for playing together: any world of yours can be opened to friends and closed again.

## How it works

### One world, one owner

A world lives in the browser that made it. When it is open to friends, that browser is the **host**: it runs the dead, the villagers, the fire, the clock, and every player, guests included. A guest sends what they press and click; the host does it and sends the world back {{n census.constants.net.FRAME_EVERY}} steps at a time. A guest's own walking is predicted on their screen and corrected by the host.

On a guest's screen the other players, the dead, and the villagers are drawn a few steps behind the host's frames and moved smoothly between them, so they walk evenly even when frames arrive unevenly; a body that jumps far, as at a respawn, is put straight where it is.

Everything a guest can do, they do through the same actions as the host: opening doors, boarding windows, fighting, the bag and the character screen, building, and [[Crafting|crafting]] at a station.

### Getting together

- The host opens the world from the pause menu with **Open to friends**, which shows the world's code. See [[Hosting]].
- A friend types the code under **Join a game** on the Worlds page (**Play** on the game's site). See [[Joining]].
- Friends anywhere meet through the relay, a small server that passes messages between the host and the guests. It keeps nothing of the world.

A world holds {{n tuning.world.playerCapBrowser}} players at once when a browser hosts it, the host among them, and {{n tuning.world.playerCapServer}} as a [[Server worlds|server world]]. A friend who stepped away holds their place, and so does a browser world's host whatever they are doing; a character gone dormant holds none. A join past that is refused with "This world is full." See [[Hosting#How many can play|Hosting]].

A world remembers which survivor belongs to which browser, so a friend who comes back returns as the same [[Characters|character]]. A world remembers at most {{n census.constants.host.MAX_OWNERS}} browsers; after that it refuses new ones with the same word.

### The host's rules

The [[World rules|world rules]] belong to the world, not to each player: **Zombie aggro**, **Zombies attack villagers**, **Survival**, **Free building**, and **Multi-hit**, which the host changes from **World rules** on the pause menu, and **Trees** and **Starting population**, chosen when the world was made. They are kept in the world's save. A guest's World rules screen shows them as the host set them, marked "(the host's)" and locked. In a [[Server worlds|server world]] the owner sets them.

### The world never pauses

Played alone, any screen (the pause menu, Settings, Controls) pauses the game. Once a world is open to friends, as host or guest, and even with nobody else in, no screen pauses it. The pause menu reads "Menu" instead of "Paused" and says the world goes on while you are there; your character stands still until you return. The short freeze on a heavy blow ([[Combat]]) is off for everyone while the world is open.

A hidden or covered tab keeps a shared world running. A hidden host with guests renames its tab "Hosting: friends are playing".

### Sleep with friends

Time runs fast only when every living player in the world is asleep. One player alone in bed while a friend is awake sleeps at ordinary speed, and is told "Time will pass faster once everyone in the world is asleep." See [[Sleep]].

### Away from the keyboard

A guest who leaves or loses their connection stands in the world for a short while, then goes [[Dormancy|dormant]]: out of the world, never hunted, and back where they stood on their return. A player with no input for five minutes of real time in a shared world steps away the same way, and comes back where they stood on their next key, click, or mouse movement; never while asleep, and never in a world played alone. See [[Dormancy]].

### Names over heads

Another living player's name floats over their head while they are in your [[Sight|sight]]. Your own name is never shown over you. The **Names over heads** row on the [[Settings]] screen (Shown by default) hides them.

### Talking

Press `Enter` to type a line; your character says it in a speech bubble, and it appears in the chat log of everyone who can see you. See [[Chat log]].

### Death

When your character dies, the body stays where it fell and you may make a new character in the same world. A guest's dead screen comes from the host. With every player in the world dead, the world runs on until someone takes a new character. See [[Death]] and [[Characters]].

{{planned doc="31-multiplayer/03" note="Spectating after a death: seeing what your body sees until you take a new survivor."}}

## Numbers

- World sent to guests every {{n census.constants.net.FRAME_EVERY}} steps.
- Players at once: {{n tuning.world.playerCapBrowser}} in a world hosted in a browser, {{n tuning.world.playerCapServer}} in a server world.
- Browsers a world remembers: {{n census.constants.host.MAX_OWNERS}}.
- Time while everyone sleeps: {{n tuning.player.sleepTimeScale}} times normal speed.

## Settings that change it

The [[World rules|world rules]] above, set by the host.

## See also

- [[Worlds]], [[Saving]], [[Identities]], [[Characters]]
- [[Hosting]], [[Joining]], [[Dormancy]], [[Server worlds]]
- [[Chat log]], [[Screens]]

## Sources

<!-- sources at 2a9a308 -->
- `src/netsmooth.js`, `data/tuning.json` `feel.netDelaySteps`, `netSlew`, `netJump`: remote bodies on a guest drawn a fixed delay behind the host's frames, smoothed, a far jump not (game #249)
- `src/save.js:152-173`, `src/main.js:699-720`: a world of the browser, opened and closed to friends as a switch
- `src/net.js:730`, `src/net.js:767-874`: the host runs the world and sends it every `FRAME_EVERY` steps; a guest's walk predicted and corrected
- `src/net.js:1231-1268`: a guest's say, act, item, craft, place, and use commands, performed on the host
- `src/ui/screens.js:979-991`: Open to friends shows the code
- `src/main.js:674-685`: Join a game takes the code
- `server/relay.js`, `src/net.js:187-343`: the relay passes messages between host and guests
- `src/host.js:30`, `src/host.js:94`: the browsers a world remembers by hash, at most `MAX_OWNERS`, the next refused as full
- `data/tuning.json:79-80`, `src/main.js:1643`, `server/world.js:245`, `src/host.js:49-63`, `src/main.js:1733`: the players a world holds at once, a browser's and a server's; what holds a place; "This world is full."
- `src/rules.js:13-30`, `src/ui/screens.js:992-1008`, `server/world.js:367-374`: the world rules, in the save, changed from the pause menu, two fixed at creation, locked as the host's for a guest, set by a server world's owner
- `src/main.js:819-822`, `src/ui/screens.js:917-919`, `src/main.js:1213-1234`: no screen pauses a world on the wire; "Menu"; your player fed an idle input
- `src/main.js:1032`, `src/loop.js:66-74`: hit-stop off on the wire
- `src/main.js:1767`, `src/main.js:1783-1788`, `src/loop.js:138-186`: a hidden tab keeps a shared world running; the host's tab title
- `src/game.js:325-332`, `src/main.js:1614-1615`, `data/tuning.json`: time fast only when every living player sleeps, `player.sleepTimeScale`, the message
- `src/net.js:113`, `src/net.js:637-654`, `src/host.js:116-122`: the grace and dormancy
- `src/main.js:131-181`, `src/host.js:124-159`: stepping away after `AWAY_AFTER_MS`, never a sleeper, and coming back
- `src/main.js:819-822`: nothing pauses a world on the wire, the dead screen included, so a world with everyone dead runs on
- `src/ui/names.js:10-35`, `src/settings.js:26`, `src/settings.js:55`: other players' names in sight, never your own, the Settings row that hides them
- `src/ui/log.js`, `src/ui/speech.js`: talking
- `src/ui/screens.js:1044-1050`, `src/main.js:1021-1027`: the dead screen, a guest's from the host
- `docs/31-multiplayer/03-the-game-with-more-than-one-player.md`: play with friends as built, system by system; every section of this page checked against it (game commit 490addf)
