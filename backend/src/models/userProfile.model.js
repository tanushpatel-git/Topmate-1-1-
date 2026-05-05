const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    color: {
        type: String,
        trim: true
    },
    profileImage: {
        type: String,
        trim: true
    },
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    displayName: {
        type: String,
        trim: true
    },
    topmateIntro: {
        type: String,
        trim: true
    },
    aboutYourself: {
        type: String,
        trim: true
    },
    socialLink: {
        type: String,
        trim: true
    },
    recomdation: {
        form: {
            type: String,
            trim: true
        },
        recomdationText: {
            type: String,
            trim: true
        },
    },
    highlightLink: {
        url: {
            type: String,
            trim: true
        },
        imageUrl: {
            type: String,
            trim: true
        },
    },
    testimonial: {
        form: {
            type: String,
            trim: true
        },
        testimonialText: {
            type: String,
            trim: true
        },
    },
    offer: {
        type: String,
        trim: true
    },
    donation: {
        type: String,
        trim: true
    },
    services: {
        type: [Object]
    },
    badges: {
        type: [Object]
    },
    imageFun: {
        type: String,
        enum: ["https://topmate.io/images/public-profile/testimonial-covers/testimonial-cover-heart.svg", "https://topmate.io/images/public-profile/testimonial-covers/testimonial-cover-letters.svg", "https://topmate.io/images/public-profile/testimonial-covers/testimonial-cover-flowers.svg"]
    }
})

module.exports = mongoose.model("UserProfile", userProfileSchema);