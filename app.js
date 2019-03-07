const http = require('http');

const hostname = '127.0.0.1'; // ip adress to host
const port = 3030; // change to 3030

const server = http.createServer((req, res) => { // ask http to create server for us
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); // change from plain to html so browser knows what to render

  // this is the route, just like in Vue
  let url = req.url;

  // set up some routes
  if(url == "/about") {
    res.write(`<h1>You're on the ${url} page!</h1>`);
    res.end(); // end the response
  } else if(url == "/contact") {
    res.write(`<h1>Now you're on the ${url} page!</h1>`);
    res.end(); // end the response
  } else {
    res.write(`<h1>Hello world! Or at least everyone on port ${port}</h1>`);
    res.end('Hello World\nThis is node running on a server'); // res.end is like a php echo statement
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
