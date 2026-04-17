const User = require("../models/user.model");
const { verifyToken } = require("../utility/jwToken");

const getUser = async (req, res) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(200).json({ message: "Unauthorized" });
        }
        const decodedToken = verifyToken(token);
        const user = await User.findById(decodedToken.id);
        if (!user) {
            return res.status(200).json({ message: "User not found" });
        }
        return res.status(200).json({ user });
    } catch (error) {
        console.log(error);
        return res.status(200).json({ message: "Internal server error" });
    }
}

module.exports = { getUser }