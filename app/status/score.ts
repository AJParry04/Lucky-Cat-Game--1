let score = 0;
const scoreDiv = document.querySelector("#score");

export function plusOne() {
  score+=1;
  scoreDiv.innerHTML = score.toString();
}
