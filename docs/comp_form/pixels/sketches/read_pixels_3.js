// reads the image pixel values to control a drawing.

var worldImage;

function preload() {
	worldImage = loadImage("week_7_pixels/sketches/world.png");
}

function setup() {
	createCanvas(500, 500);
}


function draw() {
	background(0, 50, 50);

	fill(200, 50, 50);
	noStroke();

	worldImage.loadPixels();

	for (var y = 0; y < worldImage.height; y++) {
		for (var x = 0; x < worldImage.width; x++) {
			var in_color = worldImage.get(x, y);
			var s = lightness(in_color) / 255 * 50;
			ellipse(x * 30 + 25, y * 30 + 25, s, s);
		}
	}

	// we don't draw the image, its just input


	noLoop();
}
