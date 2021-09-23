// importing http module and assigning it to a variable
const http = require('http');

// creating a server using createserver method and assigning it to a variable.
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to homepage');
  }
  if (req.url === '/about') {
    res.end('Welcome to aboutpage');
  }
  res.end(`
  <h1>Sorry the page you have requested cannot be found</h1>
  <p>The page doesn't exist</p>
  <a href="/">Back Home</a>
  `);
});

// serving listening to a port
server.listen(8000);
