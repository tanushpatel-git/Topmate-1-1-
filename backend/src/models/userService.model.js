const mongoose = require("mongoose");

const userServiceSchema = new mongoose.Schema({
    serviceHostId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    basicDetailes: {
        typeOfServices: {
            type: String,
        },
        title: {
            type: String,
        },
        duration: {
            type: String,
        },
        amount: {
            type: Number,
        },
        questions: [Object],
    },
    design: {
        description: {
            type: String,
        },
        serviceDescription: {
            type: String,
        },
        paymentButtonLabel: {
            type: String,
        },
        serviceLabel: {
            type: String,
        },
        slachPricing: {
            type: String,
        },
    },
    advanceDetails: {
        discountedCode: {
            type: String,
        },
        customBookingMessage: {
            type: String,
            trim: true,
        },
    }
}, { timestamps: true })

module.exports = mongoose.model("UserService", userServiceSchema)