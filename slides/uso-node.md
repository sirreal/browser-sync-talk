## Node

```js
var express = require('express');
var browserSync = require('browser-sync');
var app = express();
var port = process.env.PORT || 54321;

console.log(__dirname + '/public');

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  browserSync({
    proxy: 'localhost:' + port,
    files: [__dirname + '/public/**/*']
  });
});

```
