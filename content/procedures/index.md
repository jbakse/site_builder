---
title: Procedures
layout: layouts/compform_chapter.pug
debug: false

header_title: Procedures
previous: TBA
previous_url: ../introduction
next: TBA
next_url: ../parameters

hero_title: Procedures
description: Procedures are blah blah.

software: TBD
---

## Procedures



Procedures—specific, defined, processes—lie near the heart of computational form. 

[general define this better]
[in context of this site]

[Artists have explored the conceptual and aesthetic implications of generative art for a while][The increasing prevalence of digital fabrication and short run manufacturing has stirred interest in parametric design] [PCG is widely used in the video game industry to create worlds far to complex to craft by hand]
[the web, realtime, personalized content]


::: .discussion
## Why use Procedures?
Consider the advantages and disadvantages of using procedures to generate form.
/::

[[ the discussion above is a chance to stop and think about the topic before reading the stuff below ]]


###[Working with procedures has many benefits]
[reduce errors]
[reduce tedium]
[iterate quickly]
[fresh eyes]
[personalization]
[realtime]
[do the imposible]



::: .activity

## The Sierpinski Triangle

Draw a Sierpinski triangle with pencil&nbsp;and&nbsp;paper.

The [Sierpinski Triangle](http://en.wikipedia.org/wiki/Sierpinski_triangle) is a fractal. It is **infinitely detailed** and **self-similar**. There are many, many ways to generate a Sierpinski triangle. The amazing [Sierpinski triangle page to end most Sierpinski triangle pages](http://www.oftenpaper.net/sierpinski.htm) details dozens of them. Here is yet another.

### Instructions

Please take out a sheet of paper and pen and follow these instructions:

1. Draw an up-pointing equilateral triangle that fills most of the page.
2. Lightly mark the midpoint of each line of that triangle.
3. Draw straight lines connecting each of those marks. This forms **four** new triangles: **three** that point up, **one** that points down.
4. Choose any empty, up-pointing triangle on the page.
5. Go to instruction 2.


Yes, these instructions will go on forever. Stop after a few minutes.

[stand-alone instructions](../introduction/sierpinski.html){boxed right}

/::


## [Code example]
[[Computation doesn't necessairly  mean computer programming or even computers, but computers _are_ and exceptionally powerful tool for exploring procedural generation. They are very fast, very accurate, predicatble, and reliable. They don't complain about the tedium.]]

[reference Hello, P5! chapter]


[[Example 1]]
[[A live code example, discussed on how code relates to form, and then as a springboard for talking about broader issues]]
[[When working with a procedure the iterative process is indirect. write the procedure, execute the procedure, consider the result, adjust the procedure.]]

[[Example 2]]
One that makes "small multiples" with variations.

[[Example 3]]
One that is small in code but surprisingly complex: The donkey solution for Sierpinski triangle.

## In class challenges






::: .callout

**Tackling Complexity**

When beginner and intermediate programmers run into trouble building more complex projects, they often hear this advice:

> Break your problem into smaller parts, and solve those parts.
<!-- 
[[process vs. structure]]
[[this confuses the process of developing a program with the structure of that program]]
[[a well factored/composed program breaks problems down into sub-problems ]]
[[as a process this is necessary but not sufficient ]] -->

This advice falls short because it describes how the final program should be structured rather than the process of developing it. It is hard to understand a complex problem and it is hard to break complex problems down into parts. How big should the parts be? How do you build an individual part without the other parts it depends on? Once you have a few working parts, how do you put them together?  With experience, these questions get easier to answer, but advanced programmers still frequently encounter problems they can't initially understand well enough to break down. When this happens to you, you still have an option for getting started: **make a simpler program**.

Imagine you want to make a game like [pong](https://www.youtube.com/watch?v=1LsRGUODHlQ). You could begin by trying to break it down into sub-tasks—keyboard controlled paddles, an animated ball, a scoreboard—but it is hard to plan all those pieces all at once. At the planning stage, you will have a rough idea of how each piece should work. But before you start implementing each piece, you won't know the details. Without understanding the details, the pieces you make probably won't fit together. You might end up with a lot of code that doesn't work and you don't understand. It is much better to have a little bit of code that does work and that you do understand.

Instead, you could start with a very simple program: just draw a little square—the ball—on the screen. Build and run this program to make sure it works. Then start adding on. Make the ball move to the right. Don't worry about the paddles or the score yet: focus on the ball. Make the square bounce when it hits the side. Then make it move diagonally. Make the ball bounce off all the sides. You might make dozens of incremental working programs as you get the basic ball working. As you do, take the time to review the code and make sure you understand how everything works.

Working this way will let you discover the details of how your ball—an important piece of your program—works. These details will help you see how that piece will work with the others. As you start to build other elements—like the paddles or scoreboard—you might find out that you need to go back and change how the ball works. Expect to run into some dead ends, and expect the need to back track. This might have been avoided if you had made a complete plan in the beginning, but _in the beginning, you didn't know enough to make a complete plan_. This reason this strategy works is simple: **instead of trying to do something you can't, you are trying to do something you can.**

/::





## Properties of PCG Systems

[[ elaborate here... ]]
When designing a procedural generation system there are several properties to consider. The following properties are borrowed from [PCGBook: Chapter 1](http://pcgbook.com/wp-content/uploads/chapter01.pdf)

### Speed

* How fast does your program need to run?
* Is it okay if it takes a very long time to complete?
* Many times a faster-running program is harder to code and understand.
* A frame of VR content needs to be rendered in under 10ms, and a short pre-rendered animation may take days to render.

### Reliability

* Does your program need to produce a good result every time?
* Are results shown directly to your audience, or will you have the opportunity to edit?

### Controllability

* Does your program expose any user parameters?
* Do you want explore the parameter space manually?
* Do you want to have tight control over the results or should everything work automatically?

### Expressivity and Diversity

* How much apparent range does your system have?
* Does everything look same-y?
* Is it okay for your output to be completely wild or does it need to satisfy some constraints?
* If you are exposing parameters, do they allow for meaningful control?

### Creativity and Believability

* Do you want your results to look natural or hand-made?
* Is it okay for them to look "computer-y"?
* If your system is generating variations on something that already exists, how closely do you want to copy the original?

### Repeatability

* Do you need the ability to generate the same result more than once?





::: .assignment

## Read + Watch + Play

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


## Additional Reading

PCG Book
Dan Shiffman Book + Site
Generative Design

