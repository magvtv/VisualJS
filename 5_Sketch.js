const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
      context.fillStyle = '#efc8b1'
      context.fillRect(0, 0, width, height);
      
      
      context.fillStyle = '#514644';
      context.font = "1000px serif";
      context.textBaseline = 'top';
      context.strokeStyle = ""; 
    //   context.textAlign = "center"
      


      let name = 'PH';
      let metrics = context.measureText(name);
    //   console.log(metrics);
      let mx, my, m_wd, m_ht;
      mx = metrics.actualBoundingBoxLeft * -1;
      my = metrics.actualBoundingBoxAscent * -1;
      m_wd = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
      m_ht = metrics.actualBoudingBoxAscent + metrics.actualBoundingBoxDescent;

      
      
      context.save();
      //   context.translate(width * .5, height * .5);
      context.beginPath();
      context.rect(mx, my, m_wd, m_ht);
      context.stroke();


      context.fillText(name, 0, 0);
      context.restore();

  };
};

canvasSketch(sketch, settings);
