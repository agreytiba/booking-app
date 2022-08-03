import User from "../models/userModel.js"
import bcrypt from 'bcrypt'
 import { createError } from "../utils/error.js";

// register user
export const register = async (req, res, next) => {
    try {
        
        // hashing the password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync("B4c0/\/", salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password:hash,
        })
        
        await newUser.save()
        res.status(200).send("user has been created")
    
   } catch (error) {
    
   }
}


// login user
export const login = async (req, res, next) => {
    try {
        
        const user = User.findOne({ username: req.body.username })
        if (!user) return next(createError(404, "User not found"))
        
        // chaeck valid of password( user enter password & register password)
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect) return next(createError(400, "invalid password or username"))
        
        await newUser.save()
        res.status(200).send("user has been created")
    
   } catch (error) {
    
   }
}