---
title: Sound
categories: [Interface, Mechanics]
aliases: [Sounds, Audio, Footsteps, Volume, Mute, F8]
summary: What the game sounds like so far: footsteps and the dead's shuffle, a swing, a shove, a hit, the bow, a spell, the dead falling and dying, doors and shutters, heard by distance; F8 mutes.
numbersOk: true
---

<!-- typed: the Volume row's default as the screen labels it, `src/settings.js:69` -->

The game's **sounds** are made by the game itself when it loads, from noise and simple tones, so nothing is downloaded and every player hears the same ones. So far there are footsteps, the dead's shuffle, a swing, a shove, a hit, the bow, a spell's cast, the dead falling and dying, and doors and shutters. Fire, the countryside, and the dead's own voices are to come.

## How it works

### What makes a sound

- **Footsteps:** every walking character steps as its foot comes down, about four steps a second. The step sounds of the floor under it: dirt (farm soil too), wood, stone (cobble too), or shallow water. Grass, and any floor without a step of its own, sounds the dead's shuffle. Only the {{n sounds.footsteps.nearest}} nearest walkers are heard at once.
- **The dead** shuffle instead of stepping, quieter than a footfall, whatever the floor.
- **A swing** whooshes as it is made, loudest at the click, as the [[Combat|swing timer]]'s bar starts to fill. A weapon whose swing takes {{n sounds.swing.heavyAt seconds}} or more (the [[Halberd]]) makes a heavier, lower whoosh.
- **A shove** (`Space`) has a short push of its own as it is made, whether or not it reaches anyone. See [[Shove]].
- **A hit** thuds wherever a hit lands: a blow on one of [[The dead]], a bite on a player, an arrow, a fireball, a villager hurt. It sounds with the [[Interface#Floating numbers|floating number]], and the Floating numbers setting off does not silence it.
- **The bow:** a drawn [[Hunting bow]] creaks for as long as it is held, the creak rising from {{pct sounds.bow.rateFrom}} to {{pct sounds.bow.rateTo}} of its speed as the draw fills, and stopping when the draw ends. Letting go twangs, and the arrow thumps where it comes down. A draw let go too early to shoot makes no twang. See [[Archery]].
- **A spell** makes one sound as it is cast, when the [[Staff of Fire]]'s spell is let go. It has no draw and no twang.
- **A thrown spear** has no sound of its own yet.
- **The dead fall and die:** one of the dead knocked down thumps to the ground, and one killed makes a heavier sound of its own (only that, if one blow floors and kills it).
- **Doors and shutters** creak as they open or shut, with the same creak for both. Only an opening already in earshot sounds: a door that changed while you were away is silent when you come back to it. A door broken by the dead makes no creak; the sound of breaking is to come.

### Hearing

A sound is heard from where your own character stands, or from the middle of the screen when they are dead. It is loudest close by, falls away with distance, and past {{n sounds.slots.hit.radius tiles}} is not heard at all. There is no left or right: a sound is never placed to one side.

Nothing sounds until the page has been clicked or a key pressed once: browsers keep a new page silent until then. A hidden tab is silent, and comes back without a burst of what it missed.

`F8` turns every sound off or on again, whatever is open, and says "Sound off." or "Sound on." It is the same switch as the Sound row of [[Settings]].

### The visual twin

Each sound that tells you something has a picture that says the same: a swing has its animation and the swing timer, a hit its red number, its push, and its brief freeze, the bow its drawing pose, a fall and a death the body on the ground, a door its leaf. Footsteps are seen as the walk. `F8`'s line says what it did.

## Numbers

- Heard within: {{n sounds.slots.hit.radius tiles}}.
- Footsteps heard at once: {{n sounds.footsteps.nearest}}.
- A heavy swing from: {{n sounds.swing.heavyAt seconds}} of swing.
- Doors and shutters listened for within: {{n sounds.openings.radius tiles}}.
- Sounds at once, in all: {{n sounds.voices}}.

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
- `src/sound-gen.js`, `src/main.js:1478-1492`: the sounds made at load from noise and tones, the same on every boot, each recipe; the boot stage
- `data/sounds.json`: the slots, their radius and voices, the footsteps' floors and the default shuffle, the swing's heavy threshold, the bow's rate, the openings' radius
- `src/sound-cues.js:114-147`: a step as a walk turns to a contact frame, by the floor under it, a floor with no step of its own the shuffle; the dead's shuffle; the nearest walkers only
- `src/sound-cues.js:153-211`: a swing and a shove when their cooldowns rise, heavy by the length of its swing; the bow's creak while the draw is up, its rate by the draw; the twang and a spell's cast when the recovery is set; no twang on a dry release; a spear silent
- `src/sound-cues.js:213-222`, `src/floaters.js`: a hit from every damage event, through the ear's own cursor
- `src/sound-cues.js:224-243`: a fall when one of the dead goes down, a death when one dies, only the death if both
- `src/sound-cues.js:245-269`: an arrow's landing where it was last in flight
- `src/sound-cues.js:271-308`: doors and shutters in earshot, a change creaks, a break or an opening first heard is silent
- `src/audio.js:131-147`, `src/audio.js:188-228`, `src/sound-cues.js:148-151`: heard from your character or the camera, by distance, nothing past the radius, no panning; a held sound for the bow
- `src/audio.js:57-68`, `src/main.js:1923`: silent until the first click or key; a hidden tab silent, a fresh start on return
- `src/main.js:1924-1934`, `src/ui/screens.js:33`: F8 switches Sound with its line, any panel up; on the Controls screen
- `src/sound-cues.js:1-11`: each client hears what it sees; nothing new crosses the wire
- `src/settings.js:30-31`, `src/settings.js:68-69`: the Sound and Volume rows
