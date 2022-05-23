import { catImage, goldCoinImage } from "./images";

//Default values to fallback on.
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

export type collision = {
	leftCollision: number,
	topCollision: number,
	rightCollision: number,
	bottomCollision: number,
	colliding: boolean,
}

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

export const catCollision: collision = {
	leftCollision: cat.x,
	topCollision: cat.y,
	rightCollision: cat.x + cat.sizex,
	bottomCollision: cat.y + cat.sizey,
	colliding: false,
}

export const goldCollision: collision = {
	leftCollision: goldCoin.x,
	topCollision: goldCoin.y,
	rightCollision: goldCoin.x + goldCoin.sizex,
	bottomCollision: goldCoin.y + goldCoin.sizey,
	colliding: false,
}