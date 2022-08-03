import express from "express";
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import roomsRoute from './routes/rooms.js'
import hotelsRoute from './routes/hotels.js'
import colors from 'colors'
const app = express()
const port = 5000;


// connect to mongoDB
const connectDB = async() =>{
 try {
    const conn = await mongoose.connect('mongodb://localhost/bookingApp')
    console.log(`MongoDB  connected: ${conn.connection.host}`.cyan.underline);
 } catch (error) {
     throw error
    
 }

}
mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected".grey);
})
mongoose.connection.on("connected", () => {
    console.log("mongoDB connected".magenta);
}

)
connectDB()

// middlewares

// express body parser(req.body)
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)

// error handler middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})



app.listen(port, () =>console.log(`app run in in port : ${port}`.grey))