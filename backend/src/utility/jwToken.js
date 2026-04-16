const jwt = require("jsonwebtoken");

const genratedToken = (id,role) => {
    return jwt.sign({ id,role }, process.env.JWT_SECRET, { expiresIn: "1d" });
}

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {genratedToken,verifyToken}