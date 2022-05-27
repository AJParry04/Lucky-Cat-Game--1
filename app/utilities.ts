//Import type and context.

import { canvasImage, collision } from "./globals";
import { ctx } from "./canvas";

//Serves as our offset multiplier for clearing the image to avoid artifacts. Not letting others set this as this value has been tried and stays true.
const clearMod: number = 2;

//Draws a simple canvas image with no animations.
export function drawCanvasImage(object: canvasImage) {
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
export function drawCanvasSprite(object: canvasImage, panw: number, panh: number) {
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
Specifically used to only flip one objects colliding switch when colliding with the world.
*/
export function worldCollisionDetection(object: collision, left: number, top: number, right: number, bottom: number) {
	if (object.bottomCollision < bottom) {
		object.colliding = false;
	}

	if (object.leftCollision > left) {
		object.colliding = false;
	}

	if (object.rightCollision < right) {
		object.colliding = false;
	}

	if (object.topCollision > top) {
		object.colliding = false;
	}

	if (object.bottomCollision >= bottom) {
		object.colliding = true;
	}

	if (object.leftCollision <= left) {
		object.colliding = true;
	}

	if (object.rightCollision >= right) {
		object.colliding = true;
	}

	if (object.topCollision <= top) {
		object.colliding = true;
	}
};

//Hopefully working object collision!
export function objectCollisionDetection(object1: collision, object2: collision) {
	if (object1.leftCollision < object2.rightCollision) (object1.topCollision > object2.bottomCollision); {
		object1.colliding = false;
		object2.colliding = false;
	}

	if (object1.rightCollision > object2.leftCollision) (object1.topCollision > object2.bottomCollision); {
		object1.colliding = false;
		object2.colliding = false;
	}

	if (object1.leftCollision < object2.rightCollision) (object1.bottomCollision < object2.topCollision); {
		object1.colliding = false;
		object2.colliding = false;
	}

	if (object1.rightCollision > object2.leftCollision) (object1.bottomCollision < object2.topCollision); {
		object1.colliding = false;
		object2.colliding = false;
	}

	if (object1.leftCollision >= object2.rightCollision) (object1.topCollision <= object2.bottomCollision); {
		object1.colliding = true;
		object2.colliding = true;
	}
	
	if (object1.rightCollision <= object2.leftCollision) (object1.topCollision <= object2.bottomCollision); {
		object1.colliding = true;
		object2.colliding = true;
	}

	if (object1.leftCollision >= object2.rightCollision) (object1.bottomCollision >= object2.topCollision); {
		object1.colliding = true;
		object2.colliding = true;
	}

	if (object1.rightCollision <= object2.leftCollision) (object1.bottomCollision >= object2.topCollision); {
		object1.colliding = true;
		object2.colliding = true;
	}
};

//key1,key2,key3,key4 = d,a,w,s , velMod is a velocity modifier, elapsed is the time elapsed since the last update (I think?) eventType is the type of keystroke event. element is what element the listener is added to. Intended for up down left and right movement but COULD be used for horizontal or vertical only by labeling them with "".
export function objectMovementKeyboard(object: canvasImage, element: Element, key1: string, key2: string, key3: string, key4: string, velMod: number, elapsed: number) {

	const vel: number = (velMod * elapsed) / 1000; //1000 = ms

	element.addEventListener("keydown", (event) => {
		if (event.key === key1) {
			object.vy = 0;
			object.vx += vel;
		}

		if (event.key === key2) {
			object.vy = 0;
			object.vx -= vel;
		}

		if (event.key === key3) {
			object.vx = 0;
			object.vy -= vel;
		}

		if (event.key === key4) {
			object.vx = 0;
			object.vy += vel;
		}

		if (event.key != key1, key2, key3, key4) {
			return;
		}
	});
};

//Scrolls through the sprite reel horizontally. Vertical support may be added if we make assets with vertical panning but unlikely. Functions similarly to movement keyboard with the exception of there only being 2 buttons allowed and they must be used. Probably should be bound to what movement keys we're currently working with.
export function objectSpriteReelKeyboard(object: canvasImage, element: Element, key1: string, key2: string, reelMod: number, reelMaxWidth: number) {
	let reel: number = 0;
	element.addEventListener("keydown", (event) => {
		if (reel < reelMaxWidth) {
			if (event.key === key1) {
				reel -= reelMod;
				drawCanvasSprite(object, reel, 0);
			}
			if (event.key === key2) {
				reel += reelMod;
				drawCanvasSprite(object, reel, 0);
			}
		}
		if (reel >= reelMaxWidth) {
			reel = 0;
		}
	});
};