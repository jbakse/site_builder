// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

// this example is used to demonstrate plain javascript + p5 + p5.dom 
// running in JS Lab

for (i = 0; i < 4; i++) {
    console.log("Hello, World!");
}

let slider;

function setup() {
    createCanvas(400, 400);

    slider = createSlider(0, 255, 100);
    slider.position(10, 10);
    slider.style('width', '80px');

}

function draw() {
    background(50);
    fill(255, 0, 0);

    let val = slider.value();
    ellipse(200, 200, val, val);
}