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


## Computational Text Tactics

## Templates

String templating is basic but powerful tool for building text procedurally. If you have every completed a [Mad Lib](http://www.madlibs.com/) fill-in-the-blank story, you've worked with string templates. 


::: .activity
## Fill-in-the-blank Constitution
Explore building text with string template using pencil and paper.
/::


## Markov Chains

[Markov Chains](https://en.wikipedia.org/wiki/Markov_chain)

::: .activity
## Markov Chain
Explore the Markov Chain algorithm with paper and pencil using this worksheet.
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




## Implementing String Templates

string templates
lodash shuffle
lodash sample

Basic
Title Generator
Life Expectancy

## Implementing Markov Chains

Markov Chain




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

- be grammatically pefect
- make sense, with consistent characters, relationships, and actions
- follow a dark and stormy theme
- be of the horror or mystery genre
- have a clear structure: beginning (exposition), middle (rising action/conflict), and end(resolution)


/::



## Reference Links

[Cheap Bots, Done Quick!](https://cheapbotsdonequick.com/)
: A easy to use twitterbot generator using the Tracery ([demo](http://www.crystalcodepalace.com/traceryTut.html), [repo](https://github.com/galaxykate/tracery)) grammar by [Kate Compton](http://www.galaxykate.com/).

[Twine]


[Coding Train: Context-Free Grammar](https://www.youtube.com/watch?v=Rhqk9HYiB7Q)
: Daniel Shiffman talks about context-free grammars, Tracery, and RiTa
[Coding Train: Context-Free Challenge](https://www.youtube.com/watch?v=8Z9FRiW2Jlc)
: Daniel Shiffman builds a small context-free grammar from scratch.
[Wikipedia: L-Systems](https://en.wikipedia.org/wiki/L-system)
: L-systems are a type of formal grammar often used in procedural graphics generation.