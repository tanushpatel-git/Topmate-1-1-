
const express = require("express");
const {
  createBooking,
  createBookingForDm,
  getSeekerBookings,
  getCreatorBookings,
  getBookingById,
  cancelBooking,
  confirmBooking,
  completeBooking,
  updateBookingdm,
  createBookingOrder,
  verifyBookingPayment,
} = require("../controllers/Booking.controler");

const router = express.Router();

router.post("/create",createBooking);
router.post("/create/dm",createBookingForDm);
router.get("/seeker/:seekerId", getSeekerBookings);
router.get("/creator/:creatorId", getCreatorBookings);
router.get("/:bookingId", getBookingById);
router.put("/cancel/:bookingId", cancelBooking);
router.put("/confirm/:bookingId", confirmBooking);
router.put("/complete/:bookingId", completeBooking);
router.put("/update/:id", updateBookingdm);
// Place order with Razorpay
router.post("/razorpay", createBookingOrder);  
router.post("/verifyRazorpay", verifyBookingPayment);



module.exports = router;

