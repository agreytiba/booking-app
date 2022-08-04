import express from "express";

import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router()

//POST,GET(all hotel) Hotel with route('/')
router.route("/").post(verifyAdmin,createHotel).get(getAllHotels)

// PUT,DELETE,GET'(single hotel) Hotel with route('/:id')
router.route('/:id').put(verifyAdmin,updateHotel).delete( verifyAdmin,deleteHotel).get(getHotel)


export default router