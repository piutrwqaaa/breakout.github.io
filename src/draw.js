 


function draw() {   //讓球移動
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();
	
	
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            lives--;
            if(!lives) {
                alert("GAME OVER");       //Game over
                document.location.reload();
            }
			
            else {
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 5;                     //移動速度
                dy = -5;
                paddleX = (canvas.width-paddleWidth)/2;
            }
        }
    }
    ///槳移動的邏輯
    if(rightPressed && paddleX < canvas.width-paddleWidth) {       
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    
    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}