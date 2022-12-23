const errorHandlerMiddleware = (err,req,res,next) => {
  if (err) {
    res.status(err.status).json({
      message:err.message
    })
    return
  }
}
export {
  errorHandlerMiddleware
}