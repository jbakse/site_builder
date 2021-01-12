---
title: Introduction
layout: layouts/compform_chapter.pug
debug: false

header_title: "Introduction"
previous: false
previous_url: false
next: Random Values
next_url: ../random

hero_title: Introduction
description: Using a computer to explore aesthetics is a powerful creative process. This class explores a variety of tools and techniques for creating algorithmic images, generative art, parametric designs, and procedurally generated content.
software: p5.js + p5.dom
---

## What Computational Form Is

> Q: Can the computer substitute for the Designer?
>
> A: Probably, in some special cases, but usually the computer is an aid to the Designer.
> {bigger}

Charles Eames, Design Q&A [Transcript](http://www.markwunsch.com/eames.html) [Video](https://www.youtube.com/watch?v=bmgxDCujTUw&feature=emb_logo){attrib} 

This is a class about computational form, algorithmic images, generative art, parametric design, and procedural generation. In this class, we will explore a creative process in which form is made indirectly, by creating and then following a defined processes. We will write instructions that a computer will follow to create images, animations, sounds, and sculptures.

We will make things that make things.{bigger}

There are many reasons artists and designers employ algorithmic methods. Some important ones include:

- exploring new aesthetics
- automating complex tasks
- enhancing variety
- creating dynamic, responsive content

This class will focus on exploration, experimentation, and skill bilding.

<!-- ::: slides .contain
// needs @@ before inclue
include('./compform_slides.yaml')
/:: -->


::: slides .contain
@@include('../procedures/compform_slides.yaml')
/::


### What Computational Form is Not

While we use computer programming throughout this class, it is important to understand that procedural generation doesn't require a computer. Procedural generation is about defining instructions and processes that create form. Computers are very useful tools for carrying out these instructions, but artists have also built systems that rely on humans or purpose-built machines instead. Many of the works included in the slideshow above embody principles of computation and instruction without using computers.



<!-- ::: .activity

## The Sierpinski Triangle

Draw a Sierpinski triangle with pencil&nbsp;and&nbsp;paper.

The [Sierpinski Triangle](http://en.wikipedia.org/wiki/Sierpinski_triangle) is a fractal. It is **infinitely detailed** and **self-similar**. There are many, many ways to generate a Sierpinski triangle. The amazing [Sierpinski triangle page to end most Sierpinski triangle pages](http://www.oftenpaper.net/sierpinski.htm) details many of them. Here is another.

### Instructions

Please take out a sheet of paper and pen and follow these instructions:

1. Draw an up-pointing equilateral triangle that fills most of the page.
2. Lightly mark the midpoint of each line of that triangle.
3. Draw straight lines connecting each of those marks. This forms **four** new triangles: **three** that point up, **one** that points down.
4. Choose any empty, up-pointing triangle on the page.
5. Go to instruction 2.

Yes, these instructions will go on forever. I'll interrupt you in a minute.

[stand-alone instructions](./sierpinski.html){boxed right}

/:: -->

## About this Class

In this class, we will make things that make things. We will **explore** a variety of programming languages, tools, and methods. We will **create** a variety of forms: graphics, sounds, videos, animations, even 3D-printed objects. The primary goals of this class are to introduce **new ways of making** and to encourage **aesthetic investigation**.

![Make Things that Make Things](./figures/make_things.png){full-width}

We'll work in Javascript most weeks, using a variety of libraries including p5.js, paper.js, and tone.js. We'll also look at some other languages and tools, like OpenSCAD. As we go we'll examine the differences between these tools and how these tools influence what we make.

We will also explore interesting programming topics including:

- pseudo-random numbers
- Perlin noise
- composing strategies and tactics
- Markov chains
- Context Free Grammers
- Imparative vs Declaritive programming

### Prerequisites

This class is designed to support beginning, intermediate, and advanced students. That said, to be comfortable in this class, it is best if you have had an introduction to a procedural programming language such as Javascript or Processing.

We will be exploring and creating projects in a variety of programming tools and languages. It is very likely that some of them will be completely new to you, no matter your current level of experience. 

Coming into this class, you should:

- understand the basics of procedural programming: variables, conditionals `if`, looping `for`, functions, etc.
- be able to create a simple project in Javascript (with p5.js) or Processing from scratch, using the tools of your choice.
- be comfortable working in Adobe Illustrator and Photoshop.
- be comfortable capturing digital images with a camera and scanner.

That said, this class offers a good deal of flexibility. If you are not sure if you are ready for this class, please speak with me to make a plan.
### Class Format + Homework
This semester the class will be held online. We will meet every week for the full class time, and each class will be packed. Zoom lectures are boring and tiring. To maximize our time together, most class time will be used for hands-on activities, group breakouts, and interactive Q+A and livecoding.

Each class introduces a new topic or tool. You will prepare with an advanced reading and coding challenge. In class we will review sketches, discuss the reading and challenges, and complete hands-on activities in groups. After each meeting you will create daily sketches exploring the weeks themes.

This sketching process is central to the approach of the class. There are NO long term projects in this class. No midterm project, no final project. Just sketching.

**The emphasis in this class will be on personal exploration, learning to learn, and skill building—not on outcomes.**

![This not That](figures/this_not_that.png){full-width}


### Notes on Daily Sketching

Your goal **each day** should be to explore a different aspect of the weekly theme. Ideally, you will spend **1 to 2 hours on an idea**, resulting in an image or other artifact. Each day you will work on **a new idea**, possibly informed by something you did earlier in the week or class.

<br>

> So I have to post something **every single day**?
The spirit of the assignment is daily practice + flexibility. ~~Five~~ Four posts a week that explore the weekly theme in a variety of ways is considered `A` work.

::: .callout
Normally I require 5 skeches each week. I'm reducing 
this to four because I'm going to be assigning a weekly 
advanced reading and coding challenge to fit the online class format.
/::


<br>

> What if I miss a day?

That is fine, spend more time on another day and post twice.

<br>

> Can I spend, say, 8 hours all in one day? Maybe I'll pull an all-nighter.

Don't do that. This process is about exploring different ideas. Spacing out your work gives you time to think and reflect. Creativity often comes in the space between actions.

<br>

> How long should I spend on a sketch?

Between 1 and 2 hours. Ideally 90 minutes.

<br>

> What if I make something I like in 15 minutes?

Post it! We want to see it. Then keep working, fill the time. Post again.

<br>

> What if I work for two hours and I'm not done or I don't really like what I've made?

Post it. Then stop working. Try something different tomorrow.

<br>

> 1 to 2 hours is too short. Can I work longer?

Two hours should be a daily maximum.

If after two hours you still feel excited about what you are doing, make an in-progress post, take a break, and build on it the next day. 

If you are frustrated, just post what you've got and move on. Don't ever put more than 2 hours into a frustrating sketch. Just post what you've got and start fresh on something else the next day.

If you find you often need more than 90 minutes, you are probably trying to make things that are too complex.

<br>

> Can I post a work in progress and keep working on it tomorrow?

Yes. Sometimes. But don't work on one thing the whole week. Sketch a variety of ideas each week.

<br>

> I can't decide what to work on today.

If you have more than one idea, just pick one at random. Don't change your mind, just run with it. You are only investing an hour or two and you can try another idea tomorrow.

If you have no ideas, review the class notes, do some Google image searches, and be open to _any_ idea that pops up. Just run with the first idea even if it seems bad.

<br>

> I can't get whatever technology we are working on this week to work; my computer is broken; I missed class and I'm lost; I'm just lost this week. What should I do?

Post anyway. If you can't do exactly what you want, find something close that you can do and do that. Focus on the themes rather than the technology. If the tech isn't working use something else. Most weeks you could make interesting sketches, related to the weekly themes, without even using a computer.

<br>

> What about the challenges? Do they count as sketches?

Yes, they do. Each week I'll include an individual and a pair challenge. The challenges are _required_, but each challenge counts towards your weekly sketches and follows the sketching guidelines (spend 1 to 2 hours on them).

<br>

> I'm tired of looking at the computer screen. Can I do a couple of posts with paper/paint/glue/wood/whatever?

Absolutely. **I highly recommend that you do!** The more variety between your posts the better. If the work relates to the weekly topic, you can make it however you want. I strongly suggest making at least one sketch without a computer each week.

<br>

> I'm a data vis major. I'm a game design major. I like making websites. I'm interested in dance. Can I make data visualizations/games/websites/dances in this class?

Yes! I encourage you to think about how each weekly theme relates to your own interests and practice. It is a great idea to make a sketches that explore those relationships. 

<br>

> What about in-class work? Does that count?

Some weeks we'll have time set aside in class to make something, some weeks we won't. If we do start something in class, you can finish it after class and post it as one of your sketches.

<br>

> Bottom line, how much time do I have to spend on these sketches?

90 minutes per sketch is ideal.

Don't put more than 2 hours in on a sketch. If your sketch takes that long it is too complex or too difficult for your current skill level. It is okay to stop at 2 hours even if your sketch is broken. Post whatever you have. If you put in the work, you'll get full marks for the sketch.

Don't put in less than 45 minutes. Sometimes, you'll make a really nice sketch pretty quickly. If that happens, post it! But keep exploring variations on your idea. If you often get done very quickly, you probably need to work on more challenging sketches.

Four sketches at 90 minutes each is 6 hours. The weekly advanced reading and coding challenge will take about one to two hours. Expect to spend about 7 to 8 hours each week on homework for this class. 


### Syllabus Notes

### Attend every class, arrive early, stay late.

Attend every class. This class moves fast. New content is introduced in every meeting. We will have individual or group activities in most if not all meetings. Don't miss any.

Arrive early. Get to the room early, review the sketches of your fellow students, make sure your av is working. Get yourself mentally settled and ready for class.

Stay late. After class, take some time to summarize the week's key content in your sketchbook, make note of ideas you'd like to explore in your sketches.

### Be Prepared

Bring your computer + a Comp Form sketchbook + red pen + black pen + pencil + camera/phone to every class.

### Original Work

All the work you submit for this class should be your own. For the most part you should create all the code, images, and writing used in your sketches yourself. In some cases it might make sense to incorporate something you didn't make yourself but make it clear when you do so.

**If your work builds on or includes anyone else's work, make sure you cite it and give them credit!**

### Who I am

I am Justin Bakse. I am an assistant professor of interaction design at Parsons. I am personally very interested in computational form and have used computational methods in a great deal of my work. You can see some of my work below or [on my website](http://justinbakse.com/).

::: slides .scale
@@include('./justin_slides.yaml')
/::