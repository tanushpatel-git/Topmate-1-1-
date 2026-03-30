const express = require("express");
const app = require("./src/app")
require("dotenv").config({quiet:true})

const port = process.env.PORT || 8000;

app.listen(port,()=>{
    try {
        console.log(`Server is running on port ${port}`)
    } catch (error) {
        console.log(error)
    }
})