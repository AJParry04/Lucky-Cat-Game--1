import {drawCanvasImage, drawCanvasSprite} from '../utilities'
import {imageMap} from '../images'
import {objectMap} from '../globals'
import {ctx} from '../canvas'

imageMap.catImage.addEventListener("load", () => {
	drawCanvasSprite(objectMap.cat, 64, 0);
})

const updateCat = (elapsed: number) => {
	
}

export function moveCat (elapsed:number){
  
}

/*
let startTime = null

function animateCat(timestamp: number = 0) {
  let elapsed;
  if (timestamp) {
    if (!startTime) {
      startTime = timestamp;
      elapsed = 0;
    } else {
      elapsed = timestamp - startTime
      startTime = timestamp;
    }
    //Move(elapsed); //plug in move code here
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCanvasSprite();
  requestAnimationFrame(animate)
}

requestAnimationFrame(animate)
*/