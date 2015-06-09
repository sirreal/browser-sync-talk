## Node

```js
var express = require('express');
var browserSync = require('browser-sync');
var app = express();
var port = process.env.PORT || 3000;

app.listen(port, listening);

function listening () {
  browserSync({
    proxy: 'localhost:' + port,
    files: ['public/**/*']
  });
}
```
