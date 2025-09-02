/*
- grid art
- currently not rendering some of the cells

*/

import canvasSketch from 'canvas-sketch'
import random from 'canvas-sketch-util/random'
import { Pane } from 'tweakpane'



const settings = {
	dimensions: [1080, 1080],
	animate: true
};


const gridParameters = {
	columns: 5,
	rows: 15
}

const colors = {
	background: '#F7567C',
	gridStroke: '#FCFCFC'
}

const sketch = () => {
	return ({ context, width, height }) => {
		context.fillStyle = colors.background;
		context.fillRect(0, 0, width, height);

		const numColumns = gridParameters.columns,
			numRows = gridParameters.rows,
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
				scale = ((rnd + 1) / 2) * 20
			
			
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


const createControlPane = () => {
	const pane = new Pane()
	let folder;

	folder = pane.addFolder({
		title: 'Grid',
	})

	folder.addInput(gridParameters, 'columns', {
		min: 3,
		max: 10,
		step: 1
	})

	folder.addInput(gridParameters, 'rows', {
		min: 5,
		max: 30,
		step: 1
	})
}

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

createControlPane()
renderArt()



