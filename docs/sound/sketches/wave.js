// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js


let fft;

function preload() {
    mySound = loadSound('/sound/sketches/hack-comp.wav');

}

function setup() {
    createCanvas(500, 200);
    button = createButton('start');
    button.mousePressed(start);

    fft = new p5.FFT(0, 128);
    fft.setInput(mySound);
}

function start() {
    mySound.loop(0, 1, 1, 0, 4);
}

function draw() {
    background(50);
    fill(255);
    noStroke();

    const data = fft.waveform();

    for (let i = 0; i < 128; i++) {
        const x = map(i, 0, 128, 0, 500);
        const y = map(data[i], -1, 1, 190, 10);
        ellipse(x, y, 2, 2);
    }


}