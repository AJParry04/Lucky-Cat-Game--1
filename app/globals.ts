import { imageMap } from "./images";

//Default values to fallback on.
const defMoveSpeed: number = 10;
const defSize: number = 64;

const defPos: number = 5;
const defPosY: number = 700 + Math.random() * 1400 - 700;;
const defPosX: number = 500

//Making our own type for a canvas image.
export type canvasImage = {
  x: number,
  y: number,
  vx: number,
  vy: number,
  sizex: number,
  sizey: number,
  image: HTMLImageElement,
  scale?: number
};

const angel: canvasImage = {
  x: defPosX,
  y: defPosY,
  vx: defMoveSpeed,
  vy: defMoveSpeed,
  sizex: defSize,
  sizey: defSize,
  image: imageMap.angelImage,
};

const blueCoin: canvasImage = {
  x: defPosX,
  y: defPosY,
  vx: defMoveSpeed,
  vy: defMoveSpeed,
  sizex: defSize,
  sizey: defSize,
  image: imageMap.blueCoinImage,
};

const brownDog: canvasImage = {
  x: defPosX,
  y: defPosY,
  vx: defMoveSpeed,
  vy: defMoveSpeed,
  sizex: defSize,
  sizey: defSize,
  image: imageMap.brownDogImage,
  scale: 2.5
}

const cat: canvasImage = {
  x: defPos,
  y: defPos,
  vx: defMoveSpeed,
  vy: defMoveSpeed,
  sizex: defSize,
  sizey: defSize,
  image: imageMap.catImage,
  scale: 4.5,
};

const goldCoin: canvasImage = {
  x: defPosX,
  y: defPosY,
  vx: defMoveSpeed,
  vy: defMoveSpeed,
  sizex: defSize,
  sizey: defSize,
  image: imageMap.goldCoinImage,
};

const greenCoin: canvasImage = {
  x: defPosX,
  y: defPosY,
  vx: defMoveSpeed,
  vy: defMoveSpeed,
  sizex: defSize,
  sizey: defSize,
  image: imageMap.greenCoinImage,
};

const muscle: canvasImage = {
  x: defPosX,
  y: defPosY,
  vx: defMoveSpeed,
  vy: defMoveSpeed,
  sizex: defSize,
  sizey: defSize,
  image: imageMap.muscleImage,
};

const pinkCoin: canvasImage = {
  x: defPosX,
  y: defPosY,
  vx: defMoveSpeed,
  vy: defMoveSpeed,
  sizex: defSize,
  sizey: defSize,
  image: imageMap.pinkCoinImage,
};

const shark: canvasImage = {
  x: defPosX,
  y: defPosY,
  vx: defMoveSpeed,
  vy: defMoveSpeed,
  sizex: defSize,
  sizey: defSize,
  image: imageMap.sharkImage,
};

const silverCoin: canvasImage = {
  x: defPosX,
  y: defPosY,
  vx: defMoveSpeed,
  vy: defMoveSpeed,
  sizex: defSize,
  sizey: defSize,
  image: imageMap.silverCoinImage,
};

export const objectMap = {
  angel,
  blueCoin,
  brownDog,
  cat,
  goldCoin,
  greenCoin,
  muscle,
  pinkCoin,
  shark,
  silverCoin
};