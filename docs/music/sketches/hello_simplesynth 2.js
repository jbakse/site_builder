// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.min.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.dom.min.js
// require /music/SimpleSynth.js


let synth;

function setup() {
    createCanvas(400, 200);
    synth = new SimpleSynth('triangle');
    // synth.envelope.setADSR(.01, .1, .1, 0); // quick decay
}

function mousePressed() {
    const note = floor(map(mouseX, 0, 400, 20, 80));
    synth.noteOn(note);
}

function mouseReleased() {
    synth.noteOff();
}

function draw() {
    background(50);
}