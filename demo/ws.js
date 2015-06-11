var app = require('http').createServer(handler)
var io  = require('socket.io')(app);
var fs  = require('fs');
app.listen(80);

function handler(req, res) {
  fs.readFile(__dirname + 'public/ws.html', function(err, data) {
    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function(socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', console.log.bind(console));
});
