---
title: Shaping and Mixins
layout: layouts/compform_chapter.pug
debug: false
---


## Shaping + Mixing

`abs` `min` `max` `clamp` `mix` `smoothstep` `periodic functions` `addative synthesis`


### Disc
::: .full-width
<div class="glsl_editor" data="./disc.frag"></div>
/::
<br style="clear: both;"/>


### Puzzle
::: .full-width
<div class="glsl_editor" data="./puzzle.frag"></div>
/::
<br style="clear: both;"/>

### Moon
::: .full-width
<div class="glsl_editor" data="./moon.frag"></div>
/::
<br style="clear: both;"/>



### Sticker
::: .full-width
<div class="glsl_editor" data="./sticker.frag"></div>
/::
<br style="clear: both;"/>

### Checkerboard 2
::: .full-width
<div class="glsl_editor" data="./checkerboard_2.frag"></div>
/::
<br style="clear: both;"/>



::: .activity

## In-class Challenge

Explore the code examples above by completing the following challenges in order. <br/> Don't skip any.

### Modify the Disc example

1. Make the disc less blury.
2. Make a radial gradient from white out to black.

### Modify the Moon example

1. Remove the small bumps from the horizon.
2. Move the horizon up.
3. Lighten the sky.


### Modify the Sticker example

1. Move the stripe up a little.
2. Make the sticker white, with a black stripe.
  
### Modify the Checkerboard 2 example

1. Make the dark squares middle gray.
2. Make the light squares a gradient from black to white.
  
### Challenging Challenges

Make these!

::: .three-up
![Two Discs](./images/two_discs.png)
![Moon Two](./images/moon_2.png)
![Checker Sticker](./images/checker_sticker.png)
/::


/::


<link type="text/css" rel="stylesheet" href="https://rawgit.com/patriciogonzalezvivo/glslEditor/gh-pages/build/glslEditor.css"/>
<script type="application/javascript" src="https://rawgit.com/patriciogonzalezvivo/glslEditor/gh-pages/build/glslEditor.js"></script>
<link type="text/css" href="./shader.css"/>
<script src="./shader_loader.js"></script>

<style>
  .glsl_editor {
    position: relative;
    min-height: 300px;
    
   
  }
  .ge_editor {
    min-height: 300px;
  }
</style>