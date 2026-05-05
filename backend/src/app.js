const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user.route.js");
const serviceRouter = require("./routes/Service.route.js");
const bookingRoutes = require("./routes/Booking.routes.js");

const app = express();




app.use(cookieParser()); 


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:"http://localhost:5175",
    credentials:true
}))
app.use(cookieParser())

//routes middleware
app.use("/api/user",userRouter);
app.use("/api/service",serviceRouter);
app.use("/api/booking",bookingRoutes);
module.exports = app; 