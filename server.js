const http = require('http');
const port = 4200;

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('snail time');
});

server.listen(port, (function () {
    console.log('listening on port ' + port);
}));