const { readFileSync } = require('fs');

const index = readFileSync(`${__dirname}/../../client/client.html`, 'utf8');

const GET = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': Buffer.byteLength(index, 'utf8'),
  });

  res.write(index);
  res.end();
}

module.exports = {
  GET,
}