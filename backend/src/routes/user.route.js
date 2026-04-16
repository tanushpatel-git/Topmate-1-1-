const express = require("express");
const router = express.Router();
const { getUser } = require("../controllers/user.controler");


router.get('/getCurrUser',getUser)


module.exports = router;
