'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var subscribe = require('./lib/subscribe');
var badges = require('./models/badges')

// Serve static assets out of public
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile('../public/index.html');
})

io.sockets.on('connection', function(client) {
    badges.get(function(err, data) {
        if(err) return;
        data.forEach(function(badge) {
            client.emit('badge', badge);
        })
    });
});

subscribe.on('message', function(message) {
    io.sockets.emit('badge', message);
});

server.listen(3000, function(){
    console.log('Server is running on port %d', 3000);
});
