
var speedx =3 ,speedy =3
var cx = 100,cy = 100
var x2 = 10,y2 = 10
var x1 = 10,y1 = 600

//var socket;
function setup(){
    createCanvas(1350,650);
//socket = io.connect("http://localhost:3000");
//socket.on("mouse",newDraw)
}/*
function newDraw(data) {
    x2 = data.px
    cx = data.bx
    cy = data.by
    speedx = sx
    speedy = sy

    //ellipse(1350-data.px,650-data.py,10,10)
}*/




function draw(){
    var width = 100
clear()
ellipse(cx,cy,10,10)
cx+=speedx
cy+=speedy
// makes the ball  bounce of the screen
if(cx == 1350  || cx == 0){
    speedx = -speedx
}

if(cy == y2+40 && cx > x2 && cx <x2+width){
    speedy= -speedy
}

if(cy == y1 && cx > x1 && cx < x1+width) {
    speedy = -speedy
}
if(cy > 650 || cy < 0){
    cy = 10
    cx = 10
    speedy = 2
    speedx = 2
}
// first player controls starts
    if(keyIsDown(LEFT_ARROW)){
        x1-=10
        //clear()
    }
    else if(keyIsDown(RIGHT_ARROW)){
        x1+=10
        //clear()
    }

    if(x1 >(1366-width))
        x1=(1366- width)
    else if(x1 < 0)
        x1=0

    rect(x1,y1,width,40)

//seccond player controls
if(keyIsDown(65)){
    x2-=10
    //clear()
}
else if(keyIsDown(68)){
    x2+=10
    //clear()
}

if(x2 >(1366-width))
    x2-=(1366- width)
else if(x2 < 0)
    x2+=(1366- width)
    rect(x2,y2,width,40)

rect(x2,y2,width,40)
    //sending data
/*    var data = {
        px:x1,
        bx:cx,
        by:cy,
        sx:speedx,
        sy:speedy
    }
     socket.emit("mouse",data);
*/}
