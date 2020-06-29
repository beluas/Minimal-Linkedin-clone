const { SET_ALERT, REMOVE_ALERT } = require("./alert.types");

const INITIAL_STATE = [];

const alertReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_ALERT:
			return [...state, payload]; //Payload has msg, id and status

		case REMOVE_ALERT:
			return state.filter((alert) => alert.id !== payload);

		default:
			return state;
	}
};

export default alertReducer;
