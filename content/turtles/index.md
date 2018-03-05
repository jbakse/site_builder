---
title: Turtle Graphics
layout: layouts/compform_chapter.pug
debug: false

header_title: "Turtle Graphics"
next: Strategy
next_url: ../strategy
previous: Strategy
previous_url: ../strategy

hero_title: Turtle Graphics
description: TBD
software: p5.js
---

## Logo and Turtle Graphics

The Logo computer programming language was [created in 1967](http://el.media.mit.edu/logo-foundation/what_is_logo/history.html) at the (now) MIT Media Lab to explore how programming can help children learn critical thinking and problem solving. One of the creators of Logo, Seymour Papert, wrote the book [Mindstorms](https://www.amazon.com/Mindstorms-Children-Computers-Powerful-Ideas/dp/0465046746/ref=asap_bc?ie=UTF8) which discusses Logo and its goals.

::: .links-sidebar
[Wikipedia:<br/> Turtle Graphics](https://en.wikipedia.org/wiki/Turtle_graphics)
[MIT: Scratch + Turtles](https://scratch.mit.edu/projects/196503540/)
/::

One of the key ideas introduced in Logo was _turtle graphics_. The turtle was originally a small programmable robot that carried a pen and could trace its path as it moved. Logo could control this turtle with simple commands: `left` and `right` to turn and `forward` to move. This ideas was extended to drawing on screen using a virtual turtle.

::: .two-up
![Papert w/ turtle](http://cyberneticzoo.com/wp-content/uploads/Papert-x640.jpg)
Seymour Papert with a turtle, photo by Cynthia Solomon{figure}

![turtle screenshot](images/turtle.png)
Logo in action{figure}
/::

Logo's use of turtles allows students make a strong association between what happens in the program and how they move their own bodies in the real world. Papert called this _body-syntonic_ learning.

- [Seymour Paper on Learning with Toys (1986)](https://www.youtube.com/watch?v=IhEovwWiniY)
- [Seymour Papert and Students](https://www.youtube.com/watch?v=5dZMgdqy7zY)
- [Seymour Papert and Students (longer cut)](https://www.youtube.com/watch?v=xMzojQFyMo0)
- [Seymour Papert on Logo 4:25 - 6:40](https://youtu.be/ZG9cYhekB8A?t=4m25s)



# A Shift in Perspective
The p5.js graphics API uses a _Cartesian_ coordinate system. To draw a line in p5.js you might use code like this: 

```javascript
line(100, 100, 200, 200)
```

This priorities the `x,y` coordinates of the **start** and **end** of the line. The **length** and **angle** of the line are deprioritized; they are not directly specified at all.

Turtle graphics flips this prioritization around. This is code you might write to draw a using a turtle:
```javascript
right(45); forward(100);
```
Now the line's **angle** and **length** are specified instead of its **start** and **end**. This is one of the key shifts in thinking encouraged by turtle graphics. 

The second shift becomes apparent if we ask where the line in the second example would be drawn. We can figure out the angle and length of a line from its start and end points, but we can't go the other way. Knowing the length and angle of a line does not tell us where it should be drawn. In turtle graphics, commands like `right` and `forward` use coordinates **relative** to the turtle, rather than **absolute** coordinates measured on the canvas.

This shift in priorities makes some things easier to express and some things harder.



::: .columns

::: .half
**Cartesian: Drawing a Square**
```javascript
rect(100, 100, 100, 100);
```
/::

::: .half
**Turtle Graphics: Drawing a Square**
```javascript
t.moveTo(100, 100);
t.penDown();
for(side = 0; side < 4; side++) {
    t.forward(100);
    t.turnRight(90);
}
```
/::

/::


::: .columns

::: .half
**Cartesian: Drawing a Star**
```javascript
line(100, 100, 200, 100);
line(200, 100, 119.09, 158.77);
line(119.09, 158.77, 150, 63.67);
line(150, 63.67, 180.90, 158.77);
line(180.90, 158.77, 100.00, 100.00);
```
/::

::: .half
**Turtle Graphics: Drawing a Star**
```javascript
t.moveTo(100, 100);
t.penDown();
for(side = 0; side < 5; side++) {
    t.forward(100);
    t.turnRight(135);
}
```
/::

/::

The Cartesian system works well for drawing a square, but the Cartesian code for the star is awkward and unclear. Changing the star's position or size would take a lot of work. With turtle graphics, the code that draws the star mirrors how we might describe the figure. It is a more natural expression of the idea and will be easier to modify.

<!-- ::: js-lab
/turtles/sketches/turtle_star.js
/:: -->


Both frameworks can be used to draw a square or star; we are not _forced_ to draw specific things by either framework, but the way of thinking encouraged by the frameworks is different. 

Turtles are often used to draw spirograph-like figures and recursive trees.


::: js-lab
/turtles/sketches/turtle_spiralgraph.js
/::

::: js-lab
/turtles/sketches/turtle_tree.js
/::



## A Simple Turtle in p5.js

To explore using a turtle graphics with p5.js, I've created a basic turtle class for you to use this week. The examples above and below use this library, and you can copy it into your sketches.

Grab [the code here](turtle/turtle.html).

### Comp Form Turtle API

`myTurtle = new Turtle(x, y)`

The turtle constructor, it creates a turtle object.

It takes optional [x, y] starting coordinates or defaults to the center of the sketch.

`myTurtle.moveForward(distance)`

Moves the turtle along its current bearing, drawing a line if pen is down.

`myTurtle.moveBackward(distance)`

Moves the turtle backward from its current bearing, drawing a line if pen is down.

`myTurtle.moveTo(x, y)`

Instantly transports the turtle to the provided x, y location, drawing a line if pen is down.

`myTurtle.turnRight(angleDegrees)`

Rotates the turtle's bearing clockwise by the provided angle in degrees.

`myTurtle.turnLeft(angleDegrees)`

Rotates the turtle's bearing counter-clockwise by the provided angle in degrees.

`myTurtle.turnTo(angleDegrees)`

Changes the turtle's bearing to the provided angle in degrees.

`myTurtle.penUp()`

Tells the turtle to stop drawing lines while it moves.

`myTurtle.penDown()`

Tells the turtle to start drawing lines while it moves.

`myTurtle.image(image, width, height)`

Draws and image centered on the turtle's current location and aligned with the turtle's rotation.

`myTurtle.pushState()`

Records the turtle’s current state (position, bearing, etc.) to a stack. 

`myTurtle.popState()`

Restores the turtle’s state to the top recorded state on the stack.




## Turtle Examples

### Turtle Square Example
::: js-lab
/turtles/sketches/turtle_square.js
/::

### Turtle Triangle Example
::: js-lab
/turtles/sketches/turtle_triangle.js
/::

### Turtle Multiple Triangles Example
::: js-lab
/turtles/sketches/turtle_triangles.js
/::





::: .activity
## In-class Challenge


Explore turtle graphics by modifying the examples above. Work through the following challenges in order. Don't skip any.


| Time                 | Comment                                                      |
| -------------------- | ------------------------------------------------------------ |
| < 11 in 20 Minutes   | Keep studying to improve your understanding of these topics. |
| 11 in 20 Minutes     | Good.                                                        |
| All 15 in 20 Minutes | Great.                                                       |




### Modify the Triangle Example
1. Draw a pentagon.
2. Draw an octagon.
3. Draw a circle.
4. Draw a circle with a dashed line. Tip: `penUp() + penDown()`

### Modify the Multiple Triangles Example
5. Draw each triangle with different colors.
6. Change the triangle function to draw pentagons.
7. Draw a 3x3 grid of pentagons.
{continue}

Style Tip: If you change what a function does, you should change its name as well. Did you change the function name when completing challenge 6?

### Modify the Spirograph Example
8. Change the `moveForward()` parameter to `i * 3`.
9. Center the drawing.
10. Comment out the `noLoop()`
11. Change the `turnRight()` parameter to `175 + frameCount`.
{continue}


### Challenging Challenges
12. Start with the original Triangle Example. Change it to draw a Spiral.
13. Using a loop, draw 10 concentric triangles.
14. Draw the figure below.
15. Create a `polygon(sides)` function that receives a `sides` parameter and draws a regular polygon.
{continue}

![challenge_1.png](challenge_1.png)

/::


### Turtle + Images
::: js-lab
/turtles/sketches/turtle_image.js
/::


### Turtle Push + Pop
::: js-lab
/turtles/sketches/turtle_push.js
/::


### Turtle Recursive Tree
::: js-lab
/turtles/sketches/turtle_tree_2.js
/::




::: .assignment

## Keep Sketching!

### Base
Explore using turtle graphics. Start with a crazy spirograph thing and get that out of the way. Then see how much variety you can get from the turtle.{bigger}

### Challenge: Animal Face
Using turtle graphics, create an **intricate** portrait of an animal. Begin by choosing an animal. Look a photo references of your animal and note interesting details, textures, patterns, and features. How can you translate those details into your sketch? Create you sketch primarily using turtle graphics techniques.



/::




