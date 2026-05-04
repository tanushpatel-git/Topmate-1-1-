
const express = require("express");
const {
  createBooking,
  getSeekerBookings,
  getCreatorBookings,
  cancelBooking,
  confirmBooking,
} = require("../controllers/Booking.controler");

const router = express.Router();

router.post("/create",createBooking);
router.get("/seeker/:seekerId", getSeekerBookings);
router.get("/creator/:creatorId", getCreatorBookings);
router.put("/cancel/:bookingId", cancelBooking);
router.put("/confirm/:bookingId", confirmBooking);

module.exports = router;

