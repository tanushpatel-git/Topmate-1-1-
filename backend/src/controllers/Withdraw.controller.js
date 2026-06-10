const Withdrawal = require("../models/withdrawal.model");
const Booking = require("../models/Booking.model");
const User = require("../models/user.model");

const Razorpay = require("razorpay");

const razorpay = new Razorpay({
key_id: process.env.RAZORPAY_KEY_ID,
key_secret: process.env.RAZORPAY_SECRET_KEY,
});
console.log("fundAccount", razorpay.fundAccount);
console.log("transfers", razorpay.transfers);
console.log("payouts", razorpay.payouts);
console.log("fundAccount", razorpay.fundAccount);
console.log('contacts', razorpay.contacts);

const requestWithdrawal = async (req, res) => {
try {

const sellerId = req.user.id;
const seller = await User.findById(sellerId);
if (
  !seller.accountNumber ||!seller.ifscCode ||!seller.accountHolderName
) {
  return res.status(400).json({
    success: false,
    message:"Please add bank details first",
  });
}

const bookings = await Booking.find({
  creator: sellerId,
  payment: true,
  status: "completed",
  withdrawn: false,
});

if (!bookings.length) {
  return res.status(400).json({
    success: false,
    message:"No withdrawable balance available",
  });
}

const amount = bookings.reduce(
  (sum, booking) =>
    sum + (booking.sellerEarning || 0),
  0
);

const withdrawal = await Withdrawal.create({
    seller: sellerId, amount,
    bookings: bookings.map((b) => b._id),status: "processing",});


    // Create Contact
    const contact = await razorpay.contacts.create({
      name: seller.accountHolderName,
      email: seller.email,
      contact: seller.whatsAppNumber,
      type: "vendor",
    });
    

    

// Create Fund Account
const fundAccount = await razorpay.fundAccount.create({
    contact_id: contact.id,
    bank_account: {
      name: seller.accountHolderName,
      ifsc: seller.ifscCode,
      account_number: seller.accountNumber,
    },
  });

// Create Payout
const payout = await razorpay.payouts.create({
    account_number: process.env.RAZORPAY_MASTER_ACCOUNT,
    fund_account_id: fundAccount.id,
    amount: amount * 100,
    currency: "INR",
    mode: "IMPS",
    purpose: "payout",
    queue_if_low_balance: true,
    reference_id: withdrawal._id.toString(),
  });

withdrawal.payoutId = payout.id;
withdrawal.status = payout.status === "processed" ? "completed" : "processing";
await withdrawal.save();

// Mark bookings withdrawn only after payout created successfully
await Booking.updateMany({
    _id: { $in: bookings.map( (b) => b._id),},
  },
  {
    withdrawn: true,
    withdrawnAt: new Date(),
    withdrawalId:
      withdrawal._id,
  }
);

return res.status(200).json({
  success: true,
  message:
    "Withdrawal processed successfully",
  payoutId: payout.id,
  withdrawal,
});

} catch (error) {
console.log(error);
return res.status(500).json({
  success: false,
  message: error.message,
});
}
};


const getWithdrawals = async (req, res) => {
  try {

    const sellerId = req.user.id;

    const withdrawals =
      await Withdrawal.find({
        seller: sellerId,
      })
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      withdrawals,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


module.exports = { requestWithdrawal, getWithdrawals };
