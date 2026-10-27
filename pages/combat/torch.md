---
title: Torch
categories: [Items, Weapons, Light]
aliases: [Torches, Lighting a torch, Dousing a torch]
summary: A light held in either hand, lit with a tinderbox, that burns down while it is lit; also a weak weapon whose blow may set the dead alight.
---

{{infobox-item torch}}

The **Torch** is a light first. Lit and held in either hand it lights the way, out to {{n items.torch.fire.radius tiles}}, and gives back your sight of [[The dead]] in the dark to that reach; at night it also draws their eye. It is lit with a [[Tinderbox]] and burns down while it is lit. Every new character starts with one in hand, not lit, and a tinderbox in the bag. It is made at the [[Workbench]] and is also a weak weapon.

## Lit or out

A torch is either lit or out. **A new torch is out**: one made at the workbench, one found, and the one every new character starts with.

`T` lights it and puts it out:

- With a torch in a hand, or else on the belt, `T` lights it if you carry a [[Tinderbox]] ("You light the torch."), and puts it out if it is lit ("You put out the torch."). With no tinderbox it says "You need a tinderbox to light it." A tinderbox never wears out.
- With no torch in a hand or on the belt, `T` takes one from your bag into a hand, still out ("You take the torch in hand. T lights it."). With none at all, "No torch on you."

A torch can also be lit by [[Use]]: use a [[Tinderbox]] or a lit torch on an unlit torch in your hand or on your belt, or on a torch that is out on a post or in a wall bracket ("You light the torch."). An unlit torch in your hand or on your belt used on a burning fire (a campfire, a lit fireplace or fire pit, the oven, the forge) or a lit torch on a post or in a bracket, is lit from it ("You light the torch at the fire."), and one used on a lit lantern, in a wall bracket or on a lantern post, is lit from the lantern ("You light the torch at the lantern."). The target must be within {{n census.constants.burn.DIP_REACH tiles}}, in sight, never through a wall, and a torch in the bag cannot be lit this way ("Only a torch in a hand or on the belt can be lit that way."). A mounted torch that is out, in a bracket or on a post, also has **Light the torch** on its menu, and a lit one **Put out the torch**, and a [[Fireball]] that comes down within reach of one, with no wall between, lights it too.

