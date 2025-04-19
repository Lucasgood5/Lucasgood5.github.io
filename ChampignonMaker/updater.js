const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// On requestAnimationFrame, draw the background and the left stats
function draw() {
    drawBackground(ctx);
    drawAttributes(ctx);
    drawCapacities(ctx);
    drawStory(ctx);
    drawPlayButton(ctx);
    drawCharacterSelector(ctx);
    requestAnimationFrame(draw);
}

draw();