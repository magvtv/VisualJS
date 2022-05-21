const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random')

const settings = {
    dimensions: [1080, 1080]
};

const degToRad = (degrees) => {
    return degrees / 180 * Math.PI;
}

const sketch = () => {
    return ({ context, width, height }) => {
        context.fillStyle = 'darkslategrey';
        context.fillRect(0, 0, width, height);

        let ox, oy, wd, ht, rd, x, y, num;
        context.lineWidth = 8;
        ox = oy = width * 0.5;
        wd = width * 0.0012;
        ht = height * .05;
        rd = width * .25;
        num = 12;

        for (let a = 0; a < num; a++) {
            const slice = degToRad(360 / num);
            const angle = slice * a;

            x = rd * Math.sin(angle);
            y = rd * Math.cos(angle);



            context.save();
            context.translate(x, y);
            context.translate(0, 0);
            context.rotate(-angle);
            context.scale(random.range(.5, 1.1), random.range(.75, 1.2));


            context.beginPath();
            context.shadowBlur = 60;
            context.shadowColor = '';
            context.rect(random.range(.34, -wd * .5), random.range(.18, -ht * .5), wd * 4, ht * 1.5);
            context.strokeStyle = '';
            // context.strokeStyle = 'floralwhite';
            context.stroke();
            context.restore();

            context.save();
            context.translate(0, 0);
            context.rotate(-angle);

            context.beginPath();
            context.globalAlpha = .91;
            context.shadowBlur = 4;
            context.shadowColor = 'white';
            context.lineWidth = random.range(2, 7);
            context.arc(0, 0, rd * random.range(.5, 1.5), slice * random.range(-8, 3), slice * random.range(1, 3));
            let grd = context.createLinearGradient(0, 0, 170, 0)
            // grd.addColorStop(0, "#00b9bc");
            // grd.addColorStop(1, "#00a5a7");
            grd.addColorStop(0, "#79cbb8");
            grd.addColorStop(1, "#500472")
            context.strokeStyle = grd;
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
