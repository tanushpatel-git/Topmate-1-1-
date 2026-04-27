const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true
  },

  title: {
    type: String,
    required: true,
    trim: true
  },

  slug: {
    type: String,
    unique: true
  },

  description: {
    type: String,
    trim: true
  },

  longDescription: {
    type: String,
    trim: true
  },


  category: {
    type: String,
    enum: [
      "one-to-one",
      "priorityDm",
      "workshop",
      "product",
      "package"
    ],
    required: true,
    index: true
  },

  duration: {
    type: Number,
    default: 30,
  },


  price: {
    type: Number,
    required: true
  },

  instructions: {
    type: String,
    trim: true
  },

  mode: {
    type: String,
    enum: ["online", "offline"],
    default: "online"
  },

  meetingLink: {
    type: String,
    trim: true,
    required: function () {
      return this.mode === "online";
    }
  },

  maxBookings: {
    type: Number,
    default: 1
  },

  startDate: {
    type: Date,
    default: Date.now(),
    index: true
  },

  endDate: {
    type: Date,
    default: Date.now() + 86400000,
    index: true
   },

  coverImage: {
    type: String,
    default: ""
  },
  thumbnail: {
    type: String,
    default: ""
  },

  status: {
    type: String,
    enum: ["draft", "published", "archived"],
    default: "draft"
  },
  meetingLink: String,

  isActive: {
    type: Boolean,
    default: true,
    index: true
  },
    
  link: {
    type: String,
    default: "",
    trim: true
  },

},{timestamps: true });


//Fast filtering
serviceSchema.index({ user: 1, isActive: 1, createdAt: -1 });

//Smart search
serviceSchema.index(
  { title: "text", description: "text" },
  { weights: { title: 5, description: 2 } }
);

module.exports = mongoose.model("Service", serviceSchema);