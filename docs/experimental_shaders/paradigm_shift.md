---
title: Paradigm Shift
layout: layouts/compform_chapter.pug
debug: false

header_title: Thinking in Shaders
previous: 
previous_url: 
next: 
next_url: 

hero_title: Thinking in Shaders
description: Shaders draw in a fundamentally different way than serial shaper rasterizers like the WebGL Canvas API or the Processing graphics API. This difference allows shaders to draw very quickly, but requires a new way of thinking when programming.

software: ShaderToy + glslCanvas
---

## A Paradigm Shift
The CPU—central processing unit—executes the instructions in computer programs. CPU architecutres are designed to be general. They run a wide variety of programs pretty quickly. The GPU-graphics processing unit-also executes computer programs. GPU architectures are specifically designed to address parallelizable problems. They can execute these types of problems extremely quickly, but aren't as well suited serial problems.

Shaders are programs that run on a GPU, often as part of a 3D graphics pipeline. Because the architectures of GPUs and CPUs have different affordances, shader programs have different strengths and limitations. When programming shaders you will often have to think about problems in a entirely new ways.

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

### Latency vs Throughput

CPUs are designed for low latency, they perform one operation at a time as quickly as possible.

GPUs are designed for high throughput, they perform thousands of operations at a time but not as quickly.




## Shading vs Drawing

So thats how the hardware differs, but how do the programming models differ?


!!!!! PULL IN /shaders


## Problem 1: Drawing a Rectangle

rect()

Pixel by Pixel

Shader

Challenge

## Problem 2: Drawing a Gradient

~rect()~

Pixel by Pixel

Shader

Challenge



## Shader Practicalities

!!!!! PULL IN /shaders


## Live Code Problem: Skyline

Goal

p5.js

Shader



## Resources

!!!!! PULL IN /shaders


[Udacity: Intro to Parallel Programming](https://www.youtube.com/watch?v=F620ommtjqk&list=PLAwxTw4SYaPnFKojVQrmyOGFCqHTxfdv2)

[Udacity: Digging Holes](https://www.youtube.com/watch?v=bun_WSB9iRw&list=PLAwxTw4SYaPnFKojVQrmyOGFCqHTxfdv2&index=3)

[Udacity: Core GPU Design Tenets](https://www.youtube.com/watch?v=KdN49C0bxOk&list=PLAwxTw4SYaPnFKojVQrmyOGFCqHTxfdv2&index=17)


[http://oeis.org/](On-line Encyclopedia of Integer Sequences)

[https://www.theguardian.com/science/alexs-adventures-in-numberland/2014/oct/07/neil-sloane-the-man-who-loved-only-integer-sequences](Neil Sloane Profile)


[Mathnet: Case of the Willing Parrot](https://www.youtube.com/watch?v=hrLjLeGUjio)


[Visual 6502](http://visual6502.org/)

[See How a CPU Works](https://www.youtube.com/watch?v=cNN_tTXABUA)