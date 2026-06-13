const Booking = require("../models/Booking.model");
const mongoose = require("mongoose");

const getDataOfBooking = async (req, res) => {
    try {
        const { type } = req.params;
        const userId = new mongoose.Types.ObjectId(req.user.id);

        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();

        let startDate, endDate, format;

        if (type.toLowerCase() === "week") {
            const dayOfWeek = now.getDay();
            startDate = new Date(now);
            startDate.setDate(startDate.getDate() - dayOfWeek);
            startDate.setHours(0, 0, 0, 0);
            endDate = new Date(startDate);
            endDate.setDate(endDate.getDate() + 7);
            format = "%Y-%m-%d";
        } else if (type.toLowerCase() === "month") {
            startDate = new Date(year, month, 1);
            endDate = new Date(year, month + 1, 1);
            format = "%Y-%m-%d";
        } else {
            startDate = new Date(year, 0, 1);
            endDate = new Date(year + 1, 0, 1);
            format = "%Y-%m";
        }

 
        const agg = await Booking.aggregate([
            { $match: { creator: userId, date: { $gte: startDate, $lt: endDate } } },
            { $group: { _id: { $dateToString: { format, date: "$date" } }, count: { $sum: 1 } } },
            { $sort: { _id: 1 } },
        ]);

        const counts = Object.fromEntries(agg.map((d) => [d._id, d.count]));
        const labels = [];
        const data = [];

        if (format === "%Y-%m-%d") {
            let cursor = new Date(startDate);
            while (cursor < endDate) {
                const key = cursor.toISOString().split("T")[0];
                const month = String(cursor.getMonth() + 1).padStart(2, "0");
                const day = String(cursor.getDate()).padStart(2, "0");
                labels.push(`${month}/${day}`);
                data.push(counts[key] || 0);
                cursor.setDate(cursor.getDate() + 1);
            }
        } else {
            for (let m = 0; m < 12; m++) {
                const key = `${year}-${String(m + 1).padStart(2, "0")}`;
                const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                labels.push(months[m]);
                data.push(counts[key] || 0);
            }
        }

        const total = data.reduce((sum, c) => sum + c, 0);

        return res.json({ success: true, message: "Success", data: { labels, data, total } });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}; 

module.exports = { getDataOfBooking };
