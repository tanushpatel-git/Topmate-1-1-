const User = require("../models/user.model");
const { verifyToken, genratedToken } = require("../utility/jwToken");

const getUser = async (req, res) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(200).json({ message: "Login first" });
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


const signUp = async (req, res) => {
    try {
        const data = req.body;
        if (!data) return res.status(200).json({ message: "Please fill all the details" });
        const user = await User.create(data);
        const token = genratedToken(user._id);
        res.cookie("token", token, { httpOnly: true, sameSite: "strict", maxAge: 24 * 60 * 60 * 1000 });
        return res.status(200).json({ message: "User SignUp Successfully", user });
    } catch (error) {
        console.log(error);
        return res.status(200).json({ message: "Internal server error" });
    }
}

module.exports = { getUser, signUp }