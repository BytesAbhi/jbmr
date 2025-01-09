const express = require('express');
const app = express();
const rateLimit = require('express-rate-limit')
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"})
const mongoose  = require('mongoose')
const v1Routes = require('./routes/index')
const cors = require('cors')
const morgan = require('morgan');

const AppError = require("./utils/app.error");
const globalErrorhandler = require('./helper/error.controller')


// const v1Routes=require('./routes/index')

const DB = process.env.DB_KEY.replace('<PASSWORD>',process.env.DB_PASS)

mongoose.connect(DB).then(()=> console.log('DB Connection Succesfully'))

//middleware

//body parser
app.use(express.json())

app.use(express.urlencoded({ extended: true }));


app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173', 'http://localhost:5174','https://jbmr.vercel.app','https://jbmr.vercel.app/','https://jbmr-git-master-harsmaurs-projects.vercel.app/'], // Add other allowed origins here
    optionsSuccessStatus: 200
  })
)

if(process.env.NODE_ENV==='development'){
  app.use(morgan('dev'))
}


//Limit requests from same API
// const limiter = rateLimit({
//   max:100,
//   windowMs: 60*60*1000,
//   message:"Too many requests from this IP , please try again in an hour"
// });

// app.use('/api',limiter)

//ROUTING
v1Routes(app);



// //Error handling middleware
// app.use("*",(req,res,next)=>{
//   const err = {
//     status:404,
//     messsage:"Api endpoint does not found",
//   };
//   next(err)
// })

//global error handling middleware
// app.use((err,req,res,next)=>{
//   console.log(err);
//   const status = err.status || 500
//   const message = err.message || "Something went wrong"
//   const data = err.data || null
//   res.status(status).json({
//     status:"error",
//     message,
//     data
//   })
// })

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorhandler);




const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//When an exception is thrown but not caught in a try-catch block. 

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

//Rejection is not handled in code with a .catch() or try-catch block for async function

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
    process.exit(1);
});













