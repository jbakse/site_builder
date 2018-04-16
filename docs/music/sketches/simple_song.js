// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.min.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.dom.min.js
// require /music/SimpleSynth.js


let synth;

function setup() {
    createCanvas(400, 200);

    synth = new SimpleSynth('triangle');

    const startButton = createButton('start');
    startButton.mousePressed(start);
}

function draw() {
    background(50);
}


function start() {
    const melody = [
        [64, 3 / 8],
        [62, 1 / 8],
        [60, 1 / 4],
        [62, 1 / 4],

        [64, 1 / 4],
        [64, 1 / 4],
        [64, 1 / 2]
    ];
    synth.playNotes(melody);
}