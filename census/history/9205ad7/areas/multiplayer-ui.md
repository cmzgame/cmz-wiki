# Census: multiplayer, worlds, and the interface

Game commit `9205ad7` (origin/main, 2026-10-14 20:18 -05:00, "Merge item 5's step 6, the owner's powers"). Code paths are relative to `.game/` (`src/`, `server/`); data paths to `snapshot/data/`. Line numbers are at that commit.

---

# Part 1: Worlds, identities, characters

## Worlds (the world as a save)

- **Rule:** A world is one valley with its state and every character in it, saved in the browser that made it. Nothing runs until a world is chosen on the Worlds screen; the title sits over black. Each world keeps its own characters; a character never moves between worlds.
- **Numbers:**
  - Save version `2` (`src/save.js:28`); a version-1 save gains the default rules on load (`src/save.js:32-34`); a save with no version or a newer one is refused (`src/save.js:37-46`).
  - Store: IndexedDB database `cmz`, object store `worlds`, keyed by world id (`src/save.js:49-50`); the list index in localStorage key `cmz.worlds` (`src/save.js:47`). The old single slot `cmz.save.<map>` migrates once into a world named "The valley" (`src/save.js:211-231`, `src/main.js:1145`).
  - World id `w` + base-36 time + 4 random chars (`src/save.js:118-120`).
  - The index row: name, map, day-and-hour label, code, my character's name, dead, `home` (browser, server, arriving), server code (`src/save.js:143-164`).
  - A world from another map is listed but not playable ("on another map (name)") (`src/ui/screens.js:483`, `src/main.js:1360`).
  - Default name: "The valley, 14 Oct" (the map name and the date) (`src/main.js:1367`); name field max 40 chars (`src/ui/screens.js:610`).
  - Not saved: an auto-walk, a timed action's progress, a draw, arrows in flight (`src/save.js:12-13`).
- **Code:** `src/save.js` whole; `src/main.js:236-250` (new world), `253-288` (play), `325-331` (saveWorld), `335-349` (leave).
- **Confidence:** read in code.

## The Worlds screen

- **Rule:** Lists "My worlds" (Play, or New character when mine is dead; Move to the server; Delete), "My worlds on the server" (owned on another device: Play, Owner), and "Friends' worlds" (a dot for open now, Rejoin, Forget). Buttons: New world, Join a game, "A world of mine on the server" (only when a relay is set), Back.
- **Numbers:**
  - Row text: world name, "Day N, HH:MM", "as Name" / "Name died" / "no survivor", "code xxx" or "on the server, code xxx" or "on its way home" (`src/ui/screens.js:480-485`).
  - Row buttons by where the world lives (`src/ui/screens.js:474-479`): browser world: Play / New character, Move to the server (only with a relay, playable, and not the world in play), Delete (confirms "Delete this world and every character in it?", `206`); server world: Play, Owner, Bring it home; arriving: Finish bringing it home.
  - The friends' dot is polled every 10 s while the screen is up (`src/ui/screens.js:571`), from the relay's `/open` (`src/net.js:383-394`); tooltip "open now, N in" / "not open now" / "not asked yet" (`src/ui/screens.js:521-525`).
  - Friends' bookmarks kept: last 20 (`src/identities.js:112`); written at the first join attempt, so a failed join still leaves a row (`src/identities.js:106`, `src/main.js:538`).
- **Code:** `src/ui/screens.js:558-571`, `467-531`.
- **Docs differ:** `docs/31-multiplayer/09` says a friend's row shows "when you were last in it"; `lastAt` is stored but never shown (`src/ui/screens.js:528`).
- **Confidence:** read in code.

## New world

- **Rule:** New world asks for a name (default offered), then the two-step character creation, then the world is made at the spawn and saved at once.
- **Numbers:** the dev chest and combat testing settings are read at creation (`src/main.js:241-242`). The save is written immediately on creation (`src/main.js:249`).
- **Code:** `src/ui/screens.js:260-264`, `605-617`; `src/main.js:236-250`.
- **Confidence:** read in code.

## Character creation (two steps)

