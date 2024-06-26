/*
- grid art
- currently not rendering some of the cells

*/
const canvasSketch = require('canvas-sketch');

const settings = {
	dimensions: [1080, 1080],
};

const sketch = () => {
	return ({ context, width, height }) => {
		// context.fillStyle = '#242423';
		context.fillStyle = '#F5CB5C';
		context.fillRect(0, 0, width, height);

		const numColumns = 5,
			numRows = 4,
			numUnits = numColumns * numRows,
			gridWidth = width * 0.7,
			gridHeight = height * 0.7,
			cellWidth = gridWidth / numColumns,
			cellHeight = gridHeight / numRows,
			marginX = (width - gridWidth) * 0.5,
			marginY = (height - gridHeight) * 0.5;

		for (let i = 0; i < numUnits; i++) {
			const column = i % numColumns,
				row = Math.floor(i / numColumns),
				ox = (column * cellWidth) + marginX + (cellWidth * 0.5),
				oy = (row * cellHeight) + marginY + (cellHeight * 0.5),
				wd = cellWidth * 0.8,
				ht = cellHeight * 0.8;
			// const rnd = random.noise2D(ox, oy), turn = rnd * Math.PI

			context.save();
			context.translate(ox, oy);
			context.beginPath();
			context.lineWidth = 5;
			context.moveTo(wd * -0.5, 0);
			context.lineTo(ht * 0.5, 0);
			context.stroke();
			context.restore();
			
		}
	};
};

canvasSketch(sketch, settings);
