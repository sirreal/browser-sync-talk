## [socket.io](http://socket.io/)

```js
// SERVIDOR
var app = require('http').createServer(handler)
var io  = require('socket.io')(app);
var fs  = require('fs');
app.listen(80);

function handler(req, res) {
  fs.readFile(__dirname + '/index.html', function(err, data) {
    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function(socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', console.log.bind(console));
});
```

```js
// CLIENTE
// script src="https://cdn.socket.io/socket.io-1.3.5.js"
var socket = io('http://localhost');
socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});
```

