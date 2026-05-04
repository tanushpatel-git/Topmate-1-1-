const User = require("../models/user.model.js");
const Service = require("../models/userService.model.js");
const { verifyToken, genratedToken } = require("../utility/jwToken.js");
const nodeMail = require("../utility/nodeMail.js");
const map = new Map();
const { hashingPassword, comparePassword } = require("../utility/bcrypt.js");
const { get } = require("mongoose");


const getUser = async (req, res) => {

    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(200).json({ status: false, message: "Login first" });
        }
        const decodedToken = verifyToken(token);
        const user = await User.findById(decodedToken.id);
        if (!user) {
            return res.status(200).json({ status: false, message: "User not found" });
        }
        return res.status(200).json({ status: true, user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }

}

const signUp = async (req, res) => {

    try {
        const data = req.body;
        if (!data) return res.status(200).json({ status: false, message: "Please fill all the details" });
        const hashPassword = hashingPassword(data.password);
        const user = await User.create({ ...data, password: hashPassword });
        const token = genratedToken(user._id);
        res.cookie("token", token, { httpOnly: true, sameSite: "strict", maxAge: 24 * 60 * 60 * 1000 });
        return res.status(200).json({ status: true, message: "User SignUp Successfully", user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const signIn = async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(200).json({ status: false, message: "Please fill all the details" });
        const user = await User.findOne({ email })
        if (!user) return res.status(200).json({ status: false, message: "User not found" });
        const verifyPassword = comparePassword(password, user.password);
        if (!verifyPassword) return res.status(200).json({ status: false, message: "Invalid password" });
        const token = genratedToken(user._id);
        res.cookie("token", token, { httpOnly: true, sameSite: "strict", maxAge: 24 * 60 * 60 * 1000 });
        return res.status(200).json({ status: true, message: "User SignIn Successfully", user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}


const signInWithGoogle = async (req, res) => {
    try {
        const email = req.body.email;
        if (!email) return res.status(200).json({ status: false, message: "Email is required" });
        const user = await User.findOne({ email })
        if (!user) return res.status(200).json({ status: false, message: "User not exist please signup first" });
        const token = genratedToken(user._id);
        res.cookie("token", token, { httpOnly: true, sameSite: "strict", maxAge: 24 * 60 * 60 * 1000 });
        return res.status(200).json({ status: true, message: "User SignIn Successfully", user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const emailCheckReq = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(200).json({ status: false, message: "Email is required" });
        const user = await User.findOne({ email });
        if (!user) return res.status(200).json({ status: false, message: "User not found" });
        const otp = Math.floor(100000 + Math.random() * 900000);
        map.set(email, otp);
        const message = `
        <h1>Topmate Verification OTP</h1>
        <p>Your otp is ${otp}</p>
        `;
        await nodeMail(email, message);
        return res.status(200).json({ status: true, message: "Email is Verified Otp is send to your register email check!" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const otpCheck = async (req, res) => {
    try {
        const { email, otp } = req.body;
        if (!email || !otp) return res.status(200).json({ status: false, message: "Email and Otp is required" });
        const user = await User.findOne({ email });
        if (!user) return res.status(200).json({ status: false, message: "User not found" });
        if (map.get(email) != Number(otp)) return res.status(200).json({ status: false, message: "Invalid Otp" });
        map.delete(email);
        const token = genratedToken(user._id);
        res.cookie("token", token, { httpOnly: true, sameSite: "strict", maxAge: 24 * 60 * 60 * 1000 });
        return res.status(200).json({ status: true, message: "User Otp Verified and SignIn Successfully", user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({ status: true, message: "User Logout Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const deleteAccount = async (req, res) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(200).json({ status: false, message: "Login first" });
        }
        const decodedToken = verifyToken(token);
        const user = await User.findById(decodedToken.id);
        if (!user) {
            return res.status(200).json({ status: false, message: "User not found" });
        }
        await User.deleteOne({ _id: decodedToken.id });
        res.clearCookie("token");
        return res.status(200).json({ status: true, message: "User Deleted Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const updateAccount = async (req, res) => {
    try {
        const { token } = req.cookies;
        const { id } = verifyToken(token);
        const user = await User.findById(id);
        if (!user) return res.status(200).json({ status: false, message: "User not found" });
        if (req.body.password) {
            const hashPassword = hashingPassword(req.body.password);
            await User.updateOne({ _id: id }, { $set: { ...req.body, password: hashPassword } });
        } else {
            await User.updateOne({ _id: id }, { $set: req.body });
        }
        return res.status(200).json({ status: true, message: "User Updated Successfully" });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server error",
        })
    }

}

const updateUserSettings = async (req, res) => {
  console.log("route hit");

  try {
    if (!req.body) {
      return res.status(400).json({ message: "No body provided" });
    }

    const { userId, ...updates } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // ✅ correct place
    const existingUser = await User.findById(userId);

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const updateData = {};

    if (updates.timezone !== undefined)
      updateData.timezone = updates.timezone;

    if (updates.bookingPeriod !== undefined)
      updateData.bookingPeriod = updates.bookingPeriod;

    if (updates.slotDuration !== undefined)
      updateData.slotDuration = updates.slotDuration;

    if (updates.reschedulePolicy !== undefined)
      updateData.reschedulePolicy = updates.reschedulePolicy;

    if (updates.rescheduleTiming !== undefined)
      updateData.rescheduleTiming = updates.rescheduleTiming;

    // ✅ safer notice handling
    if (updates.noticePeriod !== undefined || updates.noticeUnit !== undefined) {
      updateData.noticePeriod = {
        value:
          updates.noticePeriod ??
          existingUser.noticePeriod?.value ??
          60,
        unit:
          updates.noticeUnit ??
          existingUser.noticePeriod?.unit ??
          "Minutes",
      };
    }

    // ✅ availability validation
    if (updates.availability !== undefined) {
      const validDays = [
        "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
      ];

      for (let item of updates.availability) {
        if (!item.day || !validDays.includes(item.day)) {
          return res.status(400).json({
            success: false,
            message: `Invalid day: ${item.day}`,
          });
        }

        for (let slot of item.slots || []) {
          if (!slot.start || !slot.end) {
            return res.status(400).json({
              success: false,
              message: "Invalid slot format",
            });
          }
        }
      }

      updateData.availability = updates.availability;
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: "No valid fields provided" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { returnDocument: "after" }
    );

    return res.json({
      success: true,
      user: updatedUser,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const getAllUsers = async (req, res) => {

  try {
    

    const users = await User.find();

    res.status(200).json({
      success: true,
      users,
    });

  } catch (error) {
    console.log(" Error:", error.message);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getMarketplaceData = async (req, res) => {
  try {
    const services = await Service.find()
      .populate("user", "-password -__v");

    const filteredServices = services.filter((s) => s.user !== null);

    res.status(200).json({
      success: true,
      count: filteredServices.length,
      data: filteredServices,
    });

  } catch (error) {
    console.error("Error fetching services:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


// const getMarketplaceData = async (req, res) => {
//   try {
//     const { category } = req.query;

//     const services = await Service.aggregate([
      
//       // ✅ filter category (optional)
//       ...(category ? [{ $match: { category } }] : []),

//       // ✅ join user
//       {
//         $lookup: {
//           from: "users",
//           localField: "user",
//           foreignField: "_id",
//           as: "userDetails",
//         },
//       },

//       // ✅ convert array → object
//       {
//         $unwind: "$userDetails",
//       },

//       // ✅ only active services
//       {
//         $match: { isActive: true },
//       },

//       // ✅ final structure (IMPORTANT 🔥)
//       {
//         $project: {
//           _id: 1,
//           title: 1,
//           price: 1,
//           duration: 1,
//           category: 1,
//           description: 1,

//           userDetails: {
//             _id: "$userDetails._id",
//             firstName: "$userDetails.firstName",
//             lastName: "$userDetails.lastName",
//             userImageUrl: "$userDetails.userImageUrl",
//             expertise: "$userDetails.expertise",
//           },
//         },
//       },
//     ]);

//     res.status(200).json({
//       success: true,
//       services,
//     });

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };



module.exports = { getUser, signUp, signIn, signInWithGoogle, emailCheckReq, getMarketplaceData, otpCheck, logout, deleteAccount, updateAccount, updateUserSettings, getAllUsers };
