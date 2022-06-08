import { drawCanvasSprite } from '../utilities'
import { objectMap } from '../globals';
import { ctx, canvas } from '../canvas';
import { teleportAllConditionally, moveCoins, drawCoins, coinCollisionWithCat } from '../coins/coin';

let gravity: boolean = false;
let startTime = null;
let iterateSlideReel: number = 0;

canvas.addEventListener("mousedown", function() {
  gravity = true;
});

canvas.addEventListener("mouseup", function() {
  gravity = false;
});

export function moveCat(elapsed: number) {
  const maxheight: number = canvas.height - (objectMap.cat.sizey * objectMap.cat.scale);
  
  if (gravity) {
    objectMap.cat.vy -= 15;
  } 
  else {
    objectMap.cat.vy += 15;
  }
  
  if (objectMap.cat.y < 0) {
    objectMap.cat.y = 0;
    objectMap.cat.vy = 0;
  }
  
  if (objectMap.cat.y > maxheight) {
    objectMap.cat.y = maxheight;
    objectMap.cat.vy = 0;
  }
  
  objectMap.cat.y += (objectMap.cat.vy * elapsed / 1000);
  // console.log(cat.vy);
}

function addSlide() {
  iterateSlideReel += 64;
}

function animate(timestamp: number = 0) {
  let elapsed: number = 0;
  if (timestamp) {
    if (!startTime) {
      startTime = timestamp;
    } else {
      elapsed = timestamp - startTime;
      startTime = timestamp;
    }
    
    coinCollisionWithCat();
    teleportAllConditionally();
    moveCat(elapsed); //plug in move code here
    moveCoins(elapsed);
  }
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCanvasSprite(objectMap.cat, iterateSlideReel, 0);
  drawCoins();
  
  if (iterateSlideReel >= 768) {
    iterateSlideReel = 0;
  }
  
  requestAnimationFrame(animate);
}

setInterval(addSlide, 2500 / 12);
teleportAllConditionally();
requestAnimationFrame(animate);