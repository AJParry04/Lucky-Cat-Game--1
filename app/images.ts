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
export const assetDiv: HTMLDivElement = document.querySelector("#assets");
const fragment: DocumentFragment = document.createDocumentFragment();

//Define images.
export const angelImage: HTMLImageElement = document.createElement("img");
export const blueCoinImage: HTMLImageElement = document.createElement("img");
export const catImage: HTMLImageElement = document.createElement("img");
export const goldCoinImage: HTMLImageElement = document.createElement("img");
export const greenCoinImage: HTMLImageElement = document.createElement("img");
export const muscleImage: HTMLImageElement = document.createElement("img");
export const pinkCoinImage: HTMLImageElement = document.createElement("img");
export const sharkImage: HTMLImageElement = document.createElement("img");
export const silverCoinImage: HTMLImageElement = document.createElement("img");

//Create lists to iterate over.
export const urlMap = {
	angelUrl,
	blueCoinUrl,
	catUrl,
	goldCoinUrl,
	greenCoinUrl,
	muscleUrl,
	pinkCoinUrl,
	sharkUrl,
	silverCoinUrl
}; //Cannot type this because it uses vite magic to work.

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
}

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
for (let i: number = 0; ++i < imageList.length;) {
	imageList[i].src = urlList[i];
	fragment.appendChild(imageList[i]);
}

//Append fragment to assetDiv.
assetDiv.appendChild(fragment);

assetDiv.style.display = 'none';