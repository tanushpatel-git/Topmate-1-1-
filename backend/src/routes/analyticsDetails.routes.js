const express = require("express");
const router = express.Router();
const auth = require("../Middleware/jsonWebTokenCheck");
const {getDataOfBooking} = require("../controllers/getAnalytics.controler");



router.get("/:type", auth, getDataOfBooking);


module.exports = router;