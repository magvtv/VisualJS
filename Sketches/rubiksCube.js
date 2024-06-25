/*
- code to generate a graphical representation resembling the cube on 2D
- drawing grids with outerbox and innerbox strokes of colors 
- spacebar re-renders a new positioning of the colored innerboxes

*/



const canvasSketch = require('canvas-sketch');

// defining colors array (allowing for future customization)
const colors = {
  outerBoxStroke: '#4D5057',
  background: '#CFCFCF',
  innerBoxFill: '#3BC14A'
};

// canvas settings
const settings = {
  dimensions: [1080, 1080]
};

// Function to draw the cube like structure
const sketch = () => {
  // Function to draw outer grid
  const drawOuterGrid = (context, width) => {
    const gap = width * 0.03;
    const boxSize = width * 0.125;
    const startX = width * 0.257;
    const startY = width * 0.257;

    context.beginPath();
    context.strokeStyle = colors.outerBoxStroke;
    context.lineWidth = width * 0.01;

    for (let i = 0; i <= 2; i++) {
      for (let j = 0; j <= 2; j++) {
        const x = startX + (boxSize + gap) * i;
        const y = startY + (boxSize + gap) * j;

        context.rect(x, y, boxSize, boxSize);
        context.stroke();
        context.fillStyle = colors.innerBoxFill;

        // randomly decide whether to fill the inner box
        if (Math.random() < 0.5) {
          context.globalAlpha = 1;
          context.fillRect(x + (gap / 2), y + (gap / 2), boxSize - gap, boxSize - gap);
        } else {
          context.globalAlpha = 0.75;
        }
      }
    }
  };

  // Function to draw on canvas
  return ({ context, width, height }) => {
    // Set background color
    context.fillStyle = colors.background;
    context.fillRect(0, 0, width, height);

    // Draw outer grid
    drawOuterGrid(context, width, height);
  };
};

// event handler on space bar press
const keyPress = (event) => {
  if (event.key === ' ') {
    // render the canvas
    if (manager) manager.render();
  }
};

// start function to initialize canvas sketch
const start = async () => {
  document.addEventListener('keydown', keyPress); // add event listener for keydown

  // initialize canvas sketch
  manager = await canvasSketch(sketch, settings);
};

start();
