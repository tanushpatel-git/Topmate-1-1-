const express = require("express");
const router = express.Router();

const auth = require("../Middleware/jsonWebTokenCheck");

const {getStreamToken,} = require("../controllers/StreamController");

router.get("/token", auth, getStreamToken);

module.exports = router;