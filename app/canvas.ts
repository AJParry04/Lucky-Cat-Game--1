//Simple canvas setup

export const canvas: HTMLCanvasElement = document.createElement("Canvas");
export const ctx: CanvasRenderingContext2D = canvas.getContext("2d");
const style: CSSStyleDeclaration = canvas.style;
const app: HTMLDivElement = document.querySelector("#app");

export const width: number = 1280;
export const height: number = 720;

canvas.width = width;
canvas.height = height;

style.width = `${width}px`;
style.height = `${height}px`;

style.border = '4px';
style.borderColor = 'red';

app.appendChild(canvas);