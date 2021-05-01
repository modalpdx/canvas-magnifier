// This code requires that the dimensions for the canvas
// be set in advance, either inline in HTML or via CSS.

const imageFile = "./AutumnColorsOnTheLake.jpg";
const zoomLevel = 2; // Multiplier for image size (2 = 2x orig. size)
const canvasID = "myCanvas";

// Everything else below should not need to be edited.

const img = new Image();
img.src = imageFile;

const cvs = document.getElementById(canvasID);
const rect = cvs.getBoundingClientRect();
cvs.width = rect.width;
cvs.height = rect.height;
const ctx = cvs.getContext('2d');

const zoomWidth = rect.width * zoomLevel;
const zoomHeight = rect.height * zoomLevel;

// Load the source image
img.addEventListener('load', event => {
    ctx.drawImage(img, 0, 0, rect.width, rect.height);
});

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

