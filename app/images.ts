//Import image urls using vite magic sauce.

import {catUrl} from "/app/assets/catSprite.webp";
import {goldCoinUrl} from "/app/assets/goldCoin.webp";

/*
Setup assetdiv and create a fragment to improve performance. 
Think of a fragment like a box, rather than mailing all your items to the post office one after another,
you mail them in one box to reduce shipping costs!
*/
const assetDiv: HTMLDivElement = document.querySelector("#assets");
const fragment: DocumentFragment = document.createDocumentFragment();

//Define images.
export const catImage: HTMLImageElement = document.createElement("img");
export const goldCoinImage: HTMLImageElement = document.createElement("img");

//Create lists to iterate over.
const urlList = [catUrl, goldCoinUrl]; //Cannot type this because it uses vite magic to work.
const imageList: HTMLImageElement[] = [catImage, goldCoinImage];

//Reversed for loop to improve iteration performance and iterate over data to have it append to the fragment and assemble.
for (let i: number = imageList.length; --i;) {
	imageList[i].src = urlList[i];
	fragment.appendChild(imageList[i]);
}

//Append fragment to assetDiv.
assetDiv.appendChild(fragment);