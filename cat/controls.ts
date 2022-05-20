import {ctx} from '../animation'
import {catURL} from '../image'

export let cat = {
  x: 50,
y: 0,
vy: 0,
image: catURL
}

export function drawObjects (){
ctx.beginPath();
  ctx.drawImage(
    catURL,
    -23,
    -23,
    64,
    64
  );
  ctx.resetTransform();
}
