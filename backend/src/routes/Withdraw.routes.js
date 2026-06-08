

const express = require("express");
const router = express.Router();
const { requestWithdrawal, getWithdrawals } = require("../controllers/Withdraw.controller");
const auth = require('../middleware/jsonWebTokenCheck');

router.post("/seller/withdraw", auth, requestWithdrawal);
router.get("/seller/withdrawals", auth, getWithdrawals);

module.exports = router;
