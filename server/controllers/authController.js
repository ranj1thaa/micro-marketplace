const WrapAsync = require('../utils/wrapAsync');
const ExpressError = require('../utils/errHandle');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const tokens = require('../middleware/authMiddleware');
const isProduction = process.env.NODE_ENV === "production";
exports.signup = WrapAsync(async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !name || !password) throw new ExpressError(400, "All fields required");

  const hashPwd = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashPwd });
  await user.save();

  const token = tokens(user);
  res.cookie("accessToken", token, {
    httpOnly: true,
    secure: isProduction,   
    sameSite: isProduction ? "none" : "lax", 
    maxAge: 15 * 60 * 1000,
  });


  res.status(201).json({
    message: "Signup successful",
    user: { id: user._id, email: user.email, name: user.name }
  });
});

exports.login = WrapAsync(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) throw new ExpressError(400, "Email and password required");

  const user = await User.findOne({ email });
  if (!user) throw new ExpressError(404, "User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new ExpressError(401, "Invalid credentials");

  const token = tokens(user);
  res.cookie("accessToken", token, {
    httpOnly: true,
    secure: isProduction,   
    sameSite: isProduction ? "none" : "lax", 
    maxAge: 15 * 60 * 1000,
  });

  res.status(200).json({
    message: "Logged in",
    user: { id: user._id, email: user.email, name: user.name, role: user.role }
  });
});

exports.logout = WrapAsync(async (req, res) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
  });

  res.status(200).json({ message: "Logged out" });
});

exports.me = WrapAsync(async (req, res) => {
  const user = await User.findById(req.user.id).select("-password").populate('favorites');
  res.json({ user });
});
