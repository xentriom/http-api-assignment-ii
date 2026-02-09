const { respond } = require('../../utils/index.js');

const GET = (req, res) => {
  respond(req, res, 404, { 
    id: 'notFound', 
    message: 'The page you are looking for was not found.' 
  });
}

const HEAD = (req, res) => {
  respond(req, res, 404, { 
    id: 'notFound'
  });
}

module.exports = {
  GET,
  HEAD,
}