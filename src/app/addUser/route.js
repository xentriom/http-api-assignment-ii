const { respond, getUsers, editUser, addUser } = require('../../utils/index.js');

const POST = (req, res) => {
  const { name, age } = req.body;

  // Missing name/age
  if (!name || !age) {
    respond(req, res, 400, { 
      id: 'addUserMissingParams', 
      message: 'Name and age are both required.'
    });
    return;
  }

  const users = getUsers();

  // User exists, edit them
  if (users[name]) {
    editUser(name, age);
    respond(req, res, 204, {});
    return;
  }

  // User doesn't exist, add them
  addUser(name, age);
  respond(req, res, 201, { message: 'Created Successfully' });
  return;
}

module.exports = {
  POST,
}