- **Rule:** Step 1 picks an identity (Choose, Edit, New identity); step 2 is a placeholder ("Skills and a profession will be chosen here. Nothing to choose yet"). The last button reads "Into the valley" (new world, respawn) or "Join as this" (a friend's world). Back steps back a step, then to where creation began.
- **Numbers:** `CREATION_STEPS = 2` (`src/ui/screens.js:63`). Next on step 1 needs an identity chosen (`src/ui/screens.js:277`). The last identity chosen is preselected (`src/ui/screens.js:301-305`). A join after a death says "Your survivor there died. A new one, from any identity." (`src/ui/screens.js:634`).
- **Code:** `src/ui/screens.js:301-320`, `631-644`.
- **Confidence:** read in code.

## Identities

- **Rule:** An identity is a name and a look kept in the browser, reusable; a character is stamped from one at creation and keeps its name and face for life. Editing or deleting an identity changes no character.
- **Numbers:**
  - Name max 24 chars (`src/identities.js:48`, `src/ui/screens.js:413`, `src/main.js:1416`).
  - Look fields: skin (8 living tones and 3 "dead" tones), hair style, hair colour (12), eyes (8) (`data/looks.json` `skins.living`, `skins.dead`, `hair`, `eyes`; `src/ui/screens.js:414-418`).
  - Hair styles: bald, short, then the painted styles sorted: bob, crop, long, mohawk, pigtails, purple, tight (9) (`src/figure/draw.js:63-66`, `data/hair/index.json`).
  - Preview: the figure at 3x in the starting kit's clothes, turning through the facings every 650 ms (`src/ui/screens.js:426-446`, `src/main.js:1333`).
  - Id `i` + time + random (`src/identities.js:34-36`). Kept in settings `identities` and `lastIdentity` (`src/settings.js:32-33`).
  - Migration: the old `playerName`/`look` become the first identity, named "Survivor" if unnamed (`src/identities.js:147-154`).
- **Code:** `src/identities.js:38-72`; `src/ui/screens.js:397-423`, `645-655`; `src/main.js:1391-1425`.
- **Confidence:** read in code.

## The character screen (pause menu)

- **Rule:** "Character" on the pause menu shows this world's character (name, "A survivor of <world>", the turning figure as it is dressed), read only.
- **Code:** `src/ui/screens.js:737-747`; `src/main.js:1424`.
- **Confidence:** read in code.

## The browser id and owners

- **Rule:** Each browser carries a hidden random id; a world remembers which character is whose by a hash of it, never the id itself. A rejoin from the same browser returns the same character.
- **Numbers:** id `c` + 32 hex chars from `crypto.getRandomValues` (`src/identities.js:24-32`, `91-98`); hash: FNV-1a twice with two seeds, 16 hex digits (`src/identities.js:77-88`). A world remembers at most 16 browsers (`src/host.js:30`, `74`); the 17th is refused "full".
- **Code:** `src/identities.js`; `src/host.js:54-80`; `src/net.js:482`.
- **Confidence:** read in code.

## Death and the next character

- **Rule:** When my character dies the dead screen shows "<Name> died", the day and hour, "The body stays where it fell", with New character (creation again, a new survivor at the spawn in the same world) or Leave world. The old body is a searchable corpse. A guest's dead screen comes from the host's record; its New character rejoins the host with the chosen identity.
- **Numbers:** a respawn stands at the nearest walkable tile to spawn + (1, 1) not occupied by a player (`src/main.js:310-311`). The world saves on any player's death (`src/host.js:216-218`).
- **Code:** `src/ui/screens.js:785-791`; `src/main.js:291-319` (respawn), `1457-1461`, `869-875` (guest).
- **Confidence:** read in code.

---

# Part 2: Saving

## Autosave and saves

- **Rule:** A world of this browser's saves every 60 seconds of game time, when the tab is hidden, when the page is left, on Save world, on opening or closing to friends, when a guest joins or leaves, when a guest goes dormant, and on any death. A failed save says so on screen. A guest never saves; a `?nosave` test world is never saved.
- **Numbers:** `AUTOSAVE = 60` sim seconds (`src/main.js:109`, checked each frame at `1089`); hidden/pagehide (`src/main.js:1617`, `1626`); failure message "The world could not be saved: <error>." for 6 s (`src/main.js:329`); "Saved." on the button (`src/main.js:1356`). 60 sim seconds is two in-game hours (`src/clock.js:5`, 720 s per day).
- **Code:** `src/main.js:325-331`, `1611-1626`; `src/host.js:153-154`, `100`, `216-218`.
- **Docs differ:** `CLAUDE.md` and `docs/10` say "every minute of game time"; it is 60 seconds of simulation time, which the clock shows as two hours. While everyone sleeps (60x) this comes to about one save per real second (inferred from `loop.simTime` and `src/main.js:1089`).
- **Confidence:** read in code (the sleep cadence inferred).

---

# Part 3: Playing together

## Open to friends (hosting as a switch)

- **Rule:** In the pause menu, "Open to friends: off/on" opens a screen with the world's code, a Copy button, who is in, and Open / Close to friends. The first opening draws a code, kept with the world; a world left open opens again when next played.
- **Numbers:**
  - Code shape: two of 16 tree words (different) and four characters from `abcdefghjkmnpqrstuvwxyz23456789`, e.g. `oak-elm-k7mp` (`src/net.js:91-100`); about 27.7 bits. Drawn with `Math.random` in the browser; the server mints with `crypto.randomInt` (`server/relay.js:481-490`).
  - Messages: "Open to friends: the code is X." 5 s; "Closed to friends." 3 s (`src/main.js:569`, `574`).
  - If the relay says the code is taken on a reopen, it retries 4 times every 3 s, then clears the code so the next opening draws a new one (`src/main.js:1577-1582`).
  - With no relay: "a friend must join from another tab of this same browser" (`src/ui/screens.js:732`).
- **Code:** `src/main.js:558-576`; `src/ui/screens.js:724-736`, `115-123`.
- **Confidence:** read in code.

## Joining (Join a game)

- **Rule:** Type the host's code; the join goes out with the browser id and no identity. If the host knows a living character of this browser's, you come back as it; otherwise the host asks (`who`) and the creation steps run, then the join goes again with the identity. While waiting you stand in a never-saved stand-in world.
- **Numbers:** code field max 24, lower-cased (`src/ui/screens.js:271`, `624`); join re-sent every 2 s (`src/net.js:838`); a guest nobody answers gives up after 10 s from the first join sent (`src/net.js:145`, `832-836`); "Joining <code>…" 4 s (`src/main.js:543`); "Joined as <id>." 3 s (`src/main.js:1534`); host side "<Name> joined." / "<Name> left." (`src/net.js:541`, `626`).
- **Code:** `src/main.js:534-555`, `1345-1352`; `src/net.js:829-906`; `src/host.js:54-80`.
- **Docs differ:** the Join screen's placeholder is `oak-abc`, the old one-word, three-letter shape (`src/ui/screens.js:624`), not today's `word-word-xxxx`.
- **Confidence:** read in code.

## Join refusals and the wire's farewells

- **Rule:** A failed or dropped wire puts a guest back on the title with a reason; a host is told and plays on alone.
- **Numbers:** the reasons and their words (`src/main.js:1557-1573`): timeout, nohost ("No world is open under ..."), taken, busy ("The server is running as many worlds as it holds"), broken ("failed to start ... resting"), moving ("on its way home"), removed ("The world's owner removed you from it."), relay (unreachable), dropped, hostLeft ("The host closed the world."), replaced (joined again from another tab), full ("as many survivors as it holds"), refused, versionGuest / versionHost. The host refuses a guest whose `PROTOCOL` (3, `src/net.js:105`) or save version (2) differs (`src/net.js:476-481`); a join with no browser id is refused (`497`); a newer join from the same browser replaces the older connection (`502-508`).
- **Code:** `src/net.js:253-277`, `473-542`, `975-978`; `src/main.js:1554-1590`.
- **Confidence:** read in code.

## Rejoin (friends' worlds)

- **Rule:** Rejoin on a friend's row asks the relay whether the world is open; if not, it shows "Waiting for <name> to open" with Cancel and keeps asking, joining the moment it opens.
- **Numbers:** polls every 3 s, gives up after 60 s with "<name> did not open in a minute. Rejoin tries again." (`src/ui/screens.js:324-343`). With no relay it joins at once (`327`).
- **Code:** `src/ui/screens.js:324-348`, `597-604`.
- **Confidence:** read in code.

## Away, the grace, and dormancy

- **Rule:** A guest who leaves or loses the line has its character stand in the world for a grace, then go dormant: out of the simulation, not drawn or hunted, kept in the world's save, back where it stood on the rejoin. A host leaving makes every guest dormant at once before saving.
- **Numbers:** `GRACE_S = 60` seconds of game time (`src/net.js:109`, `631-636`) (at the 60x sleep speed that is one real second, inferred). A guest silent for 30 steps has its held keys released (`src/net.js:113`, `650`). Host's "The host's game has gone quiet. Its window may be covered or in the background." after 2.5 s without frames, 6 s on screen (`src/net.js:909-912`).
- **Code:** `src/host.js:95-101`; `src/net.js:619-636`; `src/main.js:336`.
- **Confidence:** read in code.

## Stepping away (idle)

- **Rule:** In a world shared with friends, five minutes of real time with no input takes your character out of the world, safe where it stood ("You stepped away"); any key, click, mouse move, or wheel brings it back. Never while asleep, dead, climbing, or alone. Others' logs read "<Name> stepped away." / "<Name> is back." A host away with no guests holds its world still.
- **Numbers:** `AWAY_AFTER_MS = 300000` real ms (`src/main.js:134`); refusals (`src/host.js:108`, `src/main.js:145`); held world (`src/main.js:674-677`).
- **Code:** `src/main.js:130-209`; `src/host.js:106-137`; `src/net.js:453-472`, `1234-1251`; `src/ui/screens.js:777-784`.
- **Confidence:** read in code.

## The world never pauses on the wire

- **Rule:** Alone (off the wire) any screen pauses the game. Once the world is on the wire, as host (even with nobody in) or guest, screens never pause it: the menu reads "Menu" and "The world goes on while you are here; your character stands still," and your player is fed an idle input while a screen is up.
- **Numbers:** `loop.setPaused(v && !net.onTheWire())` (`src/main.js:667-670`); the idle step (`src/main.js:1063-1084`); hit-stop (the freeze on a blow) is switched off entirely on the wire (`src/main.js:880`, `src/loop.js:66-74`).
- **Code:** as above; `src/ui/screens.js:663-665`.
- **Docs differ:** `docs/31-multiplayer/03` (section "Pause") says "Hit-stop is local ... becomes a hold on the client's own interpolation and its own camera kick"; in the code there is no hit-stop at all for anyone while on the wire.
- **Confidence:** read in code.

## A hidden tab

- **Rule:** A solo world stops when its tab is hidden. A shared world keeps running from a Worker's timer, the host's for everyone and a guest's for its own sends. A hidden host with guests renames its tab "Hosting: friends are playing". A hidden guest sends an idle input at once.
- **Code:** `src/main.js:1605`, `1620-1625`; `src/loop.js:138-186`.
- **Docs differ:** `docs/31-multiplayer/04` status says "the loop is still on requestAnimationFrame, so a covered or hidden host window slows the world for everyone (a Worker for the host's step is tier 4's move)"; the Worker driver is built (`src/loop.js:151`).
- **Confidence:** read in code.

## Sleep with friends

- **Rule:** Time runs fast only when every living player is asleep; a sleeper alone in a shared world sleeps at normal speed. The messages say which.
- **Numbers:** `data/tuning.json` `player.sleepTimeScale` = 60 (`src/game.js:257-263`, set each step at `496`); messages "You lie down. The night goes on without you." / "You lie down. Time will pass faster once everyone in the world is asleep." 5 s; "<Day N, HH:MM>. You slept N hours." 4 s (`src/main.js:1464-1465`). Frames and a guest's identical inputs are batched while fast (`src/net.js:712`, `936-959`). Sleeping blocks stepping away (`src/main.js:145`).
- **Code:** `src/game.js:257-264`; `src/world.js:25-29`.
- **Confidence:** read in code.

## What the host's rules decide for guests

- **Rule:** Five world rules belong to the world, not the viewer: zombie aggro, zombies attack villagers, survival, free building, multi-hit. In a browser world they come from the hosting browser's Settings and ride in the save; in a server world from the world's own meta, set by the owner. A guest's Settings show the five greyed with "(the host's)".
- **Numbers:** the five (`src/rules.js:109-115`); defaults from settings: aggro off, villager attacks off, survival on, free building off, multi-hit off (`src/settings.js:12-22`, `src/rules.js:119`); sent in a frame when they change (`src/net.js:815`); greyed rows (`src/ui/screens.js:373-382`, `src/main.js:591`).
- **Code:** `src/rules.js`; `server/world.js:97-99`, `337-344`.
- **Docs differ:** `docs/31-multiplayer/03` (Settings bullet) lists `combatTesting` and `squareSurface` among the host's world rules shown read-only to a guest; only the five are greyed, and a guest's "Square and paths" setting repaints its own replica's square (`src/main.js:1006-1009`, `1238-1240`).
- **Confidence:** read in code.

