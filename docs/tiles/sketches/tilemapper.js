// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

let grid_cols = 12;
let grid_rows = 8;
let row_height = 32;
let col_width = 32;
let grid;

let roadSet;

let draw_road = true;
let draw_overlay = false;

let overlay_checkbox, road_checkbox;

function preload() {
    roadSet = loadImage("/tiles/sketches/road.png");
}


function setup() {
    createCanvas(grid_cols * col_width, grid_rows * row_height);
    road_checkbox = createCheckbox("Draw Road", true);
    overlay_checkbox = createCheckbox("Draw Grid Overlay", false);

    grid = create2DArray(grid_cols, grid_rows, false);

    grid[6][4] = true;
    grid[7][4] = true;
    grid[8][4] = true;
    grid[7][3] = true;
    grid[7][5] = true;

    noSmooth();
}


function mouseClicked() {
    let grid_x = floor(mouseX / col_width);
    let grid_y = floor(mouseY / col_width);
    grid[grid_x][grid_y] = !grid[grid_x][grid_y];
    redraw();
}


function draw() {
    background("#333333");
    draw_overlay = overlay_checkbox.checked();
    draw_road = road_checkbox.checked();
    drawGrid();
    noLoop();
}



function drawGrid() {

    for (let col = 0; col < grid_cols; col++) {
        for (let row = 0; row < grid_rows; row++) {
            let cellIsSet = sampleGrid(col, row);
            if (cellIsSet) {
                let x = col * col_width;
                let y = row * row_height;

                if (draw_road) {
                    let score = getScore(col, row);
                    drawRoadTile(score, col, row);
                }
                if (draw_overlay) {
                    blendMode(MULTIPLY);
                    fill(255, 0, 0);
                    noStroke();
                    rect(x, y, col_width - 1, row_height - 1);
                    blendMode(NORMAL);
                }
            }
        }
    }
}

function drawRoadTile(score, col, row) {
    let x = col * col_width;
    let y = row * row_height;

    // the tiles are packed into a single 4 x 4 atlas
    // we need calculate what part of the image to draw
    let sx = score % 4 * 16;
    let sy = floor(score / 4) * 16;


    image(roadSet, x, y, col_width, row_height, sx, sy, 16, 16);
}

function getScore(col, row) {
    let score = 0;
    if (sampleGrid(col, row - 1)) score += 1;
    if (sampleGrid(col + 1, row)) score += 2;
    if (sampleGrid(col, row + 1)) score += 4;
    if (sampleGrid(col - 1, row)) score += 8;
    return score;
}

function sampleGrid(col, row) {
    if (col < 0 || col >= grid_cols) return false;
    if (row < 0 || row >= grid_rows) return false;
    return grid[col][row]
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