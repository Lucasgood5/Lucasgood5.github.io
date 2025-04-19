function drawCrossRectangle(ctx, x, y, w, h, colorBcknd, colorLine, cornerInset, lineWidth) {
  ctx.fillStyle = colorLine;
  ctx.fillRect(x + cornerInset, y, w - 2 * cornerInset, h);
  ctx.fillRect(x, y + cornerInset, w, h - 2 * cornerInset);
  ctx.fillStyle = colorBcknd;
  ctx.fillRect(x + cornerInset + lineWidth, y + lineWidth, w - 2 * cornerInset - 2 * lineWidth, h - 2 * lineWidth);
  ctx.fillRect(x + lineWidth, y + cornerInset + lineWidth, w - 2 * lineWidth, h - 2 * cornerInset - 2 * lineWidth);
}

function ScreenScaleX(x) {
  return x / 1920 * canvas.width;
}
function ScreenScaleY(y) {
  return y / 1080 * canvas.height;
}