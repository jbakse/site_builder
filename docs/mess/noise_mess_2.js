// draws a rainbow maze

let p5_canvas;

function setup() {
    p5_canvas = createCanvas(windowWidth, windowHeight);
    $(p5_canvas.canvas).addClass("mess");
    $(p5_canvas.canvas).addClass("hide");
    $(p5_canvas.canvas).attr("style", "");
}


// noise sampling control
let offset_sample_scale = .01;
let offset_scale = 100;


// brush state
let x = false;
let y = false;
let oldX = false;
let oldY = false;
let r = 0;
let hue = 0;

function draw() {
    // don't start if p5 hasn't got a mouse position yet
    if (mouseX == 0 && mouseY == 0) {
        return;
    }

    // init position to mouse
    if (x === false) {
        oldX = x = mouseX;
        oldY = y = mouseY;
    }

    // set up drawing
    noFill();
    colorMode(HSB, 1);
    ellipseMode(CENTER);

    // draw brush
    for (i = 0; i < 10; i++) {
        brush();
    }
}





function brush() {

    // move smoothly towards cursor and size    
    x = lerp(x, mouseX, .01);
    y = lerp(y, mouseY, .01);

    let offsetX = noise(x * offset_sample_scale, y * offset_sample_scale, 0);
    let offsetY = noise(x * offset_sample_scale, y * offset_sample_scale, 100);
    offsetX = map(offsetX, 0, 1, -offset_scale, offset_scale);
    offsetY = map(offsetY, 0, 1, -offset_scale, offset_scale);

    let offsetX2 = noise(x * offset_sample_scale, y * offset_sample_scale, 200);
    let offsetY2 = noise(x * offset_sample_scale, y * offset_sample_scale, 300);
    offsetX2 = map(offsetX2, 0, 1, -offset_scale, offset_scale);
    offsetY2 = map(offsetY2, 0, 1, -offset_scale, offset_scale);

    hue += .0001;
    if (hue > 1) {
        hue = 0;
    }
    //draw brush 
    stroke(hue, 1, 1);
    strokeWeight(10);
    line(oldX + offsetX, oldY + offsetY, x + offsetX, y + offsetY);
    line(oldX + offsetX2, oldY + offsetY2, x + offsetX2, y + offsetY2);

    // keep track of state
    oldX = x;
    oldY = y;

}



// house keeping

// fade the canvas out and reset when mouse is still

let hide_timeout = null;
let clear_timeout = null;

function mouseMoved() {
    $(p5_canvas.canvas).removeClass("hide");
    clearTimeout(hide_timeout);
    clearTimeout(clear_timeout);
    hide_timeout = setTimeout(() => {
        $(p5_canvas.canvas).addClass("hide");
    }, 1000);

    clear_timeout = setTimeout(() => {
        clear();
    }, 2100);
}


// rebuild canvas on resize
let resize_timeout = null;
$(window).on("resize", (e) => {
    console.log("Resize");
    clearTimeout(resize_timeout);
    resize_timeout = setTimeout(() => {
        console.log(windowWidth);
        resizeCanvas && resizeCanvas(windowWidth, windowHeight);
        $(p5_canvas.canvas).attr("style", "");
    }, 100);

});