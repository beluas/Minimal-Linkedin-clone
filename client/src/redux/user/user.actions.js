const { REGISTRATION } = require("./user.types");

export const registerUser = (token) => ({
	type: REGISTRATION,
	payload: token,
});
