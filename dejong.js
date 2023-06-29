function setup() {
  size(800, 800);
  background(0);
  colorMode(HSB, 255);
  smooth();
  noLoop();
}

function draw() {
  translate(width / 2, height / 2);

  // De Jong IFS parameters
  a = 1.4;
  b = -2.3;
  c = 2.4;
  d = -2.1;

  x = 0;
  y = 0;

  // Number of iterations
  iterations = 100000;

  for (int i = 0; i < iterations; i++) {
    // Map the x and y coordinates to the screen
    sx = map(x, -2.1820, 2.6558, -width / 2, width / 2);
    sy = map(y, -2.7691, 2.7691, -height / 2, height / 2);

    // Draw a point
    stroke(sx % 255, sy % 255, 255);
    point(sx, sy);

    // Update the x and y coordinates
     xn = sin(a * y) - cos(b * x);
     yn = sin(c * x) - cos(d * y);
    x = xn;
    y = yn;
  }
}
