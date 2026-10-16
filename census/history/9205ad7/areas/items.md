> **A record, not kept up** (filed under `census/history/9205ad7/` by the sweep, 2026-10-16; game #87): the items fact sheet of the first census, read from the game at `9205ad7` (2026-10-14). Its line numbers are that commit's; the live list is `census/discrepancies.md`, and a redone sheet goes beside the census, dated (`CLAUDE.md`, "The census").

# Items, the inventory, and making things

Game commit `9205ad7` (main, 2026-10-14). Code read at `.game/src`, data at `snapshot/data`. Line numbers are that commit's.

---

## 1. Item definitions (the registry)

**Rule:** Every item in the game is one row in `data/items.json`: a name, a size in bag cells, a kind, and optional blocks that say what it does (held, worn, eaten, drunk, a bag, a belt, a weapon, a light). There are 50 items.

**Numbers:**
- Fields seen across all rows (`snapshot/data/items.json`): `id`, `name`, `kind`, `size` [cols, rows], `color`, `short` (the placeholder block's label), `tags`, `stack` (max per stack; absent means one per entry), `hands` (`main` | `off` | `both` | `either`), `wear` (a worn slot), `bag` [cols, rows], `beltSlots`, `hunger`, `thirst`, `capacity` (water), `bandage`, `splitsInto`, `fire` (a carried light), `weapon`, `bow`, `shots`, `thrown`, `shield`, `noDual`, `held` (how it is drawn in hand), `verbs`, `icon`/`art`/`note`.
- Kinds and counts: tool 21, food 10, clothing 8, material 7, bag 3, drink 1, medicine 1, ammo 1.
- `heal` is read by `eat` (`src/entities/player.js:102`) but no item has it.
- `verbs` (pickaxe `mine`, hoe `till`, scythe `harvest`, shovel `dig`, knife `butcher/skin/cut`, hammer `smith/build`) is read by nothing in `src` today.
- Items with no weapon block and no `thrown` block: Book of Fire, Staff of Fire, Throwing Knife (stack 100), Throwing Axe (stack 100). They can be held but do nothing as weapons in this area's code.

**Code:** registry `src/items.js:43-64`; every entry is made by `makeEntry` with a uid from the world's counter `src/items.js:20`; size lookup `src/grid.js:13`.

**Confidence:** read in code and data.

---

## 2. Item list by kind (for the item pages)

**Rule:** What each item is, as the data has it.

**Numbers** (all `snapshot/data/items.json`; size is cols x rows):
- Food: Loaf of bread 1x1, hunger 40; Apple 1x1, stack 5, hunger 15, thirst 5; Wheel of cheese 1x1, hunger 30; Potato 1x1, stack 10, hunger 10; Cabbage stack 10, hunger 8; Garlic stack 10, hunger 3; Pumpkin stack 5, hunger 12; Roast potato stack 10, hunger 20; Stew stack 3, hunger 50, thirst 10; Porridge stack 5, hunger 30.
- Drink: Waterskin 1x2, capacity 100.
- Medicine: Bandage 1x1, stack 5, tag cloth.
- Materials: Log 2x3 (splits into 3 planks; tags fuel, wood); Plank 1x3 (holdable either hand, a weapon: 16 dmg, 5 kills); Charcoal 1x1 stack 20 (tag fuel); Iron ore stack 20; Iron bar stack 10; Grain stack 20; Flour stack 20.
- Ammo: Arrow 1x2, stack 20.
- Clothing: Cap (head), Hood (head), Tunic 2x2 (chest), Gloves (hands), Breeches 2x2 (legs), Boots 1x2 (feet), all tag cloth; Rope belt 2x1 (waist, 2 belt slots); Good belt 2x1 (waist, 4 belt slots).
- Bags (worn on back): Burlap sack 2x2 item, grid 6x4; Rucksack 2x3 item, grid 8x5; Developer Bag 2x2 item, grid 12x8.
- Tools and weapons (hands): Torch 1x2 either (light radius 3, also a weapon 8 dmg, 5 kills); Hatchet 1x2 either (30 dmg, 20 kills); Stick 1x3 either (14, 5); Sword 1x3 either (34, 60); Halberd 1x5 both (30, 80; alt thrust 40); Mace 1x2 either (38, 40); Throwing spear 1x4 main, noDual (30, 25; thrown 114); Bow 2x3 both (100 shots); Shield 2x2 off; Pickaxe 1x2 (20, 5); Hoe 1x3 (10, 5); Scythe 1x3 (18, 5); Shovel 1x3 (14, 5); Knife 1x1 (12, 5); Hammer 1x2 (16, 5); Book of Fire 1x1; Staff of Fire 1x4; Throwing Knife 1x1 stack 100; Throwing Axe 1x1 stack 100.
- Tags in use: cloth, container, cooked, drink, food, fuel, herb, metal, raw, tool, wood.

**Code:** n/a (data).

**Confidence:** read in data.

---

## 3. The bag is an item; the tetris grid

**Rule:** You carry things in the bag on your back, not in yourself. The bag's grid is a tetris board: every item is a rectangle of cells, can be rotated, stacks merge, and there is no weight. With no bag on your back you have no grid.

**Numbers:**
- Starting bag: Burlap sack 6x4 (`items.json` `small_sack.bag`); Rucksack 8x5; Developer Bag 12x8.
- Placement scan: top to bottom, left to right, unrotated first, then rotated (`src/grid.js:45-56`).
- Stacks merge only when their `fill` matches (`src/grid.js:58`); adding tops up existing stacks first (`src/grid.js:64-84`).
- Tidy repacks biggest first; if the repack fails nothing changes (`src/grid.js:155-178`).
- Panel cell 38 UI px, icon 19 px a cell (`src/ui/inventory-panel.js:21-23`).

**Code:** `src/grid.js` (whole file, copied unchanged from the parent); a bag's grid is made on first use and travels with the entry `src/inventory.js:27-32`; the player's grid is `bagOf` = the worn back slot `src/inventory.js:43`.

**Confidence:** read in code.

---

## 4. The panels: bag (Tab) and character screen (C)

**Rule:** Tab opens the bag; C opens the character screen (the doll with seven worn slots and two hands). They open and close independently and can be dragged by their headers (remembered). Drag to move, drop outside a panel to drop on the floor, shift-click or double-click to send across to the open container, right-click for the item menu. While dragging, R, a right click, or the mouse wheel rotates. Tidy repacks. With no bag worn, Tab opens the character screen and says "No bag on your back." While carrying furniture, Tab and C say "Your hands are full."

**Numbers:**
- Doll layout: belt top-left, bag top-right, head, chest, legs, feet down the middle, main hand left, off hand right, gloves under the main hand (`src/ui/inventory-panel.js:29-35`).
- Drag threshold 4 screen px (`src/ui/inventory-panel.js:24`).
- Double-click: in your bag equips (holdable) or wears; on a slot runs the slot menu's first entry; otherwise sends across (`src/ui/inventory-panel.js:75-89`, `src/ui/inventory-actions.js:167-179`).
- Rotate is added to the item menu only for non-square items, enabled only if it fits rotated (`src/ui/inventory-panel.js:676-690`).
- Wear bar on an icon once `wear > 0`, marked low above 0.8 wear (`src/ui/inventory-panel.js:237`).

**Code:** keys `src/main.js:735-749`; panel `src/ui/inventory-panel.js`; handlers `src/ui/inventory-actions.js:50-184`.

**With friends:** a guest's panel draws its replica; every drag, drop, double-click, shift-click, Tidy, Rotate, and menu entry is sent to the host as a command by entry uid, slot id, and bag address, and the host runs the same handlers as that player (`src/ui/inventory-actions.js:200-358`). A container that is not the guest's own must be within its close distance on the host (`src/ui/inventory-actions.js:276-284`).

**Confidence:** read in code.

---

## 5. The one container rule

**Rule:** A container (any item with a grid or belt slots: bags and belts) can go inside another container only while it is empty. A full bag must be worn or dropped. Labels say "(empty it first)" or "(empty it first, or wear it)".

**Numbers:** none.

**Code:** `isContainer`, `containerEmpty`, `canStoreIn` `src/inventory.js:159-173`; enforced on pick-up `src/interact.js:224-261`, on Take/Store `src/interact.js:1067-1077`, on drag into a grid `src/ui/inventory-panel.js:592`, on drop from a slot into a grid `src/ui/inventory-actions.js:129`, on shift-click `src/ui/inventory-panel.js:667`.

**Exceptions seen:** a dead body's grid takes the body's whole sack with its contents in it (`src/entities/character.js:139-161` inserts every entry); the host's grid-to-grid command (`src/ui/inventory-actions.js:323`) calls `grid.moveEntry` with no container check, relying on the guest's panel to refuse (inferred: only a hand-made command could break the rule).

**Confidence:** read in code.

---

## 6. Hands: main, off, both, either

**Rule:** You have two hands. An item's `hands` says where it may go: `main`, `off`, `both` (takes both), or `either` (whichever is free, or the one you choose). Equipping swaps what was in the hand into the bag or belt; if that cannot be stowed, the equip is refused. A two-handed item pushes out the off hand's item and remembers it; the next one-handed item into the main hand brings it back once. A spear (`noDual`) is never held beside another weapon (a shield or torch is fine).

**Numbers:**
- `either` with no preference: main if free, else off if free, else main (swap) (`src/inventory.js:199`).
- Off-hand memory restored once (`src/inventory.js:226-234`).
- "Weapon" for the dual rule: a weapon block without `fire`, or a bow, or a thrown block (`src/items.js:121-123`).

**Code:** `canHold`, `pickHand`, `hold`, `release` `src/items.js:112-172`; `equip` `src/inventory.js:194-224`; `equipFrom` (failure message "Your hands are full.", item put back or dropped at your feet) `src/interact.js:890-898`; `unequip` ("Nowhere to put it.") `src/interact.js:877-887`; hand-to-hand drag swaps the two `src/ui/inventory-actions.js:89-98`.

**Confidence:** read in code.

---

## 7. Worn slots and clothing

**Rule:** Seven worn slots: head, chest, hands (gloves), legs, feet, waist (the belt), back (the bag). An item's `wear` names its slot; a drag onto the wrong slot is refused. Wearing over an occupied slot swaps the old one into your bag (or refuses, "No room to take the old one off."); a bag on the back swaps by dropping the old bag at your feet with everything in it. Clothes do nothing beyond being worn and drawn on the figure.

**Numbers:** slots `src/inventory.js:9`; wear check `src/ui/inventory-actions.js:66`.

**Code:** `wearFrom` `src/interact.js:901-923`; floor "Wear X" / "Wear X (swap)" / "Swap bags (drop your ...)" `src/interact.js:168-189`; slot menu Take off (back slot sets the bag down; other slots stow or fall to the floor, "No room in your bag; it is on the floor.") `src/interact.js:1108-1122`.

**Confidence:** read in code.

---

## 8. The starter kit

**Rule:** A new character wears a tunic, breeches, boots, a rope belt, and a burlap sack; the sack holds a full waterskin, a loaf of bread, two apples, and a plank; a torch is in hand. The head slot is empty.

**Numbers:** `src/game.js:103-116`. The torch goes through `items.hold` with no preference, so it lands in the **main** hand (`src/items.js:137-142`).

**Code:** `src/game.js:103`.

**Docs differ:** `docs/10-interface.md`: "The torch in the off-hand is lit" and the items table "Torch ... tool, off-hand". The torch is `either` and starts in the main hand.

**Confidence:** read in code.

---

## 9. The belt and keys 1 to 4

**Rule:** The worn belt gives hotbar slots, shown at the bottom of the screen. A belt slot takes one holdable item, or a stack of food, or a waterskin. Pressing its number: food is eaten (one), a waterskin is drunk from ("It is empty." if dry); anything else swaps between the slot and a hand. A weapon drawn from the belt always takes the main hand (so flipping through weapons is never accidental dual wielding). An empty slot's key stows what the main hand holds, else the off hand.

**Numbers:**
- Rope belt 2 slots, Good belt 4 slots (`items.json` `beltSlots`).
- Keys Digit1 to Digit4 (`src/interact.js:928-932`).
- Messages: "No belt, or no such slot.", "Your hands are full." (`src/interact.js:1010-1011`).
- Belt slot rule `src/ui/inventory-actions.js:67-73`.

**Code:** `beltKey` `src/inventory.js:237-260`; `beltPress` `src/interact.js:994-1012`; `stow` puts an item on the belt only when the bag will not take it and it is holdable `src/inventory.js:177-189`.

**With friends:** the belt keys are events in the player's input snapshot, performed by the host's step for that player (`src/interact.js:946-950`, `src/game.js:493`).

**Confidence:** read in code.

---

## 10. The item menu (an item in a grid)

**Rule:** Right-click an item in your bag or an open container. Entries, in order, as they apply:
- **Use** (always): starts the Use mode (section 15).
- **Equip (main hand)** and **Equip (off hand)** for an `either` item; **Equip (both hands)**, **Equip (main hand)**, or **Equip (off hand)** otherwise. Only for items in **your own** bag.
- **Wear** (or **Wear (6×4)** etc. for a bag), from your bag or a container.
- **Apply** for a bandage: stops all bleeding at once, uses one; greyed "Apply (not bleeding)" when not bleeding. Works from a container too.
- **Eat** for food: one from the stack. Works from a container too.
- **Drink (N%)** for a waterskin; greyed at 0%.
- **Split into 3 planks** for a log, only in your own bag (section 13).
- **Store in <container>** (from your bag) or **Take** (from a container) when a container is open; "(empty it first)" and greyed for a non-empty container.
- **Drop** or **Drop all (N)**, only in your own bag: the whole stack at your feet.
- **Rotate** (added by the panel) for non-square items.

**Numbers:** Eat adds the item's hunger and thirst, capped at the max (`src/entities/player.js:98-103`); a drink sip is up to 50 fill (`data/tuning.json` `player.drinkSip`, `src/entities/player.js:106-113`).

**Code:** `src/interact.js:1015-1090`.

**With friends:** the guest sends the chosen label with the entry's uid and the bag's address; the host rebuilds the menu for that player and runs the entry with the same label if enabled; Use stays local (`src/ui/inventory-actions.js:216, 343-354`).

**Confidence:** read in code.

---

## 11. The slot menu (an item in a hand, worn, or on the belt)

**Rule:** Right-click a slot. Every filled slot offers **Use** and **Drop** (the thing goes to your feet, a bag or belt with everything still in it). Worn: **Take off**. Belt: **Equip**, **Put in bag** ("No room in your bag."). Hand: **Unequip**.

**Code:** `src/interact.js:1095-1147`.

**Confidence:** read in code.

---

## 12. Floor items and picking up

**Rule:** Dropped and spilled items lie on tiles. E picks up the nearest (a loose item beats a container on the same tile at the same distance); the right-click menu offers **Pick up <Item> (N)** and, for clothing, **Wear**. A bag on the floor is a container: **Open**, **Wear**, and **Pick up** while empty. A single holdable item you pick up goes into a **free hand first**, then the bag, then the belt; a stack goes into the bag (partly if only part fits, the rest stays).

**Numbers:**
- E's reach `INTERACT_RANGE` 1.15 tiles (`src/interact.js:42`); E scans a 5x5 tile square round you (`src/interact.js:728-741`).
- Messages: "No room in your bag.", "You have no bag." (`src/interact.js:157-162`).

**Code:** `itemActions` `src/interact.js:192-222`; `pickUpAction` `src/interact.js:224-261`; `takeIn` `src/interact.js:157-162`; floor storage `map.dropItem`/`takeItem` `src/map.js:335-362` (an entry with no uid gets one when dropped, `src/map.js:345`); nearest-action ranking `src/interact.js:713-726`.

**With friends:** a floor item is named by its uid on its tile; a guest's pick-up is its menu label sent with that address and run on the host (`src/interact.js:73, 86-90, 115-121`).

**Docs differ:** `docs/11-character.md` says only "Picking something up with no bag puts it in a free hand if it is holdable"; the code puts a single holdable item in a free hand even when you have a bag with room (so picking up a sword with a torch in hand can leave you dual wielding).

**Confidence:** read in code.

---

## 13. Logs, planks, and splitting

**Rule:** Chopping a tree (right-click, Chop down, 3 s) removes it and drops its logs on its tile; no tool is needed. A log in your own bag can be Split into three planks; planks that do not fit fall to the floor ("Some planks fell to the floor."). Planks board windows and doors and build doors and windows; logs build log walls and feed most fires.

**Numbers:**
- Chop time 3.0 s (`src/interact.js:46`).
- Logs per tree: 3 for `_m` trees, 4 for `_l`, 6 for `_old` (36 tree sprites, `snapshot/data/sprites/tree_*.json` `wood`).
- Split: `items.json` `log.splitsInto` = `{ plank, 3 }`.
- Boarding: 3 boards a side (`src/map.js:434`), 2.0 s each, one plank each; pulling a board 1.5 s, the plank is gone (`src/interact.js:44-45, 484-509`).
- Build costs: log wall 1 log, door 3 planks, window 2 planks (`data/build.json`); taken from hands, belt, and bag (`src/placement.js:144-150`).

**Code:** `treeActions` `src/interact.js:516-532`; Split `src/interact.js:1053-1066`.

**Docs differ:** `docs/30-the-big-pass-spec.md` section 10: "Hatchet: chop a tree (exists)" and section 4 "chop a tree or a stump (hatchet)"; chopping needs no hatchet (as `docs/10` said for its time).

**Confidence:** read in code.

---

## 14. Containers in the world, loot tables, and searching

**Rule:** Chests, barrels, and other furniture with a `container` are searched once (a 1 s bar), which rolls their loot table into their grid; after that they just open. What does not fit is never spawned. A container stays open while you are within two tiles and closes when you walk away. Eating, drinking, wearing, and applying work straight from an open container; equipping does not (take it first).

**Numbers:**
- Search 1.0 s (`src/interact.js:43`); close distance 2.0 tiles (`data/tuning.json` `world.containerCloseDist`, `src/main.js:766`).
- Containers by sprite (`snapshot/data/sprites/*.json` `container.loot`): barrel uses `barrel`; bookcase, cart, chest, coffin, counter, cupboard, desk, haystack, shelf, stall, strongbox, woodpile use `chest`; dev_chest and **wheelbarrow** use `dev_kit`.
- Loot tables (`snapshot/data/loot.json`), weights, rolls:
  - chest, grid 4x3, 2 to 3 rolls: bread 3, cheese 2, plank 3, log 2, hatchet 1, sword 1, mace 1, good belt 1, rucksack 1, gloves 1, hood 1, nothing 2 (of 19).
  - barrel, grid 2x3, 2 to 3 rolls: apple x1-4 4, waterskin 2, log 2, nothing 2.
  - body, 0 to 2 rolls (grid 3x3, unused for bodies): nothing 2, apple x1-2 2, bread 1, waterskin 1, stick 2.
  - dev_kit, grid 10x6, fixed list (section 22).
  - wild, grid 3x3, 1 roll: stick. **Never rolled by any code** (no container, wardrobe, or forage rule names it).
- A waterskin from loot comes at 0, 25, 50, 75, or 100% (`src/items.js:93-95`).
- The valley has 33 chests, 15 barrels, 1 wheelbarrow (`snapshot/data/maps/valley.json`).

**Code:** `rollLoot` `src/items.js:76-101`; `propBag` (grid from the table) `src/interact.js:314-321`; `containerActions` `src/interact.js:323-345`; close check `src/main.js:762-767`.

**Notable:** because a crafted chest (4 planks) or shelf (3 planks) is a `chest`-table container, its first search rolls fresh loot (planks, logs, weapons). The crafted or authored wheelbarrow rolls the `dev_kit` table: the whole dev kit, two Developer Bags included (the sprite's note says the dev kit's grid "stands in for its own until step 3"; step 3 is built).

**With friends:** a search is a menu label sent by the prop's id and run on the host; the searched grid is prop state that touches its tile, so it reaches guests in the chunk and the save; the guest's panel opens by `containerOpened` routed to it (`src/host.js:212-215`).

**Docs differ:** `docs/10-interface.md`: body container "3×3", chest loot "bread, cheese, planks, a log, a hatchet rarely". See sections 16 and 22.

**Confidence:** read in code and data.

---

## 15. The Use mode and interactions ("Nothing interesting happens")

**Rule:** Use on any item's menu (in a bag, a container, worn, held, on the belt) picks it up as the thing you are about to use: it stays where it is, outlined, and a label follows the cursor, "Use <item> → <what is under it>". The next left click is the target: an item in a bag, a character, a prop, or a tile. If `data/interactions.json` has a row for the pair, its line is printed in the log (or its verb is run); otherwise the log says "Nothing interesting happens." Escape or a right click cancels. There is no range check: anything on screen can be the target.

**Numbers:**
- Rows: `use` (item id or tag) and `on` (item id or tag, a prop's sprite id, `character`/`zombie`/`villager`, a floor sprite id, or `tile`); first match wins; `action` names a verb in the verb table, `message` prints (`src/interactions.js:1-49`).
- Two rows exist, both message-only: torch on campfire, "You hold the torch to the fire. It is already burning." (said whether or not it is lit); waterskin on well, a note that the rule works (`snapshot/data/interactions.json`).
- World target picking: a character, else any prop by its pixels, else the tile (`src/main.js:649-657`).
- A left click on the world applies only while the panels are closed (`src/main.js:932-938`); in a panel the click on an item is the target (`src/ui/inventory-panel.js:476-478`).

**Code:** `src/use.js:42-104`; `src/interactions.js`; verb table `src/verbs.js`.

**With friends:** a guest's apply is sent as the entry's uid and source plus the target's address; the host resolves and runs it as that player, and the log line goes to the guest (`src/use.js:81-87`, `src/ui/inventory-actions.js:364-392`, `src/host.js:225-229`).

**Docs differ:** `docs/30-the-big-pass-spec.md` section 5.3 lists `on` values "tree" | "rock" | "water" | "soil" | "grass" and action kinds `give`, `transform`, `open`, `fill`, `plant`, `water`, `message`, and says "The menu lists only rows whose `use` is in a hand"; the code matches only the forms listed above, `action` is a verb name, and no menu lists rows.

**Confidence:** read in code.

---

## 16. Bodies as containers

**Rule:** A dead zombie (and a fallen player) can be searched (1 s) and then opened. The first search rolls the body's pockets from its wardrobe's loot table and lays out everything it had on a grid of its own: what it held, every garment, its pockets, a sack with its contents, and arrows or a spear lodged in it. Taking a garment off the grid takes it off the drawn corpse. What does not fit falls to the floor under the body. Villagers' bodies have no search entry.

**Numbers:**
- Body grid 6x6 (`src/entities/character.js:141`).
- Zombie wardrobes: pockets 3x2, loot table `body` (`snapshot/data/wardrobes.json`); village wardrobes have `loot: null`.
- E considers bodies within 3 tiles on each axis (`src/interact.js:744-748`).

**Code:** `lootOf` `src/entities/character.js:139-162`; `searchBodyAction` `src/interact.js:1334-1352`; `characterActions` `src/interact.js:1356-1358`; corpse redraw `src/main.js:769-772`.

**With friends:** entries get uids when they first enter the body's grid, so a guest can name them (`src/entities/character.js:148`).

**Docs differ:** `docs/10-interface.md` items table: "Body | 3×3"; `loot.json`'s `body.grid` 3x3 is not used for bodies.

**Confidence:** read in code.

---

## 17. Carrying furniture

**Rule:** A prop can be picked up with both hands empty and carried; while carrying you only walk (no bag, no actions), and E or a click puts it down on clear tiles. Rooted things (trees, the well), built-in fires, and fuel-burning fires cannot be carried unless their sprite says `carry`. A carried container keeps its contents.

**Numbers:** put-down reach 1.6 tiles (`src/interact.js:297`); carry flags in sprite definitions: chest, barrel, bed, shelf, cupboard, desk, strongbox, woodpile, bookcase `carry: true`; all six stations, cart, coffin, counter, haystack, stall, wheelbarrow, well `carry: false`; dev_chest has no flag, so the rule allows it.

**Code:** `canCarry` `src/placement.js:69-75`; `carryAction` `src/interact.js:269-288`; `putDownAction` `src/interact.js:292-311`.

**Docs differ:** `docs/30-the-big-pass-spec.md` law 3, "A station is a prop. Placed like furniture (carried on the head, set down, built)", and 5.1 "a station is placed from the bag like furniture"; every station sprite is `carry: false` and no station exists as an item.

**Confidence:** read in code and data.

---

## 18. Stations and crafting

**Rule:** A station is a prop: workbench, anvil, forge, oven, loom, dye vat, plus any lit fire that cooks (campfire, hearth, fireplace: "Cook here"). Its menu entry (or E) opens one shared panel: the recipe list (greyed with the reason when you cannot), the chosen recipe's ingredients with have and need, a count (1 to 10), Make, and the queue with a progress bar. Ingredients are taken at Make; the work then runs on the station's own queue in the world's time and you may walk away. Results land in the station's output box (3x2, opened beside your bag; full means the floor beside the station), or, for furniture, as a prop placed beside the station.

**Numbers:**
- Station reach 2.6 tiles (`src/stations.js:20`); the panel and the output box close beyond 3.6 tiles (`src/ui/station-panel.js:157`, `92`).
- Output box 3x2 (`src/stations.js:21`).
- Count clamped 1 to 10 (`src/stations.js:234`, `src/ui/station-panel.js:52`, `src/host.js:164`).
- Ingredients reached: your hands, belt, and bag, the station's own output box, and every **already searched** container prop within 2.6 tiles (scanned in a 7x7 square) (`src/stations.js:67-104`). Taken from your bag first, then belt, then hands, then the containers (`src/stations.js:108-124`, `src/inventory.js:99-122`).
- Refusals: "Not at this station.", "Too far from it.", "The fire is out.", "Needs a hammer in hand.", "Short of N ..." (`src/stations.js:146-154`).
- Recipe fields: `station`, `out` {id, count} or {prop, footprint}, `in` [{id | tag | or, count}], `seconds` (sim seconds; a game hour is 30), `fire`, `tool` (`snapshot/data/recipes.json` note).
- The oven's sprite has `cooks: true` but its `station: "oven"` wins, so cooking recipes are not offered at the oven (`src/stations.js:45-52`).
- Loom and dye vat have no recipes: "Nothing to make here yet." (`src/ui/station-panel.js:143`).
- In the valley: 2 workbenches, 1 anvil, 1 forge, 1 oven, 1 loom, 3 dye vats, 17 fireplaces (`snapshot/data/maps/valley.json`).

**Code:** `src/stations.js` (whole file; `craft` verb `src/stations.js:228-243`); station entry `src/interact.js:622-639`; panel `src/ui/station-panel.js`; queue stepped `src/game.js:434`.

**With friends:** "Use the workbench" chosen by a guest runs on the host; the host's own panel stays shut, the guest's output box opens through `containerOpened` with `station: true`, and the guest opens its own recipes panel on its replica; Make is `net.sendCraft`, run on the host as the `craft` verb; the queues ride in the frame (`queues`) for the guest's bar (`src/ui/station-panel.js:60-73`, `src/net.js:813, 1183`, `src/host.js:161-167`).

**Code notes (inferred):** `have` counts hands and belt for a tag or `or` ingredient, but `take` for a tag draws only from bag, output, and containers (`src/stations.js:95-124`); no cloth item can be held or belted today, so this is latent. A furniture result looks for one free walkable tile from the tile south of the station, up to 12 rings out, checking only that tile even for a 2x1 footprint; if none is found the ingredients are spent and nothing appears (`src/stations.js:175-183`, `src/map.js:1308`).

**Docs differ:** see Discrepancies (fuel from containers, fire shown in the panel, hammer at the workbench, the recipe table).

**Confidence:** read in code.

---

## 19. Recipes (all 27)

**Rule:** All recipes are known from the start.

**Numbers** (`snapshot/data/recipes.json`):
- Workbench: torch (1 stick, 1 any cloth; 4 s); "handle" = 2 sticks (1 plank; 3 s); hoe (1 stick, 1 plank; 8 s); shovel (1 stick, 1 plank; 8 s); bow (2 sticks, 1 any cloth; 12 s); 5 arrows (1 stick; 5 s); shield (3 planks; 12 s); props: chest (4 planks; 10 s), shelf (3 planks; 8 s), bench (2 planks; 6 s), table 2x1 (4 planks; 10 s), bed 2x1 (6 planks, 1 any cloth; 16 s), workbench 2x1 (5 planks, 1 log; 14 s), wheelbarrow (5 planks, 1 iron bar; 16 s).
- Forge (fire): iron bar (2 iron ore; 10 s).
- Anvil: hammer (1 iron bar, 1 stick; 8 s; no hammer needed); with a hammer in hand: knife (1 bar, 1 stick; 8 s), hatchet (2 bars, 1 stick; 10 s), pickaxe (2, 1; 10 s), scythe (1 bar, 2 sticks; 10 s), spear (1, 2; 10 s), mace (2, 1; 12 s), sword (3, 1; 16 s).
- Cooking (fire): roast potato (1 potato; 6 s), stew (2 potato, 1 cabbage, 1 garlic; 12 s), porridge (2 grain; 8 s).
- Oven (fire): bread (2 flour; 10 s).
- "Any cloth" is tag `cloth`: bandage, cap, hood, tunic, gloves, breeches, boots.

**Notable (from code and data):** no code or loot gives potato, cabbage, garlic, grain, flour, iron ore, iron bar, or charcoal (no recipe makes ore, grain, flour, or charcoal; crops are not harvestable yet; the dev chest holds none of them). So the forge, anvil, cooking, and oven recipes cannot be completed in play without the console (`__game.give`). Usable chains today: logs (chests, barrels, trees) to planks to sticks and workbench goods; cloth from bandages (dev chest) or garments (chests, bodies).

**Confidence:** read in data; "no source" checked by grep over `src` and `data/maps/valley.json`.

---

## 20. Fire as maintenance (fuel, hours, feeding, going out)

**Rule:** A fuel-burning fire (campfire, hearth, fireplace, oven, forge) holds a few units of its own fuel and burns one unit every few game hours; at zero it goes out and says "A fire has gone out." (to players within 8 tiles). Its menu or E: **Light the X (a log)** when out, **Feed the X (n of max, h left)** when lit, **The X is full (...)** at max; "(need a log)" and greyed when you have none. Feeding takes one unit from your bag, belt, or hands and lights the fire if it was out. A recipe that needs fire waits while the fire is out and resumes when fed; nothing is lost.

**Numbers:**
- A game hour is 30 real seconds (`src/map.js:83`).
- Defaults: `maxFuel` 4, `hoursPerUnit` 2, fuel item `log` (`src/map.js:1534-1536`); a burner starts unlit unless the map says `lit` (`src/map.js:1532`).
- Per sprite (`snapshot/data/sprites/*.json` `fire`): campfire log, 2 h, max 4, radius 4, cooks; hearth log, 3 h, max 4, radius 3, lights its room, cooks; fireplace log, 3 h, max 4, radius 3, room, cooks; oven log, 2 h, max 3, radius 2; forge **charcoal**, 2 h, max 4, radius 3, does not cook.
- Non-burning fires: jack-o'-lantern (pumpkin prop) always lit, radius 1.5; torch post holds a torch (radius 3).
- Valley: 2 fireplaces start lit with 3 units (9 h), the baker's oven lit with 2 units (4 h), the other 15 fireplaces and the forge start cold.
- Prompt hours: "under an hour" below 1, else rounded (`src/interact.js:358-363`).

**Code:** `burnFires` `src/map.js:86-103`; `feedFire` (the one mutator) `src/map.js:108-117`; `fireHoursLeft` `src/map.js:120-123`; `fireActions` `src/interact.js:350-380`; craft pause `src/stations.js:200`; message `src/main.js:1466-1468`.

**With friends:** feed and burn-out touch the tile, so a guest gets the change in the chunk; a guest's copy of the fuel refreshes only at each whole unit burned, so its "hours left" may lag by up to a unit; the sync check compares fuel to the unit (`src/map.js:93-95`, `src/game.js:316-317`). Inferred: a guest's Feed is sent by its label, which includes the hours left and the unit count, so a label that changes between the guest's click and the host's turn would find no match and do nothing.

**Docs differ:** fuel "an item or tag" (`docs/30-the-big-pass-spec.md` section 7, and the comment at `src/map.js:1535`): `fireActions` calls `getItem(fuelId)` and `countAll` by id, so a tag would not work; every fire names an id. `docs/30` section 6 says fuel comes from containers within reach too; it does not.

**Confidence:** read in code and data.

---

## 21. Torches (T, brackets and posts, the belt torch)

**Rule:** A torch is a light you carry in either hand and also a weak weapon. T takes it out of your bag or belt into a hand, or puts the held one away ("No torch on you."). Two torches held light more; a torch on the belt glows at half and is not drawn. Torches never burn out. Wall brackets and torch posts hold a torch: **Take the torch** (into a free hand, else the bag) and **Mount the torch**.

**Numbers:**
- Torch light radius 3 (`items.json` `torch.fire.radius`).
- Belt torch strength 0.5, two held torches 1.35 (`data/tuning.json` `world.beltLight`, `world.twoTorches`; `src/game.js:552-563`); the dead see a flame from `flameRange` 12 times its strength, at night only, when aggro is on (`src/entities/zombie.js:295-310`).
- Valley: 27 brackets, 23 with torches; 3 torch posts, all empty.

**Code:** T `src/interact.js:982-989`; `heldFire` `src/items.js:187-194`; `beltFire` `src/game.js:417-424`; brackets and posts `src/map.js:125-183`, `holderActions` `src/interact.js:401-440`.

**With friends:** T is an event in the player's snapshot, performed on the host; each player carries one light with its owner (`src/game.js:555-562`).

**Code note:** "Take the torch" makes a new torch entry, so a mounted torch's wear is forgotten (`src/interact.js:413-417`).

**Docs differ:** `docs/10-interface.md`, "Torch ... tool, off-hand" and "The torch in the off-hand is lit": it lights in either hand.

**Confidence:** read in code.

---

## 22. The dev chest and giveKit

**Rule:** While the game is in development a chest of test items stands beside the spawn of every new world (a setting, on by default; read at load). `__game.giveKit()` on the console puts a Developer Bag on your back (moving what you carried into it) and fills it with weapons; `__game.give(id, n)` and `__game.giveDevBag()` give anything.

**Numbers:**
- Setting `devChest` default true (`src/settings.js:31`); placed at the nearest free walkable tile from spawn +1, +2 (`src/game.js:80-83`).
- Dev chest contents, fixed (`snapshot/data/loot.json` `dev_kit.fixed`, grid 10x6): 2 Developer Bags, sword, hatchet, mace, halberd, stick, 2 spears, shield, bow, 40 arrows, 2 torches, 5 bandages, Book of Fire, Staff of Fire, 100 throwing knives, 100 throwing axes.
- giveKit (`src/dev.js:125-139`): sword, hatchet, mace, halberd, stick, 3 spears, shield, bow, 40 arrows, 5 bandages, Book of Fire, Staff of Fire, 100 throwing knives, 100 throwing axes.

**Code:** `src/game.js:80-83`; `src/dev.js:115-141`.

**With friends:** giveKit, give, and giveDevBag are console calls on the local client; on a guest they change only its replica (inferred: they are not commands). giveKit also discards the old bag rather than dropping it, and re-adds its contents as fresh entries (a nested bag's own contents are lost).

**Docs differ:** `CLAUDE.md` "the dev chest every item" and the setting's own description "the chest of every item": it holds 17 kinds (weapons, ammo, torches, bandages, magic items, Developer Bags), no food, materials, clothing, or tools. `docs/11` and `docs/02` (2026-10-10): the Developer Bag "never from loot": the dev chest's table (and the wheelbarrow's) gives two.

**Confidence:** read in code and data.

---

## 23. Water containers and drinking

**Rule:** A waterskin holds up to 100. Drink from its menu or its belt key, a sip at a time. At a well or beside any water tile: **Drink from the well/water** (1.5 s, fills thirst to full) and **Fill waterskins** (2 s, fills every waterskin in your bag to 100).

**Numbers:** `capacity` 100 (`items.json`); sip 50 (`data/tuning.json` `player.drinkSip`); drink 1.5 s, fill 2.0 s (`src/interact.js:47-48`); drink is the simple (E) action while thirst is under 90 (`src/interact.js:542`).

**Code:** `src/interact.js:537-581`; `drink` `src/entities/player.js:106-113`.

**Confidence:** read in code.

---

## 24. Durability as it shows on items

**Rule:** A weapon wears only on a landed hit and evaporates at full wear ("Your <item> is spent."); a bow wears per shot. The bag shows a wear bar and "(N% left)" once worn.

**Numbers:** wear per hit = 1 / (kills x ceil(100 / damage)) (`src/items.js:27-37`, zombie hp `data/tuning.json` `zombie.hp` 100); per shot = 1 / shots (`src/items.js:39-41`).

**Code:** `src/combat.js:365-370`, `src/archery.js:566-571`, `src/ui/inventory-panel.js:237-238`.

**Confidence:** read in code (the combat side belongs to the combat reader).

---

## Candidate wiki pages

- **Items** — the index of all 50 items by kind, with size, stack, hands, and where each comes from.
- **Inventory** — the bag as an item, the tetris grid, rotating, stacking, Tidy, dragging, dropping.
- **Bags** — burlap sack, rucksack, Developer Bag: grids, wearing, swapping, a bag on the floor.
- **The one container rule** — why a full bag cannot go in a chest.
- **Hands** — main, off, both, either; equipping, swapping, the off hand coming back, the spear rule.
- **Clothing and worn slots** — the seven slots and every garment.
- **Belt** — rope and good belt, keys 1 to 4, food and water on the belt.
- **Item menu** — every right-click entry on an item and a slot, and when each appears.
- **Use** — the Use mode and "Nothing interesting happens", with the interaction rows.
- **Containers** — chests, barrels, and the rest; searching; the loot tables with odds.
- **Bodies** — searching the dead, stripping the corpse, what a body carries.
- **Floor items** — dropping, E to pick up, what goes to a hand first.
- **Carrying furniture** — what can be lifted and the rules while carrying.
- **Stations** — the panel, reach, ingredients from containers, the queue, the output box.
- **Recipes** — all 27 by station, with times and requirements.
- **Fire** — fuel, hours per unit, feeding, going out, each fire kind's numbers.
- **Torch** — T, brackets and posts, the belt torch, light strength.
- **Log**, **Plank**, **Stick** — gathering wood, splitting, boarding, building.
- **Waterskin** — drinking and filling at wells and water.
- **Starting kit** — what a new character has.
- **Dev chest** (developer page) — the setting, its contents, giveKit and give.

---

## Discrepancies

- `docs/10-interface.md` items table lists the Torch as "tool, off-hand" and says "The torch in the off-hand is lit"; the torch is `hands: "either"`, lights in either hand, and the starter torch goes to the main hand (`src/game.js:115`, `src/items.js:137-142`).
- `docs/10-interface.md` items table lists the Hatchet as "main hand"; it is `either`.
- `docs/10-interface.md` container table: "Body | 3×3"; a body's grid is 6x6 (`src/entities/character.js:141`) and `loot.json`'s `body.grid` 3x3 is unused for bodies.
- `docs/10-interface.md` chest loot "bread, cheese, planks, a log, a hatchet rarely"; the chest table also rolls a sword, mace, good belt, rucksack, gloves, and hood (`snapshot/data/loot.json`).
- `docs/10-interface.md` acceptance 3 names the hearth's entry "Add a log"; the labels are "Light the ...", "Feed the ... (n of max, h left)", "The ... is full" (`src/interact.js:361-363`).
- `docs/11-character.md` and `docs/02-decisions.md` (2026-10-10): the Developer Bag comes "from the console ... and never from loot"; the dev chest's `dev_kit` table holds two, and the wheelbarrow uses the same table.
- `docs/11-character.md` implies a picked-up item goes to a hand only with no bag; `takeIn` puts any single holdable item in a free hand first even with room in the bag (`src/interact.js:157-162`).
- `CLAUDE.md` ("the dev chest every item") and the `devChest` setting's description ("the chest of every item", `src/settings.js:31`): the dev chest holds 17 kinds, no food, materials, clothing, or tools.
- `docs/02-decisions.md` (step 2, 2026-10-13): "The forge burns charcoal ... until then the dev chest"; the dev chest has no charcoal, and nothing in play gives charcoal, so the forge cannot be lit without the console.
- `docs/30-the-big-pass-spec.md` section 6: "Ingredients and the fuel come from your bag, the belt, and every container within reach"; ingredients do, but a fire's fuel comes only from your hands, belt, and bag (`src/interact.js:356, 373-375`).
- `docs/30-the-big-pass-spec.md` section 6: the panel shows "the station's fire ... with its fuel"; the panel shows no fuel, only "needs the fire lit" and "(the fire is out)" on a paused job (`src/ui/station-panel.js:133, 140`).
- `docs/30-the-big-pass-spec.md` law 3 and 5.1: stations are carried and placed like furniture, from the bag; every station sprite is `carry: false` and no station is an item.
- `docs/30-the-big-pass-spec.md` section 10: "Hammer: the smith's and the workbench's recipes ask for it in hand"; no workbench recipe asks for it, nor does the anvil's own hammer recipe (`snapshot/data/recipes.json`).
- `docs/30-the-big-pass-spec.md` section 6 table: workbench "planks to boards", oven and cooking "a pie", loom "cloth ... bandages; a tunic, breeches, a cap"; none of these recipes exist, and the loom and dye vat have no recipes at all.
- `docs/30-the-big-pass-spec.md` sections 4 and 10: chopping a tree is a hatchet verb; Chop down needs no tool (`src/interact.js:516-532`).
- `docs/30-the-big-pass-spec.md` section 4: "forage sticks under trees (exists by rule)"; forage places mushrooms and pumpkins as props, and the `wild` loot table (stick) is never rolled by any code.
- `docs/30-the-big-pass-spec.md` section 5.3: interaction `on` values "tree" | "rock" | "water" | "soil" | "grass", action kinds `give`/`transform`/`open`/`fill`/`plant`/`water`/`message`, and "The menu lists only rows whose `use` is in a hand"; the resolver accepts item ids/tags, prop sprite ids, character kinds, floor sprite ids, and "tile"; `action` is a verb name; no menu lists rows (`src/interactions.js:137-152`).
- `docs/30-the-big-pass-spec.md` section 7 and `src/map.js:1535`'s comment: a fire's fuel is "an item or tag"; only an item id works (`getItem(fuelId)`, `countAll` by id, `src/interact.js:354-356`).
- `docs/30-the-big-pass-spec.md` section 7: "the cooked food's value is the raw's doubled"; roast potato (20 from 10) fits, stew (hunger 50 from ingredients worth 31) does not.
- `docs/30-the-big-pass-spec.md` section 9.1 and `docs/02` ("the wheelbarrow one big immovable grid"); the wheelbarrow uses the `dev_kit` table, so its first search fills it with the whole dev kit, and its sprite note's "until step 3" has passed with step 3 built.
- `census.md` lists Stick as "in loot: ... wild"; that table is dead data (see the forage line above).
