



function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2,false);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}