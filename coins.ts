import {blueCoin.png} from './images';
import {goldCoin.png} from './images';
import {greenCoin.png} from './images';
import {pinkCoin.png} from './images';
import {silverCoin.png} from './images';

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
  coin.y += fallSpeed * elapsed / 1000;
  //CHANGE THESE NUMBERS WHEN YOU KNOW THE CANVAS SIZE!!!!
  if (coin.y < 50) {
    coin.y = 500;
  }
  if (coin.x < 0) {
    coin.x = canvas.width - 25;
  }
  if (coin.x < canvas.width) {
    coin.x = 240;
  }
}

function drawScoin() {
  let ctx = canvas.getContext ('2d');
  ctx.resetTransform ();
  ctx.translate (coinx+25, coin.y+25);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    sCoin.image
  )
}