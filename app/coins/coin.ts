import {objectMap, goldCoin} from "../globals"
import {drawCanvasImageNoClear} from "../utilities"


objectMap.goldCoin.x = 500;
objectMap.goldCoin.y = 700 + Math.random ()*1400-700;

export function drawGoldCoin(elasped: number) {
    drawCanvasImageNoClear(objectMap.goldCoin);
}

export function moveCoin (elapsed:number) {
      objectMap.goldCoin.vx = -200;
     console.log(goldCoin.vx);
  goldCoin.x += (goldCoin.vx * elapsed / 1000)
}

