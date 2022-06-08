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

export const angel: canvasImage = {
  x: defPosX,
  y: defPosY,
  vx: defMoveSpeed,
  vy: defMoveSpeed,
  sizex: defSize,
  sizey: defSize,
  image: imageMap.angelImage,
};

export const blueCoin: canvasImage = {
  x: defPosX,
  y: defPosY,
  vx: defMoveSpeed,
  vy: defMoveSpeed,
  sizex: defSize,
  sizey: defSize,
  image: imageMap.blueCoinImage,
};

export const cat: canvasImage = {
  x: defPos,
  y: defPos,
  vx: defMoveSpeed,
  vy: defMoveSpeed,
  sizex: defSize,
  sizey: defSize,
  image: imageMap.catImage,
  scale: 4.5,
};

export const goldCoin: canvasImage = {
  x: defPosX,
  y: defPosY,
  vx: defMoveSpeed,
  vy: defMoveSpeed,
  sizex: defSize,
  sizey: defSize,
  image: imageMap.goldCoinImage,
};

export const greenCoin: canvasImage = {
  x: defPosX,
  y: defPosY,
  vx: defMoveSpeed,
  vy: defMoveSpeed,
  sizex: defSize,
  sizey: defSize,
  image: imageMap.greenCoinImage,
};

export const muscle: canvasImage = {
  x: defPosX,
  y: defPosY,
  vx: defMoveSpeed,
  vy: defMoveSpeed,
  sizex: defSize,
  sizey: defSize,
  image: imageMap.muscleImage,
};

export const pinkCoin: canvasImage = {
  x: defPosX,
  y: defPosY,
  vx: defMoveSpeed,
  vy: defMoveSpeed,
  sizex: defSize,
  sizey: defSize,
  image: imageMap.pinkCoinImage,
};

export const shark: canvasImage = {
  x: defPosX,
  y: defPosY,
  vx: defMoveSpeed,
  vy: defMoveSpeed,
  sizex: defSize,
  sizey: defSize,
  image: imageMap.sharkImage,
};

export const silverCoin: canvasImage = {
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
  cat,
  goldCoin,
  greenCoin,
  muscle,
  pinkCoin,
  shark,
  silverCoin
};