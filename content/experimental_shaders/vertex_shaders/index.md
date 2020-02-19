---
title: Vertex Shaders
layout: layouts/compform_chapter.pug
debug: false

header_title: Vertex Shaders
previous:
previous_url:
next:
next_url:

hero_title: Vertex Shaders
description: Vertex Shaders receive the vertex attribute data for a single vertex and output modified data for that vertex. They are often used to map model-space data to projection-space data.
software: WebGL
---

## Overview

### Description

Two weeks ago we looked at suface shader's in Unity. Today we'll return to unity and add a vertex shader stage to a custom surface shader. This shader will change the vertex positions in model-space. Unity will then handle the projection for us.

We'll use the vertex shader to distort a plane to create a rippling effect.

### Learning Objectives

- Demonstrate the ability for vertex shaders to change the shape of geometry
- Demonstrate how to use the vertex function with a surface shader in Unity

### Questions

**What is a Vertex Shader?**

**What is a Normal Vector?**

**What is a Tangent Vector?**

**Why are Normal Vectors important?**

**How can you calculate a 2D Normal Vector for a point on a curve/function?**

**How can you caclucate a 3D Normal Vector for a point on a mesh?**

**What is a Cross Product?**

**How do you calcuate the Cross Product?**

### Schedule

| Time | Duration | Purpose  | Format         | Name                                    |
| ---- | -------- | -------- | -------------- | --------------------------------------- |
| 7:00 | 10 m     | Engage   | Brainstorm     | What could you do with a Vertex Shader? |
| 7:10 | 10 m     | Study    | Lecture        | Tangents + Normals                      |
| 7:20 | 10 m     | Study    | Lecture        | Numerical + Differentiation             |
| 7:30 | 10 m     | Study    | Lecture        | Cross Products                          |
| 7:40 | 10 m     | Activate | Code Reading   | Read the Example                        |
| 8:00 | 20 m     | Activate | Code Challenge | Complete the Challenges                 |

### Students Should Bring

- Unity 2019.3
- Blender 2.8

### Materials

- Ripple Effect: A unity scene showing the working ripple effect.
- Effect Template: A unity scene with a pass-through effect for student experimentation.

## Vertex Shader Examples

[Curved World: Inception](https://www.youtube.com/watch?time_continue=39&v=lagDz75cfdM&feature=emb_logo){boxed right}

[Curved World](https://www.youtube.com/watch?v=OMfTp2uuepg)

## Unity Project

[Demo Project](../unity/demo_project.zip){boxed right}

## Tangents and Normals

> The **tangent** line to a curve at a given point is the straight line that "just touches" the curve at that point.
>
> — [Wikipedia](https://en.wikipedia.org/wiki/Tangent) (edited)

The tangent line matches the slope where it touches.

::: .two-up
![tangent line](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Tangent_to_a_curve.svg/440px-Tangent_to_a_curve.svg.png)
![tangent plane](https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Image_Tangent-plane.svg/440px-Image_Tangent-plane.svg.png)
/::

> The **normal** line to a curve at a given point is the line perpendicular to the tangent line at that point.
>
> — [Wikipedia](<https://en.wikipedia.org/wiki/Normal_(geometry)>) (editied)

::: .two-up
![normal line](https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/04/02174230/800px-Tangent-768x503.png)
![normal plane](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Normal_vectors_on_a_curved_surface.svg/620px-Normal_vectors_on_a_curved_surface.svg.png)
/::

For our 3D lighting purposes today we don't need to know the position of the tangent or normal. We just need the direction, which we can represent with tangent and normal vectors.

<!-- ![vectors](https://math.libretexts.org/@api/deki/files/71/line_1.jpg?revision=1) -->

## Numerical vs Symbolic Differentiation

> The derivative of a function at a chosen input value is the slope of the tangent line at that point.
>
> Differentiation is the action of computing a derivative.
>
> — [Wikipedia](https://en.wikipedia.org/wiki/Derivative)

- [Derivative](https://en.wikipedia.org/wiki/Derivative)

- [Numerial Differentiation](https://en.wikipedia.org/wiki/Numerical_differentiation)

- [Stack Overflow: Numerical vs Symbolic vs Automatic Differentiation](https://stackoverflow.com/questions/43455320/difference-between-symbolic-differentiation-and-automatic-differentiation)

![slope of line](https://wikimedia.org/api/rest_v1/media/math/render/svg/3f07ddc190e96e17d5d7e1ab262e8e5baf865949)

![secant](https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Derivative.svg/460px-Derivative.svg.png)

If you know the function for a curve and you know calculus, you might be able to find a derivative function by applying known rules.

If you don't know the function (but you can sample it), don't know calculus, or can't find the derivative function, you can numerically estimate the derivative/slope/tangent by finding two nearby points and substracting.

![simple](https://wikimedia.org/api/rest_v1/media/math/render/svg/433137b00708049d18711c32ff08f010e171c385)

## Cross Product

![cross product](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Cross_product_vector.svg/440px-Cross_product_vector.svg.png)

## Resources

[Catlike Coding: Wave](https://catlikecoding.com/unity/tutorials/flow/waves/){boxed right}

[Unity Blog: Animated Materials](https://blogs.unity3d.com/2018/10/05/art-that-moves-creating-animated-materials-with-shader-graph/){boxed right}

[Unity: Writing Surface Shaders](https://docs.unity3d.com/Manual/SL-SurfaceShaders.html){boxed right}

[Unity: Surface Shader Examples](https://docs.unity3d.com/Manual/SL-SurfaceShaderExamples.html){boxed right}
