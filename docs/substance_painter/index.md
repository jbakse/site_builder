---
title: Substance Painter Demo
layout: layouts/compform_chapter.pug
debug: false

header_title: Substance Painter Demo
previous: false
previous_url: false
next: false
next_url: false

hero_title: Substance Painter Demo
description: Substance Painter is a tool for texturing 3D models using a Physically Based Rendering workflow.
software: Blender, Substance Painter, Unity
---

<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js"></script>

<script src="/mess/strat_mess.js"></script> -->

## Physically Based Rendering

[Physically Based Rendering](https://en.wikipedia.org/wiki/Physically_based_rendering) (PBR) is an approach to rendering graphics based on mathematically simulating how light reacts to surfaces. PBR simulates real-world surface properties including small bumps, roughness, and metallicity making it particularly well suited to photo-realistic styles.

![blender PBR](https://docs.blender.org/manual/en/latest/_images/render_cycles_nodes_types_shaders_principled_example-1a.jpg)

PBR shaders are common in both real-time game engines and pre-rendering engines and the workflow is relatively artist-friendly. Learning PBR texturing is very worthwhile.

From personal experience, spending 2 or 3 days learning the basics of PBR texturing with substance painter improved my 3D projects by at least 3x.
{bigger}

This [Substance Painter Crash Course](https://www.youtube.com/watch?v=IhBVsn2tfGc&t=949s) video is a pretty good introduction to what working in Substance Painter looks like. It is based on an older version, but the basics are still the same.

For a brief technical overview of PBR, try the [Allegortihmic PBR Guid](https://academy.allegorithmic.com/courses/the-pbr-guide-part-1)

## Substance Painter

PBR shaders rely on texture sets to describe the physical properties of a surface. In addition to a basic color texture, a PBR texture set has texture data for roughness, bumps, metallic, etc.

Substance Painter is a tool that makes working with PBR texture sets easy in multiple ways:

- Directly paint onto your 3D Object instead of the flat texture.
- Paint into all of the textures in the set simultaneously.
- Paint with materials that impact all the surface properties at once.
- Use "smart" materials and masks to automatically add realistic effects like ground dirt, dust, and scratches.
- Non-destructively switch between texture resolutions as needed for faster processing or higher quality display.
- Photoshop-like management of layers, folders, and composting.
- View the composite effect with a PBR shader in real-time in the viewport

## Lesson Plan

| Time   | Duration | Purpose      | Format   | Name                                 |
| ------ | -------- | ------------ | -------- | ------------------------------------ |
| 3:50   | 15 m     | Study        | Lecture  | Introduction                         |
| 4:05   | 40 m     | Engage+Study | Hands-on | Substance Painter Intro              |
| &nbsp; | &nbsp;   | Engage+Study | Hands-on | Quick Start and Interface Tour       |
| &nbsp; | &nbsp;   | Engage+Study | Hands-on | Layers                               |
| &nbsp; | &nbsp;   | Engage+Study | Hands-on | Display Settings and Smart Materials |
| 4:45   | 5 m      | Engage+Study | Hands-on | Creating a Project                   |
| 4:50   | 15 m     | Engage+Study | Hands-on | Challenge 1                          |
| 5:05   | 10 m     | Break        | Break    | Break                                |
| 5:15   | 20 m     | Engage+Study | Hands-on | Challenge 2                          |
| 5:30   | 40 m     | Engage+Study | Hands-on | Micro Jam: Gross Food                |
| 6:10   | 30 m     | Engage       | Present  | Micro Jam Show Off + Voting          |

## Substance Painter Tour

- Quick Start
  - Launch Substance Painter
  - Choose `Start Painting` to open demo file.

- Interface Tour
  - Main View Port, Switching Views, Rotating View, Tool Settings
  - Shelf
  - Texture Set List, One texture set per material in model
  - Layers Panel, paint layers, fill layers
  - Texture Set Settings, exported textures, mesh maps
  - Properties Paint, brush, alpha, stencil, material

- Layers
  - Paint Layer
  - Fill Layer
  - Fill Layer Masks

- Display Settings
  - Environment Mapping and Lighting
  
- Smart Materials + Masks 
  - Smart Materials
  - Smart Mask on Fill Layer
  - Adjusting Mask Settings
  - 

- Creating a Project
  - First, you need a model to texture: [block.fbx](./block/block.fbx)
  - Template: `PBR - Metallic Roughness (allegorithmic)`


- Baking Maps
- Export to Unity
  - [Substance Painter Docs](https://support.allegorithmic.com/documentation/spdoc/unity-5-130842630.html)
  - Preset: `Unity 5 (Standard Metallic)`

## Challenge 1: Block

![Block](./block/wireframe.png)
Model of a beveled block created in Blender 2.8. [block.blend](./block/block.blend){figure}

Part 1:

1. Download the [block.fbx](./block/block.fbx) model.
2. Create a new Substance Painter project with the model.
3. Texture the block to look like a plastic six-sided die.
4. Texture the block to look like a clean concrete block.
5. Texture the block to look like a dirty concrete block.
6. What else can you turn the block into?



## Challenge 2: Amanita Muscaria

![Amanita Muscaria Model](./amanita_muscaria/wireframe.png)
Model of the Amanita Muscaria created in Blender 2.8. [amanita_muscaria.blend](./amanita_muscaria/amanita_muscaria.blend){figure}

::: .two-up .height-300

![Amanita Muscaria](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Amanita_muscaria_%28fly_agaric%29.JPG/256px-Amanita_muscaria_%28fly_agaric%29.JPG)
Image provided by MichaelMaggs [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5), from Wikimedia Commons{figure}

![Amanita Muscaria](https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Fly_Agaric_mushroom_05.jpg/898px-Fly_Agaric_mushroom_05.jpg)
Image provided by Tony Wills [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5), from Wikimedia Commons{figure}

/::

1. Download the [amanita_muscaria.fbx](./amanita_muscaria/amanita_muscaria.fbx) model.
2. Create a new Substance Painter project with the model.
3. Study some [examples](https://www.google.com/search?q=amanita+muscaria) of Amanita Muscaria mushrooms online.
4. Use Substance Painter to **realisticly** texture the model.
5. Use Substance Painter to **stylisticly** texture the model.

<style>

.height-300 img {
    height: 300px;
    object-fit: cover;
}

</style>

## Micro Jam: Food

40 Minutes to model, texture, and render anything you want starting with the them of FOOD!
Work alone or in teams (be careful teams are slower).
20 Minutes to show off and vote!

### Voting Catagories
- Gag me with a spoon.
- Good enough to eat.
- Pretty as a picture.
- Flight of fancy.

