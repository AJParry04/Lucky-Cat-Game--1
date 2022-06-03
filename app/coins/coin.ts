import {objectMap, goldCoin} from "../globals"
import {drawCanvasImageNoClear} from "../utilities"


objectMap.goldCoin.x = 500;
objectMap.goldCoin.y = 700 + Math.random ()*1400-700;

export function drawCoins (elasped:number){[
  drawGoldCoin(elasped),
  drawBlueCoin(elasped),
  drawGreenCoin(elasped),
  drawPinkCoin(elasped),
  drawSilverCoin(elasped),
]}

export function drawPinkCoin(elasped: number) {
    drawCanvasImageNoClear(objectMap.pinkCoin);
}

export function drawSilverCoin(elasped: number) {
    drawCanvasImageNoClear(objectMap.silverCoin);
}

export function drawGreenCoin(elasped: number) {
    drawCanvasImageNoClear(objectMap.greenCoin);
}

export function drawBlueCoin(elasped: number) {
    drawCanvasImageNoClear(objectMap.blueCoin);
}

export function drawGoldCoin(elasped: number) {
    drawCanvasImageNoClear(objectMap.goldCoin);
}

export function moveCoin (elapsed:number) {
      objectMap.goldCoin.vx = -200;
     console.log(goldCoin.vx);
  goldCoin.x += (goldCoin.vx * elapsed / 1000)
}

