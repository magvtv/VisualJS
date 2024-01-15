// import canvasSketch from 'canvas-sketch';
const canvasSketch = require('canvas-sketch');

const settings = {
	dimensions: [1080, 1080],
};

const sketch = () => {
	return ({ context, width, height }) => {
		// context.fillStyle = '#242423';
		context.fillStyle = '#F5CB5C';
		context.fillRect(0, 0, width, height);

		const columns = 5,
			rows = 5,
			numUnits = columns * rows,
			grid_w = width * 0.8,
			grid_h = height * 0.8,
			cell_w = grid_w / columns,
			cell_h = grid_h / rows,
			margin_x = (width - grid_w) * 0.5,
			margin_y = (height - grid_h) * 0.5;

		for (let i = 0; i <
       numUnits; i++) {
			const cl = i % columns,
				rw = Math.floor(i / cl),
				ox = cl * cell_w,
				oy = rw * cell_h,
				wd = cell_w * 0.8,
				ht = cell_h * 0.8;
			// const rnd = random.noise2D(ox, oy), turn = rnd * Math.PI

			context.save();
			context.translate(ox, oy);
			context.translate(margin_x, margin_y);
			context.translate(cell_w * 0.5, cell_h * 0.5);

			context.lineWidth = 5;

			context.beginPath();
			context.moveTo(wd * -0.5, 0);
			context.lineTo(ht * 0.5, 0);
			context.stroke();

			context.restore();
			// context.rotate(turn)
			// context.translate(wd * .5, ht * .5)
		}
	};
};

canvasSketch(sketch, settings);
