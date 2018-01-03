---
title: Extras
layout: layouts/compform_chapter.pug
debug: true

header_title: "Special: Extra"
next: TBD
next_url: layouts/tbd.html
previous: TBD
previous_url: layouts/tbd.html

hero_title: Modules
description: Some content modules you can use from markdown.
software: markdown-it, custom
---


## Callout

This is a callout.{callout}


## Boxed Links

[Test Source: Parametricism](#){boxed}

.boxed


[Test Download](#){boxed download}

.boxed.download

Use links to format a list of links

## Links Sidebar

::: .links-sidebar
[Wikipedia:<br/>Paramet&shy;ricism](#)

[Test Source:<br/>Paramet&shy;ricism](#)
/::

Use `.links-sidebar` to float links off to the right. Put the sidebar content before the content it should be next too.



## Columns + Half

You can use the `.half` util to make columns. 

::: .columns

::: .half
#### Left Half {underline}
Just like this.
/::

::: .half
#### Right Half {underline}
And like this.
/::

/::



