// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

let freq_slider;
let amplitude_slider;
let octive_slider;
let animate_checkbox;
let t = 0;

function setup() {
    createCanvas(300, 200);

    fill(240);
    noStroke();
    ellipseMode(CENTER);

    createP('Amplitude');
    amplitude_slider = createSlider(0, 100, 100);
    createP('Frequency');
    freq_slider = createSlider(0, 100, 50);
    createP('Octaves/Detail');
    octive_slider = createSlider(1, 8, 1);


    animate_checkbox = createCheckbox('Animate Line', false);

}



function draw() {
    background(50);


    let frequency = freq_slider.value() / 100;
    let amplitude = amplitude_slider.value();
    noiseDetail(octive_slider.value(), .5);

    // draw a pulsing circle at the top
    let w = 50 + noise(frameCount * frequency) * amplitude;
    ellipse(width * .5, height * .25, w, w);

    // draw a line of ellipses with letying size
    for (let x = 0; x < width; x += 20) {

        if (animate_checkbox.checked()) {
            t += .01;
        }

        let w = 3 + noise(x * frequency * .1, t) * .2 * amplitude;
        ellipse(x, height * .75, w, w);
    }
}