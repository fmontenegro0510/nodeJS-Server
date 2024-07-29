const authService = require('../services/authService');

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userId = await authService.register(username, password);
    res.status(201).json({ message: 'User created', userId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const token = await authService.login(username, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};

module.exports = { register, login };
