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

    notes:{type:String},

    date: {
      type: Date,
      default: Date.now().toString(),
    },

    
    time: {
      type: String,
      default: Date.now().toString(),
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
      enum: ["pending", "confirmed", "cancelled","completed"],
      default: "confirmed",
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
  { timestamps: true }
);


bookingSchema.index(
  { creator: 1, date: 1, time: 1 },
  { unique: true }
);

bookingSchema.index(
  { reminderTime: 1, reminderSent: 1, status: 1 },
  { background: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
