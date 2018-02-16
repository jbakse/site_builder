---
title: Noise
layout: layouts/compform_plain.pug
debug: false
---


## Week 4, Noise {plain}

### Materials
1D Noise Worksheet, 12-sided dice

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

Homework Discussion
- reason for sketching

01 Noise
- `random()` completely, actually random
- `noise()` random, arranged variation with nice properties
- Perlin Noise is just one example, not the only one.
- Slides
- Many examples of noise focus on visualizing the noise. Leading students to think that the `noise()` function is mostly when you want something to look like `noise()`. On the contrary, the noise function can be used any time you want _good looking variation_. Also, you probably want to shape the noise a bit so it doesn't look like straight `noise()`.
- `random()` doesn't take parameters but `noise()` does. Understanding what parameters to pass in is often confusing when you start using `noise()`. Once you get a hang of it, the parameters become the key to the power of `noise()`.
- live code example using `noise()`


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
- `noise()` is better when you want aethetically pleasing _variation_
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


::: .activity
## Homework Review


::: .headless
| Group | Question                                                                                                                            |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Max, Leah, Sue <br/>Choose a common theme that has appeared in several pieces. Discuss the theme and two example sketchs.           |
| 2     | Bella, Julian, Jack <br/>Choose a work that you feel used parameters is a very well. Why did you choose this piece?                 |
| 3     | Aakanksha, Ting, Patrick <br/>Choose a work that you like and and don't know how it was made. Describe what you see.                |
| 4     | Alyssa, Earl, Mario <br/>Choose a sketch that you think started with plan. What benefits did starting with a plan have?             |
| 5     | Madison, Kirsten, Dahee <br/>Choose a sketch that you think started without a plan. What benefits did starting without a plan have? |
| 6     | Rik, Patricia, Carla <br>The challenge is not a competition. Who won?                                                               |
/::















/::




<style> 
    .headless thead {
        display: none;
    }
</style>



### Class Notes
[Noise](./index.html) {boxed right}





