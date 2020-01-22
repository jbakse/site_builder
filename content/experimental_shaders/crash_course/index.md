---
title: Crash Course
layout: layouts/compform_chapter.pug
debug: false

header_title: Crash Course
previous: 
previous_url: 
next: 
next_url: 

hero_title: Crash Course
description: Let's Make Some Shaders

software: glslEditor
---

## Hello, glslEditor!

We'll be using Patricio Gonzalez Vivo's glslEditor to experiment with shaders today. This is the editor used of examples by the excellent [The Book of Shaders](https://thebookofshaders.com/) written by Patricio and Jen Lowe.

The glslEditor has many helpful features:
- A live editor powered by Codemirror
- A fullscreen fragment shader context
- Visual Breakpoint Debugging
- Syntax coloring
- Inline errors
- Color and value picking UI widgets


### Inline
The very fastest way to get started is to edit the examples directly on this page. This is good for quick tests and experiments, but you won't be able to save or debug.

### Online
You can also use the hosted editor on the book of shaders.

[Book of Shaders Editor](http://editor.thebookofshaders.com/){boxed right}

### Local
Its also pretty easy to use the editor for local development. For more involved experiments, this is probably best, as you can work in your favorite editor, save and load easily, and use version control just like any other local development project.

This template creates an instance of glslEditor and loads a framgent shader into it.

I'm using VS Code with the "Live Server" exension for local hosting and "Shader languages support for VS Code" for syntax highlighting.

### VS Code Embeded
Even better, you can skip the browser altogether and preview your shaders right in VS Code using the "glsl-canvas" extension, which uses Patricio's library under the hood! This is a pretty compelling option as your projects grow.


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>GLSL Workspace</title>
</head>

<body>

    <div id="glsl_editor" data="./my_shader.frag"></div>

    <link type="text/css" rel="stylesheet"
        href="https://rawgit.com/patriciogonzalezvivo/glslEditor/gh-pages/build/glslEditor.css" />
    <script type="application/javascript"
        src="https://rawgit.com/patriciogonzalezvivo/glslEditor/gh-pages/build/glslEditor.js"></script>

    <script lang="javascript">
        let el = document.getElementById("glsl_editor");
        console.log(el);
        const editor = new GlslEditor(el, {
            canvas_size: 512,
            canvas_follow: true,
            canvas_float: 'right',
            menu: true,
            theme: 'monokai',
            lineWrapping: true,
            autofocus: true,
        });
        editor.open(el.getAttribute('data'));
    </script>

</body>

</html>
```



### Hello, World!

Below is a very basic shader that sets every pixel to red. Copy this code into the online editor or your local editor to make sure everything is working. 

::: .full-width
<div class="glsl_editor" data="./hello_world.frag"></div>
/::
<br style="clear: both;"/>


## Workshops

[Basics +  Built-ins](basics.html)

[Shaping + Mixing](shaping.html)

[Uniforms](uniforms.html)

[Random](random.html)

[Signed Distance Fields](sdf.html)













<!-- 
### Scales
::: .full-width
<div class="glsl_editor" data="./scales.frag"></div>
/::
<br style="clear: both;"/>
-->

<!-- 
### Diagonal Stripes
::: .full-width
<div class="glsl_editor" data="./diagonal_stripes.frag"></div>
/::
<br style="clear: both;"/>
-->


<!-- 
### Wood
::: .full-width
<div class="glsl_editor" data="./wood.frag"></div>
/::
<br style="clear: both;"/>
-->





<link type="text/css" rel="stylesheet" href="https://rawgit.com/patriciogonzalezvivo/glslEditor/gh-pages/build/glslEditor.css"/>
<script type="application/javascript" src="https://rawgit.com/patriciogonzalezvivo/glslEditor/gh-pages/build/glslEditor.js"></script>
<link type="text/css" href="./shader.css"/>
<script src="./shader_loader.js"></script>

<style>
  .glsl_editor {
    position: relative;
    min-height: 300px;
    
   
  }
  .ge_editor {
    min-height: 300px;
  }
</style>