

var brickWidth = 40;
var brickHeight = 20;

var brickOffsetTop = 30;
var brickOffsetLeft = 140;


switch(level=1) { 
        
        case 1: 
            var brickRowCount = 1;
			var brickColumnCount = 1; 
			var brickPadding = 50;
            break; 
        case 2: 
            var brickRowCount = 6;
			var brickColumnCount = 3; 
			var brickOffsetLeft = 30;
			var brickPadding = 40
			break; 
    } 


var bricks = [];       
for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}


function drawBricks() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1 && level==1) {
                var brickX = (2*r*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (2*c*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#694702";
                ctx.fill();
                ctx.closePath();
				}
			else if (bricks[c][r].status == 1&& level==2)
			{
				var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#7B797E";
                ctx.fill();
                ctx.closePath();}
				
			}
            }
        }
 

