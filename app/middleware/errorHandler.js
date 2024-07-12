
// Custom error handling middleware
export const customError = (err, req, res, next) => {
  console.log("🚀 ~ customError ~ err:", err);

  const status = typeof err.status === 'number' && err.status >= 100 && err.status <= 599
    ? err.status
    : 500;

  const error = new CustomError(err.status, err.message, err.additionalInfo);
  
  // Respond with JSON
  return res.status(status).json({
    error: {
      status: error.status,
      message: error.message,
      additionalInfo: error.additionalInfo
    }
  });
};


// 404 error handling middleware
export const notFound = (req, res, next) => {
  const error = new CustomError(404, `Path not found`);
  next(error);
};



// errors.js

export class CustomError {
  status;
  message;
  additionalInfo;
  constructor(
    status = 500,
    message = 'Something went wrong',
    additionalInfo = {}
  ) {
    this.status = status;
    this.message = message;
    this.additionalInfo = additionalInfo;
  }
}

