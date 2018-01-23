let p5_canvas;
let hidden = true;


function preload() {
    // face_parts = loadImage("/path/to/img.png");
}

function setup() {
    p5_canvas = createCanvas(windowWidth, windowHeight);

    $(p5_canvas.canvas).addClass("mess");
    $(p5_canvas.canvas).addClass("hide");
    $(p5_canvas.canvas).attr("style", "");

    frameRate(60);
    fill(255, 0, 0);
    noStroke();
}


function draw() {
    ellipse(mouseX, mouseY, 10, 10);
}




// house keeping
// fade the canvas out and reset when mouse is still

let hide_timeout = null;
let clear_timeout = null;

function mouseMoved() {
    updateTimers(1000);
}

function mousePressed() {
    updateTimers(4000);
}

function updateTimers(ms) {
    if (!p5_canvas) {
        return;
    }

    $(p5_canvas.canvas).removeClass("hide");
    hidden = false;
    loop();

    clearTimeout(hide_timeout);
    clearTimeout(clear_timeout);
    hide_timeout = setTimeout(() => {
        $(p5_canvas.canvas).addClass("hide");
    }, ms);
    clear_timeout = setTimeout(() => {
        clear();
        hidden = true;
        noLoop();
    }, ms + 1100);
}