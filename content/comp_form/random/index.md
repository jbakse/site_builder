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
- Gain familiarity with the p5.js library
- Understand
- Practice user-centered design concepts
- Technical: Exposing parameters as global variables
- Technical: Exposing parameters with HTML controls

[the above section Talia fabricated, it wasn't on the original. It may require revisiting]

## Parameters

[bring up blue square as "engage" moment?]
[engage, focus study, practice]

One of the most powerful and rewarding aspects of writing procedural generation code is exploring what it can make. Programming a maze generator will probably take longer than simply drawing a maze by hand, but with the generator you can quickly explore hundreds of maze variations. Often this leads to new ideas and aesthetics to pursue further.

[useful automate tedious vs artist control]


### Benefits



You explore the range of a procedural genertion system by changing the values of its parameters and seeing what happens. Early on you might tweak parameters directly, by changing [hard-coded](https://en.wikipedia.org/wiki/Hard_coding) values directly in the source.

It is almost always worth taking time to indentify useful parameters in your code, consider their possible values, and expose them in a way that encourages exploration. Doing so will lead to **better code** under the hood, **better user experiences**, and **better results**.

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

/::
