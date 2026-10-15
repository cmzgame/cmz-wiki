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

**Play** on its row joins it like any friend's world. Friends join with its code as usual (see [[Joining]]); if the world is asleep, their join wakes it. The server saves it as it is played and whenever someone joins, leaves, goes [[Dormancy|dormant]], or dies.

### The owner key

The owner key proves the world is yours from any device. Joining with it brings back the owner's own character. **A world of mine on the server** on the Worlds screen takes a code and an owner key, checks them with the server, and lists the world under My worlds on the server on that device too.

A lost owner key can be replaced from the same screen with the creator key: the server issues a new one, the old one stops working, and the owner's character stays where it is.

### The owner's powers

**Owner**, on the world's row or on the pause menu while in it, opens the owner's screen:

- **Change the code**: the old code stops working at once; whoever is in stays.
- **The world rules**: the {{n census.counts.rules}} rules (Zombie aggro, Zombies attack villagers, Survival, Free building, Multi-hit), set for the world and reaching everyone in it at once.
- **Remove** a player: they are told "The world's owner removed you from it.", their character goes dormant, and their browser is barred from the world.
- **Remove and change the code**: the same, with a new code.
- **Let back in**: lifts a bar.

The owner cannot be removed.

### Bringing it home

**Bring it home** returns the world to the owner's browser. The server stops the world and sends it; the browser keeps it, takes back the owner's character, and confirms, and only then does the server let it go. If the connection breaks in between, the row shows **Finish bringing it home**. If no confirmation comes in time, the world stays on the server. A friend who tries to join a world on its way home is told so.

## With friends

A server world is made for friends: nobody has to keep a browser open for the others to play. The rules are the owner's, set from the owner's screen rather than from anyone's [[Settings]].

## See also

- [[Worlds]], [[Hosting]], [[Joining]], [[Saving]], [[Multiplayer]]
