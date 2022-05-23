//Import type and context.

import { canvasImage, collision } from "./globals";
import { ctx } from "./canvas";

//Serves as our offset multiplier for clearing the image to avoid artifacts.
const clearMod: number = 2;

//Draws a simple canvas image with no animations.
export const drawCanvasImage = (object: canvasImage) => {
	ctx.clearRect(
		object.x - object.sizex / clearMod,
		object.y - object.sizey / clearMod,
		object.sizex * clearMod,
		object.sizey * clearMod
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
		object.x - object.sizex / clearMod,
		object.y - object.sizey / clearMod,
		object.sizex * clearMod,
		object.sizey * clearMod
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

/*
Handles world collisions for an object. 
left top right and bottom should be 0, 0, canvas.width, canvas.height. 
resetvx and vy is how fast we want it to move after resetting. 
resetMod is an offset to avoid errors.
*/
export const worldCollisionDetection = (object: canvasImage, left: number, top: number, right: number, bottom: number, resetvx: number, resetvy: number, resetMod: number) => {
	if (object.y > (bottom)) {
		object.y = top + resetMod;
		object.vy = resetvy;
	}

	if (object.x < left) {
		object.x = right - resetMod;
		object.vx = -resetvx;
	} //Flips vx to avoid running into infinitely teleporting back and forth.

	if (object.x > right) {
		object.x = left + resetMod;
		object.vx = resetvx;
	}

	if (object.y < top) {
		object.y = bottom - resetMod;
		object.vy = -resetvy;
	}//Same as left collision.
}

export const objectCollisionDetection = (object1: collision, object2: collision) => {
	let colliding = false;
	
	if (object1.leftCollision == object2.rightCollision) {
		colliding = true;
	}
	else if (object1.rightCollision == object2.leftCollision) {
		colliding = true;
	}
	else if (object1.topCollision == object2.bottomCollision) {
		colliding = true;
	}
	else if (object1.bottomCollision == object2.topCollision) {
		colliding = true;
	}
	return colliding;
}