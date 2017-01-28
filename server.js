var express = require('express');
console.log("hello");
var app = express();

var server = app.listen(3000);
app.use(express.static('public'));

var socket = require("socket.io");
var io = socket(server);

io.sockets.on('connection',news);
function news(socket) {
        console.log(socket.id);

        socket.on("msg",msg);

        function msg(data) {
            
            socket.broadcast.emit("msg",data);
        }
}
