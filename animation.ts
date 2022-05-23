import {drawObjects} from './cat/controls'

export let app: HTMLDivElement = document.querySelector('#app');
export let canvas: HTMLCanvasElement = document.createElement('canvas');
app.appendChild(canvas);
export let ctx: CanvasRenderingContext2D = canvas.getContext('2d');

canvas.width = 1920;
canvas.height = 1080;
canvas.style.width = 'calc(min(192vw,192vh)/2)';
canvas.style.height = 'calc(min(54vw,54vh))';
canvas.style.border = '5px solid gold'

let startTime: number = 0;

function animate(timestamp: number = 0) {
  let elapsed: number = 0;
  if (timestamp) {
    if (!startTime) {
      startTime = timestamp;
    } else {
      elapsed = timestamp - startTime
      startTime = timestamp;
    }
   // Move(elapsed); //plug in move code here
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawObjects();
  requestAnimationFrame(animate)
}

requestAnimationFrame(animate)
