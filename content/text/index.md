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
description: Generate strings with templates, Markov chains, and context-free grammars.
software: p5.js
---
<!-- [[ leah, want to take a crack at the hero desc? again? ]] -->

## Computational Text

Procedural generation can be used to create form in almost any media: image, video, animation, sound, sculpture. This chapter introduces some tactics for procedurally generating text, which may be the media most often computationally generated. Web pages are built out of text, and most of the time this text is computationally generated at least to some degree. 

::: .links-sidebar
[Google:<br/>How search works.](https://www.google.com/search/howsearchworks/)
/::

Google uses programs to crawl the web, collecting a database of information about every page. When you perform a search, another program searches this database for relevant information. This information is then carefully excerpted, summarized, formatted, and collated. The resulting web page of results is built on the fly and sent to your browser for your to read.

Social media sites like Facebook and Twitter are software systems for collecting and sharing user-created content, largely text. Even websites primarily concerned with other media, like YouTube and Instagram, must generate HTML text to showcase their videos and images.

### The Imitation Game

Search engines and social media sites are certainly procedurally generating text, but for the most part they are not generating _content_. Few would argue that these sites are being truly _creative_. In fact, many have argued that computers are not capable of true creativity at all.

> Not until a machine can write a sonnet or compose a concerto because of thoughts and emotions felt, and not by the chance fall of symbols, could we agree that machine equals brain—that is, not only write it but know that it had written it. No mechanism could feel (and not merely artificially signal, an easy contrivance) pleasure at its successes, grief when its valves fuse, be warmed by flattery, be made miserable by its mistakes, be charmed by sex, be angry or depressed when it cannot get what it wants.

Geoffrey Jefferson{attrib}

In 1950, [Alan Turing](https://en.wikipedia.org/wiki/Alan_Turing) addressed this argument and several others in [Computing Machinery and Intelligence](https://home.manhattan.edu/~tina.tian/CMPT420/Turing.pdf), in which he considered the question "Can machines think?" Rather than answering the question directly, Turing proposes a an _imitation game_, often referred to as the Turing Test, which challenges a machine to imitate a human over "a teleprinter communicating between two rooms". Turing asks whether a machine could do well enough that a human interrogator would be unable to tell such a machine from an actual human. He argues that passing such a test would actually be harder than thinking—after all, a human can certainly think, but could not convincingly imitate a computer. 

 
### Generating Language 

Creativity can be expressed in many media, but—perhaps as a consequence of the Turing Test using verbal communication—artificial creativity is often explored in the context of natural-language text generation. This chapter introduces three common and accessible text generation tactics: string templating, Markov chains, and context-free grammars. These techniques focus on **syntax**—the patterns and structure of language—without much concern for **semantics**, the underlying meaning expressed. Natural-language processing and natural-language generation are areas of active research with numerous sub-fields including automatic summarization, translation, question answering, and sentiment analysis. Much of this research is focused on semantics, knowledge, and understanding and often approaches these problems with machine learning.

The following projects explore many areas related to generative text:



#### Content Generators

[Subreddit Simulator](https://www.reddit.com/r/SubredditSimulator/), [Explanation](https://www.reddit.com/r/SubredditSimulator/comments/3g9ioz/what_is_rsubredditsimulator/)
: The Subreddit Simulator is a subreddit populated entirely by bots using Markov Chains trained on posts made across Reddit.

[NaNoGenMo 2017](https://github.com/NaNoGenMo/2017)
: Annual competition to procedurally generate a 50,000 word novel.

[Indie Game Generator](http://orteil.dashnet.org/gamegen), [Another Indie Game Generator](https://applepinegames.com/tech/steam-game-generator)
: Instant pitches for your next game project.

[Pentametron](https://twitter.com/pentametron?lang=en)
: A twitter bot that pairs up tweets to create couplets in iambic pentameter.

#### Procedural Journalism

[NYT: The Best and Worst Places to Grow Up](https://www.nytimes.com/interactive/2015/05/03/upshot/the-best-and-worst-places-to-grow-up-how-your-area-compares.html)
: This fantastic NYT piece looks at how where someone grows up impacts income. To make the information relatable the story adapts itself based on the location of the reader.

[Interactive Journalism](https://github.com/wbkd/awesome-interactive-journalism)
: A curated collection of "outstanding examples of visual and interactive journalism".

[NYT: The little girl/boy who lost her/his name.](https://www.nytimes.com/2015/12/23/business/media/personalizing-books-via-robot.html?_r=0)
: NYT covers a custom, made-to-order children's book.

Associated Press
: The Associated Press procedurally generates [college sports coverage](https://www.ap.org/press-releases/2015/ap-ncaa-to-grow-college-sports-coverage-with-automated-game-stories) and  [corporate earnings reports](https://blog.ap.org/announcements/automated-earnings-stories-multiply). 


#### Bots

[ELIZA](https://en.wikipedia.org/wiki/ELIZA)
: In 1964 Joseph Weizenbaum created ELIZA, a therapist chatbot that you can still [talk to today](http://psych.fullerton.edu/mbirnbaum/psych101/Eliza.htm). 


[Tay](https://en.wikipedia.org/wiki/Tay_(bot)), [Verge covers Tay](http://www.theverge.com/2016/3/24/11297050/tay-microsoft-chatbot-racist)
: Tay was an AI twitterbot created by Microsoft and launched on March 23, 2016. Less than a day later, it was shut down after posting many controversial, inflammatory, and racist tweets.








### Generating other Media via Text
Generating text can be a step in the process for generating form in other media. The structure of a webpage is defined in [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML). The layout and style is defined in [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS). [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) is a popular format for defining vector images. The [ABC](https://en.wikipedia.org/wiki/ABC_notation) and [JAM](https://en.wikipedia.org/wiki/JAM_notation) formats represent music. Three-dimensional objects can be represented in [OBJ](https://en.wikipedia.org/wiki/Wavefront_.obj_file) files. **All of these formats are plain text files.** 

You can think about these media in terms of the text files that represent them. This provides a fundamentally different point of view and can lead to novel approaches for generating form.


### Programs that Write Programs 
Most programming languages are themselves text-based. Programs that generate programs are common and important computing tools. [Compilers](https://en.wikipedia.org/wiki/Compiler) are programs that rewrite code from one language to another. GUI coding environments like [Blocky](https://blockly-demo.appspot.com/static/demos/generator/index.html) and [MakeCode](https://makecode.com/) generate corresponding JavaScript. Interface builders like the one in Xcode generate code scaffolding which can be added to manually. Of course, programs that write programs can also have more esoteric functions. A [Quine](https://en.wikipedia.org/wiki/Quine_(computing)) is a program that generates a copy of itself. 









## String Templates

String templating is a basic but powerful tool for building text procedurally. If you have every completed a [Mad Lib](http://www.madlibs.com/) fill-in-the-blank story, you've worked with string templates. 

::: .activity
## Make an Amendment!
This demo populates a template with the words you provide to generate a new constitutional amendment. <br/><br/> [view source](http://localhost:3000/js_lab/js_lab.html?/text/sketches/first_amendment.js)

<!-- [[localhost link, issue with page resizing/cutting off beginning of lines]] -->
 
::: js-show
/text/sketches/first_amendment.js
/::

/::
<br/>

Since generating HTML strings is such a common problem in web development, there are many javascript libraries for working with string templates including [Mustache](https://mustache.github.io/), [Handlebars](http://handlebarsjs.com/), [doT](https://olado.github.io/doT/), [Underscore](http://underscorejs.org/), and [Pug/Jade](https://pugjs.org/).

Starting with ES6, JavaScript has native support for string templates via [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Template literals are now [widely supported](http://kangax.github.io/compat-table/es6/) in browsers without the need for a preprocessor.

A JavaScript template literal is a string enclosed in back-ticks:

```javascript
`I am a ${noun}!`
```
The literal above has one placeholder: `${noun}`. The content of the placeholder is evaluated as a javascript expression and the result is inserted into the string.

```javascript
let day = "Monday";
console.log(`I ate ${2*4} apples on ${day}!`);
// I ate 8 apples on Monday!
```

The examples below demonstrate using JavaScript template literals.


### Template Examples

::: js-lab
/text/sketches/title/title.js
/::


::: js-lab
/text/sketches/death/death.js
/::

## Markov Chains

[Markov chains](https://en.wikipedia.org/wiki/Markov_chain)
 produce sequences by choosing each item based on the previous item and a table of weighted options. This table can be trained on examples, allowing Markov chains to mimic different text styles. Markov chains are a useful tool for procedurally generating anything that can be represented as a sequence, including text, music, or events. 




::: .activity
## Markov Chain
Explore the Markov Chain algorithm with paper and pencil using this worksheet.

### Build the Model
The right side of the worksheet lists every word that occurs in the Dr. Seuss poem. These are the "keys". Find every occurrence of each key in the poem. Write the following word in the corresponding box. Do not skip repeats.

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

Consider this html excerpt:

::: .bad
```html
<div><b>Hello, World!</div></b>
```
/::

This isn't proper html. The `b` tag should be closed before the the `div` tag.

```html
<div><b>Hello, World!</b></div>
```

HTML is text, and it can be represented by a text string. But not all text strings are valid HTML. HTML is a [formal language](https://en.wikipedia.org/wiki/Formal_language) and it has a [formal grammar](https://en.wikipedia.org/wiki/Formal_grammar), a set of rules that define which sequences of characters are valid. Only strings that meet those rules can be properly understood by code that expects HTML. 

[Context-free grammars](https://en.wikipedia.org/wiki/Context-free_grammar) are a subtype of formal grammars that are useful for generating text. A context-free grammar is described as a set of replacement rules. Each rule represents a legal replacement of one symbol with zero, one, or multiple other symbols. In a context-free grammar, the rules don't consider the symbols before or after—the context around—the symbol being replaced.

The following example demonstrates using a context-free grammar to generate a short story. This example uses [Tracery](https://github.com/galaxykate/tracery), created by [Kate Compton](http://www.galaxykate.com/). The [Cheap Bots, Done Quick](https://cheapbotsdonequick.com/) service lets you [make twitterbots](http://programminghistorian.github.io/ph-submissions/lessons/intro-to-twitterbots) very quickly using Tracery. You can learn more about Tracery by watching this [talk (16:16)](https://www.gdcvault.com/play/1023377/Tech) by Kate Compton.


::: js-lab
/text/sketches/tracery_example.js
/::

HTML is text, so Tracery can generate HTML!

::: js-lab
/text/sketches/tracery_html.js
/::




::: .activity
## In-class Challenge

Explore using Javascript Template literals by completing the following challenges. 

::: js-lab
/text/sketches/challenge.js
/::


### Modify the Example Above
1. Change the value of `person` to a different name.
2. Change the value of `number` to a random integer between 0 and 100.
3. Add a second sentence to the template with two new placeholders.

### Modify the Example Above Some More
1. Add an 's' to 'computer' when `number` is not 1.
2. Add this to your template: `The word "${word}" has ${letterCount} letters`.
3. Create a variable for `word` and set its value to a random word from a small list.
4. Create a variable for `letterCount` and set its value to the number of letters in `word`.
{continue}

### Challenging Challenges
1. Instead of using `console.log()` to show the expanded template, inject the result into the webpage.
2. Alter the program so that the dynamic parts of the template appear in bold.
{continue}


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
- be generated by code: consider using templates, [Tracery](https://github.com/galaxykate/tracery), Markov Chains, or anything you want.

Ideally, your story should:

- be grammatically perfect
- make sense, with consistent characters, relationships, and actions
- follow a dark and stormy theme
- be of the horror or mystery genre
- have a clear structure: beginning (exposition), middle (rising action/conflict), and end (resolution)


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


[Insignificant Little Vermin](https://egamebook.com/vermin/v/latest/)
: This game, written by Filip Hracek, renders an open-world RPG game in writing.
