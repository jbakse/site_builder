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

::: .slides
@@include('./slides.md')
:::

::: callout yellow
# Prompt Yourself

Consider: How did artists use parameters in each work?
:::

###### 3.2 Slides
## Parameters & Interface Design

### Interfaces

An **interface** is the common boundary between two systems. Two of the most important interfaces of software systems are **user interfaces (UIs)** and **application programming interfaces (APIs)**.

::: callout blue
A **UI** is the part of a software system that a person uses to control it. The UI accepts user input and provides feedback. The UI is the primary interface in most *applications*.

An **API** is the part of a software system that is used by programmers to connect the software with other software systems. The API is the primary interface in most *libraries*.
:::

It is common for software to have both a UI and an API. For example twitter provides a user interface for making and reading tweets and an API for integrating twitter into existing systems.



### Parameters
Parameters are factors that control what how a system operates. Exposing parameters allows artists and designers to create systems that can be controlled by others. Choosing which parameters to expose is a core concern of software interface design.

#### What to Expose
- Which parameters should be exposed?
- Which values should be accepted for each parameter?
- Which parameters are required, which are optional?

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
