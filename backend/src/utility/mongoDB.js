const mongoose = require("mongoose");

const mongoDB = async () => {
    try {
          const url = process.env.MONGODB_URI;
        console.log("MongoDB URI:", url)
        if (!url) {
            throw new Error("MONGODB_URI is not defined");
        }
        await mongoose.connect(url);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
        console.log("MongoDB connection failed");
    }
}

module.exports = mongoDB;