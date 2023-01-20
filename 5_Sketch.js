// const canvasSketch = require('canvas-sketch');
import canvasSketch from 'canvas-sketch'

const settings = {
  dimensions: [ 1440, 1440 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    // context.fillStyle = '#242423';
    context.fillStyle = '#F5CB5C'
    context.fillRect(0, 0, width, height);


    const columns = 4, rows = 4
    const numUnits = columns * rows
    const grid_w = width * .8
    const grid_h = height * .8
    const unit_w = grid_w / columns
    const unit_h = grid_h / rows
    const marginX = (width - grid_w) * .5
    const marginY = (height - grid_h) * .5

    for (let i = 0; i < numUnits; i++) {
      const col = i % columns
      const row = Math.floor(i / col)
      const ox = col * unit_w
      const oy = row * unit_h
      const wd = unit_w * .8
      // const ht = unit_h * .94

      context.save()
      context.translate(marginX, marginY)
      context.translate(ox, oy)
      // context.translate(wd * .5, ht * .5)
      context.translate(unit_w * .5, unit_h * .5)
      
      context.lineWidth = 25

      context.beginPath()
      context.moveTo(wd * -0.35, 0)
      context.lineTo(wd * .45, 0)
      context.stroke()
      context.restore()
    }
  };
};

canvasSketch(sketch, settings);
