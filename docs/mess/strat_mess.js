let p5_canvas;
let controls;
let hidden = true;


let dots = [];





function preload() {
    // face_parts = loadImage("/path/to/img.png");
}

function setup() {
    pixelDensity(1);
    p5_canvas = createCanvas(windowWidth, windowHeight);

    $(p5_canvas.canvas).addClass("mess");
    $(p5_canvas.canvas).addClass("hide");
    $(p5_canvas.canvas).attr("style", "");

    frameRate(60);
    fill(255, 0, 0);
    noStroke();
    colorMode(HSB, 1000);
    // blendMode(SCREEN);



}


function draw() {
    clear();

    if (mouseX === 0 && mouseY === 0) return;



    dots.push(new Dot(mouseX, mouseY));

    var index;
    index = dots.length - 1;
    while (index >= 0) {
        dots[index].step();
        index--;
    }

    index = dots.length - 1;
    while (index >= 0) {
        dots[index].draw();
        index--;
    }


}


class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 15;
        this.seeking = true;
        // this.hue = random(1000);
        this.hue = map(this.x + this.y, 0, width + height, 1, 1000);

        this.age = 0;
    }

    step() {
        this.age += 1;

        // start shrinking oldest dot when we get to many
        // otherwise this starts to slow down since the collision detect is unoptomized
        if (dots.length > 100) {
            dots[0].r -= .01;
        }

        // remove dots that get shrunk to 1 
        if (this.r < 1) {
            removeItem(dots, this);
        }


        // remove dots that don't find a spot to land in time
        if (this.r < 3 && this.seeking) {
            removeItem(dots, this);
        }



        // seek
        if (!this.seeking) return;

        // assume we'll find a spot to land and will stop seeking
        // this assumption will be reversed if we don't
        this.seeking = false;

        // loop through all the other dots
        let index = dots.length - 1;
        while (--index >= 0) {
            let that = dots[index];

            // don't compare this dot to itself
            if (this === that) {
                continue;
            }

            // if dots are close to each other
            let d = dist(this.x, this.y, that.x, that.y);
            if (d < (this.r + that.r) + 5) {
                // move the seeking dot away from the existing dot
                let dX = (this.x - that.x) / d;
                let dY = (this.y - that.y) / d;
                this.x += dX;
                this.y += dY;
                this.r -= .1;
                this.seeking = true;
            }
        }





    }



    draw() {
        push();
        translate(this.x, this.y);
        rotate(this.a);



        fill(this.hue, 1000, 1000);



        noStroke();
        ellipse(0, 0, this.r * 2, this.r * 2);
        pop();
    }
}


function removeItem(array, element) {
    const index = array.indexOf(element);
    if (index == -1) return;
    array.splice(index, 1);
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
        dots = [];
        hidden = true;
        noLoop();
    }, ms + 1100);
}