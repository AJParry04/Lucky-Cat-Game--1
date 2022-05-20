import {blueCoin.png} from './image';//shark and ocean
import {goldCoin.png} from './image';
import {greenCoin.png} from './image';//muscle
import {pinkCoin.png} from './image';//wings
import {silverCoin.png} from './image';//double points
import {canvas} from './main/canvas';

let startTime = 0;
 
export let coin = {
  x: 0,
  y: 0,
 image: goldCoin.png,
}

export let bCoin = {
  x: 0,
  y: 0,
  image: blueCoin.png
}

export let gCoin = {
  x: 0,
  y: 0,
  image: greenCoin.png,
}

export let pCoin = {
  x: 0,
  y: 0,
  image: pinkCoin.png,
}

export let sCoin = {
  x: 0,
  y: 0,
  image: silverCoin.png,
}

function drawCoin() {
  let ctx = canvas.getContext('2d');
  ctx.resetTransform();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.translate(coin.x + 25, coin.y + 25);
  ctx.drawImage(
    coin.image,
    -55,
    -55,
    50,
    50
  )
}

function updateCoin(elapsed: number) {
  const drift = 0;
  const fallSpeed = -75;
  coin.x += fallSpeed * elapsed / 1000;
  //CHANGE THESE NUMBERS WHEN YOU KNOW THE CANVAS SIZE!!!!
  if (coin.y < 50) {
    coin.y = 0;
  }
  if (coin.x < 0) {
    coin.x = canvas.width - 25;
  }
  if (coin.x < canvas.width) {
    coin.x = canvas.width;
  }
}

function animateCoin(timestamp: number = 0) {
  let elapsed;
  if (timestamp) {
    if (!startTime) {
      startTime = timestamp;
      elapsed = 0;
    } else {
      elapsed = timestamp - startTime
      startTime = timestamp;
    }
    updateCoin(elapsed);
  }
  drawCoin();
  requestAnimationFrame(animateCoin)
}

/*function drawScoin() {
  let ctx = canvas.getContext ('2d');
  ctx.resetTransform ();
  ctx.translate (coinx+25, coin.y+25);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    sCoin.image
  )
}*/