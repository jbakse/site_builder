mess_settings.time_after_scroll = 1000;

let settings = {
    spin: .01,

}

let shapes = [];

function mess_setup() {
    colorMode(HSB, 1);
    rectMode(CENTER);

    for (n = 0; n < 10000; n++) {
        shapes.push({
            x: random(1),
            y: random(1)

        });
    }


}

function mess_draw() {

    let fade = map(mess_info.scroll_millis, 0, mess_settings.time_after_scroll, 1.5, 0);
    fade = Math.min(fade, 1);


    fill(255, 255, 255, fade);
    noStroke();

    translate(0, -mess_info.scroll_y);

    for (n = 0; n < shapes.length; n++) {
        let s = shapes[n];
        push();

        let x = s.x * mess_info.document_width;
        let y = s.y * mess_info.document_height;

        translate(x, y);
        rotate(mess_info.scroll_y * settings.spin);

        rect(0, 0, 20, 20);
        pop();
    }


}