
## Get to Know p5

::: .links-sidebar
[p5: Reference](https://p5js.org/reference/)
/::

If you haven’t used the following features of p5, take a look.


### colorMode()
Working with color in terms of hue, saturation, and brightness is often much better than RGB. Use `colorMode()`to switch to HSB colors, and to choose your range (0-255, 0-100, 0-1).

### ellipseMode(), rectMode()
Sometimes the clearest way to draw a ellipse is to specify the bounding box corners. Sometimes the center and width/height makes more sense. Use these functions to switch how `ellipse()` and `rect()` use their arguments.

### push() + pop()
Normally if you change your drawing state (fill color, stroke weight, etc), it stays changed after you do your drawing. `push()` and `pop()` let you save and restore your state.

### lerp(), lerpColor()
These functions let you interpolate between two values.

### map()
Use `map()` to remap values from one range to another.
