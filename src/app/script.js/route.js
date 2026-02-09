const { readFileSync } = require('fs');

const script = readFileSync(`${__dirname}/../../../client/script.js`);

const GET = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/javascript' });
  res.write(script);
  res.end();
}

module.exports = {
  GET,
}