---
title: Random
layout: layouts/compform_chapter.pug
debug: false

header_title: "Topic 4: Random Values"
next: Noise
next_url: ../noise
previous: Parameters
previous_url: ../parameters

hero_title: Random Values
description: Randomness occurs frequently in nature. Gaining control over its generation is therefore paramount to achieving natural-appearing procedural graphics.
software: p5.js + p5.dom
---

## Learning Objectives
- Technical: Gain familiarity with the p5.js library
- Understand the `random()` function and using it to bias outcomes
- Be able to identify what random bias looks like
- Gain an understanding of pseudorandom values and what makes it predictable
- Technical: Introduction to Git and Github

[[the above section Talia fabricated, it wasn't on the original. It may require revisiting]]
[[ this was entered in by Talia, needs review]]
[[ this page only has the first 70% ported]]


## Procedurally Generated Images

#### Consider:
- Which aspects of each work were influenced by chance?
- Which aspects were controlled by the artist?

::: slides .!short
@@include('./slides.yaml')
/::


## What p5 is

From the p5js homepage:

::: .callout
p5.js
: is a JavaScript library that starts with the original goal of Processing, to make coding accessible for artists, designers, educators, and beginners, and reinterprets this for today’s web.
/::

P5 is a javascript library for making drawings and animations. It makes getting set up and working faster and provides simple functions for common tasks. It also allows for a more imperative programming style, similar to Processing.

If you have never worked with Processing or p5, you’ll need to do some reading and learning on your own. Here are some resources to get you started quickly:

[p5.js Website](https://p5js.org/)

[Justin's Creative Computing Class](http://pucd2035-e-f15.github.io/class_notes/)


## The Methodical Application of Chance

::: .assignment
## 2d6 vs 1d12 Chart
Compare the outcomes of rolling 2 6-sided dice to rolling 1 12-sided die.

### One
Roll two six-sided dice 50 times.
Plot sums.{bigger}

### Two
Roll two twelve-sided dice 50 times.
Plot sums.{bigger}

/::

### Generating Random Numbers

Plain Javascript provides `Math.random()` to generate a random number.
[[move to bottom of section]]

Processing provides the `random()` for generating random numbers. Without any parameters, `random()` generates a random number between 0 and 1 (not including the 1). You can pass parameters to control the range of the number. The numbers produced by random are pretty close to evenly distributed.


```javascript
function setup() {
	console.log("random()");        // random()
	console.log(random());          // 0.45...
	console.log(random());          // 0.12...
	console.log(random());          // 0.37...

	console.log("random(10)");      // random(10)
	console.log(random(10));        // 4.89...
	console.log(random(10));        // 1.20...
	console.log(random(10));        // 6.99...

	console.log("random(20, 30)");  // random(20, 30)
	console.log(random(20, 30));    // 21.96...
	console.log(random(20, 30));    // 20.56...
	console.log(random(20, 30));    // 22.36...
}
```


#### Specifying a Range

If you want your numbers evenly distributed over a range, `random()` works as-is.

:::
```javascript
random(0,10); // even distribution between 0 and 10
random(10,15); // even distribution between 10 and 15
```
/::

In some libraries, the `random` function doesn’t take parameters and always gives you a value between 0 and 1. If you want a different range, you can scale and offset the value yourself:

:::
``` javascript
random() * range + start
random() * 5 + 10 // even distribution between 10 and 15
```
/::

#### Random Integers
The `random()` function returns floating point values, but sometimes you want just whole numbers (integers). The floor() function will round a number down, chopping off the decimal part.

:::
``` javascript
// roll a standard die
floor(random(0,6)) + 1
// or
floor(random(1,7))

// this won't quite work. why?
floor(random(1,6))
```
/::

The p5 library also has a `round()` function that rounds a number to the nearest integer. Using `round()` instead of `floor()` in the example above will cause incorrect results: `1` will get picked half as often as it should, and `7` will sometimes get picked and should not.

### Biased Distribution
The examples above will produce results evenly distributed across their range.

Often even distribution isn’t what you really want. Often you want to **bias** the results towards the low-end, high-end or middle. Simple averaging and the `min()` and `max()` functions can help with this.

#### Even Distribution:

`random(1,11)`

::: .callout
![even distribution](./even.svg){scale}
/::


#### Low Bias Distribution:

`min(random(10), random(10))`
Taking the lowest of two or more random numbers will bias the result toward the low-end.

::: .callout
![even distribution](./low_bias.svg){scale}
/::

The more random numbers you use, the stronger the bias: `min(random(10), random(10), random(10), random(10))`

::: .callout
![even distribution](./low_bias2.svg){scale}
/::


#### High Bias Distribution:

`max(random(10), random(10))`

::: .callout
![even distribution](./high_bias.svg){scale}
/::
#### Middle Bias Distribution:

`(random(1,11) + random(1,11)) / 2`

::: .callout
![even distribution](./middle_bias.svg){scale}
/::


#### Normal Distribution:

`(random(1,11) + random(1,11) + random(1,11)) / 3`
If you generate several random numbers and average them, the result gets close to normal (bell curve) distribution.

::: .callout
![even distribution](./normal.svg){scale}
/::

P5 also provides the `randomGausian()` function for generating numbers with normal distribution. With `randomGausian` the possible values are not clamped to a range, extreme outliers are just really rare.

#### More Info
[Anydice](http://anydice.com/)

[Anydice: Three Basic Distributions](http://anydice.com/articles/three-basic-distributions/)

[Redblob Post](https://www.redblobgames.com/articles/probability/damage-rolls.html)


## Dice vs. Decks

If you roll a die a few times you might get the same value more than once, and it might take a long time before a particular value pops up.

If you roll a normal die six times, it is unlikely that you’ll get all six values without repeats (only happens 1.5% of the time).

Also, it wouldn’t really be odd to not roll any 1’s (happens about 33% of the time). In fact, you can be pretty sure that at least one number won’t pop up in six rolls (98.5% sure).

A deck of cards works differently. When you pull cards from a shuffled deck, you get a value in a random order, but you avoid duplicates, and you can make sure you tour all the values eventually.

::: js-lab
/comp_form/parameters/square.js
/::

<!--

#### Better Code
Procedural generation code often grows organically and iteratively: tweak some code, run it to see what it builds, then tweak again. This leads to code that becomes increasingly disorganized, hard to read, and hard to change. Often the values that are tweaked the most are good candidates for exposing as parameters. **Exposing parameters helps to organize the code by seperating configuration and implementation.** It also makes the code **easier to read** by changing "magic numbers" into named values that better explain their purpose.

#### ?

The following line of code is pulled from a program that displays animated messages. This line calculates an offset used in an animated transition. The original has several magic numbers: `40`, `3`, `.5`, and `80` and had become hard to reason about and change.

::: .bad
```javascript
// original version
offset = (40 * transitionPercent) + (transitionPercent * sin(i + 3 * .5) * 80);
```
/::


This revised version is better. The magic numbers are now named values that can be adjusted elsewhere in the code and the overall expression is simpler. Notably, this code doesn't do _exactly_ the same thing as the orignal version. That is okay. Some of the complexity in the original was left over from an early approach and no longer needed for transition effect. By considering the code as a system and its parameters, this was made easier to spot and fix.

::: .good
```javascript
// revised version
offset = transitionPercent * sin(angle + phase) * amplitude;
```
/::

#### Better User Experience
[set up better, currently starting with the negative example]
[false economy]
[you are your own main user]
Exploring the parameter space of a system by tweaking hard-coded values doesn't work very well. Tweaking hard-coded values is slow—the project has to be re-built and re-run after each change—which discurages exploration. Also, the slow feedback cycle makes it harder to understand the effects of each change. Tweaking hard-coded values is also unclear. Which values should you change for particular effects? Do you need to change the value in multiple places? Will chaning a particular value just break things? Exposing the values as parameters makes it the code easier to document, understand, and use.

#### Better Results
Well-parameterized code is easier and faster to read and maintain. When you can explore the parameter space more quickly, you can explore it more thoroughly, finding interesting possibilities, ideas, and aesthetics to explore further.




### Parameter Space

::: .links-sidebar
[Wikipedia:<br/>Parameter Space](https://en.wikipedia.org/wiki/Parameter_space)
/::

A parameter space is the set of all possible combinations of values for the parameters of a system. The parameter space can grow very quickly. A system that has 8 boolean (yes/no) parameters will have 256 possible states. A system with 16 boolean parameters will have 65,536 states. A system that takes just two floating point parameters has 18,446,744,073,709,551,616	(18.4 Quintillion!) states. This is an inconceivably large number, but it is quite likely that many of those states would look very similar.

[explain why this section is here]

[Combinatorial Explosion](https://en.wikipedia.org/wiki/Combinatorial_explosion)
[Illustration? Flow for these two sections?]

### Parametric Design
Parametric Design is a design approach where designs are built as systems which can be influenced by provided parameters. For example a parametric bicycle design might consider the rider’s height to provide a customized frame.

::: .links-sidebar
    [Wikipedia:<br/>Paramet&shy;ricism](https://en.wikipedia.org/wiki/Parametricism)
/::

::: .callout
Parametricism
: is a style within contemporary avant-garde architecture, promoted as a successor to post-modern architecture and modern architecture.
/::




::: .activity
## The Blue Square
Imagine a program that draws a square, like the one below. What parameters might such a program accept?

![A Blue Square](./blue-square.png "A Blue Square"){scale full-width}
/::




## Parameters & Interface Design

::: slides .!short
@@include('./slides.yaml')
/::


### Interfaces
When thinking about software we often define the **interface** as the part of the application that is _visible to_ and _manipulated by_ the user. I think it is better consider the interface as the common boundry, or overlap, between two systems.

Two of the most important interfaces of software systems are **user interfaces** (UIs) and **application programming interfaces** (APIs).

- The **UI** is the part of a software system that a person uses to control it. The UI accepts user input and provides feedback. It overlaps with the user and is designed around capabilities and nature of both the software and the user. The UI is the primary interface in most applications.

- The **API** is the part of a software system that is used by programmers to connect it with other software systems. A well designed API considers both the software system itself and how other software systems will want to use it. It The API is the primary interface in most libraries.

It is common for software to have both a UI and an API. For example twitter provides a user interface for making and reading tweets and an API for integrating twitter into existing systems.

### Exposing Parameters
Exposing parameters allows artists and designers to create systems that can be controlled by others—and themselves—more easily. Choosing which parameters to expose is a core concern of software interface design. When choosing, consider the following:

- Which parameters should be exposed?
- Which parameters are required, which are optional?
- Which values should be accepted for each parameter?

#### Balance
::: .half
- Exposing **more** gives your user more control.
- Exposing **more** makes your interface harder to understand.
- Exposing **more** allows your users to do more good things.
/::

::: .half
- Exposing **less** gives you more control.
- Exposing **less** makes your interface easier to understand.
- Exposing **less** prevents your users from doing bad things.
/::

::: .clear

/::


#### Presenting Your interface
Once you have decided on what to expose via your interface, you must consider how to communicate your interface options to your users:

- What will you name each parameter?
- What UI controls will you use for each parameter?
- How will you group and order the UI controls?
- How will you explain the purpose of each parameter?

#### Feedback
Feedback shows users the impact their actions have on the system. Without feedback, systems are very hard to learn and use. With clear and responsive feedback, even systems which are difficult to describe can often be intuitively understood.

In simple cases, showing users the end result of their choices after each change is often enough. In more complex situations, it is often helpful to provide intermediate feedback. Many procedural systems are too complex to provide realtime feedback. For systems that take a long time to calculate, providing immediate confirmation of user input is important. Sometimes it can be very helpful to provide a low quality preview as well.

#### Keep Your User In Mind
The way that you think about your software system is often very different from the way your users think about it.

- Who will be using your software?
- Why will they be using it? What will they be trying to do?
- Do they understand how your software works under the hood? Should they?

[ADD SLIDE HERE "what you make, what you design"]


::: .activity
## Fictional Machines

Begin designing a user interface for a fictional machine by considering which parameters you would expose.

1. Choose a machine from the list below.
2. Spend 6 minutes brainstorming possible parameters for your machine.
3. Choose a user from the list below.
4. Spend 3 minutes deciding which parameters to expose for your user. Choose exactly 3 parameters.
5. Spend 3 minutes naming your parameters, and defining the allowed values for each.
6. Present your machine, user, and chosen parameters to the class. You will have 2 minutes to present.

::: .half
#### Machine Types {underline}
- A car
- Planet generator
- Grocery-shopping bot
- Internet surveillance front-end
- Genetic pet builder
- Love potion mixer
- Users
/::

::: .half
#### Users {underline}
- Users
- Daily user
- One-time user
- A child
- An [machine type] enthusiast
- Another machine
/::


/::


## Parameters + p5

### Globals as Interfaces

A quick-and-dirty way to make your comp form sketches “tweakable” is to use global variables for your parameters and group them at the top of the script.

- This is very easy to set up.
- Works particularly well for small one-off sketches that only you will ever use.
- Choose clear variable names that explain the purpose of each parameter.
- Use comments to explain the parameter in more detail, document legal value ranges, and suggest good values.
- This approach slows down exploration, because you still need to re-run your sketch after each change.
- Yes, [global variables are evil](https://stackoverflow.com/questions/19158339/why-are-global-variables-evil). If your language supports constants, it is a good idea to use them instead of variables.

::: js-lab
/comp_form/parameters/square.js
/::

### HTML Interfaces with p5.dom.js

The [p5.dom library](https://p5js.org/reference/#/libraries/p5.dom) provides functions that allow you create HTML elements and user interface controls. This is a much better choice if you want anyone else to adjust your parameters.

- This is more complicated to set up, but still pretty quick.
- This is a better choice if you want to quickly explore your parameter-space.
- Label your inputs clearly. Consider your interface carefully.
- Your controls can also be made in HTML, used in p5 via `select()`
- You can style your interface with CSS.


::: js-lab
/comp_form/parameters/square_slider.js
/::


::: .assignment

@@include('./assignment.md')

/::

## Reference Links


::: .links
[p5: Reference](https://p5js.org/reference/)

[Wikipedia: Parametricism](https://en.wikipedia.org/wiki/Parametricism)

[Wikipedia: Inner-platform effect](https://en.wikipedia.org/wiki/Inner-platform_effect)

/:: -->
