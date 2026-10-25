---
title: Chat log
categories: [Interface, Multiplayer]
aliases: [Chat, Text log, Chat box, Speech bubbles, Speech]
summary: The chat log at the bottom left keeps every message and every line said within sight; Enter opens the chat box.
---

The **chat log** sits at the bottom left of the screen. It keeps every message that floats under the clock and every line said within your [[Sight|sight]], so nothing is missed when a message fades. The **chat box** at its foot is how you speak.

## How it works

### The chat log

Each line said by someone appears as "Name: line": your own as "You", another player's and a villager's by their name ("Wyn: ..."), an unnamed villager as "Villager", and anyone else unnamed as "Someone". The "!" over an immune villager who cowers from the dead (see [[Villagers]]) is a bubble with no words, and is not logged either. The groans of the dead are not logged, with one exception: when one of the dead in your line of sight and within {{n tuning.sight.groanRadius tiles}} of you groans but the dark hides it from you, the log says "Something groans in the dark.", with no name and nothing to say where. It says so for a groan at most once every {{n tuning.sight.groanGap seconds}}, however many groan; one farther off is not heard at all. One behind a tree's canopy by day, farther off than a bubble shows there, puts no line in the log. Messages from the game (what you found, what you cannot do) are logged too, among them "A fire has gone out." for a fire within {{n tuning.world.fireOutRadius tiles}} of you and "Made ..." for something finished at a station within {{n tuning.world.craftDoneRadius tiles}}.

The chat log keeps the last {{n census.constants.ui_log.KEEP}} lines. The wheel scrolls it while the pointer is over it. It can be resized by dragging its corner, and the browser remembers the size.

### Speaking

`Enter` opens the chat box. Type a line and press `Enter`: your character says it. It shows as a speech bubble over your head, for longer the longer the line, and as a line in the chat log of everyone who can see you. `Escape` leaves the box without saying anything.

`/` opens the box with a slash already typed. A line that begins with a slash is a command, and is not said. The one command is **`/wave`**: your character waves, as with `G` (see [[Controls]]), for every player in sight to see. Any other command is answered "There is no /*word*. Try /wave.", and a slash alone "Try /wave."

### Speech bubbles

Anyone who speaks, players and villagers alike, gets a bubble over their head, for longer the longer the line. Its time runs in the world itself, on the host, so a line ends on its own on every kind of world, a [[Server worlds|server world]] included; a paused world keeps its bubbles. What villagers say, and when, is [[Talk]]. A conversation's lines go into your own chat log alone, in the villager's name, with no bubble. Behind a tree's canopy a bubble shows only within {{n census.constants.ui_speech.NEAR}} tiles. One of the dead hidden by the dark shows no bubble (see [[Sight#Darkness|Sight]]).

## Numbers

- Lines kept: {{n census.constants.ui_log.KEEP}}.
- Bubbles behind a canopy: within {{n census.constants.ui_speech.NEAR}} tiles.
- "Something groans in the dark.": only within {{n tuning.sight.groanRadius tiles}}, at most every {{n tuning.sight.groanGap seconds}}.
- "A fire has gone out.": within {{n tuning.world.fireOutRadius tiles}}. A thing made at a station: within {{n tuning.world.craftDoneRadius tiles}}.

## With friends

A guest's `/wave` goes to the host as a key in their next input, as `G` does, and every player sees the wave. A guest's line is said by their character on the host, so it reaches every player who can see them, as any line does. Only players in sight of the speaker see the bubble and the line in the chat log: there is no chat across the map. The chat log also says when friends join, leave, step away, and come back (see [[Dormancy]]). A thing made at a station, and a fire gone out, are told to every player near it, guests included.

## See also

- [[Interface]], [[Multiplayer]], [[Villagers]], [[Talk]], [[Controls]]

## Sources

<!-- sources at 3c0a243 -->
- `src/ui/log.js`, `src/ui/log.js:12`: the chat log, every message and line said in sight, the lines kept
- `src/ui/speech.js:96-97`: the speaker's label: You, the name, Villager, Someone; the dead's groans not logged
- `src/ui/talk-panel.js:96`: a conversation's line in the talker's own log, in the villager's name (game #230)
- `src/entities/character.js:125-127`, `src/game.js:113-126`, `src/ui/speech.js:64-67`: a line's time from its length, aged in the world's step on the host and cleared when it runs out (game #220, closing game #154)
- `src/ui/speech.js:68-89`, `data/tuning.json:123`: a groan from one of the dead in line of sight but hidden by the dark, within `groanRadius`, logged as "Something groans in the dark.", at most once in `groanGap` seconds of game time (game #189); none for one hidden only by a canopy (game #173); no bubble for one hidden by the dark (game #150)
- `src/main.js:1671-1679`, `src/host.js:239-247`, `src/host.js:253-260`, `data/tuning.json:108-109`: "A fire has gone out." within `fireOutRadius` on the host's own screen and each guest's (game #253); "Made ..." within `craftDoneRadius`, to the host and to each guest (game #189)
- `src/ui/log.js:71-79`: resized by its corner, the size remembered in `logSize`
- `src/main.js:1065-1066`, `src/ui/log.js:38-55`: Enter and / open the box; Enter says the line; a slash line handed on as a command (game #434: the old "Commands are not here yet." only where no handler is set); Escape leaves
- `src/entities/character.js:126`: a bubble lasts longer for a longer line
- `src/ui/speech.js:24`: `NEAR`, a bubble behind a canopy only within reach
- `src/net.js:646-650`, `src/net.js:1249-1251`: a guest's line said by its player on the host
- `src/net.js:568`, `src/net.js:658`, `src/host.js:143`, `src/host.js:157`, `src/net.js:1401`: joined, left, stepped away, and back in the chat log
- `src/main.js:1555-1560`: a slash line a command: /wave waves, any other "There is no /... Try /wave." (game #434, at fa2997f)
- `src/ui/speech.js:96-98`: a bubble with no words, the cowering's "!", kept out of the log (game #434, at fa2997f)
- `src/interact.js:1376-1390`, `src/net.js:429`: /wave a key event in the next snapshot, a guest's the host's doing (game #434, at fa2997f)
