---
title: Hello, p5!
layout: layouts/compform_chapter.pug
debug: false

header_title: "Hello, p5!"
next: Pixels
next_url: ../pixels
previous: Tile Maps
previous_url: ../tiles

hero_title: Hello, p5!
description: Many of the examples on this site use p5.js, a Javascript creative coding based on Processing.
software: p5.js + p5.dom
---

## Processing and p5.js

There are many live, working code examples throught this site. Many of these examples use **p5.js**, a Javascript version of **Processing**. This chapter introduces p5.js, which is a great tool building quick creative-coding sketches for the web.

### Processing

::: .links-sidebar
[Processing](https://processing.org/)

[Casey Reas](http://reas.com/)

[Benjamin Fry](http://benfry.com/)

[Daniel Shiffman](http://shiffman.net/)
/::



[Processing](https://processing.org/) is a programming language created for visual artists learning to make creative coding projects. It was created in 2001 by MIT Media Lab alumni and creative coders [Casey Reas](http://reas.com/) and [Benjamin Fry](http://benfry.com/). The project is now also let by [Daniel Shiffman](http://shiffman.net/), who has published a number of popular books and video tutorials on creating art with Processing.

Processing combines a simple programming environment and a programming language to create an low friction entry point for creative computing. Processing provides a basic but powerful [drawing API](https://processing.org/reference/), and has libraries for other common applications like sound and networking.


### p5.js

::: .links-sidebar
[p5.js](https://p5js.org/)

[Lauren McCarthy](http://lauren-mccarthy.com/)
/::


[p5.js](https://p5js.org/) was created by artist [Lauren McCarthy](http://lauren-mccarthy.com/) to brings the Processing API and spirit to Javascript and the web. Working in p5.js is very similar to working in Processing, with the benefit that p5.js sketches work in any modern browser.


### Learning Processing and p5.js

Processing and p5.js are both widely popular open-source projects with large, active communities. They are both well documented as well. You can start with either language, you don't need to know Processing to learn p5.js.

Site  | Description
---   | ---
[Processing](https://processing.org/) | Processing Homepage
[Reference](https://processing.org/reference/) | The Processing core API Documentation
[Tutorials](https://processing.org/tutorials/) | Official Processing tutorials
[p5.js](https://p5js.org/) | pt.js Homepage
[p5.js Reference](https://p5js.org/reference/) | The p5.js core API Documentation
[p5.js Tutorials](https://p5js.org/learn/) | Official p5.js tutorials 
[Shiffman's Videos](http://shiffman.net/videos/) | Dan Shiffman has a full range of video tutorials for p5.js and creative code.
[Khan Academy<br/> JS Drawing & Animation](https://www.khanacademy.org/computing/computer-programming/programming) | Complete, free course on drawing with code using p5.js.


### A p5.js Example Sketch

This sketch draws a very simple house. You can try changing or adding to the house by editing the code below. You'll need to hit cmd/ctrl-s to update the code after you make changes.

::: js-lab
/p5/sketches/house.js
/::


## Sketching Locally

You can try out p5.js in the editor above, but to start making your own sketches you'll want a better setup. The most common way to work with p5.js is to use a local editor and browser. You will probably need a local web server too, because Chrome won't let your code do certain things unless it comes from a server. 


### Recommended Tools

[Google Chrome](https://www.google.com/chrome/browser/desktop/){boxed right}
: You can use any modern browser. I tend to use Google Chrome because I like its developer tools. In Chrome, be sure to open the Javascript console with `command-option-j`. If you have problems in your code, chrome will report errors in the console.

[Atom](https://atom.io/){boxed right}
: Atom is a free text editor from Github. It works pretty good for quick p5.js sketches, especially if you install a few add-on packages. I recommend installing and using these.

Package       | Purpose
---           | ---
jsformat      | Consistently formats the spacing and indenting of your code. Well formatted code is much easier to read and work with.
linter        | Base package that looks for and reports mistakes in your code.
linter-jshint | Language linter for javascript
atom-live-server | Provides a simple webserver right from Atom, complete with live reload.

Lately, I've also been using [VS Code](https://code.visualstudio.com/) with similar packages. You can use any text editor you wish.

### Creating a p5.js Project

To create a p5.js Project from scratch you need to do a few things.

1. Install a text editor and browser.
2. Download the p5.js library.
3. Create an `.html` file that includes the p5.js library.
4. Write a sketch in Javascript. The script will be included either in `<script>` tags with your `.html` file or in a seperate `.js` file.
5. Load the `.html` file in a browser to see it run.

::: .links-sidebar
[p5.js:<br/> Get Started](https://p5js.org/get-started/)
/::

This process is detailed in the [p5.js Get Started guide](https://p5js.org/get-started/). 


### Tips

1. Always Read your Error Messages
   
    Once you are up and running be sure to open the Javascript console to see error messages and debugging information. In Chrome you can open the console with the `View » Developer » JavaScript Console` menu or by pressing `command-option-j`. When something goes wrong with your code, Chrome tries to help by providing error messages in the console. Sometimes these messages are not very clear, but they are always more helpful than nothing.
   
   Keep the console open all of the time. 

2. Run a Local Server 

    You are going to need a local server. As soon as you start working with images or other network resources, Chrome is going to require that your code be served via `http` instead of the local file system. The `atom-live-server` package for Atom provides a super easy-to-use and simple web server you can start right from within Atom.

3. Use Live Reload

    It is important to break down your problem into small steps and try them out one by one. It is a good idea to reload your sketch after each small change, so you will be reloading very often. Manual reloading requires saving, switching to the browser, and reloading. The `atom-live-server` provides live reloading: it will tell the browser to reload every time you save. This keeps you in your editor and speeds up your workflow.

4. Use a Code Formatter

    When your code is well formatted it is easier to read and it is easier to spot mistakes. A code formatter will keep your code consistently formated completely automatically, giving you this benefit without any extra effort. 

<!-- 
### The Comp Form p5.js Template Project


## Getting Started Sketching in p5

For the first few weeks, we'll be using p5 for our sketches. Rather than create a separate project repo for each sketch, keep your sketches organized in one repo. I've created a template project for your sketches.

We'll run through these steps to get up and running with the template together in class.

- Starting a New Project
  - Create a Github Account / Log Into Github
  - Create a Repo on Github
  - Clone the Repo to Your Computer, With Github for Mac
  - Add/Modify A `README.md` File
  - Commit the Files
  - Push Your Commits
  - Check `github.com` to confirm your `README.md` synced.


- Use the Class p5 Sketches Template
  - Download —**Don't Fork**— the Template
  - Add the Files to Your Project
  - Verify the Starter Sketches Work
  - Commit and Push

- Duplicate a template sketch

- Start Sketching!




### Some Basic Examples

[[ 2 or 3 very basic examples that show the drawing api, maybe one of them is a little more complicated, procedrual coolness ]]

[[ challenges? ]]



## What Git and Github Are

- [Github Desktop for Mac](https://desktop.github.com/)

[Git](http://git-scm.com/) is a version control system. As you work on a project it will grow and change. Git keeps track of the changes you make to the files in your project, keeping a valuable history. With version control, you can review changes to a file over time and you can revert a single file or entire project to an earlier version if (when) something goes wrong. Git also provides powerful tools for sharing your work with others and merging the work of teammates.

[Github](http://www.github.com) is a service that hosts software projects that use Git. Github builds on Git, adding features for collaborative coding such as bug tracking and code reviews. Github hosts a huge array of open-source and private projects and libraries.

Normally, you use the Git software through its command line interface. If you are not comfortable using the command line, you won't be comfortable using Git in this way. [Github Desktop](https://desktop.github.com/) is a simple graphical user interface for Git, with added integration with Github. Github desktop isn't as powerful as the command line interface, but it can cover the basic workflows we'll use in class.


### Getting Started with Git and Github
[[ just a little info?]]
 -->




<style>
td:first-child { width : 25% }
</style>