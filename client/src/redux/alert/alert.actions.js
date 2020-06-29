import { SET_ALERT, REMOVE_ALERT } from "./alert.types";
import { v4 as uuid } from "uuid";

export const setAlert = (msg, alertType) => ({
	type: SET_ALERT,
	payload: {
		id: uuid(),
		msg,
		alertType,
	},
});

export const removeAlert = (id) => ({
	type: REMOVE_ALERT,
	payload: id,
});
