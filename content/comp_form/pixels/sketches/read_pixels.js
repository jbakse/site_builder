// Colorizes an image with random color static

var worldImage;

function preload() {
	worldImage = loadImage("week_7_pixels/sketches/world.png");
}

function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(0);

	worldImage.loadPixels();

	for (var y = 0; y < worldImage.height; y++) {
		for (var x = 0; x < worldImage.width; x++) {
			var in_color = worldImage.get(x, y);

			var r = red(in_color);
			var g = green(in_color);
			var b = blue(in_color);
			var out_color = color(r * random(), g * random(), b * random());

			worldImage.set(x, y, out_color);
			worldImage.updatePixels();
			// including updatePixels in the previous line is needed for this example to work.
			// i *think* that this may be a bug in our version of p5.js
			// an updatePixels() is needed, but i *think* the one after the loop is meant to be enough
		}
	}

	worldImage.updatePixels();

	noSmooth();
	image(worldImage, 0, 0, width, height);

	noLoop();
}
