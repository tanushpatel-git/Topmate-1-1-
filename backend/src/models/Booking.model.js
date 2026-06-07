
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

    question: {
      type: String,
      default: "",
    },

    answer: {
      type: String,
      default: "",
    },

    date: {
      type: Date,
      default: Date.now,
    },

    time: {
      type: String,
      default: "",
    },

    duration: {
      type: Number,
      default: 15,
    },

    price: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: [
        "pending",
        "confirmed",
        "cancelled",
        "completed",
      ],
      default: "pending",
    },

    payment: {
      type: Boolean,
      default: false,
    },

    paymentId: {
      type: String,
      default: "",
    },

    orderId: {
      type: String,
      default: "",
    },

    meetingLink: {
      type: String,
      default: "",
    },

    zoomMeetingId: {
      type: String,
      default: "",
    },

    reminderSent: {
      type: Boolean,
      default: false,
    },

    reminderTime: {
      type: Date,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
