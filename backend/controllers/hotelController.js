import { createError } from "../utils/error.js";
import Hotel from "../models/hotelModel.js";
import Room from "../models/roomModel.js";


// create Hotel
// @method: POST,new Instance
// @status: public
 export const createHotel = async (req, res,next) => {
    const newHotel = new Hotel(req.body)
  try {
      const savedHotel = await newHotel.save()
      res.status(200).json(savedHotel)
  } catch (err) {
   next(err)
  }
}

// update Hotel
// @method: PUT, findByIdAndUpdate(id)
// @status: private
export  const updateHotel = async (req, res,next) => {
  try {
      const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body },{new:true})
      res.status(200).json(updatedHotel)
  } catch (err) {
      next(err)
  }
}

// delete Hotel
// @method: DELETE,findByIdAndDelete(id)
// @status: private
export const deleteHotel= async (req, res,next) => {
  try {
      await Hotel.findByIdAndDelete(req.params.id)
      res.status(200).json("hotel has been deleted")
  } catch (err) {
   next(err)
  }
  
}

// get a single Hotel
// @method: GET,findById(id)
// @status: public
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

// Get all  Hotels
// @method: GET,find()
// @status: public
export const getAllHotels = async (req, res, next) => {
  
   const { max,min,...others } =req.query
  try {
    const hotels = await Hotel.find({ ...others,cheapestPrice: { $gt: min | 1, $lt: max || 999}}).limit(req.query.limit)
      res.status(200).json(hotels)
  } catch (err) {
   next(err)
  }
}


// Get all Hotel by city name
// @method: GET,
// @status: public
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",")
  try {
    const list = await Promise.all(cities.map(city => {
         return Hotel.countDocuments({city:city})
      }))
    res.status(200).json(list)
    
  } catch (err) {
   next(err)
  }
}

// Get all Hotel by type
// @method: GET,
// @status: public
export const countByType = async (req, res, next) => {
  
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" })
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" })
    const resortCount = await Hotel.countDocuments({ type: "resort" })
    const villaCount = await Hotel.countDocuments({ type: "villa" })
    const cabinCount = await Hotel.countDocuments({type: "cabin"})
    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount }
      ])
  } catch (err) {
   next(err)
  }
}



// Get all Room 
// @method: GET,
// @status: public
export const getHotelRooms = async (req, res, next)=>{
  
  try {
    const hotel = Hotel.findById(req.params.id)
    const list = await Promise.all(hotel.rooms.map(room => {
      return Room.findById(room)
    }))
    res.status(200).json(list)
  } catch (err) {
    next(err)
  }


}