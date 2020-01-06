// require https://cdnjs.cloudflare.com/ajax/libs/tone/13.8.6/Tone.min.js
/* global Tone */

// First, create the synth.
const synth = new Tone.Synth().toMaster();
Tone.Transport.bpm.value = 200;

const melody = [
  ['E4', '4n.'],
  ['D4', '8n'],
  ['C4', '4n'],
  ['D4', '4n'],

  ['E4', '4n'],
  ['E4', '4n'],
  ['E4', '4n'],

  ['rest', '1m'],
];

window.onmousedown = (e) => {
  // Play the melody!

  let t = Tone.now();

  for (const note of melody) {
    console.log(note);
    if (note[0] !== 'rest') {
      // synth.triggerAttackRelease(note[0], note[1]), t);
      synth.triggerAttackRelease(note[0], Tone.Time(note[1]) - 0.1, t);
    }
    t += Tone.Time(note[1]);
  }
};

console.log('click for music!');
