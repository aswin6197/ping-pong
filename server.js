var express = require('express');

var app = express();

var server = app.listen(3000);
app.use(express.static('public'));

var socket = require("socket.io");
var io = socket(server);

io.sockets.on('connection',news);

function news(socket) {
    console.log(socket.id);
    socket.on("mouse",mesg);

    function mesg(data) {

    //console.log(data);
        socket.broadcast.emit("mouse",data); //send to all except the one that send the message
        //io.sockets.emit //sends to all including the one that send the msg
    }
}
