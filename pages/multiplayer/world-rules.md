---
title: World rules
categories: [Mechanics, Multiplayer, Settings]
aliases: [World rule, Sandbox, Sandbox step, Rules, Starting population, Population, Trees rule, Extra starting items, Starting kit]
summary: Each world keeps its own rules, chosen at the Sandbox step of New world; the host changes most of them from the pause menu, and the rest are fixed when the world is made.
---

The **world rules** say how a [[Worlds|world]] plays: whether the dead hunt you, whether the body has needs, whether building costs anything, whether the world has trees, how many of the dead it starts with, and, for testing, what every character starts with. There are {{n census.counts.rules}} of them. They belong to the world, not to the player or the browser: each world keeps its own in its save, and a rule set in one world does not follow you into the next. They are not on the [[Settings]] screen.

## How it works

### The rules

**How it plays**, the {{n census.counts.liveRules}} that can be changed later:

- **Zombie aggro** (default On): on, the dead hunt you. Off, they wander and ignore you. See [[The dead]].
- **Zombies attack villagers** (default Off): on, the dead hunt villagers whatever aggro says; with aggro on, you first. A separate switch from Zombie aggro on purpose.
- **Survival** (default On): hunger, thirst, and tiredness. Off, the body has no needs. See [[Survival]].
- **Free building** (default Off): building costs nothing, and the hammer and the hatchet are not asked for, for trying out structures. Boarding up still wants a plank and a hammer. See [[Building]].
- **Multi-hit** (default Off): on, a blow reaches everything in its wedge, "the easy button"; off, only the nearest, the intended way. See [[Combat]].

**Chosen once, when the world is made**, never changed after:

- **Trees** (default On): every tree, in the forests, the wild, and the orchards; its line says "(so no apples from trees)". Off, no tree is made anywhere, inside [[The valley]], [[The orchard]] and the cottage gardens included, or out in [[The wild]], however far anyone walks, so no apples can be picked. The rocks, the ground, and the [[Mushrooms]] are as they would be: the mushrooms grow beside where the trees would have stood, the same ones in the same places as with trees.
- **Starting population**: **None**, **Low**, **Standard** (the default), or **High**: how many of [[The dead]] the world starts with. Each level is a factor on the map's own number: at Standard the valley holds exactly the dead its map places, at None it holds none, at Low some of the map's dead are left out, and at High each of them stands more than once. An extra one stands on a free open tile close to where the map put it, never on the far side of a wall or a door. Every chunk of the wild grown later brings its usual number of the dead times the same factor, so a None world grows no dead in the wild either. The factor is read once, when the world is made: the dead never grow in number with time.

