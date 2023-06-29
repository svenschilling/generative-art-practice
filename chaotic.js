let num_params = 15; // Number of parameters for the equations
let params = []; // Array to store the equation parameters

let equ_text; // Paragraph element to display the equation code
let equ_box; // Input box to enter the equation code
let t_text; // Paragraph element to display the current value of "t"
let t_box; // Input box to enter the value of "t"

let plot_x = 0.0; // x-coordinate of the plot
let plot_y = 0.0; // y-coordinate of the plot
let plot_scale = 0.25; // Scaling factor for the plot

// Function to generate random equation parameters
function RandParams() {
  params = [];
  for (let i = 0; i < num_params; ++i) {
    params[i] = Math.random() * 3 - 1.0;
  }
}

// Function to convert coordinates from the plot to screen
function ToScreen(x, y) {
  const p = createVector(
    map(x, -t_start, t_end, 0, width),
    map(y, -t_start, t_end, height, 0)
  );
  return p;
}

// Function to generate a random color
function GetRandColor(seed) {
  const rand = new Math.seedrandom(seed);
  const r = Math.floor(rand() * 256);
  const g = Math.floor(rand() * 256);
  const b = Math.floor(rand() * 256);
  return color(r, g, b);
}

// Function to evaluate the equation code and generate the code string
function CreateEquCode() {
  let code = "";
  for (let i = 0; i < num_params / 3; ++i) {
    const x = params[i * 3];
    const y = params[i * 3 + 1];
    const z = params[i * 3 + 2];
    code += `x = ${x.toFixed(2)} * x - ${y.toFixed(2)} * y; `;
    code += `y = ${z.toFixed(2)} * x + ${x.toFixed(2)} * y; `;
  }
  return code;
}

// Function to reset the plot coordinates and scale
function ResetPlot() {
  plot_x = 0.0;
  plot_y = 0.0;
  plot_scale = 0.25;
}

// Function to handle the preloading of external resources
function preload() {
  font = loadFont('path_to_font.ttf');
}

function setup() {
  // Setup canvas size and pixel density
  if (fullscreen) {
    window_w = displayWidth;
    window_h = displayHeight;
    pixelDensity(window_bits);
  } else {
    windowBits(window_bits);
  }
  
  createCanvas(window_w, window_h);
  rand_gen = new Math.seedrandom();
  
  // Create HTML elements for equation code display and input
  equ_text = createP();
  equ_text.position(10, 10);
  equ_text.style('font-family', 'monospace');
  equ_text.style('font-size', '18px');
  
  equ_box = createInput();
  equ_box.position(10, 40);
  equ_box.size(220);
  
  // Create HTML elements for "t" value display and input
  t_text = createP();
  t_text.position(10, 70);
  t_text.style('font-family', 'monospace');
  t_text.style('font-size', '18px');
  
  t_box = createInput();
  t_box.position(10, 100);
  t_box.size(60);
  
  // Create a button to generate random equation parameters
  const rand_button = createButton('Randomize');
  rand_button.position(10, 130);
  rand_button.mousePressed(RandParams);
  
  // Create a button to reset the plot
  const reset_button = createButton('Reset');
  reset_button.position(90, 130);
  reset_button.mousePressed(ResetPlot);
  
  // Set up the initial equation parameters
  RandParams();
  
  // Set up the initial equation code and display it
  const equ_code = CreateEquCode();
  equ_text.html(`Equation: ${equ_code}`);
}

function draw() {
  // Get the current value of "t" from the input box
  const t = parseFloat(t_box.value());
  
  // Update the equation code and display it
  const equ_code = CreateEquCode();
  equ_text.html(`Equation: ${equ_code}`);
  
  // Update the "t" value display
  t_text.html(`t: ${t.toFixed(2)}`);
  
  // Evaluate the equation code to get the plot coordinates
  eval(equ_code);
  
  // Scale the plot coordinates
  plot_x *= plot_scale;
  plot_y *= plot_scale;
  
  // Convert the plot coordinates to screen coordinates
  const screen_pos = ToScreen(plot_x, plot_y);
  
  // Draw a point at the screen coordinates
  stroke(GetRandColor(t));
  strokeWeight(1);
  point(screen_pos.x, screen_pos.y);
  
  // Increment "t" for the next frame
  t_box.value(t + 0.01);
}