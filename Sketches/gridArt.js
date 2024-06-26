/*
- grid art
- currently not rendering some of the cells

*/
const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random')

const settings = {
	dimensions: [1080, 1080],
};

const colors = {
	background: '#138A36',
	gridStroke: '#04E824'
}

const sketch = () => {
	return ({ context, width, height }) => {
		context.fillStyle = colors.background;
		context.fillRect(0, 0, width, height);

		const numColumns = 8,
			numRows = 8. ,
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
			const rnd = random.noise2D(ox, oy, 0.001),
				angle = rnd * Math.PI * 0.125,
				scale = ((rnd + 1) / 2) * 15
			
			
			context.lineWidth = scale;
			context.strokeStyle = colors.gridStroke

			context.save();
			context.translate(ox, oy);
			context.rotate(angle)
			context.beginPath();
			context.moveTo(wd * -0.5, 0);
			context.lineTo(ht * 0.5, 0);
			context.stroke();
			context.restore();
			
		}
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



