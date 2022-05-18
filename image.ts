//angie did all of this B)

import catUrl from './assets/catSprite.png';
let assetDiv: HTMLDivElement = document.querySelector('#assets');

export let catImage = document.createElement('img');
catImage.src = catUrl;
assetDiv.appendChild(catImage);

assetDiv.style.display = 'none';

import bCoinUrl from './assets/blueCoin.png';

export let bCoinImage = document.createElement('img');
bCoinImage.src = bCoinUrl;
assetDiv.appendChild(bCoinImage);

import gCoinUrl from './assets/greenCoin.png';

export let gCoinImage = document.createElement('img');
gCoinImage.src = gCoinUrl;
assetDiv.appendChild(gCoinImage);

import coinUrl from './assets/coin.png';

export let coinImage = document.createElement('img');
coinImage.src = coinUrl;
assetDiv.appendChild(coinImage);

import pcoinUrl from './assets/pinkcoin.png';

export let pcoinImage = document.createElement('img');
pcoinImage.src = pcoinUrl;
assetDiv.appendChild(pcoinImage);

import scoinUrl from './assets/silvercoin.png';

export let scoinImage = document.createElement('img');
scoinImage.src = scoinUrl;
assetDiv.appendChild(scoinImage);