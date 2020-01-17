---
title: Random
layout: layouts/compform_chapter.pug
debug: false
---


## Random

`rand()` `hash functions` `psuedo-random`

<br/>

[Stack Overflow: What's the origin of this GLSL rand() one-liner?](https://stackoverflow.com/questions/12964279/whats-the-origin-of-this-glsl-rand-one-liner)


### Rand()
::: .full-width
<div class="glsl_editor" data="./rand.frag"></div>
/::
<br style="clear: both;"/>

### Checkerboard 3
::: .full-width
<div class="glsl_editor" data="./checkerboard_3.frag"></div>
/::
<br style="clear: both;"/>



### Scattered Dots
::: .full-width
<div class="glsl_editor" data="./scattered_dots.frag"></div>
/::
<br style="clear: both;"/>




### Autopainter
::: .full-width
<div class="glsl_editor" data="./autopainter.frag"></div>
/::
<br style="clear: both;"/>



::: .activity

## In-class Challenge

Explore the code examples above by completing the following challenges in order. <br/> Don't skip any.

### Modify the Rand() Example

1. Make the static change every frame.
2. Make the static black and red.

### Modify the Checkerboard 3 Example

1. Make the checkerboard grayscale instead of full color.
2. Make all the squares in a column the same random color. 


### Modify the Scattered Dots Example

1. Make the dots random sizes.
2. Make the dots random colors.


### Modify the Autopainter Example

1. Make the background a gradient.
2. Add a second circle.


### Challenging Challenges

TBA


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