---
title: Strategies
layout: layouts/compform_chapter.pug
debug: false

header_title: Strategies
previous: Noise
previous_url: ../noise
next: false
next_url: false

hero_title: Point Placing Strategies
description: Building a complex procedural generation system requires analyzing your problem and creating a strategy for solving it. Explore tactics and strategies for placing points on a square.
software: p5.js
---



## Computational Form Strategies

So far we've been looking at low-level topics like how to use `random()` and `noise()` to get specific results. As our goals grow more complex, we need to look at problems from at a much higher level. To create more complex systems you must first have a clear understanding of the result you would like to achieve, be able to break the problem down into smaller sub-problems, and then plan a series of steps to reach your goal.

### Building a Toolbox

Many problems can be solved using the same techniques composed in different ways.The techniques we have already discussed are building-blocks that can be used in a wide array problems. As we explore other tools and media we will see many common themes and techniques emerge. 

Some of the more complex techniques have earned their own names: pseudo-random number generation, noise sampling, brownian motion, L-systems, neural nets, turtles, Markov chains, poisson-disc sampling, particle systems, fractals, meta-balls. We've explored some of these already and will touch on others in the course of this class, but you don't need to know all of these techniques to build interesting things.

In this chapter we'll be looking at how conceptually simple steps can be combined in different ways to get different effects.



::: .discussion
## Points on a Square
Consider the image below. How might you make something like this?

![tighten_relax](figures/strategies/tighten_relax.png){scale}
/::





## Populating a Square

Most of this chapter will be focus on a single problem area: arranging points on a square. This problem area shows up all the time: placing trees on an island, putting beads of water on glass, adding scratches to a spaceship. In these situations, it is important to control the placement carefully to achieve an appropriate look. Trees tend to grow in groups and in certain areas. Beads of water shouldn't overlap. Scratches are more likely on raised, exposed parts of the ship. Each situation has different requirements, and depending on your approach, your can determine how planned, chaotic, random, natural, or mechanical the placement feels.


::: slides .!short
@@include('./slides.yaml')
/::



::: .activity

## What's the Difference?

Analyze each of the examples below, carefully consider their similarities and differences.

- How does each example compare to the others?
- What characteristics could be used to group similar examples?
- What applications might each placement pattern have?

![overview](figures/pp_tall.png){scale}

<p class="boxed download">
    <a href="../handouts/strategy_workshop.ai" download>strategy_workshop.ai</a>
</p>

/::





### Placing the Points

If we want points arranged on a square, we've got to start by creating some points and assigning them initial positions. There are many, many ways to go about this; here are five relatively simple, but powerful, tactics. I've given each of these tactics a name here, but these are not widely used names.

#### Random Placement
Place each point at a random location on the square.

```javascript
x = random() * width;
y = random() * height;
```

This is a quick, effective, and straight forward way to lay points down. In theory, since the placement is random, all of the points might be placed in a clump or on one half. In practice, the points are mostly evenly distributed over the plane, with some areas a little more or less dense.


#### Grid Placement
Place points on grid squares. One way to do this is a nested loop. This approach guarantees a perfectly even distribution.

```javascript
for (row = 0; row < grid_rows; row++) {
	for (col = 0; col < grid_cols; col++) {
		x = (row + .5) / grid_rows * w;
		y = (col + .5) / grid_cols * h;
        ...
	}
}
```


#### Noise Placement
Place each point at a location determined by a noise lookup.

- Because noise is center biased, the results will center biased.
- Each dot will be placed near the last as the values change in the noise cloud.
- This technique allows you some control over the proximity of successive points.

```javascript
// loop with _i_
x = noise(i * frequency, 0) * w;
y = noise(i * frequency, 1000) * h;
```


#### Cull Placement
Place points randomly, but reject a point if it is too close to an existing point or too far from all existing points. In the example below, three points already exist and a fourth is being considered. Three possible values are shown. One is too close and one is to far, so they are rejected. The third location is okay, and a fourth point at that location is added.

