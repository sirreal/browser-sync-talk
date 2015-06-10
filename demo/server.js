// jshint node:true
'use strict';
var express = require('express');
var browserSync = require('browser-sync');
var app = express();
var port = process.env.PORT || 54321;

console.log(__dirname + '/public');

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  var bs = browserSync({
    proxy: 'localhost:' + port,
    files: [__dirname + '/public/**/*']
  });

  setTimeout(function() {
    bs.notify(4000 + 'ms have passed');
  }, 4000);

  setTimeout(function() {
    bs.notify(8000 + 'ms have passed', 2000);
  }, 8000);

  setTimeout(function() {
    bs.notify('About to force a reload...');
  }, 10000);

  setTimeout(function() {
    bs.reload();
  }, 12000);

});


