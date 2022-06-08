//Import image urls using vite magic sauce.

import catUrl from "./assets/catSprite.webp";
import goldCoinUrl from "./assets/goldCoin.webp";
import blueCoinUrl from "./assets/blueCoin.webp";
import greenCoinUrl from "./assets/greenCoin.webp";
import pinkCoinUrl from "./assets/pinkCoin.webp";
import silverCoinUrl from "./assets/silverCoin.webp";
import angelUrl from "./assets/angel.webp";
import muscleUrl from "./assets/muscle.webp";
import sharkUrl from "./assets/shark.webp";

/*
Setup assetdiv and create a fragment to improve performance. 
Think of a fragment like a box, rather than mailing all your items to the post office one after another,
you mail them in one box to reduce shipping costs!
*/
const assetDiv: HTMLDivElement = document.querySelector("#assets");
const fragment: DocumentFragment = document.createDocumentFragment();

//Define images.
const angelImage: HTMLImageElement = document.createElement("img");
const blueCoinImage: HTMLImageElement = document.createElement("img");
const catImage: HTMLImageElement = document.createElement("img");
const goldCoinImage: HTMLImageElement = document.createElement("img");
const greenCoinImage: HTMLImageElement = document.createElement("img");
const muscleImage: HTMLImageElement = document.createElement("img");
const pinkCoinImage: HTMLImageElement = document.createElement("img");
const sharkImage: HTMLImageElement = document.createElement("img");
const silverCoinImage: HTMLImageElement = document.createElement("img");

//Create lists to iterate over.

export const imageMap = {
  angelImage,
  blueCoinImage,
  catImage,
  goldCoinImage,
  greenCoinImage,
  muscleImage,
  pinkCoinImage,
  sharkImage,
  silverCoinImage
};

const urlList = [
  angelUrl,
  blueCoinUrl,
  catUrl,
  goldCoinUrl,
  greenCoinUrl,
  muscleUrl,
  pinkCoinUrl,
  sharkUrl,
  silverCoinUrl
];

const imageList: HTMLImageElement[] = [
  angelImage,
  blueCoinImage,
  catImage,
  goldCoinImage,
  greenCoinImage,
  muscleImage,
  pinkCoinImage,
  sharkImage,
  silverCoinImage
];

//Reversed for loop to improve iteration performance and iterate over data to have it append to the fragment and assemble.
for (let i: number = imageList.length; --i;) {
  imageList[i].src = urlList[i];
  fragment.appendChild(imageList[i]);
};

//Append fragment to assetDiv.
assetDiv.appendChild(fragment);

assetDiv.style.display = 'none';