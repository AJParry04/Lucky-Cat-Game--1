import {canvasImage} from "./globals";
import {ctx} from "./canvas";

const clearMod: number = 2;

//Draws a simple canvas image with no animations.
export const drawCanvasImage = (object: canvasImage) => {
	ctx.clearRect(
		object.x - object.sizex/clearMod,
		object.y - object.sizey/clearMod,
		object.sizex*clearMod,
		object.sizey*clearMod
	); //Clear around the object.
	
	ctx.drawImage(
		object.image,
		object.x,
		object.y,
		object.sizex,
		object.sizey
	); //Draw the object
};

//Draws a sprite sheet with inputs for the panning width and height.
export const drawCanvasSprite = (object: canvasImage, panw: number, panh: number) => {
	ctx.clearRect(
		object.x - object.sizex/clearMod,
		object.y - object.sizey/clearMod,
		object.sizex*clearMod,
		object.sizey*clearMod
	); //Clear around the object.
	
	ctx.drawImage(
		object.image,
		panw,
		panh,
		object.sizex,
		object.sizey,
		object.x,
		object.y,
		object.sizex, 					
		object.sizey
	); //Draws sprite.
};

export const worldCollisionDetection = (
	object: canvasImage,
	bottom: number,
	left: number,
	right: number,
	top: number,
	resetvx: number,
	resetvy: number,
	resetMod: number) => {
	if (object.y > (bottom)) {
		object.y = top + resetMod;
		object.vy = resetvy;
	} //Reset to top + modifier to avoid errors.

	if (object.x < left) {
		object.x = right - resetMod;
		object.vx = -resetvx;
	}

	if (object.x > right) {
		object.x = left + resetMod;
		object.vx = resetvx;
	}

	if (object.y < top) {
		object.y = bottom - resetMod;
		object.vy = -resetvy;
	}
}