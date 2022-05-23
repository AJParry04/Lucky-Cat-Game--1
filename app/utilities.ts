//Import type and context.

import { canvasImage, collision } from "./globals";
import { ctx, canvas } from "./canvas";

//Serves as our offset multiplier for clearing the image to avoid artifacts. Not letting others set this as this value has been tried and stays true.
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
Specifically used to only flip one objects colliding switch when colliding with the world.
*/
export const worldCollisionDetection = (object: collision, left: number, top: number, right: number, bottom: number) => {
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
export const objectCollisionDetection = (object1: collision, object2: collision) => {
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

//key1,key2,key3,key4 = d,a,w,s , velMod is a velocity modifier, elapsed is the time elapsed since the last update (I think?) eventType is the type of keystroke event. element is what element the listener is added to.
export const objectMovementKeyboard = (object: canvasImage, element: Element, key1: string, key2: string, key3: string, key4: string, velMod: number, elapsed: number) => {
	
	const vel: number = (velMod * elapsed) / 1000; //1000 = ms
	
	if (element === undefined) {
		element = canvas;
	}
	
	if (key1 === undefined) {
		key1 = "";
	}
	
	if (key2 === undefined) {
		key2 = "";
	}
	
	if (key3 === undefined) {
		key3 = "";
	}
	
	if (key4 === undefined) {
		key4 = "";
	}
	
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

//Scrolls through the sprite reel horizontally. Vertical support may be added if we make assets with vertical panning but unlikely. Functions similarly to movement keyboard with the exception of there only being 2 buttons allowed and they must be used.
export const objectSpriteReelKeyboard = (object: canvasImage, element: Element, key1: string, key2: string, reelMod: number, reelMaxWidth: number) => {
	let reel: number = 0;
	if (element === undefined) {
		element = canvas;
	}
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
}