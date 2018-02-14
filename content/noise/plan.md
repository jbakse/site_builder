---
title: Noise
layout: layouts/compform_plain.pug
debug: false
---


## Week 4, Noise {plain}

### Materials
1D Noise Worksheet

### Learning Objectives
- What the `noise()` function does.
- When, why, and how to use `noise()`
- Sampling, mapping, and controlling `noise()`
- Using `noise()` vs using `random()`
- Importance of Perlin Noise in Procedural Generation
- Qualities of Noise (Frequency, Amplitude, Smoothing, Layering, Dimensions)

### Schedule


| Time | ESA           | Type           | Activity                          |
| ---- | ------------- | -------------- | --------------------------------- |
| Pre  | TBD           | -              | TBD                               |
| 3:50 | Review+Engage | Discussion     | Homework Review                   |
| 4:20 | Study         | Lecture        | 01 Noise                          |
| 4:30 | Engage        | Activity       | 04 Noise Worksheet                |
| 4:40 | Engage        | Activity       | Noise Circles Whiteboard Computer |
| 4:50 | Study         | Lecture        | 02 Noise vs. Random               |
| 5:10 | Study         | Lecture        | 03 Benefits of Noise              |
| 5:20 | Break         | -              | Break                             |
| 5:20 | Activate      | Coding         | Intro + Challenges                |
| 5:40 | Study         | Lecture        | Challenges Discussion             |
| 6:00 | Activate      | Coding Lecture | 05 Working With Noise             |


### Outline

01 Noise
- `random()` completely, actually random
- `noise()` random, arranged variation with nice properties
- Perlin Noise is just one example, not the only one.
- Slides

Common Questions/Problems
- Many examples of noise focus on visualizing the noise. Leading students to think that the `noise()` function is mostly when you want something to look like `noise()`. On the contrary, the noise function can be used any time you want _good looking variation_. Also, you probably want to shape the noise a bit so it doesn't look like straight `noise()`.

- `random()` doesn't take parameters but `noise()` does. Understanding what parameters to pass in is often confusing when you start using `noise()`. Once you get a hang of it, the parameters become the key to the power of `noise()`.

04 Noise Worksheet, Building Noise
- Dice, Decks, LUTs
- Roll Dice - Build an N-Dimensional infinite field
- Connect Dots - Create an interpolated look up
- Could extend to more dimensions (figures)
- compare `random()` (dice) to `noise()` (LUT)
- answer key question: where does input come from?
- Make a drawing like [ . o O . o o . O ] using dice, using noise
- Make an animation [ . -> O -> o ] using dice, using noise

02 Noise vs. Random + 03 Benefits of Noise
- `random()` is better when you want actually random _variation_
- `noise()` is better when you want visually pleasing _variation_
- Control Frequency
- Fractal Detail
- Control Repeatability
- Looks Good
- `random()` vs `noise()` examples
- 1D Noise Example
- Range of `noise()`
- Fractal Noise

Challenges
- Intro
- Coding
- Q+A

05 Working With Noise
- Calling Noise: What do you pass in?
- Controlling Frequency
- Amplitude and Range
- Detail (optional)
- Seed (optional)


### Parameters Review Questions

In your assigned team, choose 1 or 2 sketches from the past week and use them to illustrate your answer to your team's question.

| Group | Question                                                                                     |
| ----- | -------------------------------------------------------------------------------------------- |
| 1     | Choose a work that did something unexpected with parameters. Discuss.                        |
| 2     | Choose a work that you 1) like and 2) don't know how how it was made. Describe what you see. |
| 3     | Choose a work that combined elements from a previous week with parameters. Discuss.          |
| 4     | Who had the widest "apparent" parameter space?                                               |
| 5     | The challenge is still not a competition, but who won?                                       |





### Class Notes
[Noise](./index.html) {boxed right}


