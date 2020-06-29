const {
	REGISTRATION_SUCCESS,
	REGISTRATION_PENDING,
	REGISTRATION_FAILED,
	LOGIN_PENDING,
	LOGIN_FAILED,
	LOGIN_SUCCESS,
	LOG_OUT,
} = require("./auth.types");

export const registrationSuccess = (token) => ({
	type: REGISTRATION_SUCCESS,
	payload: token,
});

export const registrationFailed = (error) => ({
	type: REGISTRATION_FAILED,
	payload: error,
});

export const registrationPending = (user) => ({
	type: REGISTRATION_PENDING,
	payload: user,
});

export const loginPending = (loginData) => ({
	type: LOGIN_PENDING,
	payload: loginData,
});

export const loginSuccess = (token) => ({
	type: LOGIN_SUCCESS,
	payload: token,
});

export const loginFailed = (error) => ({
	type: LOGIN_FAILED,
	payload: error,
});

export const LogOut = () => ({
	type: LOG_OUT,
});
