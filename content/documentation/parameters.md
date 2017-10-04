---
title: Parameters
layout: layouts/compform_chapter.pug
---

###### Topic 3
# Parameters

---
###### 3.1 Slides
## Parameter Examples

Parameters are factors of a system that are exposed. Exposing parameters allows artists and designers to create systems that are controlled by others.

::: .test
this is a test
:::

::: .slides
@@include('./slides.md')
:::

::: .callout
# Prompt Yourself

Consider: How did artists use parameters in each work?
:::

::: .callout .callout-pink
# Pink Yourself
Consider: How did artists use parameters in each work?
:::


::: .callout .callout-primary
# callout primary
Lorem Ipsup!
:::

::: .callout .callout-secondary
# callout secondary
Lorem Ipsup!
:::

::: .callout .callout-success
# callout success
Lorem Ipsup!
:::

::: .callout .callout-info
# callout info
Lorem Ipsup!
:::

::: .callout .callout-warning
# callout warning
Lorem Ipsup!
:::

::: .callout .callout-danger
# callout danger
Lorem Ipsup!
:::

::: .callout .callout-light
# callout light
Lorem Ipsup!
:::

::: .callout .callout-dark
# callout dark
Lorem Ipsup!
:::

::: .callout .callout-accent
# callout dark
Lorem Ipsup!
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


#### Example
This is an example of how to do code.

```javascript
param = slider.get();
param = slider.get();
param = slider.get();
```