//Simple canvas setup

export const canvas: HTMLCanvasElement = document.createElement("canvas");
export const ctx: CanvasRenderingContext2D = canvas.getContext("2d");

const style: CSSStyleDeclaration = canvas.style;
const app: HTMLDivElement = document.querySelector("#app");

export const width: number = 1000;
export const height: number = 1400;

canvas.width = width;
canvas.height = height;

style.width = `${width}px`;
style.height = `${height}px`;

style.border = '4px';
style.borderColor = 'red';
app.appendChild(canvas);         

// select the item we want -- this assumes we have
// <div id="sprite">
let div = document.querySelector('#background'); 

let frame = 0; // current frame
let nframes = 2000; // number of frames
let size = 10; // size of each frame

function showNextFrame () {
  frame = (frame + 1) % nframes; // add one, loop back to zero
  let offset = frame * size;
  div.style.backgroundPosition = `-${offset}px`;
}

setInterval( // run forever on a timer
  showNextFrame,
  2500 / 12 // 12 times per second
)