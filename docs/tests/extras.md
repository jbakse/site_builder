---
title: Extras
layout: layouts/compform_chapter.pug
debug: false

header_title: "Special: Extra"
next: TBD
next_url: layouts/tbd.html
previous: TBD
previous_url: layouts/tbd.html

hero_title: Extras
description: Some special extras you can use from markdown.
software: markdown-it, custom
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js"></script>
<script src="../mess.js"></script>
<script src="./extra_mess.js"></script>


## Classing up Content 

### Use Sections

::: #example-1 .callout
You can wrap multiple blocks into a div with an id and class.

This isn't standard markup, or even `markdown-it`; this is custom code for `site builder`.

These three paragraphs are wrapped in `.callout`
/::

[test](#)


### Use Classy

You can add a class to a thing (a paragraph or list or something) using `markdown-it-classy`.{callout}


### Use Inline HTML

<div class="callout">If you can't get the markdown to do what you want, you can <em>always</em> just use html.</div>


## Helper Classes


### Bigger

You can put `.bigger` on a paragraph. {bigger}

Then it will be bigger.

### Underline

You can put underline on blocks. {underline}





### No Margin

You can go `no-margin`. This is mostly for images.{no-margin}


### Full Width

You can go `fullwidth`. This is mostly for images, and big widgets.{full-width callout}


## Include

You can break up page into multiple files using ``@@include()``

@@include('./inc_content.md')