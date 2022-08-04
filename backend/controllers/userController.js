import { createError } from "../utils/error.js";
import User from "../models/userModel.js";



// update User
// @method: PUT, findByIdAndUpdate(id)
// @status: private
export  const updateUser = async (req, res,next) => {
  try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body },{new:true})
      res.status(200).json(updatedUser)
  } catch (err) {
      next(err)
  }
}

// delet User
// @method: DELETE,findByIdAndDelete(id)
// @status: private
export const deleteUser= async (req, res,next) => {
  try {
      await User.findByIdAndDelete(req.params.id)
      res.status(200).json("user has been deleted")
  } catch (err) {
   next(err)
  }
  
}

// get a single User
// @method: GET,findById(id)
// @status: private
export const getUser = async (req, res, next) => {
  try {
      const user = await User.findById(
          req.params.id
      )
      res.status(200).json(user)
  } catch (err) {
   next (err)
  }
}

// Get all  User
// @method: GET,find()
// @status: private
export const getAllUsers= async (req, res,next) => {
  try {
      const users = await User.find()
      res.status(200).json(users
      )
  } catch (err) {
   next(err)
  }
}
