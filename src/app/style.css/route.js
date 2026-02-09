const { readFileSync } = require('fs');

const style = readFileSync(`${__dirname}/../../../client/style.css`);

const GET = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/css' });
  res.write(style);
  res.end();
}

module.exports = {
  GET,
}