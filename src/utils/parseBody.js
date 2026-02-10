const { parse } = require('querystring');

/**
 * Uses a promise based approach to parse body.
 * This is so i only have to call handler once, wheter this was needed or not.
 * @param {Request} req 
 * @returns {Promise<void>}
 */
const parseBody = (req) => {
  return new Promise((resolve, reject) => {
    const body = [];

    req.on('data', (chunk) => body.push(chunk));

    req.on('end', () => {
      const bodyString = Buffer.concat(body).toString();
      req.body = parse(bodyString);
      resolve();
    });

    req.on('error', reject);
  });
};

module.exports = {
  parseBody,
};