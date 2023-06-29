let img;
let brushSize = 10;

function preload() {
  img = loadImage('./1.jpg'); // Load your image
}

function setup() {
  createCanvas(img.width, img.height);
  background(255);
  image(img, 0, 0); // Display the original image
  filter(GRAY); // Apply grayscale filter
  noLoop();
}

function draw() {
  for (let i = 0; i < 10000; i++) {
    let x = floor(random(width));
    let y = floor(random(height));
    let c = get(x, y); // Get color of the pixel

    let brushColor = color(
      red(c),
      green(c),
      blue(c),
      random(100, 255) // Random transparency for brush strokes
    );

    fill(brushColor);
    noStroke();
    ellipse(x, y, brushSize, brushSize); // Draw brush stroke
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('van_gogh_painting', 'jpg'); // Save the final painting as an image
  }
}
