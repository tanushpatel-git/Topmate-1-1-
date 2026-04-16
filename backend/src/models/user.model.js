const mongoose = require("mongoose");


const goalsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ["Complete", "Not Interested", "Interested"],
        default: "Interested"
    },

})

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    country: {
        type: String,
        required: true,
        trim: true,
    },
    currency: {
        type: String,
        required: true,
        trim: true,
    },
    expertise: {
        type: Array,
        required: true,
        trim: true,
    },
    linkedInUrl: {
        type: String,
        trim: true,
    },
    twitterUrl: {
        type: String,
        trim: true,
    },
    instagramUrl: {
        type: String,
        trim: true,
    },
    whatsAppNumber: {
        type: String,
        required: true,
        trim: true,
    },
    availability: {
        type: Object,
        required: true,
        trim: true,
    },
    service: {
        type: Array,
        required: true,
        trim: true,
    },
    goals: {
        type: [goalsSchema],
        default: []
    },
    userImageUrl: {
        type: String,
        trim: true,
        default: "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
    },
    role: {
        type: String,
        enum: ["user", "expert"],
        default: "user"
    }

})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel
