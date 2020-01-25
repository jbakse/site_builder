---
title: Uniforms
layout: layouts/compform_chapter.pug
debug: false
---

## Uniforms

`u_resolution` `u_time` `u_mouse` `component masks` `functions` `coordinate translation`

### Venn

::: .full-width

<div class="glsl_editor" data="./venn.frag"></div>
/::
<br style="clear: both;"/>

### Infinite Hills

::: .full-width

<div class="glsl_editor" data="./infinite_hills.frag"></div>
/::
<br style="clear: both;"/>

### Spotlight

::: .full-width

<div class="glsl_editor" data="./spotlight.frag"></div>
/::
<br style="clear: both;"/>

::: .activity

## In-class Challenge

Explore the code examples above by completing the following challenges in order. <br/> Don't skip any.

### Modify the Venn Example

1. Make there be 3 circles: Red, Green, and Blue
2. Make one of the circles follow the mouse.

### Modify the Infinite Hills Example

1. Make the hills scroll faster.
2. Add a yellow sun near the horizon.

### Modify the Spotlight Example

1. Make the spotlight have a soft edge.
2. Show a dim version of the pattern in the darkness.

### Challenging Challenges

Make these!

::: .three-up
![Hills Challenge](./images/hills_challenge.png)
![Venn Outline](./images/venn_outline.png)
![Crosshair](./images/crosshair.png)

/::

/::

::: .spoiler

```javascript
out_color *= 1.0 - (step(d, 0.2) - step(d, 0.19));
```

/::

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

  .spoiler h3 {
    margin-top: 0;    
}
.spoiler {
    
    position: relative;
}
.spoiler::after {
    content: "Show Spoiler";
    font-family: "Roboto";
    font-size: 10px;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 30px;
    background: black;
    color: white;
    
}
</style>

<script>
var els = document.getElementsByClassName("spoiler");
for (var i = 0; i < els.length; i++) {
    let el = els[i];
    els[i].addEventListener('click', ()=>el.classList.remove("spoiler"));
}

</script>
