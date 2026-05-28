
const nodeMail = require("../utility/nodeMail.js");

const sendPriorityDMResponseEmail = async ({
  seeker,
  creator,
  booking,
}) => {

  await nodeMail({
    to: seeker.email,

    subject: "Query response received 🎉",

    html: `
      <div style="
        max-width:600px;
        margin:auto;
        padding:40px 20px;
        font-family:Arial,sans-serif;
        color:#111;
      ">

        <h1 style="
          font-size:38px;
          font-weight:700;
          margin-bottom:40px;
        ">
          Query response received 🎉
        </h1>

        <p style="
          font-size:18px;
          margin-bottom:30px;
        ">
          Hi ${seeker.firstName} ${seeker.lastName || ""},
        </p>

        <p style="
          font-size:18px;
          line-height:32px;
          margin-bottom:30px;
        ">
          Thanks for sending out your query.
          Here is what I think about it 👇
        </p>

        <h3 style="
          font-size:24px;
          margin-bottom:20px;
        ">
          Response:
        </h3>

        <div style="
          font-size:18px;
          line-height:32px;
          margin-bottom:40px;
          white-space:pre-line;
        ">
          ${booking.answer}
        </div>

        <hr style="
          border:none;
          border-top:1px solid #ddd;
          margin:30px 0;
        " />

        <p style="
          font-size:20px;
          font-weight:600;
        ">
          ${creator.firstName}
        </p>

      </div>
    `,
  });

};

module.exports = sendPriorityDMResponseEmail;