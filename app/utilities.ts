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
*/
export const worldCollisionDetection = (object: collision, left: number, top: number, right: number, bottom: number) => {
	let colliding = false;
	if (object.bottomCollision >= bottom) {
		colliding = true;
	}

	else if (object.leftCollision <= left) {
		colliding = true;
	}

	else if (object.rightCollision >= right) {
		colliding = true;
	}

	else if (object.topCollision < top) {
		colliding = true;
	}
	return colliding;
}
//Experimental object collision, more than likely does not work.
export const objectCollisionDetection = (object1: collision, object2: collision) => {
	let colliding = false;
	
	if (object1.leftCollision >= object2.rightCollision)(object1.topCollision <= object2.bottomCollision) {
		colliding = true;
	}
	else if (object1.rightCollision <= object2.leftCollision)(object1.topCollision <= object2.bottomCollision) {
		colliding = true;
	}
	else if (object1.leftCollision >= object2.rightCollision)(object1.bottomCollision >= object2.topCollision) {
		colliding = true;
	}
	else if (object1.rightCollision <= object2.leftCollision)(object1.bottomCollision >= object2.topCollision) {
		colliding = true;
	}
	return colliding;
}