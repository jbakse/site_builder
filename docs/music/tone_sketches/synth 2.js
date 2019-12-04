// require https://cdnjs.cloudflare.com/ajax/libs/tone/13.8.6/Tone.min.js
/* global Tone */

// First, create the synth.
const synth = new Tone.Synth({
  oscillator: {
    type: 'fatsquare', // sine, square, triangle, sawtooth, fat*
  },
  envelope: {
    attack: 0.1,
    decay: 0.1,
    sustain: 0.5,
    release: 1,
  },
});

// Connect to the speakers.
synth.toMaster();

window.onmousedown = (e) => {
  // Play a sound when the mouse is pressed
  const freq = map(e.clientX, 0, window.innerWidth, 110, 1760);
  console.log(`click -> ${Math.floor(freq)}hz`);
  synth.triggerAttackRelease(freq, '8n');
};

function map(value, min1, max1, min2, max2) {
  const n = (value - min1) / (max1 - min1);
  return n * (max2 - min2) + min2;
}

console.log('click for music!');
