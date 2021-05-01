// This code will automatically set the dimensions of the
// canvas to match the dimensions of the image. All of this
// initialization must happen AFTER the image loads, so it
// takes place within image 'load' event handler.

const imageFile = "./AutumnColorsOnTheLake.jpg";
const zoomLevel = 2; // Multiplier for image size (2 = 2x orig. size)
const canvasID = "myCanvas";

// Everything else below should not need to be edited.

const cvs = document.getElementById(canvasID);

const img = new Image();
img.src = imageFile;

let rect, zoomWidth, zoomHeight, ctx;

// Load the source image, initialize the canvas
img.addEventListener('load', event => {
    initCanvas();
});

const initCanvas = () => {
    cvs.height = img.height;
    cvs.width = img.width;
    rect = cvs.getBoundingClientRect();
    cvs.width = rect.width;
    cvs.height = rect.height;
    ctx = cvs.getContext('2d');

    zoomWidth = rect.width * zoomLevel;
    zoomHeight = rect.height * zoomLevel;

    ctx.drawImage(img, 0, 0, rect.width, rect.height);
}

// Update the magnification window when the mouse moves
cvs.addEventListener('mousemove', event => {
    let cursorXpct = (event.pageX - rect.left) / rect.width;
    let cursorYpct = (event.pageY - rect.top) / rect.height;
    let zoomX = (rect.width - zoomWidth) * cursorXpct;
    let zoomY = (rect.height - zoomHeight) * cursorYpct;
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.drawImage(img, zoomX, zoomY, zoomWidth, zoomHeight);
}, false);

// When the mouse cursor leaves the canvas, restore orig. image.
cvs.addEventListener('mouseleave', event => {
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.drawImage(img, 0, 0, rect.width, rect.height);
}, false);

