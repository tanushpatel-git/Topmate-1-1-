const User = require("../models/user.model.js");
const UserProfile = require("../models/userProfile.model.js");
const { verifyToken } = require("../utility/jwToken.js");
const { cloudinary } = require("../utility/CloudInary.js");

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

const getPublicProfile = async (req, res) => {
    try {
        const { userId } = req.params;
        if (!userId) {
            return res.status(400).json({ status: false, message: "User ID is required" });
        }
        const user = await User.findById(userId).select("-password");
        if (!user) {
            return res.status(404).json({ status: false, message: "User not found" });
        }
        const profileDesign = await UserProfile.findOne({ user: userId });
        return res.status(200).json({ 
            status: true, 
            data: { 
                user, 
                profileDesign 
            } 
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const deleteProfileHighlight = async (req, res) => {
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
        const { field } = req.body;
        const validFields = ["highlightLink", "recomdation", "testimonial", "offer", "donation"];
        if (!validFields.includes(field)) {
            return res.status(400).json({ status: false, message: "Invalid highlight field" });
        }
        await UserProfile.updateOne({ user: user._id }, { $unset: { [field]: "" } });
        return res.status(200).json({ status: true, message: "Highlight deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const updateProfileImage = async (req, res) => {
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
        if (!req.file) {
            return res.status(400).json({ status: false, message: "No file uploaded" });
        }
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "profiles",
        });
        const imageUrl = result.secure_url;
        await UserProfile.updateOne({ user: user._id }, { $set: { profileImage: imageUrl } }, { upsert: true });
        return res.status(200).json({ status: true, message: "Profile image updated successfully", imageUrl });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports =  {makeProfileDesign, getProfileDesign, getPublicProfile, deleteProfileHighlight, updateProfileImage};