---
title: Approaching Libraries
layout: layouts/compform_plain.pug
debug: false
---


## Approaching Libraries

The tools of creative technology change continuously. Computer hardware gets smaller, cheaper, and faster. New software is created and old software is updated. Those who work closely with technology need to continuously learn to use new tools to make new projects and maintain old ones.

Because being adept at learning new tools is a skill that supports many others, it is one of the most valuable skills to cultivate.



::: .activity
## Getting Started with New Tools

In this class, we have explored a number of libraries, languages, mediums, and tools. Reflect on your process for learning new tools.

### Groups, 5 minutes
Brainstorm at least 8 tactics for initially learning about a new tool.

### Groups, 10 minutes
Look at your list of tactics, group those that are similar, and write out a list of the 5 most important tactics. State each tactic clearly using fewer than 10 words.

### Class, 10 minutes
Compare group lists.


/::

::: .spoiler
<br/>

Here are some of the key tactics I use when learning new tools:

- Read the home page and feature overview.
- Look through the examples. Focus on the library features that are demonstrated, not the code.
- Scan the API reference. Note how it is organized and any interesting function names.
- Create a "Hello, World!" from scratch or following a tutorial.
- Look at the examples again. Read the code of an interesting example.
- Modify the example.
- Extend the example.
- Build an original project of small scope.

/::

<style>
  .spoiler h3 {
    margin-top: 0;    
  }
  .spoiler {
      position: relative;
  }
  .spoiler::after {
      content: "Spoiler! Don't click this.";
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