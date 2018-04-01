---
title: Text
layout: layouts/compform_chapter.pug
debug: false

header_title: "Text"
previous: Animation
previous_url: ../animation
next: 
next_url: 

hero_title: Text
description: ...
software: p5.js
---
<!-- [[ leah, want to take a crack at the hero desc? again? ]] -->

## Computational Text

[ text is still relevant and powerful form of communication ]

[ web pages written in html, and are largely text. a great deal of the content we read online is algorithmicly assembled text. some of it is fully algorithmically generated. ]


[[ many tactics, but we're going to focus on three. ]]


### Examples of Computational Text

[NYT: The Best and Worst Places to Grow Up](https://www.nytimes.com/interactive/2015/05/03/upshot/the-best-and-worst-places-to-grow-up-how-your-area-compares.html)
: This fantastic NYT piece looks at how income is impacted by where someone grows up. To make the information relatable the story adapts itself based on the location of the reader.

[Interactive Journalism](https://github.com/wbkd/awesome-interactive-journalism)
: Curated collection "outstanding examples of visual and interactive journalism".


[Subreddit Simulator](https://www.reddit.com/r/SubredditSimulator/), [Explination](https://www.reddit.com/r/SubredditSimulator/comments/3g9ioz/what_is_rsubredditsimulator/)
: The Subreddit Simulator is a subreddit populated entirely by bots using Markov Chains trained on posts made across reddit.

[NYT: The little girl/boy who lost her/his name.](https://www.nytimes.com/2015/12/23/business/media/personalizing-books-via-robot.html?_r=0)
: NYT covers a custom, made-to-order children's book.


[More Animal Fun...](https://www.reddit.com/r/proceduralgeneration/comments/4bhohq/more_animal_fun/)
: [r/ProceduralGeneration](https://www.reddit.com/r/proceduralgeneration) post of animal names invented by an algorithm.



[NaNoGenMo 2017](https://github.com/NaNoGenMo/2017)
: Annual competition to procedurally generate a 50,000 word novel.

[Indie Game Generator](http://orteil.dashnet.org/gamegen), [Another Indie Game Generator](https://applepinegames.com/tech/steam-game-generator)
: Instant pitches for your next game project.

[Pentametron](https://twitter.com/pentametron?lang=en), [GreatArtBot](https://twitter.com/greatartbot), [ThinkPieceBot](http://barrl.net/2748)
: A twitter bot that pairs up tweets to create couplets in iambic pentameter. Another that generates low resolution art. A third that generates essay titles.

[Tay](https://en.wikipedia.org/wiki/Tay_(bot)), [Verge covers Tay](http://www.theverge.com/2016/3/24/11297050/tay-microsoft-chatbot-racist)
: Tay was an AI twitterbot created my Microsoft and launched on March 23, 2016. Less than a day later, it was shut down after posting many controversial, inflammatory, and racist tweets.

[Tracery](https://github.com/galaxykate/tracery), [Tracery Talk (16:16)](https://www.gdcvault.com/play/1023377/Tech)
: Tracery is an easy to use generative grammar system developed by [Kate Compton](http://www.galaxykate.com/)


[Cheap Bots, Done Quick!](https://cheapbotsdonequick.com/)
: A easy to use twitterbot generator using the Tracery.


## String Templates

String templating is basic but powerful tool for building text procedurally. If you have every completed a [Mad Lib](http://www.madlibs.com/) fill-in-the-blank story, you've worked with string templates. 

::: .activity
## Make an Amendment!
This demo populates a template with the words you provide to generate a new constitutional amendment. <br/><br/> [view source](http://localhost:3000/js_lab/js_lab.html?/text/sketches/first_amendment.js)
 

::: js-show
/text/sketches/first_amendment.js
/::


/::


### Template Example

::: js-lab
/text/sketches/title/title.js
/::

## Markov Chains

[Markov chains](https://en.wikipedia.org/wiki/Markov_chain)
 produce sequences by choosing each item based on the previous item and a table of weighted options. This table can be trained on examples, allowing Markov chains to mimic different styles. Markov chains are a useful tool for procedurally generating anything that can be represented as a sequence including text, music, and events. 




::: .activity
## Markov Chain
Explore the Markov Chain algorithm with paper and pencil using this worksheet.

### Build the Model
The right side of the worksheet lists every word that occurs in the Dr. Suess poem. These are the "keys". Find every occurrence of each key in the poem. Write the following word in the corresponding box. Do not skip repeats.

### Generate Text
Choose a random word from the keys. Write it down. Choose a word at random from corresponding box, and write it down. Continue this process, choosing each word based on the previous one.

<br/>

::: .boxed .download
<a href="../handouts/markov.svg" download>markov.svg</a>
/::

/::

### Markov Chain Example
::: js-lab
/text/sketches/markov.js
/::


## Context-Free Grammars

Consider this excerpt in html:

::: .bad
```html
<div><b>Hello, World!</div></b>
```
/::

This isn't proper html. The `b` tag should be closed before the the `div` tag.

```html
<div><b>Hello, World!</b></div>
```

HTML is text, and it can be represented by a text string. But not all text strings are valid HTML, because in HTML the order of the characters is meaningful. HTML is a [formal language](https://en.wikipedia.org/wiki/Formal_language) and it has a [formal grammar](https://en.wikipedia.org/wiki/Formal_grammar), a set of rules that define which sequences of characters are valid. Only strings that meet those rules can be properly understood by code that expects HTML. 

[Context-free grammars](https://en.wikipedia.org/wiki/Context-free_grammar) are a subtype of formal grammars that are useful for generating text. A context-free grammar is a set of replacement rules. Each rule represents a legal replacement of one symbol with zero, one, or more other symbols. In a context-free grammar, these rules don't consider the symbols before or after the symbol being replaced (the context).

The following example demonstrates using a context-free grammar to generate a short story. This example uses [Tracery](https://github.com/galaxykate/tracery), created by Kate Compton](http://www.galaxykate.com/). The [Cheap Bots, Done Quick](https://cheapbotsdonequick.com/) service lets you [make twitterbots](http://programminghistorian.github.io/ph-submissions/lessons/intro-to-twitterbots) very quickly using Tracery.


::: js-lab
/text/sketches/tracery_example.js
/::

HTML is text, so Tracery can generate HTML!

::: js-lab
/text/sketches/tracery_html.js
/::



::: .assignment

## Keep Sketching!

### Base
Explore generating and displaying text.{bigger}

### Challenge: It was a Dark and Stormy Night. 
Make a program that generates [bad](https://en.wikipedia.org/wiki/It_was_a_dark_and_stormy_night) short stories that start with "It was a dark and stormy night."

The story must:

- be bad
- be short
- start with "It was a dark and stormy night."
- be generated by code, consider using templates, [Tracery](https://github.com/galaxykate/tracery), Markov Chains, or anything you want.

Ideally, your story should:

- be grammatically perfect
- make sense, with consistent characters, relationships, and actions
- follow a dark and stormy theme
- be of the horror or mystery genre
- have a clear structure: beginning (exposition), middle (rising action/conflict), and end(resolution)


/::



## Reference Links

[RiTa](https://rednoise.org/rita/index.php)
: Software toolkit for computational literature

[Twine](http://twinery.org/)
: Open-source tool for telling interactive, nonlinear stories.

[Coding Train: Context-Free Grammar](https://www.youtube.com/watch?v=Rhqk9HYiB7Q)
: Daniel Shiffman talks about context-free grammars, Tracery, and RiTa.

[Coding Train: Context-Free Challenge](https://www.youtube.com/watch?v=8Z9FRiW2Jlc)
: Daniel Shiffman builds a small context-free grammar from scratch.

[Wikipedia: L-Systems](https://en.wikipedia.org/wiki/L-system)
: L-systems are a type of formal grammar often used in procedural graphics generation.