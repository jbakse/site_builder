---
title: Music
layout: layouts/compform_chapter.pug
debug: false

header_title: Music
previous: Sound
previous_url: ../sound
next: 
next_url: 

hero_title: Music
description: Music is organized sound.
software: p5.js p5.sound

---


## Music

This chapter covers some specific tactics for generating a short piece of music. Our result will be a simplified version of [this demo](http://psam3060-d-s16.github.io/class_notes/week_9/sketch_music/). 

We'll look at how to plan this project, the pieces that need to be built, and how to represent data. The final generator will be implemented in  JavaScript using the p5.sound library.


### Examples

Composers have long explored the writing music with algorithms and chance. These works fall into a few rough categories.

In [algorithmic music](https://en.wikipedia.org/wiki/Algorithmic_composition), and algorithm is employed _at the time of composition_ resulting in a fixed score.

In [aleatoric music](https://en.wikipedia.org/wiki/Aleatoric_music), important aspects of a composition are intended to be decided _at the time of the performance_. Aleatoric allows for variation according to the performer or to chance within a specific structure. For example, a musical system published in 1792, _Anleitung zum Componieren von Walzern so viele man will vermittelst zweier Würfel, ohne etwas von der Musik oder Composition zu verstehen (Instructions for the composition of as many waltzes as one desires with two dice, without understanding anything about music or composition)_ employed chance to arrange a pre-composed measures of music.

Brian Eno used the term Generative Music to describe music that is created by a system an constantly changes.

[Six Marimbas](https://www.youtube.com/watch?v=mLZelvSvh3A) [Come Out](https://www.youtube.com/watch?v=g0WVh1D0N50) [Its Gonna Rain](https://www.youtube.com/watch?v=vugqRAX7xQE)
: Three compositions by Steve Reich

[Cobra](https://www.youtube.com/watch?v=UdNdSJUf_8I)
: John Zorn's "game piece" music.

[Music for Airports](https://en.wikipedia.org/wiki/Ambient_1:_Music_for_Airports)
: Ambient music created by Brian Eno

[Jeremy Wentworth: WebKitSynth](http://jeremywentworth.com/projects/webkitsynth/index.html)
: Generates a short sequence, with lots of knobs to tweak.

[Happy Songs in Sad Versions](https://www.youtube.com/watch?v=En1BApnx3Co)
: Popular songs in Minor Keys.

[Neural Network Music](http://yoavz.com/music_rnn/)
: Academic paper (with examples) on "Music Language Modeling with Recurrent Neural Networks".



## Synthesizing a Note

Generating a melody isn't much use if there is no way to hear it. We could export our melody in an interchange format like MIDI, and play it back in an audio software package, but it will be more fun to build our own synthesizer.

There are many ways to synthesize tones. Some of the most common are additive, subtractive, frequency modulation, amplitude modulation, wavetable, and sampled synthesis.

Additive Synthesis
: Combine simple sinewave signals together to create complexity [Fourier](https://en.wikipedia.org/wiki/Fourier_series)

[illustration]

Subtractive Synthesis
: Filter a signal to attenuate overtones and shape timbre. [Minimoog](https://en.wikipedia.org/wiki/Minimoog)

[illustration]

FM Synthesis
: Modulate the frequency of one oscillator with another, vibrato

AM Synthesis
: Modulate the amplitude of one oscillator with another

Wavetable Synthesis
: Combine data-defined waveforms

Sampled Synthesis
: Use recorded samples and pitch shifting


[Wikipedia: Synthesizer](https://en.wikipedia.org/wiki/Synthesizer)


::: .discussion
## Designing the Synth
Most synthesizers offer a great deal of customization through parameters. What qualities do we want control of?
/::

### Qualities of our Synth

P5.sound has built-in monophonic and polyphonic synthesizers.   They are a little underdocumented, so we'll build our own using p5.sounds Oscillator and Env classes. Building our own is a good way to understand what is going on anyway.

The p5.sound Oscillator class generates a periodic signal with customizable frequency, amplitude, and waveform.

We can shape the amplitude of the Oscillator using the p5.sound Evn class. This class can control the amplitude of an oscillator using an [ADSR](https://en.wikipedia.org/wiki/Synthesizer#Attack_Decay_Sustain_Release_(ADSR)_envelope) envelope. An ADSR envelope controls the attack, decay, sustain and release of a sound and can be used to simulate these characteristics of acoustic instruments.

[whiteboard diagram ADSR Envelope]
[whiteboard diagram [Evn] -> (amp)[Oscillator]]

By combining a p5 Oscillator and Env we'll have a synth with these parameters:

- Frequency
- Basic Waveform Tone
- Attack Time
- Decay Time
- Sustain Level
- Release Time

Our synth will be very basic. We won't have control of amplitude at the note level. We also won't be able to play more than one note at a time. Playing a note will cut off any other note currently playing and chords won't work at all. This type of synth was pretty common on cheap 80's musical keyboards.

::: js-lab
/music/sketches/hello_env.js
/::

### SimpleSynth

The code above creates a small synthesizer system. 
[SimpleSynth](./SimpleSynth.html) is a small, reusable class that [encapsulates](https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)) this system and gives it an easy to use programming interface.


[SimpleSynth Source](./SimpleSynth.html){boxed right}
[Try it with MIDI](http://localhost:3000/js_lab/js_lab.html?/music/sketches/hello_midi.js){boxed right}

::: js-lab
/music/sketches/hello_simplesynth.js
/::



## Playing a Melody

Now that we can play individual musical notes, we need to create some coee to play a series of notes—a melody.

::: .discussion
## What does a Melody Look Like?
A melody is a series of notes. What information is necessary to describe a melody? How would you represent that information in code?
/::

### Our Melody Format

The p5.sound library has a set of classes—Phrase, Part, and Score—for representing and playing musical sequences. That system assumes each "note" in the song is the same length, and doesn't specifically support precise timing, so we'll build our own representation of a song.

Since our synth can't play more than one note at a time our format can be a simple sequence, without support for chords. And because our synth isn't velocity sensitive we don't need to represent that either. We _do need_ to represent the pitch of each note and its length.

Pitch
: We could represent our pitch with the raw frequency in [hertz](https://en.wikipedia.org/wiki/Heinrich_Hertz): e.g. `261.63`.

  We could use [scientific pitch notation](https://en.wikipedia.org/wiki/Scientific_pitch_notation): e.g. `C4`.
  
  We could use the [MIDI](https://en.wikipedia.org/wiki/MIDI) note value: e.g. `60`.

  Hertz is a little fussy, and scientific pitch notation is harder to parse than MIDI note values so we'll use MIDI note values. P5.sound's `midiToFreq()` will translate from midi values to frequencies for us.

| A  | B♭ | B  | C4 | D♭ | D  | E♭ | E  | F  | G♭ | G  | A♭ |
| -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
| 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 |

Length
: In musical notation note lengths are usually provided in relation to the tempo and time signature of the piece: e.g. `quarter note`. We'll use seconds time in seconds. This is a little less flexible and maybe a little less _musical_ but very straightforward.

Notes
: Notes have two values: Pitch and Length. We could use an object `{pitch: 60, length: .25}` or an array `[60, .25]` to represent our note. The object is clearer but the array is more compact. I think a melody will look better with the arrays, let's use them.

Rests
: Rests are gaps between notes. They have a length, but no pitch. We could have a different format for rests, or we could use notes but set the pitch to a special value.  For simplicity, lets use notes with a special pitch value. We might use `0` or `undefined` to represent a rest, but those are quite semantically correct. Since we can mix types in JavaScript we could use a string too: `rest`.

Here is how our melody will look.

```javascript
const melody = [
    [64, 3/8],
    [62, 1/8],
    [60, 1/4],
    [62, 1/4],

    [64, 1/4],
    [64, 1/4],
    [64, 1/2],

    ['rest', 1],
];
```

###  Playing our Melody Format

SimpleSynth's `noteOn` and `noteOff` methods accept a parameter `time` to schedule events in the future. To play back our melody, we can loop through each note and schedule it on the SimpleSynth. SimpleSynth has the `playNote` and `playNotes` methods to do this.


```javascript
playNote(note, length, time = 0) {
    this.noteOn(note, time);
    this.noteOff(note, time + length - this.spacing);
}

playNotes(notes) {
    let time = 0;
    for (let i = 0; i < notes.length; i++) {
        const freq = notes[i][0];
        const length = notes[i][1];
        this.playNote(freq, length, time);
        time += length;
    }
}
```

::: js-lab
/music/sketches/simple_song.js
/::






## Generating a Melody

Now we have a format to represent a melody and a function to play it. Our final challenge is the code to generate one. We can't jump into coding yet, we need a much more detailed plan that we can translate into code. You really can't write computer code without first deciding exactly what you want the computer to do. You can try, but you'll end up making decisions anyway. You'll just make them as you go along, without a plan. 

One approach we might consider is picking random notes and random lengths and placing them in a sequence. But that would be like generating images by randomly assigning colors to pixels: the result would be noise—in many senses. We don't want noise, we want to make _music_.

::: .discussion
## What Kind of Melody do We Want?
A melody is an _organized_ series of notes, but how do we want _our_ melody organized? What qualities do we want to ensure? What qualities do we want to leave to chance?
/::


### Our Target Characteristics

- We are going to use the C-Major key.
- We are going to use 4/4 time.
- We will use only half-notes and quarter-notes.
- Our melody will have no rests!
- Our melody will have 4 measures.
- These measures will have an `A` `B` `A` `C` structure.
- Our melody will start at a random place in the scale, and move up and down the scale in random steps.
- Our melody should contain mostly conjunct (single) pitch steps: e.g. `C to D`, `F to E`
- Our melody should have occasional disjunct (bigger) jumps: e.g. `C to E`.
- Our melody will end on the tonic: `C`.


### Our Melody Generator
::: js-lab
/music/sketches/melody.js
/::

::: .discussion
## Compare the Code to Spec
Codebases often diverge from their initial specifications. Compare the target characteristics and melody generator above. How are they different?
/::


::: .assignment

## Keep Sketching!

### Base
Continuing explore generating and visualizing sound and music.{bigger}

### Challenge: Write and Record a Song
It doesn't have to be good. It doesn't have to use code.


/::



## Reference Links


[Melody in Songwriting](https://www.amazon.com/Melody-Songwriting-Techniques-Writing-Berklee/dp/063400638X)

[MDN: Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

[HTML5Rocks: Getting Started with Web Audio](https://www.html5rocks.com/en/tutorials/webaudio/intro/)

[I don't know who the Web Audio API is designed for](http://blog.mecheye.net/2017/09/i-dont-know-who-the-web-audio-api-is-designed-for/)

[C-sharp vs D-flat](http://blog.eumlab.com/c-and-db-whats-the-difference/)

[Kahn Academy: Music Basics](https://www.khanacademy.org/humanities/music/music-basics2)

[Teoria.js Music Theory Library]
(https://github.com/saebekassebil/teoria)

[HTML5Rocks: Audio Scheduling](https://www.html5rocks.com/en/tutorials/audio/scheduling/)

[UNSW: Midi Notes and Math](https://newt.phys.unsw.edu.au/jw/notes.html)

[Ocenaudio: Free OS X Sound Editor](http://www.ocenaudio.com/)