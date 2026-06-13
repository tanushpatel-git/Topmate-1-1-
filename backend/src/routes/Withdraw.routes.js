

const express = require("express");
const router = express.Router();
const { requestWithdrawal, getWithdrawals, getAllWithdrawals, updateWithdrawalStatus } = require("../controllers/Withdraw.controller");
const auth = require('../middleware/jsonWebTokenCheck');
const adminAuth = require('../middleware/adminAuth');

router.post("/seller/withdraw", auth, requestWithdrawal);
router.get("/seller/withdrawals", auth, getWithdrawals);

router.get("/admin/withdrawals", auth, adminAuth, getAllWithdrawals);
router.put("/admin/withdrawals/:withdrawalId", auth, adminAuth, updateWithdrawalStatus);

module.exports = router;
