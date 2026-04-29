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

}, { timestamps: true })

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
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
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
  type: [
    {
      day: {
        type: String,
        enum: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        required: true,
      },
      slots: [
        {
          start: {
            type: String,
            required: true,
            match: /^([01]\d|2[0-3]):([0-5]\d)$/,
          },
          end: {
            type: String,
            required: true,
            match: /^([01]\d|2[0-3]):([0-5]\d)$/,
          },
        },
      ],
    },
  ],
  default: [],
},   

timezone: {
  type: String,
  default: "Asia/Kolkata",
},

slotDuration: {
  type: Number,
  default: 30,
},

noticePeriod: {
  value: {
    type: Number,
    default: 60,
  },
  unit: {
    type: String,
    enum: ["Minutes", "Hours", "Days"],
    default: "Minutes",
  },
},
reschedulePolicy: {
  type: String,
  enum: ["request Reschedule", "direct reschedule"],
  default: "request Reschedule",
},

rescheduleTiming: {
  type: String,
  enum: ["30 Minutes", "1 Hour", "4 Hours", "24 Hours", "Anytime"],
  default: "30 Minutes",
},


bookingPeriod: {
  type: String,
  enum: ["1 Week", "2 Weeks", "1 Month", "3 Months"],
  default: "1 Month",
},

    services: {
        type: [String],
        default: [],
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
    },
    graduationYear: {
        type: String,
        default: ""
    },
    notifications: {
        type: Boolean,
        default: true
    },
    joinDate: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true })

const userModel = mongoose.model("User", userSchema)

module.exports = userModel