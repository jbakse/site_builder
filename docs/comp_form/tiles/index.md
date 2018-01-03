---
title: Tile Maps
layout: layouts/compform_chapter.pug
debug: false

header_title: "Tile Maps"
next: Pixel Data
next_url: ../pixels
previous: false
previous_url: false

hero_title: Tile Maps
description: Map the Planet! 
software: p5.js + p5.dom
---

## Tiles Sets + Maps

[[
introduction
tiles used in design art
patterns, fonts, visual rhythm, concord, variety, build complexity more easily
tiles in traditional art
literal tiles, patterns, etc
tiles used in videogames
memory conservation, hardware support
show tile based design/games slideshow 
]]



::: slides .contain
@@include('./slides.yaml')
/::

## [[Title]]

[[intro]]
[[descriptions below could use a once-over, and _slight_ ellaboration ]]

### Repeating Tiles

Top matches bottom, left matches right.

![patterns](./figures/patterns.png){scale}


### Repeating Tiles with Alternates

Top matches bottom, left matches right. Alternate tiles used to break up pattern.

![patterns](./figures/patterns_alt.png){scale}

### Rotatable Tiles

Top matches bottom, left matches right. These tiles are not rotationally symetric, but rotated tiles still match up nicely.

![truchet](./figures/patterns_truchet.png){scale}

See also: [Truchet Tiles](https://en.wikipedia.org/wiki/Truchet_tiles)


### Edge-matched Tile Sets

A set of tiles where the sides of each tile match up to the opposing side of another tile in the set. Edge-matched tiles are great for forming lines.

![set](./figures/patterns_set.png){scale}

One way to create a tile set is to consider each edge to be one of two states: occupied or empty. Since there are 4 sides, and each has two states, there will be 4^2 = 16 tiles in the set.

![edge_full_shadow](./figures/edge_full_shadow.png){scale}

Depending on the design, some of these tiles may be rotations of other tiles.

![edge_full](./figures/edge_full.png){scale}

In those cases, a smaller set will still work.

![edge_5](./figures/edge_5.png){scale}

With a set of tiles, you can start creating forms.

![edge_form](./figures/edge_form.png){scale}

A wide variety of looks can be created.

![multi_comp_form](./figures/multi_comp_form.png){scale full-width pixel}

See also: [Wang Tiles](https://en.wikipedia.org/wiki/Wang_tile)

### Corner-matched Tile Sets

You can also create a set by considering the corners to be empty or occupied. Corner-matched tiles are great for forming shapes.

![corner_16](./figures/corner_16.png){scale}

![corner_form](./figures/corner_form.png){scale full-width}


### Numbering Tiles

[[explane this]]
![tile_bitmask](./figures/tile_bitmask.png){scale full-width}

[[this would be a great place for an interactive tile drawing app with code]]


::: .activity

## Tile Set Discussion

- How does this method impact design rhythm, complexity, concord, similarity, repetition?
- How are these design different from/similar to patterns?
- What kind of forms does this method lead to naturally? How can this be embraced/avoided?
- What are the essential elements of this method?
- How does a tile kit like this compare to building kits like lego blocks?
- How does a tile kit compare to a font?
- How does working within constraints impact creativity?
- What are the advantages/disadvantages to working by hand?
- How would variations on the tile work? Staggered? Triangles? Rectangles?
- What if each edge/corner had three states instead of two?
- How could these tiles work in 3 dimensions?

[[ revise above ]]

/::



::: .activity
## Tile Set Workshop

Create an edge-matched tile kit. Use markers on paper squares. Make up a design that allows rotation, this is faster to draw out than a full set. Once you have made your kit, use it to create a variety of forms. Try building out each letter in the alphabet.

The image below shows which tiles you need to make, and how many to make of each.
![edge_counts](./figures/edge_counts.png){scale}

After playing with your set, start experimenting however you wish. Before the end of the class take a picture of your work and post it the class sketch blog.

[[trade tiles with someone else]]

[[revise copy]]

/::

::: .assignment

## Sketch

This is the first assignment and the beginning of your daily posts.

### Base
Daily exercise:
1. Create a new tile set.
2. Use the tile set to create a design.
3. Screengrab or photograph your work and post to the class sketch blog with the hashtag `#tiles`.

Explore a different idea every day, if you need some ideas consider using one of the `following` as a prompt. If you use one of these prompts, include it in your blog post. 

`#paper` `#pixels` `#vectors` `#typography` `#self-portrait` `#3d` `#hexagons` `#triangles` `#photocopier` `#big` `#huge` `#edge` `#corner` `#pattern` `#trade` `#teamwork` `#stamps` `#scissors` `#make-things-that-make-things` 


[[are tags still a thing?]]


### Challenge: Alphabet
Design a full alphabet using a single tile set. Post an image that shows your font in use.

/::



## Related Links

[Maze Generation](http://www.jamisbuck.org/mazes/)
[Wang Tiles](https://en.wikipedia.org/wiki/Wang_tile)
[Stagecast - Wang Tile Maze Design](http://www.cr31.co.uk/stagecast/wang/intro.html)
[Greg Schomburg - Two Minute Posters](http://designergroupies.com/twominuteposters/)
[Immaculate Heart College Art Department Rules](https://www.brainpickings.org/2012/08/10/10-rules-for-students-and-teachers-john-cage-corita-kent/)
[Redblob's Links](http://www-cs-students.stanford.edu/~amitp/gameprog.html#tiles)
[What Makes Mathmatics Hard to Learn](http://web.media.mit.edu/~minsky/OLPC-1.html)
[Explained Visually](http://setosa.io/ev/)
[Brian Eno - Oblique Strategies](https://en.wikipedia.org/wiki/Oblique_Strategies)
[Oblique Strategies Online](http://stoney.sb.org/eno/oblique.html)

