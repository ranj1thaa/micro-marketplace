require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const Product = require('../models/product');
const Connect=require('../configs/db')

const seed = async () => {
  await Connect();
  await User.deleteMany({});
  await Product.deleteMany({});

  const password = await bcrypt.hash('password123', 10);
  const users = await User.insertMany([
    { name: 'Alice', email: 'alice@example.com', password },
    { name: 'Bob', email: 'bob@example.com', password }
  ]);

  const products = [];
  for (let i = 1; i <= 10; i++) {
    products.push({
      title: `Product ${i}`,
      price: i * 10,
      description: `Description for product ${i}`,
      image: `https://plus.unsplash.com/premium_photo-1771332987619-7b63311cea99?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8+${i}`
    });
  }
  await Product.insertMany(products);

  console.log('Seed complete!');
  process.exit();
};

seed();
