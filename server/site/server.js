var app = require('express')();
var server = require('http').createServer(app);
var webRTC = require('webrtc.io').listen(server);

server.listen(8002);

console.log("Server is running on port 8002");


