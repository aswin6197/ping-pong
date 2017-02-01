var express = require('express');
console.log("hello");
var app = express();

var server = app.listen(3000);
app.use(express.static('public'));

var comp=[];
//console.log(server.address.address);

var socket = require("socket.io");
var io = socket(server);

io.sockets.on('connection',news);
function news(socket) {
        //console.log(socket.id);
        comp.push(socket.id);
        if(comp.length > 2)
            comp = [];
        socket.on("msg",msg);

        function msg(data) {
            console.log(comp);
            if(comp.indexOf(socket.id) == 0){
                data.bx = 1350 - data.bx;
                data.by = data.by;
                data.bsx = -data.bsx;
                data.bsy = -data.bsy;
            }
            else{
                data.bx = 0;
            }
            socket.broadcast.emit("msg",data);
        }
}
