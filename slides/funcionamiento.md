## Funcionamiento

```js
// Observación del sistema de ficheros
var watcher = require("chokidar").watch(patterns, opts);

// Comunicación con socket.io
bs.io.sockets.emit("browser:reload");

// Tratamiento en el navegador
bs.socket.on("browser:reload", function () {
  if (bs.canSync({url: current()}, OPT_PATH)) {
    sync.reloadBrowser(true);
  }
});
```

Note:
No es así exáctamente

