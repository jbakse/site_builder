// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js



function preload() {
  mySound = loadSound('/sound/sketches/hack-comp.wav');
  mySound2 = loadSound('/sound/sketches/hack-comp.wav');
}

function setup() {
  button = createButton('start');
  button.mousePressed(start);
}

function start() {
  mySound.loop(0, 1, 1, 0, 4);
  mySound2.loop(0, 1, 1, 0, 3.9);

}