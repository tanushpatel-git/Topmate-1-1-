const User = require("../models/user.model.js");
const { verifyToken, genratedToken } = require("../utility/jwToken.js");
const nodeMail = require("../utility/nodeMail.js");
const map = new Map();
const { hashingPassword } = require("../utility/bcrypt.js");



const getUser = async (req, res) => {


    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(200).json({ status:false,message: "Login first" });
        }
        const decodedToken = verifyToken(token);
        const user = await User.findById(decodedToken.id);
        if (!user) {
            return res.status(200).json({ status:false,message: "User not found" });
        }
        return res.status(200).json({ status:true, user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }

}

const signUp = async (req, res) => {

    try {
        const data = req.body;
        if (!data) return res.status(200).json({ status:false, message: "Please fill all the details" });
        const hashPassword = hashingPassword(data.password);
        const user = await User.create({...data, password: hashPassword});
        const token = genratedToken(user._id);
        res.cookie("token", token, { httpOnly: true, sameSite: "strict", maxAge: 24 * 60 * 60 * 1000 });
        return res.status(200).json({ status:true, message: "User SignUp Successfully", user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const signIn = async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(200).json({ status:false, message: "Please fill all the details" });
        const user = await User.findOne({ email })
        if (!user) return res.status(200).json({ status:false, message: "User not found" });
        if (user.password !== password) return res.status(200).json({ status:false, message: "Invalid password" });
        const token = genratedToken(user._id);
        res.cookie("token", token, { httpOnly: true, sameSite: "strict", maxAge: 24 * 60 * 60 * 1000 });
        return res.status(200).json({ status:true, message: "User SignIn Successfully", user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const signInWithGoogle = async (req, res) => {
    try {
        const email = req.body.email;
        if (!email) return res.status(200).json({ status:false, message: "Email is required" });
        const user = await User.findOne({ email })
        if (!user) return res.status(200).json({ status:false, message: "User not exist please signup first" });
        const token = genratedToken(user._id);
        res.cookie("token", token, { httpOnly: true, sameSite: "strict", maxAge: 24 * 60 * 60 * 1000 });
        return res.status(200).json({ status:true, message: "User SignIn Successfully", user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const emailCheckReq = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(200).json({ status:false, message: "Email is required" });
        const user = await User.findOne({ email });
        if (!user) return res.status(200).json({ status:false, message: "User not found" });
        const otp = Math.floor(100000 + Math.random() * 900000);
        map.set(email, otp);
        const message = `
        <h1>Topmate Verification OTP</h1>
        <p>Your otp is ${otp}</p>
        `;
        await nodeMail(email, message);
        return res.status(200).json({status:true, message: "Email is Verified Otp is send to your register email check!" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const otpCheck = async (req, res) => {
    try {
        const { email, otp } = req.body;
        if (!email || !otp) return res.status(200).json({ status:false, message: "Email and Otp is required" });
        const user = await User.findOne({ email });
        if (!user) return res.status(200).json({ status:false, message: "User not found" });
        if (map.get(email) != Number(otp)) return res.status(200).json({ status:false, message: "Invalid Otp" });
        map.delete(email);
        const token = genratedToken(user._id);
        res.cookie("token", token, { httpOnly: true, sameSite: "strict", maxAge: 24 * 60 * 60 * 1000 });
        return res.status(200).json({status:true, message: "User Otp Verified and SignIn Successfully", user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({status:true, message: "User Logout Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const deleteAccount = async (req, res) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(200).json({ status:false, message: "Login first" });
        }
        const decodedToken = verifyToken(token);
        const user = await User.findById(decodedToken.id);
        if (!user) {
            return res.status(200).json({ status:false, message: "User not found" });
        }
        await User.deleteOne({ _id: decodedToken.id });
        res.clearCookie("token");
        return res.status(200).json({status:true, message: "User Deleted Successfully" });
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
        if (!user) return res.status(200).json({ status:false, message: "User not found" });
        if (req.body.password) {
            const hashPassword = hashingPassword(req.body.password);
            await User.updateOne({ _id: id }, { $set: {...req.body, password: hashPassword} });
        }else{
            await User.updateOne({ _id: id }, { $set: req.body });
        }
        return res.status(200).json({status:true, message: "User Updated Successfully" });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server error",
        })
    }

}


module.exports = { getUser, signUp, signIn, signInWithGoogle, emailCheckReq, otpCheck, logout, deleteAccount, updateAccount }