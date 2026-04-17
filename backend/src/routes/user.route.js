const express = require("express");
const router = express.Router();
const { getUser, signUp, signIn, signInWithGoogle, emailCheckReq } = require("../controllers/user.controler");


router.get('/getCurrUser', getUser);
router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/signin-with-google', signInWithGoogle);
router.post('/email-check', emailCheckReq);


module.exports = router;
