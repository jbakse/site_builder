let p5_canvas;

let face_parts;
let grid_width = 32;
let grid_height = 32;
let bases = 0;
let eyes = 1;
let noses = 2;
let mouths = 3;
let hairs = 4;
let accents = 5;
let beards = 6;

let skin_colors = [];
let hair_colors = [];


let trait_names = ["bases", "eyes", "noses", "mouths", "hairs", "accents", "beards", "skin_colors", "hair_colors"];
let traits = {};

let tiles;


let x = false;
let y = 0;
let r = 0;

function preload() {
    face_parts = loadImage("/mess/face_parts.png");


}

function setup() {



    p5_canvas = createCanvas(windowWidth, windowHeight);

    $(p5_canvas.canvas).addClass("mess");
    $(p5_canvas.canvas).addClass("hide");
    $(p5_canvas.canvas).attr("style", "");



    skin_colors.push(color(250, 220, 180));
    skin_colors.push(color(250, 180, 140));
    skin_colors.push(color(170, 120, 120));
    skin_colors.push(color(0, 120, 120));
    skin_colors.push(color(200, 60, 200));
    skin_colors.push(color(255, 255, 255));


    hair_colors.push(color(255, 0, 0)); // bright red
    hair_colors.push(color(0, 255, 0)); // bright green
    hair_colors.push(color(100, 200, 255)); // blue
    hair_colors.push(color(255, 150, 150)); // pink
    hair_colors.push(color(255, 100, 100)); // brown
    hair_colors.push(color(255, 100, 0)); // orange
    hair_colors.push(color(255, 255, 0)); // blonde
    hair_colors.push(color(255, 0, 0)); // red
    hair_colors.push(color(100, 100, 100)); // dark grey
    hair_colors.push(color(255, 255, 255)); // light grey



    trait_names.forEach((name) => {
        traits[name] = {
            counter: 0,
            rate: 0,
            value: 0,
            options: 4
        };
    });

    traits.skin_colors = {
        counter: 0,
        rate: 0,
        value: 0,
        options: skin_colors.length
    }

    traits.hair_colors = {
        counter: 0,
        rate: 0,
        value: 0,
        options: hair_colors.length
    }

    resetSpinners();

    noSmooth();
    noStroke();
    fill(255, 0, 0);
    imageMode(CENTER);
    frameRate(60);

    // sigh, the atlas is really slow when used with tint
    // p5 might be tinting the whole atlas, not just the part being drawn
    // this code breaks the atlas up into tiles 
    tiles = [];

    for (x = 0; x < 4; x++) {
        tiles[x] = []
        for (y = 0; y < 8; y++) {
            const g = createGraphics(32, 32);
            g.noSmooth();
            g.image(face_parts, 0, 0, 32, 32, x * 32, y * 32, 32, 32);
            tiles[x][y] = g.get();
        }
    }

    x = mouseX = width * .5;
    y = mouseY = width * .5;


}


function draw() {
    if (mouseX == 0 && mouseY == 0) {
        return;
    }
    // spin traits
    updateSpinners();


    x = lerp(x, mouseX, .1);
    y = lerp(y, mouseY, .1);

    r = (x - mouseX) * .004;



    clear();
    drawFace(x + 50, y - 50, r, 300, 300);

}

function mousePressed() {
    resetSpinners();
}

function resetSpinners() {
    for (var key in traits) {
        let trait = traits[key];
        trait.rate = random(.2, 1.1);
    }
    skin_color = skin_colors[floor(random(skin_colors.length))];
    hair_color = hair_colors[floor(random(hair_colors.length))];
}

function updateSpinners() {
    for (var key in traits) {
        let trait = traits[key];
        trait.rate = max(0, trait.rate * .98);
        if (trait.rate < .1) {
            trait.rate = 0;
        }
        trait.counter += trait.rate;


        if (trait.counter > 1) {
            trait.counter = 0;
            trait.value = randomInt(trait.options);
        }
    };
}

function drawFace(x, y, r, w, h) {

    translate(x, y);
    rotate(r);

    tint(skin_colors[traits.skin_colors.value]);
    drawTile(face_parts, 0, 0, w, h, traits.bases.value, bases);
    drawTile(face_parts, 0, 0, w, h, traits.noses.value, noses);
    drawTile(face_parts, 0, 0, w, h, traits.eyes.value, eyes);
    drawTile(face_parts, 0, 0, w, h, traits.mouths.value, mouths);

    tint(hair_colors[traits.hair_colors.value]);
    drawTile(face_parts, 0, 0, w, h, traits.hairs.value, hairs);
    drawTile(face_parts, 0, 0, w, h, traits.beards.value, beards);


    drawTile(face_parts, 0, 0, w, h, traits.accents.value, accents);
    noTint();
}

function randomInt(max) {
    return floor(random(0, max));
}

function drawTile(src, x, y, width, height, tile_x, tile_y) {

    let s_x = tile_x * grid_width;
    let s_y = tile_y * grid_height;

    // image(src, x, y, width, height, s_x, s_y, grid_width, grid_height);

    image(tiles[tile_x][tile_y], x, y, width, height);
}



// house keeping

// fade the canvas out and reset when mouse is still

let hide_timeout = null;
let clear_timeout = null;

function mouseMoved() {
    updateTimers();
}

function mouseClicked() {
    updateTimers();
}

function updateTimers() {
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