import Room from "../models/roomModel.js"
import Hotel from "../models/hotelModel.js"


//  pass the room id to the Hotel
export const createRoom = async (req, res, next) => {
    
    const hotelId = req.params.hotelid
    const newRoom = new Room(req.body)

    try {
        const savedRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId,{$push: {rooms: savedRoom._id}})
        } catch (error) {
            next(err)
        }
        res.status(200).json(savedRoom);
    } catch (err) {
        next(err)
    }

}


// update Room
// @method: PUT, findByIdAndUpdate(id)
// @status: private
export  const updateRoom = async (req, res,next) => {
  try {
      const updatedRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body },{new:true})
      res.status(200).json(updatedRoom)
  } catch (err) {
      next(err)
  }
}

// delete Room
// @method: DELETE,findByIdAndDelete(id)
// @status: private
export const deleteRoom = async (req, res, next) => {
     const hotelId = req.params.hotelid
  try {
      await Room.findByIdAndDelete(req.params.id)
         try {
            await Hotel.findByIdAndUpdate(hotelId,{$pull: {rooms: req.params.id}})
        } catch (error) {
            next(err)
        }
      res.status(200).json("Room has been deleted")
  } catch (err) {
   next(err)
  }
  
}

// get a single Room
// @method: GET,findById(id)
// @status: private
export const getRoom = async (req, res, next) => {
  try {
      const room = await Room.findById(
          req.params.id
      )
      res.status(200).json(room)
  } catch (err) {
   next (err)
  }
}

// Get all  Rooms
// @method: GET,find()
// @status: private
export const getAllRooms= async (req, res,next) => {
  try {
      const rooms = await Hotel.find()
      res.status(200).json(rooms)
  } catch (err) {
   next(err)
  }
}
