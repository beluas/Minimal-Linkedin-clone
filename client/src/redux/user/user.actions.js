const { REGISTRATION, AUTH } = require("./user.types");

export const getToken = (token) => ({
	type: REGISTRATION,
	payload: token,
});

export const loginCheck = (token) => ({
	type: AUTH,
	payload: token,
});
