const canvasSketch = require('canvas-sketch');
// import canvasSketch from 'canvas-sketch'

const settings = {
  dimensions: [1080, 1080]

};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#242423';
    // context.fillStyle = '#F5CB5C'
    context.fillRect(0, 0, width, height);

    const columns = 4, rows = 3
    const numUnits = columns * rows
    const grid_w = width * .8, grid_h = height * .8
    const unit_w = grid_w / columns, unit_h = grid_h / rows
    const marginX = (grid_w - width) * -.5, marginY = (height - grid_h) * .5

    for (let i = 0; i < numUnits; i++) {
      const cl = i % columns, rw = Math.floor(i / cl)
      const ox = cl * unit_w, oy = rw * unit_h
      const wd = unit_w * .8
      // const rnd = random.noise2D(ox, oy), turn = rnd * Math.PI

      context.save();
      context.translate(ox, oy);
      context.translate(marginX, marginY);
      context.translate(unit_w * .5, unit_h * .5);
      // context.rotate(turn)
      // context.translate(wd * .5, ht * .5)
      
      context.lineWidth = 30;
      context.beginPath();
      context.moveTo(wd * .5, 0);
      context.lineTo(wd * -.5, 0);
      context.stroke();


      context.restore();
    };
  };
};

canvasSketch(sketch, settings);