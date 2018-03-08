---
title: Vector Data
layout: layouts/compform_chapter.pug
debug: false

header_title: "Pixel Data"
next:
next_url: 
previous: Turtle Graphics
previous_url: ../turtles

hero_title: Vector Data
old_description: Vector graphics encode high-level meaning about the shapes that make up a drawing allowing you to manipulate them in higher-level ways.

description: Access pixel values directly to process and generate images.
software: p5.js
---

## Vector Data

Last week, we worked directly with pixels, the fundamental unit of raster graphics. Today we will work with vector graphics, which represent images as a collection of shapes.

Vector graphics must be converted to raster graphics—a process called [rasterization](https://magcius.github.io/xplain/article/rast1.html)—in order to be viewed on a pixel-based display. Fortunately, it is easy to rasterize vector graphics: vector graphics contain all the information necessary to do so. It is _not_ easy to convert from raster images to vector images: in order to so so we have to make inferences about the meaning implied by the raster image. When the form is ambiguous our inferences are just guesses and they may be wrong. 

[[ recipie vs finished dish? you can go one way, not the other. you can easily remove salt from a recipie, you can't easily remove salt from a dish]]

### Meaning vs Form

Consider the image below. What should the image look like if the black circle were removed?

![inference-01](figures/inference-01.png)

::: .three-up
![inference-02](figures/inference-02.png)
We might infer that a red circle lies behind the black one.{figure}

![inference-03](figures/inference-03.png)
The red shape might be a crescent.{figure}

![inference-04](figures/inference-04.png)
We don't know if the blue background should continue either.{figure}
/::

When we look at the image, we might infer that it represents two, overlapping circles. But the raster image doesn't contain enough information to know for sure.
This is the key advantage of vector graphics over raster graphics: vector graphics contain high-level _meaning_ about the drawings that they represent. This meaning allows us to make high-level changes: we can scale the vector image up and perfectly fill in the needed additional detail; we can change the fonts used to render text; we can remove a shape and reveal what is behind it.

It is easy to underestimate the value of this meaning. Humans are very, very good at inferring meaning from visual forms. We fill meaning in without conscious thought, when we look at the image above we see circles, not red and black pixels. 

::: .callout

> Anne was on the springboard; she turned her head. Jubal called out, "That house on the hilltop--can you see what color they've painted it?"
>
> Anne looked, then answered, "It's white on this side."
>
> Jubal went on to Jill: "You see? It doesn't occur to Anne to infer that the other side is white, too. All the King's horses couldn't force her to commit herself...unless she went there and looked—and even then she wouldn't assume that it stayed white after she left."

- Stranger in a Strange Land, Robert Heinlein{attrib}

/::

Because we are so good at inferring meaning it is always there. We don't appreciate how limited we would be without it. Computers are not good at inferring meaning from form. A human can guess that a red circle lies behind the black one, but a computer can't, so a human can imagine the drawing without the circle, and the computer can't. For now. This is an extremely active area of research, and the rate of progress in recent years is staggering. This research is already making its way to consumer tools: Photoshop introduced [Content-Aware Fill](https://research.adobe.com/project/content-aware-fill/) in 2010.

[Two Minute Papers: AI Learns Semantic Image Manipulation](https://www.youtube.com/watch?v=XhH2Cc4thJw)

[Two Minute Papers: Physics-based Image and Video Editing](https://www.youtube.com/watch?v=bVGubOt_jLI)

[Two Minute Papers: Deep Image Prior](https://www.youtube.com/watch?v=_BPJFFkxSbw)

[[
Something about raster still being a good file format, and that many images can't be reasonably described with basic geometry and shapes. Rect, Ellipse, Pologon, Line is a pretty limited vacabulary when you mean "flower", "tree", "person", "sky". 3D Grapihcs are very much like vector files and are closer to photo real. 
]]



<!-- 
Describe the steps taken to make a drawing
Describe the shapes in the drawing
Describe the results of the steps -->


<!-- Droodles
Roger Price's Droodles were minimal cartoons that played with the ideas of inferred meaning and ambiguity. 

One of Prices's Droodles was used as the cover art for Frank Zappa's 1982 album _Ship Arriving Too Late to Save a Drowning Witch_.  -->

<!-- 
Semantics vs Form vs Syntax

"Colorless green ideas sleep furiously"
Noam Chomsky https://en.wikipedia.org/wiki/Colorless_green_ideas_sleep_furiously -->


### Retained Mode vs Immediate Mode
Immediate Mode: Shapes are drawn immediately after each step is described.
Retained Mode: the shapes/steps are stored as data and rendering is done all at once when after you describe the scene.
Scene Graph
Because reatained mode waits until all instructions are recieved, it is possible for later instrucitons to impact the results of earlier ones. (this is sort of wrong in a nitpicky way, how do i express this exactly, and clearly) (pbj instrucitons. bad order in instructions "now tear the paper in half.... unless its friday"

### Semantics and Outputs

Semeantics (meaning) preserved

Not all semantic information from your code is preserved in the output.

```
for i = 1 to 10
    circle i, 10
```

```
circle 1, 10
circle 2, 10
...
```

```
[0, 0, 0, 255, 0, 0, 0, 255,...]
```



## Paper.js

Intro to paper.js. Library/API, Language.


### Paperscript vs. Javascript

### Object Oriented API vs Procedural API


### Basic Example


### Boolean Example


### Animation Example

### Challenges

### Exporting SVG for Further Work


### Assignement
