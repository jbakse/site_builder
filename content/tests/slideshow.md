---
title: Tests
layout: layouts/compform_chapter.pug
debug: false
---


## Slide Show

### Default

::: slides

- artist: Zaha Hadid!
  title: Galaxy SOHO
  image: https://static.dezeen.com/uploads/2015/07/dezeen_Galaxy-Soho-by-Zaha-Hadid_ss_b.jpg
  comments: >
    I don't know the question but, Zaha Hadid is the answer.
  links:
    - label: Zaha Hadid Studio
      href: http://www.zaha-hadid.com/
    - label: Zaha Hadid 2
      href: http://www.zaha-hadid.com/

- artist: Yoko Ono
  title: Cut Piece
  image: http://www.phaidon.com/resource/onocutpiece11.jpg
  comments: >
    Yoko Ono invented the internet!
  links:
    - label: Imagine Piece
      href: http://imaginepeace.com/

- artist: Google Images
  title: Test Stretch Image
  image: http://www.scotlandinprint.co.uk/media/catalog/product/cache/1/image/5000x/040ec09b1e35df139433887a97daa66f/3/2/329-landscape-photos-1.jpg

/::


### Cover

Use `.cover` to make the image cover the available area.

::: slides .cover

- slide: slide
  artist: Zaha Hadid!
  title: Galaxy SOHO
  image: https://static.dezeen.com/uploads/2015/07/dezeen_Galaxy-Soho-by-Zaha-Hadid_ss_b.jpg
  comments: >
    I don't know the question but, Zaha Hadid is the answer.
  links:
    - label: Zaha Hadid Studio
      href: http://www.zaha-hadid.com/

- slide: slide
  artist: Yoko Ono
  title: Cut Piece
  image: http://www.phaidon.com/resource/onocutpiece11.jpg
  comments: >
    Yoko Ono invented the internet!
  links:
    - label: Imagine Piece
      href: http://imaginepeace.com/

- slide: slide
  artist: Google Images
  title: Test Stretch Image
  image: http://www.scotlandinprint.co.uk/media/catalog/product/cache/1/image/5000x/040ec09b1e35df139433887a97daa66f/3/2/329-landscape-photos-1.jpg

/::

## Short and Tall


Slide shows are usually `500px` tall. You can use `.short` and `.tall` to change this to `300px` or `700px`.