let p5_canvas;

let flakes = [];

let c = 0;

function preload() {

}

function setup() {
    p5_canvas = createCanvas(windowWidth, windowHeight);
    $(p5_canvas.canvas).addClass("mess");
    $(p5_canvas.canvas).addClass("hide");
    $(p5_canvas.canvas).attr("style", "");

    colorMode(HSB, 1000);
}

function draw() {
    clear();


    // spawn
    if (frameCount % 10 === 0) {
        flakes.push(new Flake(mouseX, mouseY));
    }

    // draw flakes
    var index = flakes.length - 1;
    while (index >= 0) {
        flakes[index].draw();
        index--;
    }
}



function removeItem(array, element) {
    const index = array.indexOf(element);
    if (index == -1) return;
    array.splice(index, 1);
}



class Flake {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.deltaX = random(-5, 5);
        this.deltaY = random(-1, -5);
        this.air = random(0, 2 * PI);
        this.deltaAir = random(.05, .1);
        this.c = c;
        this.scale = 0;
        c = (c + 50) % 1000;


    }
    draw() {
        // drag
        this.deltaX *= .9;
        this.deltaY *= .9;

        // gravity
        this.deltaY += .8;

        // air
        this.air += this.deltaAir;
        let air = sin(this.air);
        air = pow(air, 1) * 1;
        this.deltaX += air;


        // integrate
        this.x += this.deltaX;
        this.y += this.deltaY;

        // kill
        if (this.y > height * 1.1) {
            removeItem(flakes, this);
        }

        this.scale = lerp(this.scale, 200, .2);

        push();
        noStroke();
        fill(this.c, 1000, 1000);

        translate(this.x, this.y);
        shearX(.2);
        rotate(this.deltaX * .04);

        rect(0, 0, this.scale, this.scale);
        pop();
    }
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

    }, 2100);
}