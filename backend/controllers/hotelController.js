import { createError } from "../utils/error.js";
import Hotel from "../models/hotelModel.js";


// create
 export const createHotel = async (req, res,next) => {
    const newHotel = new hotelModel(req.body)
  try {
      const savedHotel = await newHotel.save()
      res.status(200).json(savedHotel)
  } catch (err) {
   next(err)
  }
}

// update
export  const updateHotel = async (req, res,next) => {
  try {
      const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body },{new:true})
      res.status(200).json(updtedHotel)
  } catch (err) {
      next(err)
  }
}

// delete
export const deleteHotel= async (req, res,next) => {
  try {
      await Hotel.findByIdAndDelete(req.params.id)
      res.status(200).json("hotel has been deleted")
  } catch (err) {
   next(err)
  }
  
}

// get
export const getHotel = async (req, res, next) => {
  try {
      const hotel = await Hotel.findById(
          req.params.id
      )
      res.status(200).json(hotel)
  } catch (err) {
   next (err)
  }
}
// get all 
export const getAllHotels= async (req, res,next) => {
  try {
      const hotels = await Hotel.find()
      res.status(200).json(hotels
      )
  } catch (err) {
   next(err)
  }
}
