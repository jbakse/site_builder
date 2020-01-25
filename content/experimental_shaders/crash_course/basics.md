---
title: Basics + Built-ins.
layout: layouts/compform_chapter.pug
debug: false
---

## Basics + Built-ins

`precision` `main` `gl_FragColor` `step` `mod` `floor` `vec2` `vec3` `vec4` `distance` `sin` `domain warping` `swizzling`

### Stripes

::: .full-width

<div class="glsl_editor" data="./stripes.frag"></div>
/::
<br style="clear: both;"/>

### Checkerboard

::: .full-width

<div class="glsl_editor" data="./checkerboard.frag"></div>
/::
<br style="clear: both;"/>

### Rings

::: .full-width

<div class="glsl_editor" data="./rings.frag"></div>
/::
<br style="clear: both;"/>

### Triangle Wave

::: .full-width

<div class="glsl_editor" data="./triangle.frag"></div>
/::
<br style="clear: both;"/>

### Dots

::: .full-width

<div class="glsl_editor" data="./dots.frag"></div>
/::
<br style="clear: both;"/>

### Waves

::: .full-width

<div class="glsl_editor" data="./waves.frag"></div>
/::
<br style="clear: both;"/>

::: .activity

## In-class Challenge

Explore the code examples above by completing the following challenges in order. <br/> Don't skip any.

### Modify the Stripes example

1. Make the stripes horizontal.
2. Make wide white stripes with small black spaces.

### Modify the Checkerboard example

1. Make the checkers smaller
2. Make the checkers wide
3. Find the `mod` call and change the second parameter to `4.0`. This will create diagonal "stripes", kinda. Make the stripes go the other way.

### Modify the Rings example

1. Make them wider.
2. Move the center of the rings.

### Modify the Triangle example

1. Make the triangles bigger.
2. Make them ramp the other way.

### Modify the Dots example

1. Make the dots bigger.
2. Make the dots closer.

### Modify the Waves example

1. Increase the frequency of the waves.
2. Increase the amplitude of the waves.

### Challenging Challenges

Make these!

::: .three-up
![Dot Gradient](./images/dot_gradient.png)
![Wave Wave](./images/wave_wave.png)
![Wave Check](./images/wave_check.png)
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
