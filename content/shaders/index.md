---
title: Shaders
layout: layouts/compform_chapter.pug
debug: false

header_title: Shaders
previous: false
previous_url: false
next: false
next_url: false

hero_title: Shaders
description: ???
software: ???
---

<link type="text/css" rel="stylesheet" href="https://rawgit.com/patriciogonzalezvivo/glslEditor/gh-pages/build/glslEditor.css"/>
<script type="application/javascript" src="https://rawgit.com/patriciogonzalezvivo/glslEditor/gh-pages/build/glslEditor.js"></script>
<link type="text/css" href="shader.css"/>

## Shaders

::: js-lab
/shaders/sketches/gradient.js
/::

::: .full-width

<div class="glsl_editor" data="shaders/gradient.frag"></div>
/::

::: js-lab
/shaders/sketches/rect.js
/::

Step 1: Set all pixels gray.
Step 2: Change the pixels in box red.
Some pixels are changed multiple times.
In step two some pixels are skipped.

::: .full-width

<div class="glsl_editor" data="shaders/rect.frag"></div>
/::

or

::: .full-width

<div class="glsl_editor" data="shaders/rect_branch.frag"></div>
/::

::: js-lab
/shaders/sketches/brownian.js
/::

Highly Serial
The location of each circle depends on the location of the previous circle.
The shade of the pixels in the circle depends on the shade of the pixels in the previous circle.

<script src="./shader_loader.js"></script>