## Chat and the log

- **Rule:** Bottom left, the log keeps every floating message and every line said within sight as "Name: line" (your own as "You"; the dead's groans excluded). Enter opens the chat box; a typed line is said by your character (a bubble over your head, a line in every log that sees you); a guest's is said on the host. A line starting with "/" is a command: none exist, and it answers "Commands are not here yet." Escape leaves the box. The log is resizable by its corner, the size remembered; the wheel scrolls it.
- **Numbers:** 200 lines kept (`src/ui/log.js:12`); chat line max 200 chars (`src/ui/log.js:38`, host trims to 200 at `src/net.js:618`); bubble time `max(2, 0.06 x length)` seconds of game time (`src/entities/character.js:117`); speaker label "You" / name / "Someone" / "Villager" (`src/ui/speech.js:74`); a bubble behind a canopy shows only within 3.5 tiles (`src/ui/speech.js:21`); size saved after 250 ms in setting `logSize` (`src/ui/log.js:70-78`).
- **Code:** `src/ui/log.js`; `src/ui/speech.js`; `src/main.js:889-890`, `1289-1295`.
- **Confidence:** read in code.

## Names over heads

- **Rule:** Another living player's name floats over their head while in your sight; yours is never shown.
- **Numbers:** 78 world px above the feet (`src/ui/names.js:10`); setting `nameTags`, default shown (`src/settings.js:26`, read at `src/ui/names.js:35`).
- **Code:** `src/ui/names.js`.
- **Docs differ:** `docs/31-multiplayer/03` promises "a setting to hide them" and `settings.CHOICES` has a `nameTags` row (`src/settings.js:58`), but the Settings screen never renders it (`src/ui/screens.js:753-768`); there is no way to hide names from the interface.
- **Confidence:** read in code.

## The pause menu's first lines

- **Rule:** The pause menu says where you are: "<World>, as <Name>." and, when hosting, "Open to friends, code X: N with you."; as a guest, "In <...>'s world as <Name>."
- **Code:** `src/ui/screens.js:656-667`; `src/main.js:579-593`.
- **Docs differ:** `docs/31-multiplayer/09` gives the guest's line as "In Michael's valley as Whipitgood"; `here()` always returns `hostName: null` and the guest's name as the code (`src/main.js:583`, `590`), so a guest reads "In oak-elm-k7mp's world as ...".
- **Confidence:** read in code.

## Leave world

- **Rule:** Leave world (pause menu or dead screen) makes guests dormant, saves a world of mine, closes the wire, and returns to the title. A host with guests is asked "Leaving closes the world to the N with you. Leave?"
- **Code:** `src/ui/screens.js:198-203`; `src/main.js:335-349`.
- **Docs differ:** `docs/31-multiplayer/09` says Leave world goes to "the Worlds screen"; it goes to the title (`src/main.js:348`).
- **Confidence:** read in code.

## The relay

- **Rule:** A small Node WebSocket server is the lobby and the pipe: a host registers its code, guests name it, and messages pass through with the sender stamped. The default is Michael's Fly app; `?relay=none` uses a same-browser tab loopback; `?relay=wss://...` another relay.
- **Numbers (all `server/relay.js`):** port 8012 or `$PORT` (`39`); max message 16 MB (`41`); ping every 30 s (`42`), dropped after 90 s silent (`68`); 120 lookups a minute per address for `/open` and refused joins (`43`); an unidentified socket closed after 10 s (`918`); a plain GET answers "cmz relay: N worlds open, M guests" (`899-902`); `/open?code=` answers `{ open, guests, server?, awake? }` (`870-880`). Default relay `wss://cmz-relay.fly.dev` (`src/net.js:188`).
- **Code:** `server/relay.js`; `src/net.js:181-337`.
- **Confidence:** read in code.

## Frames and the wire's pace (player-visible numbers)

- **Rule:** The host sends the world to guests every third step; a guest predicts its own walk and is corrected.
- **Numbers:** `FRAME_EVERY = 3` (20 frames a second at normal speed) (`src/net.js:712`); a guest's inputs held by the host at most 10 steps (`src/net.js:111`); replay buffer 180 inputs (`110`); wire rates shown in the debug corner as "wire out X KB/s in Y KB/s" (`src/main.js:1120`).
- **Code:** `src/net.js:717-824`.
- **Confidence:** read in code.

---

# Part 4: Server worlds (item 5, steps 1 to 6; the deploy, step 7, not done)

## Server worlds

- **Rule:** A world can live on the server so friends can play it while its owner is offline. It is on while anyone is in it, held still when empty, and exits after a spell; everyone in it is a guest, the owner included. One process per world.
- **Numbers:** at most 3 worlds running (`server/relay.js:78`, `CMZ_MAX_RUNNING`); 192 MB heap each (`79`); at most 5 stored (`103`, `CMZ_MAX_WORLDS`); a world that crashed 3 times in 10 minutes rests (`82-83`); a world exits after 600 s empty (`server/world.js:42`); it saves every 300 s of game time while played (ten in-game hours) and at every join, leave, dormancy, death, emptying, and stop (`server/world.js:126`, `141-160`); rolling copies every 10 min, 3 kept; daily copies, 7 kept (`127-129`); crash files, 5 kept (`248`); stop grace 20 s (`server/relay.js:84`). A sleeping world is woken by a guest's join (`server/relay.js:777-797`). The welcome is gzipped (`server/world.js:285-288`, `src/net.js:536-538`).
- **Code:** `server/world.js`; `server/relay.js:73-110`, `492-618`; `server/worlds.js` (by hand: `new`, `list`).
- **Docs differ:** `docs/31-multiplayer/README` and `04` status (2026-10-13) still say a Node authority is optional tier 4 and the game is "live through tier 3"; server worlds exist in code (not yet deployed, `TODO.md` item 5 step 7).
- **Confidence:** read in code.

## The creator key

- **Rule:** Moving a world to the server needs the creator key, a secret the server's keeper (Michael) hands out; the browser asks once and keeps it. A wrong key is forgotten and asked again.
- **Numbers:** server env `CREATOR_KEY`; unset, the server takes no worlds (503) (`server/relay.js:98`, `284`); uploads and rekeys limited to 10 per hour per address, every try counted (`110`, `285`); stored in setting `creatorKey` in plain localStorage (`src/settings.js:36`, `src/identities.js:122-127`); cleared on a 403 naming the creator key (`src/main.js:393-394`).
- **Code:** `src/ui/screens.js:572-585`, `488-499`; `src/main.js:380-400`.
- **Confidence:** read in code.

## Move to the server

- **Rule:** On a browser world of mine that is not in play: confirm, then the save goes up gzipped; the server checks it by booting it, mints an id, a code, and an owner key, and shows the owner key once ("write it down too"). The browser's copy becomes a marker that will not play here, so the world cannot fork.
- **Numbers:** body cap 4 MB compressed, 64 MB unpacked (`server/relay.js:100-101`); the map name must be a plain name of one of the server's maps (`181-184`); owner key 24 random bytes, base64url (32 chars) (`302`); the disk keeps only SHA-256 hashes of the code and the key (`329`); the owner's character refiled under the fixed entry `owner` (`105`, `303-318`); only the game's site (`CMZ_SITE_ORIGIN`, default `https://michaeldippold.github.io`) and localhost are answered (`99`, `115-118`).
- **Code:** `src/main.js:380-400`; `server/relay.js:282-335`; `src/ui/screens.js:586-596`.
- **Docs differ:** none found, but note: the Worlds screen offers "Move to the server" whenever any relay is set (`canMove` is `!!net.relayHttp()`, `src/main.js:1372`), whether or not that relay keeps worlds; one without `DATA_DIR` answers "this relay keeps no worlds" (`server/relay.js:280`).
- **Confidence:** read in code.

## Bring it home

- **Rule:** Two phases: the server stops and sends the save with a one-time token; the browser keeps it, refiles the owner's character under its own browser id, and confirms; only then does the server let go (to a trash kept seven days). A broken line in between leaves "Finish bringing it home". If no confirm comes in time the world is the server's again.
- **Numbers:** wait 10 minutes (`server/relay.js:104`, `CMZ_LEAVING_MS`); trash kept 7 days (`107`); a guest naming a world on its way home is told "moving" (`783`).
- **Code:** `src/main.js:406-453`; `server/relay.js:445-473`, `546-559`.
- **Confidence:** read in code.

## The owner key and the owner's powers

- **Rule:** The owner key proves the world is yours from any device; with it, joining brings back the owner's own character. "Owner" (on the pause menu in a server world of mine, or on its row) opens the owner's screen: change the code (the old one stops at once, whoever is in stays), set the five rules (reach every guest at once), remove a player (told "The world's owner removed you from it", character dormant, browser barred), "Remove and change the code", and "Let back in". The owner cannot be removed.
- **Numbers:** endpoints `/worlds/owner`, `/rotate`, `/rules`, `/remove`, `/unbar`, `/home`, `/home/confirm`, `/rekey` (`server/relay.js:346-473`); keys compared in constant time (`502-507`); the barred list keeps the last 64 (`434`); the screen is asked of the server each time it opens (`src/ui/screens.js:668-704`). Owner keys kept in setting `owned` (last 20) in plain localStorage (`src/identities.js:130-138`).
- **Code:** `src/main.js:458-531`; `server/world.js:258-275`, `327-359`; `src/ui/screens.js:209-242`, `668-723`.
- **Confidence:** read in code.

## A world of mine on another device, and a lost owner key

- **Rule:** "A world of mine on the server" takes a code and owner key, checks them with the server, and lists the world under "My worlds on the server". With the creator key the same screen has the server issue a new owner key; the old one stops working, and the owner's character stays put.
- **Code:** `src/main.js:505-531`; `src/ui/screens.js:705-723`; `server/relay.js:346-359`.
- **Confidence:** read in code.

---

# Part 5: The interface

## Screens and their flow

- **Rule:** The title (boot): "Cozy Medieval Zombies", "A village of the dead. Keep the shutters closed.", buttons Worlds, Identities, Settings, Controls. Escape steps back through sub-screens; the title and the dead screen stay until a choice. The world's HUD is hidden while no world is chosen.
- **Numbers:** sub-screens returning to their opener: settings, controls, character, host (`src/ui/screens.js:139`); flow screens with an explicit Back (`141`); Escape map (`163-191`); the HUD hidden by `#ui.no-world` (`style.css:1108`).
- **Code:** `src/ui/screens.js:143-191`, `550-557`.
- **Confidence:** read in code. (Whether the chat box, which `style.css:1108` does not hide, shows over the title is inferred: probably covered by the screen.)

## The pause menu

- **Rule:** Escape with nothing open. Title "Paused" alone, "Menu" on the wire. Buttons: Resume, Save world (not for a guest), Open to friends: on/off (not for a guest), Owner (a server world of mine), Character, Settings, Controls, Leave world.
- **Code:** `src/ui/screens.js:656-667`.
- **Docs differ:** `docs/10` status lists the pause menu without Owner (added with item 5 step 6).
- **Confidence:** read in code.

## Escape, in order

- **Rule:** Escape closes the top thing: the context menu, then Use mode, then the station panel, then a screen steps back, then the build palette, then placement or removal, then the bag and character panels; with nothing open it opens the pause menu. In the chat box Escape only leaves the box.
- **Code:** `src/main.js:679-696`; `src/ui/log.js:55`.
- **Docs differ:** `docs/10` (Screens) gives "menu, then a screen, then the bag or character screen, then pause"; the code adds Use mode, the station panel, the build palette, and placement.
- **Confidence:** read in code.

## The Settings screen

- **Rule:** "Kept in this browser". Each row is a set of buttons; Defaults resets; Back.
- **Numbers (rows in screen order, choices from `src/settings.js:41-59`, defaults `8-38`):**
  - Interface size: Auto, 1x, 1.25x, 1.5x, 1.75x, 2x (default Auto; Auto is about 85 percent of the window's fit over 960 by 540, in quarter steps, 1 to 2, `src/view.js:84-88`).
  - Zoom: Auto, Wide (1.1), Middle (1.8), Close (2.7) (default Auto).
  - Zombie aggro: Off (they ignore you) / On (they hunt you) (default Off). A world rule.
  - Zombies attack villagers: Off / On (they hunt villagers too, you first) (default Off). A world rule.
  - Survival: On (hunger, thirst, tiredness) / Off (no needs) (default On). A world rule.
  - Free building: Off (costs apply) / On (no costs) (default Off). A world rule.
  - Cursor: Default, A hand, A severed hand, A zombie hand (default Default).
  - Debug corner: Shown / Hidden (default Shown).
  - Square and paths: Cobble / Dirt (default Cobble).
  - Bow aim guide: On (landing marker and dotted line) / Off (default On).
  - Swing timer: On (a bar over your head) / Off (default On).
  - Combat testing: Off / On (no trees, forty more dead; reload the page) (default Off).
  - Dev chest: On (by the spawn; reload the page) / Off (default On).
  - Swing targets: Off / On (green outline on what you would hit) (default Off).
  - Multi-hit: Off (nearest only: the intended way) / On (everything in the wedge: the easy button) (default Off). A world rule.
  - Show hit shapes: Off / On (body samples) (default Off).
  - "Layer: <slot>" rows: "worn" or a painted layer to try on, one row per slot that has painted layers (`src/ui/screens.js:454-463`).
- **Code:** `src/ui/screens.js:748-776`; `src/settings.js`.
- **Docs differ:** the hair row (`hairRow`, `src/ui/screens.js:385-390`) is never shown because the identity editor's api is always present (`769`); `nameTags` is offered in `CHOICES` but has no row (see Names over heads). The "Swing timer" label says "a bar over your head" but the swing bars sit at bottom centre (`style.css:561-565`, `src/ui/swing-timer.js:1-9`); only the exposure bar is over the head. `docs/10`'s pinned compact sandbox screen is not built (it says so).
- **Confidence:** read in code.

## Defaults wipes more than settings

- **Rule:** The Settings screen's Defaults button resets every key in the settings blob, which also holds the identities, the browser id, the friends' bookmarks, the creator key, and the owner keys of server worlds.
- **Numbers:** `settings.reset()` loops over every key of `DEFAULTS` (`src/settings.js:92-94`), which includes `identities`, `lastIdentity`, `clientId`, `joined`, `creatorKey`, `owned` (`src/settings.js:32-37`); called by Defaults (`src/ui/screens.js:773-776`).
- **Code:** as above. After a reload a new browser id is drawn (`src/identities.js:91-98`), so the browser no longer owns its characters in friends' worlds, and the owner keys are gone from this browser.
- **Confidence:** read in code (the consequences inferred from it; not tried).

## The Controls screen

- **Rule:** A fixed list of keys and what they do.
- **Numbers:** 24 rows (`src/ui/screens.js:20-45`).
- **Docs differ:** the list includes "K: Near walls: stubs or translucent", which no code reads (no `KeyK` anywhere in `src/`). It omits Q and the middle button (the main hand's other mode, `src/buttons.js:25-26`), holding the right button (the off hand's stance), L is listed but `NumpadEnter` and shift-click in the bag are not.
- **Confidence:** read in code.

## Zoom levels

- **Rule:** Three snapped zooms: Wide, Middle, Close. Z cycles them (Close wraps to Wide); the wheel steps one way or the other without wrapping, at most one step per 0.3 s, and not while a panel is open. The choice is saved as the Zoom setting.
- **Numbers:** `ZOOM_LEVELS = [1.1, 1.8, 2.7]` (`src/view.js:28`); Auto picks the level nearest the largest whole scale at which 960 by 540 fits (`src/view.js:70-79`): Wide on 1080p, Middle on 1440p, Close on 4K; `ZOOM_PACE = 0.3` s (`src/main.js:71`, `899-906`).
- **Code:** `src/view.js:95-109`; `src/main.js:898-906`.
- **Docs differ:** the code's own comment says Auto is "middle on a 4K one" (`src/view.js:74-75`); by the arithmetic a 3840 by 2160 window fits at 4, nearest level Close.
- **Confidence:** read in code.

## The HUD (portrait, name, health, stamina, hands)

- **Rule:** Top left: a portrait cut from your own sprite (head to belt) at 2x, your name, a labelled health bar ("Health 70 / 100") and stamina bar ("Stamina 65%"), and "Hands: Main / Off" (a two-handed item named once).
- **Numbers:** portrait crop 26 by 40 px at 2x (`src/ui/hud.js:21-22`); health colour green over 50 percent, yellow over 25, red below (`92`); stamina gets `winded`, and pulses gold on a block, red on a broken guard (`98-101`); name falls back to the player id (`106`); "–" for an empty hand (`66`). Max health 100, stamina 100 (`data/tuning.json` `player.hp`, `player.stamina`).
- **Code:** `src/ui/hud.js`; `style.css:197-200`.
- **Confidence:** read in code.

## The clock

- **Rule:** Top centre, "Day N, HH:MM".
- **Numbers:** a day is 720 real seconds; new worlds start at 08:00 (`src/clock.js:5`, `18`); format (`src/clock.js:88-94`).
- **Code:** `src/ui/hud.js:118-122`; `style.css:242-246`.
- **Confidence:** read in code.

## Moodles

- **Rule:** Five icons always shown on the right edge, in fixed order (bleeding, infection, hunger, thirst, tiredness), green at "fine" and worse by stage; hovering shows a name and a line; an icon pops when it worsens.
- **Numbers (`src/moodles.js`):** stages and words (`23-92`); fine names: Not bleeding, Not bitten, Fed, Watered, Rested (`115`); hunger, thirst, tiredness stages at below 60, 35, 15, and 0 (`55-61`, `72-78`, `95-102`); bleeding stage = wound stacks, max 4 (`33`); infection stage from `infection.js` (`44`); "Turning" says "(Nothing happens yet: a marker.)" (`42`).
- **Code:** `src/moodles.js`; `src/ui/moodles.js`; `style.css:317-321`.
- **Docs differ:** `src/ui/hud.js:1-2` comment says the moodles are "down the right edge" (true), while `src/ui/swing-timer.js:6` says "the left stack's moodles grow upward" (stale).
- **Confidence:** read in code.

## The swing timer and the exposure bar

- **Rule:** Two gold bars at bottom centre above the belt (main hand on top, off hand below), always present and empty at rest, filling across a swing's recovery. A setting hides them. The red exposure bar (the window in which a blow is amplified) floats over your head whatever the setting.
- **Numbers:** exposure bar 58 world px above the feet (`src/ui/swing-timer.js:16`), width over `DUAL.window` (`69`, `data/combat.json`); swing bars at `bottom: 74px` (`style.css:561-565`).
- **Code:** `src/ui/swing-timer.js`.
- **Confidence:** read in code.

## Health bars over heads

- **Rule:** A small bar over any damaged, living zombie in sight, and over your own head while you are hurt.
- **Numbers:** zombie bar 76 world px up, your own 66 (`src/ui/zombie-bars.js:14`, `20`); behind a canopy only within 3.5 tiles (`19`); same three colours as the HUD.
- **Code:** `src/ui/zombie-bars.js`.
- **Confidence:** read in code.

## The prompt and the floating message

- **Rule:** Over the target of the nearest simple action, "E: <action>"; during a timed action, its label with a progress bar; greyed when not possible. Messages float under the clock and also go to the log.
- **Numbers:** prompt 44 UI px above its world point (`src/ui/prompt.js:41`); message default 2 s (`60`); placement's own prompt wins; carrying shows "E: Put down" (`src/interact.js` `promptFor`); on a guest the bar is the host's progress (`actionView`).
- **Code:** `src/ui/prompt.js`; `src/interact.js:852-880` (`promptFor`).
- **Confidence:** read in code.

## Context menus (right-click)

- **Rule:** A tap of the right button opens a menu of everything you can do to what is under the cursor, with "Build" always last; a disabled entry is greyed. A click outside closes it and is not a click on the world; Escape or Tab closes it; walking closes it. Clicking a gatherable also makes it sway and adds its own actions (Chop down). On a guest the choice goes to the host by address and label.
- **Numbers:** a tap is a right press let go within 0.2 s of game time (`src/buttons.js:10`, `34-38`); a right tap during a bow draw cancels the draw, in Use mode puts the item down (`src/main.js:613-623`); clamped inside the window (`src/ui/context-menu.js:55-57`); no browser context menu anywhere except the debug corner (`src/input.js:84-87`).
- **Code:** `src/main.js:610-646`; `src/ui/context-menu.js`.
- **Confidence:** read in code.

## Item menus (in the panels)

- **Rule:** Right-click an item in a grid: Use, Equip (main hand) / Equip (off hand) (or Equip (both hands) etc.), Wear / Wear (WxH) for a bag, Apply (bandage; greyed "not bleeding"), Eat, Drink (N%), Split into N <item>s, Store in <container> / Take (greyed "empty it first" for a full container), Drop / Drop all (N), Rotate (non-square items). Right-click a slot: Use, then Take off and Drop (worn), Equip, Put in bag, Drop (belt), Unequip, Drop (hand).
- **Code:** `src/interact.js:1015-1147`; `src/ui/inventory-panel.js:674-703`.
- **Confidence:** read in code.

## The bag and character panels

- **Rule:** Tab opens the bag (top right; with no bag worn it opens the character screen and says "No bag on your back."); C the character screen (the doll with worn slots and both hands). Each opens and closes independently, has an X, and can be dragged by its header to a remembered place. An open container is its own panel beside the bag and closes when you walk away. Drag moves items; R, a right click, or the wheel rotates while dragging; shift-click sends an item across; double-click uses (equip, wear, draw from the belt, unequip, take off), else sends across; Tidy repacks. Dropping outside the panels drops to the floor. Carrying furniture closes the panels ("Your hands are full.").
- **Numbers:** 38 UI px a cell (`src/view.js:118`); icons 19 px per cell, portraits 38 px a slot (`src/ui/inventory-panel.js:22-23`); a drag starts after 4 px (`24`); container closes beyond `data/tuning.json` `world.containerCloseDist` = 2.0 tiles (`src/main.js:766`); panel positions in setting `panelPos` (`src/ui/inventory-panel.js:615`); hint line "Drag to move · R rotates · Shift-click sends across · Right-click for actions" (`323`).
- **Code:** `src/ui/inventory-panel.js`; `src/main.js:727-773`; `src/ui/inventory-actions.js`.
- **Confidence:** read in code.

## The belt (hotbar)

- **Rule:** While a belt is worn, its slots show at bottom centre; keys 1 to 4 eat or drink a consumable on that slot, else swap it with the hand. Works with the bag open.
- **Numbers:** messages "No belt, or no such slot.", "Your hands are full.", "It is empty." (`src/interact.js:994-1010`).
- **Code:** `src/interact.js:928-932`, `994-1010`; `style.css:1321-1325`.
- **Confidence:** read in code.

## The station panel

- **Rule:** Using a station opens one panel (top centre, under the clock): recipes on the left (greyed with the reason), the chosen recipe's ingredients with have and need, a count, Make, the queue with progress (and "(the fire is out)" when paused), and Output to reopen the output box. Closes on X, Escape, or walking away. On a guest, Make is a command to the host.
- **Numbers:** count 1 to 10 (`src/ui/station-panel.js:52`, also clamped on the host `src/host.js:165`).
- **Code:** `src/ui/station-panel.js`; `style.css:887-891`.
- **Confidence:** read in code.

## The build palette

- **Rule:** N (or Build in any right-click menu) opens a list on the left of what can be built with its cost, greyed when short, and a Remove row; click one, then the ground. N or Escape closes. Not while carrying or with a panel open.
- **Code:** `src/ui/build-palette.js`; `src/main.js:700-721`.
- **Confidence:** read in code.

## The cursor

- **Rule:** Four choices: the system's own, a hand, a severed hand, a zombie hand. With "a hand", the zombie hand shows over one of the living dead.
- **Numbers:** setting `cursor` (`src/settings.js:29`, `56`); a CSS cursor on the whole page (`src/ui/cursor.js:30-36`); 30 by 40 px, hotspot the fingertip (`src/ui/cursor.js:1-9`).
- **Code:** `src/ui/cursor.js`; `src/main.js:929-930`.
- **Confidence:** read in code.

## The debug corner

- **Rule:** Top left under the HUD, shown by default: fps; position, facing, hp, hunger, thirst; clock, phase, brightness, light at the player, hands, guard; chunk, room (sealed or open), rooms, light sources and portals; tiles, visible, drawables, step and render timings; ground bake stats and, on the wire, wire KB/s out and in; villagers, zombies, corpses, chunks, near, the first six zombie states; and a key reminder line. It keeps the browser's own context menu.
- **Numbers:** setting `debugCorner`, default true (`src/settings.js:11`); `top: 84px` (`style.css:81-84`).
- **Code:** `src/main.js:1112-1122`.
- **Confidence:** read in code.

## Debug keys

- **Rule:** V shows everything (fog off); L cycles light views (off, light, ambient, fog); ] and [ move the clock an hour; Z cycles zoom.
- **Numbers:** `night.debug` 0 to 3 (`src/main.js:907`); `clock.setHour(h +/- 1)` keeps the day, so ] at 23:xx wraps to 00:00 of the same day and [ at 00:xx to 23:00 of the same day (`src/clock.js:41-44`).
- **Code:** `src/main.js:887`, `907-910`.
- **Docs differ:** none in docs, but note: on a guest, ] and [ change only its own clock, which the next frame overwrites (`src/net.js:803` sends the clock in every frame; `src/net.js:1040` sets it on the guest); on a host they change the world's clock for everyone.
- **Confidence:** read in code.

---

# Controls

From the code (`src/input.js`, `src/buttons.js`, `src/main.js:887-1003`, `src/interact.js:928-988`, `src/placement.js:274`, `src/ui/inventory-panel.js:75-126`, `src/ui/log.js`, `src/ui/context-menu.js`).

**Keyboard**
- W A S D or the arrow keys: walk (screen directions) (`src/input.js:150-158`).
- Shift (left or right): sprint (`src/main.js:966`).
- E tap: the nearest simple action; E hold (0.35 s): climb through the nearest window; E while carrying furniture: put it down (`src/interact.js:49`, `946-970`).
- B tap: board up the nearest opening ("You need a plank." without one); B hold: pull a board (`src/interact.js:971-982`).
- T: torch into or out of hand ("No torch on you.") (`src/interact.js:984-992`).
- 1 2 3 4: use or swap that belt slot (`src/interact.js:928-932`).
- Q: the main hand's other mode, same as the middle button (`src/buttons.js:25-26`).
- Space: shove (`src/player-controller.js:53`).
- Tab: the bag (or the character screen with no bag); also closes an open context menu (`src/main.js:741-748`, `src/ui/context-menu.js:34`).
- C: the character screen (`src/main.js:749`).
- N: the build palette (`src/main.js:891`).
- X: removal mode (`src/main.js:892`).
- R: turn the prop being placed (`src/placement.js:274`); rotate an item being dragged (`src/ui/inventory-panel.js:117`).
- Z: next zoom level, wrapping (`src/main.js:898`).
- Enter or Numpad Enter: open the chat box; Enter in it says the line (`src/main.js:889`, `src/ui/log.js:45`).
- / : open the chat box with a slash typed (commands: none yet) (`src/main.js:890`).
- Escape: close the top thing, else pause (`src/main.js:679-696`); in the chat box, leave it.
- V: fog off / on (debug) (`src/main.js:887`).
- L: light debug views, four steps (`src/main.js:907`).
- ] and [: the hour forward or back (debug) (`src/main.js:909-910`).
- Any key, click, mouse move, or wheel while stepped away: come back (the key or click is spent on it) (`src/main.js:200-209`).
- Enter in a screen's text field (world name, join code, creator key): its Next or Move button (`src/ui/screens.js:583`, `614`, `628`).

**Mouse**
- Left click: placement's confirm if placing, Use mode's target if in Use mode, else swing (fists with nothing) (`src/main.js:926-940`); on a gatherable within 2.6 tiles it sways (`src/interact.js:1156`).
- Right tap (released within 0.2 s): the actions menu; during a bow draw, cancel the draw; in Use mode, put the item down (`src/buttons.js:10`, `src/main.js:610-626`).
- Right hold: the off hand's stance (block with a shield, brace, an off-hand swing) (`src/buttons.js:41-42`).
- Middle button: the main hand's other mode (`src/buttons.js:25-26`, `src/input.js:69-73`).
- Wheel: zoom one step (one per 0.3 s; not while a panel is open) (`src/main.js:899-906`); rotates a dragged item (`src/ui/inventory-panel.js:123`); scrolls the log over it.
- In panels: drag to move; double-click to use or send across; shift-click (or shift-drag release) to send across; right-click for the item menu; right-click or wheel during a drag rotates (`src/ui/inventory-panel.js:75-126`, `632`).

---

# Candidate wiki pages

- **Worlds** - what a world is, the Worlds screen, new world, delete, where saves live.
- **Saving** - autosave cadence, what is and is not saved, failed saves, the version and migrations.
- **Identities** - name and look, the editor, palettes and hair styles, how a character is stamped.
- **Characters** - one per world, creation steps, the character screen, death and the next survivor.
- **Death** - the dead screen, the body that stays, a guest's death.
- **Multiplayer** - overview: host, guests, the relay, codes, what syncs, the same-commit rule in player terms.
- **Open to friends** - hosting as a switch, codes, reopen behaviour.
- **Joining a world** - Join a game, Rejoin and its wait, the green dot, every refusal message.
- **Dormancy and stepping away** - the 60-second grace, dormant characters, the five-minute idle rule.
- **Pausing** - alone versus on the wire, hit-stop off on the wire, hidden tabs.
- **Sleeping together** - the everyone-asleep rule and the 60x time scale.
- **World rules** - the five rules, who sets them, how guests see them.
- **Chat and the log** - the log, chat, slash commands, bubbles.
- **Names over heads** - who is shown and when.
- **Server worlds** - availability, waking, sleeping, limits.
- **Owner key and creator key** - moving up, bringing home, the owner's screen, removing players, lost keys.
- **The relay** - for the curious: what it does, its limits.
- **Interface** - a map of the screen: HUD, clock, moodles, swing bars, log, belt, debug corner.
- **HUD** - portrait, name, health, stamina, hands.
- **Moodles** - all five with every stage and threshold.
- **Swing timer** - the two bars and the exposure bar.
- **Context menu** - right-click rules and item and slot menu entries.
- **Inventory panels** - bag, character screen, containers, drag, rotate, shift-click, double-click, tidy.
- **Belt** - keys 1 to 4.
- **Station panel** - the crafting panel's parts.
- **Build palette** - opening it and the remove tool.
- **Settings** - every row with its options and default, plus the Defaults warning.
- **Controls** - the full key and mouse list (from the code, not the in-game list).
- **Zoom** - the three levels and Auto.
- **Cursor** - the four choices.
- **Debug tools** - the debug corner, V, L, ], [.

---

# Discrepancies

- `src/ui/screens.js:41` Controls lists "K: Near walls: stubs or translucent"; no code reads K.
- The Controls screen omits Q / middle button (the main hand's other mode) and the right-button hold (block, brace) that `src/buttons.js` implements.
- `docs/31-multiplayer/03` promises a setting to hide names over heads; `nameTags` exists in `src/settings.js:26`, `58`, but the Settings screen has no row for it.
- `docs/31-multiplayer/03` (Settings) says `combatTesting` and `squareSurface` are the host's and read-only for a guest; only the five rules are greyed, and a guest's Square and paths setting repaints its own replica.
- `docs/31-multiplayer/03` (Pause) says hit-stop stays local on the wire; the code turns hit-stop off entirely on the wire (`src/main.js:880`).
- `docs/31-multiplayer/03` (Pause) says a listen server with no guests pauses; its own status line and the code say any world on the wire never pauses (the doc's body is stale against its status).
- `docs/31-multiplayer/04` status says the host loop is still requestAnimationFrame and a Worker is tier 4; the Worker background driver is built (`src/loop.js:151`, `src/main.js:1605`).
- `docs/31-multiplayer/README` and `04` (2026-10-13) say a Node authority is optional tier 4 and the build is "through tier 3"; server worlds (`server/world.js`) exist (deploy pending).
- `docs/31-multiplayer/09` says a guest's pause line reads "In Michael's valley as Whipitgood"; `here()` hard-codes `hostName: null` and uses the code as the name (`src/main.js:583`, `590`).
- `docs/31-multiplayer/09` says Leave world ends on the Worlds screen; it ends on the title (`src/main.js:348`).
- `docs/31-multiplayer/09` says a friend's row shows when you were last in it; `lastAt` is stored, never shown.
- `docs/10` status lists the pause menu without the Owner button that item 5 step 6 added.
- `docs/10` (Screens) gives the Escape chain as menu, screen, bag, pause; the code also closes Use mode, the station panel, the build palette, and placement, in that order (`src/main.js:679-696`).
- `CLAUDE.md` and `docs/10` say autosave is "every minute of game time"; it is 60 s of simulation time, two hours on the in-game clock, and about once a real second while everyone sleeps.
- Settings label "Swing timer: On (a bar over your head)" (`src/settings.js:49`); the swing bars are at bottom centre (`style.css:561-565`), only the exposure bar is over the head.
- `src/ui/swing-timer.js:6` says "the left stack's moodles grow upward"; the moodles are on the right edge, centred (`style.css:317-321`).
- `src/view.js:74-75` says Auto zoom is "middle on a 4K one"; the arithmetic gives Close on 3840 by 2160 (Middle is 1440p).
- The Join screen's placeholder `oak-abc` (`src/ui/screens.js:624`) is the old code shape; codes are `word-word-xxxx` (`src/net.js:89-100`).
- The Settings hair row (`src/ui/screens.js:385-390`) is dead: it renders only when the identity api is absent, which never happens.
- "Combat testing" and "Dev chest" say "reload the page", but both are read when a world is created (`src/main.js:241-242`); a reload matters for combat testing's tree removal at boot (`src/main.js:1190-1193`), not for the dev chest in a new world (inferred).
- The Defaults button (`src/ui/screens.js:773`) resets identities, the browser id, friends' bookmarks, the creator key, and owner keys along with the display settings (`src/settings.js:32-37`, `92-94`); no doc mentions this. It is a hazard, not strictly a docs disagreement.
- "Move to the server" shows whenever any relay is set (`src/main.js:1372`), including relays that keep no worlds; docs describe it as available where the server takes worlds.
