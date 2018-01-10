// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

var pos_x_slider, pos_y_slider, size_slider, color_picker;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight * .5);

    fill(100);
    noStroke();
    rectMode(CENTER);

    createP('Horizontal Position');
    pos_x_slider = createSlider(0, width, width * .5);

    createP('Vertical Position');
    pos_y_slider = createSlider(0, height, height * .5);

    createP('Size');
    size_slider = createSlider(10, 200, 100);

    createP('Color');
    color_picker = createInput("#648EDE", "color");
}


function draw() {
    background(250);
    fill(color_picker.value());
    var pos_x = pos_x_slider.value();
    var pos_y = pos_y_slider.value();
    var size = size_slider.value();
    rect(pos_x, pos_y, size, size);
}