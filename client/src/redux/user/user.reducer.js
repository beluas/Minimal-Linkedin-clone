const { REGISTRATION, AUTH } = require("./user.types");

const INITIAL_STATE = { token: "", auth: false };

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case REGISTRATION:
			return {
				...state,
				token: payload,
			};

		case AUTH:
			return {
				...state,
				auth: true,
			};

		default:
			return state;
	}
};

export default userReducer;
