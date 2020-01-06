// expected: all pixels turned red.
// observed: only the last pixel is updated.
// including the updatePixels() or removing the get() will fix
// i *think* that this may be a bug in our version of p5.js, but i'm not sure the indented design.
// an updatePixels() is needed, but i *think* the one after the loop is meant to be enough.
// its not entirely clear in the documentation if users are expected to call updatePixels after every .set() if also using .get()
// p5.js v0.5.6

function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(0);

	img = createImage(10, 10);
	for (var y = 0; y < img.height; y++) {
		for (var x = 0; x < img.width; x++) {
			img.get(x, y);
			var out_color = color(255, 0, 0, 255);
			img.set(x, y, out_color);

			// img.updatePixels();

			}
	}

	img.updatePixels();

	noSmooth();
	image(img, 0, 0, width, height);

	noLoop();
}
