---
title: Sound
categories: [Interface, Mechanics]
aliases: [Sounds, Audio, Footsteps, Volume]
summary: What the game sounds like so far: footsteps by the floor under them, the dead's shuffle, a swing, and a hit, heard by distance.
numbersOk: true
---

<!-- typed: the Volume row's default as the screen labels it, `src/settings.js:69` -->

The game's **sounds** are made by the game itself when it loads, from noise and simple tones, so nothing is downloaded and every player hears the same ones. So far there are footsteps, the dead's shuffle, a swing, and a hit; doors, the bow, fire, and the countryside are to come.

## How it works

### What makes a sound

- **Footsteps:** every walking character steps as its foot comes down, about four steps a second. The step sounds of the floor under it: grass, dirt (farm soil too), wood, stone (cobble too), or shallow water. Only the {{n sounds.footsteps.nearest}} nearest walkers are heard at once.
- **The dead** shuffle instead of stepping, quieter than a footfall, whatever the floor.
- **A swing** whooshes as it is made, loudest at the click, as the [[Combat|swing timer]]'s bar starts to fill. A weapon whose swing takes {{n sounds.swing.heavyAt seconds}} or more (the [[Halberd]]) makes a heavier, lower whoosh.
- **A hit** thuds wherever a hit lands: a blow on one of [[The dead]], a bite on a player, an arrow, a fireball, a villager hurt. It sounds with the [[Interface#Floating numbers|floating number]], and the Floating numbers setting off does not silence it.

### Hearing

A sound is heard from where your own character stands, or from the middle of the screen when they are dead. It is loudest close by, falls away with distance, and past {{n sounds.slots.hit.radius tiles}} is not heard at all. There is no left or right: a sound is never placed to one side.

Nothing sounds until the page has been clicked or a key pressed once: browsers keep a new page silent until then. A hidden tab is silent, and comes back without a burst of what it missed.

### The visual twin

Each sound that tells you something has a picture that says the same: a swing has its animation and the swing timer, a hit its red number, its push, and its brief freeze. Footsteps are seen as the walk.

## Numbers

- Heard within: {{n sounds.slots.hit.radius tiles}}.
- Footsteps heard at once: {{n sounds.footsteps.nearest}}.
- A heavy swing from: {{n sounds.swing.heavyAt seconds}} of swing.
- Sounds at once, in all: {{n sounds.voices}}.

## With friends

Each player hears their own world as their own screen shows it: a friend's footsteps and swing as their figure walks and swings, a hit as its number appears. Your own swing sounds at once; the hit it lands comes a moment later with the host's word, as its number does. Nothing extra is sent between players for sound.

## Settings that change it

- **Sound** (default On) and **Volume** (default 75%), on the Sound tab of [[Settings]].

## See also

- [[Settings]]
- [[Combat]]
- [[Interface]]

## Sources

<!-- sources at a6f7968 -->
- `src/sound-gen.js:1-8`, `src/sound-gen.js:84-166`, `src/main.js:1478-1492`: the sounds made at load from noise and tones, the same on every boot, each recipe; the boot stage
- `data/sounds.json`: the slots, their radius and voices, the footsteps' floors, the swing's heavy threshold
- `src/sound-cues.js:78-110`: a step as a walk turns to a contact frame, by the floor under it; the dead's shuffle; the nearest walkers only
- `src/sound-cues.js:116-145`: a swing when a hand's cooldown rises, heavy by the length of its swing
- `src/sound-cues.js:146-155`, `src/floaters.js`: a hit from every damage event, through the ear's own cursor
- `src/audio.js:131-147`, `src/sound-cues.js:58-70`: heard from your character or the camera, by distance, nothing past the radius, no panning
- `src/audio.js:57-68`, `src/audio.js:145`, `src/main.js:1919`: silent until the first click or key; a hidden tab silent, a fresh start on return
- `src/audio.js:149-177`: the voices at once, the quietest dropped
- `src/sound-cues.js:1-11`: each client hears what it sees; nothing new crosses the wire
- `src/settings.js:30-31`, `src/settings.js:68-69`: the Sound and Volume rows
