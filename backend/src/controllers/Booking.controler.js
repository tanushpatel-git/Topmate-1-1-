const Booking = require("../models/Booking.model");

// ✅ CREATE BOOKING
 const createBooking = async (req, res) => {
  try {
    const {
      seeker,     // logged-in user
      creator,    // mentor
      service,    // service id
      date,
      time,
      duration,
      price,
    } = req.body;

    if (!seeker || !creator || !service || !date || !time) {
      return res.status(400).json({
        success: false,
        message: "All required fields are missing",
      });
    }

    const existing = await Booking.findOne({
      creator,
      date,
      time,
      status: { $ne: "cancelled" }, // ignore cancelled
    });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Slot already booked",
      });
    }

    // ✅ Create booking
    const booking = await Booking.create({
      seeker,
      creator,
      service,
      date,
      time,
      duration,
      price,
      status: "pending",
    });

    return res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking,
    });

  } catch (error) {
    console.error("Create Booking Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};




 const getSeekerBookings = async (req, res) => {
  try {
    const { seekerId } = req.params;

    const bookings = await Booking.find({ seeker: seekerId })
      .populate("creator", "firstName lastName userImageUrl")
      .populate("service");

    res.status(200).json({
      success: true,
      bookings,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching bookings",
    });
  }
};



 const getCreatorBookings = async (req, res) => {
  try {
    const { creatorId } = req.params;

    const bookings = await Booking.find({ creator: creatorId })
      .populate("seeker", "firstName lastName userImageUrl")
      .populate("service");

    res.status(200).json({
      success: true,
      bookings,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching bookings",
    });
  }
};


const cancelBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;

    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { status: "cancelled" },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Booking cancelled",
      booking,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error cancelling booking",
    });
  }
};


const confirmBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;

    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { 
        status: "confirmed",
        meetingLink: "https://meet.link/xyz" // later dynamic
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Booking confirmed",
      booking,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error confirming booking",
    });
  }
};



module.exports = {
  createBooking,
  getSeekerBookings,
  getCreatorBookings,
  cancelBooking,
  confirmBooking,
};

