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

// seller 
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
  payment:true,
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
    bookings: bookings.map((b) => b._id), status: "pending",
});


await Booking.updateMany(
  {
    creator: sellerId,
    payment: true,
    status: "completed",
    withdrawn: false,
  },
  {
    $set: {
      withdrawn:true,
    },
  }
);



return res.status(200).json({
  success: true, message: "Withdrawal request sent to admin for approval",withdrawal,
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


// admin
const getAllWithdrawals = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = {};
    if (status) filter.status = status;

    const withdrawals = await Withdrawal.find(filter)
      .populate("seller", "firstName lastName email userName accountNumber accountHolderName ifscCode bankName upiId whatsAppNumber")
      .populate("bookings")
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

const updateWithdrawalStatus = async (req, res) => {
  try {
    const { withdrawalId } = req.params;
    const { status, failureReason } = req.body;

    if (!["completed", "failed"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Status must be 'completed' or 'failed'",
      });
    }

    const withdrawal = await Withdrawal.findById(withdrawalId).populate("seller");
    if (!withdrawal) {
      return res.status(404).json({
        success: false,
        message: "Withdrawal not found",
      });
    }

    if (withdrawal.status === "completed") {
      return res.status(400).json({
        success: false,
        message: "Withdrawal already completed",
      });
    }

    if (status === "failed") {
      withdrawal.status = "failed";
      if (failureReason) withdrawal.failureReason = failureReason;
      await withdrawal.save();
      return res.status(200).json({
        success: true,
        message: "Withdrawal rejected",
        withdrawal,
      });
    }

    const seller = withdrawal.seller;

    const contact = await razorpay.contacts.create({
      name: seller.accountHolderName,
      email: seller.email,
      contact: seller.whatsAppNumber,
      type: "vendor",
    });

    const fundAccount = await razorpay.fundAccount.create({
      contact_id: contact.id,
      bank_account: {
        name: seller.accountHolderName,
        ifsc: seller.ifscCode,
        account_number: seller.accountNumber,
      },
    });

    const payout = await razorpay.payouts.create({
      account_number: process.env.RAZORPAY_MASTER_ACCOUNT,
      fund_account_id: fundAccount.id,
      amount: withdrawal.amount * 100,
      currency: "INR",
      mode: "IMPS",
      purpose: "payout",
      queue_if_low_balance: true,
      reference_id: withdrawal._id.toString(),
    });

    withdrawal.payoutId = payout.id;
    withdrawal.status = "completed";
    await withdrawal.save();

    await Booking.updateMany(
      { _id: { $in: withdrawal.bookings } },
      {
        withdrawn: true,
        withdrawnAt: new Date(),
        payoutStatus: "withdrawn",
        withdrawalId: withdrawal._id,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Withdrawal completed. Payout sent to creator.",
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

module.exports = { requestWithdrawal, getWithdrawals, getAllWithdrawals, updateWithdrawalStatus };

