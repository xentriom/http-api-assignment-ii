const { getUsers, respond } = require('../../utils/index.js');

const GET = (req, res) => {
  const users = getUsers();
  respond(req, res, 200, users);
}

const HEAD = (req, res) => {
  const users = getUsers();
  respond(req, res, 200, users);
}

module.exports = {
  GET,
  HEAD,
}