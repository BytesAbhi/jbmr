const AppError = require('../utils/app.error')
const dotenv = require('dotenv')

dotenv.config({path : '../config.env'});

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
    const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];

    const message = `Duplicate field value: ${value}. Please use an2other value!`;
    return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);

  const message = `Invalid input data. ${errors.join(". ")}`;
  return new AppError(message, 400);
};

const handleJWTError = () =>
  new AppError("Invalid token. Please log in again!", 401);

  const handleUndefinedError = () =>
  new AppError("all fields are required", 400);

const handleJWTExpiredError = () =>
  new AppError("Your token has expired! Please log in again.", 401);
 
  const handleFileLarge=()=>
  new AppError("This file is too large,file size be not more than 5mb", 400);

  const handleJsonError=()=>
  new AppError("please provide json format", 400);
  const handleJwtMalFormError=()=>
  new AppError("Invalid token Or Token is Not required", 400);


  //development err handler

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

//production globalErr handler

const sendErrorProd = (err, res) => {
  // Operational, trusted error: send message to client

  if (err.isOperational) {
    res.status(err.statusCode).json({
      statusCode:err.statusCode,
      errors:err.message
    });

    // Programming or other unknown error: don't leak error details
  } else {
    // 1) Log error
    // console.error("ERROR 💥", err.statusCode);

    // 2) Send generic message
    res.status(500).json({
      status: "error",
      // err,
      message: "Something went very wrong!",
    });
  }
};

module.exports = (err,req,res,next) => {
    console.log(err);

    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    
    if(process.env.NODE_ENV === "development"){
        sendErrorDev(err,res);
    }else if(process.env.NODE_ENV === "production"){
        let error = { ...err };
    // console.log(err);
    console.error(`${req.method} ${req.url} ${res.statusCode} error`);
    //  console.log(error)
    // console.log()
    if (error.name === "CastError") error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if(error.type==="entity.parse.failed") error=handleJsonError(error)
    // if(error.messageFormat===undefined) error= handleUndefinedError(error)
    if (error.name === "ValidationError"|| error._message)
      error = handleValidationErrorDB(error);
    if (error.name === "JsonWebTokenError") error = handleJWTError();
    if (error.name === "TokenExpiredError") error = handleJWTExpiredError();
    if(error.name ==="MulterError" && error.code === 'LIMIT_FILE_SIZE') error=handleFileLarge();
    if (error.name === 'JsonWebTokenError' && error.message === 'jwt malformed') error=handleJwtMalFormError();
    
  
    // console.log(error)

    sendErrorProd(error, res);
    }
}

