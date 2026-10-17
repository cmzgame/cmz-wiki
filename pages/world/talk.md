---
title: Talk
categories: [Villagers, Mechanics]
aliases: [Barks, Bark, Villager talk, Conversations, Conversation]
summary: What villagers say: a line of their own when poked, a remark now and then when you are near, and later a conversation.
---

Villagers talk. Each one who has talk of their own says a line suited to the moment when poked, and now and then remarks unprompted when a player is near. The line shows as a bubble over their head and goes into the [[Chat log]] of everyone who can see them. Talk only reads the world: nothing a villager says changes anything.

## How it works

### Barks

A villager's talk is a list of **bark groups**. Each group has the lines it says and, usually, a condition saying when it holds: at night, at dawn, with one of the dead within {{n tuning.villager.barkDeadRadius tiles}} of the villager, while another villager lives, and so on. Within a group the lines take turns, one after another, for each villager, so a villager poked twice says two different lines. Nothing about it is random.

- **Poked** (a left click on them, or **Poke** on their menu; see [[Villagers]]), a villager stops, turns to you, and says a line from the first group that holds. They stay put for at least {{n tuning.villager.talkTime}} seconds, or while the line lasts.
- **Unprompted**, a villager standing or wandering says a line from the first group marked for it that holds, with a living player within {{n tuning.villager.barkRadius tiles}} of them, at most once every {{n tuning.villager.barkCooldown seconds}} of game time. One standing still turns toward the nearest player as they say it. A villager who is hurt, talking, or dead says nothing unprompted.

A villager whose talk has nothing for the moment, or who has no talk yet (the [[Miller]]), says their map line instead: the line in the box on their page, or "Hey!" when the map gives none.

A bubble lasts longer the longer its line. Its time runs in the world itself, on the host, so a villager's line ends on its own on a [[Server worlds|server world]] too; a paused world keeps its bubbles until it runs again.

### Who talks

Every villager in [[The valley]] but the Miller has talk of their own: [[Wyn]], the guide by [[Your cottage]]'s door, has the most, and each of the others has a few lines in their own voice. Each villager's page lists theirs.

{{villager-table}}

### Conversations

Each villager's talk also holds a conversation: lines one after another, and questions to choose between. The guide's opens on the game's systems, each question pointing to its page here (see [[Wyn]]). Nothing shows a conversation in play yet.

{{planned doc=34 note="The conversation panel: a villager's lines on your own screen, and your choices between them (game issue 202)."}}

## With friends

Talk runs on the host. A guest's poke goes to the host as a command, the host picks the line, and the bubble reaches every player in sight, with its line in their chat logs. Who said what last, and which line comes next, is kept by the host with the villager, in the save.

## Numbers

- Remarks unprompted: a player within {{n tuning.villager.barkRadius tiles}}, at most once every {{n tuning.villager.barkCooldown seconds}} of game time.
- "The dead near": within {{n tuning.villager.barkDeadRadius tiles}} of the villager.
- Held after a poke: at least {{n tuning.villager.talkTime}} seconds.

## Sources

<!-- sources at 0e765f7 -->
- `src/talk.js:1-6`: talk reads the world and never writes it; no chance, the lines in turn (game #220)
- `src/talk.js:33-47`, `src/talk.js:55-73`, `src/talk.js:100-122`: the conditions (time, the dead near or in the world, a villager alive or dead, indoors, hurt, what the talker holds, hungry, thirsty, tired, bleeding)
- `src/talk.js:124-141`: the first group that holds, its lines in turn by a counter on the villager; an unprompted remark only from an `ambient` group
- `src/entities/villager.js:178-192`, `data/tuning.json:76-77`: a poke stops them, turns them to you, says a line or the map line, and holds them for the talk time or the line
- `src/entities/villager.js:156-176`, `data/tuning.json:79-81`: a remark unprompted with a living player within `barkRadius`, not twice inside `barkCooldown`, never hurt, talking, or dead; turning toward the player when idle
- `src/entities/villager.js:43`, `src/entities/villager.js:31-34`: the map line, "Hey!" without one; a villager's talk id is the map's `talk`, else the name lowercased
- `src/entities/character.js:125-127`, `src/game.js:110-123`, `src/game.js:595`: a line's time from its length, aged in the world's step on the host and cleared when it runs out (game #220, closing game #154)
- `data/talk/`: the guide's file and the seven others; no file for the Miller
- `src/talk.js:143-157`, `docs/34-talk.md:3`: a conversation's node read from the file; the panel not built (game issue 202)
- `src/net.js:620-624`, `src/entities/villager.js:47-48`: a guest's poke on the host; the bark counter and clock kept with the villager

{{navbox places}}
