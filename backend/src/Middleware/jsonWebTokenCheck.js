const { verifyToken } = require("../utility/jwToken");

const auth = async (req, res, next) => {

    try {

        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Login first",
            });
        }

        const decoded = verifyToken(token);

        if (!decoded) {
            return res.status(401).json({
                success: false,
                message: "Invalid token",
            });
        }

        req.user = {
            id: decoded.id,
            email: decoded.email,
            name: decoded.name,
            image: decoded.image,
        };

        next();

    } catch (error) {

        console.log("JWT Middleware Error:", error);

        return res.status(401).json({
            success: false,
            message: "Unauthorized",
        });

    }

};

module.exports = auth;