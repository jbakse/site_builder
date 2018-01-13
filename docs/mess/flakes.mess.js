let p5_canvas;
let tile1, tile2;
let grid_size = 32;
let grid;

let x;
let y;
let old_x;
let old_y;


function preload() {
    tile1 = loadImage("/mess/truchent_1.png");
    tile2 = loadImage("/mess/truchent_2.png");
}

function setup() {
    p5_canvas = createCanvas(windowWidth, windowHeight);
    $(p5_canvas.canvas).addClass("mess");
    $(p5_canvas.canvas).addClass("hide");
    $(p5_canvas.canvas).attr("style", "");

    grid = create2DArray(width / grid_size + 1, height / grid_size + 1, false);
    console.log("g:");
}