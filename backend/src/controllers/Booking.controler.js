const Booking = require("../models/Booking.model");
const sendBookingEmails = require("../Services/sendBookingEmails");
const User = require("../models/user.model");
const Service = require("../models/userService.model");
const { createMeeting } = require("../utility/Zoom");

const clearExpiredMeetingLink = async (booking) => {
  if (!booking || !booking.date || !booking.time || !booking.meetingLink) return;

  const [hours, minutes] = booking.time.split(":");
  const endDate = new Date(booking.date);
  endDate.setHours(hours);
  endDate.setMinutes(minutes);
  endDate.setSeconds(0);

  const endTime = new Date(endDate.getTime() + (booking.duration || 0) * 60000);

  if (new Date() >= endTime) {
    booking.meetingLink = "";
    booking.zoomMeetingId = "";
    await booking.save();
  }
};

const createBooking = async (req, res) => {
  try {
    const {
      seeker,
      creator,
      service,
      date,
      time,
      duration,
      price,
    } = req.body;


    //  Fetch full details
    const seekerUser = await User.findById(seeker);
    const creatorUser = await User.findById(creator);
    const serviceData = await Service.findById(service);


    console.log(serviceData?.category , "Booking Body");


    if(serviceData.category == 'product'){
    if (!seeker || !creator || !service ) {
      return res.status(400).json({
        success: false,
        message: "Missing fields",
      });
    }   
  }
    else {
      if (!seeker || !creator || !service || !date || !time) {
        return res.status(400).json({
          success: false,
          message: "Missing fields",
        });
      }
    }

    const existing = await Booking.findOne({
      creator,
      date,
      time,
      status: { $ne: "cancelled" },
    });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Slot already booked",
      });
    }

    const booking = await Booking.create({
      seeker,
      creator,
      service,
      date,
      time,
      duration,
      price,
      status: "confirmed",
    });

    //  CREATE ZOOM MEETING
    try {
      const [hours, minutes] = time.split(":");
      const startDate = new Date(date);
      startDate.setHours(hours, minutes, 0);
      const startTime = startDate.toISOString();
      const zoomMeeting = await createMeeting({
        topic: `Meeting: ${serviceData?.name || "Consultation"}`,
        duration: duration || 30,
        startTime,
      });

      booking.meetingLink = zoomMeeting.joinUrl;
      booking.zoomMeetingId = zoomMeeting.meetingId;
      await booking.save();
    } catch (zoomErr) {
      console.log("Zoom meeting creation failed:", zoomErr.message);
    }

    //  SEND EMAILS
    await sendBookingEmails({
      booking,
      service: serviceData,
      seeker: seekerUser,
      creator: creatorUser,
    });

    return res.status(201).json({
      success: true,
      booking,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};


const getSeekerBookings = async (req, res) => {
  try {
    const { seekerId } = req.params;

    const bookings = await Booking.find({ seeker: seekerId })
      .populate("creator", "firstName lastName userImageUrl")
      .populate("service");

    await Promise.all(bookings.map(clearExpiredMeetingLink));

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

    await Promise.all(bookings.map(clearExpiredMeetingLink));

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


const getBookingById = async (req, res) => {
  try {
    const { bookingId } = req.params;

    const booking = await Booking.findById(bookingId)
      .populate("seeker", "firstName lastName userImageUrl")
      .populate("creator", "firstName lastName userImageUrl")
      .populate("service");

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    await clearExpiredMeetingLink(booking);

    res.status(200).json({
      success: true,
      booking,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error fetching booking",
    });
  }
};


const cancelBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;

    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { status: "cancelled" },
      { returnDocument: "after" }
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
      { status: "confirmed" },
      { returnDocument: "after" }
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
  getBookingById,
  cancelBooking,
  confirmBooking,
};

