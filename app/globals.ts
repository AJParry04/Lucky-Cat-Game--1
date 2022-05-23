import {catImage, goldCoinImage} from "./images";

const defMoveSpeed: number = 10;
const defSize: number = 64;
const defPos: number = 0;

//Making our own type for a canvas image.
export type canvasImage = {
	x: number,
	y: number,
	vx: number,
	vy: number,
	sizex: number,
	sizey: number,
	image: HTMLImageElement,
};

export const cat: canvasImage = {
	x: defPos,
	y: defPos,
	vx: defMoveSpeed,
	vy: defMoveSpeed,
	sizex: defSize,
	sizey: defSize,
	image: catImage,
};

export const goldCoin: canvasImage = {
	x: defPos,
	y: defPos, 
	vx: defMoveSpeed,
	vy: defMoveSpeed,
	sizex: defSize,
	sizey: defSize,
	image: goldCoinImage,
};