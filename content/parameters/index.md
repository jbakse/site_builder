---
title: Parameters
layout: layouts/compform_chapter.pug
debug: false

header_title: Parameters
previous: Random Values
previous_url: ../random
next: Noise
next_url: ../noise

hero_title: Parameters
description: Expose parameters to make your procedural systems easier to control, explore, and use.
software: p5.js + p5.dom
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js"></script>
<script src="/mess/rocket_mess.js"></script>

<style>

.mess-controls {
            font-family: Monaco;
            font-size: 10px;
            position: fixed;
            top: 100px;
            padding: 10px;
            z-index: 1000;
            background-color: #FF0;
            mix-blend-mode: multiply;
        }

        .mess-controls p {
            margin-top: 2em;
            margin-bottom: 0;
        }

        .mess-controls {
            opacity: 1;
            transition: opacity .25s;
        }

        .mess-controls.hide {
            opacity: 0;
            transition: opacity 1s;
        }


</style>


## Parameters

One of the most powerful and rewarding aspects of writing a procedural generation system is exploring what it can make. The initial investment of time spent coding is repaid by the ability to iterate easily and quickly. Many procedural systems can produce endless variations and can be pushed to surprising extremes. Exploring the range of the system reveals new ideas to build and aesthetics to explore.

::: .links-sidebar
[Wikipedia:<br/>Parameter](https://en.wikipedia.org/wiki/Parameter#Computing)
/::


Procedural generators can provide enormous creative leverage, allowing expressive artistic control while automating much of the work. This control is afforded by exposing **parameters**. Parameters are adjustable values that influence the internal behavior of a system.


::: .discussion
## The Blue Square
Imagine a program that draws squares like the one below. What parameters might such a program accept?

![A Blue Square](./figures/blue-square.png "A Blue Square"){scale full-width}
/::




### Parameter Space

::: .links-sidebar
[Wikipedia:<br/>Parameter Space](https://en.wikipedia.org/wiki/Parameter_space)

[Wikipedia:<br/>Combinatorial Explosion](https://en.wikipedia.org/wiki/Combinatorial_explosion)

[3Blue1Brown:<br/>How secure is 256 bit security?](https://www.youtube.com/watch?v=S9JGmA5_unY)

/::

A **parameter space** is the set of all possible combinations of values for the parameters of a system. The parameter space of a system can grow very quickly. A system that has just 8 boolean (true/false) parameters will have 256 possible combinations. A system with 16 boolean parameters will have 65,536 combinations. This rapid growth is referred to as **Combinatorial Explosion**.

When changes to input parameters map to interesting changes in output, combinatorial explosion can make a procedural system very powerful. Consider a program that generates faces by choosing from 4 options for each of these traits: hair style, hair color, eye color, eye shape, nose shape, mouth shape, face shape, and skin tone. Such a system can generate `4^8` or `65,536` distinct faces. If the system supported two more similar traits that number of outputs would grow to `1,048,576`!

### Samey-ness
Combinatorial explosion does not guarantee *variety*.

Sometimes different parameter values have minimal impact on the final output. When this happens a system's output can feel monotonous, uninteresting, and "samey". A system that takes just two floating point parameters has `18,446,744,073,709,551,616` (18.4 Quintillion!) states. This is an inconceivably large number, but it is quite likely that many of those states would look very similar.

When creating interfaces for procedural systems, focus on exposing parameters that allow for _interesting_ variation.


### Parametric Design

::: .links-sidebar
[Wikipedia:<br/>Parametric Design](https://en.wikipedia.org/wiki/Parametric_design)
/::

**Parametric Design** is a design approach where designs are built as systems with output that can be customized by adjusting parameters. For example, a parametric design for a bicycle might accept a parameter for the rider’s height and provide a customized frame to suit.

A critical aspect of parametric designs is that they explicitly embed the **design intent**, rather than just the **design result**. This allows parametric designs to adjust to fit provided parameters and create new design results as needed. 

We often think of parameters as inputs, but the parameters exposed in parametric design are often closer to outputs. They represent the desired results that the parametric design should solve for.

Imagine a machine that makes a snowman. The machine might take parameters for how large the bottom, middle, and top snowball should be. This interface would afford a good deal of flexibility, but might also lead to poorly proportioned or even infeasible snowmen. Instead the machine could be designed to take a single parameter represented the desired height of the snowman, and internally calculate the sizes of each snowball according to relationships determined by the designer rather than the user.






### Benefits of Parameterization

::: .links-sidebar
[Wikipedia:<br/>Hard-Coding](https://en.wikipedia.org/wiki/Hard_coding)
/::

You explore the range of a procedural genertion system by changing the values of its parameters and seeing what happens. In simple sketches you might tweak parameters directly, by changing [hard-coded](https://en.wikipedia.org/wiki/Hard_coding) values directly in the source.

It is almost always worth taking time to identify useful parameters in your code, consider their possible values, and expose them in a way that encourages exploration. Doing so will lead to **better code**, **better user experiences**, and **better results**.

#### Better Code

::: .links-sidebar
[Wikipedia:<br/>Magic Number](https://en.wikipedia.org/wiki/Magic_number_(programming))
/::

Procedural generation code often grows organically and iteratively: tweak some code, run it to see what it builds, then tweak again. This leads to code that is increasingly disorganized, hard to read, and hard to change. Often the values that are tweaked the most are good candidates for exposing as parameters. **Exposing parameters helps to organize the code by separating configuration and implementation.** It also makes the code **easier to read and reason about** by changing [magic numbers](https://en.wikipedia.org/wiki/Magic_number_(programming)) into named values that better explain their purpose. Exposing parameters isn't always about creating an end-user GUI. Exposing parameters as arguments to well-factored functions can make your code much easier to read, expand, and maintain.

#### Better User Experience

Exploring the parameter space of a system by tweaking hard-coded values doesn't work very well. Tweaking hard-coded values is slow—the project has to be re-built and re-run after each change—which discourages exploration. Also, a slow feedback cycle makes it harder to understand the effects of each change. Tweaking hard-coded values in the code is unclear and error-prone. Which values should you change for particular effects? Do you need to change the value in multiple places? Will changing a particular value just break things? 

Exposing key values in your program as parameters makes them easier to document, understand, and use. These benefits of a good interface usually far outweigh the time required to implement it.

#### Better Results
When you can explore the parameter space of your procedural systems more quickly, you can explore it more thoroughly, finding interesting possibilities, ideas, and aesthetics to explore further.

On small projects—projects that you don't plan on sharing—it is tempting to skip the time needed to clean up code, factor out parameters, and create a better UI. This is often a [false economy](https://en.wikipedia.org/wiki/False_economy). An up-front investment of time is usually quickly repaid.


### An Example

The following code has been adapted from a real program that displays animated messages. 

::: .bad
```javascript
// original version
offset = (40 * transitionPercent) + (transitionPercent * sin(i + 3 * .5) * 80);
```
/::

It calculates an offset used in an animated transition. The original has several magic numbers: `40`, `3`, `.5`, and `80` and had become hard to reason about and change.

This revised version is better.

::: .good
```javascript
// revised version
offset = transitionPercent * sin(angle + phase) * amplitude;
```
/::

The main expression is now much clearer. It contains fewer terms and is better organized. The magic numbers have been replaced with named values which are easier to understand. Because they are variables, they can be set elsewhere in the code, or exposed as function arguments. 
 
Notably, this code doesn't do _exactly_ the same thing as the original version. Some of the complexity in the original was left over from an earlier approach and no longer needed. Considering the code as a system and identifying and naming its parameters made the unneeded complexity easy to spot and fix.














## Parameters & Interface Design

::: slides .!short
@@include('./slides.yaml')
/::


### Interfaces
When thinking about software we often define the **interface** as the part of the application that is _visible to_ and _manipulated by_ the user. I think it is better consider an interface as a common boundary, or overlap, between two systems. Interfaces are shaped by the qualities of both systems.

Two of the most important interfaces of software systems are **user interfaces** (UIs) and **application programming interfaces** (APIs).

- The **UI** is the part of a software system that a person uses to control it. The UI accepts user input and provides feedback. It overlaps with the user and is designed around the capabilities and nature of both the software and the user. The UI is the primary interface in most applications.

- The **API** is the part of a software system that is used by programmers to connect it with other software systems. A well-designed API considers both the software system itself and how other software systems will want to use it. The API is the primary interface in most libraries.

It is common for software to have both a UI and an API. For example, twitter provides a user interface for making and reading tweets and an API for integrating twitter into existing systems.



### Exposing Parameters
Exposing parameters allows artists and designers to create systems that can be controlled by others—and themselves—more easily. Choosing which parameters to expose is a core concern of software interface design. When choosing, consider the following:

- Which parameters should be exposed?
- Which parameters are required, and which are optional?
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


#### Presenting Your Interface
Once you have decided what to expose via your interface, you must consider how to communicate your interface options to your users:

- What will you name each parameter?
- What UI controls will you use for each parameter?
- How will you group and order the UI controls?
- How will you explain the purpose of each parameter?

#### Feedback
Feedback shows users the impact their actions have on the system. Without feedback, systems are very hard to learn and use. With clear and responsive feedback, even systems that are difficult to describe can often be intuitively understood.

In simple cases, showing users the end result of their choices after each change may be enough. In more complex situations, it is often helpful to provide intermediate feedback. Many procedural systems are too complex to provide realtime feedback. For systems that take a long time to calculate, providing immediate confirmation of user input is important. Sometimes it can be very helpful to provide a low-quality preview as well.

#### Keep Your User In Mind
The way that you think about your software system is often very different from the way your users think about it.

- Who will be using your software?
- Why will they be using it? What will they be trying to do?
- Do they understand how your software works under the hood? Should they?

#### Design Your User Experience
When designing, step back and focus on the relationship between your project and your user. You only have direct control of what you make, but you should be considering the impact of your decisions on your user. 

![what_you_design](figures/what_you_design-01.svg)

::: .activity
## Fictional Machines

Begin designing a user interface for a fictional machine by considering which parameters you would expose.

1. Choose a machine from the list below.
2. Spend 6 minutes brainstorming possible parameters for your machine.
3. Choose a user from the list below.
4. Spend 3 minutes deciding which parameters to expose to your user. Choose exactly 3 parameters.
5. Spend 1 minute deciding which parameters **not** to expose to your user. Choose exactly 1 parameter.
6. Spend 3 minutes naming your exposed parameters and defining the allowed values for each.
7. Present your machine, user, and chosen parameters to the class. You will have 2 minutes to present.

::: .half
#### Machine Types {underline}
- A self-driving car
- Planet terraformer
- Grocery-shopping bot
- Song Composer
- Genetic pet builder
- Love potion mixer
/::

::: .half
#### Users {underline}
- Daily user
- One-time user
- A child
- An [machine type] enthusiast
- Another machine
- A small accounting firm
/::


/::


## Parameters + p5

### Globals as Interfaces

A quick-and-dirty way to make your comp form sketches “tweakable” is to use global variables for your parameters and group them at the top of the script. This is very easy to set up, and works particularly well for small one-off sketches that only you will ever use. However, this approach slows down exploration, because you still need to re-run your sketch after each change.

- Choose clear variable names that explain the purpose of each parameter.
- Use comments to explain the parameter in more detail, document legal value ranges, and suggest good values.
- Keep in mind that [global variables are evil](https://stackoverflow.com/questions/19158339/why-are-global-variables-evil). Use constants instead of variables, if your language supports them. If your language doesn't support true constants use a naming convention, such as all caps, to indicate that a value shouldn't be changed.

::: js-lab
/parameters/sketches/square.js
/::

### HTML Interfaces with p5.dom.js

::: .links-sidebar
[p5.js DOM Library](https://p5js.org/reference/#/libraries/p5.dom)
/::


The [p5.dom library](https://p5js.org/reference/#/libraries/p5.dom) provides functions that allow you create HTML elements and user interface controls. This is more complicated to set up, but still pretty quick. It is a much better choice if you want anyone else to adjust your parameters. You should consider this approach even for projects only you will use; it allows you to explore your parameter space without having to reload your sketch.

- Label your inputs clearly. 
- Consider your interface carefully.
- Use `select()` in p5 if you want to make your controls in HTML. 
- Consider styling your interface with CSS.


::: js-lab
/parameters/sketches/square_slider.js
/::

::: .activity
## In-class Challenge

Explore using parameters by completing the following challenges in order. <br/> Don't skip any.


| Time                 | Comment                                                                              |
| -------------------- | ------------------------------------------------------------------------------------ |
| < 6 in 20 Minutes    | You need to put in some extra work to strengthen your understanding of these topics. |
| 6 in 20 Minutes      | Good.                                                                                |
| All 10 in 20 Minutes | Great.                                                                               |


### Modify the Globals as Interface Example
1. Make each square a different randomly-chosen size.
2. Add global variable parameters to control the minimum and maximum size of the squares.
3. Add a white stroke to the squares.
4. Add a global variable parameter to control the width of the stroke.

### Modify the HTML Interfaces Example
1. Add a slider to control the vertical position of the square.
2. Add a color picker to control the background color of the sketch.
{continue}

### Challenging Challenges: Globals as Interface
1. Draw the squares in two sizes: small and large. Randomly choose which size for each square.
2. Add parameters to control the small size, large size, and percentage chance of drawing large or small.
{continue}

### Challenging Challenges: HTML Interfaces
1. Instead of drawing the square, draw a "target" of white and red rings. Draw more rings to make a bigger target.
{continue}



/::

::: .assignment

## Keep Sketching!

### Base
Continue experimenting with procedurally-generated images. Now, focus on exposing parameters and exploring the parameter spaces of your sketches. You can mix random and parametric elements, but I suggest doing at least a couple of sketches that are not random at all.{bigger}

### Challenge: Face Generator
Build a face-generating tool. This tool will create an image of a face that can be adjusted by the user with sliders and other inputs.

- Don’t use the built-in shape drawing commands like rect and ellipse. Build your face from hand-drawn or photographic images.
- Make your resulting images look as seamless and cohesive as possible.
- Inputs can range from straightforward (eye color, nose size) to complex (anger, lighting).



/::




## Reference Links

[p5: Reference](https://p5js.org/reference/)
: Documentation on the p5 API.

[dat.gui](https://github.com/dataarts/dat.gui)
: Popular, lightweight tool for quickly making nice-looking interfaces like [this one](http://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage).

[How secure is 256 bit security?](https://www.youtube.com/watch?v=S9JGmA5_unY)
: The fantastic YouTube channel 3Blue1Brown explores combinatorial explosion in the context of cryptographic security.

[A History of Parametric](http://www.danieldavis.com/a-history-of-parametric/)
: A history of parametricism and parametric architecture, beginning before the invention of the computer.

[Endgare](http://www.engare.design/)
: A game about motion and geometry that draws on the mathematical principles of Islamic pattern design.

[Variable Fonts](https://v-fonts.com/)
: A compilation of [OpenType variable fonts](https://medium.com/variable-fonts/https-medium-com-tiro-introducing-opentype-variable-fonts-12ba6cd2369), which offer parametric control over weight, contrast, and other variables.
