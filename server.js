const http = require('http');
const fs = require('fs');
const port = 4200;

const server = http.createServer(function (request, response) {
    fs.readFile('./index.html', function(error, content) {
        if (error) {
            response.writeHead(500);
            response.end();
        } else {
            response.writeHead(200);
            response.end(content);
        }
    });
});

server.listen(port, (function () {
    console.log('listening on port ' + port);
}));
