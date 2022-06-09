import { objectMap } from "../globals";
import { canvas } from "../canvas"
const maxheight: number = canvas.height - (objectMap.cat.sizey * objectMap.cat.scale);
let score = 0;
const scoreDiv = document.querySelector("#score");

export function plusNumber(number: number) {
  score += number;
  if (score < 0) {
    score = 0;
  }
  scoreDiv.innerHTML = score.toString();
}