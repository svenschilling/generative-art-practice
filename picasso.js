// Set up canvas
function setup() {
  createCanvas(800, 800);
  background(220);
}

// Generate artwork
function draw() {
  // Randomize stroke color
  let r = random(255);
  let g = random(255);
  let b = random(255);
  strokeWeight(2);
  stroke(r, g, b);

  // Randomize shape and position
  let shape = random(5); // Randomly choose between 5 shapes
  let x = random(width);
  let y = random(height);
  let size = random(20, 150);

  // Draw shapes in Picasso's style
  if (shape < 1) {
    // Draw a rectangle
    let angle = random(TWO_PI);
    push();
    translate(x, y);
    rotate(angle);
    rect(0, 0, size, size);
    pop();
  } else if (shape < 2) {
    // Draw an ellipse
    let radiusX = random(size);
    let radiusY = random(size);
    ellipse(x, y, radiusX, radiusY);
  } else if (shape < 3) {
    // Draw a triangle
    let angle = random(TWO_PI);
    let x2 = x + cos(angle) * size;
    let y2 = y + sin(angle) * size;
    let x3 = x + cos(angle + TWO_PI / 3) * size;
    let y3 = y + sin(angle + TWO_PI / 3) * size;
    triangle(x, y, x2, y2, x3, y3);
  } else if (shape < 4) {
    // Draw a line
    let x2 = x + random(-size, size);
    let y2 = y + random(-size, size);
    line(x, y, x2, y2);
  } else {
    // Draw a curve
    let x2 = x + random(-size, size);
    let y2 = y + random(-size, size);
    let x3 = x + random(-size, size);
    let y3 = y + random(-size, size);
    let x4 = x + random(-size, size);
    let y4 = y + random(-size, size);
    bezier(x, y, x2, y2, x3, y3, x4, y4);
  }
}

// Generate new artwork on mouse click
function mouseClicked() {
  clear();
  background(220);
}
