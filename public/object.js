
var ball = {
    x : 100,
    y : 100,
    d : 40,
    sx : 5,
    sy : 5,
    display : function() {
        fill(0);
        ellipse(this.x,this.y,this.d,this.d);
        this.x += this.sx;
        this.y += this.sy;
        fill(255);
    },
    update : function() {
        if(this.y >= height || this.y <= 0){
            this.sy = -1*this.sy;
        }
        if (this.x+this.d/2 > p1.x && this.y > p1.y && this.y <  p1.y+p1.height) {
            this.sx = -1*this.sx;
        }
        if(this.x -this.d/2 < p2.x +p2.width && this.y > p2.y && this.y < p2.y + p2.height){
            this.sx = -1*this.sx;
        }
        if(this.x > width ){
            this.x = 100;
            this.y = 100;
            this.sx = 5;
            this.sy = 5;
        }
        else if(this.x < 0){
            this.x = 1300;
            this.y = 100;
            this.sx = -5;
            this.sy = 5;
        }
    }

}
var player = function(x,y,up,down) {
    this.score = 0;
    this.x = x;
    this.y = y;
    this.s = 10;
    this.width = 40;
    this.height = 100;
    this.update = function() {
        if( keyIsDown(up)){
            this.y -= this.s;
        }
        else if (keyIsDown(down)) {
            this.y += this.s;
        }
        if(this.y+this.height >= height-10){
            this.y = height - this.height-10;
        }
        else if(this.y <= 0){
            this.y = 0;
        }
    };
    this.display = function() {
        rect(this.x,this.y,this.width,this.height);
        fill(0);
        textSize(32);
        text("score "+this.score, (3*x/4+100)%width, 30);
        fill(255);
    }
}
