const express = require("express");
const router = express.Router();
const { getUser, signUp, signIn, signInWithGoogle, emailCheckReq, otpCheck } = require("../controllers/user.controler.js");


router.get('/getCurrUser', getUser);
router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/signin-with-google', signInWithGoogle);
router.post('/email-check', emailCheckReq);
router.post('/otp-verification', otpCheck);


module.exports = router;
