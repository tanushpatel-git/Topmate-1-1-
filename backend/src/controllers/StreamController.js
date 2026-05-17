const { chatClient } = require("../utility/Stream");

const getStreamToken = async (req, res) => {
  try {
    const userId = req.user.id.toString();

    // create stream token
    const token = chatClient.createToken(userId);

    // upsert user in stream
    await chatClient.upsertUser({
      id: userId,
      name: req.user.name,
      image: req.user.image || "",
    });

    res.status(200).json({
      success: true,
      token,
      apiKey: process.env.STREAM_API_KEY,
      userId,
      userName: req.user.name,
      userImage: req.user.image || "",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to generate stream token",
    });
  }
};

module.exports = {
  getStreamToken,
};