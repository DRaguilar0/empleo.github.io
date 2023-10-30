const canvas = document.getElementById('backgroundCanvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Smart Embed Link: Load an external canvas content
const embedLink = 'https://www.canva.com/design/DAFyx-Ps-BM/view';

const img = new Image();
img.src = embedLink;

img.onload = function () {
    // Draw the external canvas content onto your canvas
    context.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Example: Draw additional content
    context.fillStyle = 'rgba(255, 0, 0, 0.5)';
    context.fillRect(50, 50, 100, 100);
};
