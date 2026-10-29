---
title: Worlds
categories: [Multiplayer, Interface]
aliases: [World, Worlds screen, Worlds page, New world]
summary: A world is one map with its state and everyone in it, kept in the browser that made it; Play on the game's site opens the Worlds page, a card for each.
---

A **world** is one copy of a [[Maps|map]], [[The valley]] by default, with everything in it: the dead, the villagers, the fires, what has been built and moved, the time of day, and every [[Characters|character]] who has played there. A browser can keep many worlds, each at its own hour, and return to any of them. Nothing runs until a world is chosen: before that the game is its site (see [[Screens#The site|Screens]]).

## How it works

### The Worlds page

**Play** on the site's menu (or **Play in your browser** on Home) opens the Worlds page. It says "Each world keeps its own characters. Nothing runs until you choose one." Each world is a card: the world's name, a line about your survivor, a line of details, one big button for the main thing to do, and small buttons for the rest. The page has three parts:

- **My worlds**: the worlds kept in this browser ("No worlds yet. New world makes one." when there are none). A card shows:
  - the name;
  - the map it is on ("The valley", "Flat grass");
  - your survivor: "as Name", "Name died", or "no survivor yet";
  - the world's day and hour ("Day N, HH:MM"), when it was last played ("played today" with the time, or the date), and its code if it has been opened to friends;
  - **Play** big (**New character** when yours is dead), with **Move to the server** (see [[Server worlds]]) and **Delete** small.

  A world moved to the server is marked "on the server", with **Play** big and **Owner** and **Bring it home** small. A world partway home is marked "on its way home" and has **Finish bringing it home**.
- **My worlds on the server**: worlds of yours on the server with no copy in this browser (moved up from another device, or added by their key), marked "on the server" with their code and "yours by its owner key"; **Play** big, **Owner** small.
- **Friends' worlds**: every friend's world this browser has tried to join, with a dot that says whether it is open now, your survivor there, whose world it is, its code, and when you last joined; **Rejoin** big, **Forget** small. See [[Joining]].

Below the lists: **New world**, **Join a game**, **A world of mine on the server** (shown only when a relay is set), and **Back**, which goes to Home.

Every world has **Play**, whichever map it is on: a world saved on another map than the page's reloads the page onto that map and opens into it (see [[Maps]]). A world saved on a map this version of the game does not have is not opened: the page says so with a word.

### Making a world

**New world** says "A name for it, how it plays, then a character for it." It asks for a name, with one offered: the chosen map's name and the day's date (the offered name follows the map while it is left as offered). Under the name is a **Map** choice, a dropdown with the line of the map chosen under it: **The valley** (the default) and **Flat grass** for play, then the test maps **Village square** and **The staging clearing** under their own heading. The map is chosen now and cannot be changed afterwards; choosing a map other than the page's reloads the page onto it when the character is made, and the world is made on arrival (see [[Maps]]). Under it is the Sandbox: the world's rules, in two parts. **How it plays** has the five that can be changed later from the pause menu (Zombie aggro, Survival, Free building, Unlimited mana, Multi-hit); **Chosen once, when the world is made** has **Trees**, **Starting population**, the **Dev chest**, **Dev bag**, and **Extra starting items**, which are baked into the world and never change. The last two set what every character starts with, for testing: the [[Developer Bag]] worn in place of the sack, and a typed list of items added to the default kit (see [[Player#The starter kit|the starter kit]]). A list with an unknown item, a bad count, or more than the starting bag holds is named under its box, and **Next** refuses it until it is put right. They are offered as you last chose them. See [[World rules]].

**Next** goes on to [[Characters|character creation]]: an identity, then a second step. **Into the world** (the button says this whatever the map the world is on; it once read Into the valley) makes the world behind the [[Screens#The loading screen|loading screen]] ("Making" and its name), puts your character at the spawn, saves it at once, and draws the ground round you before the screen goes. The site goes and the game fills the window. A new world starts at {{n census.constants.clock.START_HOUR}} o'clock in the morning on day one.

### Playing a world

**Play** loads the world as it was last saved (first moving to its map, if the page is on another), behind the loading screen ("Reading" and its name), and puts you back in your character. A world that was open to friends when you left it opens to friends again. If your character there is dead, the button is **New character** instead.

### Deleting a world

**Delete** asks "Delete this world and every character in it?" on the page, with **Delete** and **Cancel**, and on Delete removes it from the browser for good. Cancel, `Escape`, or `Enter` (Cancel has the focus) answers no, and so does the page being drawn again under the question. Every question the screens ask is asked this way, on the page, never in a browser dialog (see [[Screens#Questions|Screens]]). A friend's world cannot be deleted from here, only forgotten.

### Exit game

**Exit game**, on the pause menu or the dead screen, saves the world under the loading screen ("Saving" and its name), which stays until the save is written, then goes back to the site's Worlds page. A host with friends in is asked first, since exiting closes the world to them: "Exiting closes the world to the friend with you. Exit?", or with more than one, the number of them. A guest's Exit game asks nothing.

## Numbers

- New worlds start at {{n census.constants.clock.START_HOUR}} o'clock.
- The Friends' worlds dots are asked of the relay while the page is up.

## With friends

A world is the host's: it lives in their browser, and friends play in it only while it is open, by its host's [[World rules|rules]]. A guest keeps nothing of a friend's world but its card under Friends' worlds. See [[Saving]].

## See also

- [[Maps]], [[Saving]], [[Characters]], [[Identities]]
- [[Hosting]], [[Joining]], [[Server worlds]]
- [[Screens]]

## Sources

<!-- sources at d7cf736 -->
- `src/settings.js:72`, `src/rules.js:13-14`, `server/relay.js` (at 26a0a8f): no Zombies attack villagers: gone from the settings, the world's rules, and a server world's; a stored value of it dropped (game #559)
- `src/save.js`: a world as a save in the browser that made it
- `src/ui/screens.js:197-220`, `src/main.js:1266-1268`: nothing runs until a world is chosen; out of a world, the site
- `index.html:51`, `src/ui/screens.js:778`: Play and Play in your browser open the Worlds page (game #120)
- `src/ui/screens.js:824-837`: the Worlds page's line, its three lists, and the buttons below
- `src/ui/screens.js:512-531`, `src/ui/screens.js:672-700`, `src/save.js:157-172`, `src/clock.js:96-102`: a card: the name and its mark, the survivor, the day and hour, when last played, the code; the main button big and the rest small (game #120)
- `src/ui/screens.js:680-690`: the buttons by where a world lives
- `src/ui/screens.js:722-732`: my worlds on the server with no copy here
- `src/ui/screens.js:734-749`: a friend's card: the dot, the survivor, the host, the code, Rejoin and Forget
- `src/main.js:1574`, `src/ui/screens.js:834`: Move to the server and A world of mine on the server only with a relay
- `src/main.js:1852`, `src/main.js:501-518`, `src/ui/screens.js:897-913` (at 5257b92): every world playable, its card naming its map; Play on a world of another map reloads onto that map and opens it; one on a map the game lacks is refused with a word (game #567)
- `src/ui/screens.js:1102-1120`, `src/ui/screens.js:500-515`, `src/main.js:487-499` (at 5257b92): the Map dropdown on the New world step, its blurb, the default name following it, a world on another map made on arrival (game #567)
- `src/settings.js:76`, `src/ui/screens.js` (at 5257b92): Unlimited mana among the switches of How it plays
- `src/ui/screens.js:266-267`: Back goes to Home
- `src/ui/screens.js:358`, `src/ui/screens.js:872-887`, `src/main.js:1568`: New world, its line, the default name
- `src/ui/screens.js:872-900`, `src/main.js:303-309`: the Sandbox step, its two parts and Next; the choices offered as last chosen
- `src/settings.js:70-72`, `src/ui/screens.js:361-367`, `src/kit.js:46-61`: Dev bag and Extra starting items at the Sandbox step, a list that does not fit refused at Next
- `src/ui/screens.js:1156`: Into the world (game #568; it read Into the valley before)
- `src/main.js:325-359`, `src/ui/screens.js:242-250`: the world made at the spawn behind the loading screen, saved at once, its ground baked before the screen goes; the site hidden
- `src/clock.js:18`: `START_HOUR`
- `src/main.js:362-413`: Play reads the save behind the loading screen, opens to friends again if it was open
- `src/ui/screens.js:76-108`, `src/ui/screens.js:379`: Delete's question, asked on the page, Cancel focused, answered no by Cancel, Escape, or a redraw (game #507, at d7cf736)
- `src/ui/screens.js:289-295`, `src/main.js:462-498`: Exit game asks a host with guests, saves under the loading screen until written, and shows the Worlds page
- `src/ui/screens.js:489-505`, `src/ui/screens.js:737-741`, `src/net.js:398-405`: the dots asked of the relay
- `src/main.js:450-451`: a guest never saves
