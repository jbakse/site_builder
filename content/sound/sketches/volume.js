// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js


let analyzer;

function preload() {
    mySound = loadSound('/sound/sketches/hack-comp.wav');

}

function setup() {
    createCanvas(500, 200);
    button = createButton('start');
    button.mousePressed(start);

    analyzer = new p5.Amplitude();
    analyzer.setInput(mySound);
}

function start() {
    mySound.loop(0, 1, 1, 0, 4);
}

function draw() {
    background(50);
    fill(255);
    noStroke();


    const volume = analyzer.getLevel();
    const x = volume * 500;
    ellipse(x, 100, 50, 50);
}