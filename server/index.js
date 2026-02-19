const express=require('express')
const cors=require('cors')
const app=express()
const cookieParser = require('cookie-parser');
const authRoute=require('./routes/authRoute')
const productRoute=require('./routes/productRoute')
const isProduction = process.env.NODE_ENV === "production";
app.use(express.json())

app.use(cors({
  origin: function (origin, callback) {

    const allowedOrigins = [
      "http://localhost:5173",
      "https://micro-marketplace-drab.vercel.app",
      "https://micro-marketplace-git-main-ranjithas-projects-16e7ad6c.vercel.app"
    ];

    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error("CORS not allowed for this origin"), false);
    }

    return callback(null, true);
  },
  credentials: true
}));


app.use(cookieParser());

app.use('/auth', authRoute)
app.use('/product', productRoute)

app.use((err,req, res, next)=>{
  const { status = 500, message = "Something went wrong" } = err
  res.status(status).json({ message })
})
module.exports=app