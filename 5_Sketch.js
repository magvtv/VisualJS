const canvasSketch = require('canvas-sketch');
// const WebFont = require('webfontloader');
let manager;

const settings = {
    dimensions: [1080, 1080]
};

let name = 'W';
let fontSize = 1000;
let fontFamily = "serif";

let typeCnv = document.createElement('canvas');
let ctx = typeCnv.getContext('2d');

const sketch = ({ context, width, height }) => {
    const unit = 20;
    const rows = Math.floor(width / unit);
    const cols = Math.floor(height / unit);
    const cells = rows * cols;
    
    typeCnv.width = rows;
    typeCnv.height = cols;

    return ({ context: ctx, width: rows, height: cols}) => {        
        // typeCtx.fillStyle = '#efc8b1';
        ctx.fillStyle = 'aquamarine';
        ctx.fillRect(0, 0, rows, cols);
        
        
        // typeCtx.fillStyle = '#514644';
        ctx.fillStyle = 'black';
        fontSize = rows * .95;
        ctx.font = `bold ${fontSize}px ${fontFamily}`;
        ctx.textBaseline = 'top';
        //   WebFont.load({
        //       google: {
        //             families: ['Kumbh Sans']
        //         }
        //     })

        const metrics = ctx.measureText(name);
        // console.log(metrics);
        const mx = metrics.actualBoundingBoxLeft * -1;
        const my = metrics.actualBoundingBoxAscent * -1;
        const m_wd = mx + metrics.actualBoundingBoxRight;
        const m_ht = my + metrics.actualBoundingBoxDescent;

        const ox = (rows - m_wd) * 0.5 - mx;
        const oy = (cols - m_ht) * 0.5 - my;
        
        ctx.save();
        ctx.translate(ox, oy);
        ctx.translate(unit * 0.5, unit * 0.5);
        
        // ctx.beginPath();
        // ctx.rect(mx, my, m_wd, w_ht);
        // ctx.strokeStyle = 'yellow';
        // ctx.stroke();
        
        ctx.fillText(name, -12.5, 78);
        // ctx.fillText(name, 0, 0);
        ctx.restore();
        ctx.drawImage(typeCnv, 0, 0);

        const typeData = ctx.getImageData(0, 0, rows, cols).data;
        // console.log(typeData);

        for (let i = 0; i < cells; i++) {
            let cl, rw, ax, by;
            cl = i % cols;
            rw = Math.floor(i / cl);
            ax = cl * unit;
            by = rw * unit;
            
            let red, green, blue;
            red = typeData[i * 4];
            green = typeData[i * 4 + 1];
            blue = typeData[i * 4 + 2];
            ctx.fillStyle = `rgb(${red}, ${green}, ${blue}`;
            
            ctx.save();
            ctx.translate(ax, by);
            ctx.beginPath();
            // ctx.arc(0, 0, unit * .5, 0, Math.PI * 2);
            ctx.fill();
            
            // ctx.fillRect(0, 0, unit, unit);
            // ctx.translate(0, 0)
            ctx.restore();
        }
        

    };
};


    const whenKeyUp = (a) => {
        name = a.key.toUpperCase()
        manager.render()
    }
    document.addEventListener('keyup', whenKeyUp);

    const start = async () => {
        manager = await canvasSketch(sketch, settings);
    }

    start();

// let j_url = 'https://bit.ly/3sPng8j';
    
    // let loadSomeJorjaImage = (j_url) => {
    //     return new Promise((reject, resolve) => {
    //         const j_img = new Image();
    //         j_img.onload = () => resolve(j_img);
    //         img.onerror = () => reject();
    //         j_img.src = j_url;
    //     })
    // };


    // const show = () => {
    //     loadSomeJorjaImage(j_url).then(j_img => {
    //         console.log("Jorja width: " + j_img.width)
    //     });
    //     console.log("why did this print first?");
    // }

    // show();

    // const show = async () => {
    //     const j_img = await loadSomeJorjaImage(j_url);
    //     console.log("Jmoney width: " + j_img.width)
    //     console.log('why did this come second');
    // };