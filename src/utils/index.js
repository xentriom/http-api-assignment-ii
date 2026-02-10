const { parseBody } = require('./parseBody');
const { respond } = require('./respond');
const { getUsers, editUser, addUser } = require('./users');

module.exports = {
  parseBody,
  respond,
  getUsers,
  editUser,
  addUser,
}
