var socket;

var p1 = new player(1300-10,600,38,40);
var p2 = new player(10,10,65,68);

function setup(){
    createCanvas(1350,660);
    socket = io.connect("http://10.50.22.154:3000");//update to computers current ip address
    socket.on("msg",playr);
}
function playr(data) {
    p2.x =  width-60 - data.x;
    p2.y =  data.y;
    if(data.bx !== 0){
        ball.x = data.bx;
        ball.y = data.by;
        ball.sx = data.bsx;
        ball.sy = data.bsy;
    }
}
function draw(){
    clear();

    p1.display();
    p2.display();
    ball.display();

    score();//updates the score

    //p1.update()
    //p2.update();
    ball.update()

    send();//sends data

}
function score() {
    if(ball.x > width){
        p2.score++;
    }
    else if(ball.x < 0){
        p1.score++;
    }
}
function send() {

    var data ={
        x:p1.x,
        y:p1.y,
        bx:ball.x,
        by:ball.y,
        bsx:ball.sx,
        bsy:ball.sy
    };
    socket.emit("msg",data);
}
