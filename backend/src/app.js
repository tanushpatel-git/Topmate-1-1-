const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:"https://localhost:5173",
    credentials:true
}))
app.use(cookieParser())


// router level imports


module.exports = app;