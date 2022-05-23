//import images

import {catImage} from './images';
import {canvas} from "/main/canvas";

const ctx = canvas.getContext("2d");
ctx.drawImage(catImage, catImage.sx, catImage.sy, catImage.sWidth, catImage.sHeight, catImage.dx, catImage.dy, catImage.dWidth, catImage.dHeight);
