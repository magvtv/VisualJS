const canvasSketch = require('canvas-sketch');

const settings = {
    dimensions: [1080, 1080]
};

const sketch = () => {

    let x, y, w, h;

    return ({ context, width, height }) => {
        context.fillStyle = 'white';
        context.fillRect(0, 0, width, height);

        x = width * 0.5;
        y = height * 0.5;
        w = width * 0.6;
        h = height * 0.1;

        context.translate(x, y);
        context.translate(w * -0.5, h * -0.5);
        context.strokeStyle = "teal";
        // context.strokeRect(w * -0.5, h * -0.5, w, h);

        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(w, 0);
        context.lineTo(w, h);
        context.lineTo(0, h);
        context.closePath();
        context.stroke();

        // Good practice to save and restore the context
        context.save();
        context.restore();
    }
}

canvasSketch(sketch, settings);