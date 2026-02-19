const express=require('express')
const cors=require('cors')
const app=express()
const cookieParser = require('cookie-parser');
const authRoute=require('./routes/authRoute')
const productRoute=require('./routes/productRoute')

app.use(express.json())
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

app.use(cookieParser());

app.use('/auth', authRoute)
app.use('/product', productRoute)

app.use((err,req, res, next)=>{
  const { status = 500, message = "Something went wrong" } = err
  res.status(status).json({ message })
})
module.exports=app