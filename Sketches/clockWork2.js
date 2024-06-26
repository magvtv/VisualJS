/*
- some generative art 
- draw circular pattern arcs with rectangular dials

*/

const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');

// Define settings for canvas sketch
const settings = {
  dimensions: [1080, 1080]
};

// Utility function to convert degrees to radians
const degToRad = (degrees) => {
  return (degrees / 180) * Math.PI;
};

// #CED0CE
// customizable variables
const state = {
    arcStroke: '#F15025',
    dialStroke: '#CED0CE',
    background: '#191919',
    numDials: 12
}

// Function to create the canvas sketch
const sketch = () => {
  return ({ context, width, height }) => {
    // Set background color
    context.fillStyle = state.background;
    context.fillRect(0, 0, width, height);

    // Variables for drawing elements
    let ox = width * 0.5;
    let oy = height * 0.5;
    let wd = width * 0.012;
    let ht = height * 0.045;
    let rd = width * 0.325;

    // Loop to draw multiple elements
    for (let a = 0; a < state.numDials; a++) {
      const slice = degToRad(360 / state.numDials);
      const angle = slice * a;

      /* BLOCK B: Arcs */
        context.save();
        context.translate(ox, oy);
        context.rotate(-angle * 30);
        context.beginPath();
        context.lineWidth = random.range(15, 30);
        context.arc(0, 0, rd * random.range(0.5, 1), slice * random.range(1, -15), slice * random.range(-5, 10));
        context.strokeStyle = state.arcStroke;
        context.globalAlpha = random.range(0.25, 0.75);
        context.stroke();
        context.restore();
        
         /* BLOCK A: Dials */
        context.save();
        context.translate(ox, oy);
        context.rotate(-angle);
        context.scale(random.range(0.5, 2), random.range(1.5, 2));
        context.beginPath();
        context.rect(-wd * 0.5, -ht * 0.5, wd, ht);
        context.strokeStyle = state.dialStroke;
        context.stroke();
        context.restore();
    }
  };
};

// Initialize the canvas sketch
let manager;

const start = async () => {
  // event handler for spacebar press
  const keyPress = (event) => {
    if (event.key === ' ') {
      manager.render(); // Render canvas with updated colors and elements
    }
  };

  // Add event listener for keydown
  document.addEventListener('keydown', keyPress);

  // Initialize canvas sketch
  manager = await canvasSketch(sketch, settings);
};

// Call start function to begin
start();
