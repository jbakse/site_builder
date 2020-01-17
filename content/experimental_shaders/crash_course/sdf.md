---
title: Signed Distance Fields
layout: layouts/compform_chapter.pug
debug: false
---

## Signed Distance Fields

`signed distance field` `circles` `rectangles` `translation` `rotation` `scale`
`union` `intersection` `visualization` 

<br/>

[Ronja's 2D Signed Distance Field Basics](https://www.ronja-tutorials.com/2018/11/10/2d-sdf-basics.html)

[Ronja's 2D Signed Distance Fiedl Combination](https://www.ronja-tutorials.com/2018/11/17/2d-sdf-combination.html)

### SDF Circle
::: .full-width
<div class="glsl_editor" data="./sdf_circle.frag"></div>
/::
<br style="clear: both;"/>

### SDF Rectangle
::: .full-width
<div class="glsl_editor" data="./sdf_rectangle.frag"></div>
/::
<br style="clear: both;"/>

### SDF Visualize
::: .full-width
<div class="glsl_editor" data="./sdf_visualize.frag"></div>
/::
<br style="clear: both;"/>

### SDF Transform
::: .full-width
<div class="glsl_editor" data="./sdf_transform.frag"></div>
/::
<br style="clear: both;"/>

### SDF Combine
::: .full-width
<div class="glsl_editor" data="./sdf_combine.frag"></div>
/::
<br style="clear: both;"/>


::: .activity

## In-class Challenge

Explore the code examples above by completing the following challenges in order. <br/> Don't skip any.

### Modify the SDF Cricle Example

1. Move the field up.
2. Negate the field.

### Modify the Checkerboard 3 Example

1. Make the rectangle wide and short.
2. Align the rectangle to the bottom of the canvas. 


### Modify the SDF Transform Example

1. Disable the scaling.
2. Make the rectangle move in a circle without rotating.


### Modify the SDF Combine Example

1. Replace the `max` with a `min` call.
2. Move the circle to the end of the rectangle.

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