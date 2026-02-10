const respond = (req, res, status, object) => {
  const content = JSON.stringify(object);

  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(content, 'utf8'),
  });

  if (req.method !== 'HEAD' && status !== 204) {
    res.write(content);
  }

  res.end();
};

module.exports = {
  respond,
}