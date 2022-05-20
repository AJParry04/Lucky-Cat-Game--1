import {drawObjects} from './cat/controls'

export let app = document.querySelector('#app');
export let canvas = document.createElement('canvas');
app.appendChild(canvas);
export let ctx = canvas.getContext('2d');

canvas.width = 1920;
canvas.height = 1080;
canvas.style.width = 'calc(min(192vw,192vh)/2)';
canvas.style.height = 'calc(min(54vw,54vh))';
canvas.style.border = '5px solid gold'

let startTime = null;

function animate(timestamp: number = 0) {
  let elapsed;
  if (timestamp) {
    if (!startTime) {
      startTime = timestamp;
      elapsed = 0;
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
