// require https://cdnjs.cloudflare.com/ajax/libs/tone/13.8.6/Tone.min.js
/* global Tone */

// First, create the synth.
const synth = new Tone.Synth().toMaster();
Tone.Transport.bpm.value = 200;

window.onmousedown = () => {
  // Play the melody!

  const melody = generate();
  play(melody);
};

const cmajor = ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3'];
const cminor = ['C3', 'D3', 'Eb3', 'F3', 'G3', 'Ab3', 'B3'];
const notes = cmajor;

let degree = 0;

function generate() {
  // choose a starting place
  degree = randomInt(0, 7);

  // generate some measures
  const a = generateMeasure();
  const b = generateMeasure();
  const c = generateMeasure();

  // last note should be the tonic
  c[c.length - 1][0] = notes[0];

  // arrange the measures and return
  return [].concat(a, b, a, c);
}

function generateMeasure() {
  const m = [];

  let timeLeft = Tone.Time('1m');

  while (timeLeft.toSeconds() > 0) {
    // choose note
    const change = sample([-1, -1, -1, 1, 1, -2, 2, -3]);
    degree = constrain(degree + change, 0, 6);
    const note = notes[degree];

    // choose length
    let length = Tone.Time('4n');
    if (Math.random() < 0.5) {
      length = Tone.Time('2n');
    }
    if (length.toMilliseconds() > timeLeft.toMilliseconds()) {
      length = timeLeft;
    }

    // keep track of time
    timeLeft = Tone.Time(timeLeft - length);

    // add the note to the melody
    m.push([note, length]);
  }

  return m;
}

function play(melody) {
  let t = Tone.now();
  for (const note of melody) {
    console.log(note[0], note[1].toNotation());
    if (note[0] !== 'rest') {
      // synth.triggerAttackRelease(note[0], note[1]), t);
      synth.triggerAttackRelease(note[0], Tone.Time(note[1]) - 0.1, t);
    }
    t += Tone.Time(note[1]);
  }
}

console.log('click for music!');

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function sample(data) {
  const index = Math.floor(Math.random(data.length));
  return data[index];
}

function constrain(v, min, max) {
  return Math.min(max, Math.max(min, v));
}
