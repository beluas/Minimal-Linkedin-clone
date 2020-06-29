const {
	REGISTRATION_SUCCESS,
	REGISTRATION_FAILED,
	REGISTRATION_PENDING,
	LOGIN_PENDING,
	LOGIN_FAILED,
	LOGIN_SUCCESS,
	LOG_OUT,
} = require("./auth.types");

const INITIAL_STATE = { token: "", userTempData: null };

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case REGISTRATION_SUCCESS:
			return {
				...state,
				token: payload,
			};

		case REGISTRATION_FAILED:
			return {
				...state,
				error: payload,
			};
		case REGISTRATION_PENDING:
			return {
				...state,
				userTempData: payload,
			};

		case LOGIN_PENDING:
			return {
				...state,
				loginData: payload,
			};

		case LOGIN_SUCCESS:
			return {
				...state,
				token: payload,
			};

		case LOGIN_FAILED:
			return {
				...state,
				error: "Login Failed",
			};

		case LOG_OUT:
			return {
				...state,
				token: "",
			};

		default:
			return state;
	}
};

export default userReducer;
