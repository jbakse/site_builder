let particles = [];

function mess_setup() {
    for (i = 0; i < 100; i++) {
        particles.push({
            x: random(mess_info.document_width),
            y: random(mess_info.document_height)
        });
    }
}

function mess_draw() {

    clear();

    // draw fixed window rectangle
    noFill();
    stroke(0, 255, 255);
    rect(10, 10, width - 20, height - 20);
    line(10, 10, width - 10, height - 10);



    // draw info overlay
    noStroke();
    fill(0, 100, 100);
    text(`
mess
====

width: ${ width}
height: ${ height}

window_width: ${ windowWidth}
window_height: ${ windowHeight}
document_width: ${ mess_info.document_width}
document_height: ${ mess_info.document_height}
scroll_y: ${ mess_info.scroll_y}
scroll_y_normalized: ${ mess_info.scroll_y_normalized.toFixed(2)}

mess_millis: ${mess_info.mess_millis.toFixed(0)}
scroll_start_millis: ${mess_info.scroll_start_millis.toFixed(0)}
scroll_millis: ${mess_info.scroll_millis.toFixed(0)}
`, 20, 80);


    // apply scroll transform
    translate(0, -mess_info.scroll_y);


    // draw scrolling document rectangle
    stroke(255, 0, 255);
    noFill();
    rect(5, 5, width - 10, mess_info.document_height - 10);

    // draw particles
    let my_blend = 255 - (mess_info.scroll_millis / 1000 * 255 * 1);




    noStroke();
    fill(255, 0, 0, my_blend);
    particles.forEach((p) => {
        p.x += random(-1, 1) * 1;
        p.y += random(-1, 1) * 1;
        ellipse(p.x, p.y, 30, 30);
    });
}