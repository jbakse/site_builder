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

## Turtles

# Today's Learning Objectives
- Background on Logo + Turtles
- Basic Turtle Commands
- Using Turtles to Draw



# Logo and Turtle Graphics

Logo is a computer programming language, created in 1967 at the (now) MIT Media Lab to explore how programming can help children learn critical thinking and problem solving. One of the creators of Logo, Seymour Papert, wrote the book [Mindstorms](https://www.amazon.com/Mindstorms-Children-Computers-Powerful-Ideas/dp/0465046746/ref=asap_bc?ie=UTF8) which discusses logo and its goals.

One of the ideas introduced in Logo was "turtle graphics". In Logo one can issue commands like `left` to turn and `forward` to move. These commands are carried out by a robotic or on-screen "turtle". The turtle can draw a line, tracing its path and producing interesting drawings.

Logo's use of turtles allows students make a strong association between what happens in the program and how they move their own bodies in the real world. Papert called this "body-syntonic" learning.


- [Seymour Paper on Learning with Toys](https://www.youtube.com/watch?v=IhEovwWiniY)
- [Seymour Papert and Students](https://www.youtube.com/watch?v=5dZMgdqy7zY)
- [Seymour Papert and Students (longer cut)](https://www.youtube.com/watch?v=xMzojQFyMo0)
- [Seymour Papert on Logo 4:25 - 6:40](https://youtu.be/ZG9cYhekB8A?t=4m25s)
- [Logo History](http://el.media.mit.edu/logo-foundation/what_is_logo/history.html)


# A Shift in Perspective

so we are not _constrained_ to work this way, this is simply the way of thinking that is most naturally supported.

<!-- 
# Our Simple Turtle

I've created a basic implementation of a turtle for you to use this week.

Grab [the code here](turtle/turtle.html).

## Comp Form Turtle API

`myTurtle = new Turtle(x, y)`

turtle constructor, creates a turtle object
takes optional x, y starting coordinates (default is center of sketch)

`myTurtle.moveForward(distance)`

moves the turtle along its current bearing, drawing a line if pen is down

`myTurtle.moveBackward(distance)`

moves the turtle backward from its current bearing, drawing a line if pen is down

`myTurtle.moveTo(x, y)`

instantly transports the turtle to the provided x, y location, drawing a line if pen is down

`myTurtle.turnRight(angleDegrees)`

rotates the turtle's bearing clockwise by the provided angle in degrees

`myTurtle.turnLeft(angleDegrees)`

rotates the turtle's bearing counter-clockwise by the provided angle in degrees

`myTurtle.turnTo(angleDegrees)`

changes the turtle's bearing to the provided angle in degrees

`myTurtle.penUp()`

tells the turtle to move without drawing

`myTurtle.penDown()`

tells the turtle to draw a line when it moves

`myTurtle.image(image, width, height)`

draws and image centered on the turtle's current location and aligned with the turtle's rotation

`myTurtle.pushState()`

records the turtle’s current state (position, bearing, etc.) to a stack so that changes can be undone easily

`myTurtle.popState()`

restores the turtle’s state to the top recorded state on the stack

# Turtle Examples

## Turtle Square Example
<a href="./sketches/turtle_square.js" class="p5_example show-lab show-lab-link hidden">turtle_square</a>

## Turtle Triangle Example
<a href="./sketches/turtle_triangle.js" class="p5_example show-lab show-lab-link hidden">turtle_triangle</a>

## Turtle Multiple Triangles Example
<a href="./sketches/turtle_triangles.js" class="p5_example show-lab show-lab-link hidden">turtle_triangles</a>

## Turtle Spiralgraph Example
<a href="./sketches/turtle_spiralgraph.js" class="p5_example show-lab show-lab-link hidden">turtle_spiralgraph</a>



# In-class Challenge

Explore using p5's pixel manipulation functions by modifying the scripts above. Work through the following challenges in order. Don't skip any.

##

### Modify the Triangle Example
1. Draw a Pentagon.
2. Draw an Octagon.
3. Draw a Circle.
4. Draw a Circle with a dashed line. Tip: `penUp() + penDown()`

### Modify the Multiple Triangles Example
5. Draw each triangle with different colors.
6. Change the triangle function to draw squares.
7. Remove the `.moveTo()` commands.
8. Change the `.turnTo()` commands to `turnLeft(60)`.

Style Tip: If you change what a function does, you should change its name as well. Did you change the function name in 6?

### Modify the Spiralgraph Example
9. Change the `moveForward()` parameter to `i * 3`.
10. Center the result of 11.
11. Comment out the `noLoop()`
12. Change the `turnRight()` parameter to `175 + frameCount`.

### Challenging Challenges
13. Start with the original Triangle Example. Change it to draw a Spiral.
14. Draw two spirals. One Red, one Blue. They should spiral inside each other.
15. Using a loop, draw 10 concentric triangles.
16. Draw this:
![challenge_1.png](challenge_1.png)


### Challenge Self Assessment

After you work with Turtle Graphics this week, you should have a solid grasp on the basics. Consider redoing the challenges above to see how solid your understanding is.

| Time               | Comment                                                                          |
| ------------------ | -------------------------------------------------------------------------------- |
| < 12 in 20 minutes | You need to put in some extra work to strengthen your programming understanding. |
| 12 in 20 minutes   | Good.                                                                            |
| 16 in 30 minutes   | Great.                                                                           |
| 16 in 20 minutes   | Hot Dang!                                                                        |


# Study Examples

## Turtle + Images

<a href="./sketches/turtle_image.js" class="p5_example show-lab show-lab-link hidden">turtle_image</a>


## Turtle Push + Pop

<a href="./sketches/turtle_push.js" class="p5_example show-lab show-lab-link hidden">turtle_push</a>


## Turtle Recursive Tree

<a href="./sketches/turtle_tree.js" class="p5_example show-lab show-lab-link hidden">turtle_tree</a>
 -->





# Assignment
Keep Sketching!

Suggestions:
- Make a crazy spirograph looking thing. Get that out of the way.
- Use a thick, transparent line. Explore building up layers. Recolor in Photoshop with a Gradient Map.
- Create a pre-rendered animation.

## Challenge: Animal Face
Using turtle graphics, create an intricate portrait of an animal. Begin by choosing an animal. Look a photo references of your animal and note interesting details, textures, patterns, and features. How can you translate those details into your sketch. Create you sketch primarily using turtle graphics techniques.
