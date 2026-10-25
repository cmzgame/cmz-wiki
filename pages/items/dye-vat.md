---
title: Dye vat
categories: [Stations, Props, Clothing]
aliases: [Dye vats, Dyevat, Dyeing, Dye]
summary: A vat in the weaver's yard that dyes the clothes you wear or carry, and the linen satchel, in colours picked from a palette.
numbersOk: true
---

<!-- typed: the hover card's own lines quoted ("16 colours", "7 colours"); the picker's 3x figure is a literal in src/ui/dye-panel.js -->

{{infobox-prop dyevat}}

The **dye vat** recolours clothing. Three stand in the yard of [[The weaver]]. A vat makes nothing: it dyes what you wear or carry, from the [[Linen cap]] to the [[Hobnail boots]], in colours picked from a palette, and the colours are drawn on your figure for everyone. Dyeing is open to everyone and costs nothing. {{planned note="Crafting at level three is the dye vat's gate once the skills are built; until then no one is refused."}} {{planned note="A dye may come to cost a dye plant (woad, madder, weld) taken from what you carry; the game has the hook, but no colour names a cost (game #288)."}}

## Using it

Right-click a vat and choose **Use the dye vat**, or press `E` beside it, from within {{n census.constants.stations.REACH tiles}}. The picker opens at the top centre of the screen, titled "Dye vat", in place of any station's panel. The world runs while it is open. It closes on its ×, on Escape, or when you walk away from the vat or a wall comes between you.

The picker has, from top to bottom:

- **The figure**, on the left: your character in what they have on, the hands empty, drawn at 3x and turning through its facings, with the chosen garment on in the picked colours. A bag is shown on the back the same way.
- **Garment**: a button for every dyeable thing you have with you, the things worn first (marked "(worn)") in the order head, chest, hands, waist, legs, feet, back, then what is in your hands, then what is in your bag. Something on the belt, or inside another bag, is not listed. With nothing dyeable it says "Nothing you carry can be dyed." The first in the list is chosen when the picker opens.
- **A row of swatches per region** of the chosen thing, labelled with the region's name (**Cloth**, **Hat**, **Leather**, **Strap**), each swatch named on hover. The first swatch is always the item's own colour, named **Undyed**. A colour that is the item's own is shown only once, as Undyed: the [[Linen breeches]]' own brown is Walnut brown, and the boots' own is Dark brown. The [[Leather belt]] has one row instead, **Scheme**, of whole colourings (see below).
- **Colour**: the picked colours by name, as "Woad blue", or for a thing of two regions "Cloth undyed, Strap oxblood".
- **What it costs** and **Apply**. The note reads "Costs nothing." Apply is greyed while the picks are what the thing is dyed now, and greyed with the reason in the note when it cannot be done.

Pick a garment, pick its colours, and press **Apply**: the game says "Dyed." and the colours are on the item at once. A thing can be dyed again as often as you like, and picking Undyed puts its own colours back.

The reasons Apply can give:

- "Too far from the vat.": you have stepped back past the vat's reach, but not yet far enough to close the picker.
- "There is a wall in the way."
- "You don't have that with you.": the chosen thing has left your hands, bag, and clothes.
- "That is gone.": the vat is gone.

### What a dyed item looks like

- **On the figure:** a plain-drawn garment takes the colours as its own tones, one per region (the satchel's cloth and strap, the belt's leather and buckle). A painted one, like the [[Onion-head Hat]], is recoloured by the key tones its art names, in any slot; the rest of its paint and its outline are kept.
- **In the bag:** an item without a drawn icon is drawn as a block in its first colour. An item with a drawn icon (the [[Linen tunic]], the [[Linen breeches]], the [[Hobnail boots]]) keeps its icon as painted.
- **On the hover card:** a dyeable item's card says how it can be dyed, as "Can be dyed at a dye vat: 16 colours.", "Can be dyed at a dye vat: 16 colours for the cloth, 7 colours for the strap.", or "Can be dyed at a dye vat: {{n items.good_belt.dye.schemes.length}} schemes." The count is the whole palette, the item's own colour among them where it is one. A dyed item's card names its colours on its state line: "Woad blue", "Black and iron", "Cloth undyed, strap oxblood".

## The colours

What can be dyed, and from which palette:

- [[Linen cap]], [[Linen tunic]], [[Linen breeches]]: one region, Cloth, from the cloth palette.
- [[Onion-head Hat]]: one region, Hat, from the cloth palette.
- [[Work gloves]], [[Hobnail boots]]: one region, Leather, from the leather palette.
- [[Linen satchel]]: two regions, Cloth from the cloth palette and Strap from the leather palette, each picked on its own.
- [[Leather belt]]: one of its schemes, leather and buckle together.

The [[Rope belt]], the [[Burlap sack]], and the [[Rucksack]] cannot be dyed.

### The cloth palette

Bleached, Weld yellow, Saffron, Madder red, Rose madder, Crimson, Woad blue, Pale woad, Indigo, Lincoln green, Sage, Walnut brown, Russet, Orchil purple, Ash grey, and Black: {{n dyes.palettes.cloth.length}} colours.

### The leather palette

Natural leather, Tan, Walnut brown, Dark brown, Oxblood, Grey hide, and Black: {{n dyes.palettes.leather.length}} colours.

