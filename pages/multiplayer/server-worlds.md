---
title: Server worlds
categories: [Multiplayer]
aliases: [Server world, Owner key, Creator key, Move to the server, Bring it home, Owner]
summary: A world moved to the server can be played by friends while its owner is away; the owner key proves it is yours.
---

A **server world** is a [[Worlds|world]] that lives on the game's server instead of in a browser, so friends can play in it while its owner is offline. Everyone in a server world is a guest, the owner included. It runs while anyone is in it, holds still when empty, and wakes when someone joins.

{{planned doc="31-multiplayer/04" note="Server worlds are in the game, but the server that keeps them is not yet running for players."}}

## How it works

### Moving a world to the server

**Move to the server** is on a row under My worlds, for a world of this browser that is not being played. It needs the **creator key**, a secret given out by the game's keeper: the browser asks for it once and remembers it. A wrong key is forgotten and asked for again.

After a confirmation the world is sent up. The server checks it, gives it a code, and shows the **owner key** once, with a reminder to write it down. The browser's own copy becomes a marker that cannot be played here, so there are never two copies of the world going their own ways. The world now appears under **My worlds on the server**.

### Playing it

**Play** on its row joins it like any friend's world. Friends join with its code as usual (see [[Joining]]); if the world is asleep, their join wakes it. It holds {{n tuning.world.playerCapServer}} players at once, the owner among them when in; a join past that is told "This world is full." The server saves it as it is played and whenever someone joins, leaves, goes [[Dormancy|dormant]], or dies.

### The owner key

The owner key proves the world is yours from any device. Joining with it brings back the owner's own character. **A world of mine on the server** on the Worlds page takes a code and an owner key, checks them with the server, and lists the world under My worlds on the server on that device too.

A lost owner key can be replaced from the same screen with the creator key: the server issues a new one, the old one stops working, and the owner's character stays where it is.

### The owner's powers

**Owner**, on the world's row or on the pause menu while in it, opens the owner's screen:

- **Change the code**: the old code stops working at once; whoever is in stays.
- **The world's rules**: the [[World rules|world rules]], each with the same label and line as at New world. The {{n census.counts.liveRules}} that play can change (Zombie aggro, Survival, Free building, Multi-hit) are switches, set for the world and reaching everyone in it at once; Trees and Starting population are shown locked, "(set when the world was made)". A world moved up from a browser keeps the ones it was made with.
- **Remove** a player: they are told "The world's owner removed you from it.", their character goes dormant, and their browser is barred from the world.
- **Remove and change the code**: the same, with a new code.
- **Let back in**: lifts a bar.

The owner cannot be removed.

### Bringing it home

**Bring it home** returns the world to the owner's browser. The server stops the world and sends it; the browser keeps it, takes back the owner's character, and confirms, and only then does the server let it go. If the connection breaks in between, the row shows **Finish bringing it home**. If no confirmation comes in time, the world stays on the server. A friend who tries to join a world on its way home is told so.

## With friends

A server world is made for friends: nobody has to keep a browser open for the others to play. The rules are the owner's, set from the owner's screen rather than from anyone's pause menu; joined as the owner, the pause menu's World rules shows them locked, "yours to change from the Owner screen". Anyone else sees them locked and marked "(the world's owner's)", since a server world has no host.

## See also

- [[Worlds]], [[Hosting]], [[Joining]], [[Saving]], [[Multiplayer]]

## Sources

<!-- sources at 9205ad7 -->
- `src/settings.js:72`, `src/rules.js:13-14`, `server/relay.js` (at 26a0a8f): no Zombies attack villagers: gone from the settings, the world's rules, and a server world's; a stored value of it dropped (game #559)
- `server/world.js`, `server/relay.js:73-110`: a world on the server, run while anyone is in it, held still when empty
- `server/relay.js:777-797`: a guest's join wakes a sleeping world
- `src/ui/screens.js:474-479`, `src/main.js:1372`: Move to the server on a browser world not in play
- `src/ui/screens.js:572-585`, `src/main.js:380-400`, `src/identities.js:122-127`: the creator key asked once, kept, and forgotten when wrong
- `server/relay.js:282-335`, `src/ui/screens.js:586-596`: the upload checked, a code and an owner key minted, the key shown once; the browser's copy a marker
- `src/main.js:1345-1352`, `src/net.js:829-906`: Play joins it like a friend's world
- `server/world.js:126`, `server/world.js:141-160`: saved as played and at every join, leave, dormancy, and death
- `src/main.js:505-531`, `src/ui/screens.js:705-723`, `server/relay.js:346-359`: A world of mine on the server, and a new owner key with the creator key
- `server/relay.js:303-318`: the owner's character filed under `owner`
- `src/ui/screens.js:209-242`, `src/ui/screens.js:668-723`, `src/main.js:458-531`: the owner's screen and its powers
- `src/ui/screens.js:935-941`, `src/settings.js:58-64`: the owner's rules from the settings' registry, Trees and Starting population locked (game commit f2b8062)
- `server/relay.js:243-257`, `server/world.js:97`, `server/world.js:367-374`: an owner sets only the five; a moved world's two kept in its meta (game commit f2b8062)
- `server/world.js:245`, `data/tuning.json:80`, `src/main.js:1733`: a server world's cap, `world.playerCapServer`, and "This world is full." (game commit f2b8062)
- `src/ui/screens.js:1000`: the owner's World rules line (game commit f2b8062)
- `src/ui/screens.js:998-1000`, `src/main.js:737`: anyone else's rows and line "the world's owner's", a server world having no host player (game commit 9d9a5b5)
- `server/relay.js:346-473`, `server/world.js:258-275`, `server/world.js:327-359`: change the code, the rules, remove, unbar
- `src/main.js:1564`: "The world's owner removed you from it."
- `src/main.js:406-453`, `server/relay.js:445-473`, `server/relay.js:546-559`: bringing it home in two phases, Finish bringing it home, the wait
- `server/relay.js:783`: a join to a world on its way home told "moving"
- `server/world.js:97-99`: a server world's rules from its own meta, set by the owner
