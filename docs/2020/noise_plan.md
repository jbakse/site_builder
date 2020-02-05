---
title: Noise
layout: layouts/compform_plain.pug
debug: false
---

## Week 4, Noise {plain}

[Noise](../noise/index.html){boxed right}

### Learning Objectives

Students will be able to:

- Explain what the `noise()` function does.
- Understand when, why, and how to use `noise()`
- Compare `noise()` to `random()`
- Explore sampling, mapping, and controlling `noise()`
- Describe the historical role of Perlin Noise in procedural generation
- Describe the qualities of Noise (Frequency, Amplitude, Smoothing, Layering, Dimensions)

### Materials

- 1D Noise Worksheet
- 12-sided dice

### Schedule

| Time | Duration | Purpose  | Format         | Name                    |
| ---- | -------- | -------- | -------------- | ----------------------- |
| 4:00 | 30 m     | Review   | Critique       | Sketch Review Questions |
| 4:20 | 10 m     | Engage   | Code Challenge | Without `random()`      |
| 4:30 | 10 m     | Study    | Lecture        | 01 Noise                |
| 4:40 | 10 m     | Study    | Lecture        | 02 Noise vs. Random     |
| 4:50 | 15 m     | Engage   | Activity       | Noise Worksheet         |
| 5:05 | 20 m     | Study    | Lecture        | 03 Benefits of Noise    |
| 5:25 | 10 m     | Break    | Break          | Break                   |
| 5:35 | 10 m     | Study    | Lecture        | 04 1D, 2D, 3D Noise     |
| 5:45 | 10 m     | Study    | Lecture        | 05 Working with Noise   |
| 5:55 | 20 m     | Activate | Coding         | In-class Challenges     |
| 6:15 | 10 m     | Study    | Coding Lecture | Challenges Discussion   |

<!--
### Outline

Homework Discussion

* reason for sketching

01 Noise

* `random()` completely, actually random
* `noise()` random, arranged variation with nice properties
* Perlin Noise is just one example, not the only one.
* Slides
* Many examples of noise focus on visualizing the noise. Leading students to think that the `noise()` function is mostly when you want something to look like `noise()`. On the contrary, the noise function can be used any time you want _good looking variation_. Also, you probably want to shape the noise a bit so it doesn't look like straight `noise()`.
* `random()` doesn't take parameters but `noise()` does. Understanding what parameters to pass in is often confusing when you start using `noise()`. Once you get a hang of it, the parameters become the key to the power of `noise()`.
* live code example using `noise()`

04 Noise Worksheet, Building Noise

* Dice, Decks, LUTs
* Roll Dice - Build an N-Dimensional infinite field
* Connect Dots - Create an interpolated look up
* Could extend to more dimensions (figures)
* compare `random()` (dice) to `noise()` (LUT)
* answer key question: where does input come from?
* Make a drawing like [ . o O . o o . O ] using dice, using noise
* Make an animation [ . -> O -> o ] using dice, using noise

02 Noise vs. Random + 03 Benefits of Noise

* `random()` is better when you want actually random _variation_
* `noise()` is better when you want aethetically pleasing _variation_
* Control Frequency
* Fractal Detail
* Control Repeatability
* Looks Good
* `random()` vs `noise()` examples
* 1D Noise Example
* Range of `noise()`
* Fractal Noise

Challenges

* Intro
* Coding
* Q+A

05 Working With Noise

* Calling Noise: What do you pass in?
* Controlling Frequency
* Amplitude and Range
* Detail (optional)
* Seed (optional) -->

::: .activity

## Homework Review

::: .headless
| Group | Question |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | Isabel, Simon, Elena <br/>When allowing chance to influence their artwork, does an artist give up authorship? |
| 2 | Mickell, Neena, Dit <br/>Choose two sketches that you believe demonstrate a biasing technique discussed last week. What kind of bias do you think was used in each? |
| 3 | Sungmin, Munro, Robin, Ran <br/>Does computationally generated art have an inherent aesthetic? |
| 4 | Fifi, Yang, Adam, OJ <br/>Choose a work that combines procedural and non-procedural elements well. What works about this piece? |
| 5 | Yoon, Amanda, Ran <br/>Choose a project that presents an interesting direction for further design inquiry. Suggest 5 possible avenues of development for this project. |
| 6 | John, Karen, Ping <br/>The individual challenge is not a competition. But who won? |
/::
/::

/::

<style> 
    .headless thead {
        display: none;
    }
</style>
