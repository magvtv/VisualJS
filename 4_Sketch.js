const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util');

const settings = {
    dimensions: [1080, 1080]
};

const sketch = ({ width, height }) => {

    let polka = [];
    var x, y;
    x = random.range(0, width);
    y = random.range(0, height);
    for (let i = 1; i < 20; i++) {
        polka.push(new Dot(x, y))
    }

    return ({ context, width, height }) => {
        context.fillStyle = 'papayawhip';
        context.fillRect(0, 0, width, height);

        polka.forEach(dot => {
            dot.trace(context);
        })

    };
};

canvasSketch(sketch, settings);

// Classes
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Dot {
    constructor(x, y) {
        this.pos = new Point(x, y);
        this.radius = 10;
    }

    trace(context) {
        context.strokeStyle = 'purple';
        context.beginPath();
        context.arc(this.pos.x, this.pos.y, this.radius, Math.PI * 2);
        context.stroke();
    }
}
