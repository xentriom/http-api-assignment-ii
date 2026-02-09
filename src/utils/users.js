// Utility file to manage users

const users = {};

/**
 * Add a user
 * @param {string} name 
 * @param {number} age 
 */
const addUser = (name, age) => {
  users[name] = {
    name,
    age,
  };
}

/**
 * Get all users
 * @returns {Record<string, { name: string, age: string }>}
 */
const getUsers = () => {
  return users;
}

/**
 * Edit a user's age
 * @param {string} name 
 * @param {number} age 
 * @returns {boolean} 
 */
const editUser = (name, age) => {
  if (!users[name]) {
    return false;
  }

  users[name].age = age;
  return true;
}

module.exports = {
  addUser,
  getUsers,
  editUser,
}