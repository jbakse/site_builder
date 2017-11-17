console.log("make a mess");

console.log(p5);

let first = true;

function setup() {

    let p5_canvas = createCanvas(windowWidth, windowHeight);
    console.log(p5_canvas);
    $(p5_canvas.canvas).addClass("mess");
    $(p5_canvas.canvas).attr("style", "");

    // colorMode(HSB, 255);
    noLoop();

    my_setup();
}

function draw() {
    scroll_time = (performance.now() - scroll_time_start) / 1000;
    if (!first) {
        my_draw();
    }
    first = false;
}

let particles = [];
let my_blend = 0;

function my_setup() {
    for (i = 0; i < 100; i++) {
        particles.push({
            x: random(width),
            y: random(height)
        });
    }
}

function my_draw() {
    // console.log("my_draw");
    clear();

    noStroke();

    my_blend = lerp(my_blend, 255 - 255 * scroll_time * 2, .05);

    fill(255, 0, 0, my_blend);

    particles.forEach((p) => {
        p.x += random(-10, 10) * (scroll_y_n + .1);
        p.y += random(-10, 10) * (scroll_y_n + .1);

        ellipse(p.x, p.y, 30, 30);
    });


    // fill(255, 0, 0);
    // rect(scroll_time * width, 10, 10, 10);

}



function start_scroll() {
    console.log("start_scroll");
    loop();
}

function scroll() {
    scroll_time_start = performance.now();
    // console.log("scroll");
}

function stop_scroll() {
    console.log("stop_scroll");
    noLoop();
    first = true;
    clear();
}

let scroll_y = 0;
let scroll_y_n = 0;
let scroll_height = 0;
let scroll_timeout = null;
let scroll_time = 0;
let scroll_time_start = 0;

$(window).on("scroll", (e) => {
    if (!window.loop) return;

    scroll_y = $(window).scrollTop();
    scroll_height = $(window).height();
    scroll_y_n = scroll_y / scroll_height;

    if (!scroll_timeout) {
        start_scroll();
    }

    scroll();

    clearTimeout(scroll_timeout);

    scroll_timeout = setTimeout(() => {
        scroll_timeout = null;
        stop_scroll();
    }, 1000);
});