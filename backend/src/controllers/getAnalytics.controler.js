const Booking = require("../models/Booking.model");

const getDataOfBooking = async (req, res) => {
    try {
        const { type } = req.params;
        const userId = req.user._id;

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
        const result = [];

        if (format === "%Y-%m-%d") {
            let cursor = new Date(startDate);
            while (cursor < endDate) {
                const key = cursor.toISOString().split("T")[0];
                result.push(counts[key] || 0);
                cursor.setDate(cursor.getDate() + 1);
            }
        } else {
            for (let m = 0; m < 12; m++) {
                const key = `${year}-${String(m + 1).padStart(2, "0")}`;
                result.push(counts[key] || 0);
            }
        }

        return res.json({ message: "Success", data: result });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { getDataOfBooking };
