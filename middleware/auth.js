const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
	// Get the token from the header
	const token = req.header("x-auth-token");

	// check if no token

	if (!token) {
		res.status(401).json({ msg: "No token, authorization denied" });
	}
	// Verify Token

	try {
		const decoded = jwt.verify(token, config.get("SECRET"));

		req.user = decoded.user;
		next();
	} catch (err) {
		res.status(401).json({ msg: "Token is not valid" });
	}
};
