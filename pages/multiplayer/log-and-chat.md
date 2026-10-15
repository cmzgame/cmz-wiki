---
title: Log and chat
categories: [Interface, Multiplayer]
aliases: [Log, Chat, Text log, Chat box, Speech bubbles, Speech]
summary: The log at the bottom left keeps every message and every line said within sight; Enter opens the chat box.
---

The **log** sits at the bottom left of the screen. It keeps every message that floats under the clock and every line said within your [[Sight|sight]], so nothing is missed when a message fades. The **chat box** at its foot is how you speak.

## How it works

### The log

Each line said by someone appears as "Name: line": your own as "You", another player's by their name, a villager's as "Villager", and anyone unnamed as "Someone". The groans of the dead are not logged. Messages from the game (what you found, what you cannot do) are logged too.

The log keeps the last {{n census.constants.ui_log.KEEP}} lines. The wheel scrolls it while the pointer is over it. It can be resized by dragging its corner, and the browser remembers the size.

### Speaking

`Enter` opens the chat box. Type a line and press `Enter`: your character says it. It shows as a speech bubble over your head, for longer the longer the line, and as a line in the log of everyone who can see you. `Escape` leaves the box without saying anything.

`/` opens the box with a slash already typed. A line that begins with a slash is a command. There are no commands yet: the game answers "Commands are not here yet."

### Speech bubbles

Anyone who speaks, players and villagers alike, gets a bubble over their head. Behind a tree's canopy a bubble shows only within {{n census.constants.ui_speech.NEAR}} tiles.

## Numbers

- Lines kept: {{n census.constants.ui_log.KEEP}}.
- Bubbles behind a canopy: within {{n census.constants.ui_speech.NEAR}} tiles.

## With friends

A guest's line is said by their character on the host, so it reaches every player who can see them, as any line does. Only players in sight of the speaker see the bubble and the log line: there is no chat across the map. The log also says when friends join, leave, step away, and come back (see [[Dormancy]]).

## See also

- [[Interface]], [[Multiplayer]], [[Villagers]], [[Controls]]

## Sources

<!-- sources at 9205ad7 -->
- `src/ui/log.js`, `src/ui/log.js:12`: the log, every message and line said in sight, the lines kept
- `src/ui/speech.js:74`: the speaker's label: You, the name, Villager, Someone
- `src/ui/log.js:70-78`: resized by its corner, the size remembered in `logSize`
- `src/main.js:889-890`, `src/ui/log.js:38-55`: Enter and / open the box; Enter says the line; a slash line answers "Commands are not here yet."; Escape leaves
- `src/entities/character.js:117`: a bubble lasts longer for a longer line
- `src/ui/speech.js:21`: `NEAR`, a bubble behind a canopy only within reach
- `src/net.js:614-618`, `src/net.js:1156`: a guest's line said by its player on the host
- `src/net.js:541`, `src/net.js:626`, `src/net.js:1295`: joined, left, stepped away, and back in the log
