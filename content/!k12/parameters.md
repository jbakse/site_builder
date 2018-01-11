---
title: Parameters
layout: layouts/k12.pug
debug: false
---

::: .sidebar-right .tool
# Suggested Medium
p5.js
:::

::: .topic
###### Topic 3
# Parameters!
:::


---
###### 3.1 Slides
## Parameter Examples

Parameters are factors of a system that are exposed. Exposing parameters allows artists and designers to create systems that are controlled by others.


::: slides
@@include('./slides.yaml')
:::


::: .callout .callout-primary
# Prompt Yourself

Consider: How did artists use parameters in each work?
:::

---
###### 3.2 Slides
## Parameters & Interface Design

### Interfaces

An **interface** is the common boundary between two systems. Two of the most important interfaces of software systems are **user interfaces (UIs)** and **application programming interfaces (APIs)**.

::: .bar-callout .blue
A **UI** is the part of a software system that a person uses to control it. The UI accepts user input and provides feedback. The UI is the primary interface in most *applications*.

An **API** is the part of a software system that is used by programmers to connect the software with other software systems. The API is the primary interface in most *libraries*.
:::

It is common for software to have both a UI and an API. For example twitter provides a user interface for making and reading tweets and an API for integrating twitter into existing systems.



### Parameters
Parameters are factors that control what how a system operates. Exposing parameters allows artists and designers to create systems that can be controlled by others. Choosing which parameters to expose is a core concern of software interface design.

::: .sidebar-left
Sidebar!
:::

#### What to Expose
- Which parameters should be exposed?
- Which values should be accepted for each parameter?
- Which parameters are required, which are optional?


::: .sidebar-right
Sidebar!
:::

#### Balance
Exposing **more** gives your user more control.  
Exposing **less** gives you more control.  
Exposing **more** makes your interface harder to understand.  
Exposing **less** makes your interface easier to understand.  
Exposing **more** allows your users to do more good things.  
Exposing **less** prevents your users from doing bad things.  

#### Presenting your Interface
Once you have decided on what to expose via your interface, you must consider how to communicate your interface options to your users.

- What UI controls will you use for each parameter?
- What will you label each control?
- How will you group and order the UI controls?
- How will you explain the purpose of each parameter?

#### Feedback
Feedback shows users the impact their actions have on the system. Without feedback, systems are very hard to learn and use.

In simple cases, showing users the end result of their choices is often enough. In more complex situations, it is often helpful to provide intermediate feedback. For example, if a system will react slowly to user actions, providing immediate confirmation of user input is important.

#### Parameter Space
A parameter space is the set of all possible combinations of values for the parameters of a system. The parameter space can grow very quickly. A system that has 8 boolean (yes/no) parameters will have 256 possible states. A system with 16 boolean parameters will have 65,536 states. A system that takes just two floating point parameters has 9,223,372,036,854,775,808 (9.2 Quintillion!) states. This is a basically inconceivably large number, but it is quite likely that many of those states would look *samey*.

#### Keep Your User in Mind
The way that you think about your software system is often very different from the way your users think about it.
- Who will be using your software?
- Why will they be using it? What will they be trying to do?
- Do they understand how your software works under the hood? Should they?




### Parametric Design
Parametric Design is a design approach where designs are built as systems which can be influenced by provided parameters. For example a parametric bicycle design might consider the rider's height to provide a customized frame.


::: .bar-callout .blue
**Parametricism** is a style within contemporary avant-garde architecture, promoted as a successor to post-modern architecture and modern architecture.
:::

—[Wikipedia: Parametricism](https://en.wikipedia.org/wiki/Parametricism)




::: .callout .callout-danger
# Activity: Fictional Machines

Begin designing a user interface for a fictional machine by considering which parameters you would expose.

1. Choose a machine from the list below.
2. Spend 6 minutes brainstorming possible parameters for your machine.
3. Choose a user from the list below.
4. Spend 3 minutes deciding which parameters to expose for your user. Choose exactly 3 parameters.
5. Spend 3 minutes naming your parameters, and defining the allowed values for each.
6. Present your machine, user, and chosen parameters to the class. You will have 2 minutes to present. Lorem ipsum damet sol comit ret del toro onk silly newt.


#### Machine Types

- A car
- Planet generator
- Grocery-shopping bot
- Internet surveillance front-end
- Genetic pet builder
- Love potion mixer Lorem ipsum damet sol comit ret del toro onk silly newt. Lorem ipsum damet sol comit ret del toro onk silly newt.


#### Users

- Daily user
- One-time user
- A child
- An [machine type] enthusiast
- Another machine
:::



---
###### 3.3
## Globals as Interfaces
A quick-and-dirty way to make your comp form sketches "tweakable" is to use global variables for your parameters and group them at the top of the script.

- This is very easy to set up.
- Works particularly well for small one-off sketches that only you will ever use.
- Choose clear variable names that explain the purpose of each parameter.
- Use comments to explain the parameter in more detail, document legal value ranges, and suggest good values.
- Yes, globals are evil. That is part the "dirty" part.


::: js-lab
/square.js
:::



---
###### 3.4
## p5.js Dom Interfaces

The [p5 Dom Library](https://p5js.org/reference/#/libraries/p5.dom) provides functions that allow you create html elements and user interface controls. This is a much better choice if you want anyone else to adjust your parameters.

- This is more complicated to set up, but still pretty quick.
- This is a better choice if you want to quickly explore your parameter-space.
- Label your inputs clearly. Consider your interface carefully.
- Your controls can also be made in HTML, used in p5 via `select()`
- You can style your interface with CSS.


::: js-lab
/square_slider.js
:::




---
###### 3.5
## Get to Know p5

If you havn't used the following features of p5, take a look. [p5 Reference](https://p5js.org/reference/)

### colorMode()
Working with color in terms of hue, saturation, and brightness is often much better than RGB. Use `colorMode()` to switch to HSB colors, and to choose your range (0-255, 0-100, 0-1).

### ellipseMode(), rectMode()
Sometimes the clearest way to draw a ellipse is to specify the bounding box corners. Sometimes the center and width/height makes more sense. Use these functions to switch how `ellipse()` and `rect()` use their arguments.

### push() + pop()
Normally if you change your drawing state (fill color, stroke weight, etc), it stays changed after you do your drawing. `push()` and `pop()` let you save and restore your state.


### lerp(), lerpColor()
These functions let you interpolate between two values.

### map()
Use `map()` to remap values from one range to another.

---

::: .callout .callout-success
# Assignment

## Keep Sketching! 

Continue experimenting with procedurally generated images, this time focusing exposing parameters and exploring the parameter spaces of your sketches. You can mix random and parametric elements, but I suggest doing at least a couple of sketches that are not random at all.

:::