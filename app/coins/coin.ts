import { objectMap, canvasImage, } from "../globals";
import { drawCanvasImageNoClear, getDistance } from "../utilities";
import { plusNumber, updateScore } from "../status/score";

const startingPosX: number = 500;
const startingPosY: number = 700;
const cutoff: number = -50;

let speedlow: number = -200;
let speedmid: number = -300;
let speedhigh: number = -500;
const ms: number = 1000;

export function drawCoins() {
  drawCanvasImageNoClear(objectMap.goldCoin);
  drawCanvasImageNoClear(objectMap.greenCoin);
  drawCanvasImageNoClear(objectMap.blueCoin);
  drawCanvasImageNoClear(objectMap.pinkCoin);
  drawCanvasImageNoClear(objectMap.silverCoin);
}

export function teleportCoin(coin:canvasImage, posx: number, posy: number) {
  coin.x = posx + (Math.random() * (posx*2));
  coin.y = posy + Math.random() * (posy*2) - posy;
}

function teleportConditionally(coin:canvasImage, posx: number, posy: number, cutoff: number) {
  if (coin.x > cutoff) { return;} 
  coin.x = posx + (Math.random() * (posx*2));
  coin.y = posy + Math.random() * (posy*2) - posy;
}

export function teleportAllConditionally() {
  teleportConditionally(objectMap.goldCoin, startingPosX, startingPosY, cutoff);
  teleportConditionally(objectMap.greenCoin, startingPosX, startingPosY, cutoff);
  teleportConditionally(objectMap.blueCoin, startingPosX, startingPosY, cutoff);
  teleportConditionally(objectMap.silverCoin, startingPosX, startingPosY, cutoff);
  teleportConditionally(objectMap.pinkCoin, startingPosX, startingPosY, cutoff);
  teleportConditionally(objectMap.brownDog, startingPosX, startingPosY, cutoff);
  teleportConditionally(objectMap.whiteDog, startingPosX, startingPosY, cutoff);
}

function moveCoin(elapsed: number, coin: canvasImage, speed: number, ms: number) {
  coin.vx = speed;
  coin.x += (coin.vx * elapsed / ms);
}

export function moveCoins(elapsed: number) {
  const mult = 1 + updateScore()/100;
  
  moveCoin(elapsed, objectMap.goldCoin, speedhigh * mult, ms);
  moveCoin(elapsed, objectMap.pinkCoin, speedlow * mult, ms);
  moveCoin(elapsed, objectMap.greenCoin, speedlow * mult, ms);
  moveCoin(elapsed, objectMap.blueCoin, speedlow * mult, ms);
  moveCoin(elapsed, objectMap.silverCoin, speedmid * mult, ms);
  moveCoin(elapsed, objectMap.brownDog, speedlow * mult, ms);
  moveCoin(elapsed, objectMap.whiteDog, speedmid * mult, ms);
}

function collideObjects(object1: canvasImage, object2: canvasImage, number: number) {
  function getCenter (o: canvasImage) {
    return {
      x: o.x + (o.sizex * (o.scale||1)/2),
      y: o.y + (o.sizey * (o.scale||1)/2),
    }  
  }
  
  const object1Center = getCenter(object1);
  const object2Center = getCenter(object2);
  if (getDistance(object1Center, object2Center) > 128) { return; }
  
  const mult = 1 + updateScore()/300;
  teleportCoin(object2, startingPosX, startingPosY);
  plusNumber(number * mult);
}

export function coinCollisionWithCat() {
  collideObjects(objectMap.cat, objectMap.goldCoin, 5);
  collideObjects(objectMap.cat, objectMap.pinkCoin, 1);
  collideObjects(objectMap.cat, objectMap.blueCoin, 1);
  collideObjects(objectMap.cat, objectMap.silverCoin, 3);
  collideObjects(objectMap.cat, objectMap.greenCoin, 1); 
  collideObjects(objectMap.cat, objectMap.brownDog, -5);
  collideObjects(objectMap.cat, objectMap.whiteDog, -10);
}
