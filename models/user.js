const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');

const getUsers = () => {
  const data = fs.readFileSync(usersFilePath);
  return JSON.parse(data);
};

const getUserByEmail = (email) => {
  const users = getUsers();
  return users.find(user => user.email === email);
};

module.exports = {
  getUserByEmail,
};
