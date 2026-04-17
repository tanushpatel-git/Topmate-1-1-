const express = require("express");
const router = express.Router();
const { getUser, signUp, signIn } = require("../controllers/user.controler");


router.get('/getCurrUser', getUser);
router.post('/signup', signUp);
router.post('/signin', signIn);


module.exports = router;
