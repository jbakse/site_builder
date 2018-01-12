// draws a rainbow maze

let p5_canvas;

function setup() {
    p5_canvas = createCanvas(windowWidth, windowHeight);
    $(p5_canvas.canvas).addClass("mess");
    $(p5_canvas.canvas).addClass("hide");
    $(p5_canvas.canvas).attr("style", "");
}


// noise sampling control
let size_scale = .01;
let color_scale = .003;


// brush state
let x = false;
let y = false;
let oldX = false;
let oldY = false;
let r = 0;

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
    let size = noise(mouseX * size_scale, mouseY * size_scale) * 200;
    r = lerp(r, size, .01);
    x = lerp(x, mouseX, .01);
    y = lerp(y, mouseY, .01);

    // get hue from noise
    c = noise(x * color_scale, y * color_scale);
    // exaggerate hue
    c = map(c, .25, .75, 0, 1);

    //draw brush 
    stroke(c, 1, 1);
    strokeWeight(r);
    line(oldX, oldY, x, y);

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