// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js

let hat;
let kick;
let snare;
let clap;

let playing = false;

function preload() {
  hat = loadSound('/sound/sketches/hat.wav');
  kick = loadSound('/sound/sketches/kick.wav');
  snare = loadSound('/sound/sketches/snare.wav');
  clap = loadSound('/sound/sketches/clap.wav');
}

function setup() {
  createCanvas(400, 200);
  background(50);
  const startButton = createButton('play');
  startButton.mousePressed(start);

  const stopButton = createButton('stop');
  stopButton.mousePressed(stop);
}

function start() {
  playing = true;
}

function stop() {
  playing = false;
}

function draw() {
  if (playing) {
    if (frameCount % 15 === 0) {
      hat.play();
    }
    if (frameCount % 60 === 0) {
      kick.play();
    }
  }
}
