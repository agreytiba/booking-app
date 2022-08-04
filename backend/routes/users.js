import express from "express";
const router = express.Router()
import {  deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

// get all Users with route ('/')
router.route("/").get( verifyAdmin,getAllUsers)

// PUT,DELETE,GET User With route ('/:id')
router.route('/:id').put( verifyUser,updateUser).delete( verifyUser,deleteUser).get(verifyUser,getUser)




export default router