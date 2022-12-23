import { checkParams, userValidate } from "../validation/validate.js"
import {customError} from "../exceptions/customError.js"
const userValidateMiddleware = (req,res,next) => {
  try {
    const { error, value } = userValidate.validate(req.body)
    if (error) {
      throw new Error(error.message)
    }
  } catch (error) {
    next(new customError(400,error.message.replaceAll('"',"")))
  }
  next()
}
const checkParamsMiddleware = (req,res,next) => {
  try {
    const { error, value } = checkParams.validate(req.params)
    if (error) {
      throw new Error(error.message)
    }
  } catch (error) {
    next(new customError(400,error.message.replaceAll('"',"")))
  }
  next()
}
export {
  userValidateMiddleware,
  checkParamsMiddleware
}