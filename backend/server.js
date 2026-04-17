const express = require("express");
const app = require("./src/app")
require("dotenv").config({quiet:true})
const mongoDB = require("./src/utility/mongoDB");

const port = process.env.PORT || 8000;

app.listen(port, async ()=>{
    try {
        await mongoDB()
        console.log(`Server is running on port ${port}`)
    } catch (error) {
        console.log(error)
    }
})