- **Dev bag** (default Off): every new character starts wearing the [[Developer Bag]] in place of the [[Burlap sack]], with the starting kit in it, so a large list of extra items fits.
- **Extra starting items** (default empty): items every new character starts with on top of the default kit (see [[Player#The starter kit|the starter kit]]), picked from a search: type part of an item's name and pick it from the suggestions (the arrows and Enter, or a click), then set how many beside it, or take it out with its cross. Picking an item again raises its count. They go in the bag, each where it first fits, after the default kit. The list is checked as it changes, and what is wrong is said under it: more than the starting bag holds ("The starting bag is full: ..."). Turning **Dev bag** on gives the list the bigger bag's room. While something is wrong, **Next** does nothing.

The kit's two rules hold for every character the world makes, after a death and for every friend who joins as well as the first.

Which of the dead a factor keeps or doubles is settled by each one's own tile and each chunk's own roll, so two worlds made with the same rules start the same.

A world without trees has a few more of the dead in the wild than one with them at the same population, since a chunk's dead stand only on tiles with nothing on them.

### The Sandbox step

**New world** on the [[Worlds]] page asks for the world's name and then its rules, in two parts: **How it plays** ("You can change these later from the pause menu.") with the five switches, then **Chosen once, when the world is made** ("These are chosen now and cannot be changed afterwards.") with Trees, Starting population (a dropdown), the **Dev chest** (see [[Developer chest]]), Dev bag, and Extra starting items (a text box). **Next** goes on to [[Characters|character creation]].

The choices are offered first as this browser last chose them when it made a world; the very first time, at their defaults. Changing a rule in a world later does not change what the next Sandbox step offers.

### World rules on the pause menu

**World rules** on the pause menu opens a screen of the same rows, over the world, with the line "How this world plays. A change is made at once, for everyone in it." In your own world the five are switches: a change applies at once and the world is saved with it. Trees and Starting population are shown locked, marked "(set when the world was made)". The kit's two rules are not on this screen at all, since nothing about them can change once the world is made. **Back** returns to the pause menu.

### Worlds made before the rules were per world

A world made before each world kept its own rules plays by the rules saved with it, which were its host's settings at the time. One whose save has no Trees or Starting population plays with trees and at Standard, and one with no kit rules starts its characters with the default kit in the sack, exactly as it always did.

## Numbers

- Starting population factors: None {{n tuning.population.none}}, Low {{n tuning.population.low}}, Standard {{n tuning.population.standard}}, High {{n tuning.population.high}}.
- The dead the valley's map places (at Standard): {{n census.counts.authoredDead}}.
- The dead a wild chunk brings at Standard: {{n valley.wild.zombiesPerChunk.0}} to {{n valley.wild.zombiesPerChunk.1}}.

## With friends

The rules are the host's. A change the host makes from World rules reaches every guest at once, and a guest's own copy of the world is made with the host's trees and the host's dead. A guest's World rules screen shows the same rows, every one locked and marked "(the host's)", with the line "How this world plays. They are the host's to change." A guest cannot change them.

In a [[Server worlds|server world]] the owner changes the five from the owner's screen, which shows Trees and Starting population locked too; joined as its owner, the pause menu's World rules says "They are yours to change from the Owner screen." Anyone else in a server world, which has no host player, sees the five marked "(the world's owner's)" and the line "How this world plays. They are the world's owner's to change." A world moved to the server keeps the Trees and Starting population it was made with, and its kit's two rules come with its save; its owner can change none of the four.

## See also

- [[Worlds]], [[Hosting]], [[Server worlds]], [[Settings]], [[Screens]]
- [[The dead]], [[Trees]], [[Survival]]

## Sources

<!-- sources at 3c0a243 -->
- `src/rules.js:1-7`, `src/rules.js:13-33`: the rules are the world's own, their defaults, Starting population's four words, Trees, Starting population, Extra starting items, and Dev bag fixed at creation, Extra starting items a text
- `src/settings.js:60-72`: each rule's label and line (Free building's, game #222), Starting population's answers, the Dev chest, Dev bag, and Extra starting items
- `src/map.js:46-54`, `src/map.js:399-411`, `src/map.js:2019-2027`, `src/map.js:2193`, `src/map.js:2046`: Trees off: no tree placed in the scatter or the wild, nor an authored one, an orchard's or a garden's (game #192), the other picks as ever
- `src/map.js:413-447`: the mushrooms placed against where the trees would have stood, so the same with or without trees (game #149)
- `data/tuning.json:122`, `src/game.js:141-170`: the factors; the map's dead each kept as many times as the factor says, by their own tile, an extra on a free tile near by
- `src/map.js:1675-1704`: an extra stands on an open tile by the authored map, never across a wall or a door
- `src/map.js:1278-1291`: a wild chunk's dead scaled by the same factor, by the chunk's own roll, on free tiles only
- `src/ui/screens.js`: the Sandbox step's two parts, their lines, Next; Extra starting items a picker with a search and a count per item (game #274)
- `data/kit.json`, `src/kit.js:24-61`, `src/ui/screens.js:361-367`, `src/ui/screens.js:418-432`: the extra items parsed and checked as they change, what is wrong said under the list, Next refused while it stands; the dev bag's room
- `src/kit.js:62-75`, `src/game.js:135-139`: the default kit, the dev bag in place of the sack, then the extra items by first fit, for every new character
- `src/main.js:303-322`, `src/main.js:325-333`: the choices offered as last chosen, remembered when a world is made; the host's change between steps, the fixed two refused, the world saved
- `src/ui/screens.js:1020-1036`, `src/main.js:755-757`: World rules on the pause menu, only the rules group (the kit's two are the Sandbox group's): the line, the switches, the fixed two locked, a guest's all locked as the host's, or the world's owner's in a world with no host player (game #149)
- `src/game.js:77-82`, `src/game.js:215`, `src/game.js:282-283`, `src/save.js:34`: set at creation, kept in the save, restored from it with the defaults for any missing
- `src/net.js:885`, `src/net.js:1126`, `src/game.js:429`: sent to guests when they change, in the sync check
- `src/ui/screens.js:963-969`, `server/world.js:367-374`, `server/relay.js:243-257`: the owner's screen; a server world's owner can change only the five; a moved world's Trees and Starting population kept in its meta
- `src/game.js:282-283`: a world's rules, the kit's two among them, restored from its save, a server world's too
