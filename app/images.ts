import catUrl from "/app/assets/catSprite.webp";
import goldCoinUrl from "/app/assets/goldCoin.webp";

const assetDiv: HTMLDivElement = document.querySelector("#assets");
const fragment: DocumentFragment = document.createDocumentFragment();

export const catImage: HTMLImageElement = document.createElement("img");
export const goldCoinImage: HTMLImageElement = document.createElement("img");

const urlList = [catUrl, goldCoinUrl];
const imageList: HTMLImageElement[] = [catImage, goldCoinImage];

for(let i: number = imageList.length;--i;) {
	imageList[i].src = urlList[i];
	fragment.appendChild(imageList[i]);
}

assetDiv.appendChild(fragment);