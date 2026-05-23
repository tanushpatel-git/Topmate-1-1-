const cron = require("node-cron");
const Booking = require("../models/Booking.model");
const sendReminderEmail = require("./sendReminderEmails");

const CONCURRENCY_LIMIT = 5;

const startReminderCron = () => {
  cron.schedule("*/10 * * * *", async () => {
    try {
      const now = new Date();
      const windowStart = new Date(now.getTime() - 30 * 1000);
      const windowEnd = new Date(now.getTime() + 30 * 1000);

      const bookings = await Booking.find({
        reminderTime: { $gte: windowStart, $lte: windowEnd },
        reminderSent: false,
        status: "confirmed",
      })
        .populate("seeker creator service")
        .lean();

      const bookingIds = [];

      const runBatch = async (batch) => {
        await Promise.all(
          batch.map(async (booking) => {
            const { seeker, creator, service } = booking;
            if (!seeker || !creator || !service) return;

            await sendReminderEmail({ booking, service, seeker, creator });
            bookingIds.push(booking._id);
          })
        );
      };

      for (let i = 0; i < bookings.length; i += CONCURRENCY_LIMIT) {
        await runBatch(bookings.slice(i, i + CONCURRENCY_LIMIT));
      }

      if (bookingIds.length > 0) {
        await Booking.updateMany(
          { _id: { $in: bookingIds } },
          { $set: { reminderSent: true } }
        );
      }

      console.log(`Reminders sent for ${bookingIds.length} booking(s)`);
    } catch (error) {
      console.error("Reminder cron error:", error);
    }
  });

  console.log("Optimized reminder cron started");
};

module.exports = startReminderCron;