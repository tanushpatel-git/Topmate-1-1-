const User = require("../models/user.model.js");
const { verifyToken, genratedToken } = require("../utility/jwToken.js");
const { resendMail } = require("../utility/resendMail.js");

const map = new Map();

const getUser = async (req, res) => {

    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(401).json({ message: "Login first" });
        }
        const decodedToken = verifyToken(token);
        const user = await User.findById(decodedToken.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }

}

const signUp = async (req, res) => {

    try {
        const data = req.body;
        if (!data) return res.status(400).json({ message: "Please fill all the details" });
        const user = await User.create(data);
        const token = genratedToken(user._id);
        res.cookie("token", token, { httpOnly: true, sameSite: "strict", maxAge: 24 * 60 * 60 * 1000 });
        return res.status(200).json({ message: "User SignUp Successfully", user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const signIn = async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: "Please fill all the details" });
        const user = await User.findOne({ email })
        if (!user) return res.status(404).json({ message: "User not found" });
        if (user.password !== password) return res.status(401).json({ message: "Invalid password" });
        const token = genratedToken(user._id);
        res.cookie("token", token, { httpOnly: true, sameSite: "strict", maxAge: 24 * 60 * 60 * 1000 });
        return res.status(200).json({ message: "User SignIn Successfully", user });
    } catch (error) {
        console.log(error);
        return res.status(200).json({ message: "Internal server error" });
    }
}

const signInWithGoogle = async (req, res) => {
    try {
        const email = req.body.email;
        if (!email) return res.status(400).json({ message: "Email is required" });
        const user = await User.findOne({ email })
        if (!user) return res.status(404).json({ message: "User not exist please signup first" });
        const token = genratedToken(user._id);
        res.cookie("token", token, { httpOnly: true, sameSite: "strict", maxAge: 24 * 60 * 60 * 1000 });
        return res.status(200).json({ message: "User SignIn Successfully", user });
    } catch (error) {

    }
}

const emailCheckReq = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ message: "Email is required" });
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });
        const otp = Math.floor(100000 + Math.random() * 900000);
        map.set(email, otp);
        const message = `
        <h1>Topmate Verification OTP</h1>
        <p>Your otp is ${otp}</p>
        `;
        await resendMail(email, message);
        return res.status(200).json({ message: "Email is Verified Otp is send to your register email check!" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const otpCheck = async (req, res) => {
    try {
        const { email, otp } = req.body;
        if (!email || !otp) return res.status(400).json({ message: "Email and Otp is required" });
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });
        if (map.get(email) != Number(otp)) return res.status(401).json({ message: "Invalid Otp" });
        map.delete(email);
        const token = genratedToken(user._id);
        res.cookie("token", token, { httpOnly: true, sameSite: "strict", maxAge: 24 * 60 * 60 * 1000 });
        return res.status(200).json({ message: "User SignIn Successfully", user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}


module.exports = { getUser, signUp, signIn, signInWithGoogle, emailCheckReq, otpCheck }