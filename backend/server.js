const http = require('http');

const PORT = 8080;
const HOST = '0.0.0.0';

const server = http.createServer((req, res) => {
  if (req.method !== 'GET' || req.url !== '/') {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Hello from Effective Mobile!');
});

server.listen(PORT, HOST);
