let p5_canvas;
let controls;
let hidden = true;


let min_speed_slider;
let max_speed_slider;
let min_turn_slider;
let max_turn_slider;

let min_speed;
let max_speed;
let min_turn;
let max_turn;

let rockets = [];





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
    colorMode(HSB, 1000);
    // blendMode(SCREEN);

    for (var i = 0; i < 40; i++) {
        rockets.push(new Rocket());
    }


    controls = createDiv("");
    controls.addClass("mess-controls");
    controls.addClass("hide");

    let min_speed_label = createP('Min Speed');
    min_speed_slider = createSlider(0, 50, 8);

    let max_speed_label = createP('Max Speed');
    max_speed_slider = createSlider(0, 50, 12);

    let min_turn_label = createP('Min Turn');
    min_turn_slider = createSlider(0, 100, 10);

    let max_turn_label = createP('Max Turn');
    max_turn_slider = createSlider(0, 100, 20);


    controls.child(min_speed_label);
    controls.child(min_speed_slider);
    controls.child(max_speed_label);
    controls.child(max_speed_slider);
    controls.child(min_turn_label);
    controls.child(min_turn_slider);
    controls.child(max_turn_label);
    controls.child(max_turn_slider);


}


function draw() {
    clear();

    min_speed = min_speed_slider.value();
    max_speed = max_speed_slider.value();
    min_turn = min_turn_slider.value() / 100;
    max_turn = max_turn_slider.value() / 100;


    var index;
    index = rockets.length - 1;
    while (index >= 0) {
        rockets[index].step();
        index--;
    }

    index = rockets.length - 1;
    while (index >= 0) {
        rockets[index].draw();
        index--;
    }


}


class Rocket {
    constructor() {
        this.x = windowWidth * .5;
        this.y = windowHeight * .5;
        this.a = random(0, 2 * PI);;
        this.turn_speed = random();
        this.speed = random();
        this.hue = random(1000);
    }

    step() {
        this.x += sin(this.a) * map(this.speed, 0, 1, min_speed, max_speed);
        this.y -= cos(this.a) * map(this.speed, 0, 1, min_speed, max_speed);

        // handle steering

        // find angle to mouse
        let angleTo = -atan2(this.x - mouseX, (this.y - mouseY));
        angleTo = normalizeAngle(angleTo);


        // find and normalize angle between bearing and target
        let deltaAngle = this.a - angleTo;
        deltaAngle = normalizeAngle(deltaAngle);



        // steer toward target
        if (deltaAngle > this.turn_speed) {
            this.a -= map(this.turn_speed, 0, 1, min_turn, max_turn);
        }

        if (deltaAngle < -this.turn_speed) {
            this.a += map(this.turn_speed, 0, 1, min_turn, max_turn);
        }

        // console.log(this.turn_speed, min_turn, max_turn, map(this.turn_speed, 0, 1, min_turn, max_turn));
        this.a = normalizeAngle(this.a);




    }



    draw() {
        push();
        translate(this.x, this.y);
        rotate(this.a);
        fill(this.hue, 1000, 1000);
        noStroke();
        triangle(-15, 0, 0, -30, 15, 0);
        pop();
    }
}


function normalizeAngle(a) {
    while (a < -PI) {
        a += 2 * PI;
    }
    while (a > PI) {
        a -= 2 * PI;
    }
    return a;
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
    controls.removeClass("hide");

    hidden = false;
    loop();

    clearTimeout(hide_timeout);
    clearTimeout(clear_timeout);
    hide_timeout = setTimeout(() => {
        $(p5_canvas.canvas).addClass("hide");
        controls.addClass("hide");
    }, ms);
    clear_timeout = setTimeout(() => {
        clear();
        hidden = true;
        noLoop();
    }, ms + 1100);
}