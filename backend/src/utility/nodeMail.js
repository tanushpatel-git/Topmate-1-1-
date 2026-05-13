const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODE_HEADEMAIL,
    pass: process.env.NODE_HEADEMAIL_PASS,
  },

});

async function nodeMail({ to, subject, html, attachments = [] }) {
  try {
    await transporter.sendMail({
      from: process.env.NODE_HEADEMAIL,
      to,
      subject,
      html,
      attachments,
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

module.exports = nodeMail;