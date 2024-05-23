const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config("./")
const connectDB = require('./config/db')
const router = require('./routes')

const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json({ limit: '50mb' }));

const allowedOrigins = ['https://smartcart1.netlify.app'];
// const allowedOrigins = ['http://localhost:3000'];


const corsOptions = {
  origin: (origin, callback) => {
    console.log('Origin:', origin); 
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
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
