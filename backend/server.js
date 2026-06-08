require("dotenv/config");

const app = require("./src/app.js");
const mongoDB = require("./src/utility/mongoDB.js");

const {
  connectCloudinary,
} = require("./src/utility/CloudInary.js");
const startReminderCron = require("./src/Services/cronJobs");

const port = process.env.PORT || 8001;

app.listen(port, async () => {
  try {
    await mongoDB();
    connectCloudinary();
    startReminderCron();
    console.log(`Server is running on port ${port}`);

  } catch (error) {
    console.log(error);
  }
});