const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/config');
const userModel = require('../models/userModel');

const register = async (username, password) => {
  const userId = await userModel.createUser(username, password);
  return userId;
};

const login = async (username, password) => {
  const user = await userModel.getUserByUsername(username);
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user.id, username: user.username }, config.jwtSecret, { expiresIn: '1h' });
    return token;
  }
  throw new Error('Invalid credentials');
};

module.exports = { register, login };
