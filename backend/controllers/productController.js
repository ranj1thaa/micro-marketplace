const WrapAsync = require('../utils/wrapAsync');
const ExpressError = require('../utils/errHandle');
const Product = require('../models/product');
const User = require('../models/user');

exports.createProduct = WrapAsync(async (req, res) => {
  const { title, price, description, image } = req.body;
  if (!title || !price || !description || !image) throw new ExpressError(400, "All fields required");

  const product = new Product({ title, price, description, image });
  await product.save();
  res.status(201).json({ message: "Product created", product });
});

exports.getProducts = WrapAsync(async (req, res) => {
  let { page = 1, limit = 10, search = "" } = req.query;
  page = parseInt(page);
  limit = parseInt(limit);

  const query = { title: { $regex: search, $options: "i" } };
  const total = await Product.countDocuments(query);

  const products = await Product.find(query)
    .skip((page - 1) * limit)
    .limit(limit)
    .sort({ createdAt: -1 });

  res.json({ page, totalPages: Math.ceil(total / limit), total, products });
});

exports.getProduct = WrapAsync(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) throw new ExpressError(404, "Product not found");
  res.json(product);
});

exports.updateProduct = WrapAsync(async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!product) throw new ExpressError(404, "Product not found");
  res.json({ message: "Product updated", product });
});



exports.toggleFavorite = WrapAsync(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) throw new ExpressError(404, "User not found");

  const productId = req.params.id;
  const index = user.favorites.indexOf(productId);

  if (index === -1) {
    user.favorites.push(productId);
    await user.save();
    return res.json({ message: "Added to favorites", favorites: user.favorites });
  } else {
    user.favorites.splice(index, 1);
    await user.save();
    return res.json({ message: "Removed from favorites", favorites: user.favorites });
  }
});

