
require("dotenv").config();
const cloudinary = require("cloudinary").v2; 

const connectCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
    
});

console.log("Cloud Name:",  process.env.CLOUDINARY_NAME);
console.log("API Key:", process.env.CLOUDINARY_API_KEY);
console.log("Secret:", process.env.CLOUDINARY_SECRET_KEY);
console.log("✅ Cloudinary Connected");

};

module.exports = { cloudinary, connectCloudinary };