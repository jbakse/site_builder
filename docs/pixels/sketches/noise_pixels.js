function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(0);

	img = createImage(30, 30);
	img.loadPixels();
	for (var y = 0; y < img.width; y++) {
		for (var x = 0; x < img.height; x++) {


			var r = noise(x * .1, y * .1, 0) * 255;
			var g = noise(x * .1, y * .1, 100) * 255;
			var b = noise(x * .1, y * .1, 200) * 255;

			var c = color(r,g,b);

			img.set(x, y, c);
		}
	}
	img.updatePixels();

	noSmooth();
	image(img, 0, 0, width, height);
	noLoop();

}
