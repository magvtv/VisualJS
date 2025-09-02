# Visuals JS: Creative Coding

---

- Basics on HTML Canvas and creative sketches of my own. More of just creatively coding and learning about canvas-sketch.
- Learning from some domestika course (majorly on the part one of the series).
- Need to learn more about canvas-sketch (the library)

---

## Jumping back to code after long time

> canvas-sketch Sketch_N.js --new
---

## Setup

- Install Node.js (LTS) if you don't have it.
- Install the Canvas Sketch CLI globally or use it via npx.

### Option A: Global install

```bash
npm install -g canvas-sketch-cli
```

Run a sketch:

```bash
canvas-sketch Sketches/clockWork.js --open
```

Create a new sketch:

```bash
canvas-sketch Sketches/Sketch_N.js --new
```

### Option B: Local (no global install)

```bash
# from project root
npm init -y
npm install --save-dev canvas-sketch-cli canvas-sketch canvas-sketch-util
```

Run a sketch:

```bash
npx canvas-sketch Sketches/clockWork.js --open
```

Create a new sketch:

```bash
npx canvas-sketch Sketches/Sketch_N.js --new
```

## Project structure

- `Sketches/` — individual sketches, e.g., `clockWork.js`

## Notes

- Press space while a sketch window is focused to re-render (if supported by the sketch).
- Dimensions and settings are controlled inside each sketch file via the exported `settings` object.
