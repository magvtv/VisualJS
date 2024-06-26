/*

- clock work that looks really beautiful

*/

import canvasSketch from 'canvas-sketch'
import random from 'canvas-sketch-util/random';

const settings = {
    dimensions: [1080, 1080],
};

const colors = {
    radialStroke: '#E3D888',
    background: '#3D0814',
    dialStroke: '#71816D' 
}

const degToRad = (degrees) => {
    return degrees / 180 * Math.PI;
}

const sketch = () => {
    return ({ context, width, height, frame }) => {
        context.fillStyle = colors.background;
        context.fillRect(0, 0, width, height);

        let ox, oy, wd, ht, rd, x, y, num;
        context.lineWidth = 8;
        ox = oy = width * 0.5;
        wd = width * 0.012;
        ht = height * .045;
        rd = width * .3;
        num = 12;


        for (let a = 0; a < num; a++) {
            const slice = degToRad(360 / num);
            const angle = slice * a;
            const rnd = random.noise2D(ox, oy, .0005), turn = rnd * Math.PI * .3

            x = rd * Math.sin(angle);
            y = rd * Math.cos(angle);

            // The clock dials
            context.save();
            context.translate(x, y);
            context.translate(ox, oy);
            context.rotate(-angle);
            context.scale(random.range(.5, 2), 1.75);
            context.beginPath();
            context.rect(-wd * .5, -ht * .5, wd, ht);
            context.strokeStyle = colors.dialStroke
            context.stroke();
            context.restore();
            

            // the clock cut arcs
            context.save();
            context.translate(ox, oy);
            context.rotate(-angle);
            context.rotate(turn + frame)
            context.beginPath();
            context.lineWidth = random.range(5, 25);
            context.arc(0, 0, rd, slice * -.15, slice * .5);
            context.strokeStyle = colors.radialStroke
            context.stroke();
            context.restore();

        }

        // context.save();
        // context.translate(ox, oy);
        // context.beginPath();
        // context.globalAlpha = 1;
        // context.arc(-wd * .5, -ht * .5, wd * 5, 0, Math.PI * 2);
        // context.strokeStyle = 'green';
        // context.stroke();
        // context.restore();
    };
};

let manager;
const renderArt = async () => {
	const keyPress = (event) => {
		if (event.key === ' ') {
			manager.render()
		}
	}
	document.addEventListener('keydown', keyPress)
	manager = await canvasSketch(sketch, settings);
}
renderArt()
