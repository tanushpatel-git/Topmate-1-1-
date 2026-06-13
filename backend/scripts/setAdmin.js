const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

const User = require("../src/models/user.model");

const email = process.argv[2];
if (!email) { console.log("Usage: node scripts/setAdmin.js <email>");
  process.exit(1);
}



mongoose
.connect(process.env.MONGODB_URI)
.then(async () => {
    const user = await User.findOneAndUpdate(
      { email: "nikeshparte726@gmail.com" },
      { role: "admin" },
      { new: true }
  );
  if (user) {
    console.log(`User ${user.email} is now an admin`);
    } else {
      console.log(`User with email ${email} not found`);
    }
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
