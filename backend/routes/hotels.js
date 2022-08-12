import express from "express";

import { countByCity, countByType, createHotel, deleteHotel, getAllHotels, getHotel, updateHotel,getHotelRooms } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router()

//  craete hotel
router.post("/",verifyAdmin, createHotel)

// update hotel
router.put("/:id", verifyAdmin, updateHotel)

// DELETE  hotel
router.delete("/:id", verifyAdmin, deleteHotel)
    
// GET a single hotel
router.get("/find/:id", getHotel)

// GET all hotels
router.get("/", getAllHotels)

// GET hotel by city name
router.get("/countByCity", countByCity)

// GET hotel by type
router.get("/countByType", countByType)

// GET all hotel
router.get("/room/:id", getHotelRooms)

export default router