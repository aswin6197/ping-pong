var socket;

var p1 = new player(1350-60,600,38,40);
var p2 = new player(10,10,65,68);

function setup(){
    createCanvas(1350,660);
    socket = io.connect("http://10.50.22.239:3000");
    socket.on("msg",playr);
}
function playr(data) {
    p2.x = width - data.x;
    p2.y =  data.y;
    console.log(data);
}
function draw(){
    clear();

    p1.display();
    p2.display();
    ball.display();

    score();//updates the score

    p1.update();
    p2.update();
    ball.update();

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
        y:p1.y
    };
    socket.emit("msg",data);
}
