const nodeMail = require("../utility/nodeMail.js");

const sendReminderEmail = async ({ booking, service, seeker, creator }) => {
  const dateObj = new Date(booking.date);
  const formattedDate = dateObj.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  await nodeMail({
    to: seeker.email,
    subject: "Reminder: Your session is today!",
    html: `
      <h2>Session Reminder</h2>
      <p>Hi ${seeker.firstName},</p>
      <p>This is a reminder that your session is scheduled for <b>today</b>!</p>
      <p><b>Service:</b> ${service.title}</p>
      <p><b>Date:</b> ${formattedDate}</p>
      <p><b>Time:</b> ${booking.time}</p>
      <p><b>Creator:</b> ${creator.firstName}</p>
      ${booking.meetingLink ? `<p><b>Join Link:</b> <a href="${booking.meetingLink}">${booking.meetingLink}</a></p>` : ""}
      <br/>
      <p>We hope you have a great session!</p>
    `,
  });

  await nodeMail({
    to: creator.email,
    subject: "Reminder: You have a session today!",
    html: `
      <h2>Session Reminder</h2>
      <p>Hi ${creator.firstName},</p>
      <p>This is a reminder that you have a session scheduled for <b>today</b>!</p>
      <p><b>Seeker:</b> ${seeker.firstName}</p>
      <p><b>Email:</b> ${seeker.email}</p>
      <p><b>Phone:</b> ${seeker.phone}</p>
      <p><b>Service:</b> ${service.title}</p>
      <p><b>Date:</b> ${formattedDate}</p>
      <p><b>Time:</b> ${booking.time}</p>
      ${booking.meetingLink ? `<p><b>Join Link:</b> <a href="${booking.meetingLink}">${booking.meetingLink}</a></p>` : ""}
      <br/>
      <p>Get ready for your session!</p>
    `,
  });
};

module.exports = sendReminderEmail;
