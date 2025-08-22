const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;
    console.error(err);

    //Mongose bad ObjectId
    if (err.name === "CastError") {
      let message = "Resourse not found";
      error = new Error(message);
      error.statusCode = 404;
    }

    //Mongoose duplicate key
    if (err.code === 11000) {
      let message = "Duplicate field, value entered";
      error = new Error(message);
      error.statusCode = 400;
    }

    //Mongoose ValidationError
    if (err.name === "ValidationError") {
      let message = Object.values(err.errors).map((val) => val.message);
      error = new Error(message.join(", "));
      error.statusCode = 400;
    }

    res
      .status(error.statusCode || 500)
      .json({ success: false, error: error.message || "Server Error" });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
