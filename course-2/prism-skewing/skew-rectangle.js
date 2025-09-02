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
        const angleOne = maths.degToRad(30);
        drawSkewedRectangle(context, centerX, centerY, rectWidth, rectHeight, angleOne, "teal");
        
        // Second skewed rectangle (adjust angle/position as desired)
        const angleTwo = maths.degToRad(150);
        drawSkewedRectangle(context, centerX, centerY + height * 0.2, rectWidth, rectHeight, angleTwo, "teal");
    }
}

// Function to draw the skewed rectangle
const drawSkewedRectangle = (context, centerX, centerY, rectWidth, rectHeight, angleRadians, strokeStyle = "teal") => {
    const rx = Math.cos(angleRadians) * rectWidth;
    const ry = Math.sin(angleRadians) * rectWidth;

    context.save();
    context.translate(centerX, centerY);
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