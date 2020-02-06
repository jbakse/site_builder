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

software: ShaderToy + glslCanvas
---

## Demo Project

[Demo Project](./demo_project.zip)

## Basic_Builtin

First lets look at a simple scene in unity and see how it is structured.

- Cube, Camera, Directional Light
- Cube: Transform, Mesh, Mesh Renderer, Collider
- Environmental Lighting
- PBR Materials
- Rotate script: applied to cube, public properties in inspector.

## Unlit_rings

Lets add our own shader, starting with a simple shader that doesn't take into account lighting.

- Tour Unlit_Example.shader
- Unity shaders use an HLSL varient
- Unity translates shaders to match platform
- [Unity Shader Language](https://docs.unity3d.com/Manual/SL-ShadingLanguage.html)
- https://codepen.io/alaingalvan/post/glsl-vs-hlsl
- https://docs.microsoft.com/en-us/windows/uwp/gaming/glsl-to-hlsl-reference

## Unlit_Lit

Now a shader with lighting.

- Albedo
- Ambient
- Diffuse
  - Why its cold in winter.
- Normals
- Dot Products
- Phong: Ambient + Diffuse + Specular
- Exposing parameters to UI

## Surface_Rings

When working in Unity it is often a good idea to build on top of the rich feature set Unity provides. Instead of shading our objects from scratch, we can create surface shaders. A surface shader describes only the surface qualities of the object and leaves the lighting to Unity.

- A surface shader computes the PBR properties of surface.
- Properties are then used by the standard shader lighting to determine fragment color.
