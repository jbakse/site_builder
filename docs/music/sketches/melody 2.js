// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.min.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.dom.min.js
// require /music/SimpleSynth.js

const cmajor = [60, 62, 64, 65, 67, 69, 71];
const cminor = [60, 62, 64, 65, 67, 69, 70];

const notes = cmajor;
let degree;

let synth;

function setup() {
  createCanvas(400, 200);

  synth = new SimpleSynth('triangle');

  const majorButton = createButton('start');
  majorButton.mousePressed(start);
}

function draw() {
  background(50);
}

function start() {
  const melody = generateMelody();
  synth.playNotes(melody);
}

function generateMelody() {
  // choose a starting place
  degree = floor(random(7));

  // generate some measures
  const a = generateMeasure();
  const b = generateMeasure();
  const c = generateMeasure();

  // last note should be the tonic
  c[c.length - 1][0] = notes[0];

  // build melody in ABAC structure
  const melody = [].concat(a, b, a, c);

  return melody;
}

function generateMeasure() {
  const m = [];

  // we will build 1 second of melody
  timeLeft = 1;

  while (timeLeft > 0) {
    // choose note
    const change = sample([-1, -1, -1, 1, 1, -2, 2, -3]);
    degree = constrain(degree + change, 0, 6);
    const note = notes[degree];

    // choose length
    let length = 0.25;
    if (random() > 0.5) {
      length = 0.5;
    }
    length = constrain(length, 0, timeLeft);

    // add note to melody
    m.push([note, length]);

    timeLeft -= length;
  }

  return m;
}

function sample(data) {
  const index = floor(random(data.length));
  return data[index];
}
