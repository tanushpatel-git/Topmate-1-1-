const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    seeker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },

    
    date: {
      type: Date,
      required: true,
    },

    
    time: {
      type: String,
      required: true,
    },

    duration: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },

    meetingLink: {
      type: String,
    },
  },
  { timestamps: true }
);


bookingSchema.index(
  { creator: 1, date: 1, time: 1 },
  { unique: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
