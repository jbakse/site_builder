---
title: Thinking in Shaders
layout: layouts/compform_chapter.pug
debug: false

header_title: Thinking in Shaders
previous: 
previous_url: 
next: 
next_url: 

hero_title: Thinking in Shaders
description: Shaders draw in a fundamentally different way than shape drawing APIs like Canvas or Processing. This difference allows shaders to draw very quickly, but requires a new way of thinking when programming.

software: ShaderToy + glslCanvas
---




## A Paradigm Shift
The CPU—central processing unit—executes the instructions in computer programs. CPU architecutres are designed to be general. They run a wide variety of programs and run them all pretty quickly. The GPU—graphics processing unit—also executes computer programs. GPU architectures are designed to specifically address parallelizable problems. They can execute these types of problems extremely quickly, but aren't as well suited serial problems.

Shaders are programs that run on the GPU. Because the architectures of GPUs and CPUs are different, shader programs have different strengths and limitations compared to programs running on the CPU. When programming shaders you will often have to think about problems in a entirely new ways.

::: .callout

### Types of Shaders

There are several types of shaders. The most common are vertex, fragment, geometry, and compute shaders. 

Vertex
: A [vertex shader](https://www.khronos.org/opengl/wiki/Vertex_Shader) maps a vertex from a 3d model onto the screen.

Fragment
: A [fragment shader](https://www.khronos.org/opengl/wiki/Fragment_Shader) determines what color a single pixel should be. Fragment shaders are sometimes also called pixel shaders.

Geometry
: A [geometry shader](https://www.khronos.org/opengl/wiki/Geometry_Shader) can generate shapes to render.

Compute
: A [compute shader](https://www.khronos.org/opengl/wiki/Compute_Shader) is a general purpose shader that can be used compute arbitrary information. Compute shaders allow GPUs to accelerate non-graphical applications.


This chapter is focused on fragment shaders.

/::


<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js"></script>
<script src="../mess/faces_mess.js"></script> -->





::: .activity

## Serial vs Parallel


Working in large groups, complete the following tasks as quickly as possible without making any mistakes.

### Task 1
**Calculate the first 25 [Fibonacci numbers](https://en.wikipedia.org/wiki/Fibonacci_number).**

The Fibonacci numbers are a sequence of integers in which each integer is the sum of the previous two, starting with 0 and 1.

```javascript
0, 1, 1, 2, 3, 5, ...
```

One way to describe the Fibonacci sequence is with this set of recursive rules.

```javascript
F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)
```

### Task 2
**Calculate the following 25 expressions.**

::: .headless
| a       | c       | d       | e       | f       |
| ------- | ------- | ------- | ------- | ------- |
| 68 * 89 | 86 * 43 | 30 * 11 | 88 * 13 | 72 * 53 |
| 83 * 85 | 14 * 32 | 92 * 26 | 93 * 35 | 13 * 85 |
| 15 * 93 | 13 * 51 | 43 * 74 | 98 * 60 | 44 * 69 |
| 61 * 54 | 55 * 19 | 24 * 16 | 11 * 70 | 11 * 36 |
| 25 * 16 | 19 * 23 | 83 * 34 | 42 * 47 | 24 * 11 |
/::

### Discussion
- Did working in a group make Task 1 faster?
- Did working in a group make Task 2 faster?
- Which task required more difficult arithmetic?
- How did your group approach these two problems?
- Would using other approaches make either task faster?


### Binet's Fibonacci Number Formula
::: .spoiler
[Binet's Formula](http://mathworld.wolfram.com/BinetsFibonacciNumberFormula.html) describes the Fibonacci sequence explicitly. With this formula you can calculate any integer in the sequence without relying on the previous values. With Binet's Formula it is easy to parallelize task 1 above.

```javascript
(n) => (
    Math.pow( (1 + Math.sqrt(5)) / 2 , n) -
    Math.pow( (1 - Math.sqrt(5)) / 2 , n)
    ) 
    / Math.sqrt(5);
```
/::


/::


<style>
.headless thead {
    display: none;
}
.spoiler h3 {
    margin-top: 0;    
}
.spoiler {
    
    position: relative;
}
.spoiler::after {
    content: "Show Spoiler";
    font-family: "Roboto";
    font-size: 10px;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 30px;
    background: black;
    color: white;
    
}
</style>

<script>
var els = document.getElementsByClassName("spoiler");
for (var i = 0; i < els.length; i++) {
    let el = els[i];
    els[i].addEventListener('click', ()=>el.classList.remove("spoiler"));
}

</script>


## Inherently Serial vs Embarrassingly Parallel

> The bearing of a child takes nine months, no matter how many women are assigned.
> 
> — Frederick Brooks, The Mythical Man-Month


GPUs can run shaders very quickly because they are designed for parallel processing.

A problem is _parallelizable_ if it can be divided into parts that can be solved **independently and concurrently**. If a problem is parallelizable, a high number of slow agents can solve it quickly, and a high number of FAST agents can solve it VERY quickly.

A problem is _inherently serial_ if it can't be divided in this way. If many steps rely on the results of previous steps, you have to run the steps in order and one step cannot start until the previous steps are fully complete. 


### Digging a Shaft vs Digging a Trench

Consider [digging a hole](https://www.youtube.com/watch?v=bun_WSB9iRw&list=PLAwxTw4SYaPnFKojVQrmyOGFCqHTxfdv2&index=3). To dig the hole faster you need to either 1) dig faster or 2) hire more diggers. If you are already digging as fast as you can, your only option is hiring more diggers.

If you are digging a trench, you are in luck: it is easy for many diggers to work together to dig a trench. Digging the trench is easily parallelizable. A 10 mile trench doesn't take any longer to dig than 10 foot trench, if you have enough diggers. 

If you are digging a shaft, you have a problem: diggers can't work on the bottom until the top is dug. You have to dig the shaft from the top down. Digging a shaft is inherintly serial. If you hire 100 diggers, 99 of them are going to stand around and watch.

### Serial: Baking a Cake

Not all problems can be divided efficiently. Some problems are [inherently serial](https://en.wikipedia.org/wiki/Parallel_algorithm). For example, consider the steps needed to bake a cake.

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

[Amdahl's Law](https://en.wikipedia.org/wiki/Amdahl%27s_law)

### Parallel: Tinting an Image

In contrast, Tinting an image is [embarrasingly parallel](https://en.wikipedia.org/wiki/Embarrassingly_parallel). You can divide the image into two parts—maybe the top and bottom—and tint both parts at once. Tinting the top doesn't rely on tinting the bottom, and tinting the bottom doesn't rely on tinting the top. Splitting and recombining the parts is very easy. Since there is almost no overhead splitting up the work allows it to be done twice as fast. You can divide the image into 4 parts or 8 parts just as well. Because tinting one pixel doesn't rely on tinting any other, you can divide the image all the way down to each independent pixel and process them all at once. This is the type of problem that GPUs are specifically designed to solve.

::: .columns

::: .half
#### Serial

- Three body problem
- Computing Pi
- Newton's method
- Making a baby
- Baking a cake
- Digging Shafts
/::

::: .half
#### Parallel

- Monte Carlo simulation
- Perlin noise
- Ray-tracing
- Brute-force password cracking
- Tinting images
- Digging trenches
/::
/::


## CPUs vs GPUs

For a long time computer designers focused on digging faster. They crammed in more and more transistors, making them smaller and smaller, and clocking them faster and faster. And for a long time [Moore's law](https://en.wikipedia.org/wiki/Moore%27s_law) held: the number of transistors in CPUs doubled every two years and so did their speed, more or less. But recently CPU designs have approached physical limits and CPU speed improvements are slowing. This has led to computer designers relying more on hiring more diggers.

[Mythbusters Leonardo + Leonardo 2.0](https://www.youtube.com/watch?v=ZrJeYFxpUyQ)

[Short Version](https://www.youtube.com/watch?v=-P28LKWTzrI)

### Single-Thread CPU

CPUs are designed to solve serial problems very quickly. They have super-high clock-speeds and flexible architectures that allow you to mix data reads, writes, and operations freely. They are designed for very low latency, they perform a single operation at a time and finish it as quickly as possible.

![cpu](figures/Single_CPU.svg)

### Multi-Thread CPU

Modern CPUs can do more than one thing at a time. Many CPUs have several cores, and the cores can process multiple threads simultaneously.

![cpu](figures/Multi_CPU_1.svg)

This allows CPUs to run multiple applications at once, but can't always speed up a single application if it doesn't parallelize well.
When problems don't parallelize well, threads often have to wait on data from other threads.

![cpu](figures/Multi_CPU_2.svg)

### GPUs

GPUs are designed to solve parallel problems very quickly. They tend to have somewhat lower clock-speeds than GPUs but many, many more cores. The GPU is futher optimized to perform the same sequence of operations on many sets of data simultaniously. For example a GPU can very quickly halve the R, G, and B values of every pixel in an image to darkin it. GPUs are designed for very high throughput. Performing an operation on the GPU takes longer than on a CPU, but the GPU can perform that operation on many sets of data at once.

![cpu](figures/GPU.svg)

### Latency and Throughput

CPUs are designed for low latency and GPUs are designed for high thoughput. As an anologie consider carrying potatoes across a field. If you carry the potatoes in your hands, you can carry one or two potatoes across the field as fast as you can run. If you carry the potatoes in a wheel barrow, it will take longer to load up and you won't be able to run. But you can carry many, many potatoes at once. The wheel barrow will be faster in the end, but only if you need to move a lot of potatoes to the same place.

## Shading vs Drawing

Drawing APIs that run on CPUs are offer a lot of freedoms. They allow you to:

- Set pixel colors in any order.
- Set some pixels more than once and skip others altogether.
- Interleave reading and setting pixel colors.
- Use information calculated for one pixel to color another pixel.
- Use a different procedure to determine the color of each pixel. 
- Interleave drawing code with other code.

Because fragment shaders are strictly limited to fit the optimized path on the GPU, they can't do any of these things.

A fragment shaders is a small program with one job: calculating the color of a single output pixel. The graphics pipeline will run the fragment once for each pixel that needs to be shaded, providing the contextual information she shader needs. During the rendering of a single frame, a shader might be run millions of times. The GPU can use its many cores and threads to run the shader for many pixels simultaniously. The shader returns a color to the graphics pipeline, which then composites the color onto the target image.

To allow all of this to happen as quickly as possible, shaders must conform to strict limitations.


### Limited Operations
Fragment shaders are confined a narrow set of operations, mostly:

- accessing only specific information provided by the graphics pipeline
- scalar, vector, and matrix arithmetic
- mathematic functions related to trigonometry, exponents, etc.
- sampling values from textures
  

### No Communication, No Memory
Because many shaders run in parallel every thread is isolated from every other thread. Information can not be passed from pixel to pixel. None of the values determined while calculating one pixel can be shared with another and the calculations of one pixel can not affect the calculations for other pixels. When the shader is finished it returns a color value and the values stored in its variables are forgotten.

Every time the shader runs, it starts from scratch.

This often leads to a lot of redundant calculation, but the GPU is so much faster that it often doesn't matter. When it does matter, you may be able to precalculate data on the CPU and pass it to the shader.


### Limited Branching
In imparative languages like C and Javascript, `if`, `for`, and `while` can be used to create conditional branches, dynamically choosing which instructions should be run. GPU hardware is not optimized for branching and early shader models didn't allow branching at all. Generally, the most performant path is for the shader to perform the same sequence of operations on every pixel.

Modern shader models do allow you to include branching in your code, but when a shader encounters branching it threads that don't follow the branch will wait for the threads that do.



::: .callout
### dFdx and dFdy
As mentioned above one shader thread cannot generally access information calculated in another shader thread. The glsl [dFdx and dFdy](https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/dFdx.xhtml) functions provide exception. These functions allow you to compare the value of an expression calculated for the current pixel with the value calculated for a neighboring pixel. 

This stack overflow [answer](https://stackoverflow.com/a/16368768) provides a summary of how these functions work.

This [Anti-aliased grid shader](http://madebyevan.com/shaders/grid/) shows how useful these functions can be.

/::




## Drawing a Rectangle

Let's compare drawing a rectangle using p5.js to drawing a rectangle with a glsl fragment shader.




### p5.js — p5_rect_api.js

With p5.js we don't have to think about pixels at all, we just ask p5.js to draw the rectangle for us.

::: js-lab
/experimental_shaders/thinking_in_shaders/sketches/pt_rect_api.js
/::

#### p5.js — p5_rect_pixel.js

Of course, we _want_ to think about how the rectangle is drawn, pixel by pixel. This version doesn't use any high level API calls like `rect()` or `background()`. It sets the pixel values directly using the following approach.

1. Loop over all the pixels on the canvas; set them to black.
2. Loop over the pixels inside the rectangle; set them to red.


::: js-lab
/experimental_shaders/thinking_in_shaders/sketches/p5_rect_pixel.js
/::

### glsl — rect_branch.frag

This example draws the same thing using a fragment shader. A fragment shader can't choose which pixels to visit and can't choose to visit pixels twice. The shader can only provide what color its assigned pixel should be. The shader approaches the problem like this:

1. Check if the pixel is in the rectangle.
2. If so, return red. If not, return black.


::: .full-width
<div class="glsl_editor" data="shaders/rect_branch.frag"></div>
/::


### glsl rect_no_branch.frag

This example draws the rectangle without using conditional branching. The [step](https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/step.xhtml) and [mix](https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/mix.xhtml) functions are built into glsl. `step(edge, x)` returns `0.0` if x < step, and `1.0` otherwise. `mix(x, y, a)` returns provides linear interpolation between `x` and `y`.  

::: .full-width
<div class="glsl_editor" data="shaders/rect_no_branch.frag"></div>
/::


## Drawing a Gradient

In the examples above, drawing a rectangle in a fragment shader might seem awkward, especially when compared to the p5.js solutions. Take a look at the following examples. Each draws a two-dimensional color gradient. This task is well suited to a fragment shader, and the code more graceful. 

### p5.js — gradient.js

::: js-lab
/experimental_shaders/thinking_in_shaders/sketches/gradient.js
/::

### glsl — gradient.frag

::: .full-width
<div class="glsl_editor" data="shaders/gradient.frag"></div>
/::





::: .activity

## In-class Challenge

Explore the code examples above by completing the following challenges in order. <br/> Don't skip any.

### Modify the rect_branch.frag example

1. Change the background color to white.
2. Change the rect color to blue.
3. Change the code so it draws two rectangles of the same color.
4. Change the code so it draws two rectangles of different color.

### Modify the rect_no_branch.frag example

1. Change the background color to white.
2. Change the rect color to blue.
3. Change the code so it draws two rectangles of the same color.
4. Change the code so it draws two rectangles of different color.


### Modify the gradient.frag example

1. Create a vertical gradient from black to red.
2. Create a horizontal gradient from white to blue.
3. Create a vertical gradient from red to black to red.
4. Create a vertical gradient from red to black to blue.


/::


## Live Code: Skyline

[Skyline Live Code](../skyline/)


## Resources


[The Book of Shaders](https://thebookofshaders.com/)

[Unity Writing Vertex and Fragment Shaders](https://docs.unity3d.com/Manual/SL-ShaderPrograms.html)

[Avoiding Shader Conditionals](http://theorangeduck.com/page/avoiding-shader-conditionals)

[A Gentle Introduction to Shaders (in Unity)](https://unity3d.com/learn/tutorials/topics/graphics/gentle-introduction-shaders)

[Unity Shader Reference](https://docs.unity3d.com/Manual/SL-Reference.html)




[Udacity: Intro to Parallel Programming](https://www.youtube.com/watch?v=F620ommtjqk&list=PLAwxTw4SYaPnFKojVQrmyOGFCqHTxfdv2)

[Udacity: Digging Holes](https://www.youtube.com/watch?v=bun_WSB9iRw&list=PLAwxTw4SYaPnFKojVQrmyOGFCqHTxfdv2&index=3)

[Udacity: Core GPU Design Tenets](https://www.youtube.com/watch?v=KdN49C0bxOk&list=PLAwxTw4SYaPnFKojVQrmyOGFCqHTxfdv2&index=17)


[On-line Encyclopedia of Integer Sequences](http://oeis.org/)

[Neil Sloane Profile](https://www.theguardian.com/science/alexs-adventures-in-numberland/2014/oct/07/neil-sloane-the-man-who-loved-only-integer-sequences)


[Mathnet: Case of the Willing Parrot](https://www.youtube.com/watch?v=hrLjLeGUjio)


[Visual 6502](http://visual6502.org/)

[See How a CPU Works](https://www.youtube.com/watch?v=cNN_tTXABUA)

<link type="text/css" rel="stylesheet" href="https://rawgit.com/patriciogonzalezvivo/glslEditor/gh-pages/build/glslEditor.css"/>
<script type="application/javascript" src="https://rawgit.com/patriciogonzalezvivo/glslEditor/gh-pages/build/glslEditor.js"></script>
<link type="text/css" href="./shader.css"/>
<script src="./shader_loader.js"></script>