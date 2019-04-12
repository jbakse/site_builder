---
title: P5 Synth
layout: layouts/compform_chapter.pug
debug: false

header_title: "p5.sound Synth"
next:
next_url:
previous:
previous_url:

hero_title: p5.sound Synth

description: Make some music using the p5 sound library.
software: p5.js
---

### Qualities of our Synth

P5.sound has built-in monophonic and polyphonic synthesizers. They are a little underdocumented, so we'll build our own using the p5.sound Oscillator and Env classes. Building our own is a good way to understand what is going on anyway.

The p5.sound Oscillator class generates a periodic signal with customizable frequency, amplitude, and waveform.

We can shape the amplitude of the Oscillator using the p5.sound Evn class. This class can control the amplitude of an oscillator using an [ADSR](<https://en.wikipedia.org/wiki/Synthesizer#Attack_Decay_Sustain_Release_(ADSR)_envelope>) envelope. An ADSR envelope controls the attack, decay, sustain and release of a sound and can be used to simulate these characteristics of acoustic instruments.

[whiteboard diagram ADSR Envelope]whiteboard diagram [Evn] -> (amp)[Oscillator]]

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
[SimpleSynth](./SimpleSynth.html) is a small, reusable class that [encapsulates](<https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)>) this system and gives it an easy to use programming interface.

[SimpleSynth Source](./SimpleSynth.html){boxed right}
[Try it with MIDI](http://compform.net/js_lab/js_lab.html?/music/sketches/hello_midi.js){boxed right}

::: js-lab
/music/sketches/hello_simplesynth.js
/::
