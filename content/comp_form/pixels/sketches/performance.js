// draws some grass


var testImage;

function preload() {
	testImage = loadImage("week_7_pixels/sketches/world_100.png");
	noLoop();
}

function setup() {
	// create a place to draw
	createCanvas(500, 500);

	// load up the pixel[] array so we can read colors out of it later
	testImage.loadPixels();
}


function draw() {
	// clear the background
	background(0, 0, 0);
	var start, end;

	noSmooth();

	image(testImage, 0, 0);

	start = millis();
	invertStandard(testImage);
	end = millis();
	console.log("invertStandard: ", end - start);
	image(testImage, 100, 0);

	start = millis();
	invertQuick(testImage);
	end = millis();
	console.log("invertQuick: ", end - start);
	image(testImage, 200, 0);


	start = millis();
	invertQuicker(testImage);
	end = millis();
	console.log("invertQuicker: ", end - start);
	image(testImage, 300, 0);




	noLoop();
}


	//var pixelRed = img.pixels[(y * 640 + x) * 4];
function invertStandard(img) {

	for (y = 0; y < img.height; y++) {
		for (x = 0; x < img.width; x++) {


			var c = img.get(x,y);
			c = [
				255 - c[0],
				255 - c[1],
				255 - c[2],
				c[3],
			];
			img.set(x, y, c);
			img.updatePixels();

		}
	}
	img.updatePixels();
}


function invertQuick(img) {

	for (y = 0; y < img.height; y++) {
		for (x = 0; x < img.width; x++) {


			var c = getQuick(img, x, y);
			c = [
				255 - c[0],
				255 - c[1],
				255 - c[2],
				c[3],
			];
			img.set(x, y, c);


		}
	}

	img.updatePixels();
}


function invertQuicker(img) {

	for (y = 0; y < img.height; y++) {
		for (x = 0; x < img.width; x++) {


			// var c = getQuick(img, x, y);
			var i = (y * img.width + x) * 4;

			var c = [
				255 - testImage.pixels[0],
				255 - testImage.pixels[1],
				255 - testImage.pixels[2],
				testImage.pixels[3],
			];
			img.set(x, y, c);


		}
	}

	img.updatePixels();
}


// find the RGBA values of the pixel at x, y in the img.pixels array
// see: http://p5js.org/reference/#/p5/pixels[]
// we don't need to worry about screen pixel density here, because we are not reading from the screen

function getQuick(img, x, y) {

	var i = (y * img.width + x) * 4;
	return [
		testImage.pixels[i],
		testImage.pixels[i+1],
		testImage.pixels[i+2],
		testImage.pixels[i+3],
	];
}
