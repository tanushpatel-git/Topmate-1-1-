const nodeMail = require("../utility/nodeMail.js");
const createICS = require("../utility/createICS.js");

const sendBookingEmails = async ({
  booking,
  service,
  seeker,
  creator,
}) => {

  const icsContent = createICS({
    booking,
    service,
    seeker,
    creator,
  });

  // FORMAT DATE
  const formattedDate = new Date(
    booking.date
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // FORMAT TIME
  let formattedTime = "";

  // no time
  if (!booking.time) {
    formattedTime = "Not Available";
  }

  // OLD timestamp format
  else if (!isNaN(Number(booking.time))) {

    formattedTime = new Date(
      Number(booking.time)
    ).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

  }

  // NEW normal string format
  else {
    formattedTime = booking.time;
  }

  // EMAIL TO SEEKER
  await nodeMail({
    to: seeker.email,
    subject: "Booking Confirmed",
    html: `
      <h2>Booking Confirmed</h2>

      <p><b>Service:</b> ${service.title}</p>

      <p><b>Date:</b> ${formattedDate}</p>

      <p><b>Time:</b> ${formattedTime}</p>

      <p><b>Creator:</b> ${creator.firstName}</p>
    `,

    attachments: [
      {
        filename: "invite.ics",
        content: icsContent,
      },
    ],
  });

  // EMAIL TO CREATOR
  await nodeMail({
    to: creator.email,
    subject: "New Booking Received",

    html: `
      <h2>New Booking</h2>

      <p><b>Seeker:</b> ${seeker.firstName}</p>

      <p><b>Email:</b> ${seeker.email}</p>

      <p><b>Phone:</b> ${seeker.whatsAppNumber}</p>

      <p><b>Date:</b> ${formattedDate}</p>

      <p><b>Time:</b> ${formattedTime}</p>
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