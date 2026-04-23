const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    expertId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    bookingId: {
        type: String,
    },
    createdAt: {
        type: Date,
    },
    status: {
        type: String,
    },
    startTime: {
        type: Date,
    },
    endTime: {
        type: Date,
    },
    amount: {
        type: Number,
    },
    paymentId: {
        type: String,
    },
    paymentStatus: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true })

module.exports = mongoose.model("Booking", bookingSchema)