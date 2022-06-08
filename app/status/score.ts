let score = 0
let scoreDiv = document.querySelector("#score");

export function plusOne() {
  score+=1;
  scoreDiv.innerHTML = score
}
