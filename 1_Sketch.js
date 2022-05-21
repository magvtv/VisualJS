const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
    return ({ context, width, height }) => {
        
        // The background color
        context.fillStyle = 'darkgrey';
        context.fillRect(0, 0, width, height);

    
        let x, y, wd, ht;
        context.lineWidth = width * 0.005;
        context.beginPath();
        context.strokeStyle = 'green';
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                context.globalAlpha = .4;
                wd = ht = width * .1;
                let gap, ix, iy;
                ix = iy = width * .3052;
                gap = width * 0.03;
                x = ix + (wd + gap) * i;
                y = iy + (ht + gap) * j;
                context.beginPath();
                context.rect(x, y, wd, ht)
                context.stroke();
                context.fill();

              // Generate the inner boxes at random
              let rand = Math.random() * 10;
              let off = width * 0.025;
                if (rand < 5) {
                  context.globalAlpha = 1;
                  context.beginPath();
                  context.fillStyle = 'black'
                  context.fillRect(x + (off /2), y + (off / 2), wd - off, ht - off);
                  context.stroke();

                  // Generate the inner boxes to form a P and a H

              }
          }
      }

  };
};

canvasSketch(sketch, settings);
