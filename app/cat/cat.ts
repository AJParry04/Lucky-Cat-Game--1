import { drawCanvasSprite, drawCanvasSpriteNoClear } from '../utilities'
import { objectMap, canvasImage } from '../globals';
import { canvas } from '../canvas';
import { teleportAllConditionally, moveCoins, drawCoins, coinCollisionWithCat } from '../coins/coin';
import { plusNumber } from "../status/score"

let gravity: boolean = false;
let startTime = null;
let iterateSlideReel: number = 0;

const cat: canvasImage = objectMap.cat
const maxheight: number = canvas.height - (cat.sizey * cat.scale);

canvas.addEventListener("mousedown", function() {
  gravity = true;
});

canvas.addEventListener("mouseup", function() {
  gravity = false;
});

function catCollision() {
  if (cat.y > 0 && cat.y < maxheight) { return }
  
  if (cat.y < 0) {
    cat.y = 0;
  }
  if (cat.y > maxheight) {
    cat.y = maxheight;
  }
  cat.vy = 0;
  plusNumber(-1);
}
                        
function moveCat(elapsed: number) { 
  catCollision();
  if (gravity) {
    cat.vy -= 30;
  } 
  else {
    cat.vy += 15;
  }
  cat.y += (cat.vy * elapsed / 1000);
  // console.log(cat.vy);
}

function addSlide() {
  iterateSlideReel += 64;
}

function drawSprites() {
  drawCanvasSprite(cat, iterateSlideReel, 0);
  drawCanvasSpriteNoClear(objectMap.brownDog, iterateSlideReel, 0);
  drawCanvasSpriteNoClear(objectMap.whiteDog, iterateSlideReel, 0);
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
  drawSprites();
  drawCoins();
  
  if (iterateSlideReel >= 768) {
    iterateSlideReel = 0;
  }
  
  requestAnimationFrame(animate);
}

setInterval(addSlide, 2500 / 12);
teleportAllConditionally();
requestAnimationFrame(animate);