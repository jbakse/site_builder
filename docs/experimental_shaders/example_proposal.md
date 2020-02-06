---
title: "Experimental Shaders"
layout: layouts/compform_toc.pug
debug: false
---

# Overview

`150 word overview`

I plan to build a [Pong](https://en.wikipedia.org/wiki/Pong) clone in which all graphics rendering is done in a single full-screen shader effect in plain WebGL. The primary game loop, state management, and user interaction will be handled in Javascript, which will pass the necessary state information to the shader for drawing. I'll begin by creating a fully functional prototype to work out the general architecture of the software. Once the game is fully playable, I'll begin working on adding effects to simulate the look of the cathode ray tube display used in the original cabinet. I will document the project with a process blog, and a game play video.

`5 key features`

- all features from original Pong including ball animation, interactive paddle, basic physics and collision, and score keeping
- single-screen two-player mode
- one-player mode with AI opponent
- simulating basic CRT effects including color bleed
- full documentation and playable on itch.io

`3 stretch goals`

- more CRT effects motion blur, scan lines, v-sync
- sound using the tone.js library
- over-the-top psychedelic "extreme" mode

`5 learning goals`

- Explore how to communicate real-time state information to the shader effect
- Study visual effects and artifacts of classic CRT-games
- Practice documenting and launching a game project
- Practice using signed distance fields to create a complex scene
- Explore creating an interesting, human-like AI
