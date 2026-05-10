// const multer = require("multer");
// const storage = multer.diskStorage({


//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
// const upload = multer({ storage });

// module.exports = upload;


const multer = require("multer");
const fs = require("fs");
const path = require("path");

// create uploads folder automatically
const uploadPath = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

module.exports = upload;