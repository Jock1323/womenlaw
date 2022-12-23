import { GET,POST,PUT } from "./model.js"

const getUsers =async (req,res,next) => {
  try {
    const users = await GET()
    if (users.length > 0) {
      res.status(200).json({
        totalCount:users.length,
        message: 'all users',
        data:users
      })
    }
    else {
      res.status(404).json({
        totalCount:users.length,
        message: 'users not found',
        data:users
      })
    }
  } catch (error) {
    next(new customError(500,error.message))
  }
}
const postUsers = async(req,res,next) => {
  try {
    const users = await POST(req.body)
    if (users.length > 0) {
      res.status(200).json({
        totalCount:users.length,
        message: 'user added',
        data:users
      })
    }
    else {
      res.status(400).json({
        totalCount:users.length,
        message: 'something went wrong',
        data:users
      })
    }
  } catch (error) {
    next(new customError(500,error.message))
  }
}
const putUsers = async(req,res,next) => {
  try {
    const users = await PUT(req.params)
    if (users.length > 0) {
      res.status(200).json({
        totalCount:users.length,
        message: 'user checked',
        data:users
      })
    }
    else {
      res.status(400).json({
        totalCount:users.length,
        message: 'user not found',
        data:users
      })
    }
  } catch (error) {
    next(new customError(500,error.message))
  }
}
const checkedUsers = async(req,res,next) => {
  try {
    const users = await GET()
    if (users.length > 0) {
      res.status(200).json({
        totalCount:users.length,
        message: 'checked users',
        data:users
      })
    }
    else {
      res.status(400).json({
        totalCount:users.length,
        message: 'user not found',
        data:users
      })
    }
  } catch (error) {
    next(new customError(500,error.message))
  }
}
export {
  getUsers,
  postUsers,
  putUsers
}