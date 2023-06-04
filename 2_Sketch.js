import canvasSketch from 'canvas-sketch'
import random from 'canvas-sketch-util/random';

const settings = {
    dimensions: [1080, 1080]
};

const degToRad = (degrees) => {
    return (degrees / 180) * Math.PI;
}

const sketch = () => {
    return ({ context, width, height }) => {
        context.fillStyle = '#702632';
        context.fillRect(0, 0, width, height);

        let ox, oy, wd, ht, rd, x, y, num, ns;
        context.lineWidth = 15;
        ox = oy = width * 0.5;
        wd = width * 0.012;
        ht = height * .045;
        rd = width * .3;
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
            context.scale(random.range(.4, 1.4), 1.75);
            // context.rotate(ang)


            context.beginPath();
            context.rect(-wd * .5, -ht * .5, wd, ht);
            context.strokeStyle = '#E7BB41'
            context.stroke();
            context.restore();
            
            context.save();
            context.translate(ox, oy);
            context.rotate(-angle);
            
            context.beginPath();
            context.lineWidth = random.range(10, 25);
            context.arc(0, 0, rd, slice * -.15, slice * .5);
            // context.strokeStyle = 'white';
            context.strokeStyle = '#080705';

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
