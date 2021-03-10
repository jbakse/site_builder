---
title: Animation
layout: layouts/compform_chapter.pug
debug: false

header_title: "Animation"
previous: Vector Data
previous_url: ../vectors
next:
next_url:

hero_title: Animation
description: Procedural generation can be used to describe motion in animations. In both pre-rendered and real-time animations, an understanding of frame rate and timing are crucial for generating satisfying motion graphics.
software: p5.js
---

## Animation

At heart, a procedurally-generated animation is just a series of procedurally-generated images. These images, called frames, are shown in quick succession—like a flipbook—to show motion. Even a short animation will have hundreds of frames. Creating animations by hand can lead to [beautiful results](https://www.theguardian.com/artanddesign/2013/jan/09/oskar-fischinger-animation-disney-nazis) but is very laborious. This makes animation a great medium to explore with procedural methods. Making a procedurally-generated animation is similar to making a procedurally-generated image, but with additional instructions to express how the image will change over time.

Creatively, animation differs from still images by introducing another dimension: time. Because animations live in time, they excel at depicting actions, showing cause and effect, expressing narrative arcs, and telling stories.

::: slides .contain
@@include('./slides.yaml')
/::

<!--[[todo: Slide show: Oskar Fischinger on here,  show a smear frame, Chuck Jones (mention golden age), boids, inside the mind's eye, pixar, realtime indie game "inside", realtime AAA game thats really animaty... ]]-->

## Real-time vs. Pre-rendered

### Frames Per Second

Generally, faster frame rates produce smoother motion. At rates below about 10 frames per second, we tend to perceive a series of images as just that: a series of images. Above 10, we can begin to perceive a series of images as motion. Hand-drawn animation is often shown at 12 or 24 frames per second. Films are traditionally shot at 24 frames per second. Modern video games usually target 30 or 60 frames per second. Frame rates higher than 60 frames per second don't improve animation very much, but they are necessary for virtual reality. Virtual reality is more demanding than flat animation partly because it is trying to create an illusion of _presence_, not just motion. Current VR systems run at 90+ frames per second.

::: js-show .aspect-4-1 .no-margin
/animation/sketches/metronome_fps.js
/::

Metronomes animated at 5, 15, 30, and 60 frames per second.{caption}

<br/>

In **pre-rendered** animation, all the frames are created ahead of time. In **real-time** animations, the frames are created as they are shown.

Real-time rendering for animation needs to be done quickly. To render an animation at 30 frames per second, each frame must be generated in 33 milliseconds or less. To render VR at 90 frames per second, two frames—one for each eye—must be rendered in 10 milliseconds. In exchange for limiting how much time can be spent rendering each frame, we gain a huge benefit. Real-time animation can react to information—including user input—that is not known ahead of time. This allows real-time animation to be _interactive_.

But pre-rendering provides its own huge benefit. Limiting the time spent rendering each frame often means compromising on the quality or complexity of the animation. When creating a pre-rendered animation, one can take as long as necessary to create each frame, allowing for high complexity and quality. Individual frames in high-end animated films often take hours or even days to render, and they look better as a result.

### Time Keeping

Time keeping is essential to generating animation. Time is the foundation for sequencing, pace, rhythm, and speed. Choosing an appropriate method for keeping time is an important step to getting the results you want.

Real-time animation is computed at the same rate it is shown. If a frame is rendered faster than needed, the application can simply wait to display it. If the frame takes too long, frames will be dropped and the frame rate will dip. In either case the render time and display time move at the same pace. Something drawn four seconds after rendering begins is seen four seconds after the animation begins.

Pre-rendered animation is computed at a different rate—probably much slower, but maybe faster—than it is displayed so the render time and display time are not the same. A frame seen four seconds into an animation may have been drawn several hours into the rendering job that created it.

### The Simple Approach

A common and simple approach to keeping time is to first set the frame rate, and then count the frames. In p5.js you can set the framerate with `frameRate(fps)` and get the current frame number from `frameCount`.

::: js-lab
/animation/sketches/metronome_simple.js
/::

This example draws a metronome that swings its pendulum **once every second**. The `metronome()` function draws the metronome. This function doesn't position the arm based on time, it exposes a parameter called `pendulumAngle` which controls the position instead. The calling code is responsible for controlling how fast the arm swings. Lines 10 and 11 do this work.

- **Line 10** uses `map()` to map the current `frameCount` to `theta` such that `theta` increases by 2π every 60 frames or 1 second.
- **Line 11** calculates `pendulumAngle` using `sin()`. Because the sin function has a period of 2π, `sin(theta)` will produce a smooth wave that repeats every 1 second.

This approach works fine for many simpler programs, but it has some problems. The `frameCount` variable tells us how many _frames_ have been drawn: It doesn't actually tell us how much _time_ has gone by. We can calculate time from `frameCount`, but only if we assume that each frame is drawn exactly on schedule. Unfortunately, that is not always the case.

### Real-time Draw Loops

The heart of a real-time animation system is the draw loop. Most real-time draw loops work something like this:

**Read Inputs » Draw Frame » Wait » Show Frame » Repeat**

In a 60fps animation, each frame should be shown for 16.6 milliseconds. If drawing the frame takes only 10 milliseconds, the loop will _wait_ for the remaining 6.6. This prevents the animation from running too fast.

::: .links-sidebar
[p5.js<br/> draw loop code](https://github.com/processing/p5.js/blob/ed94431045900c61cb1f78942a64e0f2a623df69/src/core/core.js#L341)
/::

On the other hand, consider what happens if drawing a frame takes too long: 20 milliseconds. The draw loop might show the frame as soon as possible, but it will still be a few milliseconds late. Alternatively, the draw loop might wait an additional 13.2 milliseconds, a longer delay but in sync with the global framerate. In either case, the frame count is now behind the actual elapsed time. These delays are cumulative: slow frames set things back but fast frames don't recover the lost time. Over time, the frame count will lag more and more.

Another way your frame count can fall out of sync with time is if your requested frame rate just isn't possible. Many environments, including p5.js in the browser, synchronize drawing to the screen's refresh rate, commonly 60hz. In p5.js your framerate will effectively get rounded to a factor of 60.

::: js-lab
/animation/sketches/frame_rate_test.js
/::

In simple games and other real-time applications, these problems may not matter. When syncing animation to real time _does_ matter the simple approach above will cause problems.

### Real-time Clocks for Real-time Animation

For real-time animation, we want to base our animation on how much real time has elapsed.

The example below swings the pendulum once per second using `millis()` as the time base. If you slow the frame rate down with the slider, the animation becomes choppy, but the pendulum still swings at the same rate.

::: js-lab
/animation/sketches/metronome_real_time.js
/::

### Frame Counting for Pre-rendered Animation

For pre-rendered animation, we want to base our animation on the current frame, regardless of the time elapsed. We don't care how long the frames take to render because we know we will play them back at the correct rate. Our priority is to render every frame needed for later playback.

The example below swings the pendulum once per second using `frameCount` as the time base. If you slow the frame rate down with the slider, the animation slows down.

::: js-lab
/animation/sketches/metronome_pre_rendered.js
/::

## Timing Tips

### Timed Events

Imagine you want something to happen in your animation 10.2 seconds after it starts. It is pretty likely that your event will happen between frames, so a simple equality check won't work.

::: .bad

```javascript
// this will probably fail
if (thisFrameTime === 10.2) {
  doThing();
}
```

/::

```javascript
// this is better
if (lastFrameTime < 10.2 && thisFrameTime >= 10.2) {
  doThing();
}
```

This isn't a problem if you are using the frame number as your base and your event falls on a specific frame.

```javascript
// okay
if (frameCount === 10) {
  doThing();
}
```

But the problem might come up if you convert an event time from seconds to frames and the result is not an integer.

```javascript
// okay
const eventTime = 0.92; // seconds
const eventFrame = 0.92 * 60; // 55.2
if (frameCount - 1 < eventFrame && frameCount >= eventFrame) {
  doThing();
}
```

### Timed Intervals

The `map()` function can be useful for making things happen over a set interval.

```javascript
// move an ellipse from 100 to 400
// starting at 1 second and ending at 2.5 seconds
let x = map(millis(), 1000, 2500, 100, 400, true);
ellipse(x, 100, 10, 10);
```

### Modulo Beats

The modulo operator—`%`—is great for breaking time into repeated chunks or measures. The example below uses `%` and `map()` together to add a red blinking light to the metronome.

::: js-lab
/animation/sketches/metronome_modulo.js
/::

The new work is done on line 20:

```javascript
const red = map(millis() % 500, 0, 300, 255, 0, true);
```

First `millis() % 500` converts the time from `0 → ∞` to `0 → 500, 0 → 500, ...`. Then the map function makes `red` decrease from 255 to 0 over the first 300 milliseconds of each interval.

### Periodic Functions

Periodic functions produce repeating values in regular intervals. They are very useful for creating rhythms in procedurally-generated animation. The modulus operator and `sin()` function are both periodic and are used in the examples above to produce steadily repeating animation.

<!--
### Derivative Motion

for simple things: position = f(time)
what about acclearation: more complex eqations (derivities)
discrete inegration. dX += force * t; x += dX * t;

::: js-lab
/animation/sketches/bounce.js
/::



## Interactivity

low quality interactive
record input
pre-rendere with recording -->

## Exporting + Stitching Frames

Some environments support exporting frames as video, but neither JavaScript nor p5.js has this feature. However, p5.js does make it easy to export individual frames. You can create an image sequence by including the frame number in the name of each exported frame. Then the sequence can be stitched into a video using separate software. The following utility function wraps p5.js's `save()` function to make exporting image sequences easier.

```javascript
// saveFrame - a utility function to save the current frame out with a nicely formatted name
// format: name_####.extension
// name: prefix for file name
// frameNumber: number for the frame, will be zero padded
// extension: jpg or png, controls file name and image format
// maxFrame: checked against frameNumber, frames beyond maxFrame are not saved
function saveFrame(name, frameNumber, extension, maxFrame) {
  // don't save frames once we reach the max
  if (maxFrame && frameNumber > maxFrame) {
    return;
  }

  if (!extension) {
    extension = "png";
  }
  // remove the decimal part (just in case)
  frameNumber = floor(frameNumber);
  // zero-pad the number (e.g. 13 -> 0013);
  var paddedNumber = ("0000" + frameNumber).substr(-4, 4);

  save(name + "_" + paddedNumber + "." + extension);
}
```

::: .callout .warn
If you are exporting frames, keep in mind that p5.js automatically uses a higher resolution on retina displays, and this is the resolution at which `save()` will export. You can use `pixelDensity(1);` before your `createCanvas()` call to disable this.
/::

There are many applications that can take a sequence of frames and stitch them into a video. [FFmpeg](https://www.ffmpeg.org/) is a powerful command line utility for this and other video tasks. FFmpeg is a good choice for automated/back-end workflows. [After Effects](https://www.adobe.com/products/aftereffects.html) is a good choice if you are going to use the animation as part of a larger animated composition.

You can even stitch images in [Photoshop](https://www.adobe.com/products/photoshop.html):

1. Open Photoshop.
2. Choose `File` > `Open`.
3. Click on the first file of your sequence.
4. Check `Image Sequence`.
5. From the `Timeline` dropdown menu choose `Render Video....`
6. Adjust export settings.
7. Click `Render`

::: js-lab
/animation/sketches/save_frames.js
/::

::: .full-width
<video src="videos/render.mp4" poster="videos/render_0030.jpg" controls></video>
/::

You can even apply Photoshop effects in the bargain.

::: .full-width
<video src="videos/render_color.mp4" poster="videos/render_color_0030.jpg" controls></video>
/::


## Study Examples

### Example 1: Bounce
::: js-lab
/animation/challenges/bounce_01.js
/::

### Example 2: Fuzz
In this sketch `fuzz_ellipse(x,y,w,h,fuzz)` takes parameters like ellipse but instead of drawing one ellipse, it draws many in random positions near `x,y`. It can be used to create a textured ellipse with a fuzzy edge.

Take some time to study `fuzzy_ellipse()` in detail. Try to build an understanding of every line.
- How many parameters does it take? Are they all required?
- What does `if (dist(0, 0, xx, yy) > fuzz) continue;` do?
- What happens without this line?
- How many ellipses are drawn on each call of fuzzy_ellipse?
- Does it have a return value? Why or why not?

::: js-lab
/animation/challenges/fuzzy_01.js
/::

### Looking a little deeper.
The Fuzz example also defines a function called `fuzzy_ellipse_2()`. It is a drop-in replacement for `fuzzy_ellipse()`. Change line 31 to call `fuzzy_ellipse_2()` to see it in action..
1. Do the functions produce the same outcome?
2. Do the functions produce the exact same outcome?
3. Look at the frame_rate display. Is one more performant than then the other?
4. How does `fuzzy_ellipse_2()` approach the problem differently?
5. Which is better `fuzzy_ellipse` or `fuzzy_ellipse_2`?

::: .activity

## Coding Challenges

Complete the following challenges to deepen your understanding of the examples above.

### Modify the Bounce Example

1. Imagine what would happen if you commented in line 22.
2. Comment in line 22. 
3. Make the ball bounce higher
4. Make the ball bounce slower
5. Make the ball bounce faster
6. Make the ball bounce exactly 1 time per second
### Challenging Challenge 
7. Recreate this:

::: js-show
/animation/challenges/bounce_02.js
/::

### Modify the Fuzz Example

1. Drawing a lot of transparent ellipses can be processor intensive.\
  What framerate does the fuzz example run at on your computer?

2. Increase the the loop count from 100 to 1000.\
  How does that impact the drawing?\
  How does that impact the framerate?

3. Increase the the loop count (again) from 1000 to 10000.\
  How does that impact the drawing?\
  How does that impact the framerate?

4. Export 60 frames of this animation and turn them into a 30 fps video.\
  How long (in seconds) did it take to render 60 frames?\
  How long (in seconds) is your resulting video?\
  Does it matter what the frameRate() is set to in setup?

### Challenging Challenge
1. Recreate This

::: js-show
/animation/challenges/fuzzy_02.js
/::




/::


<style>
.center {
border: 1px solid red;
text-align: center;
width: 100%;
padding: 0;
margin: 0;

}
.center .js-show {
  margin: auto;
}
</style>



::: .assignment
## Keep Sketching!

### Base

This week focuses on creating smooth pre-rendered animations.{bigger}

### Challenge: Comp Form Bumper

Create a three-second bumper for Computational Form

- Should be exactly 90 frames: 3 seconds @ 30fps
- Should have a clear progression: beginning, middle, end
- Should feature either the text “Compform” or “Computational Form”
- Consider including the five-triangle "Sierpinski" icon
- Consider adding music or sound in post production
- Consider submitting multiple takes on this challenge

Bumper Examples:

- [My MTV](https://vimeo.com/51716890)
- [TF1 Bumpers](https://vimeo.com/91392344)
- [Much Bumpers](https://vimeo.com/17663706)
- [Nickelodeon Bumpers](https://vimeo.com/71789191)

/::

## Reference Links

[GDC: Fast and Funky 1D Nonlinear Transformations](https://www.youtube.com/watch?v=mr5xkf6zSzk)
: Great developer talk about creating interesting motion with nonlinear mapping.

[The Illusion of Life: Disney Animation](https://www.amazon.com/gp/product/0786860707?tag=parblo-20)
: Now out of print, this iconic book by Disney animators describes 12 principles for good animation.

[12 Principles of Animation: Squash and Stretch](https://www.youtube.com/watch?v=haa7n3UGyDc)
: Squash and stretch is a crucial principle for creating engaging, lifelike animation.

[Animation Techniques: The Smear](https://idearocketanimation.com/8857-animation-techniques-smear/)
: A history of the smear frame, featuring a gallery of images.
