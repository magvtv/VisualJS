# Course 2: Creative Coding Sketches

---

- Sketches using `canvas-sketch`, utilities, and optional UI via `tweakpane`.
- This package has its own `package.json`, so install and run from this folder.

---

## Setup

- Install Node.js (LTS).
- From this directory:

```bash
npm install
```

This installs:
- `canvas-sketch`
- `canvas-sketch-util`
- `tweakpane`

## Run an existing sketch

Example: open the `prism-skewing` sketch in a browser window.

```bash
npx canvas-sketch prism-skewing/index.js --open
```

Common flags:
- `--open`: open default browser
- `--hot`: enable hot reload

## Create a new sketch

Create a starter file in this folder (or a subfolder):

```bash
npx canvas-sketch new-sketch.js --new
# or inside a new folder
npx canvas-sketch experiments/Sketch_1.js --new
```

Then run it:

```bash
npx canvas-sketch experiments/Sketch_1.js --open
```

## Project structure

- `prism-skewing/` — contains `index.js` for the prism/skewing experiment
- `package.json` — local dependencies for this course
- `.gitignore` — ignores `node_modules/` and lockfile

## Notes

- Press space in an active sketch window to re-render if supported by the sketch.
- Dimensions and other parameters are set in each sketch via its `settings` object.

