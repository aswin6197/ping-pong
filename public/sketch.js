var socket;

var p1 = new player(1350-60,600,38,40);
var p2 = new player(10,10,87,83);

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
    fill(255);

    p1.display();
    p1.move();

    p2.display();
    p2.move();
var data ={
    x:p1.x,
    y:p1.y
};
    socket.emit("msg",data);

    //ball.display();
    //ball.check();
}
