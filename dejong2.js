// p5.js - "De Jong Equations" visuals demo

// Settings
var SCENE_WIDTH = 1000;
var SCENE_HEIGHT = 600;
var FPS = 60;

// Parameters for De Jong equations
var a = -1.4;
var b = 1.6;
var c = 1.0;
var d = 0.7;

// Variables for the current position
var x = 0;
var y = 0;

// Variable for storing the previous position
var prevX = 0;
var prevY = 0;

// Variable for the step size
var stepSize = 1;

// Make sure the following line remains unchanged!
var sketch = function(p) {

  p.setup = function() {
    p.createCanvas(SCENE_WIDTH, SCENE_HEIGHT);
    p.background(0);
    p.frameRate(FPS);
    p.stroke(255, 100);
    p.noFill();
  };

  p.draw = function() {
    // Update the position using De Jong equations
    var nextX = p.sin(a * prevY) - p.cos(b * prevX);
    var nextY = p.sin(c * prevX) - p.cos(d * prevY);
    x = p.map(nextX, -2, 2, 0, SCENE_WIDTH);
    y = p.map(nextY, -2, 2, 0, SCENE_HEIGHT);

    // Draw a line connecting the current and previous positions
    p.line(prevX, prevY, x, y);

    // Store the current position as the previous position
    prevX = x;
    prevY = y;

    // If the line goes off the screen, reset the position
    if (x < 0 || x > SCENE_WIDTH || y < 0 || y > SCENE_HEIGHT) {
      x = p.random(SCENE_WIDTH);
      y = p.random(SCENE_HEIGHT);
      prevX = x;
      prevY = y;
    }
  };

};

// Make sure the following line remains unchanged!
var stage = new p5(sketch, 'p5_stage');
