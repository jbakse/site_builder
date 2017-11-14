---
title: Extras
layout: layouts/compform_chapter.pug
debug: true

header_title: "Special: Extra"
next: TBD
next_url: layouts/tbd.html
previous: TBD
previous_url: layouts/tbd.html

hero_title: Extras
description: Some special extras you can use from markdown.
software: markdown-it, custom
---



## Classing Content 

### Sections

::: #example-1 .callout
You can wrap multiple blocks into a div with an id and class.

This isn't standard markup, or even `markdown-it`; this is custom code for `site builder`.

These three paragraphs are wrapped in `.callout`
:::


### Add a Class with Classy

You can add a class to a thing (a paragraph or list or something) using `markdown-it-classy`.{callout}


### Use Inline HTML

<div class="callout">If you can't get the markdown to do what you want, you can <em>always</em> just use html.</div>


## Helper Classes

### Callout

This is a callout. This is used for a lot of examples on this page.{callout}

### Half

::: .half
#### Left Half
You can use the `.half` util to make columns. 

Just like this.
:::

::: .half
#### Right Half
And like this.
:::

::: .clear

:::

### Full Width

You can go `fullwidth`. This is mostly for images, and big widgets.{full-width callout}
