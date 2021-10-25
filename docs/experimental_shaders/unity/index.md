---
title: Shading 3D Objects
layout: layouts/compform_chapter.pug
debug: false

header_title: Shading 3D Objects
previous:
previous_url:
next:
next_url:

hero_title: Shading 3D Objects
description: In a typcial 3D graphics pipeline, the fragment shader is used to "shade" a 3D object. The fragment shader considers the surface qualities of the object and the environmental lighting and determines how each pixel covered by the object should look. Today we'll create a basic lit shader in Unity.

software: Unity Game Engine
---

## Demo Project

[Demo Project](./demo_project.zip)

## Unity Editor Tour

Lets start with a quick tour of the Unity Editor.

! Unity is a game engine and editor UI, not just a library. In p5 you are responsible for most of what happens when you run your sketch. There is no GUI for laying out the scene. You move and draw everything yourself with support from the library. In Unity, the basic world is handled for you. You can import assets, arrange them in your scene, and configure everything without writing code. The code you write only has to handle the application specific behavior of your objects. "You call your library. Your framework calls you."

[Unity's Interface](https://docs.unity3d.com/Manual/UsingTheEditor.html)

- Workspace

  - Toolbar, Scene, Game, Console, Inspector, Project, Heirarchy

- Scene Navigation

  - Middle-Drag to Pan
  - Option-Drag to Orbit
  - Shift F to focus on object

- Locking the Inspector
- Scenes

## 01_Basic_Builtin

Lets look at a simple scene in Unity and see how it is structured.

1. Load the scene
1. Run it!

- [Game Objects](https://docs.unity3d.com/Manual/GameObjects.html)
  - Cube, Camera, Directional Light
- [Components](https://docs.unity3d.com/Manual/Components.html)
  - Cube: Transform, Mesh Filter, Mesh Renderer, Box Collider
  - Rotate Script: applied to cube, public properties in inspector.
- [Physically Based Rendering](https://blog.unity.com/technology/working-with-physically-based-shading-a-practical-approach)
- Physics Engine
  - Rigid Bodies

1. Add a cube
1. Position the cube
1. Add a rigid body component
1. Run it!

## 02_Unlit_Rings

When Unity draws your scene, it uses a shader to color each fragment/pixel. You can provide your own shaders for custom effects.

We are going to start with an "unlit" shader. Unlit shaders don't interact with Unity's lighting system. They are simpler, and more like the fullscreen shader work we've done so far.

1. Load the scene
1. Run it!

- Tour `Unlit_rings.shader`

  - You write `.shader` files in [ShaderLab](https://docs.unity3d.com/Manual/SL-Reference.html), a declarative "container" format with metadata about the shader and the shaders themesleves.
  - You write the shader programs themselves in [HLSL](https://docs.unity3d.com/Manual/SL-ShaderPrograms.html): High Level Shader Language. Unity translates HLSL to match platform.

  - Shader "name" {}
  - Properties {}
  - SubShader {}, Tags, LOD
  - Pass {} CGPROGRAM, #pragma
  - #include "UnityCG.cginc" // does a lot!
  - data structs
  - vert and frag

- [Writing shaders overview](https://docs.unity3d.com/Manual/SL-ShadingLanguage.html)
- [GLSL vs HLSL](https://codepen.io/alaingalvan/post/glsl-vs-hlsl)
- [GLSL-to-HLSL reference](https://docs.microsoft.com/en-us/windows/uwp/gaming/glsl-to-hlsl-reference)

1. Make the shapes red.
1. Make red and white rings.

## 03_Surface_Rings

If you want to write your own shader and also want to take advantage of Unity's lighting system, you can write a Surface shader.

Instead of directly describing the color of each fragment/pixel, a Surface shader describes the characteristics of the 3d objects surface Unity needs to calculate the color itself.

1. Open the scene.
1. run it.

- A surface shader computes the PBR properties of surface for each fragment rendered.
- Properties are then used by the standard shader lighting to determine fragment color.

- Tour of Surface_Rings.shader
  - Shell in ShaderLab
  - #pragma surface surf Standard fullforwardshadows
  - [SurfaceOutputStandard](https://docs.unity3d.com/Manual/SL-SurfaceShaders.html)
  - Albedo
  - Metallic
  - Smoothness
  - Alpha

## Unlit_Lit

The Unlit_Lit scene shows how to cacluate lighting using your own model with an unlit shader.

## Vertex_Wave

The Vertex_Wave scene shows how to distort a 3d object using a custom vertex shader.

## Vertex_Map

The Vertex_Map scene shows how to use a bitmap as data for distorting vertex positions.
