---
title: Vector Drawing
layout: layouts/compform_plain.pug
debug: false
---

## Week 6, Pixel Data {plain}

### Class Notes

[Vector Drawing](../vectors){boxed right}

### Learning Objectives

- Understand how raster image data is represented in memory.
- Consider relationship between vector images, raster images, p5.js drawing api, and pixel access.
- Technical: Using p5's `get()` and `set()` function to read and write pixel values.
- Technical: Using p5's `pixel[]` array to work with pixel data directly and faster.
- Explore per-pixel image generation.
- Explore per-pixel image processing.
- Explore using an image as a data input.

### Schedule

| Time | Duration | Purpose  | Format     | Name                       |
| ---- | -------- | -------- | ---------- | -------------------------- |
| 3:50 | 30 m     | Review   | Discussion | Homework Review            |
| 4:20 | 5 m      | Study    | Lecture    | Shifts in Perspective      |
| 4:25 | 10 m     | Study    | Lecture    | 01 Pixels                  |
| 4:35 | 20 m     | Activate | Coding     | Pixel Writing Challenge    |
| 4:55 | 10 m     | Study    | Coding     | Challenge Discussion       |
| 5:05 | 20 m     | Activate | Coding     | Pixel Processing Challenge |
| 5:25 | 10 m     | break    | break      | break                      |
| 5:35 | 10 m     | Study    | Coding     | Challenge Discussion       |
| 5:45 | 10m      | Study    | Lecture    | 04 pixels[]                |
| 5:55 | 15m      | Study    | Coding     | setQuick + Grass           |
| 6:10 | 5m       | Study    | Lecture    | Homework Discussion        |
| 6:15 | 15m      | Study    | Coding     | Homework Solution          |

::: .activity

## Homework Review

### Groups

::: .headless
| Group | Question |
| ----- | --------------------------------------------------------------------------------------------------------- |
| 1 | <br/> Choose a work that was **very clearly** made using turtle graphics. |
| 2 | <br/> Choose a work that uses turtle graphics, but doesn't look "turtley". |
| 3 | <br/> Choose your favorite take on the dot challenge. Discuss |
| 4 | <br/> Choose your favorite take on the line challenge. Discuss |
| 5 | <br/> Choose your favorite turtle (indvidual) challenge response. |
| 6 | <br/> Choose your favorite turtle (pair) challenge response. |
/::

/::

<!-- Choose a project that presents an interesting direction for further design inquiry. Suggest possible variations on this project. -->

::: js-lab
../strategy/sketches/line_challenge/sketch.js
/::

<style> 
    .headless thead {
        display: none;
    }
</style>
