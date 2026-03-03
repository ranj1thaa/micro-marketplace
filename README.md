<div align="center">

<h1>🛒 Micro Marketplace App</h1>

<p>
A full-stack micro marketplace application built with modern web technologies.
</p>

<p>
Built as a Full Stack Developer Intern Assignment demonstrating authentication, product management, search & pagination, and user favorites functionality.
</p>

</div>

---

## 🚀 Overview

<p>
The Micro Marketplace App allows users to:
</p>

<ul>
<li>✅ Signup / Login authentication</li>
<li>✅ Browse products</li>
<li>✅ Search products</li>
<li>✅ Pagination support</li>
<li>✅ View product details</li>
<li>✅ Add/remove favorites</li>
</ul>

---

## 🏗 Project Structure

<pre>
micro-marketplace/
│
├─ server/
│ ├─ models/
│ ├─ controllers/
│ ├─ routes/
│ ├─ seed.js
│ ├─ index.js
│ ├─ server.js
│ └─ .env.example
│
├─ frontend/
│ ├─ src/
│ │ ├─ pages/
│ │ ├─ components/
│ │ └─ context/
│ ├─ utils/
│ └─ package.json
│
└─ README.md
</pre>

---

## ⚡ Features

<h3>🔐 Authentication</h3>
<ul>
<li>JWT based authentication</li>
<li>Secure signup/login/logout</li>
<li>Password hashing with bcrypt</li>
</ul>

<h3>📦 Product Management</h3>
<ul>
<li>CRUD operations for products</li>
<li>Search + Pagination API support</li>
<li>Product favorites system</li>
</ul>

<h3>🎨 Frontend Experience</h3>
<ul>
<li>Responsive UI using Bootstrap + Tailwind</li>
<li>Animated micro-interactions using GSAP</li>
<li>Product card hover animations</li>
<li>Smooth page transitions</li>
</ul>

---

## 💻 Tech Stack

<h3>Backend</h3>
<p>
Node.js | Express.js | MongoDB | Mongoose | JWT | bcrypt
</p>

<h3>Frontend</h3>
<p>
React | React Router | Axios | Bootstrap | Tailwind CSS | React Toastify | GSAP
</p>

<h3>Tools</h3>
<p>
VS Code | Postman | Git | Render | Vercel
</p>

---

## 🧠 Backend Features

<ul>
<li>JWT Authentication</li>
<li>Product CRUD APIs</li>
<li>Search & Pagination</li>
<li>Favorites System</li>
<li>Validation + Secure password storage</li>
<li>Database seeding script</li>
</ul>

---

## 🌐 Frontend Features

<ul>
<li>Login / Signup Pages</li>
<li>Product Dashboard</li>
<li>Product Details Page</li>
<li>Favorites Management</li>
<li>Responsive Layout</li>
</ul>

---

## ✨ Micro Interactions

<ul>
<li>❤️ Heart icon animation on favorite toggle</li>
<li>📦 Product card hover lift + shadow effects</li>
<li>🌫 Smooth fade-in loading animations</li>
<li>🎯 Navbar branding animation</li>
</ul>

---

## 🛠 Getting Started

<h3>Backend Setup</h3>

<pre>
cd server
npm install
</pre>

Create <b>.env</b> file using .env.example

<pre>
PORT=3000
MONGOURI=your_mongodb_uri
JWT_ACCESS_SECRET=your_secret
JWT_ACCESS_EXP=15m
BASE_URL=http://localhost:5173
</pre>

Seed Database:
<pre>
node seed.js
</pre>

Start Server:
<pre>
node server.js
</pre>

Server runs on:
<b>http://localhost:3000</b>

---

<h3>Frontend Setup</h3>

<pre>
cd frontend
npm install
npm run dev
</pre>

Frontend runs on:
<b>http://localhost:5173</b>

---

## 📡 API Endpoints

<h3>Auth</h3>

<table border="1" cellpadding="8">
<tr>
<th>Method</th>
<th>Endpoint</th>
<th>Description</th>
</tr>

<tr>
<td>POST</td>
<td>/auth/signup</td>
<td>Register user</td>
</tr>

<tr>
<td>POST</td>
<td>/auth/login</td>
<td>Login user</td>
</tr>

<tr>
<td>GET</td>
<td>/auth/me</td>
<td>Get user info</td>
</tr>
</table>

---

<h3>Products</h3>

<table border="1" cellpadding="8">
<tr>
<th>Method</th>
<th>Endpoint</th>
<th>Description</th>
</tr>

<tr>
<td>GET</td>
<td>/product</td>
<td>Search + Pagination</td>
</tr>

<tr>
<td>GET</td>
<td>/product/:id</td>
<td>Product details</td>
</tr>

<tr>
<td>POST</td>
<td>/product/:id/favorite</td>
<td>Toggle favorite</td>
</tr>
</table>

---

## 👤 Test Credentials

<p>
Name: Alice <br>
Email: alice@example.com <br>
Password: password123
</p>

<p>
Name: Bob <br>
Email: bob@example.com <br>
Password: password123
</p>

---

## 🚀 Deployment

<p>
Frontend → Vercel  
Backend → Render
</p>

<p>
After deployment update frontend API base URL.
</p>

---

## ⭐ Author

<p>
Developed as an internship assignment project.
</p>
