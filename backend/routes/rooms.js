import express from "express";

import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router()


// Create Room
router.post("/:hotelid", verifyAdmin, createRoom)

// update Room
router.put("/:id",verifyAdmin, updateRoom)
    
// delete room
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom)

// get a single room
router.get("/:id", getRoom)

//GET(all Rooms) Rooms with route('/')
router.get("/", getAllRooms)


export default router