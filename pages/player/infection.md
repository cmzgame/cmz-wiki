---
title: Infection
categories: [Player, Mechanics]
aliases: [Infected, Bitten, Turning]
summary: A bite can infect you; today the infection is a marker that counts through four stages and does nothing else.
---

**Infection** can follow a bite. Today it is only a marker: the infection moodle counts through its stages and then stays at the last one. It does no damage, does not turn you, and does not kill you.

## How it works

Each bite from [[The dead]] that does damage has a {{n combat.infection.chance}} chance to infect you, unless you are infected already. The bite says "The bite broke the skin."

The infection moodle then moves through four stages, each a quarter of {{n combat.infection.days}} game days: **Bitten**, **Fevered**, **Sick**, and **Turning**. It stays at Turning. The Turning moodle says so itself: nothing happens yet.

The count follows the game's clock, so it runs faster while everyone [[Sleep|sleeps]]. Nothing in play cures it.

{{planned doc=02 note="What infection does to you, and its cure: the marker is a stand-in for both (question 29b)."}}

{{devonly note="The developer console can clear an infection: __game.infection.cure()."}}

## Numbers

- Chance a bite infects: {{n combat.infection.chance}}
- From Bitten to Turning: {{n combat.infection.days}} game days
- A game day: {{n census.constants.clock.DAY_LENGTH}} seconds

## With friends

An infection belongs to whoever was bitten, and the host tells a guest when a bite breaks their skin.

## Settings that change it

- **Zombie aggro** (default Off): off, the dead do not bite, so nobody is infected.

## See also

- [[Bleeding]], [[Health]], [[The dead]], [[Moodles]]
