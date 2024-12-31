# opencv-js

> forked from https://github.com/TechStark/opencv-js

OpenCV JavaScript version (NPM package) for node.js or browser, with TypeScript support.

## Features

- Independent WASM file for smaller bundle size
- Async `loadOpenCV()` method to control WASM loading
- Specify custom WASM file location
- Full TypeScript support

## Installation

```bash
npm install @dusion/opencv-js
# or
yarn add @dusion/opencv-js
```

## Usage

```js
import cv from "@dusion/opencv-js"

// Load from URL
await cv.loadOpenCV('/path/to/opencv.wasm')

// Or load from ArrayBuffer
const response = await fetch('/path/to/opencv.wasm');
const wasmBinary = await response.arrayBuffer();
await cv.loadOpenCV(wasmBinary)

// Then use OpenCV APIs
const mat = new cv.Mat()
```

## API Reference

For available OpenCV.js APIs, please refer to:
- [OpenCV.js Tutorials](https://docs.opencv.org/4.10.0/d5/d10/tutorial_js_root.html)
- [Runtime API list](doc/cvKeys.json)
