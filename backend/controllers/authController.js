import User from "../models/userModel.js"
import bcrypt from 'bcrypt'
import { createError } from "../utils/error.js";
import  jwt  from "jsonwebtoken";

// register user
// @method: POST,new Instance().save
// @status: public
export const register = async (req, res, next) => {
    try {
        
        // hashing the password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        // create user
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
// @method: POST,findOne()
// @status: public
export const login = async (req, res, next) => {
    try {
        
        // find spefic user
        const user = await User.findOne({ username: req.body.username })

        // check for existing of user
        if (!user) return next(createError(404, "User not found"))
        
        // chaeck valid of password( user enter password & register password)
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return next(createError(400, "invalid password or username"))

        // create jwt token
        const token = jwt.sign({id:user._id, isAdmin: user.isAdmin}, process.env.JWT)
        
        // destructure the object to remove password and isAdmin
        const { password, isAdmin, ...otherDetails } = user._doc;
        res.cookie("access_token", token, {httpOnly:true}).status(200).send({...otherDetails})
    
    } catch (err) {
        next(err)
    
   }
}