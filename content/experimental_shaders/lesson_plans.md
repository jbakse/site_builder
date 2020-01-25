---
title: Lesson Plans
layout: layouts/compform_plain.pug
debug: false
---

## Week 1, The Paradigm Shift {plain}

### Learning Objectives
Students will be able to:
- Compare Serial and Paralell problems
- Compare CPU and GPU operation
- Compare shader programming to primative rasterization
- Describe practical limitations and advantages of shader programs
- ? Compare syntax of GLSL to c-like languages.  
- ? Outline the fixed and programmable graphics pipelines
- ? Compare pure functions and procedures

### Materials

### Schedule

| Time | Duration | Purpose | Format           | Name                  |
| ---- | -------- | ------- | ---------------- | --------------------- |
| 7:00 | 15 m     | Engage  | Activity         | Serial vs Parallel    |
| 7:15 | 15 m     | Study   | Lecture          | Serial vs Parallel    |
| 7:30 | 15 m     | Study   | Lecture          | CPU vs GPU            |
| 7:45 | 15 m     | Study   | Lecture          | Shading vs Drawing    |
| 8:00 | 10 m     | Study   | Lecture          | Drawing a Rectangle   |
| 8:10 | 10 m     | Apply   | Coding Challenge | Drawing a Rectangle   |
| 8:20 | 10 m     | Break   | Break            | Break                 |
| 8:30 | 10 m     | Study   | Lecture          | Shader Practicalities |
| 8:40 | 60 m     | Study   | Live Code        | Skyline               |

### Announcements

- Crash Course Lunch Plan




## Crashcourse {plain}

### Learning Objectives
Students will be able to:
- Set up a local workspace for shader programming using a provided project template based on Patricio Gonzalez Vivo's `glslCanvas`
- Explore the basics of fragment shader programming
- Learn to use important glsl built-in functions
- Combine periodic and shaping functions to create a variety of effects.
- Work with `u_resolution`
- Create shaders that draw basic shapes.
- Understand and use signed distance fields to draw 2D primitives
- Create animated effects with `u_time`
- Create interactive shader effects with `u_mouse`
- Create randomized effects using a psuedo-random generator
- Create a scene that combines these techniques.


Saturday, January 25th


| Time  | Duration | Name                           |
| ----- | -------- | ------------------------------ |
| -     | -        | **Basics + Built-ins**         |
| 10:00 | 10 m     | Hello, glslCanvas!             |
| -     | 5 m      | Study Examples                 |
| -     | 20 m     | Coding Challenges              |
| -     | 10 m     | Discussion                     |
| -     | -        | **Shaping + Mixing Functions** |
| 10:45 | 5 m      | Study Examples                 |
| -     | 20 m     | Coding Challenges              |
| -     | 20 m     | Discussion                     |
| -     | -        | **Uniforms**                   |
| 11:30 | 5 m      | Lecture                        |
| -     | 20 m     | Study Examples                 |
| -     | 35 m     | Discussion                     |
| 12:30 | 60 m     | Lunch                          |
| -     | -        | **Random**                     |
| 1:30  | 20 m     | Lecture                        |
| -     | 20 m     | Study Examples                 |
| -     | 20 m     | Discussion                     |
| -     | -        | **Signed Distance Fields**     |
| 2:30  | 20 m     | Lecture                        |
| -     | 20 m     | Study Examples                 |
| -     | 20 m     | Discussion                     |
| -     | -        | **Micro Jam**                  |
| 3:30  | 60 m     | Jamming                        |
| 4:30  | 30 m     | Demoing                        |




## Week 2: Shaders in Web Gl + 2D Techniques {plain}

### Learning Objectives

- Create WebGL fragment shader project from scratch
- Understand WebGL/OpenGL at a high level as a state-full, procedural graphics api.
- Understand what glslCanvas library abstracts
- Send program data to a fragment shader
- Understand the shader programs role in the graphics pipeline
- Understand the implications of branching in shaders
- Learn specific tactics commonly used in 2D shaders

## Week 3: Shaders in Unity + 2D Techniques {plain}

### Learning Objectives
- Create a Unity fragment shader project from scratch
- Create simple shaders to shade 3d models
- Implement unlit shaders.
- Implement basic [Phong shading](https://en.wikipedia.org/wiki/Phong_shading)
- Implement basic [toon shading](https://en.wikipedia.org/wiki/Cel_shading)
- Describe key concepts related to physically based rendering.
- 

## Week 4: Working with Textures {plain}

### Learning Objectives
- Load and display a texture in a WebGL shader project
- Describe Mipmapping
- Understand and use OpenGL wrapping and filtering settings
- Use textures as images
- Implement a color biasing effect
- Implement a simple convolutional blur effect
- Identify common convolution image effects
- Use textures as data
- Use textures as a color lookup
- Use textures as a source of noise
- Use textures for procedural masking

<style> 
    .headless thead {
        display: none;
    }
</style>