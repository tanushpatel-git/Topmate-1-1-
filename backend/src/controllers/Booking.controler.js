const Booking = require("../models/Booking.model");
const sendBookingEmails = require("../Services/sendBookingEmails");
const User = require("../models/user.model");
const Service = require("../models/userService.model");
const { createMeeting } = require("../utility/Zoom");
const sendPriorityDMResponseEmail = require(  "../Services/sendPriorityDMResponseEmail");
const Razorpay = require("razorpay");
const crypto = require("crypto");

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

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
    booking.status = "completed";
    await booking.save();
  }
};

const createBooking = async (req, res) => {
  try {
    const {seeker,creator,service,date,time,duration,price,} = req.body;


    //  Fetch full details
    const seekerUser = await User.findById(seeker);
    const creatorUser = await User.findById(creator);
    const serviceData = await Service.findById(service);


    if(serviceData.category == 'product' || serviceData.category == 'priorityDm' ){
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

    const booking = await Booking.create({seeker,creator,service,
      date,
      time,
      duration,
      price,
      status: "confirmed",
    });

    // Set reminder time (30 min before)
    const [hours, minutes] = time.split(":").map(Number);
    const meetingTime = new Date(date);
    meetingTime.setHours(hours, minutes, 0, 0);
    booking.reminderTime = new Date(meetingTime.getTime() - 30 * 60 * 1000);
    await booking.save();

    //  CREATE MEETING LINK
    if (creatorUser?.meetingIntegrationType === "custom") {
      booking.meetingLink = creatorUser.meetingLink || "";
      await booking.save();
    } else {
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


const createBookingForDm= async (req, res) => {
  try {
    const {
      seeker,
      creator,
      service,
      price,
      question
    } = req.body;


    //  Fetch full details
    const seekerUser = await User.findById(seeker);
    const creatorUser = await User.findById(creator);
    const serviceData = await Service.findById(service);


    if(serviceData.category == 'product' || serviceData.category == 'priorityDm' ){
    if (!seeker || !creator || !service ) {
      return res.status(400).json({
        success: false,
        message: "Missing fields",
      });
    }   
  }
    else {
      if (!seeker || !creator || !service ) {
        return res.status(400).json({
          success: false,
          message: "Missing fields",
        });
      }
    }



    const booking = await Booking.create({
      seeker,
      creator,
      service,
      price,
      question,      
      status: "confirmed",
    });


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
      .populate("creator", "firstName lastName userImageUrl email whatsAppNumber")
      .populate("service", "title description price duration category");

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
      .populate("seeker", "firstName lastName userImageUrl email   whatsAppNumber")
      .populate("service",);

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

    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    let newStatus = "cancelled";

    if (booking.date && booking.time) {
      const [hours, minutes] = booking.time.split(":").map(Number);
      if (!isNaN(hours) && !isNaN(minutes)) {
        const endDate = new Date(booking.date);
        endDate.setHours(hours, minutes, 0, 0);
        const endTime = new Date(endDate.getTime() + (booking.duration || 0) * 60000);

        if (new Date() >= endTime) {
          newStatus = "completed";
        }
      }
    }

    booking.status = newStatus;
    await booking.save();

    res.status(200).json({
      success: true,
      message: newStatus === "completed" ? "Booking marked as completed" : "Booking cancelled",
      booking,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error cancelling booking",
    });
  }
};


const completeBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;

    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    if (booking.status === "completed") {
      return res.status(200).json({
        success: true,
        message: "Booking already completed",
        booking,
      });
    }

    if (!booking.date || !booking.time) {
      return res.status(400).json({
        success: false,
        message: "Booking has no scheduled time",
      });
    }

    const [hours, minutes] = booking.time.split(":").map(Number);
    if (isNaN(hours) || isNaN(minutes)) {
      return res.status(400).json({
        success: false,
        message: "Invalid booking time",
      });
    }

    const endDate = new Date(booking.date);
    endDate.setHours(hours, minutes, 0, 0);
    const endTime = new Date(endDate.getTime() + (booking.duration || 0) * 60000);

    if (new Date() < endTime) {
      return res.status(400).json({
        success: false,
        message: "Meeting time has not ended yet",
      });
    }

    booking.status = "completed";
    booking.meetingLink = "";
    booking.zoomMeetingId = "";
    await booking.save();

    res.status(200).json({
      success: true,
      message: "Booking marked as completed",
      booking,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error completing booking",
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



const updateBookingdm = async (req, res) => {

  try {

    const { id } = req.params;

    const { answer } = req.body;

    const booking = await Booking.findById(id)
      .populate("seeker")
      .populate("creator");

    if (!booking) {

      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });

    }

    // UPDATE BOOKING
    if (answer !== undefined) {

      booking.answer = answer;

      booking.status = "completed";

    }

    // SAVE
    await booking.save();

    // SEND EMAIL
    await sendPriorityDMResponseEmail({
      seeker: booking.seeker,
      creator: booking.creator,
      booking,
    });

    // RESPONSE
    res.status(200).json({
      success: true,
      message: "Query updated successfully",
      booking,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


const createBookingOrder = async (req, res) => {
  try {
    const {seeker,creator,service,date,time,
      duration,
      price,
    } = req.body;

    const serviceData = await Service.findById(service);

    if (!serviceData) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    if (serviceData.category === "product" ||serviceData.category === "priorityDm") {
      if (!seeker || !creator || !service) {
        return res.status(400).json({success: false,  message: "Missing fields", });
      }

    } else {
      if (!seeker ||!creator ||!service ||!date ||!time
      ) {
        return res.status(400).json({
          success: false,
          message: "Missing fields",
        });
      }

      const existing = await Booking.findOne({
        creator,
        date,
        time,
        status: { $ne: "cancelled" },
      });

      if (existing ) {
        return res.status(400).json({
          success: false,
          message: "Slot already booked",
        });
      }
    }

    const booking = await Booking.create({
      seeker,
      creator,
      service,
      date,
      time,
      duration,
      price: price, 
      status: "pending",
      payment: false,
    });

    if (date && time) {

      const [hours, minutes] =
        time.split(":").map(Number);

      const meetingTime = new Date(date);

      meetingTime.setHours(hours,minutes,0,0);

      booking.reminderTime = new Date(
        meetingTime.getTime() -
        30 * 60 * 1000
      );

      await booking.save();
    }


const totalPaid = price + 10;

const order =
  await razorpayInstance.orders.create({
    amount: totalPaid * 100,
    currency: "INR",
    receipt: booking._id.toString(),
  });

    booking.orderId = order.id;
    await booking.save();

    res.status(200).json({
      success: true,
      order,
      bookingId: booking._id,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


const verifyBookingPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    const body =
      razorpay_order_id +
      "|" +
      razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_SECRET_KEY
      ).update(body).digest("hex");

    if (expectedSignature !==razorpay_signature
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid Signature",
      });
    }

    const razorpayOrder =await razorpayInstance.orders.fetch(razorpay_order_id);

    let booking = await Booking.findById(razorpayOrder.receipt);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    // Prevent duplicate processing
    if (booking.payment) {
      return res.json({
        success: true,
        message: "Payment already verified",
        booking,
      });
    }


booking.payment = true;
booking.paymentId =razorpay_payment_id;
booking.orderId =razorpay_order_id;
booking.status ="confirmed";
const sellerPrice =booking.price;
const userPlatformFee =10;
const sellerCommission =Math.round(sellerPrice * 0.10);
const sellerEarning =sellerPrice - sellerCommission;
const totalPaid =sellerPrice + userPlatformFee;
const platformRevenue =userPlatformFee + sellerCommission;
booking.userPlatformFee =userPlatformFee;
booking.totalPaid =totalPaid;
booking.sellerCommission =sellerCommission;
booking.sellerEarning =sellerEarning;
booking.platformRevenue =platformRevenue;
booking.withdrawn = false;



    // Create reminder time
    if (booking.date && booking.time) {
      const [hours, minutes] =
        booking.time
          .split(":")
          .map(Number);
      const meetingTime =new Date(booking.date);
      meetingTime.setHours(hours,minutes,0,0);
      booking.reminderTime =
        new Date(meetingTime.getTime() -30 * 60 * 1000);
    }

    // Fetch related data
    const serviceData =
      await Service.findById(
        booking.service
      );

    const seekerUser =
      await User.findById(
        booking.seeker
      );

    const creatorUser =
      await User.findById(
        booking.creator
      );

    // Create Zoom meeting only for call bookings
    if (
      booking.date &&
      booking.time &&
      serviceData?.category !== "product" &&
      serviceData?.category !== "priorityDm"
    ) {

      try {

        const [hours, minutes] =
          booking.time.split(":");

        const startDate =
          new Date(booking.date);

        startDate.setHours(
          hours,
          minutes,
          0
        );

        const zoomMeeting =
          await createMeeting({
            topic: `Meeting: ${
              serviceData?.title ||
              "Consultation"
            }`,
            duration:
              booking.duration || 30,
            startTime:
              startDate.toISOString(),
          });

        booking.meetingLink =
          zoomMeeting.joinUrl;

        booking.zoomMeetingId =
          zoomMeeting.meetingId;

      } catch (zoomErr) {

        console.log(
          "Zoom meeting creation failed:",
          zoomErr.message
        );

      }
    }

    await booking.save();

    // Send confirmation email
    await sendBookingEmails({
      booking,
      service: serviceData,
      seeker: seekerUser,
      creator: creatorUser,
    });

    return res.status(200).json({
      success: true,
      message:
        "Payment verified successfully",
      booking,
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const getSellerEarnings = async (req, res) => {
  try {
    const sellerId = req.user.id;

    const bookings = await Booking.find({
      creator: sellerId,
      payment: true,
    })
      .populate("service", "title")
      .sort({ createdAt: -1 });

    // Total earnings (all completed bookings)
    const totalEarnings = bookings
      .filter((booking) => booking.status === "completed")
      .reduce((sum, booking) => sum + (booking.sellerEarning || 0),0);

    // Available balance
    const availableBalance = bookings
      .filter(
        (booking) =>
          booking.status === "completed" &&
          booking.withdrawn === false
      )
      .reduce((sum, booking) => sum + (booking.sellerEarning || 0),0);

    // // Withdrawal requested but not yet paid
    // const pendingWithdrawal = bookings
    //   .filter(
    //     (booking) =>
    //       booking.status === "completed" &&
    //       booking.withdrawn === true
    //   )
    //   .reduce(
    //     (sum, booking) => sum + (booking.sellerEarning || 0),
    //     0
    //   );

    //     pendingWithdrawal,

    // payment pending by admin
    const withdrawnAmount = bookings
      .filter(
        (booking) =>
          booking.status === "completed" &&
          booking.withdrawn === true
      )
      .reduce(
        (sum, booking) => sum + (booking.sellerEarning || 0),
        0
      );

    const totalBookings = bookings.length;

    const completedBookings = bookings.filter(
      (booking) => booking.status === "completed"
    ).length;

    const pendingBookings = bookings.filter(
      (booking) =>
        booking.status === "confirmed" ||
        booking.status === "pending"
    ).length;

    return res.status(200).json({
      success: true,
      stats: {
        totalEarnings,
        availableBalance,
        withdrawnAmount,
        totalBookings,
        completedBookings,
        pendingBookings,
      },
      bookings,
    });
  } catch (error) {
    console.log("Seller Earnings Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
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
  completeBooking,
  createBookingForDm,
  updateBookingdm,
  createBookingOrder,
  verifyBookingPayment,
  getSellerEarnings,
};


