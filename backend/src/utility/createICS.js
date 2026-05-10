const createICS = ({ booking, service, seeker, creator }) => {

  const start = new Date(booking.date);
  const end = new Date(start.getTime() + booking.duration * 60000);

  const formatDate = (date) =>
    date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  return `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//YourApp//EN
BEGIN:VEVENT
UID:${booking._id}
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(start)}
DTEND:${formatDate(end)}
SUMMARY:${service.title}
DESCRIPTION:1:1 Call between ${creator.firstName} and ${seeker.firstName}
LOCATION:${booking.meetingLink || "Online"}
END:VEVENT
END:VCALENDAR
`;
};


module.exports = createICS;
