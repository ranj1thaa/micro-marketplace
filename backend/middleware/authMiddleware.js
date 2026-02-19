const jwt = require('jsonwebtoken');

const tokens = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: process.env.JWT_ACCESS_EXP }
  );
};

module.exports = tokens;
