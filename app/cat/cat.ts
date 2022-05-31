import { drawCanvasImage, drawCanvasSprite } from '../utilities'
import { imageMap } from '../images'
import { objectMap, cat } from '../globals'
import { ctx } from '../canvas'
import { canvas, height } from '../canvas'


const updateCat = (elapsed: number) => {

}

canvas.addEventListener("mousedown", function(event) {
  gravity = true;
});

canvas.addEventListener("mouseup", function(event) {
  gravity = false;
});

export function moveCat(elapsed: number) {
  if (gravity) {
    cat.vy -= 5;
  } else {
    cat.vy += 5;
  }
  if (cat.y < 0) {
    cat.y = 0
    cat.vy = 0;
  }
//  cat.scale += 0.01;
  let maxheight = canvas.height - (cat.sizey*cat.scale)
  if (cat.y > maxheight) {
    cat.y = maxheight
    cat.vy = 0
  }
  cat.y += (cat.vy * elapsed / 1000)
  console.log(cat.vy);
}

let gravity = false



let startTime = null

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
    moveCat(elapsed); //plug in move code here
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCanvasSprite(objectMap.cat, 64, 0);
  requestAnimationFrame(animate)
}

requestAnimationFrame(animate)


imageMap.catImage.addEventListener("load", () => {
  drawCanvasSprite(objectMap.cat, 64, 0);
})