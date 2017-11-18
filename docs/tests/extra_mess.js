mess_settings.time_after_scroll = 1000;

let settings = {
    amplitude: 40,
    frequency: .005
}


function mess_setup() {
    colorMode(HSB, 1);
}

function mess_draw() {

    noFill();

    // calc fadeout
    let fade = map(mess_info.scroll_millis, 0, mess_settings.time_after_scroll, 1.5, 0);
    fade = Math.min(fade, 1);


    for (y = 0; y < height; y++) {
        // rainbow it
        //        let hue = map(y + mess_info.scroll_y, 0, mess_info.document_height, 0, 1);
        // stroke(hue, 1, 1);
        let hue = map(y + mess_info.scroll_y, 0, mess_info.document_height, .4, .7);

        stroke(hue, .45, 1);

        // sample noise
        let noise_x = mess_info.mess_millis * .0001;
        let noise_y = (y + mess_info.scroll_y) * settings.frequency;
        let length = noise(noise_x, noise_y) * settings.amplitude;

        // scale length
        length = length * length;

        // apply fade out
        length = length * fade;

        // draw
        line(0, y, length, y);
    }


}