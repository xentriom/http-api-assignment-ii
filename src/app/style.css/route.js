const { readFileSync } = require('fs');

const style = readFileSync(`${__dirname}/../../../client/style.css`);

const GET = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/css',
    'Content-Length': Buffer.byteLength(style, 'utf8'),
  });
  
  res.write(style);
  res.end();
}

module.exports = {
  GET,
}