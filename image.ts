//danny did all of this B)

import catUrl from './assets/catSprite.png';
let assetDiv: HTMLDivElement = document.querySelector('#assets');

export let catImage: HTMLImageElement = document.createElement('img');
catImage.src = catUrl;
assetDiv.appendChild(catImage);

assetDiv.style.display = 'none';

import bCoinUrl from './assets/blueCoin.png';

export let bCoinImage: HTMLImageElement = document.createElement('img');
bCoinImage.src = bCoinUrl;
assetDiv.appendChild(bCoinImage);

import gCoinUrl from './assets/greenCoin.png';

export let gCoinImage: HTMLImageElement = document.createElement('img');
gCoinImage.src = gCoinUrl;
assetDiv.appendChild(gCoinImage);

import pcoinUrl from './assets/pinkCoin.png';

export let pcoinImage: HTMLImageElement = document.createElement('img');
pcoinImage.src = pcoinUrl;
assetDiv.appendChild(pcoinImage);

import scoinUrl from './assets/silverCoin.png';

export let scoinImage: HTMLImageElement = document.createElement('img');
scoinImage.src = scoinUrl;
assetDiv.appendChild(scoinImage);