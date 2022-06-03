import {objectMap, goldCoin} from "../globals"
import {drawCanvasImageNoClear} from "../utilities"


objectMap.goldCoin.x = 500;
objectMap.goldCoin.y = 500;

export function drawGoldCoin(elasped: number) {
    drawCanvasImageNoClear(objectMap.goldCoin);
}

export function moveCoin (elapsed:number) {
      objectMap.goldCoin.vx = -50;
     console.log(goldCoin.vx);
  goldCoin.x += (goldCoin.vx * elapsed / 1000)
}