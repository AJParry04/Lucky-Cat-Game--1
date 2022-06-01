import "./app/";
import "./style.css";

// select the item we want -- this assumes we have
// <div id="sprite">
let div = document.querySelector('#background'); 

let frame = 0; // current frame
let nframes = 2000; // number of frames
let size = 10; // size of each frame

function showNextFrame () {
  frame = (frame + 1) % nframes; // add one, loop back to zero
  let offset = frame * size;
  div.style.backgroundPosition = `-${offset}px`;
}

setInterval( // run forever on a timer
  showNextFrame,
  2500 / 12 // 12 times per second
)