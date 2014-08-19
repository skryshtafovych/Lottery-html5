var http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(302, { 'Location': 'index.html' });
    res.end('Hello, world!');
    
}).listen(process.env.PORT || 8080);