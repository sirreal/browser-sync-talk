var express = require('express');
var browserSync = require('browser-sync');
var app = express();
var port = 54321;

app.listen(port, 
function () {
  browserSync({
    proxy: 'localhost:' + port,
    files: ['public/**/*.{js,css}']
  });
}
;