![cull placement 1](figures/cull_placement_1.svg)
![cull placement 2](figures/cull_placement_2.svg)
![cull placement 3](figures/cull_placement_3.svg){three-up no-margin}

::: .links-sidebar
[Jason Davies:<br/>Poisson-Disc Sampling](https://www.jasondavies.com/poisson-disc/)
/::

This tactic is essentially unoptimized poison-disc sampling. Poison-disc sampling is great when you need evenly distributed points without pattern artifacts.



#### Stamp Placement
Create pre-defined arrangements of points by hand or generatively. Copy these arrangements onto different locations.

This technique is allow mixing of hand-made and procedural design.

![stamp placement 1](figures/tile_1.svg)
![stamp placement 2](figures/tile_2.svg)
![stamp placement 3](figures/tile_3.svg){three-up no-margin}


### Moving the Points

These tactics can be used to move existing points. Many effects can be created by combining these with the placement techniques above.

#### Random Displacement
Given a set of points, offset the location of each point a random amount. This can be used to roughen up a rigid arrangement like grid placement produces.

```javascript
x = x + random() * width;
y = y + random() * height;
```

#### Noise Displacement

Displace each point at by an amount determined by a noise lookup.

- This technique allows for nice control over the frequency of displacement.
- Can be used to create wave-like effects.

```javascript
x = x + noise(i * frequency, 0) * w;
y = x + noise(i * frequency, 1000) * h;
```

#### Relaxation Displacement

Find pairs of points that are near each other. Move them towards or away from each other a small amount. This technique is often applied several times in a row with small movements. This avoids the problem of pushing a point away from one, but then into another.

- This technique can be used to push points apart to some minimum distance.
- This technique can also be used to pull points together if they are near each other.
- This technique simulates attractive or repulsive forces acting on the points and can be used to loosely simulate natural phenomenon.


![relax displacement 1](figures/relax_1.svg)
![relax displacement 2](figures/relax_2.svg)
![relax displacement 3](figures/relax_3.svg){three-up no-margin}



#### Noise Culling

Sample noise based on the location of the point. Use the sampled value to determine if the point should be culled (discarded).


![noise cull 1](figures/noise_cull_1.svg)
![noise cull 2](figures/noise_cull_2.svg)
![noise cull 3](figures/noise_cull_3.svg){three-up no-margin}

In the example above points are removed if the corresponding noise value is too low (dark). This results in patches or islands of dots. 




::: .activity
## Tactics Match

What tactics might have been used to get each result below?

Place   | Move
---     | ---
Random  | Random
Noise   | Noise
Grid    | Relaxation
Cull    | Noise Cull
Stamp    | &nbsp;

![overview](figures/pp_tall.png){scale}

<p class="boxed download">
    <a href="../handouts/strategy_workshop.ai" download>strategy_workshop.ai</a>
</p>

/::

### Point Placing Demo
::: js-lab
/strategy/sketches/point_place.js
/::


<!-- [Point Placing Demo](https://jsbin.com/telipu/edit?js,output) -->


## Properties of PCG System
When designing a procedural generation system there are several properties to consider. The following properties are borrowed from [PCGBook: Chapter 1](http://pcgbook.com/wp-content/uploads/chapter01.pdf)

### Speed

- How fast does your program need to run?
- Is it okay if takes a very long time to complete?
- Many times a faster running program is harder to code and understand.
- A frame of VR content needs to be rendered in under 10ms, and a short pre-rendered animation may take days to render.

### Reliability

- Does your program need to produce a good result every time?
- Are results shown directly to your audience, or will you have the opportunity to edit?

### Controllability

- Does your program expose any user parameters?
- Do you want explore the parameter space manually?
- Do you want to have tight control over the results or should everything work automatically?

### Expressivity and Diversity

- How much apparent range does your system have?
- Does everything look same-y?
- Is it okay for your output to be completely wild or does it need to satisfy some constraints?
- If you are exposing parameters, do they allow for meaningful control?


### Creativity and Believability

- Do you want your results to look natural or hand-made?
- Is it okay for them to look "computer-y"?
- If your system is generating variations on something that already exists, how closely do you want to copy the original?

### Repeatability

- Do you need the ability to generate the same result more than once?

::: .assignment

## Challenge + Sketch!

### Base
This is the last week of the "Foundation" unit. Look back at the topics covered so far: tile systems, using random, user parameters, using noise, and now thinking strategically.

Begin by completing the challenges for this week.  Completing this week's challenges will result in two posts. **This week the challenges are required.**

Then keep sketching! For the remaining three posts, I encourage you to build a single, more complex sketch and post work in progress as you go.

### Required Challenge 1: Dots A -> B -> X

- **Analyze** the challenge, clearly describe what the sketch does.
- **Strategize** how you would achieve the same effect.
- **Study** the provided starting code.
- **Recreate** the challenge as closely as you can. You may use the starting code, or start from scratch.
- **Extend** the example to create a unique sketch. Try to make something no one else will.
- **Post** your finished sketch.

`Challenge Goal`
::: js-show
/strategy/sketches/dot_challenge/sketch.js
/::

`Challenge Start Code`
::: js-lab
/strategy/sketches/dot_challenge_start.js
/::



### Required Challenge 2: Line A -> B -> X

Same as above: Analyze, Strategize, Study, Recreate, Extend, Post


`Challenge Goal`
::: js-show
/strategy/sketches/line_challenge/sketch.js
/::

<br/>


`Challenge Start Code`
::: js-lab
/strategy/sketches/line_challenge_start.js
/::




/::




::: .assignment

## Reading + Watch + Play



### Read
[Procedural Content Generation in Games](http://pcgbook.com/) is a collection of research in the field of procedural game content. It covers many interesting topics including dungeon+maze generation, fractals, L-systems, generating rules/mechanics, and mixing proc-gen and human-authored content.

[PCG Book, Chapter 1](http://pcgbook.com/wp-content/uploads/chapter01.pdf){boxed right}

### Watch
[Game Maker's Toolkit](https://www.youtube.com/channel/UCqJ-Xo29CKyLTjn6z2XwYAw) is a Youtube channel that features high-quality video essays on game design.

[GMT: Spelunky](https://www.youtube.com/watch?v=Uqk5Zf0tw3o){boxed right}

### Play
If you want to play Spelunky—optional but highly recommended—original version (not the HD Remake) is free.

[For PC](http://spelunkyworld.com/original.html){boxed right}
[For Mac](https://forums.tigsource.com/index.php?topic=28467.0){boxed right}

/::


## Reference Links

[Game Maker's Toolkit: How (and Why) Spelunky Makes its Own Levels](https://www.youtube.com/watch?v=Uqk5Zf0tw3o)
: Overview of the Spelunky level generator from a technical and critical perspective.

[Darius Kazemi: Spelunky Mod](http://tinysubversions.com/spelunkyGen/)
: Darius kazemi has created a mod of the original Spelunky that runs in the browser and visualizes level generation.

[bl.ocks.org: Poisson-Disc](https://bl.ocks.org/mbostock/19168c663618b7f07158), [Poisson-Disc II](https://bl.ocks.org/mbostock/dbb02448b0f93e4c82c3)
: Poisson Disc description, visual explanation, and sample code by Mike Bostock.

[Devmag.org: Poisson Disk Sampling](http://devmag.org.za/2009/05/03/poisson-disk-sampling/)
: Longer article on implementing and applying Poisson Disk Sampling

[Random Points on a Sphere](https://www.jasondavies.com/maps/random-points/)
: Nice, interactive demo of three strategies for placing points on a sphere.


[Leena's Inception Overworld Overview](http://bytten-studio.com/devlog/2014/09/08/overworld-overview-part-1/)

