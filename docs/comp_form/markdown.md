---
title: Markdown
layout: layouts/compform_chapter.pug
debug: false

header_title: "Special: Markdown"
next: TBD
next_url: layouts/tbd.html
previous: TBD
previous_url: layouts/tbd.html

hero_title: Markdown + More
description: Basic Markdown and other markup features for general copyrighting.
software: markdown-it, custom
---

## Headers

Up above is an H2. Use h2s for the major sections, not h1s. h1s are reserved for the overall page title.


### This is an h3

Break up major sections into subsections with h3.


#### This is an h4

H4s are good for titling lists, etc. Try not to need deeper levels than this.

##### this is an h5

Don't use these!
 

## Paragraphs

Paragraphs are easy. They look just like this, because this is just a paragraph. Nothing to it, easy-peasy. I'm gonna write that twice! Paragraphs are easy. They look just like this, because this is just a paragraph. Nothing to it, easy-peasy.

Seperate Paragraphs with blank lines.
If don't, they'll be merged into one.

## Block Quotes

> Blockquotes let you tell people what other people have said.
> - This is pretty usefull.
> - This is pretty nice.

Annonymous{attrib}


## Code Examples

```html
<div>
    Some HTML.
</div>
```

```html
<p>
Paragraphs are easy. They look just like this, because this is just a paragraph. Nothing to it, easy-peasy. I'm gonna write that twice! Paragraphs are easy. They look just like this, because this is just a paragraph. Nothing to it, easy-peasy.
</p>
```

```javascript
function someJavascript() {};
```

Inline `code` works too.





## Lists

### Bullet List
- I am a list item
- I am another item
- I am the last item

### Number List
1. I am a list item
2. I am another item
2. I am the last item. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.

### Definition List

Term
: Definition one is short.

Term 2
: Definition two is slightly longer than one.

Definition lists are provided by the `markdown-it` extension `markdown-it-deflist`

### Complex Lists

- I am a list item with multiple paragraphs!

  I'm the other paragraph!

  I'm a third paragraph.

- I am another item

  > I've got a blockquote in me!

- I am the last item

- I've got a nested list
  - Bear
  - Apple


## Images

Images are *also* fun. This is an image.

#### Large Image
![sierpinski](images/sierpinski_large.png)

#### Small Image
![sierpinski](images/sierpinski_small.png)

#### Small Image [scale pixel]
![sierpinski](images/sierpinski_small.png){scale pixel}

#### Large Image [no-margin]
![sierpinski](images/sierpinski_large.png){no-margin}

#### 2 Large Images
![sierpinski](images/sierpinski_large.png)
![sierpinski](images/sierpinski_large.png)

#### 4 Large Images [two-up]
![sierpinski](images/sierpinski_large.png)
![sierpinski](images/sierpinski_large.png)
![sierpinski](images/sierpinski_large.png)
![sierpinski](images/sierpinski_large.png){two-up}

#### 3 Large Images [three-up no-margin]
![sierpinski](images/sierpinski_large.png)
![sierpinski](images/sierpinski_large.png)
![sierpinski](images/sierpinski_large.png){three-up no-margin}



## Horizontal Rules

---



## Inline-Styles

- You can have *italic*.
- You can have **bold**. 
- They can have ~~strike through~~.
- You can have `inline code`. 

## Links

Links are fun. This is a [link to google](http://www.google.com). Raw links work too: http://www.google.com.




## Speical: Tables

Column 1    | Column 2
---         | ----
1           | 2
A           | B











## Special: Special Sections

::: #example-1 .callout
You can wrap a special section in a div with an id and class.

This isn't standard markup, or even `markdown-it`; this is part of `site builder`.
:::

These let you do some neat tricks like columns!

::: .half
### Left Half
You can use the `.half` util to make columns.
:::

::: .half
### Right Half
Like this.
:::

::: .clear

:::

## Special: Add a Class

You can add a class to a thing (a paragraph or list or something) using `markdown-it-classy`.{callout}


## Inline HTML

<div class="callout">If you can't get the markdown to do what you want, you can <em>always</em> just use html.</div>