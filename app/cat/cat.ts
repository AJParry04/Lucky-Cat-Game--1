import {drawCanvasImage} from '../utilities'
import {imageMap} from '../images'
import {objectMap} from '../globals'

imageMap.catImage.addEventListener("load", () => {
	drawCanvasImage(objectMap.cat);
})

