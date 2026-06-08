const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const userRouter = require("./routes/user.route.js");
const serviceRouter = require("./routes/Service.route.js");
const bookingRoutes = require("./routes/Booking.routes.js");
const analyticsDetails = require("./routes/analyticsDetails.routes.js");
const withdrawRouter = require("./routes/Withdraw.routes.js");

const app = express();


app.use(cookieParser()); 
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:"http://localhost:5175",
    credentials:true
}))
app.use(cookieParser())

morgan.token("status-colored", (req, res) => {
    const status = res.statusCode;
    const color =
        status >= 500 ? 31 :   // red
        status >= 400 ? 33 :   // yellow
        status >= 300 ? 36 :   // cyan
        status >= 200 ? 32 :   // green
        0;
    return `\x1b[${color}m${status}\x1b[0m`;
});

app.use(morgan("\x1b[35m[API]\x1b[0m :method :url :status-colored :response-time ms"))

//routes middleware

app.use("/api/user",userRouter);
app.use("/api/service",serviceRouter);
app.use("/api/booking",bookingRoutes);
app.use("/api/dashboardAnalytics", analyticsDetails )
app.use("/api", withdrawRouter);



module.exports = app; 