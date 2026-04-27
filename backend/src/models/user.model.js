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
    default: "Interested",
  },
}, { timestamps: true });


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
    unique: true, 
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  password: {
    type: String,
  },

  country: {
    type: String,
    required: true,
  },

  currency: {
    type: String,
    required: true,
  },

  expertise: [
    {
      type: String,
      trim: true,
    }
  ],

  linkedInUrl: String,
  twitterUrl: String,
  instagramUrl: String,

  whatsAppNumber: {
    type: String,
    required: true,
  },
  availability: {
    days: [String],        
    startTime: String,     
    endTime: String,       
  },

  goals: {
    type: [goalsSchema],
    default: [],
  },

  userImageUrl: {
    type: String,
    default: "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg",
  },

  role: {
    type: String,
    enum: ["user", "expert"],
    default: "user",
  },

  graduationYear: {
    type: String,
    default: "",
  },

  notifications: {
    type: Boolean,
    default: true,
  },

  joinDate: {
    type: Date,
    default: Date.now,
  },

}, { timestamps: true });

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;