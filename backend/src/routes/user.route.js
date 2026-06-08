const express = require("express");
const router = express.Router();
const { getUser, signUp, signIn, signInWithGoogle, emailCheckReq, otpCheck, logout, deleteAccount, updateAccount, updateUserSettings, getAllUsers, getMarketplaceData } = require("../controllers/user.controler.js");
const { makeProfileDesign, getProfileDesign, getPublicProfile, deleteProfileHighlight, updateProfileImage } = require("../controllers/userProfileDesign.controller.js");
const upload = require("../utility/Multer");


// Routes
router.get('/getCurrUser', getUser);
router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/signin-with-google', signInWithGoogle);
router.post('/email-check', emailCheckReq);
router.post('/otp-verification', otpCheck);
router.get('/logout', logout);
router.get('/delete-account', deleteAccount);
router.get('/get-all-users', getAllUsers);
router.post('/update-profile', updateAccount);
router.post('/update-settings', updateUserSettings);
router.get("/marketplace", getMarketplaceData);
router.get("/profile-design", getProfileDesign);
router.post("/profile-design", makeProfileDesign);
router.get("/public-profile/:userId", getPublicProfile);
router.delete("/profile-design/highlight", deleteProfileHighlight);
router.post("/profile-design/image", upload.single("profileImage"), updateProfileImage);

module.exports = router;
