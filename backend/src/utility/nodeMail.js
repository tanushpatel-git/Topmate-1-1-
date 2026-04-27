const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODE_HEADEMAIL,
    pass: process.env.NODE_HEADEMAIL_PASS,
  },
});


async function nodeMail(toMail, message) {
    try {
    await transporter.sendMail({
      from:process.env.NODE_HEADEMAIL,
      to: toMail,
      subject:"Topmate",
      html:message,
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

module.exports = nodeMail;