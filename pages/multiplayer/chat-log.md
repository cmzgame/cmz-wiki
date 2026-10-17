---
title: Chat log
categories: [Interface, Multiplayer]
aliases: [Chat, Text log, Chat box, Speech bubbles, Speech]
summary: The chat log at the bottom left keeps every message and every line said within sight; Enter opens the chat box.
numbersOk: true
---

The **chat log** sits at the bottom left of the screen. It keeps every message that floats under the clock and every line said within your [[Sight|sight]], so nothing is missed when a message fades. The **chat box** at its foot is how you speak.

## How it works

### The chat log

Each line said by someone appears as "Name: line": your own as "You", another player's by their name, a villager's as "Villager", and anyone unnamed as "Someone". The groans of the dead are not logged, with one exception: when one of the dead in your line of sight groans but you cannot see it, for the dark, or because it stands behind a tree's canopy farther off than a bubble shows there, the log says "Something groans in the dark.", with no name and nothing to say where. It says so once for each groan, and at most once every three seconds however many groan. Messages from the game (what you found, what you cannot do) are logged too.
<!-- typed: the three seconds between "Something groans in the dark." lines is a literal in src/ui/speech.js, not data or a named constant -->

The chat log keeps the last {{n census.constants.ui_log.KEEP}} lines. The wheel scrolls it while the pointer is over it. It can be resized by dragging its corner, and the browser remembers the size.

### Speaking

`Enter` opens the chat box. Type a line and press `Enter`: your character says it. It shows as a speech bubble over your head, for longer the longer the line, and as a line in the chat log of everyone who can see you. `Escape` leaves the box without saying anything.

`/` opens the box with a slash already typed. A line that begins with a slash is a command. There are no commands yet: the game answers "Commands are not here yet."

### Speech bubbles

Anyone who speaks, players and villagers alike, gets a bubble over their head. Behind a tree's canopy a bubble shows only within {{n census.constants.ui_speech.NEAR}} tiles. One of the dead hidden by the dark shows no bubble (see [[Sight#Darkness|Sight]]).

## Numbers

- Lines kept: {{n census.constants.ui_log.KEEP}}.
- Bubbles behind a canopy: within {{n census.constants.ui_speech.NEAR}} tiles.

## With friends

A guest's line is said by their character on the host, so it reaches every player who can see them, as any line does. Only players in sight of the speaker see the bubble and the line in the chat log: there is no chat across the map. The chat log also says when friends join, leave, step away, and come back (see [[Dormancy]]).

## See also

- [[Interface]], [[Multiplayer]], [[Villagers]], [[Controls]]

## Sources

<!-- sources at 9d9a5b5 -->
- `src/ui/log.js`, `src/ui/log.js:12`: the chat log, every message and line said in sight, the lines kept
- `src/ui/speech.js:94`: the speaker's label: You, the name, Villager, Someone; the dead's groans not logged
- `src/ui/speech.js:68-86`: a groan from one of the dead in line of sight but unseen, by the dark or behind a canopy, logged as "Something groans in the dark.", once a groan, at most once in three seconds of game time; no bubble for one hidden by the dark (game #150)
- `src/ui/log.js:71-79`: resized by its corner, the size remembered in `logSize`
- `src/main.js:1041-1042`, `src/ui/log.js:38-55`: Enter and / open the box; Enter says the line; a slash line answers "Commands are not here yet."; Escape leaves
- `src/entities/character.js:126`: a bubble lasts longer for a longer line
- `src/ui/speech.js:23`: `NEAR`, a bubble behind a canopy only within reach
- `src/net.js:632-636`, `src/net.js:1231`: a guest's line said by its player on the host
- `src/net.js:559`, `src/net.js:644`, `src/net.js:1370`: joined, left, stepped away, and back in the chat log
