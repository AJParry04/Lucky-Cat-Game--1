//Import type and context.

import { canvasImage } from "./globals";
import { ctx, canvas } from "./canvas";

//Serves as our offset multiplier for clearing the image to avoid artifacts. Not letting others set this as this value has been tried and stays true.
const clearMod: number = 2;
export function drawCanvasImageNoClear(object: canvasImage) {
  ctx.drawImage(
    object.image,
    object.x,
    object.y,
    object.sizex,
    object.sizey
  ); //Draw the object
};
//Draws a simple canvas image with no animations.
export function drawCanvasImage(object: canvasImage) {
  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  ); //Clear around the object.

  ctx.drawImage(
    object.image,
    object.x,
    object.y,
    object.sizex,
    object.sizey
  ); //Draw the object
};

export function drawCanvasSpriteNoClear(object: canvasImage, panw: number, panh: number) {
  const scale = object.scale || 1;
  ctx.drawImage(
    object.image,
    panw,
    panh,
    object.sizex, // source size
    object.sizey,
    object.x,
    object.y,
    object.sizex * scale, // destination size
    object.sizey * scale
  ); //Draws sprite.
};

//Draws a sprite sheet with inputs for the panning width and height.
export function drawCanvasSprite(object: canvasImage, panw: number, panh: number) {
  const scale = object.scale || 1;
  ctx.clearRect(
    0,
    0,
    object.sizex * clearMod,
    object.sizey * clearMod
  ); //Clear around the object.
  ctx.drawImage(
    object.image,
    panw,
    panh,
    object.sizex, // source size
    object.sizey,
    object.x,
    object.y,
    object.sizex * scale, // destination size
    object.sizey * scale
  ); //Draws sprite.
};

export function getDistance(a: object, b: object) {
  return Math.sqrt( // the square root of 
    (a.x - b.x) * (a.x - b.x)  // the horizontal side of the triangle squared
    +                          // plus
    (a.y - b.y) * (a.y - b.y) // the vertical side of the triangle squared
  );
}
