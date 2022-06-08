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

export function collideObjects(object1: canvasImage, object2: canvasImage) {
  const coinWidth: number = object1.x + object1.sizex/2
  const coinHeight: number = object1.y + object1.sizey/2
  const catWidth: number = object2.x + object2.sizex/2
  const catHeight: number = object2.y + object2.sizey/2

  function getCenter (o) {
    return {
      x: o.x + (o.sizex * (o.scale||1)/2),
      y: o.y + (o.sizey * (o.scale||1)/2),
    }  
  }
  
  
  const object1Center = getCenter(object1);
  const object2Center = getCenter(object2)

  if (getDistance(object1Center, object2Center) < 128) {
    object2.x = 500
  }
}

export function coinCollisionWithCat() {
  collideObjects(objectMap.cat, objectMap.goldCoin)
  collideObjects(objectMap.cat, objectMap.pinkCoin)
  collideObjects(objectMap.cat, objectMap.blueCoin)
  collideObjects(objectMap.cat, objectMap.silverCoin)
  collideObjects(objectMap.cat, objectMap.greenCoin) 
}
