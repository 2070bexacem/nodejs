const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    // const text = fs.readFileSync('./content/bigFile.txt', 'utf8');
    // res.end(text);

    const fileStream = fs.createReadStream('./content/bigFile.txt', 'utf-8');

    fileStream.on('open', () => {
      fileStream.pipe(res);
    });

    fileStream.on('error', (err) => {
      res.end(err);
    });
  })
  .listen(5000);
