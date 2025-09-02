const canvasSketch = require('canvas-sketch');
const maths = require('canvas-sketch-util/math');

const settings = {
    dimensions: [1080, 1080]
};

// Main sketch function
const sketch = () => {
    
    return ({ context, width, height }) => {
        context.fillStyle = 'white';
        context.fillRect(0, 0, width, height);

        const centerX = width * 0.5;
        const centerY = height * 0.5;
        const rectWidth = width * 0.6;
        const rectHeight = height * 0.1;

        // First skewed rectangle (original)
        context.save();
        context.translate(centerX, centerY);
        drawSkewedRectangle(context);
        context.restore();

        // Second skewed rectangle (adjust angle/position as desired)
        // context.save();
        // context.translate(centerX, centerY + height * 0.2);
        // drawSkewedRectangle(context, rectWidth, rectHeight, 150, "teal");
        // context.restore();
    }
}

// Function to draw the skewed rectangle
const drawSkewedRectangle = (context, rectWidth = 600, rectHeight = 200, degrees = 30, strokeStyle = "teal") => {
    const angle = maths.degToRad(degrees);
    const rx = Math.cos(angle) * rectWidth;
    const ry = Math.sin(angle) * rectWidth;

    context.save();
    context.strokeStyle = strokeStyle;
    context.translate(rx * -0.5, (ry + rectHeight) * -0.5);

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(rx, ry);
    context.lineTo(rx, (ry + rectHeight));
    context.lineTo(0, rectHeight);
    context.closePath();
    context.stroke();
    context.restore();
};


canvasSketch(sketch, settings);