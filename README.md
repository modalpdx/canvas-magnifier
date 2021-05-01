# canvas-magnifier
A simple image magnifier that runs within an HTML5 canvas element.

The code in this repo provides a simple, no-nonsense means of providing rollover-magnification on an image. It uses HTML5's canvas to do this. When your mouse cursor enters the bounds of the canvas element in the page, the canvas "box" stays where it is but the image displayed inside the canvas is magnified. Dragging the cursor around the canvas box pans the magnified image. If you're in need of an image magnifier but you don't have real estate to provide a separate magnification box (like hovering over images in Amazon.com product listings) or you need something a bit less gimmicky than a magnifying glass, or you just want to keep life simple, this may be just the thing.

There are two versions offered here:

- Canvas with static dimensions (when you need to control the size of your canvas). Set width/height of canvas in CSS or inline in HTML.
- Automatic sizing of the canvas to match the dimensions of the image (for when you don't care about the size). 

Caveat: I am more of a JavaScript dabbler than a seasoned JavaScript developer. The code here is bound to smell funny to people who are seasoned JavaScript developers. I can live with that. Feel free to improve this as you see fit.