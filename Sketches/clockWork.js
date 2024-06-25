/*
- code generation of a radial pattern or rotated rectangles and arcs
- kinda resembles a clock
*/

const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');

// canvas sketch settings
const settings = {
  dimensions: [1080, 1080]
};

// utility function: convert degrees to radians
const degToRad = (degrees) => {
  return (degrees / 180) * Math.PI;
};


// define colors array for customization
const colors = {
    background: '#C09BD8',
    rectangleStroke: '#EBC3DB',
    arcStroke: '#E6E4CE'
}



// Function to create the canvas sketch
const sketch = () => {
  return ({ context, width, height }) => {
    // set background color
    context.fillStyle = colors.background;
    context.fillRect(0, 0, width, height);

    // variables for positioning and sizing drawing elements
    let ox = width * 0.5;
    let oy = ox;
    let wd = width * 0.012;
    let ht = height * 0.045;
    let rd = width * 0.3;
    let num = 12;

    // method to draw rotated rectangles
    const drawRotatedRect = (x, y, angle) => {
      context.save();
      context.translate(x + ox, y + oy);
      context.rotate(-angle);
      context.scale(random.range(2, 2.5), 1.8);
      context.beginPath();
      context.rect(-wd * 0.5, -ht * 0.5, wd, ht);
      context.strokeStyle = colors.rectangleStroke;
      context.stroke();
      context.restore();
    };

    // Function to draw rotated arcs
    const drawRotatedArc = (angle) => {
        context.save();
        context.translate(ox, oy);
        context.rotate(-angle);
        context.beginPath();
        context.lineWidth = random.range(10, 20);
        context.arc(0, 0, rd, degToRad(-15), degToRad(50));
        context.strokeStyle = colors.arcStroke;
        context.stroke();
        context.restore();
    };

    // Loop to draw multiple elements
    for (let a = 0; a < num; a++) {
        const slice = degToRad(360 / num);
        const angle = slice * a;
        const x = rd * Math.sin(angle);
        const y = rd * Math.cos(angle);

        // Draw rotated arc
        drawRotatedArc(angle);
        
        // Draw rotated rectangle
        drawRotatedRect(x, y, angle);
    }
  };
};

// Event handler for key press (spacebar)
let manager; 
const keyPress = (event) => {
  if (event.key === ' ') {
    manager.render(); // Render canvas with new color scheme
  }
};

const start = async () => {
  document.addEventListener('keydown', keyPress); // Add event listener for keydown
  // Initialize canvas sketch
  manager = await canvasSketch(sketch, settings);
};

// Call start function to begin
start();

