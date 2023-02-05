import canvasSketch from 'canvas-sketch'

const settings = {
  dimensions: [ 1440, 1440 ]
};


const sketch = () => {
    return ({ context, width, height }) => {
        
      // The background color
      
      // context.fillStyle = '#E2D1CA'
      context.fillRect(0, 0, width, height);
      
      
      let x, y, wd, ht;
      context.beginPath();
      
      
      //outer box stroke 
      

      context.strokeStyle = '#33B4EB'
      context.lineWidth = width * .01;
      // context.shadowBlur = 100
      // context.shadowColor = "yellow"
      // context.fillRect(20, 20, 100, 20)
      

      
      // printing out the order of boxes {2 for rubix increasing}
      for (let i = 0; i <= 2; i++) {
          for (let j = 0; j <= 2; j++) {
              context.globalAlpha = .75;
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

            let rand = Math.random() * 100;
            let off = width * 0.03;
            if (rand < 60) {
                context.globalAlpha = 1
                context.beginPath();
                context.fillStyle = '#92AD94'
                // context.fillStyle = '#F4DBD8'
                context.fillRect(x + (off * .5), y + (off * .5), wd - off, ht - off);
              }
        }
    }
  };
};

// canvasSketch(sketch, settings);

const keyPress = (a) => {
  if (a.key === 'Space')
    manager.render()
}

const start = async () => {
  document.addEventListener('keydown', keyPress);
  manager = await canvasSketch(sketch, settings);
}
start()
