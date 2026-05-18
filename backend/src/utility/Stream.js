require("dotenv").config();

const { StreamChat } = require("stream-chat");
const { StreamClient } = require("@stream-io/node-sdk");

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET;

if (!apiKey || !apiSecret) {
  throw new Error("Missing Stream credentials");
}

const streamClient = new StreamClient(apiKey, apiSecret);

const chatClient = StreamChat.getInstance(
  apiKey,
  apiSecret
);

module.exports = {
  streamClient,
  chatClient,
};