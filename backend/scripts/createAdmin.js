const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const User = require("../src/models/user.model");
const { hashingPassword } = require("../src/utility/bcrypt");

const email = "nikeshparte726@gmail.com";
const password = "Password$4";

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    let user = await User.findOne({ email });
    if (user) {
      user.role = "admin";
      await user.save();
      console.log(`User ${user.email} already exists. Role updated to admin.`);
    } else {
      const hash = hashingPassword(password);
      user = await User.create({
        firstName: "Admin",
        lastName: "User",
        userName: "admin",
        email,
        password: hash,
        country: "India",
        currency: "INR",
        expertise: [],
        whatsAppNumber: "0000000000",
        role: "admin",
      });
      console.log(`Admin user created: ${user.email}`);
    }
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

