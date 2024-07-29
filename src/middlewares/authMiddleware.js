const jwt = require('jsonwebtoken');
const config = require('../config/config');

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');
  console.log('Authorization Header:', authHeader); // Log para depuración

  if (!authHeader) {
    return res.status(401).send({ message: 'Access denied. No token provided.' });
  }

  const token = authHeader.replace('Bearer ', '');
  console.log('Token:', token); // Log para depuración

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    console.log('Decoded Token:', decoded); // Log para depuración
    req.user = decoded;
    next();
  } catch (err) {
    console.log('JWT Error:', err.message); // Log para depuración
    res.status(401).send({ message: 'Failed to authenticate token.' });
  }
};

module.exports = authMiddleware;
