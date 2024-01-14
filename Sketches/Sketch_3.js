
import canvasSketch from 'canvas-sketch'
import random from 'canvas-sketch-util/random';

const settings = {
    dimensions: [1440, 1440]
};

const degToRad = (degrees) => {
    return (degrees / 180) * Math.PI;
}

const sketch = () => {
    return ({ context, width, height }) => {

        /* Canvas Background */
        context.fillStyle = '#A69888';
        
        /* Changing hue */
        // context.globalAlpha = random.range(.9, 1)
        context.fillRect(0, 0, width, height);

        let ox, oy, wd, ht, rd, x, y, num, ns;
        context.lineWidth = 20;
        ox = oy = width * 0.5;
        wd = width * 0.012;
        ht = height * .045;
        rd = width * .325;
        num = 12;


        for (let a = 0; a < num; a++) {
            const slice = degToRad(360 / num);
            const angle = slice * a;

            x = rd * Math.sin(angle);
            y = rd * Math.cos(angle);



            /* BLOCK A: Dials */
            context.save();
            context.translate(x, y);
            context.translate(ox, oy);
            context.rotate(-angle);
            // context.rotate(-angle)
            /* Changing the thickness */
            context.scale(random.range(.5, 2), random.range(1.5, 2));
            // context.scale(1.5, 1.5)
            context.beginPath();
            context.rect((-wd * .75), (-ht * .5), wd, ht);

            context.strokeStyle = '#6B6D76'
            // context.globalAlpha = random.range(.8, 1)
            context.stroke();
            // context.shadowBlur = random.range(10, 100)
            // context.fill()
            context.restore();




            /* BLOCK B: Arcs */
            context.save();
            context.translate(ox, oy);
            context.rotate(-angle * 30);
            context.beginPath();
            context.lineWidth = random.range(15, 30)
            // context.lineWidth = 10
            // context.arc(0, 0, rd * 1.25, (slice * random.range(0, -.5)), (slice * random.range(0, .75)));
            // context.arc(0, 0, rd, (slice * random.range(0, -.15)), (slice * random.range(1,  5)))
            context.arc(0, 0, rd * random.range(.5, 1), (slice * random.range(1, -15)), (slice * random.range(-5, 10)))
            // // context.strokeStyle = 'white';
            // let grd = context.createLinearGradient(ox, oy, rd * .2, rd * .9)
            // grd.addColorStop = ('.1', '#B5D6B2')
            // grd.addColorStop = ('0.6', '#FF9F1C')

            // context.strokeStyle = '#16697A';
            // context.strokeStyle = grd
            context.strokeStyle = '#FCBFB7'
            /* Adding some change of hue to the stroke */
            context.globalAlpha = random.range(.25, .75)
            context.stroke();
            context.restore();

        }

        /* circle */
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
