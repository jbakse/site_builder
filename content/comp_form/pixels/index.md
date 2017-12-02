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

Line 13
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


### Gradient Example

This example has the same structure as the first one, but draws a gradient pixel-by-pixel.

::: js-lab
/comp_form/pixels/sketches/basic_pixels_2.js
/::


Line 15
: Instead of choosing a color at random, this example calculates a color based on the current `x` and `y` position of the pixel being set.


### A Third Example

The first two examples use a nested loop to set a value for every pixel in the image. This pattern often used in pixel generating and processing scripts, but not always. This example places red pixels at random places on the image.

::: js-lab
/comp_form/pixels/sketches/basic_pixels_3.js
/::

::: .activity
## In-class Challenge One

Explore using p5's pixel manipulation functions by modifying the scripts above. Work through the following challenges in order. <br/> Don't skip any.

Time | Comment
--- | ---
< 13 in 20 Minutes | You need to put in some extra work<br/> to strengthen your programming understanding.
13 in 20 Minutes | Good.
All in 20 Minutes   | Great.
All in 15 Minutes   | Hot Dang!


### Modify the Basic Example
1. Change the image resolution to `20x20`
2. Change the image resolution to `500x500`
3. Change the image resolution back to `10x10`
4. Make each pixel a random shade of blue.
5. Make each pixel a random shade of gray.

### Modify the Gradient Example
6. Make a horizontal black to blue gradient.
7. Make a vertical green to black gradient.
8. Make a horizontal white to blue gradient.
9. Make a vertical rainbow gradient. Tip: `colorMode()`
10. Create an inset square with a gradient, surrounded by randomly colored pixels.
{continue}

### Modify the Third Example
11. Change the image resolution to `50x50`, adjust scatter to fill.
12. Instead of drawing single pixels, draw little `+` marks at random locations.
13. Make each `+` a random color.
{continue}

### Challenging Challenges
14. Color each pixel with `noise()` to visualize its values.
15. Make a radial gradient from black to red. Tip: `dist()`
16. Create a diagonal gradient.
17. Use `sin()` to create a repeating black to red to black color wave.
18. Create a `128x128` image and set the blue value of each pixel to `(y&x) * 16`
{continue}

/::






## Reading Pixel Data


The p5.js library also allows you to read pixel data, so you can process images or use images a inputs. These examples use this low-res black-and-white image of Earth.

<img class="scale pixel" style="image-rendering: pixelated; height: 120px;" src="sketches/world.png" />


### Read Pixels Example 1

This example loads the image of Earth, loops over its pixels, and multiplies each pixels color with a random color.

::: js-lab
/comp_form/pixels/sketches/read_pixels.js
/::



#### First we need to load an image to read pixel data from.

Line 3
: Declare a variable to hold our image.

Line 5
: The `preload()` function. Use this function to load assets. p5.js will wait until all assets are loaded before calling `setup()` and `draw()`

Line 6
: Load the image.

#### With our image loaded we can process the pixels.


Line 18
: Set up a nested loop to cover every pixel.

Line 20 
: Use `get()` to load the color data of the current pixel. `get()` returns an array like `[255, 0, 0, 255]` with components for red, green, blue, and alpha.

Lines 22, 23, 24
: Read the red, blue, and green parts of the color.

Line 25
: Create the new color for the pixel by multiplying the current color values with a random 0-1 value.

Line 27
: Change the pixel to our new color.

Line 28
: Uses `updatePixels()` to tell the image there has been an update. We didn't need to do this in every pass through the loop when we were just setting pixels, but here we mix `set()` and `get()`. p5.js requires calling `updatePixels()` anytime we switch from setting to getting or drawing.


### Read Pixels Example 2

This example compares each pixel to the one below it. If the upper pixel is darker, it is changed to magenta.

::: js-lab
/comp_form/pixels/sketches/read_pixels_2.js
/::



### Image as Input Example

This example doesn't draw the image at all. Instead, the image is used as an input that controls where the red ellipses are drawn. Using images an inputs is a powerful technique that allows you to mix manual art and procedurally generated content.

