---
title: Pixel Data
layout: layouts/compform_chapter.pug
debug: false

header_title: "Pixel Data"
next: Strategy
next_url: ../strategy
previous: Strategy
previous_url: ../strategy

hero_title: Pixel Data
description: Internally, computers often represent images as a list of pixel values. Accessing, processing, and generating pixel data directly allows you to explore a variety of low-level techniques.
software: p5.js
---

## Learning Objectives
- Understand how raster image data is represented in memory.
- Explore image generation and image processing.
- Explore using an image as a data input.
- Technical: Using p5's `get()` and `set()` function to read and write pixel values.
- Technical: Using p5's `pixel[]` array to work with pixel data directly.


## Raster Images

### Rasterization

### Raster vs Vector Images

[How raster images are stored in memory]

[Not just about scalability. Scalability is the most often mentioned difference between raster and vector images, but other differences exist as well. Because vector images are described at a higher level—shapes instead of pixels—they are also easier to distort, recolor, change the stroke, etc. Not all images can be reasonably described as a collection of shapes. Photographic images, in particular, have too much detail to store as a collection of shapes. Similarly, some types of effects that consume or produce pixel-level detail require raster data] 

## Writing Pixel Data

### A Basic Example

The p5.js library provides two ways to read and write image pixel data. First,you can use `get()` and `set()` which are a bit easier but slower. Second you can access the `pixels[]` array directly, which is faster but requires some math to find the address of the pixel you want to work with.

This example uses `set()` to create some random pixel data.

::: js-lab
/comp_form/pixels/sketches/basic_pixels.js
/::


Let's look at the code in depth.



Line 10
: Use `createImage()` to create a new, empty image in memory. We can draw this image just like an image lowed from a `.jpg` or `.gif`.

Line 11
: Use `loadPixels()` to tell p5 that we want to access the pixels of the image for reading or writing. You must call `loadPixels()` before using `set()`, `get()`, or the `pixels[]` array.

Lines 13
: Set up a nested loop. The inner content of the loop will be run once for every pixel.

Line 15
: Use the `color()` function to create a color value, which is assigned to `c`. Color values hold the R, G, B, and A values of a color. The color function takes into account the current `colorMode()`.

Line 16
: Use `set()` to set the color of the pixel at `x, y`.

Line 20
: Use `updatePixels()` to tell p5 we are done accessing the pixels of the image.

Line 22
: Use `noSmooth()` to tell p5 not to smooth the image when we scale it; we want it pixelated. This Photoshop's 'nearest neighbor' scaling method.

Line 23
: Draw the image, filling the canvas so we can clearly see each pixel.


## A Gradient Example

This example has the same structure as the first one, but draws a gradient pixel-by-pixel.

::: js-lab
/comp_form/pixels/sketches/basic_pixels_2.js
/::


Line 15
: Instead of choosing a color at random, this example calculates a color based on the current `x` and `y` position of the pixel being set.


## A Third Example

The first two examples use a nested loop to set a value for every pixel in the image. This pattern often used in pixel generating and processing scripts, but not always. This example places red pixels at random places on the image.

::: js-lab
/comp_form/pixels/sketches/basic_pixels_3.js
/::








::: .assignment

## Keep Sketching! 

### Base

Explore working with image pixel data directly. This week, most of your posts should be still images. You might also consider creating animations. Since p5 pixel access is slow, this technique will pair well with pre-rendering.{bigger}

Post **at least one** sketch **for each** of the following:
1. Generate an image from scratch: pixel by pixel. Don't call any high level drawing function like `ellipse()` or `rect()`.
2. Load an image and process its pixels. Show the result.
3. Use an image as an input source to control a drawing. Don't show the original image, just the output.




### Challenge
Create a pixel Ouroboros. 
Create code that processes an image. Feed the result back into your code and process it again. What happens after several generations?

Post your source image, the result after one generation, and the result after several generations. Alternately, capture 90 generations as frames and post as a video.


/::


