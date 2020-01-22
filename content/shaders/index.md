---
title: Fragment Shaders
layout: layouts/compform_chapter.pug
debug: false

header_title: Fragment Shaders
previous: false
previous_url: false
next: false
next_url: false

hero_title: Fragment Shaders
description: Shaders are programs that are run on the GPU to color individual pixels.
software: GLSL, Unity
---

<link type="text/css" rel="stylesheet" href="https://rawgit.com/patriciogonzalezvivo/glslEditor/gh-pages/build/glslEditor.css"/>
<script type="application/javascript" src="https://rawgit.com/patriciogonzalezvivo/glslEditor/gh-pages/build/glslEditor.js"></script>
<link type="text/css" href="shader.css"/>

## Fragment Shaders

A Fragment Shader is a program for drawing pixels on the video card. A shader recieves the postion of a single pixel, and maybe some additional application-specific information, and returns a single color. Conceptually, the instructions in a fragment shader are run for every single pixel being drawn simultaniously. This allows shaders to run very quickly, but also imposes strict limitations on them. Do to these limitations, programming a shader often requires thinking in a different way.

<!-- Shaders are run at a specific point in the modern graphics pipeline. When rendering 3D geometry the pipeline will first determine where on the screen the object will appear and which pixels it will cover. Conceptually, the instructions in a fragment shader are then run for every single pixel being drawn simultaniously. The video card takes the returned color values and composites them onto the final image. -->

