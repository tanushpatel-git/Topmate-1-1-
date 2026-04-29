const express = require("express");
const router = express.Router();
const { getUser, signUp, signIn, signInWithGoogle, emailCheckReq, otpCheck, logout, deleteAccount, updateAccount, updateUserSettings } = require("../controllers/user.controler.js");


// Routes
router.get('/getCurrUser', getUser);
router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/signin-with-google', signInWithGoogle);
router.post('/email-check', emailCheckReq);
router.post('/otp-verification', otpCheck);
router.post('/logout', logout);
router.get('/delete-account', deleteAccount);
router.post('/update-profile', updateAccount);
router.post('/update-settings', updateUserSettings);

module.exports = router;
