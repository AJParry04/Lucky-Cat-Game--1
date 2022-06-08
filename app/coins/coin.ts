import { objectMap, canvasImage, } from "../globals";
import { drawCanvasImageNoClear, getDistance } from "../utilities";

const startingPosX: number = 500;
const startingPosY: number = 700;
const cutoff: number = -50;
const speed: number = -200;
const ms: number = 1000;

export function drawCoins() {
  drawCanvasImageNoClear(objectMap.goldCoin);
  drawCanvasImageNoClear(objectMap.greenCoin);
  drawCanvasImageNoClear(objectMap.blueCoin);
  drawCanvasImageNoClear(objectMap.pinkCoin);
  drawCanvasImageNoClear(objectMap.silverCoin);
}

export function teleportCoin(coin:canvasImage, posx: number, posy: number) {
  coin.x = posx;
  coin.y = posy + Math.random() * (posy*2) - posy;
}

export function teleportConditionally(coin:canvasImage, posx: number, posy: number, cutoff: number) {
  if (coin.x < cutoff) {
    coin.x = posx;
    coin.y = posy + Math.random() * (posy*2) - posy;
  }
}

export function teleportAllConditionally() {
  teleportConditionally(objectMap.goldCoin, startingPosX, startingPosY, cutoff)
  teleportConditionally(objectMap.greenCoin, startingPosX, startingPosY, cutoff)
  teleportConditionally(objectMap.blueCoin, startingPosX, startingPosY, cutoff)
  teleportConditionally(objectMap.silverCoin, startingPosX, startingPosY, cutoff)
  teleportConditionally(objectMap.pinkCoin, startingPosX, startingPosY, cutoff)
}

export function moveCoin(elapsed: number, coin: canvasImage, speed: number, ms: number) {
  coin.vx = speed;
  coin.x += (coin.vx * elapsed / ms);
}

export function moveCoins(elapsed: number) {
  moveCoin(elapsed, objectMap.goldCoin, speed, ms);
  moveCoin(elapsed, objectMap.pinkCoin, speed, ms);
  moveCoin(elapsed, objectMap.greenCoin, speed, ms);
  moveCoin(elapsed, objectMap.blueCoin, speed, ms);
  moveCoin(elapsed, objectMap.silverCoin, speed, ms);
}

export function collideObjects(object1: canvasImage, object2: canvasImage) {
  function getCenter (o) {
    return {
      x: o.x + (o.sizex * (o.scale||1)/2),
      y: o.y + (o.sizey * (o.scale||1)/2),
    }  
  }
  
  const object1Center = getCenter(object1);
  const object2Center = getCenter(object2);

  if (getDistance(object1Center, object2Center) < 128) {
    teleportCoin(object2, startingPosX, startingPosY);
  }
}

export function coinCollisionWithCat() {
  collideObjects(objectMap.cat, objectMap.goldCoin)
  collideObjects(objectMap.cat, objectMap.pinkCoin)
  collideObjects(objectMap.cat, objectMap.blueCoin)
  collideObjects(objectMap.cat, objectMap.silverCoin)
  collideObjects(objectMap.cat, objectMap.greenCoin) 
}
