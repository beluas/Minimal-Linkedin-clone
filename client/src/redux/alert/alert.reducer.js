const { SUCCESS, WARNING, HIDE } = require("./alert.types");

const INITIAL_STATE = {
	show: false,
	status: true,
};

const alertReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case SUCCESS:
			return {
				...state,
				show: true,
				status: true,
			};

		case WARNING:
			return {
				...state,
				show: true,
				status: false,
			};

		case HIDE:
			return {
				...state,
				show: false,
				status: true,
			};

		default:
			return state;
	}
};

export default alertReducer;
