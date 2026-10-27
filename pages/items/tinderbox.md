---
title: Tinderbox
categories: [Items, Tools, Light]
aliases: [Tinder]
summary: The tool that lights a torch with T, a campfire or a mounted torch when used on it, and any fire from its own menu, and burns a body of the dead away; every new character starts with one, and it never wears out.
---

{{infobox-item tinderbox}}

The **tinderbox** is a flame you carry. It lights a [[Torch]], a [[Campfire]], a [[Fireplace]], a [[Fire pit]], a lantern, or a torch mounted in a bracket or on a post, and it is one of the two flames (with a lit torch) that a fire which is out needs to be lit from its own menu. Every new character starts with one in the bag, beside the torch in their hand, which starts out. With a [[Log]], it is what burns a body of the dead away (see [[Corpses#Burning a body|Corpses]]). It can also ride in a slot of the [[Belt]]. It never wears out and is never used up. Nothing makes one yet, and the only other is in the [[Developer chest]]. It is drawn as a matchbox.

## Using it

- **`T`**: with a tinderbox on you, `T` lights the torch in your hand, or else the one on your belt ("You light the torch."). Without one, `T` can still put out a lit torch, but it cannot light one: "You need a tinderbox to light it." See [[Torch#Lit or out|Torch]].
- **[[Use]]** it on what you want lit:
  - a campfire that is out but has fuel in it ("You light the campfire.");
  - a fireplace, a fire pit, or a lantern that is out ("You light the fireplace.", "You light the fire pit.", "You light the lantern."); these burn no fuel (see [[Fire#The home lights|Fire]]);
  - a torch on a torch post, or on a wall in its bracket, that is out ("You light the torch."); its hover card calls the second "a torch on a wall";
  - an unlit torch in your hand or on your belt (with the bag open, click its slot).
- **[[Use]]** it on a body of the dead to burn it; nothing is spent: the body burns for {{n tuning.work.burnCorpse.hours}} hour of the game's clock and is then gone, with everything in it. Its hover card says "Use on a body of the dead: burn." The body's own **Burn corpse** menu entry does the same after a bar of {{n tuning.work.burnCorpse.seconds seconds}}, with the tinderbox anywhere you carry it or a lit torch in a hand. See [[Corpses#Burning a body|Corpses]].
- **Light the torch** on the right-click menu of a bracket or a post holding a torch that is out lights it with the tinderbox you carry (see [[Torch posts and brackets]]).
- **Light the ...** on the menu of a campfire, a fireplace, a fire pit, a lantern, an [[Oven]], or a [[Forge]] that is out needs a flame on you (and, for the campfire, the oven, and the forge, fuel in it or on you): a tinderbox anywhere you carry it, or a lit torch in a hand or on the belt. Without one the entry reads "(need a tinderbox or a flame)", `E` passes it by, and a click says "You need a tinderbox or a lit torch to light it." Feeding a fire that is burning needs none (see [[Fire]]).

The target of a Use or of **Light the torch** must be within {{n census.constants.burn.DIP_REACH tiles}} of you, in sight: never through a wall or a shut door. Each refusal says why: "It is already burning.", "It has nothing to burn.", "There is no torch there." (an empty bracket or post), "It is already lit.", "Too far away.", "There is a wall in the way.", or, for a torch in the bag, "Only a torch in a hand or on the belt can be lit that way." Used on an oven or a forge, it says "That cannot be lit."; those are lit from their own menus, above.

A lit torch does everything a tinderbox does here, so one lit torch can light another, and a lit torch Used on a body of the dead burns it too. A torch goes out whenever it leaves a hand, the belt, or a holder, so a torch put away in the bag needs a flame to be lit again.

{{item-sections tinderbox}}

## With friends

`T`, a Use, a fire's menu, and a body's Burn corpse are carried out by the host for whoever asked, with that player's own tinderbox or torch, and what they light is lit for everyone and kept in the save. A guest's Use on a wall bracket names the bracket by where it is on its wall.

## Sources

<!-- sources at 3c0a243 -->
- `data/items.json:19`: the tinderbox: a tool, 1 by 1, no wear; `belt`, so it may ride the belt (game #222)
- `data/items.json`: its drawn icon and world picture, a matchbox (game #337, at 232d0fb)
- `src/ui/inventory-actions.js:107-113`: a belt slot takes a food, a skin, or an item marked `belt`
- `data/kit.json`: the starter kit's tinderbox in the bag beside the torch in hand, out
- `data/loot.json`: the dev kit's tinderbox; no other table holds one
- `data/recipes.json`: no recipe makes one
- `src/interact.js:1160-1181`: `T` lights a torch only with a tinderbox carried, douses without one; its messages
- `src/inventory.js:113-122`: a tinderbox counted in the hands, the belt, or the bag
- `data/interactions.json`, `src/burn.js:79-176`: the `light` verb: a tinderbox or a lit torch used on a campfire with fuel, a torch on a post or in a bracket, or an unlit torch in a hand or on the belt; never an oven or a forge; its refusals, a lantern's and an empty bracket's among them; within `DIP_REACH` and in sight
- `src/interactions.js:34-43`, `src/interact.js:831-838`, `src/main.js:819-829`: a Use on a wall bracket, any bracket under the cursor, after a character and a prop (game #172)
- `src/inventory.js:318-332`, `src/interact.js:361-394`: a fire's menu lights one that is out only with a flame on you, the tinderbox anywhere carried; the label, the refusal, not E's (game #169)
- `src/burn.js:56`: the reach
- `src/use.js:94-104`: a Use runs the verb and says its line, or the reason
- `src/interact.js:423-435`: Light the torch on a holder's menu
- `src/map.js:284-312`: what can be lit, touched for the save and the wire
- `src/items.js:198-211`: a torch out when it leaves a hand, the belt, or a holder
- `src/ui/inventory-actions.js:442-476`, `src/main.js:1021-1032`: a guest's Use, by the item's uid and the slot, a bracket by its tile and edge, run on the host as that player
- `src/net.js:599-607`: a guest's menu choice run on the host as that player
- `src/burn.js:87-120`, `data/interactions.json`: a fireplace, a fire pit, and a lantern that is out are lit by the light verb, each naming itself; "You light the campfire."; no longer "A lantern is always lit." (game #421, at 1bcb6ed; the fire pit's row, game #527, at c3cb736)
- `data/interactions.json:17`, `src/interactions.js:39`, `src/item-info.js:32`: a tinderbox used on a body of the dead runs `burncorpse`; its card's words for the target (game #434, at fa2997f)
- `data/tuning.json:198`, `src/burn.js:76-87`, `src/burn.js:129-146`, `data/interactions.json:18`: the tinderbox carried anywhere or a lit torch, nothing spent, the hour; a lit torch Used on a body (games #434, #508, at d7cf736)
- `src/interact.js:1866-1885`: Burn corpse on a body's menu, a bar of `seconds`, by the body's id for a guest (game #434, at fa2997f)
- `src/item-info.js:37` (at 91bafc1): the card's word for a torch in a bracket, "a torch on a wall" (game #532)

{{navbox items}}
