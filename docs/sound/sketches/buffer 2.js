// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js

let mySound;

// function preload() {
//   mySound = loadSound('/sound/sketches/hack-comp.wav');
// }

function setup() {
  createCanvas(400, 200);
  background(50);

  const buffer = new Float32Array(44100);

  // click!
  //   for (let i = 0; i < 44100; i++) {
  //     buffer[i] = 0;
  //   }
  //   buffer[22050] = 1;

  // random noise!
  //   for (let i = 0; i < 44100; i++) {
  //     buffer[i] = random(0, 1);
  //   }

  // saw wave
  //   const wavelength = 44100 / 440;
  //   for (let i = 0; i < 44100; i++) {
  //     buffer[i] = i % wavelength;
  //   }

  // sin wave
  const wavelength = 44100 / 440;
  for (let i = 0; i < 44100; i++) {
    buffer[i] = sin((i / wavelength) * 2 * PI);
  }

  // retro future
  //   let wavelength = 44100 / random(200, 600);
  //   for (let i = 0; i < 44100; i++) {
  //     if (i % 5000 === 0) {
  //       wavelength = 44100 / random(200, 600);
  //     }
  //     buffer[i] = sin((i / wavelength) * 2 * PI);
  //   }

  mySound = new p5.SoundFile();
  mySound.setBuffer([buffer]);

  const startButton = createButton('play');
  startButton.mousePressed(start);
}

function start() {
  mySound.play(0, 1, 1);
}
