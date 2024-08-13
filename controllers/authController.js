const jwt = require('jsonwebtoken');
const { getUserByEmail } = require('../models/user');

exports.login = (req, res) => {
  const { email, password } = req.body;
  const user = getUserByEmail(email);

  if (user && user.password === password) {
    const token = jwt.sign({ username: user.username }, 'your_jwt_secret');
    return res.status(200).json({ accessToken: token });
  } else {
    return res.status(403).json({ message: 'Invalid credentials' });
  }
};
