---
title: WebGL
layout: layouts/compform_chapter.pug
debug: false

header_title: WebGL
previous: 
previous_url: 
next: 
next_url: 

hero_title: WebGL
description: The WebGL API allows JavaScript running in the browser to access  hardware graphics accleration. Today, we'll look at setting up a WebGL context for fullscreen fragment shader drawing.

software: JavaScript + WebGL API
---


## GLSLCanvas From "Scratch"

> If you wish to make an apple pie from scratch, you must first invent the universe.
> 
> ― Carl Sagan, Cosmos

Last week we looked at fragment shader programming using the very handy [glslEditor](https://github.com/patriciogonzalezvivo/glslEditor). glslEditor sets up a WebGL context to run your fullscreen fragment shader in. It provides some basic context information through the uniforms u_resolution, u_mouse, and u_time.

Today we'll build get a fragment shader running without glslEditor, working from scratch: vanilla JavaScript and the WebGL API. We'll start with a minimal setup and then add some of the niceties of glslEditor/glslCanvas.

By the end, we should have something like this:
<iframe style = "border: 0; width: 100%; height: 400px;"src = "./hello_web_gl/"></iframe>

## Hello, WebGL
I like to start every program with a minimal hello world. Hopefully just a few lines of code to get something on the screen and make sure everything is working correctly. That way, if something does go wrong, I only have to look through a few lines of code to find the problem. 

Even a pretty minimal WebGL program has several parts. It needs to create a context, load and compile both a vertex shader and fragment shader, buffer the geometry to draw, and then actually draw it.

This comes out to a full screen of code across three seperate programs written in two languages. If something does go wrong, there is a lot to check.



::: .activity

## Code Recomment

1. Partner up!
2. Open the Scrimba link below and read the code together. Think about what the code might be doing. Don't look anything up.
3. I've removed the comments. Recomment this code by placing the comments at the bottom of the page where they belong.
4. Write down any and all questions you have. 

[Hello, WebGL on Scrimba](https://scrimba.com/c/cypGrKAM){boxed right}
/::



## Adding a Varying Attribute

A vertex shader can calculate data to provide to the fragment shader. Each fragment will recieve an interpolated value based on its position relative to the surrounding vertecies. Because there are typically far more fragments than vertecies, moving complex calculations to the vertex shader can improve performance at some cost to accuracy.

Next we'll add vertex color data that will be interpolated and passed to the fragment shader. 

[Hello, WebGL on Scrimba](https://scrimba.com/c/cypGrKAM){boxed right}

## Adding Uniform Attributes

Sometimes the fragment or vertex shader need access to data from the host program. The host program can pass in this data a uniform attributes. Uniforms have the same value for every vertex and fragment, but they can change between draw calls and animation frames. 

Next we'll add uniforms for the mouse position and time.

[Hello, WebGL on Scrimba](https://scrimba.com/c/cypGrKAM){boxed right}

## gl_FragCoord vs UVs

The shader currently is using the gl_FragCoord. Lets look at what happens when we move the geometry around the screen and compare that to providing a varying uv attribute. 

[Hello, WebGL on Scrimba](https://scrimba.com/c/cypGrKAM){boxed right}




## Spiral
<iframe style = "border: 0; width: 100%; height: 400px;"src = "./hello_web_gl/spiral.html"></iframe>


## Resources

[MDN: WebGL Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)