import {imageList} from "./images";

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

//Making a collision type for more accurate collision detection and handling.
export type collision = {
	leftCollision: number,
	topCollision: number,
	rightCollision: number,
	bottomCollision: number,
	colliding: boolean,
};
const angel: canvasImage = {
	x: defPos,
	y: defPos,
	vx: defMoveSpeed,
	vy: defMoveSpeed,
	sizex: defSize,
	sizey: defSize,
	image: imageList[0],
};

const blueCoin: canvasImage = {
	x: defPos,
	y: defPos,
	vx: defMoveSpeed,
	vy: defMoveSpeed,
	sizex: defSize,
	sizey: defSize,
	image: imageList[1],
};

const cat: canvasImage = {
	x: defPos,
	y: defPos,
	vx: defMoveSpeed,
	vy: defMoveSpeed,
	sizex: defSize,
	sizey: defSize,
	image: imageList[2],
};

const goldCoin: canvasImage = {
	x: defPos,
	y: defPos,
	vx: defMoveSpeed,
	vy: defMoveSpeed,
	sizex: defSize,
	sizey: defSize,
	image: imageList[3],
};

const greenCoin: canvasImage = {
	x: defPos,
	y: defPos,
	vx: defMoveSpeed,
	vy: defMoveSpeed,
	sizex: defSize,
	sizey: defSize,
	image: imageList[4],
};

const muscle: canvasImage = {
	x: defPos,
	y: defPos,
	vx: defMoveSpeed,
	vy: defMoveSpeed,
	sizex: defSize,
	sizey: defSize,
	image: imageList[5],
};

const pinkCoin: canvasImage = {
	x: defPos,
	y: defPos,
	vx: defMoveSpeed,
	vy: defMoveSpeed,
	sizex: defSize,
	sizey: defSize,
	image: imageList[6],
};

const shark: canvasImage = {
	x: defPos,
	y: defPos,
	vx: defMoveSpeed,
	vy: defMoveSpeed,
	sizex: defSize,
	sizey: defSize,
	image: imageList[7],
};

const silverCoin: canvasImage = {
	x: defPos,
	y: defPos,
	vx: defMoveSpeed,
	vy: defMoveSpeed,
	sizex: defSize,
	sizey: defSize,
	image: imageList[8],
};

const angelCollision: collision = {
	leftCollision: angel.x,
	topCollision: angel.y,
	rightCollision: angel.x + angel.sizex,
	bottomCollision: angel.y + angel.sizey,
	colliding: false,
};

const blueCollision: collision = {
	leftCollision: blueCoin.x,
	topCollision: blueCoin.y,
	rightCollision: blueCoin.x + blueCoin.sizex,
	bottomCollision: blueCoin.y + blueCoin.sizey,
	colliding: false,
};

const catCollision: collision = {
	leftCollision: cat.x,
	topCollision: cat.y,
	rightCollision: cat.x + cat.sizex,
	bottomCollision: cat.y + cat.sizey,
	colliding: false,
};

const goldCollision: collision = {
	leftCollision: goldCoin.x,
	topCollision: goldCoin.y,
	rightCollision: goldCoin.x + goldCoin.sizex,
	bottomCollision: goldCoin.y + goldCoin.sizey,
	colliding: false,
};

const greenCollision: collision = {
	leftCollision: greenCoin.x,
	topCollision: greenCoin.y,
	rightCollision: greenCoin.x + greenCoin.sizex,
	bottomCollision: greenCoin.y + greenCoin.sizey,
	colliding: false,
};

const muscleCollision: collision = {
	leftCollision: muscle.x,
	topCollision: muscle.y,
	rightCollision: muscle.x + muscle.sizex,
	bottomCollision: muscle.y + muscle.sizey,
	colliding: false,
};

const pinkCollision: collision = {
	leftCollision: pinkCoin.x,
	topCollision: pinkCoin.y,
	rightCollision: pinkCoin.x + pinkCoin.sizex,
	bottomCollision: pinkCoin.y + pinkCoin.sizey,
	colliding: false,
};

const sharkCollision: collision = {
	leftCollision: shark.x,
	topCollision: shark.y,
	rightCollision: shark.x + shark.sizex,
	bottomCollision: shark.y + shark.sizey,
	colliding: false,
};

const silverCollision: collision = {
	leftCollision: silverCoin.x,
	topCollision: silverCoin.y,
	rightCollision: silverCoin.x + silverCoin.sizex,
	bottomCollision: silverCoin.y + silverCoin.sizey,
	colliding: false,
};

export const objectList: canvasImage[] = [
	angel,
	blueCoin,
	cat,
	goldCoin,
	greenCoin,
	muscle,
	pinkCoin,
	shark,
	silverCoin
];

export const collisionList: collision[] = [
	angelCollision,
	blueCollision,
	catCollision,
	goldCollision,
	greenCollision,
	muscleCollision,
	pinkCollision,
	sharkCollision,
	silverCollision
]