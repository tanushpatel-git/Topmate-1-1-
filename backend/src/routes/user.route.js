const express = require("express");
const router = express.Router();
const { getUser, signUp, signIn, signInWithGoogle } = require("../controllers/user.controler");


router.get('/getCurrUser', getUser);
router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/signin-with-google', signInWithGoogle);


module.exports = router;
