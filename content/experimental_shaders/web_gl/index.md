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

Last week we looked at fragment shader programming using the very handy [glslEditor](https://github.com/patriciogonzalezvivo/glslEditor). This JavaScript tool sets up a WebGL context and runs your fullscreen fragment shader. It provides some basic context information through the uniforms u_resolution, u_mouse, and u_time.

Even the bare minimum WebGL program has several parts. It needs to create a context, load and compile both a vertex shader and fragment shader, buffer the geometry to draw, and then actually draw it. 

We'll start with a minimal setup and then add some of the niceties of glslEditor/glslCanvas.

## Hello, WebGL




## Adding Uniforms

## gl_FragCoord vs UVs




## Resources

[MDN: WebGL Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)