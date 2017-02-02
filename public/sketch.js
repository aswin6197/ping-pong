var socket;



function setup(){
    var h = createCanvas(windowWidth,windowHeight);
    h.position(0,0);
    p1 = new player(width-60,height/2,38,40);
    p2 = new player(10,height/2,65,68);

    socket = io.connect("http://localhost:3000");//update to computers current ip address
    socket.on("msg",playr);
}
function playr(data) {
    p2.x =  width -55- data.x;
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

    for(var i=0;i<height;i+=10){
        line(width/2-7,i,width/2-7,i+5);
    }

    p1.display();
    p2.display();
    ball.display();

    ball.score();//updates the score

    ball.update()

    send();//sends data

}
function score() {

}
function send() {

    var data ={
        x:p1.x,
        y:p1.y,
        bx:ball.x,
        by:ball.y,
        bsx:ball.sx,
        bsy:ball.sy,
    };
    socket.emit("msg",data);
}
