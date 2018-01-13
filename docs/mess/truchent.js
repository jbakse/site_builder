function setup() {
    p5_canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
    fill(255, 0, 0);
    noStroke();
    rect(0, 0, 10, 10);

}


let hide_timeout = null;
let clear_timeout = null;

function mouseMoved() {
    updateTimers();
}



function updateTimers() {
    if (!p5_canvas) {
        return;
    }
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