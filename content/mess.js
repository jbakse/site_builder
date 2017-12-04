// console.log("make a mess");

let mess_settings = {
    time_after_scroll: 1000
};
let mess_info = {};
let mess_private = {};

function setup() {
    // collect useful info for sketch to use
    mess_info.mess_millis = 0;
    mess_info.scroll_start_millis = 0;
    mess_info.scroll_millis = 0;
    mess_info.document_height = $(document).height();
    mess_info.document_width = $(document).width();
    mess_info.scroll_y = $(window).scrollTop();
    mess_info.scroll_y_normalized = mess_info.scroll_y / (mess_info.document_height - $(window).height());

    // create the canvas
    mess_private.p5_canvas = createCanvas(windowWidth, windowHeight);
    $(mess_private.p5_canvas.canvas).addClass("mess");
    $(mess_private.p5_canvas.canvas).attr("style", "");

    mess_private.should_draw = false;
    mess_private.mess_start_time = performance.now();
    mess_private.scroll_start_time = performance.now();
    mess_private.scroll_time = undefined;
    mess_private.scroll_timeout = null;

    // let sketch setup
    mess_setup && mess_setup();
}

function draw() {
    clear();

    // if we are not drawing, bail
    if (!mess_private.should_draw) {
        return;
    }

    // update useful info for sketch to use
    let now = performance.now();

    mess_info.mess_millis = now - mess_private.mess_start_time;
    mess_info.scroll_start_millis = now - mess_private.scroll_start_time;
    mess_info.scroll_millis = now - mess_private.scroll_time;

    mess_info.document_height = $(document).height();
    mess_info.document_width = $(document).width();
    mess_info.scroll_y = $(window).scrollTop();
    mess_info.scroll_y_normalized = mess_info.scroll_y / (mess_info.document_height - $(window).height());

    // let sketch draw
    mess_draw && mess_draw();
}

// keep track of user scrolling
$(window).on("scroll", (e) => {
    if (!mess_private.scroll_timeout) {
        start_scroll();
    }

    scroll();

    clearTimeout(mess_private.scroll_timeout);

    mess_private.scroll_timeout = setTimeout(() => {
        mess_private.scroll_timeout = null;
        stop_scroll();
    }, mess_settings.time_after_scroll);
});

$(window).on("resize", (e) => {
    console.log("Resize");
    clearTimeout(mess_private.resize_timeout);
    mess_private.resize_timeout = setTimeout(() => {
        // console.log(windowWidth, $(window).width(), windowWidth - $(window).width());
        console.log(windowWidth);
        resizeCanvas && resizeCanvas(windowWidth, windowHeight);
        $(mess_private.p5_canvas.canvas).attr("style", "");
    }, 100);

});



function start_scroll() {
    // console.log("start_scroll");
    mess_private.scroll_start_time = performance.now();
    mess_private.should_draw = true;

    $("body").addClass("mess");
}

function scroll() {
    // console.log("scroll");
    mess_private.scroll_time = performance.now();
}

function stop_scroll() {
    // console.log("stop_scroll");
    mess_private.should_draw = false;
    clear && clear();
    $("body").removeClass("mess");
}