const axios = require("axios");

const ACCOUNT_ID = process.env.ZOOM_ACCOUNT_ID;
const CLIENT_ID = process.env.ZOOM_CLIENT_ID;
const CLIENT_SECRET = process.env.ZOOM_CLIENT_SECRET;

if (!ACCOUNT_ID || !CLIENT_ID || !CLIENT_SECRET) {
  throw new Error("Missing Zoom credentials");
}

let cachedToken = null;
let tokenExpiry = null;

async function getAccessToken() {
  if (cachedToken && tokenExpiry && Date.now() < tokenExpiry) {
    return cachedToken;
  }

  const response = await axios.post(
    `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${ACCOUNT_ID}`,
    {},
    {
      auth: {
        username: CLIENT_ID,
        password: CLIENT_SECRET,
      },
    }
  );

  cachedToken = response.data.access_token;
  tokenExpiry = Date.now() + (response.data.expires_in - 60) * 1000;

  return cachedToken;
}

async function createMeeting({ topic, duration, startTime }) {
  const token = await getAccessToken();

  const res = await axios.post(
    "https://api.zoom.us/v2/users/me/meetings",
    {
      topic,
      type: 2,
      duration,
      start_time: startTime,
      timezone: "Asia/Kolkata",
      settings: {
        host_video: true,
        participant_video: true,
        join_before_host: true,
        mute_upon_entry: false,
        waiting_room: false,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return {
    meetingId: res.data.id,
    joinUrl: res.data.join_url,
    startUrl: res.data.start_url,
    password: res.data.password,
  };
}

module.exports = { createMeeting };
