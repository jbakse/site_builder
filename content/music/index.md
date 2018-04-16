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

In this chapter we look at tactics and strategies for generating a short piece of music. Our result will be a simple version of [this demo](http://psam3060-d-s16.github.io/class_notes/week_9/sketch_music/). 

We'll look at how to plan this project, the pieces that need to be built, and how to represent data. We will build this music generator using the p5.sound library.


### Examples

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

::: .callout
![Voice Piece For Soprano](https://s-media-cache-ak0.pinimg.com/736x/76/fd/4a/76fd4ae694014ee601970e9cde9b45f9.jpg){scale}
/::


## Synthesizing a Note

There are many ways to synthesize a musical note. Some of the most common are additive, FM, and sampled synthesis. Synthesis is a good place to start: before we generate a melody let's make sure we can play it. 

[Wikipedia: Synthesizer](https://en.wikipedia.org/wiki/Synthesizer)


::: .discussion
## Designing the Synth
Most synthesizer offer a great deal of customization through parameters. What qualities do we want control of?
/::

### Qualities our Synth

P5.sound has a built monophonic and polyphonic synthesizers. Here, we build our own from more basic units. The p5 synths are a little under-documented and building our own is a good way to understand what is going on.

The p5.sound Oscillator class generates a periodic signal with customizable frequency, amplitude, and waveform. We will base our synthesizer on this oscillator. 

The p5.sound library also has an Env class. This class can control the amplitude of an oscillator using an [ADSR](https://en.wikipedia.org/wiki/Synthesizer#Attack_Decay_Sustain_Release_(ADSR)_envelope) envelope. An ADSR envelope controls the attack, decay, sustain and release of a sound and can be used to simulate some of the characteristics of acoustic instruments. We'll use an Env object to control the our synthesizer.

[whiteboard diagram ADSR Envelope]
[whiteboard diagram [Evn] -> (amp)[Oscillator]]

By combining a p5 Oscillator and Env we'll have a synth with these parameters:

- Frequency
- Basic Waveform Tone
- Attack Time
- Decay Time
- Sustain Level
- Release Time

Our synth will be very basic. We won't have control of velocity or amplitude at the note level. And we won't be able to play more than one note at a time. Playing a note will cut off any other note currently playing and chords won't work at all. This type of synth was pretty common on cheap 80's musical keyboards.

::: js-lab
/music/sketches/hello_env.js
/::

### SimpleSynth

[SimpleSynth](./SimpleSynth.html) is a small class encapsulates this synth and gives it an easy to use interface. 

::: js-lab
/music/sketches/hello_simplesynth.js
/::

::: js-lab
/music/sketches/hello_midi.js
/::






## Playing a Melody

Now that we can play a musical note, we need to create a system that can play a series of notes: a melody.

::: .discussion
## What does a Melody Look Like?
A melody is a series of notes. What information is necessary to describe a melody? How would you represent that information in code?
/::

### Our Melody Format

The p5.sound library has a set of classes—Phrase, Part, and Score—for representing and playing musical sequences. That system assumes each "note" in the song is the same length, and doesn't specifically support precise timing, so we'll build our own representation of a song.

Since our synth can't play more than one note at a time our format can be a simple sequence, without support for chords. And because our synth isn't velocity sensitive we don't need to represent that either. We _do need_ to represent the pitch of each note and its length.

Pitch
: We could represent our pitch with the raw frequency in [hertz](https://en.wikipedia.org/wiki/Heinrich_Hertz): `261.63`. We could use [scientific pitch notation](https://en.wikipedia.org/wiki/Scientific_pitch_notation): `C4`. We could use the [MIDI](https://en.wikipedia.org/wiki/MIDI) note value: `60`.

  Hertz is a little fussy, and scientific pitch notation is a little harder to parse. We'll use MIDI note values and p5.sound's `midiToFreq()` will translate from midi values to frequencies for us.

| A  | B♭ | B  | C4 | D♭ | D  | E♭ | E  | F  | G♭ | G  | A♭ |
| -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
| 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 |

Length
: In musical notation note lengths are usually provided in relation to the tempo of the piece: `quarter note`. We'll use seconds: `.25`.

We could use an object `{pitch: 60, length: .25}` or an array `[60, .25]` to represent our note. The object is clearer and the array is more compact. I think a melody will look better with the array, lets use that.

Rests
: Rests are gaps between notes. They have a length, but no pitch. We could set the node pitch to `0` or `undefined` to represent a rest, but those are quite semantically correct. Since we can mix types in JavaScript we could use a string too: `rest`;

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

Now we have a format to represent a melody and a function to play it. Now we need to generate our melody.

We could generate a melody by picking random notes and random lengths, but that would be like generating images by randomly assigning colors to pixels: the result will be noise, in many senses.

::: .discussion
## What Kind of Melody do We Want?
A melody is an _organized_ series of notes, but how do we want _our_ melody organized? What qualities do we want?
/::


### Our Target Characteristics

We are going to use the C-Major key.
We are going to use 4/4 time.





## Reference Links

[MDN: Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

[HTML5Rocks: Getting Started with Web Audio](https://www.html5rocks.com/en/tutorials/webaudio/intro/)

[I don't know who the Web Audio API is designed for](http://blog.mecheye.net/2017/09/i-dont-know-who-the-web-audio-api-is-designed-for/)

[C-sharp vs D-flat](http://blog.eumlab.com/c-and-db-whats-the-difference/)

