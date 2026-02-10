const { createServer } = require('http');
const { existsSync } = require('fs');
const { join } = require('path');
const { parseBody, respond } = require('./utils/index.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;
const baseDir = join(__dirname, 'app');

/**
 * So you know how you said we are not allowed to use express/nextjs/etc?
 * I'm used to Next so i made my own onRequest to work similar to Next's.
 * This assignment will be my test, if you allow this, ill keep using it in the future.
 * @param {Request} req 
 * @param {Response} res 
 * @returns {void}
 */
const onRequest = async (req, res) => {
  // Get the path, omit search params
  const urlPath = req.url.split('?')[0];

  // Get the segment of the path
  // If root, set to empty string
  // Otherwise, get the segment(anything after first /) and remove trailing slash
  const segment = urlPath === '/' ? '' : urlPath.slice(1).replace(/\/$/, '');

  // Get the route path
  // If segment exists, add it to the base directory
  // Otherwise, use the default route
  const routePath = segment ? join(baseDir, segment, 'route.js') : join(baseDir, 'route.js');

  // Route doesn't exist? Return 404
  if (!existsSync(routePath)) {
    respond(req, res, 404, { 
      id: 'notFound', 
      message: 'The page you are looking for was not found.'
    });
    return;
  }

  // Get the route module and the handler function
  const route = require(routePath);
  const handler = route[req.method];

  // Handler function doesn't exist? Return 405
  if (typeof handler !== 'function') {
    respond(req, res, 405, { 
      id: 'notAllowed', 
      message: 'A valid method was not provided for this route.'
    });
    return;
  }

  // Parse body for POST
  if (req.method === 'POST') {
    await parseBody(req);
  }

  await handler(req, res);
};

createServer(onRequest).listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on localhost:${port}`);
});