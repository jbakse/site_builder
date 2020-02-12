---
title: Working with Textures
layout: layouts/compform_chapter.pug
debug: false

header_title: Working with Textures
previous:
previous_url:
next:
next_url:

hero_title: Working with Textures
description: Common ways textures are used as image and data sources in shaders.

software: WebGL
---

## Working With Textures

Today, we go back to WebGL. We'll start by adding texture loading to the from-scratch version of glslCanvas. Then we'll look at several common ways textures are used as image and data sources in shaders.

[Example Source](https://scrimba.com/c/cKpnZ4HB){boxed right}

## Loading Textures

Setup:

1. Load/Generate Image data.
2. allocate - `createTexture()`
3. bind the texture to active unit - `bindTexture()`
4. upload data - `texImage2D()`
5. configure filtering and wraping - `texParameteri()`

Draw:

1. select the active texture unit - `activeTexture()`
2. bind the texture to active unit - `bindTexture()`
3. store texture unit id in glsl sampler2D  - `gl.uniform1i()`

### Loading is Asynchronous

### Mipmapping

### Powers of 2
WebGL 1 only supports mipmapping when textures dimensions to be powers of two. 
WebGL 1 also requires wrapping to be CLAMP_TO_EDGE for NPOT textures.
WebGL supports NPOT textures fully. Its still very common to use power of two textures.

### TEXTURE_WRAP_S + TEXTURE_WRAP_T
- CLAMP_TO_EDGE
- MIRRORED_REPEAT
- **REPEAT**

### TEXTURE_MIN_FILTER
- LINEAR
- NEAREST
- NEAREST_MIPMAP_NEAREST
- LINEAR_MIPMAP_NEAREST
- **NEAREST_MIPMAP_LINEAR**
- LINEAR_MIPMAP_LINEAR.

### TEXTURE_MAG_FILTER
- **LINEAR**
- NEAREST

[glTexParameterf](https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glTexParameter.xhtml){boxed right}


[MDN: Using Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL){boxed right}


## Textures as Images

The following examples use this image texture.
::: .three-up
![pear](./textures/pear.jpg)
/::


### 01_texture/

`loading textures` `wrapping` `filtering` `texture2D` `mipmaps`

<iframe scrolling="no" style = "border: 0; width: 512px; height: 512px; overflow: hidden;"src = "./01_texture"></iframe>

[MDN: Using Textures in WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL){boxed right}

[glTexParameter reference](https://www.khronos.org/registry/OpenGL-Refpages/es2.0/xhtml/glTexParameter.xml){boxed right}

### 02_color/

`color arithmetic`

<iframe scrolling="no" style = "border: 0; width: 512px; height: 512px; overflow: hidden;"src = "./02_color"></iframe>

[GLSL RGB to HSL](http://lolengine.net/blog/2013/07/27/rgb-to-hsv-in-glsl){boxed right}

### 03_blur/

`box blur` `gaussian blur`

<iframe scrolling="no" style = "border: 0; width: 512px; height: 512px; overflow: hidden;"src = "./03_blur"></iframe>

[Gaussian Kernel Calculator](http://dev.theomader.com/gaussian-kernel-calculator/){boxed right}

### 04_emboss/

<iframe scrolling="no" style = "border: 0; width: 512px; height: 512px; overflow: hidden;"src = "./04_emboss"></iframe>

[Convolution Explorer](https://www.taylorpetrick.com/portfolio/webgl/convolution){boxed right}
[Jam3/glsl-fast-gaussian-blur](https://github.com/Jam3/glsl-fast-gaussian-blur){boxed right}
[Wikipedia: Kernel Image Processing](<https://en.wikipedia.org/wiki/Kernel_(image_processing)>){boxed right}

## Textures as Data

The following examples use these data textures.
::: .three-up
![color_ramp](./textures/color_ramp.jpg)
![noise](./textures/noise.png)
![normal](./textures/normal.png)
/::

[Substance Designer](https://www.substance3d.com/products/substance-designer/){boxed right}




### 05_color_ramp/

<iframe scrolling="no" style = "border: 0; width: 512px; height: 512px; overflow: hidden;"src = "./05_color_ramp"></iframe>

### 06_texture_noise/

<iframe scrolling="no" style = "border: 0; width: 512px; height: 512px; overflow: hidden;"src = "./06_texture_noise"></iframe>

### 07_normal_map/

<iframe scrolling="no" style = "border: 0; width: 512px; height: 512px; overflow: hidden;"src = "./07_normal_map"></iframe>

