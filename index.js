const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config("./")
const connectDB = require('./config/db')
const router = require('./routes')


const app = express()
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
//   });
app.use(cors({
    origin : "https://smartcart123.netlify.app/",
    // optionsSuccessStatus: 200,
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

const PORT = 8080
app.get("/",(req,res)=>{
res.json({
    success:true,
    error:false,
    message:"Server started successfully"
})
})

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log(`Server started at http://localhost:${PORT}`)
    })
})
