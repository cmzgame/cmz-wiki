---
title: Sound
categories: [Interface, Mechanics]
aliases: [Sounds, Audio, Footsteps, Volume, Mute, F8]
summary: What the game sounds like so far: footsteps and the dead's shuffle, a swing, a shove, a hit, the bow, a spell, a spell refused for want of mana, a prayer, the dead falling and dying, moaning as they come and striking doors and fences, doors and shutters, heard by distance; F8 mutes.
numbersOk: true
---

<!-- typed: the Volume row's default as the screen labels it, `src/settings.js:69` -->

The game's **sounds** are made by the game itself when it loads, from noise and simple tones, so nothing is downloaded and every player hears the same ones. So far there are footsteps, the dead's shuffle, a swing, a shove, a hit, the bow, a spell's cast, the dead falling and dying, and doors and shutters. Fire, the countryside, and the dead's own voices are to come.

## How it works

### What makes a sound

- **Footsteps:** every walking character steps as its foot comes down, about four steps a second. The step sounds of the floor under it, on its own floor (planks upstairs, never the grass under them; on a stair the floor its landing takes): dirt (farm soil too), wood, stone (cobble too), or shallow water. Grass, and any floor without a step of its own, sounds the dead's shuffle. Only the {{n sounds.footsteps.nearest}} nearest walkers are heard at once.
- **The dead** shuffle instead of stepping, quieter than a footfall, whatever the floor.
- **A swing** whooshes as it is made, loudest at the click, as the [[Combat|swing timer]]'s bar starts to fill. A weapon whose swing takes {{n sounds.swing.heavyAt seconds}} or more (the [[Halberd]]) makes a heavier, lower whoosh. With a weapon in each hand, each hand's swing makes its own, the off hand's by its own weapon (see [[Dual wielding]]).
- **A shove** (`Space`) has a short push of its own as it is made, whether or not it reaches anyone. See [[Shove]].
- **A hit** thuds wherever a hit lands: a blow on one of [[The dead]], a bite on a player, an arrow, a fireball. It sounds with the [[Interface#Floating numbers|floating number]], and the Floating numbers setting off does not silence it.
- **The bow:** a drawn [[Hunting bow]] creaks for as long as it is held, the creak rising from {{pct sounds.bow.rateFrom}} to {{pct sounds.bow.rateTo}} of its speed as the draw fills, and stopping when the draw ends. Letting go twangs, and the arrow thumps where it comes down. A draw let go too early to shoot makes no twang. See [[Archery]].
- **A spell** makes one sound as it is cast, when the [[Staff of Fire]]'s spell is let go. It has no draw and no twang.
- **Not enough mana:** a spell refused for want of [[Mana]] makes a short falling note, and **a prayer** at the [[Altar]] a rising one as its bar begins. Each is heard only by the player it concerns, at full strength wherever they stand, since its picture is that player's own bars.
- **A thrown spear, knife, or axe** has no sound of its own yet. A [[Poisoned arrow|poisoned arrow]] thumps where it comes down as any arrow does.
- **The dead fall and die:** one of the dead knocked down thumps to the ground, and one killed makes a heavier sound of its own (only that, if one blow floors and kills it).
- **The dead moan** as they come for someone: one that was standing, wandering, searching, or waiting turns to chase a player, or to break in at a door or shutters, or to push at a fence, and moans. One of the dead moans no more often than every {{n sounds.moan.again seconds}}, and no moan follows another sooner than {{n sounds.moan.gap seconds}} after it, so a crowd turning at once gives one, not a drone. One already chasing, or turning back to the chase from a bite, is silent.
- **The dead strike:** a blow of the dead on a door, shutters, boards, or a fence makes a knock, the same for all of them, as the wall gives its small jolt.
- **Doors and shutters** creak as they open or shut, with the same creak for both, on your own floor and on the storeys above and below it; one a storey away at {{pct sounds.openings.storeyVolume}} of its loudness. Only an opening already in earshot sounds: a door that changed while you were away is silent when you come back to it. A door broken by the dead makes no creak; the sound of breaking is to come.

### Hearing

A sound is heard from where your own character stands, or from the middle of the screen when they are dead. It is loudest close by, falls away with distance, and past {{n sounds.slots.hit.radius tiles}} is not heard at all. There is no left or right: a sound is never placed to one side.

Nothing sounds until the page has been clicked or a key pressed once: browsers keep a new page silent until then. A hidden tab is silent, and comes back without a burst of what it missed.

`F8` turns every sound off or on again, whatever is open, and says "Sound off." or "Sound on." It is the same switch as the Sound row of [[Settings]].

### The visual twin

Each sound that tells you something has a picture that says the same: a swing has its animation and the swing timer, a hit its red number, its push, and its brief freeze, the bow its drawing pose, a fall and a death the body on the ground, a moan the dead turning to come at you (and, when one calls the others, its "{{n tuning.zombie.pullText}}" and a "{{n tuning.zombie.pullBubble}}" over each that answers, see [[Sight-pull]]), a strike the wall's jolt, a door its leaf, a refused cast the mana bar's flash, and a prayer its bar over the altar and then the bars filling. Footsteps are seen as the walk. `F8`'s line says what it did.

## Numbers

- Heard within: {{n sounds.slots.hit.radius tiles}}.
- Footsteps heard at once: {{n sounds.footsteps.nearest}}.
- A heavy swing from: {{n sounds.swing.heavyAt seconds}} of swing.
- Doors and shutters listened for within: {{n sounds.openings.radius tiles}}.
- Sounds at once, in all: {{n sounds.voices}}.
- One of the dead moans at most every {{n sounds.moan.again seconds}}, and any moan at most every {{n sounds.moan.gap seconds}}.

## With friends

Each player hears their own world as their own screen shows it: a friend's footsteps, swing, shove, and bow as their figure moves, a hit as its number appears, a door as it is seen to open, a body as it falls. Your own swing and shove sound at once; the hit a blow lands comes a moment later with the host's word, as its number does. An arrow is heard landing where it was last seen in flight, which on a friend's screen can be a step short of where it lies. Nothing extra is sent between players for sound. `F8` is your own: it mutes only your game.

## Settings that change it

- **Sound** (default On) and **Volume** (default 75%), on the Sound tab of [[Settings]]. `F8` switches Sound.

## See also

- [[Settings]]
- [[Controls]]
- [[Combat]]
- [[Interface]]

## Sources

<!-- sources at 3c68f9c -->
- `src/entities/zombie.js:559-587` (at 5eb40e6): a call's line and the answers' marks, drawn when one of the dead calls the others (game #504)
- `src/sound-gen.js`, `src/main.js:1478-1492`: the sounds made at load from noise and tones, the same on every boot, each recipe; the boot stage
- `data/sounds.json`: the slots, their radius and voices, the footsteps' floors and the default shuffle, the swing's heavy threshold, the bow's rate, the openings' radius
- `src/sound-cues.js:114-147`: a step as a walk turns to a contact frame, by the floor under it, a floor with no step of its own the shuffle; the dead's shuffle; the nearest walkers only
- `src/sound-cues.js:153-211`: a swing and a shove when their cooldowns rise, heavy by the length of its swing; the bow's creak while the draw is up, its rate by the draw; the twang and a spell's cast when the recovery is set; no twang on a dry release; a spear silent
- `src/sound-cues.js:191-192`, `src/sound-cues.js:228-231`: each hand's swing its own, the off hand's slot from the off weapon (game #450, at 261cd7a)
- `src/sound-cues.js:213-222`, `src/floaters.js`: a hit from every damage event, through the ear's own cursor
- `src/sound-cues.js:224-243`: a fall when one of the dead goes down, a death when one dies, only the death if both
- `src/sound-cues.js:245-269`: an arrow's landing where it was last in flight
- `src/sound-cues.js:271-308`: doors and shutters in earshot, a change creaks, a break or an opening first heard is silent
- `src/audio.js:131-147`, `src/audio.js:188-228`, `src/sound-cues.js:148-151`: heard from your character or the camera, by distance, nothing past the radius, no panning; a held sound for the bow
- `src/audio.js:57-68`, `src/main.js:1923`: silent until the first click or key; a hidden tab silent, a fresh start on return
- `src/main.js:1924-1934`, `src/ui/screens.js:33`: F8 switches Sound with its line, any panel up; on the Controls screen
- `src/sound-cues.js:1-11`: each client hears what it sees; nothing new crosses the wire
- `src/settings.js:30-31`, `src/settings.js:68-69`: the Sound and Volume rows
- `src/sound-cues.js:262-292`, `data/sounds.json` `moan`, `src/main.js`: the moan from a calm state to the chase, a breach, or a press, throttled; the strike with the jolt the host draws and a guest's fx (game #436, at fa2997f)
- `data/sounds.json:284-311`, `src/sound-cues.js:178-201`: `mana_short` with the bar's flash and `pray` as the prayer's bar begins, each heard by that player alone, at no place (game #488, at 0fa02e5)
