// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js

let mySound;
let bright = 0;
function preload() {
  mySound = loadSound("/sound/sketches/hack-comp.wav");
}

function setup() {
  createCanvas(400, 200);

  const startButton = createButton("start");
  startButton.mousePressed(start);

  const stopButton = createButton("stop");
  stopButton.mousePressed(stop);

  mySound.addCue(1.7, cueBig);
}

function start() {
  mySound.loop(0, 1, 1, 0, 4);
}

function stop() {
  mySound.pause();
}

function draw() {
  background(bright);
  bright -= 3;
}

function cueBig() {
  bright = 255;
}
