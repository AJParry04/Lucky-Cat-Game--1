import { drawCanvasImage, drawCanvasSprite } from '../utilities'
import { imageMap } from '../images'
import { objectMap, cat } from '../globals'
import { ctx } from '../canvas'
import { canvas, height } from '../canvas'
import { teleportAllConditionally, moveCoins, drawCoins, coinCollisionWithCat } from '../coins/coin'

canvas.addEventListener("mousedown", function(event) {
  gravity = true;
});

canvas.addEventListener("mouseup", function(event) {
  gravity = false;
});

export function moveCat(elapsed: number) {
  if (gravity) {
    cat.vy -= 15;
  } else {
    cat.vy += 15;
  }
  if (cat.y < 0) {
    cat.y = 0
    cat.vy = 0;
  }
  //  cat.scale += 0.01;
  let maxheight = canvas.height - (cat.sizey * cat.scale)
  if (cat.y > maxheight) {
    cat.y = maxheight
    cat.vy = 0
  }
  cat.y += (cat.vy * elapsed / 1000)
  // console.log(cat.vy);
}

let gravity = false



let startTime = null

let iterateSlideReel = 0;

function addSlide() {
  iterateSlideReel += 64
}

setInterval(addSlide, 2500 / 12);

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
    coinCollisionWithCat()
    teleportAllConditionally()
    moveCat(elapsed); //plug in move code here
    moveCoins(elapsed);
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCanvasSprite(objectMap.cat, iterateSlideReel, 0);
  drawCoins()
  if (iterateSlideReel >= 768) {
    iterateSlideReel = 0;
  }
  requestAnimationFrame(animate);
}
teleportAllConditionally()
requestAnimationFrame(animate);

imageMap.catImage.addEventListener("load", () => {
  drawCanvasSprite(objectMap.cat, iterateSlideReel, 0);
})