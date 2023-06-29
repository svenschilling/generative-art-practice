// p5.js - "De Jong Equations" Times Tables Cardioid Visualization

// Settings
var SCENE_WIDTH = 800;
var SCENE_HEIGHT = 800;
var FPS = 60;

// Parameters for De Jong equations
var a = -1.4;
var b = 1.6;
var c = 1.0;
var d = 0.7;

// Parameters for times tables cardioid
var numPoints = 360;
var numTurns = 5;
var radius = SCENE_WIDTH / 4;

// Make sure the following line remains unchanged!
var sketch = function(p) {

  p.setup = function() {
    p.createCanvas(SCENE_WIDTH, SCENE_HEIGHT);
    p.background(0);
    p.frameRate(FPS);
    p.stroke(255);
    p.noFill();
  };

  p.draw = function() {
    p.background(0);

    // Draw times tables cardioid
    var angle = 0;
    var angleIncrement = p.TWO_PI / numPoints;

    p.beginShape();
    for (var i = 0; i < numPoints * numTurns; i++) {
      var x = SCENE_WIDTH / 2 + radius * p.cos(angle);
      var y = SCENE_HEIGHT / 2 + radius * p.sin(angle);

      // Apply De Jong equations to modify the position
      var nextX = p.sin(a * y) - p.cos(b * x);
      var nextY = p.sin(c * x) - p.cos(d * y);
      x = SCENE_WIDTH / 2 + radius * p.map(nextX, -2, 2, -1, 1);
      y = SCENE_HEIGHT / 2 + radius * p.map(nextY, -2, 2, -1, 1);

      p.vertex(x, y);

      angle += angleIncrement;
    }
    p.endShape();

    // Update the parameters for De Jong equations
    a += 0.01;
    b += 0.01;
    c += 0.01;
    d += 0.01;
  };

};

// Make sure the following line remains unchanged!
var stage = new p5(sketch, 'p5_stage');
