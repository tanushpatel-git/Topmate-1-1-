const User = require("../models/user.model.js");
const UserProfile = require("../models/userProfile.model.js");
const { verifyToken } = require("../utility/jwToken.js");

const makeProfileDesign = async (req, res) => {
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
        const profileDesign = await UserProfile.updateOne({ user: user._id }, { $set: req.body }, { upsert: true });
        return res.status(200).json({ status: true, message: "Profile Design Updated Successfully", profileDesign });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const getProfileDesign = async (req, res) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(401).json({ status: false, message: "Login first" });
        }
        const decodedToken = verifyToken(token);
        const user = await User.findById(decodedToken.id);
        if (!user) {
            return res.status(404).json({ status: false, message: "User not found" });
        }
        const profileDesign = await UserProfile.findOne({ user: user._id });
        if (!profileDesign) {
            return res.status(200).json({ status: true, data: null, message: "No profile design found" });
        }
        return res.status(200).json({ status: true, data: profileDesign });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports =  {makeProfileDesign, getProfileDesign};