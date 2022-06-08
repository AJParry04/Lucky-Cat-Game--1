import { objectMap, goldCoin, canvasImage, } from "../globals"
import { drawCanvasImageNoClear } from "../utilities"
import { objectCollisionDetection, getDistance } from "../utilities"
import { collisionMap } from "../globals"

objectMap.goldCoin.x = 500;
objectMap.goldCoin.y = 700 + Math.random() * 1400 - 700;

export function drawCoins(elasped: number) {
  [
    drawGoldCoin(elasped),
    drawBlueCoin(elasped),
    drawGreenCoin(elasped),
    drawPinkCoin(elasped),
    drawSilverCoin(elasped),
  ]
  if (goldCoin.x < -70) {
    goldCoin.x = 500
    goldCoin.y = 700 + Math.random() * 1400 - 700;
  }
}

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

export function moveCoin(elapsed: number) {
  objectMap.goldCoin.vx = -200;
  objectMap.pinkCoin.vx = -200;
  objectMap.greenCoin.vx = -200;
  objectMap.blueCoin.vx = -200;
  objectMap.silverCoin.vx = -200;
  [
    goldCoin.x += (goldCoin.vx * elapsed / 1000),
    objectMap.pinkCoin.x += (objectMap.pinkCoin.vx * elapsed / 1000),
    objectMap.silverCoin.x += (objectMap.silverCoin.vx * elapsed / 1000),
    objectMap.greenCoin.x += (objectMap.greenCoin.vx * elapsed / 1000),
    objectMap.blueCoin.x += (objectMap.blueCoin.vx * elapsed / 1000)
  ]
}

export function collideWithCat(object1: canvasImage, object2: canvasImage, width1, width2, height1, height2) {
  const coinWidth: number = object1.x + width1
  const coinHeight: number = object1.y + height1
  const catWidth: number = object2.x + width2
  const catHeight: number = object2.y + height2

  const coinCenter = {
    x: coinWidth,
    y: coinHeight
  }
  const catCenter = {
    x: catWidth,
    y: catHeight
  }

  if (getDistance(coinCenter, catCenter) < 8) {
    object1.x = 500
  }
}