Micro Marketplace App
A full-stack micro marketplace application with Web (React) and Backend (Node.js + Express + MongoDB) support.
Built as a Full Stack Developer Intern Assignment.

Users can signup/login, browse products with search and pagination, view product details, and favorite/unfavorite products.

Project Structure
micro-marketplace/
│
├─ server/ # Node.js + Express + MongoDB
│ ├─ models/ # Mongoose models (User, Product)
│ ├─ controllers/ # Business logic for Auth & Products
│ ├─ routes/ # Express routes
│ ├─ seed.js # Seed script (2 users, 10 products)
│ ├─ index.js # Express app entry point
│ ├─ server.js # DB connection + server start
│ └─ .env.example # Environment variables example
│
├─ frontend/ # React Web App
│ ├─ src/
│ │ ├─ pages/ # Login, Signup, ProductDashboard, ProductDetails, Favorites
│ │ ├─ components/ # ProductFace, Navbar, ProtectedRoute
│ │ └─ context/ # AppContext for user/global state
│ ├─ utils/ # Axios instance
│ └─ package.json
│
└─ README.md

Features
Backend
JWT-based authentication: Signup/Login/Logout
CRUD for products: Create, Read, Update, Delete
Search & Pagination: /product?search=&page=&limit=
Favorites: Add/remove favorite products per user
Validation, Status codes, Password Hashing
Seed script with 2 users + 10 products

Web App (React)
Login / Signup pages
Product listing page with search + pagination
Product detail page
Favorite / unfavorite functionality
Edit product page
Clean, responsive UI with Bootstrap + Tailwind

Micro-interactions using GSAP:
Heart icon animation on favorite/unfavorite
Product card hover lift & shadow
Fade-in animation on page load
Navbar brand animation

Tech Stack
Backend: Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt
Frontend: React, React Router DOM, Axios, Bootstrap, Tailwind, React Toastify, GSAP
Tools: VS Code, Postman

Getting Started
Backend
Navigate to backend:
cd server

Install dependencies:
npm install

Create .env file based on .env.example:
PORT=3000
MONGOURI=your_mongodb_connection_string
JWT_ACCESS_SECRET=your_jwt_secret
JWT_ACCESS_EXP=15m
BASE_URL=http://localhost:5173

Seed the database (creates 2 users + 10 products):
node seed.js

Start the server:
node server.js

Server runs on http://localhost:3000

Frontend
Navigate to frontend:
cd frontend

Install dependencies:
npm install

Start the React dev server:
npm run dev

App runs on http://localhost:5173

API Endpoints
Auth
Method Endpoint Description
POST /auth/signup Register new user
POST /auth/login Login user
POST /auth/logout Logout user
GET /auth/me Get current user info

Products
Method Endpoint Description
GET /product Get all products (search + pagination)
GET /product/:id Get single product details
POST /product/new Create new product (admin/testing)
POST /product/:id/favorite Toggle favorite for logged-in user
PUT /product/product/:id Update product
DELETE /product/:id Delete product

Test Credentials
Name : Alice
Email : alice@example.com
Password: password123

Name : Bob
Email : bob@example.com
Password: password123

Micro-Interactions
Heart icon click → scale + color change
Product card hover → lift + shadow
Smooth fade-in for products
Animated navbar brand

Deployment
Frontend: Vercel
Backend: Render

After deployment, update the frontend api baseURL with deployed backend URL.
