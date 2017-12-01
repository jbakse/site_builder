// finds light pixels that rest on top of a dark pixels, turns them magenta.

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
			var this_color = worldImage.get(x, y);
			var below_color = worldImage.get(x, y+1);

			if (lightness(this_color) < lightness(below_color)) {
				var out_color = color(255, 0, 255);
				worldImage.set(x, y, out_color);
				worldImage.updatePixels();
				// including updatePixels in the previous line is needed for this example to work.
				// i *think* that this may be a bug in our version of p5.js
				// an updatePixels() is needed, but i *think* the one after the loop is meant to be enough
			}



		}
	}

	worldImage.updatePixels();

	noSmooth();
	image(worldImage, 0, 0, width, height);

	noLoop();
}
