---
title: "Sidescroller Game"
date: 2022-09-05T23:09:52+12:00
draft: false

description: "A sidescrolling 2D tower defence that is planned to target the anime-style male-loving population. I'm probably spending most of my time on this these days. Using Godot with GDScript, for now."

status: planned
project_type: [hobby]
tags: [Hobby, Solo, Godot, Planned]
---

*GitHub Project Link - https://github.com/axkeyz/husbando-sidescroller*

## PURPOSE

I have a huge thing for computer graphics. Whether 3D or 2D, digitally rendered or hand-drawn, I think they all look gorgeous. I also have a thing for anime-style art. I didn't really care about when I started playing certain anime-style gacha games, but eventually it became really obvious that there weren't many games target my demographic (the male-loving and gameplay-loving population). The reason is simple, they don't sell well. So this game will mainly be used to satisfy myself.

This will be a sidescrolling 2D tower defence, based off a game that really impressed me. These are the tasks:
1. Create a battle engine with engaging gameplay and balance
2. Manage players giveaways & events through an admin platform (needs a frontent and backend -- use GameSparks?). The admin platform could also add in-game models that may then be downloaded by the user client.
3. Create decent-looking UI, art & other assets

I won't deny that I really want to create more games after this. It might be 2D, 2.5D or 3D, I haven't decided. But I'll definitely make something that is for the male-loving and gameplay-loving demographic

## TECH

Godot for the game engine. I'm using GDScript since I don't think I need the performance (yet) and the game will be 100% 2D, but I'll see if I need to use C# to optimise the battle scenes later.

## LEARNING

1. Godot / GDScript & the nodes. I found the documentation quite difficult to use at the start, but it is still pretty usable.
2. Carousels that are pretty easy to make with Javascript is pretty damn difficult in Godot! Swiping directions can act really weird and sticky scrolling does not exist in times where it's super easy to overscroll. I'm not sure about Unity, but there is always way too much left to be desired.

## STATUS

- I've kinda created a UI
- I've started implementing authentication

## TODOS

I'm still really early into the project, so it's hard to say what I need. However, I'm expecting the following tasks. I'd probably learn a lot on the way.
- Create the battle engine. I'm quite interested in using C# for speed optimisation, but I'll see if I need it.
- Make the game look good with nice art/UI
- Optimise the game for speed
- Use Spine2D to create animations
- Use GameSparks or create my own admin implementation