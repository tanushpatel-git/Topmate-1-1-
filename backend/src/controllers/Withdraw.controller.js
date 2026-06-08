const Withdrawal = require("../models/withdrawal.model");
const Booking = require("../models/Booking.model");


const requestWithdrawal = async (req, res) => {
  try {

    const sellerId = req.user.id;
    const bookings = await Booking.find({
      creator: sellerId,
      payment: true,
      withdrawn: false,
    });

    const amount = bookings.reduce(
    (sum, booking) =>sum + (booking.sellerEarning || 0),0);
    if (amount <= 0) {
      return res.status(400).json({success: false,
        message:"No withdrawable balance available",
      });
    }

    const withdrawal =await Withdrawal.create({
        seller: sellerId,
        amount,
        bookings: bookings.map(
          (booking) => booking._id
        ),
      });

    await Booking.updateMany(
      {
        _id: {
          $in: bookings.map(
            (booking) => booking._id
          ),
        },
      },
      {
        withdrawn: true,
        withdrawnAt: new Date(),
        withdrawalId: withdrawal._id,
      }
    );

    return res.status(200).json({
      success: true,
      message:
        "Withdrawal request created",
      withdrawal,
    });

  } catch (error) {

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
      }).sort({
        createdAt: -1,
      });

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
