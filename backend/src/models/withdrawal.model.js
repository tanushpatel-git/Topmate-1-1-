const mongoose = require("mongoose");

const withdrawalSchema = new mongoose.Schema(
{
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  amount: {type: Number,required: true,},
  payoutId: {type: String,default: "",},
  status: {
    type: String,
    enum: ["pending","processing","completed","failed",],
    default: "pending",
  },
  failureReason: {type: String,default: "",},
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },
  ],
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("Withdrawal",withdrawalSchema);