### The leather belt's schemes

The belt is dyed whole, its leather and its buckle together, as one of {{n items.good_belt.dye.schemes.length}} schemes, or Undyed:

- Natural leather and brass
- Dark brown and brass
- Black and brass
- Black and iron
- Oxblood and bronze
- Tan and iron

The belt's own buckle is the same brass as the vat's, so a scheme with brass names its buckle "undyed": the picker's Colour row reads "Leather black, Buckle undyed" and the card's state line "Black and undyed", though the swatch is named "Black and brass".

{{prop-sections dyevat}}

## Village stations

The village's dye vat stays where it stands, and none is made, unless the world was made with the rule **Village stations** set to Movable and craftable (see [[World rules]]). Then it can be picked up and carried like furniture, and another dye vat at the [[Workbench]]; one a player made works as the village's does.

## With friends

A guest's **Use the dye vat** is sent to the host and carried out there for that player; the host tells the guest, and the picker then opens on the guest's own screen, showing the guest's own clothes. **Apply** is a `dye` command naming the vat, the item, and a colour for each region; the host runs it for that player with the same checks, and "Dyed." or the reason is shown to the guest. The colours are kept on the item, so they ride in the player's record and in the save: everyone sees a dyed garment on whoever wears it, and it keeps its colours when it is taken off, dropped, or found on a body.

## Sources

<!-- sources at 31d330a -->
- `src/ui/station-panel.js:75-78`, `src/ui/station-panel.js:122`: a vat makes nothing and opens the picker, not a station's panel (game #417, at 31d330a)
- `data/maps/valley.json:3850-3872`, `tools/mapgen/valley.py:366-367`: three vats in the weaver's yard
- `src/dye.js:107-113`, `data/dyes.json:3`: the unlock, Crafting 3, open to all until the skills are built
- `src/dye.js:94-105`, `src/ui/dye-panel.js:142-147`: the cost hook; no colour names a cost, so "Costs nothing."
- `src/interact.js:906-920`: "Use the dye vat", a simple action, so `E` too
- `src/stations.js:21`, `src/dye.js:135-139`: the reach
- `src/ui/dye-panel.js:36-43`, `src/ui/dye-panel.js:192-199`, `src/main.js:873-878`: the picker, titled Dye vat; the world runs; it closes on ×, Escape, out of reach or behind a wall, or with the vat gone
- `src/ui/dye-panel.js:157-185`, `src/main.js:1562-1563`: the figure in the player's clothes, the hands empty, the chosen garment on in the picks, at 3x, turning
- `src/dye.js:122-132`, `src/ui/dye-panel.js:122-124`: the garments, worn first in slot order, then the hands, then the bag; "(worn)"; "Nothing you carry can be dyed."
- `src/ui/dye-panel.js:73-82`, `src/ui/dye-panel.js:93-100`: the first chosen on opening; the swatches start at its colours now
- `src/ui/dye-panel.js:126-140`: a row per region, Undyed first, the item's own colour not repeated; Scheme for an item with schemes
- `src/ui/dye-panel.js:141-147`: the Colour row; the note; Apply greyed when unchanged or refused
- `src/ui/dye-panel.js:102-108`, `src/dye.js:152-161`: Apply, "Dyed.", the colours set, or cleared when they are the item's own
- `src/dye.js:134-150`, `src/reach.js:8-9`: the refusals: "That is gone.", "Too far from the vat.", "There is a wall in the way.", "You don't have that with you."
- `src/ui/dye-panel.js:197`: the picker closes a tile past the reach, so "Too far from the vat." shows between
- `src/figure/wardrobe.js:44-45`, `src/figure/draw.js:145-173`: a plain garment drawn in its colours; a painted one recoloured by its key tones in any slot
- `src/ui/inventory-panel.js:239-240`, `data/items.json:29-32`: the block's colour where an item has no drawn icon; the tunic, breeches, and boots have drawn icons
- `src/item-info.js:110-112`, `src/item-info.js:149-150`, `src/dye.js:68-79`: the card's "Can be dyed" line, counting the whole palette, and the dyed state line
- `data/items.json:27-36`: each item's `dye` block, its regions and palettes, the belt's schemes; the rope belt, the sacks, and the rucksack have none
- `data/dyes.json:4-32`: the colours' names and the two palettes
- `data/items.json:34`, `data/dyes.json:26`, `src/dye.js:76-77`, `src/ui/dye-panel.js:114`: the belt's own buckle is the brass dye's hex, so it reads "undyed"
- `src/net.js:1260-1263`, `src/host.js:280-283`, `src/main.js:1847-1851`: a guest's menu entry sent to the host by its label; the use told to the guest, whose picker opens on its own screen
- `src/net.js:1298-1301`, `src/main.js:1060`, `src/host.js:192-200`, `src/host.js:295-299`: Apply on a guest is the `dye` command, run by the host as that player; its message goes to the guest
- `src/net.js:240`, `src/game.js:414-415`, `tools/check.js:763-772`: the worn entries, with their colours, in the player's record, the sync check, and the save
- `data/sprites/dyevat.json`, `data/recipes.json`, `src/placement.js:105-117`: the village's dye vat fixed unless Village stations moves it; its recipe behind the rule (game #431, at 49b8c44)

{{navbox props}}
