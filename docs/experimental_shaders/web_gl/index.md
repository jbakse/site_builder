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

So far we have been creating fragment shaders using the very handy [glslCanvas](https://github.com/patriciogonzalezvivo/glslCanvas) and [glslEditor](https://github.com/patriciogonzalezvivo/glslEditor) libraries. These libraries were written by Patricio Gonzalez Vivo and used for the examples on the [Book of Shaders](https://thebookofshaders.com/). glslCanvas takes care of all the boilerplate needed to get your fullscreen fragment shader running. It provides some basic context information through the uniforms u_resolution, u_mouse, and u_time.

Today we'll build get a fragment shader running without glslEditor, working from scratch: vanilla JavaScript and the WebGL API. We'll start with a minimal setup and then add some of the niceties of glslEditor/glslCanvas.

By the end, we should have something like this:

<iframe style = "border: 0; width: 100%; height: 400px;"src = "./hello_web_gl/demo.html"></iframe>

## Hello, WebGL

I like to start every program with a minimal _Hello, World_ program. Just a few lines of code to get something on the screen and make sure everything is working correctly.

Even a pretty minimal WebGL program has several parts. At _minimum_, it needs to create a WebGL context, load and compile both a vertex shader and fragment shader, buffer the geometry to draw, and then actually draw it.

Doing all of this takes a full screen of code across three seperate programs written in two languages. Thats not even counting the HTML. If something does go wrong, there is a lot to check.

<iframe style = "border: 0; width: 100%; height: 400px;"src = "./hello_web_gl/min.html"></iframe>

::: .activity

## Code Recomment

1. Partner up!
2. Open the Codepen link below and read the code together. Think about what the code might be doing. **Don't look anything up**.
3. I've scrambled the comments and moved them to the bottom. Fork the CodePen and then recomment this code by placing the comments at the bottom of the page where they belong.
4. As you work add any questions you have to the notion.

[Hello Shader: Comment Challenge](https://codepen.io/jbakse/pen/NWgzjYz){boxed right}

/::

## Vertex Attributes and Varyings

The vertex shader will be run once per vertex in the geometry. Its main job is to translate the position of the vertex from model-space to screen-space. You'll almost always provide position data as a _vertex attribute_. You might also add other vertex attributes, like normals or colors.

A vertex shader can calculate data to provide to the fragment shader. These are called `varying` variable. The varying is calculated once per vertex, but each fragment will recieve an interpolated value based on its position relative to the surrounding vertices. Because there are typically far more fragments than vertecies, moving complex calculations (e.g. lighting) to the vertex shader can improve performance at some cost to accuracy.

Next we'll add vertex color data that will be interpolated and passed to the fragment shader.

[Varyings on CodePen](https://codepen.io/jbakse/pen/QWgxJNo?editors=0010){boxed right}

## Adding Uniform Attributes

Sometimes the fragment or vertex shader need access to data from the host program. The host program can pass in this data a uniform attributes. Uniforms have the same value for every vertex and fragment, but they can change between draw calls and animation frames.

Next we'll add uniforms for the mouse position and time.

[Uniforms on CodePen](https://codepen.io/jbakse/pen/WNOyYjW?editors=0010){boxed right}

## Errors

Sometimes things go wrong. Maybe your shader code has a typo and WebGL can't compile it. Maybe your device doesn't support WebGL.

Its a good idea to include some error checking in your code.

[Errors on CodePen](https://codepen.io/jbakse/pen/BaZVGwv?editors=0010){boxed right}

## Shader Code Loading

Coding shaders glsl in string literals in Javascript is a pain. It is nicer to keep your shader code in separate files and load them with javascript. Like this:

```
async main() {
    ...
    const vertex_shader_source = await fetch(canvas.dataset.vert).then(r => r.text());

    const vertex_shader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertex_shader, vertex_shader_source);
    gl.compileShader(vertex_shader);
    ...
}


```

<!-- ## gl_FragCoord vs UVs

The shader currently is using the gl_FragCoord. Lets look at what happens when we move the geometry around the screen and compare that to providing a varying uv attribute.

[Hello, WebGL on Scrimba](https://scrimba.com/c/cypGrKAM){boxed right} -->

<!-- ## Spiral

<iframe style = "border: 0; width: 100%; height: 400px;"src = "./hello_web_gl/spiral.html"></iframe> -->

<!-- ## Resources

[MDN: WebGL Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL) -->
