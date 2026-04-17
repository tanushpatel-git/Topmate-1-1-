const express = require("express");
const router = express.Router();
const { getUser, signUp } = require("../controllers/user.controler");


router.get('/getCurrUser', getUser);
router.post('/signup', signUp);


module.exports = router;
