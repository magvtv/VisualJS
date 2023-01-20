import canvasSketch from 'canvas-sketch'
import random from 'canvas-sketch-util/random';

const settings = {
    dimensions: [1080, 1080]
};

const degToRad = (degrees) => {
    return degrees / 180 * Math.PI;
}

const sketch = () => {
    return ({ context, width, height }) => {
        context.fillStyle = '#23231A';
        context.fillRect(0, 0, width, height);

        let ox, oy, wd, ht, rd, x, y, num;
        context.lineWidth = 8;
        ox = oy = width * 0.5;
        wd = width * 0.012;
        ht = height * .045;
        rd = width * .2;
        num = 12;

        for (let a = 0; a < num; a++) {
            const slice = degToRad(360 / num);
            const angle = slice * a;

            x = rd * Math.sin(angle);
            y = rd * Math.cos(angle);

            context.save();
            context.translate(x, y);
            context.translate(ox, oy);
            context.rotate(-angle);
            context.scale(random.range(.7, 1.4), 1.35);


            context.beginPath();
            context.rect(-wd * .5, -ht * .5, wd, ht);
            context.strokeStyle = '#809848';
            // context.strokeStyle = '#4DCCBD'
            context.stroke();
            context.restore();
            
            context.save();
            context.translate(ox, oy);
            context.rotate(-angle);
            
            context.beginPath();
            context.lineWidth = random.range(5, 15);
            context.arc(0, 0, rd, slice * -.25, slice * .3);
            context.strokeStyle = 'white';

            context.stroke();
            context.restore();

        }

        // circle
        // context.save();
        // context.translate(150, 295);
        // context.beginPath();
        // context.globalAlpha = 0.55;
        // context.arc(-wd * .5, -ht * .5, wd * .93, 0, Math.PI * 2);
        // context.strokeStyle = 'black';
        // context.stroke();
        // context.restore();








    };
};

canvasSketch(sketch, settings);
