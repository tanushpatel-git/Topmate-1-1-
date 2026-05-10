const nodeMail = require("../utility/nodeMail.js");
const createICS = require("../utility/createICS.js");

const sendBookingEmails = async ({
  booking,
  service,
  seeker,
  creator,
}) => {

  const icsContent = createICS({ booking, service, seeker, creator });

  //  Email to Seeker
  await nodeMail({
    to: seeker.email,
    subject: "Booking Confirmed",
    html: `
      <h2>Booking Confirmed</h2>
      <p><b>Service:</b> ${service.title}</p>
      <p><b>Date:</b> ${booking.date}</p>
      <p><b>Time:</b> ${booking.time}</p>
      <p><b>Creator:</b> ${creator.firstName}</p>
    `,
    attachments: [
      {
        filename: "invite.ics",
        content: icsContent,
      },
    ],
  });

  //  Email to Creator
  await nodeMail({
    to: creator.email,
    subject: "New Booking Received",
    html: `
      <h2>New Booking</h2>
      <p><b>Seeker:</b> ${seeker.firstName}</p>
      <p><b>Email:</b> ${seeker.email}</p>
      <p><b>Phone:</b> ${seeker.phone}</p>
      <p><b>Date:</b> ${booking.date}</p>
      <p><b>Time:</b> ${booking.time}</p>
    `,
    attachments: [
      {
        filename: "invite.ics",
        content: icsContent,
      },
    ],
  });
};

module.exports = sendBookingEmails;