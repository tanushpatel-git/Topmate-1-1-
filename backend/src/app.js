//import or require every source
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user.route");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:"http://localhost:5175",
    credentials:true
}))
app.use(cookieParser())


// router level imports
app.use("/api/user",userRouter);


module.exports = app;