---
title: Talk
categories: [Villagers, Mechanics]
aliases: [Barks, Bark, Villager talk, Conversations, Conversation]
summary: What villagers say: a line of their own when poked, a remark now and then when you are near, and a conversation on E or Talk to.
---

Villagers talk. Each one who has talk of their own says a line suited to the moment when poked, now and then remarks unprompted when a player is near, and holds a conversation when you talk to them. The line shows as a bubble over their head and goes into the [[Chat log]] of everyone who can see them. Talk only reads the world: nothing a villager says changes anything.

## How it works

### Barks

A villager's talk is a list of **bark groups**. Each group has the lines it says and, usually, a condition saying when it holds: at night, at dawn, with one of the dead within {{n tuning.villager.barkDeadRadius tiles}} of the villager, while another villager lives, and so on. Within a group the lines take turns, one after another, for each villager, so a villager poked twice says two different lines. Nothing about it is random.

- **Poked** (a left click on them, or **Poke** on their menu; see [[Villagers]]), a villager stops, turns to you, and says a line from the first group that holds. They stay put for at least {{n tuning.villager.talkTime}} seconds, or while the line lasts.
- **Unprompted**, a villager standing or wandering says a line from the first group marked for it that holds, with a living player within {{n tuning.villager.barkRadius tiles}} of them, at most once every {{n tuning.villager.barkCooldown seconds}} of game time. One standing still turns toward the nearest player as they say it. A villager who is talking or dead says nothing unprompted; a wounded one still does.

A villager whose talk has nothing for the moment, or who has no talk yet (the [[Miller]]), says their map line instead: the line in the box on their page, or "Hey!" when the map gives none.

A bubble lasts longer the longer its line. Its time runs in the world itself, on the host, so a villager's line ends on its own on a [[Server worlds|server world]] too; a paused world keeps its bubbles until it runs again.

### Who talks

Every villager in [[The valley]] but the Miller has talk of their own: [[Wyn]], the guide by [[Your cottage]]'s door, has the most, and each of the others has a few lines in their own voice. Each villager's page lists theirs.

{{villager-table}}

### Conversations

**Talk to** a villager, from their right-click menu or with `E` when they are the nearest thing in reach, and a conversation opens: a panel at the bottom of your screen, above the belt, with their name and an X. It is offered only with a clear line to them, never through a wall.

- The villager stops, turns to you, and stands while anyone is talking to them.
- Their lines come one at a time; **Continue...** shows the next.
- Then come the questions or replies you can choose, as buttons. A question about a part of the game has a link beside it to its page here, which opens in a new tab.
- **That's all for now**, always at the foot of the panel, ends it.

Each line also goes into your own [[Chat log]] in the villager's name. Everything is a click: no key is taken from you while the panel is open, and the world keeps running, so you can still walk, fight, and use your belt.

A conversation ends with That's all for now, at the end of a thread, with the X, or with `Escape` (in the order the panels close). It also ends when you walk more than {{n tuning.villager.talkWalkAway tiles}} past the reach of {{n tuning.villager.talkReach tiles}}, or lose the clear line to them, or when the villager is struck, turned, or killed. They stand a moment, then go back to what they were doing. Talking to a second villager ends the first conversation.

A villager with the dead within {{n tuning.villager.talkDeadRadius tiles}} of them, or with no talk of their own (the [[Miller]]), will not hold a conversation: Talk to gets a line, as a poke does. A wounded villager still talks; only the dead do not.

The guide's conversation is the longest (see [[Wyn]]); each of the others has a short one in their own voice.

## With friends

Talk runs on the host. A guest's poke goes to the host as a command, the host picks the line, and the bubble reaches every player in sight, with its line in their chat logs. A guest's Talk to runs on the host too, which tells the guest's screen to open the panel; the conversation's lines are read on the guest's own screen, and only who is talking to whom crosses between them, so several players can talk to the same villager at once, each in their own panel. When a guest's panel closes, the host lets the villager go. Who said what last, and which line comes next, is kept by the host with the villager, in the save.

## Numbers

- Remarks unprompted: a player within {{n tuning.villager.barkRadius tiles}}, at most once every {{n tuning.villager.barkCooldown seconds}} of game time.
- "The dead near": within {{n tuning.villager.barkDeadRadius tiles}} of the villager.
- Held after a poke: at least {{n tuning.villager.talkTime}} seconds.
- Talk to: within {{n tuning.villager.talkReach tiles}}; a conversation ends {{n tuning.villager.talkWalkAway tiles}} beyond that.
- No conversation with the dead within {{n tuning.villager.talkDeadRadius tiles}} of the villager.
- The villager's pause after a conversation: {{n tuning.villager.talkIdleSeconds seconds}}.

## Sources

<!-- sources at 29a9f8e -->
- `src/talk.js:1-6`: talk reads the world and never writes it; no chance, the lines in turn (game #220)
- `src/talk.js:33-47`, `src/talk.js:55-73`, `src/talk.js:100-122`: the conditions (time, the dead near or in the world, a villager alive or dead, indoors, hurt, what the talker holds, hungry, thirsty, tired, bleeding)
- `src/talk.js:124-141`: the first group that holds, its lines in turn by a counter on the villager; an unprompted remark only from an `ambient` group
- `src/entities/villager.js:246-260`, `data/tuning.json:81-82`: a poke stops them, turns them to you, says a line or the map line, and holds them for the talk time or the line
- `src/entities/villager.js:224-244`, `data/tuning.json:86-88`: a remark unprompted with a living player within `barkRadius`, not twice inside `barkCooldown`, never talking or dead, a wounded one too (game #230); turning toward the player when idle
- `src/entities/villager.js:44`, `src/entities/villager.js:32-35`: the map line, "Hey!" without one; a villager's talk id is the map's `talk`, else the name lowercased
- `src/entities/character.js:125-127`, `src/game.js:113-126`, `src/game.js:603`: a line's time from its length, aged in the world's step on the host and cleared when it runs out (game #220, closing game #154)
- `data/talk/`: the guide's file and the seven others; no file for the Miller
- `src/talk.js:143-157`: a conversation's node read from the file, its lines and the options whose `when` holds
- `src/interact.js:1579-1595`, `src/interact.js:922-926`, `src/ui/screens.js:28`: Talk to on a villager's menu, a simple action, offered only with a clear line; E talks to the nearest villager (game #230)
- `src/entities/villager.js:194-222`, `data/tuning.json:89-92`: Talk to starts a conversation unless the villager is dead, out of the clear line, or has the dead within `talkDeadRadius` or no file (then a bark); the villager stops, faces the talker, and holds them; a talker leaves
- `src/entities/villager.js:173-184`, `src/entities/villager.js:115-117`: the talkers kept: one past `talkReach` plus `talkWalkAway`, dead, or out of the line dropped; the villager stands while any talks, then idles `talkIdleSeconds`
- `src/ui/talk-panel.js:1-12`, `src/ui/talk-panel.js:65-128`: the panel on the kit, Continue..., the options with their wiki links in a new tab, That's all for now, each line in the talker's log; it closes when the villager is hurt, turned, or dead, or another villager's talk opens
- `src/main.js:851-862`: Escape closes it in the panels' order
- `src/host.js:258-260`, `src/net.js:627-630`, `src/net.js:1277-1278`, `src/main.js:1780-1784`: a guest's conversation begun on the host, told to its screen; its panel's closing told back
- `src/net.js:632-636`, `src/entities/villager.js:48-49`: a guest's poke on the host; the bark counter and clock kept with the villager

{{navbox places}}
