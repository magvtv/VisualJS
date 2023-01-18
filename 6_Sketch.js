
import random from 'canvas-sketch-util/random';
import canvasSketch from 'canvas-sketch'
// import WebFont from 'webfontloader';

const settings = {
    dimensions: [1440, 1440]
}

let letter = "H", manager;
let fontSize = 200
let fontFamily = 'Playfair Display, serif'
const typeCnv = document.createElement('canvas')
const typeCtx = typeCnv.getContext('2d')

const sketch = ({ context, width, height }) => {
    const unit = 25
    let columns = Math.floor(width / unit);
    let rows = Math.floor(height / unit);
    const numUnits = columns * rows;

    typeCnv.width = columns
    typeCnv.height = rows


    return ({ context, width, height }) => {
        typeCtx.fillStyle = "#152614";
        typeCtx.fillRect(0, 0, columns, rows)

        fontSize = columns

        typeCtx.fillStyle = "#B5DFCA"
        typeCtx.font = ` ${fontSize}px ${fontFamily}`
        typeCtx.textBaseline = "middle"
        typeCtx.textAlign = "center"

        const metrics = typeCtx.measureText(letter)
        // console.log(metrics);
        const mx = metrics.actualBoundingBoxLeft * -1
        const my = metrics.actualBoundingBoxAscent * -1
        const mw = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight
        const mh = metrics.actualBoundingBoxDescent + metrics.actualBoundingBoxAscent

        
        const ox = ((columns- mw) * .5) - mx
        const oy = ((rows - mh) * .5) - my

        typeCtx.save()
        typeCtx.translate(ox, oy)

        typeCtx.beginPath()
        // typeCtx.rect(mx, my, mw, mh)
        typeCtx.stroke()

        typeCtx.fillText(letter, 0, 0)
        typeCtx.restore()

        const typeData = typeCtx.getImageData(0, 0, columns, rows).data

        
        context.fillStyle = "#152614"
        context.fillRect(0, 0, width, height)
        context.textBaseline = "middle"
        context.textAlign = "center"

        // context.drawImage(typeCnv, 0, 0)
        
        for (let i = 0; i < numUnits; i++) {
            let cl, rw, ax, by;
            cl = i % columns;
            rw = Math.floor(i / columns);
            ax = cl * unit;
            by = rw * unit;


            let red, green, blue, alpha;
            red = typeData[i * 4];
            green = typeData[(i * 4) + 1];
            blue = typeData[(i * 4) + 2];
            // alpha = typeData[(i * 4) + 3];
            // context.fillStyle = `rgba(${red}, ${green}, ${blue})`
            context.fillStyle = "#B5DFCA"

            const glyph = getGlyph(red)
            context.font = `${unit * 2}px ${fontFamily}`
            if (Math.random() < .15)
                context.font = `${unit * 5}px ${fontFamily}`
            
            context.save();
            context.translate(ax, by);
            context.translate(unit * .5, unit * .5)

            context.fillText(glyph, 0, 0)

            // context.fillRect(0, 0, unit, unit);
            context.restore();
        }
    }
}

// canvasSketch(sketch, settings)

const keyPress = (a) => {
    letter = a.key.toUpperCase()
    manager.render()
}

const start = async () => {
    document.addEventListener('keyup', keyPress);
    manager = await canvasSketch(sketch, settings);
}
start()

const getGlyph = (x) => {

    let randomGlyphs = '*,.^$#+-=/;<>'.split('')
    if (x < 25) 
        return ''
    if (x < 50)
        return ">"
    if (x < 100)
        return "!"
    // if (x < 125) 
    //     return "-"
    // if (x < 150)
    //     return "+"
    // if (x < 175) 
    //     return "!"
    // if (x < 200)
    //     return "*"
    // if (x < 225)
    //     return "#"
    // if (x < 250)
    //     return "&"
    
    return random.pick(randomGlyphs)
}