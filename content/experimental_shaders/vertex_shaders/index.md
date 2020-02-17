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
description: Vertex Shaders typically take model-space vertex data and return the corresponding screen-space vertex data.
software: WebGL
---

## Tangents and Normals

> The **tangent** line to a curve at a given point is the straight line that "just touches" the curve at that point.
> — [Wikipedia](https://en.wikipedia.org/wiki/Tangent) (edited)

The tangent has the same slope that the line has at that point.

::: .two-up
![tangent line](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Tangent_to_a_curve.svg/440px-Tangent_to_a_curve.svg.png)
![tangent plane](https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Image_Tangent-plane.svg/440px-Image_Tangent-plane.svg.png)
/::

> The **normal** line to a curve at a given point is the line perpendicular to the tangent line at that point.
> — [Wikipedia](<https://en.wikipedia.org/wiki/Normal_(geometry)>) (editied)

::: .two-up
![normal line](https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/04/02174230/800px-Tangent-768x503.png)
![normal plane](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Normal_vectors_on_a_curved_surface.svg/620px-Normal_vectors_on_a_curved_surface.svg.png)
/::
