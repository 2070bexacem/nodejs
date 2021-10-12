const http = require('http');
const { readFileSync } = require('fs');

//get all files
const homePage = readFileSync('./index.html');
const homeStyles = readFileSync('./styles.css');
const homeLogic = readFileSync('./browser-app.js');

const server = http.createServer((req, res) => {
  const url = req.url;

  //homepage
  if (url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });

    res.end(homePage);
  }

  //styles
  else if (url === '/styles.css') {
    res.writeHead(200, {
      'Content-Type': 'text/css',
    });

    res.end(homeStyles);
  }

  // home logic
  else if (url === '/browser-app.js') {
    res.writeHead(200, {
      'Content-Type': 'text/javascript',
    });

    res.end(homeLogic);
  }

  //contactpage
  else if (url === '/about') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });

    res.write(`<h1> About Screen </h1>`);
    res.end();
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html',
    });

    res.write(`<h1> The page you are looking for cannot be found </h1>`);
    res.end();
  }
});

server.listen(5000);
