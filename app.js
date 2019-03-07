const http = require('http');

const hostname = '127.0.0.1'; // ip adress to host
const port = 3030; // change to 3030

const server = http.createServer((req, res) => { // ask http to create server for us
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\nThis is node running on a server'); // res.end is like a php echo statement
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