::: .callout
For more information on what a shader is, how they work, and how to make them, please take a look at [thebookofshaders.com](https://thebookofshaders.com/). It is an excellent resource for learning how to create purely generative drawings with shaders, and it is one of the inspirations for this site.
/::

## Serial vs Parallel



### Serial: Baking a Cake

Not all problems can be divided efficiently. Some problems are _inherently serial_. For example, consider the steps needed to bake a cake.

1. Collect ingredients
2. Measure ingredients
3. Combine ingredients
4. Pour batter into pan
5. Preheat oven
6. Bake batter
7. Cool cake
8. Ice cake
9. Decorate cake

Most of these steps must be done in order. You can't measure ingredients you haven't collected, you can't combine ingredients before you measure them, you can't ice a cake you haven't baked. You _can_ preheat the oven while you collect, measure, and combine the ingredients but that is the only part of the process where working in parallel can help.

### Parallel: Tinting an Image

In contrast, Tinting an image is _[embarrasingly parallel](https://en.wikipedia.org/wiki/Embarrassingly_parallel)_. You can divide the image into two parts—top and bottom—and tint both parts at once. Tinting the top doesn't rely on tinting the bottom, and tinting the bottom doesn't rely on tinting the top. Recombining the parts is easy, so splitting up the work allows it to be done much faster. You can divide the image into 4 parts or 8 parts just as well. Because tinting one pixel doesn't rely on tinting any other, you can divide the image all the way down to each independent pixel and process them all at once. This is the type of problem that GPUs are specifically designed to solve.

## CPUs vs GPUs

### Single-Thread CPU

CPUs are designed to solve serial problems very quickly. They have super-high clock-speeds and flexible architectures that allow you to mix data reads, writes, and operations freely.

![cpu](figures/Single_CPU.svg)

### Multi-Thread CPU

Modern CPUs can do more than one thing at a time. Many CPUs have several cores, and the cores can process multiple threads simultaneously.

![cpu](figures/Multi_CPU_1.svg)

This allows CPUs to run multiple applications at once, but can't always speed up a single application if it doesn't parallelize well.
When problems don't parallelize well, threads often have to wait on data from other threads.

![cpu](figures/Multi_CPU_2.svg)

### GPUs

GPUs are designed to solve parallel problems very quickly. They tend to have somewhat lower clock-speeds than GPUs but many, many more cores. The GPU is optimized to perform a fixed set of operations on many sets of data simultaniously. The GPU prepares the data, performs the operations, and reads the final results.

![cpu](figures/GPU.svg)

## Shader Limitations

Shaders can run very fast because they are strictly limited to fit the optimized path on the GPU. Some types of problems can not be easily expressed within these limitations and are better processed on a CPU. Many graphics processing problems—including 3d rendering and 2d image compositing—fit neatly into these limitations making GPUs much faster for these types of problems.

#### No Communication

Shaders do not allow data to be passed from thread to thread. None of the values determined while calculating one pixel can be shared by another. The calculations of one pixel can not affect the calculations for other pixels.

This can lead to a lot of redundant work, but often the GPU is so much faster that you still get great performance. It is also possible to precalculate data on the CPU and pass it to the shader.

#### Short Memory

The values determined in the shader are not remembered. Every time the shader runs, it starts from scratch.

#### Limited Branching

In imparative languages like C and Javascript, `if` is used to create a conditional branch, dynamically choosing which instructions should be run. GPU hardware is not optimized for branching. Early shader models didn't allow branching at all. Generally, the most performant path is for the shader to perform the same sequence of operations on every pixel.

When a shader encounters branching it might actually execute both possible sets of instructions and simply throw away what it doesn't need.

## p5.js vs Shaders

### Embarassingly Parallel: Creating a Gradient

This example creates a two dimensional color gradient. Changing from black to red on the X axis and from black to green on the Y axis. Every pixel is assigned a color, and calculating the correct color depends only on knowing the position of the pixel. This is a pretty easy image to generate in both p5.js and in a GLSL shader, and the solutions look somewhat similar.

A key difference is that the shader just calculates the color and returns it. The p5.js example has to do the surrounding work of looping through all the pixels, setting up a drawing area, etc.

#### p5.js Gradient

::: js-lab
/shaders/sketches/gradient.js
/::

#### GLSL Gradient

::: .full-width

<div class="glsl_editor" data="shaders/gradient.frag"></div>
/::

### A Shift in Perspective: Drawing a Rectangle

This example draws a red rectangle on a gray background. The p5.js version doesn't use any high level API calls like `rect()` or `background()` so we can directly see how the pixel values are being set. The p5.js verson approaches the problem like this.

1. Loop over all the pixels; Set them to gray.
2. Loop over the pixels inside the rectangle; Set them to red.

The shader example can not follow the same approach. A shader can't choose which pixels to visit and can't choose to visit pixels twice. The shader is simply run once for every pixel and must determine what color the pixel should be while it runs. The shader approaches the problem like this:

1. Check if the pixel is in the rectangle.
2. If so, return red. If not, return gray.

The final version uses a shader that calculates the color without branching.

#### p5.js Rect

::: js-lab
/shaders/sketches/rect.js
/::

#### GLSL Rect

::: .full-width

<div class="glsl_editor" data="shaders/rect_branch.frag"></div>
/::

#### GLSL Rect without Branching

::: .full-width

<div class="glsl_editor" data="shaders/rect.frag"></div>
/::

### Inherently Serial: Brownian

This example creates a complex image by tracing brownian motion. It draws a series of circles moving in a random direction. The location of each circle depends on the location of the previous circle and is inherently serial. Additionally the circles are drawn with transparency, so calculating each pixel color depends on reading the color of the canvas where it will be drawn. This effect would not translate to a shader well.

#### p5.js Brownian

::: js-lab
/shaders/sketches/brownian.js
/::

::: .activity

## In-class Challenge One

Explore using p5's pixel manipulation functions by modifying the scripts above. Work through the following challenges in order. <br/> Don't skip any.

### Modify the Gradient Example

1. Change both versions to make a solid blue image.
2. Change both versions to make a gradient from white to black.

### Modify the Rectangle Example

1. Change all three versions to move the rectangle to the lower half.
2. Change all three versions to add a second rectangle colored blue.

/::

<script src="./shader_loader.js"></script>

## Live Code

<video controls>
  <source src="figures/shader_demo.mp4" type="video/mp4">
</video>

## Resources

[The Book of Shaders](https://thebookofshaders.com/)

[Unity Writing Vertex and Fragment Shaders](https://docs.unity3d.com/Manual/SL-ShaderPrograms.html)

[Avoiding Shader Conditionals](http://theorangeduck.com/page/avoiding-shader-conditionals)

[A Gentle Introduction to Shaders (in Unity)](https://unity3d.com/learn/tutorials/topics/graphics/gentle-introduction-shaders)

[Unity Shader Reference](https://docs.unity3d.com/Manual/SL-Reference.html)