A lit torch is a flame: used on a campfire with fuel in it, it lights the fire, and so it does a fireplace, a fire pit, or a lantern that is out, and one in a hand or on the belt is a flame for lighting any fire that is out from the fire's own menu, as a tinderbox is (see [[Fire]]). A lit torch also burns a body of the dead: [[Use]] it on the body, or choose **Burn corpse** on the body's menu with the torch in a hand, and nothing is spent (an unlit one is refused, "The torch is not lit."; see [[Corpses#Burning a body|Corpses]]). Only a lit torch gives light, gives back your sight in the dark, draws the dead at night, and can set the dead alight. A torch that is out is a stick with a weapon's numbers.

**A torch goes out when it leaves a hand, the belt, or a holder**: put in the bag or a container, dropped on the ground, or taken down from a bracket or a post. A torch on a belt or in a bag that is dropped goes out with it, and so does every torch on a body when it falls. Moving a torch between a hand and the belt keeps it lit. Mounting it in a bracket or on a post keeps it as it was, lit or out (see [[Torch posts and brackets]]).

## Burning down

A lit torch burns down, whether or not it is giving light:

- **In a hand** it lasts {{n tuning.world.torchHeldLife seconds}} of the world's time.
- **On the belt**, in a bracket, or on a post, it burns more slowly, lasting {{n tuning.world.torchWallLife seconds}}.

A whole day is {{n census.constants.clock.DAY_LENGTH seconds}} (see [[The day]]); while everyone sleeps the world runs faster, and so does the burning. Two lit torches in hand both burn; a lit torch on the belt while one is held burns too, though only the held one gives light. A torch that is out does not burn.

The burning and the kills wear one meter, the torch's durability. When it is used up the torch is gone, from the hand or the belt, with "Your torch is spent." A torch in a bracket or on a post that burns out is gone from its holder, and players within {{n tuning.world.torchSpentRadius tiles}} of it read "A torch burns out." The village's own lights are lanterns, which never go out (see [[Torch posts and brackets]]).

## Light

Where you carry a lit torch decides how much light it gives: a full pool in a hand, more with one in each hand, less on the belt, none in the bag (see [[Light]]). In the dark you see the dead whole as far as your own torch's light reaches, where without one you see them only close by; a torch on the belt reaches {{n tuning.world.beltLight}} as far as one in hand, a little past the {{n tuning.sight.darkRadius tiles}} you see without one; the dead in its light are seen by your friends too (see [[Sight#Darkness|Sight]]). At night, a lit torch in hand counts as a sighting of its carrier for the dead that see its flame. Two torches are seen from farther, and a torch on the belt from less far (see [[The dead]] and [[Light]]).

## Combat

Left swings it. It has no other mode.

- It does {{n items.torch.weapon.damage}} damage, with a reach of {{n items.torch.weapon.range tiles}} and an arc of {{n items.torch.weapon.arc}} degrees.
- Stagger chance {{n items.torch.weapon.staggerChance}}; it never floors (see [[Stagger and knockdown]]).
- While it is lit, each of the dead a blow lands on has a {{n items.torch.weapon.ignite}} chance to be set alight, in either hand (see [[Burning]]). The spark comes before the damage, so a body the blow kills burns on. A torch that is out sets nothing alight.
- It loses durability like any weapon: on its own it would be spent after about {{n items.torch.weapon.kills}} kills (see [[Durability]]). The kills and the burning (above) wear the same meter.

In the off hand beside a weapon such as the [[Arming sword]] it counts as a weapon: clicking faster than the main weapon recovers swings the torch and leaves the player exposed (see [[Dual wielding]]). It may be held beside the [[Throwing spear]], and there it is only a light: it never swings.

{{item-sections torch}}

## With friends

`T` is part of each player's input and is carried out by the host for that player, so a guest lights and puts out their own torch the same way. The burning is worked out on the host, and every player sees each torch lit or out. A guest's copy of a mounted torch's wear catches up each time it burns down another hundredth.

## Sources

<!-- sources at 37e8726 -->
- `data/items.json:2`: the torch: either hand, `fire.radius`, `fire.burnsDown`, its `weapon` block, `kills`, `ignite`
- `data/interactions.json:18`, `src/burn.js:76-87`, `src/burn.js:129-146`: a lit torch Used on a body of the dead, or held for the menu's Burn corpse, burns it; an unlit one refused (game #508, at d7cf736)
- `data/recipes.json:4-21`: the torch recipe at the workbench
- `data/kit.json:9-10`, `src/kit.js:72`: the starter kit's torch in hand, out, and a tinderbox in the bag
- `src/items.js:20-22`, `src/items.js:191-211`: a new entry has no `lit`; a torch gives light only while lit; doused on leaving, with what a belt or a bag carries
- `src/interact.js:1278-1298`: `T`: the torch in hand, else on the belt, lit with a tinderbox carried, doused when lit; else the bag's taken into a hand; the messages
- `src/inventory.js:113-122`: a tinderbox counted in the hands, the belt, or the bag
- `src/grid.js:99`, `src/grid.js:130`, `src/grid.js:152`, `src/map.js:479`, `src/ui/inventory-actions.js:177`, `src/interact.js:493`, `src/entities/character.js:190`: doused into a bag, a container, or onto the floor, when taken from a holder, and on a body
- `src/map.js:254-284`: a mounted torch keeps its wear and whether it is lit
- `data/interactions.json:4-14`, `src/burn.js:79-175`, `src/burn.js:56`: the `light` verb: a tinderbox or a lit torch lights an unlit torch in a hand or on the belt, a mounted torch, or a campfire with fuel; an unlit torch is lit from a burning fire or a lit torch on a post or in a bracket (game #172), or a lantern (game #188); within reach and in sight; not a torch in the bag
- `src/inventory.js:315-330`, `src/interact.js:405-437`: a lit torch in a hand or on the belt a flame for a fire's menu (game #169)
- `src/interact.js:468-483`: Light the torch on a holder's menu
- `src/map.js:186-207`, `src/archery.js:288-291`: a fireball's landing lights a mounted torch that is out, within reach, with no wall between
- `src/game.js:521-546`, `src/game.js:559`, `data/tuning.json:146-147`: a lit torch burns down in the step, in a hand at `torchHeldLife`, on the belt at `torchWallLife`; spent, gone with the weapon's word
- `src/map.js:150-184`: a mounted torch burns at the wall rate; "A torch burns out."
- `src/clock.js:5`: the day's length
- `src/main.js:1721-1726`, `src/host.js:226-238`: "Your torch is spent." to its owner, "A torch burns out." to players within `torchSpentRadius` (`data/tuning.json:150`)
- `data/combat.json:10` `blow.knockdownChance`, `src/combat.js:373-374`: no `knockdown` of its own, so the default chance, 0: it never floors
- `src/combat.js:380-383`, `src/burn.js:26-33`: the blow's `ignite` chance rolled on each body it lands on, in the off hand too, before the damage, only while lit
- `src/combat.js:390`, `src/combat.js:398-408`, `src/items.js:24-37`: it loses durability and breaks like any weapon, on the same `wear`
- `src/combat.js:115-126`, `src/combat.js:297-307`, `src/combat.js:345-348`: in the off hand it swings when the main hand is recovering, leaving the player exposed; never beside the spear
- `src/items.js:125-138`: a torch is not a weapon beside the spear
- `src/game.js:687-699`, `src/game.js:511-519`, `src/items.js:213-220`: the carried light: a lit torch in hand, two in hand, else a lit one on the belt
- `src/entities/zombie.js:419-439`: a torch seen at night, two torches, the belt
- `src/sight.js:18-29`, `data/tuning.json:142`, `data/tuning.json:163`: the carrier's own torch sets how far it sees the dead in the dark; a belt torch's `beltLight` reach past `darkRadius` (game #173)
- `src/interact.js:1235`, `src/interact.js:1275`: `T` an event in the player's input, performed by the host's step
- `src/game.js:410-420`, `src/map.js:150-170`: a torch's lit state and wear reach every player; a mounted torch's wear sent at each hundredth
- `src/interact.js:1370-1385`: `T` puts a lit torch out, "You put out the torch."; `src/interact.js:528-560`: Put out the torch on a holder's menu; `src/burn.js:87-150`: a lit torch lights a switch or a lantern that is out (game #421, at 1bcb6ed)

{{navbox weapons}}
