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
    pixelDensity(1);
    p5_canvas = createCanvas(windowWidth, windowHeight);
    $(p5_canvas.canvas).addClass("mess");
    $(p5_canvas.canvas).addClass("hide");
    $(p5_canvas.canvas).attr("style", "");

    grid = create2DArray(width / grid_size + 1, height / grid_size + 1, false);
}




let c = 0;

function draw() {
    fill(255, 0, 0);
    noStroke();
    clear();

    // cycle color
    c = ++c % 1000;

    // build tinted version of the tiles
    const tinted1 = createGraphics(64, 64);
    tinted1.colorMode(HSB, 1000);
    tinted1.tint(c, 1000, 1000);
    tinted1.image(tile1, 0, 0, 64, 64);

    const tinted2 = createGraphics(64, 64);
    tinted2.colorMode(HSB, 1000);
    tinted2.tint(c, 1000, 1000);
    tinted2.image(tile2, 0, 0, 64, 64);


    // find the current mouse grid position
    let x = floor(mouseX / grid_size);
    let y = floor(mouseY / grid_size);

    // when it changes lay some tiles down
    if (x != old_x || y != old_y) {
        setTile(x, y);
        setTile(x + 1, y);
        setTile(x - 1, y);
        setTile(x, y + 1);
        setTile(x, y - 1);

    }

    // keep track of mouse state
    old_x = x;
    old_y = y;

    // draw the grid
    for (y = 0; y < height - grid_size; y += grid_size) {
        for (x = 0; x < width - grid_size; x += grid_size) {

            if (grid[floor(x / grid_size)][floor(y / grid_size)] == 1) {
                image(tinted1, x, y, grid_size * 2, grid_size * 2);
            }

            if (grid[floor(x / grid_size)][floor(y / grid_size)] == 2) {
                image(tinted2, x, y, grid_size * 2, grid_size * 2);
            }
        }
    }
}

function setTile(x, y) {
    if (x < 0 || x >= grid.length) return;
    if (y < 0 || y >= grid[0].length) return;
    if (grid[x][y] == 1) {
        grid[x][y] = 2;
    } else {
        grid[x][y] = 1;
    }

}


function create2DArray(cols, rows, value) {
    let a = [];
    for (let col = 0; col < cols; col++) {
        a[col] = [];
        for (let row = 0; row < rows; row++) {
            a[col][row] = value;
        }
    }
    return a;
}





function mouseMoved() {
    updateTimers();
}

let hide_timeout = null;
let clear_timeout = null;

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
        grid = create2DArray(width / grid_size + 1, height / grid_size + 1, false);
    }, 2100);
}