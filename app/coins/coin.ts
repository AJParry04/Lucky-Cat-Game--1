import {objectMap} from "../globals"
import {drawCanvasImage} from "../utilities"


objectMap.goldCoin.x = 500;
objectMap.goldCoin.y = 500;

export function drawGoldCoin() {
    objectMap.goldCoin.vx -= 5;
    
    drawCanvasImage(objectMap.goldCoin);
}