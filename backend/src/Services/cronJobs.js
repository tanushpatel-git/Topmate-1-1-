const cron = require("node-cron");
const Booking = require("../models/Booking.model");
const User = require("../models/user.model");
const Service = require("../models/userService.model");
const sendReminderEmail = require("./sendReminderEmails");

const startReminderCron = () => {
  // Every minute check for bookings today that need reminders
  cron.schedule("* * * * *", async () => {
    try {
      const now = new Date();
      const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const endOfToday = new Date(startOfToday.getTime() + 86400000);

      // Only send reminders after 8:00 AM
      const currentHour = now.getHours();
      if (currentHour < 8) return;

      const bookings = await Booking.find({
        date: { $gte: startOfToday, $lt: endOfToday },
        reminderSent: false,
        status: { $in: ["confirmed"] },
      });

      for (const booking of bookings) {
        const [hours, minutes] = booking.time.split(":").map(Number);
        const meetingTime = new Date(booking.date);
        meetingTime.setHours(hours, minutes, 0);

        // Don't send if the meeting has already passed
        if (now >= meetingTime) continue;

        const seeker = await User.findById(booking.seeker);
        const creator = await User.findById(booking.creator);
        const service = await Service.findById(booking.service);

        if (!seeker || !creator || !service) continue;

        await sendReminderEmail({ booking, service, seeker, creator });

        booking.reminderSent = true;
        await booking.save();
      }
    } catch (error) {
      console.error("Reminder cron error:", error);
    }
  });

  console.log("Reminder cron job started (checks every minute)");
};

module.exports = startReminderCron;
