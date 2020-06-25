const { REGISTRATION } = require("./user.types");

const INITIAL_STATE = { token: "" };

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case REGISTRATION:
			return {
				...state,
				token: payload,
			};

		default:
			return state;
	}
};

export default userReducer;
