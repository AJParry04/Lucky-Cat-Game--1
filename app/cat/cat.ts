import {drawCanvasImage, drawCanvasSprite} from '../utilities'
import {imageMap} from '../images'
import {objectMap} from '../globals'

imageMap.catImage.addEventListener("load", () => {
	drawCanvasSprite(objectMap.cat, 64, 0);
})

