// SKETCH TYPE
import canvasSketch from 'canvas-sketch';
// const WebFont = require('webfontloader');
let manager;

const settings = {
    dimensions: [1440, 1440]
};

let name = 'P';
let fontSize = 90;
let fontFamily = "serif";

let typeCnv = document.createElement('canvas');
let ctx = typeCnv.getContext('2d');

const sketch = ({ context, width, height }) => {
    const unit = 20;
    let columns = Math.floor(width / unit);
    let rows = Math.floor(height / unit);
    const numUnits = columns * rows;
    
    typeCnv.width = columns;
    typeCnv.height = rows;
    return ({ context: ctx, width: columns, height: rows}) => {        
        // ctx.fillStyle = '#232E21';
        ctx.fillStyle = 'black';
        // ctx.fillStyle = 'goldenrod';
        ctx.fillRect(0, 0, columns, rows);

        ctx.fillStyle = '#B2ECE1';
        fontSize = columns;
        ctx.font = `${fontSize}px ${fontFamily}`;
        ctx.textBaseline = 'top';


        const metrics = ctx.measureText(name);
        // console.log(metrics);
        const mx = metrics.actualBoundingBoxLeft * -1;
        const my = metrics.actualBoundingBoxAscent * -1;
        const m_wd = (-mx) + metrics.actualBoundingBoxRight;
        const m_ht = (-my) + metrics.actualBoundingBoxDescent;

        const ox = (columns - m_wd) * 0.5 - mx;
        const oy = (rows - m_ht) * 0.5 - my;

        ctx.save();
        ctx.translate(ox, oy);
        ctx.strokeStyle = "#B2ECE1";
        ctx.beginPath();
        ctx.rect(mx, my, m_wd, m_ht)
        ctx.translate(unit * 0.5, unit * 0.5);
        ctx.fillText(name, 0, 0);
        ctx.stroke();
        ctx.restore();
        
        
        const typeData = ctx.getImageData(0, 0, columns, rows).data;
        context.drawImage(typeCnv, 0, 0);
        // console.log(typeData);
        
        for (let i = 0; i < numUnits; i++) {
            let cl, rw, ax, by;
            cl = i % columns;
            rw = Math.floor(i / columns);
            ax = cl * unit;
            by = rw * unit;
            
            context.save();
            context.translate(by, ax);
            context.fillRect(0, 0, unit, unit);
            context.restore();
            
            
            let red, green, blue, alpha;
            red = typeData[i * 4];
            green = typeData[(i * 4) + 1];
            blue = typeData[(i * 4)+ 2];
            alpha = typeData[(i * 4) + 3];
            ctx.fillStyle = `rgb(${red}, ${green}, ${blue}, ${alpha})`;
            // ctx.beginPath();
            // ctx.arc(0, 0, unit * .5, 0, Math.PI * 2);
            // ctx.fill();
            
        }
    };
};


const keyPress = (a) => {
    name = a.key.toUpperCase()
    manager.render()
}
document.addEventListener('keydown', keyPress);

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