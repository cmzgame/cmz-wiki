---
title: Cauldron
categories: [Stations, Crafting, Items]
aliases: [Cauldrons, Your own cauldron]
summary: The station where potions and poisons are brewed, over a fire of logs under it; the witch's stands by the lane to the mere, and your own is made at the anvil and set down where you like.
---

{{infobox-station cauldron}}

The **cauldron** is the station for [[Potions]]: the healing, stamina, and mana potions and the two poisons are brewed in it, over a fire of [[Log|logs]] under it. There are two kinds. **The witch's cauldron** stands at the north end of the lane to the mere (see [[The witch's cauldron]]), where her cottage is to stand; anyone may use it, and it stays where it is. **Your own cauldron** is an item, made at the [[Anvil]] and set down from the bag wherever there is open floor, indoors or out, and picked up again when it is cold and empty.

## Using it

Its menu has:

- **Light the cauldron (a log)**, when it is out: it needs a log on you and a flame, a [[Tinderbox]] or a lit [[Torch]] (see [[Fire#A flame|Fire]]). The log goes in as its first fuel.
- **Feed the cauldron (n of max, h left)** while it burns, up to {{n sprites.cauldron.fire.maxFuel}} logs, and "The cauldron is full" when it holds them all. Each log burns {{n sprites.cauldron.fire.hoursPerUnit}} game hours.
- **Use the cauldron**, which opens its panel (see [[Crafting]]).

It cannot be put out: once lit, it burns its logs down. A [[Use]] of a flame, or a [[Fireball]] coming down beside it, does not light it ("That cannot be lit."). It gives light while it burns. It cooks nothing: it boils no water, and has no Cook here.

A brew needs the fire lit to start ("The fire is out."), and one under way waits while the fire is out. Each brew takes two herbs of one kind, a second ingredient, a [[Clay vial]], and a draught of clean water from a [[Waterskin]] you carry; the potion goes into the cauldron's output. See [[Potions#Brewing|Potions]] for the water and the herbs.

## Recipes

{{recipes cauldron}}

## Your own cauldron

The **Cauldron** item is made at the anvil from iron bars, with a [[Smith's hammer]] carried; it goes into your bag, {{n items.cauldron.size.0}} by {{n items.cauldron.size.1}} cells. Its recipe names no world rule, so it can be made in every world, whatever **Village stations** says.

- **Place**, on its menu in the bag, shows a ghost of it on the tile under the cursor, green where it may stand and red with the reason where it may not: open floor with nothing on it and no rug ("No room"), within reach ("Too far"). A click sets it down, cold and empty: "You set the cauldron down." Escape cancels.
- **Pick up cauldron** on its menu gives the item back, but only once it is cold and empty: "Its fire is still burning; let it burn down.", "It still has fuel in it; let it burn down.", "It is still making something.", or "Empty it first." for a potion left in its output. A lit cauldron burns down before it can be lifted.
- **Take apart**, as for anything you made, gives back half its iron bars, rounded down, with a smith's hammer carried, and is refused while it is lit, has fuel, or holds anything (see [[Building#Taking apart|Building]]).

Its card says "Place: set down on the floor." and that set down it is a station with its brews, over a fire of logs, picked up again while out and empty.

{{item-sections cauldron}}

{{where cauldron}}

## The witch's cauldron

The witch's cauldron starts cold and empty: the brewer brings the logs and the flame. It is not one of the village's stations, so its brews are open even in a world whose **Village stations** rule is Fixed, the default. It cannot be picked up, carried, or taken apart; it is no one's to lift. The witch herself, her cottage, and her garden are not in the game yet.

{{planned doc=29-world/02 note="The witch's cottage by the mere, the witch, who teaches Potions, and her garden."}}

## The sound it makes

None yet: its bubbling and the sound of a finished brew wait for the stations' sounds. See [[Sound]].

## With friends

A guest lights, feeds, and opens a cauldron through the same menu entries, sent to the host by their labels, and brews through the station panel's own commands; the host takes the ingredients and the water from that guest. The queue, the output, and the fire travel with the cauldron's tile, so every player sees the same brew. A guest makes their own cauldron at the anvil like any recipe, sets it down by a placement command with the item's id, and picks it up by its menu entry.

## Sources

<!-- sources at 0fa02e5 -->
- `data/sprites/cauldron.json`: one prop with its fire under it: logs, most fuel, hours a log, `burns`, `cooks: false`, `station: "cauldron"`, `carry: false`, `item: "cauldron"`, a placeholder box
- `data/maps/valley.json:8593-8616`, `tools/mapgen/valley.py:489-493`: the witch's cauldron, `cauldron_witch`, at the lane to the mere's north end, cold and empty
- `src/interact.js:463-497`: the fire's menu: Light with a log and a flame, Feed, full; no Put out
- `src/burn.js:198-200`, `src/burn.js:263`: not lit by a Use, never put out
- `src/interact.js:1068-1080`: Use the cauldron, the panel
- `src/stations.js:166-221`, `src/stations.js:360-372`: the water, "The fire is out.", the job that waits
- `data/recipes.json:1645-1660`: your own, three iron bars at the anvil, `uses: "smith"`, no rule
- `data/items.json:143`: the Cauldron item, its size, `place`, `stand: "ground"`
- `src/setdown.js:31-41`, `src/setdown.js:71-96`: set down on open floor, within reach; "You set the cauldron down."
- `src/setdown.js:98-134`, `src/interact.js:1023`: Pick up only for your own, cold, unfuelled, idle, and empty; the witch's has none
- `src/placement.js:590-623`, `src/interact.js:302-318`, `src/interact.js:1024`: Take apart for half the bars, the smith's tool, refused while it holds anything or burns
- `src/item-info.js:262-276`: the item's card: Place, and the station it is
- `src/rules.js`, `data/recipes.json`: no `rule` on the cauldron's rows, so Village stations never hides them
- `docs/47-potions-poisons-mana.md` (status): the cauldron's sounds not built

{{navbox making}}
