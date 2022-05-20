export let canvas = document.createElement('canvas');
app.appendChild(canvas);
let ctx = canvas.getContext('2d');

let startTime = null

canvas.width = 1920;
canvas.height = 1080;
canvas.style.width = 'calc(min(192vw,192vh)/2)';
canvas.style.height = 'calc(min(54vw,54vh))';
canvas.style.border = '5px solid gold'