::: js-lab
/comp_form/pixels/sketches/read_pixels_3.js
/::




::: .activity

## In-class Challenge Two

Explore using p5's pixel manipulation functions by modifying the scripts above. Work through the following challenges in order. <br/> Don't skip any.

Time | Comment
--- | ---
< 10 in 20 Minutes | You need to put in some extra work<br/> to strengthen your programming understanding.
10 in 20 Minutes | Good.
All in 20 Minutes   | Great.
All in 15 Minutes   | Hot Dang!

### Modify Example 1
1. Colorize the white pixels with a vertical black to red gradient.
2. Colorize the black pixels with a vertical black to green gradient.
3. Feed the program you made above a grayscale or color image (under 100x100). <br/> You'll have to do this in your own editor, and you'll need a local server.

<img src="sketches/world_100.png" style="image-rendering: pixelated;">


### Modify Example 2
4. Change the color comparison to `>`.
5. Change the color comparison to `!=`.
6. Change `out_color` to an average of the two color samples.
7. Feed the program you made above the grayscale earth image above.
{continue}

### Modify Example 3
8. Invert the drawing, so that circles appear where the input pixels are black.
9. Feed the program you made above the grayscale earth image above.
10. Use lightness to drive the circle sizes.
{continue}

### Challenging Challenges
11. Start with the original Example 2 code, without your changes. Set `out_color` to the average of `this_color` and `below_color`.
12. Change `worldImage.set(x, y, out_color);` to `worldImage.set(x, y+1, out_color);`.
13. Remove the conditional statement (keep its contents).
{continue}

/::



## Advanced Topics


### The Canvas + Pixel Density
When accessing the pixel data of the canvas itself, you need to consider the pixel density p5 is using. By default p5 will create a 2x resolution canvas when running on a high-dpi (retina) display. You can call `pixelDensity(1)` to disable this feature. If you don't, you'll need to take into account the density when calculating a position in the `pixels[]` array.

The examples on this page work with the pixels of images instead of the canvas to avoid this issue altogether.



### Performance

The built-in p5 `someImage.get(x, y)` function gets the RGBA values of a pixel in an image. As noted in the [reference](https://p5js.org/reference/#/p5/get), the get call is slower than accessing the values in the `someImage.pixels[]` array directly. In fact, `get()` can be 1000s of times slower. Under the hood, `get()` reads the colors of every pixel in the image before returning the value you request.

We can get much faster results by loading the pixel values **once** with `loadPixels()`, and then reading from the `pixels[]` array directly.

The `getQuick()` funciton below reads a pixels color value from an image's `pixels[]` array. You must call `loadPixels()` before calling this funciton.

```javascript
// find the RGBA values of the pixel at x, y in the img's pixels array
// use instead of p5s built in .get(x,y), for much better performance (more than 1000x better in many cases)
// see: http://p5js.org/reference/#/p5/pixels[]
// we don't need to worry about screen pixel density here, because we are not reading from the screen

function getQuick(img, x, y) {

	var i = (y * img.width + x) * 4;
	return [
		testImage.pixels[i],
		testImage.pixels[i+1],
		testImage.pixels[i+2],
		testImage.pixels[i+3],
	];
}
```

Copy the `getQuick()` function above into your sketch. You can then replace a built in p5 `get` call with a call to `getQuick`:


#### Using `get()`
```javascript
// in loop
c = img.get(x, y);
```

#### Using `getQuick()`
```javascript
// before loop
img.loadPixels();

// in loop
c = getQuick(img, x, y);
```

The following example compares the performance of using `get()` and `getQuick()` to read and invert the color value of a small image.

::: js-lab
/comp_form/pixels/sketches/performance.js
/::




## Study Example

This example uses an image as an input to control the density and placement of drawn grass.

#### Input Image
![cf.png](./sketches/cf.png){scale}


::: js-lab
/comp_form/pixels/sketches/grass.js
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


## Misc Links


::: .links
[Reaction Diffusion in Photoshop](https://vimeo.com/61154654)
[Factorio](http://store.steampowered.com/app/427520/)
[Icon Machine](http://brianmacintosh.com/iconmachine/)
/::